# WiFi QR Print

> Generate printable QR code cards for Wi-Fi network access — no app required, just scan and connect.

[한국어](./README.ko.md)

## Overview

WiFi QR Print is a lightweight web app that turns your Wi-Fi credentials into a scannable QR code card. Enter your network name, encryption type, and password; the app instantly generates a styled, print-ready card that any modern smartphone can scan to join your network automatically.

**Passwords are never stored.** Only the SSID, encryption type, and hidden-network flag are retained for the recent-history list — the password exists only in your browser during the session.

## Features

- **Instant QR generation** — standard `WIFI:S:...;T:...;P:...;H:...;;` format, readable by iOS and Android without any app
- **Print-ready card** — styled layout optimized for A4 / Letter paper
- **Multilingual UI** — English, Korean (한국어), Chinese (中文), German (Deutsch); preference saved in `localStorage`
- **Dark mode** — respects system preference, togglable in-app
- **Recent history** — quickly re-generate cards for saved networks (passwords excluded)
- **No account required** — fully client-side after initial load

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript + Vite |
| Routing | wouter |
| UI | shadcn/ui (Radix UI + Tailwind CSS) |
| Forms | react-hook-form + Zod |
| QR Code | qrcode.react (SVG) |
| i18n | Custom React Context (no external library) |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or a compatible package manager

### Local development

```bash
# Clone the repository
git clone https://github.com/<your-username>/QR-Code-Generator.git
cd QR-Code-Generator

# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev
```

### Build for production

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Usage

1. Open the app in your browser.
2. Enter your **Network Name (SSID)**, select the **Encryption** type (WPA/WPA2, WEP, or None), and enter your **Password**.
3. Click **Generate** — the QR code card appears instantly.
4. Click **Print** or use your browser's print dialog to print the card.
5. Place the card somewhere visible (router, desk, café counter) so guests can scan and connect without needing to type the password.

## Supported Languages

| Code | Language |
|---|---|
| `en` | English |
| `ko` | 한국어 |
| `zh` | 中文 |
| `de` | Deutsch |

## Security

- Passwords are **never sent to any server** and are **never persisted** anywhere.
- The QR code is generated entirely in the browser using the `qrcode.react` library.
- The only data stored (browser `localStorage`) is the selected UI language.

## License

MIT
