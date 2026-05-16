import { Link } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';

const frontendCapabilities = [
  'React Router app shell with path aliases',
  'TanStack Query provider and Axios API layer',
  'Zustand-ready shared store structure',
  'Tailwind CSS v4 + shadcn/ui styling foundation',
];

const backendCapabilities = [
  'Express + Prisma + PostgreSQL baseline',
  'JWT auth foundation with request validation',
  'Versioned API routes and health checks',
  'Centralized errors, env parsing, and logging',
];

export function HomePage() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
      <div className="space-y-6">
        <span className="inline-flex rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
          Production-ready starter
        </span>
        <div className="space-y-4">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            A clean full-stack foundation for a scalable business website.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            This frontend is organized so future pages, polished UI designs, and API-driven flows can
            be added without rewiring the whole app.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/">Start building</Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://ui.shadcn.com/docs/installation/vite" target="_blank" rel="noreferrer">
              shadcn/ui docs
            </a>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
        <div>
          <h3 className="text-lg font-semibold">Included now</h3>
          <p className="mt-1 text-sm text-muted-foreground">A practical baseline for a solo developer.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-2xl bg-muted/40 p-4">
            <p className="mb-3 text-sm font-medium">Frontend</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {frontendCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-muted/40 p-4">
            <p className="mb-3 text-sm font-medium">Backend</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {backendCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
