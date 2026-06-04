import type { CatalogueImage } from '@/shared/types/catalogue';

interface ResponsiveImageProps {
  image: CatalogueImage;
  className?: string;
  eager?: boolean;
  sizes?: string;
}

export function ResponsiveImage({ className, eager = false, image, sizes = '100vw' }: ResponsiveImageProps) {
  return (
    <picture>
      {image.webpSrc ? <source srcSet={image.webpSrc} sizes={sizes} type="image/webp" /> : null}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={className}
      />
    </picture>
  );
}
