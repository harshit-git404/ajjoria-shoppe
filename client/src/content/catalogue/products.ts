import { catalogueImage, catalogueThumb } from '@/content/catalogue/images';
import type { Product } from '@/shared/types/catalogue';

export const products: Product[] = [
  {
    id: 'product-heritage-tea-cabinet',
    slug: 'heritage-tea-cabinet',
    name: 'Heritage Tea Cabinet',
    subtitle: 'Ceremonial gifting for important conversations.',
    category: 'Executive gifting',
    collection: 'executive-gifting',
    shortDescription:
      'A composed tea presentation with artisanal blends, serving accents, and a refined insert card.',
    longDescription:
      'Designed for senior relationships where the gesture should feel considered, not loud. The cabinet opens into a quiet tea ritual with layered details that support conversation, appreciation, and hospitality.',
    materials: ['Whole-leaf tea blends', 'Rigid presentation box', 'Brass-finish detailing'],
    features: ['Ceremonial opening experience', 'Optional founder note', 'Suited for senior client gifting'],
    MOQ: 'MOQ 25 pieces',
    customizable: true,
    customizationNote: 'Brand sleeve, note card, blend selection, and name personalisation available.',
    tags: ['Executive', 'Premium', 'Hospitality'],
    featured: true,
    sustainability: 'Reusable rigid box with recyclable paper inserts available on request.',
    images: [
      catalogueImage('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085', 'Heritage tea cabinet presentation'),
      catalogueThumb('https://images.unsplash.com/photo-1544787219-7f47ccb76574', 'Artisanal tea detail for executive gifting'),
    ],
    priceLabel: 'From INR 6,900',
  },
  {
    id: 'product-monogram-correspondence-tray',
    slug: 'monogram-correspondence-tray',
    name: 'Monogram Correspondence Tray',
    subtitle: 'A refined desktop keepsake for discerning leaders.',
    category: 'Executive gifting',
    collection: 'executive-gifting',
    shortDescription:
      'A structured desk tray paired with correspondence cards and subtle monogram detailing.',
    longDescription:
      'A polished object for leadership desks, balancing utility and personal recognition through restrained monogramming, textured paper, and an elegant presentation format.',
    materials: ['Vegan leather tray', 'Textured card stock', 'Foil-stamped stationery'],
    features: ['Executive desk format', 'Protective gift packaging', 'Understated logo placement'],
    MOQ: 'MOQ 30 pieces',
    customizable: true,
    customizationNote: 'Initials, company crest, card stock, and message inserts can be tailored.',
    tags: ['Monogram', 'Desk', 'Leadership'],
    featured: false,
    sustainability: 'Paper stock can be specified as FSC-certified or recycled.',
    images: [
      catalogueImage('https://images.unsplash.com/photo-1455390582262-044cdead277a', 'Monogram correspondence tray with premium cards'),
      catalogueThumb('https://images.unsplash.com/photo-1517842645767-c639042777db', 'Fine paper correspondence detail'),
    ],
    priceLabel: 'From INR 5,200',
  },
  {
    id: 'product-signature-arrival-box',
    slug: 'signature-arrival-box',
    name: 'Signature Arrival Box',
    subtitle: 'An elegant first-day welcome statement.',
    category: 'Employee experience',
    collection: 'employee-onboarding',
    shortDescription:
      'A warm onboarding composition with stationery, a desk essential, a welcome note, and refined packaging.',
    longDescription:
      'Built to make day one feel calm, intentional, and personal. The set brings together useful objects and thoughtful writing so a new team member feels expected before they begin.',
    materials: ['Premium notebook', 'Desk accessory', 'Artisanal treats'],
    features: ['Day-one ready format', 'HR-friendly fulfilment', 'Optional department variants'],
    MOQ: 'MOQ 50 pieces',
    customizable: true,
    customizationNote: 'Employee names, welcome cards, brand palette, and insert language can be customised.',
    tags: ['Onboarding', 'Welcome', 'Culture'],
    featured: true,
    sustainability: 'Low-plastic packaging and recycled paper stationery can be configured.',
    images: [
      catalogueImage('https://images.unsplash.com/photo-1542291026-7eec264c27ff', 'Signature arrival box for employee onboarding'),
      catalogueThumb('https://images.unsplash.com/photo-1516382799247-87df95d790b7', 'Desk essentials for new employee welcome'),
    ],
    priceLabel: 'From INR 3,800',
  },
  {
    id: 'product-brass-desk-ritual-set',
    slug: 'brass-desk-ritual-set',
    name: 'Brass Desk Ritual Set',
    subtitle: 'Desk accents with gravitas and warmth.',
    category: 'Employee experience',
    collection: 'employee-onboarding',
    shortDescription:
      'A tactile desk ensemble for new hires and internal milestones, balancing utility with ceremony.',
    longDescription:
      'A measured workspace gesture for employees who should receive more than a standard kit. Brass-finish details, natural paper, and warm packaging create a memorable desk ritual.',
    materials: ['Brass-finish accents', 'Natural paper stock', 'Keepsake box'],
    features: ['Durable workspace pieces', 'Premium unboxing', 'Suitable for remote onboarding'],
    MOQ: 'MOQ 40 pieces',
    customizable: true,
    customizationNote: 'Engraving, paper goods, card copy, and sleeve design can be adapted.',
    tags: ['Workspace', 'Brandable', 'Keepsake'],
    featured: false,
    sustainability: 'Reusable desk objects reduce disposable onboarding material.',
    images: [
      catalogueImage('https://images.unsplash.com/photo-1516382799247-87df95d790b7', 'Brass desk ritual set with stationery'),
      catalogueThumb('https://images.unsplash.com/photo-1516321318423-f06f85e504b3', 'Work desk detail with refined accessories'),
    ],
    priceLabel: 'From INR 4,600',
  },
  {
    id: 'product-atelier-appreciation-chest',
    slug: 'atelier-appreciation-chest',
    name: 'Atelier Appreciation Chest',
    subtitle: 'A layered thank-you gesture with quiet theatre.',
    category: 'Client relationships',
    collection: 'client-appreciation',
    shortDescription:
      'A curated appreciation chest with fine treats, a keepsake object, and a personal note.',
    longDescription:
      'Created for high-value relationships where appreciation should feel nuanced. Each layer is composed to create a refined reveal, with room for seasonal or relationship-specific storytelling.',
    materials: ['Wood-finish chest', 'Gourmet pairings', 'Printed story card'],
    features: ['Premium layered reveal', 'Festival-ready adaptation', 'Ideal for retainers and partners'],
    MOQ: 'MOQ 20 pieces',
    customizable: true,
    customizationNote: 'Gift tiers, client names, insert copy, and packaging finishes can be refined.',
    tags: ['Client', 'Appreciation', 'Premium'],
    featured: true,
    sustainability: 'Reusable chest format with reduced disposable fill options.',
    images: [
      catalogueImage('https://images.unsplash.com/photo-1513885535751-8b9238bd345a', 'Atelier appreciation chest with layered gifting'),
      catalogueThumb('https://images.unsplash.com/photo-1512909006721-3d6018887383', 'Premium client gifting detail'),
    ],
    priceLabel: 'From INR 7,500',
  },
  {
    id: 'product-festival-courtesy-trunk',
    slug: 'festival-courtesy-trunk',
    name: 'Festival Courtesy Trunk',
    subtitle: 'A gracious seasonal gesture with editorial balance.',
    category: 'Client relationships',
    collection: 'client-appreciation',
    shortDescription:
      'A festive trunk format that keeps the mood celebratory, elegant, and brand-safe.',
    longDescription:
      'A festival edit for client lists that need consistency, beauty, and cultural warmth. The trunk can shift across seasons without losing Ajjoria restraint.',
    materials: ['Rigid trunk box', 'Festive gourmet edit', 'Foil detail card'],
    features: ['Seasonal curation', 'Bulk dispatch support', 'Brand-safe festive language'],
    MOQ: 'MOQ 35 pieces',
    customizable: true,
    customizationNote: 'Seasonal contents, greetings, sleeve artwork, and delivery cards can be customised.',
    tags: ['Festival', 'Client', 'Seasonal'],
    featured: false,
    sustainability: 'Reusable trunk with plastic-free outer packaging options.',
    images: [
      catalogueImage('https://images.unsplash.com/photo-1512909006721-3d6018887383', 'Festival courtesy trunk for client appreciation'),
      catalogueThumb('https://images.unsplash.com/photo-1513885535751-8b9238bd345a', 'Festive premium gift presentation'),
    ],
    priceLabel: 'From INR 5,900',
  },
  {
    id: 'product-botanical-pause-hamper',
    slug: 'botanical-pause-hamper',
    name: 'Botanical Pause Hamper',
    subtitle: 'A composed gesture of care and restoration.',
    category: 'Wellness and culture',
    collection: 'wellness-culture',
    shortDescription:
      'A sensorial hamper with calming infusions, aromatics, and a soft ritual card.',
    longDescription:
      'Designed for culture programs, retreats, and care-led gestures, this hamper is gentle without feeling casual. It creates a moment of pause through scent, texture, and a soft editorial note.',
    materials: ['Herbal infusions', 'Aromatics', 'Natural wrap'],
    features: ['Culture and wellness campaigns', 'Retreat-friendly format', 'Gentle premium presentation'],
    MOQ: 'MOQ 40 pieces',
    customizable: true,
    customizationNote: 'Wellness theme, note copy, aroma profile, and packaging colour can be tailored.',
    tags: ['Wellness', 'Care', 'Culture'],
    featured: true,
    sustainability: 'Natural wrapping and refillable components can be specified.',
    images: [
      catalogueImage('https://images.unsplash.com/photo-1511920170033-f8396924c348', 'Botanical pause hamper with wellness details'),
      catalogueThumb('https://images.unsplash.com/photo-1511988617509-a57c8a288659', 'Botanical wellness gifting detail'),
    ],
    priceLabel: 'From INR 4,900',
  },
  {
    id: 'product-linen-serenity-set',
    slug: 'linen-serenity-set',
    name: 'Linen Serenity Set',
    subtitle: 'Soft textures and quiet luxury.',
    category: 'Wellness and culture',
    collection: 'wellness-culture',
    shortDescription:
      'A refined textile-led set with comforting details for offsites, retreats, and wellbeing gestures.',
    longDescription:
      'A quiet luxury set built around softness and care. The linen-led format is especially suited to leadership retreats, employee wellbeing, and culture moments that call for tactility.',
    materials: ['Linen accessory', 'Comfort goods', 'Keepsake wrap'],
    features: ['Quiet luxury finish', 'Low-noise branding', 'Suited for culture programs'],
    MOQ: 'MOQ 30 pieces',
    customizable: true,
    customizationNote: 'Embroidery, card copy, textile shade, and recipient names can be configured.',
    tags: ['Textile', 'Wellness', 'Retreat'],
    featured: false,
    sustainability: 'Natural textiles and reusable wrap options are available.',
    images: [
      catalogueImage('https://images.unsplash.com/photo-1516826957135-700dedea698c', 'Linen serenity set with soft textile details'),
      catalogueThumb('https://images.unsplash.com/photo-1515377905703-c4788e51af15', 'Wellness textile gifting composition'),
    ],
    priceLabel: 'From INR 5,600',
  },
  {
    id: 'product-seeded-paper-welcome-set',
    slug: 'seeded-paper-welcome-set',
    name: 'Seeded Paper Welcome Set',
    subtitle: 'A living gesture with a lighter footprint.',
    category: 'Sustainable gifting',
    collection: 'sustainable-gifting',
    shortDescription:
      'A conscious gifting set using plantable paper goods, natural textures, and pared-back presentation.',
    longDescription:
      'A refined low-waste gesture that makes sustainability visible without turning it into a slogan. Plantable paper, recycled board, and natural cord give the set an afterlife.',
    materials: ['Seeded paper', 'Recycled board', 'Cotton cord'],
    features: ['Plantable keepsake', 'Low-waste packaging', 'CSR and ESG-friendly campaigns'],
    MOQ: 'MOQ 60 pieces',
    customizable: true,
    customizationNote: 'Seed paper shapes, message cards, belly band, and campaign theme can be tailored.',
    tags: ['Sustainable', 'Plantable', 'Conscious'],
    featured: true,
    sustainability: 'Plantable paper goods and recycled packaging are core to this format.',
    images: [
      catalogueImage('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09', 'Seeded paper welcome set with sustainable materials'),
      catalogueThumb('https://images.unsplash.com/photo-1501004318641-b39e6451bec6', 'Natural sustainable gifting detail'),
    ],
    priceLabel: 'From INR 3,400',
  },
  {
    id: 'product-reclaimed-wood-keepsake-box',
    slug: 'reclaimed-wood-keepsake-box',
    name: 'Reclaimed Wood Keepsake Box',
    subtitle: 'Natural materiality with a lasting purpose.',
    category: 'Sustainable gifting',
    collection: 'sustainable-gifting',
    shortDescription:
      'A reusable keepsake box built around natural finishes, conscious inserts, and refined storytelling.',
    longDescription:
      'This format turns the box into part of the gift. Natural materiality, reusable storage, and restrained branding help the gesture remain useful long after the first reveal.',
    materials: ['Reclaimed wood', 'Recycled paper inserts', 'Natural fibre wrap'],
    features: ['Reusable storage format', 'Premium sustainable story', 'Suitable for milestone gifting'],
    MOQ: 'MOQ 25 pieces',
    customizable: true,
    customizationNote: 'Engraving, compartment layout, insert story, and content curation can be personalised.',
    tags: ['Reusable', 'Natural', 'Conscious'],
    featured: false,
    sustainability: 'Reclaimed wood and recycled paper options support a lower-waste presentation.',
    images: [
      catalogueImage('https://images.unsplash.com/photo-1501004318641-b39e6451bec6', 'Reclaimed wood keepsake box with natural presentation'),
      catalogueThumb('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09', 'Sustainable gifting material detail'),
    ],
    priceLabel: 'From INR 6,200',
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCollectionSlug(collectionSlug: string) {
  return products.filter((product) => product.collection === collectionSlug);
}
