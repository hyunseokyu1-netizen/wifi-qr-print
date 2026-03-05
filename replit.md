# WiFi QR Print — replit.md

## Overview

WiFi QR Print is a web application that lets users generate printable QR code cards for Wi-Fi network access. Users enter their network name (SSID), encryption type, and password; the app generates a styled, printable card with a QR code that any phone can scan to join the network. Passwords are **never stored** — only the SSID, encryption type, and hidden-network flag are saved to the database for history purposes. The app supports four languages (English, Korean, Chinese, German) with in-browser language preference persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

- **Framework:** React (with Vite as the build tool), TypeScript, single-page application
- **Routing:** `wouter` — lightweight client-side router. Only two routes exist: `/` (Home) and a catch-all 404 page
- **UI Components:** shadcn/ui (Radix UI primitives + Tailwind CSS). Full component library is included in `client/src/components/ui/`
- **Styling:** Tailwind CSS with CSS custom properties (HSL color tokens) for theming. Fonts loaded from Google Fonts (Inter, Outfit). Dark mode supported via the `dark` class
- **Forms:** `react-hook-form` with `zod` schema validation via `@hookform/resolvers`. The form schema is shared from `shared/schema.ts`
- **Server state:** TanStack Query (React Query v5) for fetching and mutating Wi-Fi config history. Custom hooks live in `client/src/hooks/use-wifi.ts`
- **QR code rendering:** `qrcode.react` (`QRCodeSVG`) — generates the Wi-Fi QR string in the standard `WIFI:S:...;T:...;P:...;H:...;;` format
- **Internationalization (i18n):** Custom lightweight i18n implemented in `client/src/lib/i18n.ts` using React Context. Language preference saved to `localStorage`. Supported languages: `en`, `ko`, `zh`, `de`
- **Path aliases:** `@/` → `client/src/`, `@shared/` → `shared/`

### Backend

- **Framework:** Express 5 (Node.js), TypeScript, runs with `tsx` in development
- **Entry point:** `server/index.ts` — creates the HTTP server, registers middleware (JSON body parsing with raw body capture, URL-encoded), attaches routes, and serves static files in production
- **API routes:** Defined in `server/routes.ts`. Two endpoints:
  - `GET /api/wifi` — returns the 10 most recent Wi-Fi configs (no passwords)
  - `POST /api/wifi` — validates input with Zod, strips password before storing, returns saved config
- **Route contract sharing:** `shared/routes.ts` exports a typed `api` object used by both server and client. This is the single source of truth for paths, HTTP methods, input schemas, and response schemas
- **Storage layer:** `server/storage.ts` — `IStorage` interface with a `DatabaseStorage` class. The `createConfig` method explicitly destructures and drops the `password` field before inserting
- **Development server:** Vite middleware mode integrated into Express via `server/vite.ts` for HMR during dev

### Data Storage

- **Database:** PostgreSQL via Drizzle ORM (`drizzle-orm/node-postgres`, `pg` pool)
- **Schema** (`shared/schema.ts`):
  - `wifi_configs` table: `id` (serial PK), `ssid` (text), `encryption` (text, default `"WPA"`), `hidden` (boolean, default `false`), `created_at` (timestamp)
  - **No password column** — by design, passwords are ephemeral and only exist in memory during a request
- **Zod integration:** `drizzle-zod` generates `insertWifiConfigSchema` from the table schema; the `password` field is added as an optional Zod extension for validation only
- **Migrations:** Drizzle Kit (`drizzle-kit push`) with config in `drizzle.config.ts`. Requires `DATABASE_URL` env variable

### Build & Deployment

- **Client build:** Vite outputs to `dist/public/`
- **Server build:** esbuild bundles `server/index.ts` to `dist/index.cjs`. A custom allowlist in `script/build.ts` controls which dependencies are bundled vs. kept external to reduce cold-start syscalls
- **Production serving:** Express serves the static Vite build from `dist/public/` with SPA fallback to `index.html`

### Security Notes

- Passwords explicitly stripped in `DatabaseStorage.createConfig` (double safety beyond schema design)
- No authentication or session management currently implemented
- `connect-pg-simple` is a listed dependency (session store), but sessions are not currently wired up

## External Dependencies

| Dependency | Purpose |
|---|---|
| PostgreSQL | Primary database (requires `DATABASE_URL` env var) |
| Google Fonts | Inter (body) and Outfit (display) fonts, loaded via CDN in `client/index.html` |
| `qrcode.react` | QR code SVG generation for Wi-Fi strings |
| Radix UI (full suite) | Accessible headless UI primitives underlying shadcn/ui components |
| TanStack Query v5 | Server state management, caching, mutation handling |
| Drizzle ORM + drizzle-kit | Type-safe database access and schema migration |
| `react-hook-form` + Zod | Form state management and validation |
| Vite + `@vitejs/plugin-react` | Frontend bundler and dev server |
| `@replit/vite-plugin-runtime-error-modal` | Error overlay in Replit dev environment |
| `@replit/vite-plugin-cartographer` | Replit-specific dev tooling (dev only) |
| `wouter` | Client-side routing |
| `date-fns` | Date formatting in history list |
| `nanoid` | Cache-busting nonce for Vite HMR template reloading |