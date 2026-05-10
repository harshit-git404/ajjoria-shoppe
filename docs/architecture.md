# Architecture

## Folder Responsibilities

- `app/src/app`
  - App Router entrypoints only: routes, layouts, metadata boundaries, and route-local files like `favicon.ico`
- `app/src/components`
  - Cross-feature presentational building blocks
- `app/src/components/ui`
  - Small reusable UI primitives with minimal domain knowledge
- `app/src/components/layout`
  - Shared layout shells and structural wrappers
- `app/src/components/shared`
  - Cross-cutting reusable pieces that are not strictly layout or primitive UI
- `app/src/features`
  - Feature-owned UI, composition, and business-facing logic grouped by user-facing capability
- `app/src/lib`
  - Library adapters and low-level framework integrations
- `app/src/hooks`
  - Reusable React hooks
- `app/src/types`
  - Shared application types and contracts
- `app/src/constants`
  - Static constants and enums that should not live inside components
- `app/src/config`
  - Centralized app configuration such as site metadata and environment-driven settings
- `app/src/styles`
  - Global styles, design tokens, and non-route-specific stylesheet assets
- `app/src/server`
  - Server-only code such as data loaders, auth helpers, and server-side orchestration
- `app/src/services`
  - Boundary layer for calling APIs, CMSes, or external systems
- `app/src/utils`
  - Generic framework-agnostic helpers like `cn`

## Import Conventions

- Prefer aliases over deep relative imports.
- Route files in `src/app` should compose from `@/features`, `@/components`, `@/config`, and `@/styles`.
- Shared code should flow inward from generic to specific:
  - `utils` and `config` can be imported broadly
  - `components` can depend on `utils`, `types`, `constants`, and `config`
  - `features` can depend on shared layers
  - `app` should primarily orchestrate features and layouts rather than hold business UI directly
- Use barrel exports at folder boundaries to keep imports stable as files move internally.

## Scaling Strategy

- Keep `src/app` thin so route files remain easy to scan.
- Grow by feature first. When a page becomes more complex, create a feature folder with its own:
  - `components/`
  - `hooks/`
  - `server/`
  - `types/`
  - `constants/`
- Promote code to shared folders only after it is truly reused across features.
- Keep server concerns isolated from client concerns so future server actions, caching, and data fetching do not leak into UI primitives.
- Preserve clear boundaries now so adding product pages, CMS content, auth, or e-commerce flows later does not force a rewrite.

## Feature Organization Philosophy

- Organize by domain and user-facing capability, not by file type alone.
- A feature owns its composition and internal details; shared folders should not become a dumping ground.
- Reusable primitives belong in `components/ui`, but feature-specific sections should stay inside their feature until reuse is proven.
- This reduces coupling, avoids oversized global component directories, and keeps ownership obvious as the app grows.
