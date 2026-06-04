import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { ResponsiveImage } from '@/components/media/responsive-image';
import { trackCatalogueEvent } from '@/features/analytics/analytics';
import type { Product } from '@/shared/types/catalogue';

export function ProductCard({ index = 0, product }: { index?: number; product: Product }) {
  const image = product.images[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.18), ease: 'easeOut' }}
      className="group"
    >
      <Link
        to={`/product/${product.slug}`}
        onClick={() => trackCatalogueEvent('product_viewed', { productSlug: product.slug, source: 'product_card' })}
        className="block"
      >
        <div className="overflow-hidden rounded-[1.5rem] border border-border/80 bg-white/55 shadow-[0_18px_55px_rgba(19,33,29,0.05)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_24px_70px_rgba(19,33,29,0.09)]">
          <div className="overflow-hidden">
            <ResponsiveImage
              image={image}
              className="h-80 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="space-y-5 p-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.16em] text-secondary">{product.MOQ}</p>
              <h3 className="font-display text-2xl leading-tight text-primary">{product.name}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{product.subtitle}</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-primary">{product.priceLabel}</span>
              <span className="material-symbols-outlined text-[20px] text-secondary transition duration-500 group-hover:translate-x-1">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
