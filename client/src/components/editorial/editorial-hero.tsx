import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { ResponsiveImage } from '@/components/media/responsive-image';
import type { CatalogueImage } from '@/shared/types/catalogue';

interface EditorialHeroProps {
  image: CatalogueImage;
  eyebrow?: string;
  title: string;
  description?: string;
  meta?: ReactNode;
}

export function EditorialHero({ description, eyebrow, image, meta, title }: EditorialHeroProps) {
  return (
    <section className="relative min-h-[72vh] overflow-hidden">
      <ResponsiveImage image={image} eager className="absolute inset-0 h-full w-full object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/84 via-primary/36 to-transparent" />
      <div className="container-luxury relative flex min-h-[72vh] items-end pb-14 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl space-y-5 text-white"
        >
          {meta}
          {eyebrow ? <p className="eyebrow text-[#f3d7a8]">{eyebrow}</p> : null}
          <h1 className="font-display text-5xl leading-tight md:text-7xl">{title}</h1>
          {description ? <p className="max-w-2xl text-base leading-8 text-white/82">{description}</p> : null}
        </motion.div>
      </div>
    </section>
  );
}
