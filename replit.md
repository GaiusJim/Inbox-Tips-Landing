# Replit MD

## Overview

This is a single-page "link in bio" landing site for **Gaius Jim** (a graduate student productivity / copy editing brand). It displays a profile avatar, bio text, social/resource links (website, ebook, template, Instagram), and an embedded email signup form. The backend is minimal — an Express server with a single API endpoint to capture email leads, backed by a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — only two routes: Home (`/`) and a 404 catch-all
- **Styling**: Tailwind CSS with CSS variables for theming. Custom elegant palette (creamy background, deep navy foreground). Fonts: Inter (body), Lora/Playfair Display (headings)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives. Full component library lives in `client/src/components/ui/`
- **Animations**: Framer Motion for entry/hover animations on the landing page
- **State Management**: TanStack React Query for server state (minimal usage — one mutation hook for lead creation)
- **Email Form**: Embedded via external script injection from `eomail6.com` (not a custom form). The `useCreateLead` hook exists as a backup if switching to a custom implementation later
- **Path aliases**: `@/` → `client/src/`, `@shared/` → `shared/`, `@assets/` → `attached_assets/`

### Backend
- **Runtime**: Node.js with Express 4, TypeScript compiled via `tsx`
- **Architecture**: Single `server/` directory with clean separation:
  - `index.ts` — Express app setup, HTTP server creation, request logging
  - `routes.ts` — API route registration (single POST endpoint)
  - `storage.ts` — Data access layer with interface (`IStorage`) and PostgreSQL implementation (`DatabaseStorage`)
  - `db.ts` — Drizzle ORM + node-postgres pool setup
  - `vite.ts` — Vite dev server middleware for development HMR
  - `static.ts` — Serves built client assets in production
- **API**: Single endpoint `POST /api/leads` — accepts `{ email }`, validates with Zod, stores in database
- **Shared code**: `shared/` directory contains schema definitions and route contracts used by both client and server

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` — single `leads` table with `id` (serial), `email` (text), `createdAt` (timestamp)
- **Validation**: `drizzle-zod` generates Zod schemas from Drizzle table definitions
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)
- **Connection**: Requires `DATABASE_URL` environment variable

### Build System
- **Development**: `tsx server/index.ts` runs the server with Vite middleware for HMR
- **Production build**: Custom `script/build.ts` — Vite builds the client to `dist/public`, esbuild bundles the server to `dist/index.cjs`. Certain dependencies are bundled (allowlisted) to reduce cold start syscalls
- **Production start**: `node dist/index.cjs`

### Shared Route Contracts
The `shared/routes.ts` file defines a typed API contract object (`api`) that includes HTTP method, path, input schema, and response schemas for each endpoint. Both client and server import from this to stay in sync.

## External Dependencies

- **PostgreSQL** — Primary database, connected via `DATABASE_URL` environment variable
- **eomail6.com** — External email form embed service (script injection for email capture form, form ID: `1cad9a4c-efe0-11f0-81b6-f9bd986c49f4`)
- **Google Fonts** — Playfair Display, Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter
- **Radix UI** — Headless UI primitives for all shadcn/ui components
- **Framer Motion** — Animation library for page transitions
- **Drizzle ORM + drizzle-kit** — Database ORM and schema management
- **TanStack React Query** — Async state management
- **Replit plugins** (dev only) — `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`