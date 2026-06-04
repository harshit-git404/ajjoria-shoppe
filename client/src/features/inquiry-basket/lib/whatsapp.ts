import { products } from '@/data/products';
import type { InquiryItem } from '@/shared/types/catalogue';

export function createWhatsAppInquiryUrl(items: InquiryItem[]) {
  const selectedProducts = items
    .map((item) => {
      const product = products.find((entry) => entry.slug === item.productSlug);
      return product ? `- ${product.name} x ${item.quantity}` : null;
    })
    .filter(Boolean);

  const message = [
    'Hello Ajeet Singh,',
    '',
    'I would like to discuss a bespoke Ajjoria gifting inquiry.',
    '',
    'Selected pieces:',
    selectedProducts.length > 0 ? selectedProducts.join('\n') : '- I would like guidance on suitable options.',
    '',
    'Please share availability, customization possibilities, MOQ guidance, and next steps.',
    '',
    'Ajjoria',
    'Dehradun, India',
  ].join('\n');

  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}
