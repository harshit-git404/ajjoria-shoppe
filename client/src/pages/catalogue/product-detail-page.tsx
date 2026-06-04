import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

import { InquiryButton } from '@/components/catalogue/inquiry-button';
import { ProductCard } from '@/components/catalogue/product-card';
import { LuxuryDivider } from '@/components/editorial/luxury-divider';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { getCollectionBySlug } from '@/data/collections';
import { getProductBySlug, getProductsByCollectionSlug } from '@/data/products';
import { trackCatalogueEvent } from '@/features/analytics/analytics';

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;

  useEffect(() => {
    if (product) {
      trackCatalogueEvent('product_viewed', { productSlug: product.slug, collectionSlug: product.collection, source: 'route' });
    }
  }, [product]);

  if (!slug) {
    return <Navigate to="/collections" replace />;
  }

  if (!product) {
    return <Navigate to="/collections" replace />;
  }

  const collection = getCollectionBySlug(product.collection);
  const relatedProducts = getProductsByCollectionSlug(product.collection).filter((entry) => entry.slug !== product.slug);
  const heroImage = product.images[0];
  const secondaryImage = product.images[1] ?? heroImage;

  return (
    <div className="bg-background">
      <section className="container-luxury grid gap-10 pb-16 pt-12 md:pb-24 md:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="grid gap-4"
        >
          <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-[0_30px_90px_rgba(19,33,29,0.08)]">
            <ResponsiveImage image={heroImage} eager className="h-[520px] w-full object-cover md:h-[680px]" sizes="(min-width: 1024px) 58vw, 100vw" />
          </div>
          <ResponsiveImage image={secondaryImage} className="h-48 w-full rounded-[1.25rem] object-cover md:hidden" sizes="100vw" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
          className="space-y-8 lg:sticky lg:top-28"
        >
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em]">
              <Link to={collection ? `/collections/${collection.slug}` : '/collections'} className="link-underline text-secondary">
                {collection?.name ?? 'Ajjoria catalogue'}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">{product.category}</span>
            </div>
            <h1 className="section-heading text-primary">{product.name}</h1>
            <div className="space-y-3">
              <p className="text-xl leading-8 text-primary/78">{product.subtitle}</p>
              <p className="text-base leading-8 text-muted-foreground">{product.longDescription}</p>
            </div>
          </div>

          <div className="grid gap-4 border-y border-border py-6 md:grid-cols-2">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.16em] text-secondary">MOQ</p>
              <p className="text-sm leading-7 text-primary">{product.MOQ}</p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.16em] text-secondary">Customization</p>
              <p className="text-sm leading-7 text-primary">{product.customizable ? 'Available' : 'Curated format'}</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-secondary">Materials</p>
              <div className="grid gap-3">
                {product.materials.map((material) => (
                  <p key={material} className="border-b border-border/70 pb-3 text-sm leading-7 text-muted-foreground last:border-b-0">
                    {material}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-secondary">Details</p>
              <div className="grid gap-3">
                {product.features.map((feature) => (
                  <p key={feature} className="border-b border-border/70 pb-3 text-sm leading-7 text-muted-foreground last:border-b-0">
                    {feature}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-secondary">Customization support</p>
              <p className="text-sm leading-7 text-muted-foreground">{product.customizationNote}</p>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-secondary">Sustainability</p>
              <p className="text-sm leading-7 text-muted-foreground">{product.sustainability}</p>
            </div>
          </div>

          <InquiryButton product={product} />
        </motion.div>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="container-luxury space-y-8 py-20 md:py-24">
          <LuxuryDivider />
          <div className="max-w-2xl space-y-3 pt-2">
            <p className="eyebrow text-secondary">Related pieces</p>
            <h2 className="font-display text-4xl leading-tight text-primary">Continue within the same curated story.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((relatedProduct, index) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
