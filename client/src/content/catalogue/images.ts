import type { CatalogueImage } from '@/shared/types/catalogue';

export function catalogueImage(url: string, alt: string): CatalogueImage {
  return {
    src: `${url}?auto=format&fit=crop&w=1500&q=82`,
    webpSrc: `${url}?auto=format&fit=crop&w=1500&q=82&fm=webp`,
    alt,
    width: 1500,
    height: 1000,
  };
}

export function catalogueThumb(url: string, alt: string): CatalogueImage {
  return {
    src: `${url}?auto=format&fit=crop&w=900&q=80`,
    webpSrc: `${url}?auto=format&fit=crop&w=900&q=80&fm=webp`,
    alt,
    width: 900,
    height: 1100,
  };
}
