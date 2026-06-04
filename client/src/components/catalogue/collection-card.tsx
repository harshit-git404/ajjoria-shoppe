import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { ResponsiveImage } from '@/components/media/responsive-image';
import { trackCatalogueEvent } from '@/features/analytics/analytics';
import type { Collection } from '@/shared/types/catalogue';

export function CollectionCard({ collection, index }: { collection: Collection; index: number }) {
  const isFeatureCard = index === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.08, 0.24), ease: 'easeOut' }}
      className={isFeatureCard ? 'group lg:col-span-2' : 'group'}
    >
      <Link
        to={`/collections/${collection.slug}`}
        onClick={() => trackCatalogueEvent('collection_opened', { collectionSlug: collection.slug })}
        className="block"
      >
        <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-white/55 shadow-[0_24px_70px_rgba(19,33,29,0.06)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_30px_90px_rgba(19,33,29,0.1)]">
          <div className={isFeatureCard ? 'grid lg:grid-cols-[1.2fr_0.8fr]' : ''}>
            <div className="overflow-hidden">
              <ResponsiveImage
                image={collection.image}
                className={`w-full object-cover transition duration-700 group-hover:scale-[1.03] ${
                  isFeatureCard ? 'h-[420px] lg:h-full' : 'h-[360px]'
                }`}
                sizes={isFeatureCard ? '(min-width: 1024px) 60vw, 100vw' : '(min-width: 1024px) 50vw, 100vw'}
              />
            </div>
            <div className="flex flex-col justify-between gap-10 p-7 md:p-9">
              <div className="space-y-5">
                <p className="eyebrow text-secondary">{collection.eyebrow}</p>
                <div className="space-y-3">
                  <h2 className="font-display text-3xl leading-tight text-primary md:text-4xl">{collection.name}</h2>
                  <p className="max-w-2xl text-sm leading-7 text-muted-foreground">{collection.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{collection.tone}</span>
                <span className="material-symbols-outlined text-[22px] text-secondary transition duration-500 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
