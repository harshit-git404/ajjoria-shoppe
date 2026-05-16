import { Outlet } from 'react-router-dom';
import logoMark from '@/assets/branding/logo.png';

export function AppShell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/72 shadow-[0_10px_30px_rgba(19,33,29,0.04)] backdrop-blur-xl">
        <div className="container-luxury flex items-center justify-between py-3 md:py-4">
          <button
            type="button"
            aria-label="Open menu"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-primary/88 hover:border-border/80 hover:bg-white/55 hover:text-primary"
          >
            <span className="material-symbols-outlined text-[24px] font-light transition-transform duration-300 group-hover:scale-[0.94]">
              menu
            </span>
          </button>
          <a
            href="#"
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
            <span className="font-display text-[28px] leading-none tracking-[-0.035em] text-primary md:text-[30px]">
              Ajjoria
            </span>
          </a>
          <button
            type="button"
            aria-label="Open bag"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-primary/88 hover:border-border/80 hover:bg-white/55 hover:text-primary"
          >
            <span className="material-symbols-outlined text-[23px] font-light transition-transform duration-300 group-hover:-translate-y-0.5">
              shopping_bag
            </span>
          </button>
        </div>
      </header>
      <main className="relative">
        <Outlet />
      </main>
    </div>
  );
}
