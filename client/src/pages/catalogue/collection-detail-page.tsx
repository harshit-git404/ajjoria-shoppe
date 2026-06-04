import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

import { ProductCard } from '@/components/catalogue/product-card';
import { EditorialHero } from '@/components/editorial/editorial-hero';
import { LuxuryDivider } from '@/components/editorial/luxury-divider';
import { getCollectionBySlug } from '@/data/collections';
import { getProductsByCollectionSlug } from '@/data/products';
import { trackCatalogueEvent } from '@/features/analytics/analytics';

export function CollectionDetailPage() {
  const { slug } = useParams();
  const collection = slug ? getCollectionBySlug(slug) : undefined;

  useEffect(() => {
    if (collection) {
      trackCatalogueEvent('collection_opened', { collectionSlug: collection.slug, source: 'route' });
    }
  }, [collection]);

  if (!slug) {
    return <Navigate to="/collections" replace />;
  }

  if (!collection) {
    return <Navigate to="/collections" replace />;
  }

  const collectionProducts = getProductsByCollectionSlug(collection.slug);

  return (
    <div className="bg-background">
      <EditorialHero
        image={collection.heroImage}
        eyebrow={collection.eyebrow}
        title={collection.name}
        description={collection.description}
        meta={
          <Link to="/collections" className="link-underline text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            Collections
          </Link>
        }
      />

      <section className="container-luxury grid gap-10 py-20 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-3">
          <p className="eyebrow text-secondary">Collection narrative</p>
          <h2 className="font-display text-4xl leading-tight text-primary">Designed for tone before transaction.</h2>
        </div>
        <div className="space-y-6">
          <p className="text-lg leading-9 text-muted-foreground">{collection.narrative}</p>
          <p className="text-sm uppercase tracking-[0.18em] text-primary/70">{collection.tone}</p>
        </div>
      </section>

      <section className="container-luxury space-y-8 pb-24">
        <LuxuryDivider />
        <div className="flex flex-col justify-between gap-4 pt-2 md:flex-row md:items-end">
          <div className="space-y-2">
            <p className="eyebrow text-secondary">Curated pieces</p>
            <h2 className="font-display text-4xl leading-tight text-primary">Selected for this gifting story.</h2>
          </div>
          <span className="text-sm uppercase tracking-[0.16em] text-muted-foreground">{collectionProducts.length} piece edit</span>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {collectionProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
