export interface CatalogueImage {
  src: string;
  webpSrc?: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  collection: string;
  shortDescription: string;
  longDescription: string;
  materials: string[];
  features: string[];
  MOQ: string;
  customizable: boolean;
  customizationNote: string;
  tags: string[];
  featured: boolean;
  sustainability: string;
  images: CatalogueImage[];
  priceLabel: string;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  description: string;
  narrative: string;
  tone: string;
  image: CatalogueImage;
  heroImage: CatalogueImage;
  productSlugs: string[];
  eyebrow: string;
}

export interface InquiryItem {
  productSlug: string;
  quantity: number;
  note?: string;
}
