# Ajjoria Shoppe Starter

Production-grade full-stack starter for a scalable business website using `npm` workspaces with independent `client/` and `server/` apps.

## Stack

- Frontend: React, Vite, TypeScript, Tailwind CSS v4, shadcn/ui, React Router, TanStack Query, Zustand, Axios
- Backend: Node.js, Express, TypeScript, Prisma ORM, PostgreSQL, JWT auth foundation, Zod
- Tooling: ESLint, Prettier, strict TypeScript, `.env.example` files

## Project Structure

```text
client/   React + Vite frontend
server/   Express + Prisma backend
```

## Getting Started

1. Install dependencies from the repo root:

   ```bash
   npm install
   ```

2. Copy environment files:

   ```bash
   copy client\\.env.example client\\.env
   copy server\\.env.example server\\.env
   ```

3. Update `server/.env` with your PostgreSQL credentials and a secure `JWT_SECRET`.

4. Generate Prisma client and run migrations:

   ```bash
   npm run prisma:generate --workspace server
   npm run prisma:migrate --workspace server
   ```

5. Start the apps in separate terminals:

   ```bash
   npm run dev --workspace server
   npm run dev --workspace client
   ```

Frontend runs on `http://localhost:5173` and backend runs on `http://localhost:4000`.

## Useful Scripts

```bash
npm run dev:client
npm run dev:server
npm run build
npm run lint
npm run typecheck
```

## Architecture Notes

- `client/src/app` contains app-wide providers, layouts, and routing.
- `client/src/features` is ready for feature-based UI growth.
- `client/src/shared` contains reusable UI, config, utilities, API setup, and store modules.
- `server/src/modules` groups routes, controllers, and services by domain.
- `server/src/middleware` contains request lifecycle concerns like auth, validation, and error handling.
- `server/src/config` centralizes environment, Prisma, and logger setup.

## API Baseline

- `GET /api/v1/health`
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`

## Production Readiness

- Strict TypeScript on both apps
- Environment validation with Zod on the server
- Centralized API error handling
- Prisma-based PostgreSQL access
- JWT signing and auth middleware foundation
- Dark mode-ready frontend shell with scalable UI structure
