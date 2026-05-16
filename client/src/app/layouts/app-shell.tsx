import { Outlet } from 'react-router-dom';

import { ThemeToggle } from '@/shared/components/theme-toggle';

export function AppShell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Business Website Starter</p>
            <h1 className="text-lg font-semibold tracking-tight">Ajjoria Shoppe</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>
      <main className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}
