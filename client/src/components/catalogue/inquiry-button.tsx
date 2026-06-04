import { trackCatalogueEvent } from '@/features/analytics/analytics';
import { useInquiryBasket } from '@/features/inquiry-basket/context/inquiry-basket-context';
import type { Product } from '@/shared/types/catalogue';

export function InquiryButton({ product }: { product: Product }) {
  const { addItem } = useInquiryBasket();

  return (
    <button
      type="button"
      onClick={() => {
        addItem({ productSlug: product.slug, quantity: 1 });
        trackCatalogueEvent('inquiry_added', { productSlug: product.slug, collectionSlug: product.collection });
      }}
      className="w-full rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-[0_18px_45px_rgba(19,33,29,0.16)] hover:-translate-y-0.5 hover:bg-[#24332f] md:w-auto"
    >
      Add to Inquiry
    </button>
  );
}
