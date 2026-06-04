import { CollectionCard } from '@/components/catalogue/collection-card';
import { SectionHeader } from '@/components/editorial/section-header';
import { collections } from '@/data/collections';

export function CollectionsPage() {
  return (
    <div className="bg-background">
      <section className="container-luxury pb-14 pt-16 md:pb-20 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader eyebrow="Ajjoria Catalogue" title="Editorial gifting collections for thoughtful business moments." />
          <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:ml-auto">
            Explore refined gifting stories shaped for leadership, teams, clients, culture, and conscious brand gestures. Each collection is designed as a brief-ready starting point, not a checkout aisle.
          </p>
        </div>
      </section>

      <section className="container-luxury pb-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {collections.map((collection, index) => (
            <CollectionCard key={collection.id} collection={collection} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
