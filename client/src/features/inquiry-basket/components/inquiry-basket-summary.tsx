import { Link } from 'react-router-dom';

import { products } from '@/data/products';
import { useInquiryBasket } from '@/features/inquiry-basket/context/inquiry-basket-context';

export function InquiryBasketSummary() {
  const { items, totalItems, removeItem } = useInquiryBasket();

  if (items.length === 0) {
    return (
      <div className="luxury-panel rounded-[2rem] p-6">
        <p className="text-sm leading-7 text-muted-foreground">Your inquiry basket is empty. Add pieces from the catalogue to begin a bespoke request.</p>
      </div>
    );
  }

  return (
    <div className="luxury-panel rounded-[2rem] p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="font-display text-2xl text-primary">Inquiry Basket</h2>
        <span className="eyebrow text-secondary">{totalItems} items</span>
      </div>
      <div className="space-y-4">
        {items.map((item) => {
          const product = products.find((entry) => entry.slug === item.productSlug);

          if (!product) {
            return null;
          }

          return (
            <div key={item.productSlug} className="flex items-center justify-between gap-4 border-t border-border/80 pt-4 first:border-t-0 first:pt-0">
              <div>
                <p className="font-medium text-primary">{product.name}</p>
                <p className="text-sm text-muted-foreground">Qty {item.quantity}</p>
              </div>
              <div className="flex items-center gap-4">
                <Link to={`/product/${product.slug}`} className="text-sm text-secondary hover:text-primary">
                  Review
                </Link>
                <button type="button" onClick={() => removeItem(product.slug)} className="text-sm text-muted-foreground hover:text-primary">
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
