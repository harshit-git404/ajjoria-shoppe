import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ResponsiveImage } from '@/components/media/responsive-image';
import { products } from '@/data/products';
import { trackCatalogueEvent } from '@/features/analytics/analytics';
import { useInquiryBasket } from '@/features/inquiry-basket/context/inquiry-basket-context';
import { createWhatsAppInquiryUrl } from '@/features/inquiry-basket/lib/whatsapp';

export function InquiryDrawer() {
  const { clearBasket, closeDrawer, isDrawerOpen, items, removeItem, totalItems, updateQuantity } = useInquiryBasket();
  const whatsAppUrl = createWhatsAppInquiryUrl(items);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  return (
    <div className={isDrawerOpen ? 'pointer-events-auto fixed inset-0 z-[70]' : 'pointer-events-none fixed inset-0 z-[70]'}>
      <button
        type="button"
        aria-label="Close inquiry drawer"
        onClick={closeDrawer}
        className={`absolute inset-0 bg-primary/30 backdrop-blur-[2px] transition-opacity duration-500 ${
          isDrawerOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <aside
        aria-label="Inquiry basket"
        className={`absolute right-0 top-0 flex h-full w-full max-w-[480px] flex-col bg-[#fbf9f7] shadow-[0_24px_80px_rgba(19,33,29,0.22)] transition-transform duration-500 ease-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="border-b border-border px-6 py-6 md:px-8">
          <div className="flex items-start justify-between gap-5">
            <div className="space-y-2">
              <p className="eyebrow text-secondary">Ajjoria inquiry</p>
              <h2 className="font-display text-3xl leading-tight text-primary">A considered gifting brief.</h2>
            </div>
            <button
              type="button"
              onClick={closeDrawer}
              aria-label="Close inquiry drawer"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-primary hover:border-secondary hover:bg-white"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 md:px-8">
          {items.length === 0 ? (
            <div className="space-y-5 py-12">
              <p className="text-sm leading-7 text-muted-foreground">
                Your inquiry is empty. Explore the catalogue and add pieces that suit the occasion, audience, and tone.
              </p>
              <Link
                to="/collections"
                onClick={closeDrawer}
                className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground"
              >
                Explore collections
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => {
                const product = products.find((entry) => entry.slug === item.productSlug);

                if (!product) {
                  return null;
                }

                return (
                  <article key={item.productSlug} className="border-b border-border pb-5">
                    <div className="grid grid-cols-[92px_1fr] gap-4">
                      <ResponsiveImage image={product.images[0]} className="h-28 w-full rounded-[0.75rem] object-cover" sizes="92px" />
                      <div className="min-w-0 space-y-3">
                        <div>
                          <Link to={`/product/${product.slug}`} onClick={closeDrawer} className="font-display text-xl text-primary hover:text-secondary">
                            {product.name}
                          </Link>
                          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{product.MOQ}</p>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center rounded-full border border-border bg-white/80">
                            <button
                              type="button"
                              onClick={() => updateQuantity(product.slug, item.quantity - 1)}
                              aria-label={`Decrease quantity for ${product.name}`}
                              className="flex h-9 w-9 items-center justify-center text-primary"
                            >
                              <span className="material-symbols-outlined text-[18px]">remove</span>
                            </button>
                            <span className="min-w-8 text-center text-sm font-semibold text-primary">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(product.slug, item.quantity + 1)}
                              aria-label={`Increase quantity for ${product.name}`}
                              className="flex h-9 w-9 items-center justify-center text-primary"
                            >
                              <span className="material-symbols-outlined text-[18px]">add</span>
                            </button>
                          </div>
                          <button type="button" onClick={() => removeItem(product.slug)} className="text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-primary">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        <div className="border-t border-border bg-white/55 px-6 py-6 md:px-8">
          <div className="mb-5 flex items-center justify-between text-sm">
            <span className="uppercase tracking-[0.14em] text-muted-foreground">Selected quantity</span>
            <span className="font-semibold text-primary">{totalItems}</span>
          </div>
          <div className="grid gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackCatalogueEvent('whatsapp_cta_clicked', { itemCount: totalItems, source: 'inquiry_drawer' })}
              className="rounded-full bg-primary px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground hover:-translate-y-0.5"
            >
              Discuss on WhatsApp
            </a>
            <button
              type="button"
              onClick={closeDrawer}
              className="rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary hover:border-secondary"
            >
              Continue browsing
            </button>
            {items.length > 0 ? (
              <button type="button" onClick={clearBasket} className="text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-primary">
                Clear inquiry
              </button>
            ) : null}
          </div>
        </div>
      </aside>
    </div>
  );
}
