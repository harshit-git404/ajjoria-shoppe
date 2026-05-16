import { Outlet } from 'react-router-dom';

export function AppShell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-md">
        <div className="container-luxury flex items-center justify-between py-4">
          <button type="button" aria-label="Open menu" className="text-primary">
            <span className="material-symbols-outlined text-[28px] font-light">menu</span>
          </button>
          <a href="#" className="font-display text-[32px] leading-none tracking-[-0.03em] text-primary">
            Ajjoria
          </a>
          <button type="button" aria-label="Open bag" className="text-primary">
            <span className="material-symbols-outlined text-[28px] font-light">shopping_bag</span>
          </button>
        </div>
      </header>
      <main className="relative">
        <Outlet />
      </main>
    </div>
  );
}
