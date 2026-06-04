import { catalogueImage } from '@/content/catalogue/images';
import type { Collection } from '@/shared/types/catalogue';

export const collections: Collection[] = [
  {
    id: 'collection-executive-gifting',
    slug: 'executive-gifting',
    name: 'Executive Gifting',
    description:
      'Distinguished pieces for leadership tables, boardroom milestones, and high-trust business relationships.',
    narrative:
      'A considered edit for gestures that need weight without excess. Each piece is chosen for presence, restraint, and the quiet confidence expected in senior relationships.',
    tone: 'Measured, ceremonial, and deeply polished.',
    image: catalogueImage(
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
      'Executive gifting arrangement for leadership relationships',
    ),
    heroImage: catalogueImage(
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
      'Polished executive setting with refined gifting cues',
    ),
    productSlugs: ['heritage-tea-cabinet', 'monogram-correspondence-tray'],
    eyebrow: 'Leadership Edit',
  },
  {
    id: 'collection-employee-onboarding',
    slug: 'employee-onboarding',
    name: 'Employee Onboarding',
    description:
      'Warm, memorable welcome rituals designed for first days, new teams, and culture-led introductions.',
    narrative:
      'Built for the moment a person steps into a new chapter. This collection brings together tactile stationery, useful keepsakes, and thoughtful personalisation.',
    tone: 'Welcoming, refined, and human.',
    image: catalogueImage(
      'https://images.unsplash.com/photo-1516382799247-87df95d790b7',
      'Premium desk objects for an employee onboarding gift',
    ),
    heroImage: catalogueImage(
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518',
      'Team welcome moment with thoughtful presentation',
    ),
    productSlugs: ['signature-arrival-box', 'brass-desk-ritual-set'],
    eyebrow: 'Welcome Edit',
  },
  {
    id: 'collection-client-appreciation',
    slug: 'client-appreciation',
    name: 'Client Appreciation',
    description:
      'Elegant, relationship-first gifting for retainers, launches, festivals, and meaningful thank-you moments.',
    narrative:
      'A collection for saying thank you with precision. It favours layered presentation, fine consumables, and keepsakes that feel personal rather than promotional.',
    tone: 'Gracious, polished, and quietly memorable.',
    image: catalogueImage(
      'https://images.unsplash.com/photo-1512909006721-3d6018887383',
      'Elegant client appreciation gifting trunk',
    ),
    heroImage: catalogueImage(
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a',
      'Layered premium gift presentation for client appreciation',
    ),
    productSlugs: ['atelier-appreciation-chest', 'festival-courtesy-trunk'],
    eyebrow: 'Gratitude Edit',
  },
  {
    id: 'collection-wellness-culture',
    slug: 'wellness-culture',
    name: 'Wellness & Culture',
    description:
      'Care-led gifts for team wellbeing, culture rituals, retreats, and moments of pause.',
    narrative:
      'Gentle without becoming casual, this edit is built around comfort, sensorial detail, and rituals that communicate care in a sophisticated way.',
    tone: 'Soft, restorative, and composed.',
    image: catalogueImage(
      'https://images.unsplash.com/photo-1511988617509-a57c8a288659',
      'Wellness and culture gifting with botanical elements',
    ),
    heroImage: catalogueImage(
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15',
      'Soft wellness gifting composition with natural textures',
    ),
    productSlugs: ['botanical-pause-hamper', 'linen-serenity-set'],
    eyebrow: 'Care Edit',
  },
  {
    id: 'collection-sustainable-gifting',
    slug: 'sustainable-gifting',
    name: 'Sustainable Gifting',
    description:
      'Conscious gifting with natural materials, reusable forms, and an elevated low-waste sensibility.',
    narrative:
      'Designed for brands that want their gestures to feel intentional from object to afterlife. The edit balances natural textures with premium finishing.',
    tone: 'Grounded, modern, and responsible.',
    image: catalogueImage(
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      'Sustainable gifting materials with natural paper and greenery',
    ),
    heroImage: catalogueImage(
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
      'Natural sustainable gifting composition with greenery',
    ),
    productSlugs: ['seeded-paper-welcome-set', 'reclaimed-wood-keepsake-box'],
    eyebrow: 'Conscious Edit',
  },
];

export function getCollectionBySlug(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}
