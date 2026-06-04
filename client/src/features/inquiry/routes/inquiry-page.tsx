import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useInquiryBasket } from '@/features/inquiry-basket/context/inquiry-basket-context';

export function InquiryPage() {
  const { openDrawer } = useInquiryBasket();

  useEffect(() => {
    openDrawer();
  }, [openDrawer]);

  return (
    <div className="section-spacing">
      <section className="container-luxury max-w-3xl space-y-6">
        <p className="eyebrow text-secondary">Inquiry</p>
        <h1 className="section-heading text-primary">Your inquiry opens as a private gifting brief.</h1>
        <p className="text-base leading-8 text-muted-foreground">
          Ajjoria handles catalogue selections through an elegant inquiry drawer, keeping the experience focused on conversation rather than checkout.
        </p>
        <Link to="/collections" className="inline-flex rounded-full bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground">
          Continue browsing
        </Link>
      </section>
    </div>
  );
}
