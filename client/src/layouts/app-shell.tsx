import { Link, Outlet } from 'react-router-dom';

import logoMark from '@/assets/branding/logo.png';
import { InquiryDrawer } from '@/features/inquiry-basket/components/inquiry-drawer';
import { useInquiryBasket } from '@/features/inquiry-basket/context/inquiry-basket-context';

export function AppShell() {
  const { openDrawer, totalItems } = useInquiryBasket();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/72 shadow-[0_10px_30px_rgba(19,33,29,0.04)] backdrop-blur-xl">
        <div className="container-luxury flex items-center justify-between py-3 md:py-4">
          <Link
            to="/collections"
            aria-label="Explore collections"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-primary/88 hover:border-border/80 hover:bg-white/55 hover:text-primary"
          >
            <span className="material-symbols-outlined text-[24px] font-light transition-transform duration-300 group-hover:scale-[0.94]">
              auto_awesome_motion
            </span>
          </Link>
          <Link
            to="/"
            className="group flex items-center gap-2.5 rounded-full px-2 py-1.5 hover:bg-white/35"
            aria-label="Ajjoria home"
          >
            <img
              src={logoMark}
              alt="Ajjoria logo"
              width={1074}
              height={622}
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] md:h-9"
            />
            <span className="font-display text-[28px] leading-none text-primary md:text-[30px]">Ajjoria</span>
          </Link>
          <button
            type="button"
            onClick={openDrawer}
            aria-label="Open inquiry basket"
            className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-primary/88 hover:border-border/80 hover:bg-white/55 hover:text-primary"
          >
            <span className="material-symbols-outlined text-[23px] font-light transition-transform duration-300 group-hover:-translate-y-0.5">
              shopping_bag
            </span>
            {totalItems > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-semibold text-secondary-foreground">
                {totalItems}
              </span>
            ) : null}
          </button>
        </div>
      </header>
      <main className="relative">
        <Outlet />
      </main>
      <InquiryDrawer />
    </div>
  );
}
