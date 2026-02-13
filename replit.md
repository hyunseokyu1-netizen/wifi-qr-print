# replit.md

## Overview

This is a **Wi-Fi QR Code Generator** web application (와이파이 QR 생성기) with Korean-language UI. Users enter Wi-Fi network details (SSID, password, encryption type, hidden network flag), and the app generates a scannable QR code that allows devices to connect to the network instantly. The app also maintains a history of previously generated configurations (without storing passwords for security). The QR code card is designed to be printable.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router)
- **State Management**: TanStack React Query for server state; React's `useState` for local UI state
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives with Tailwind CSS
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`
- **QR Code Rendering**: `qrcode.react` (QRCodeSVG) generating WiFi-standard QR strings
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support), custom fonts (Inter for body, Outfit for display)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via `tsx`
- **API Pattern**: RESTful JSON API under `/api/` prefix
- **Route definitions**: Shared route contracts in `shared/routes.ts` define paths, methods, input schemas, and response schemas — used by both client and server
- **Development**: Vite dev server with HMR proxied through Express
- **Production**: Vite builds static assets to `dist/public`; esbuild bundles server to `dist/index.cjs`

### Shared Layer (`shared/`)
- **Schema** (`shared/schema.ts`): Drizzle ORM table definitions and Zod validation schemas (via `drizzle-zod`)
- **Routes** (`shared/routes.ts`): API contract definitions with Zod schemas for inputs/outputs, shared between frontend and backend for type safety

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Driver**: `pg` (node-postgres) Pool
- **Schema management**: `drizzle-kit push` for schema synchronization (no migration files needed for dev)
- **Tables**:
  - `wifi_configs`: `id` (serial PK), `ssid` (text), `encryption` (text, default "WPA"), `hidden` (boolean), `created_at` (timestamp)
- **Security decision**: Passwords are accepted in the API input for QR code generation but are explicitly stripped before database insertion — the DB schema has no password column

### API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/wifi` | List 10 most recent Wi-Fi configs (no passwords) |
| POST | `/api/wifi` | Create a new Wi-Fi config (password used for QR only, not stored) |

### Key Design Decisions

1. **Password never stored**: The insert schema includes an optional `password` field for QR string generation on the client, but the server explicitly destructures it out before saving. The database table has no password column. This is a deliberate double-safety approach.

2. **Shared type contracts**: Route definitions with Zod schemas live in `shared/routes.ts` so the client can validate API responses and the server can validate request bodies using the same schemas. This eliminates type drift between frontend and backend.

3. **Real-time QR preview**: The form updates parent state on every change, so the QR code preview updates live as the user types — no submit needed to see the QR code.

4. **Build strategy**: The build script (`script/build.ts`) uses Vite for client and esbuild for server. Server dependencies on an allowlist are bundled to reduce cold start `openat(2)` syscalls; everything else is external.

## External Dependencies

### Database
- **PostgreSQL** — required, connection via `DATABASE_URL` environment variable
- **connect-pg-simple** — listed as dependency (session store, though sessions don't appear actively used yet)

### Key NPM Packages
- **drizzle-orm** + **drizzle-kit** — ORM and schema management for PostgreSQL
- **express** v5 — HTTP server
- **zod** — Runtime validation for API inputs/outputs
- **qrcode.react** — Client-side QR code SVG rendering
- **@tanstack/react-query** — Data fetching and caching
- **react-hook-form** — Form state management
- **wouter** — Client-side routing
- **shadcn/ui** ecosystem — Radix UI + Tailwind component library
- **date-fns** — Date formatting for history list

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal` — Error overlay in development
- `@replit/vite-plugin-cartographer` — Dev tooling (dev only)
- `@replit/vite-plugin-dev-banner` — Dev banner (dev only)