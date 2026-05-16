import { Outlet } from 'react-router-dom';

export function AppShell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/80 bg-background/90 backdrop-blur-sm">
        <div className="container-luxury flex items-center justify-between py-6">
          <div className="space-y-1">
            <p className="eyebrow text-muted-foreground">Quiet luxury essentials</p>
            <h1 className="font-display text-xl tracking-[0.04em] text-primary">Ajjoria Shoppe</h1>
          </div>

          <nav className="hidden items-center gap-10 text-sm text-muted-foreground md:flex">
            <a href="#collection" className="relative pb-4 text-primary">
              Collection
              <span className="absolute left-1/2 top-full size-2 -translate-x-1/2 rounded-full bg-secondary" />
            </a>
            <a href="#story" className="pb-4 hover:text-primary">
              Story
            </a>
            <a href="#ritual" className="pb-4 hover:text-primary">
              Ritual
            </a>
          </nav>
        </div>
      </header>
      <main className="relative">
        <Outlet />
      </main>
    </div>
  );
}
