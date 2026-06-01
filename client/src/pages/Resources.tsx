import { Wifi, CheckCircle2, ShieldCheck, Printer, QrCode, Link as LinkIcon, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import type { ReactNode } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AdBanner } from "@/components/AdBanner";
import { Helmet } from "react-helmet-async";

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-card rounded-3xl p-6 sm:p-8 border border-border/60 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="min-w-0">
          <h2 className="text-2xl font-display font-bold mb-3">{title}</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function Resources() {
  return (
    <>
      <Helmet>
        <title>WiFi QR Resources | Printable Guest WiFi Tips</title>
        <meta
          name="description"
          content="Practical guides for printable WiFi QR cards: how they work, how to print them cleanly, common scan failures, and guest network security best practices."
        />
        <link rel="canonical" href="https://wi-fi-qr.xyz/resources" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground font-sans">
        <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Wifi className="w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
                WiFi QR Print
              </span>
            </Link>
            <LanguageSwitcher />
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            ← Back to Home
          </Link>

          <article className="space-y-8">
            <section className="text-center">
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                <QrCode className="w-4 h-4" />
                Practical Resources
              </p>
              <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight mb-4">
                Everything You Need to Print and Share WiFi QR Codes Well
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                This page collects the parts people usually need after they generate a QR code:
                how to print it cleanly, what to do when phones fail to scan it, and how to share
                guest WiFi without exposing the wrong network.
              </p>
            </section>

            <InfoCard
              icon={<Printer className="w-5 h-5" />}
              title="How to Print a Card That Scans Reliably"
            >
              <p>
                A QR code can be perfectly valid and still be annoying to use if it is printed too
                small, cropped by the browser, or placed on low-contrast paper. For best results,
                print the card at a size that leaves a clear quiet zone around the code. The white
                border around the QR code is not decoration; scanners need that margin to detect the
                symbol quickly.
              </p>
              <p>
                Use a clean, matte sheet if you can. Glossy paper reflects light and makes scanning
                harder in bright rooms. If you plan to place the card in a hotel room, café table,
                or office reception area, lamination is worth it because the card stays readable
                after repeated handling and cleaning.
              </p>
              <p>
                Before printing, check the browser dialog for scaling. A common failure mode is
                accidentally shrinking the page so the QR code becomes too small. If the card looks
                cramped in preview, print one copy first and test it with two different phones.
              </p>
            </InfoCard>

            <InfoCard
              icon={<CheckCircle2 className="w-5 h-5" />}
              title="A Simple Deployment Checklist"
            >
              <p>
                If you are placing WiFi QR cards in a business or short-term rental, the workflow
                matters as much as the code itself. Start with a guest network. Keep the SSID short
                enough for people to read if the printed label ever gets separated from the card.
                Then test the code from the exact spot where users will stand or sit.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Use a guest network instead of your main staff or home network.</li>
                <li>Choose WPA2 or WPA3 unless the router is very old.</li>
                <li>Print one test copy and scan it before producing more.</li>
                <li>Place the card where people naturally look for WiFi instructions.</li>
                <li>Replace the card immediately after any password change.</li>
              </ul>
              <p>
                If guests still ask for the password after you have a card on the table, the problem
                is usually not the QR code. It is usually placement, print size, or a network name
                that is too hard to read and match to the scanner prompt.
              </p>
            </InfoCard>

            <InfoCard
              icon={<ShieldCheck className="w-5 h-5" />}
              title="Guest Network Security Rules That Actually Help"
            >
              <p>
                QR codes are convenient, but convenience should not mean exposing your main network.
                The safest pattern is simple: keep the QR code tied to a guest SSID, isolate that
                network from internal devices, and rotate the password on a schedule you can live
                with. That way the card can be public while the sensitive network stays private.
              </p>
              <p>
                If the venue has printers, payment terminals, cameras, or smart-home equipment,
                those devices should live on a separate network from the guest QR code. Even in a
                home, a guest network prevents visitors from seeing shared folders or smart devices.
              </p>
              <p>
                When a password changes, treat the old card as invalid. Do not leave old printouts in
                drawers, notice boards, or welcome folders. A QR code is only as safe as the network
                it points to.
              </p>
            </InfoCard>

            <InfoCard
              icon={<AlertTriangle className="w-5 h-5" />}
              title="Why a QR Code Might Not Scan"
            >
              <p>
                Most scan failures are not caused by the QR format itself. They are caused by the
                surrounding environment or by mismatched credentials. If a phone sees the code but
                does not offer to connect, check the SSID spelling first. Network names are case
                sensitive, and an extra space or missing symbol is enough to make the card useless.
              </p>
              <p>
                If the phone opens a scanner but cannot join, the encryption type is the next thing
                to verify. WPA2 and WPA3 are the normal choices for modern routers. WEP is outdated,
                and a network marked as hidden must be flagged correctly when the QR code is created.
              </p>
              <p>
                If the card is printed correctly but scans only at certain angles, the code is probably
                too small or too close to the page edge. Increase the card size, keep white space
                around the symbol, and retest in the lighting conditions where the card will actually
                be used.
              </p>
            </InfoCard>

            <section className="bg-secondary/30 rounded-3xl p-6 sm:p-8 border border-border/40">
              <div className="flex items-center gap-3 mb-4">
                <LinkIcon className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-display font-bold">Quick Reference</h2>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/40 text-left">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Situation</th>
                      <th className="px-4 py-3 font-semibold">What to check</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    <tr>
                      <td className="px-4 py-3 font-medium">Phone sees the code but does not connect</td>
                      <td className="px-4 py-3 text-muted-foreground">SSID spelling, hidden-network flag, encryption type</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Code scans poorly</td>
                      <td className="px-4 py-3 text-muted-foreground">Print size, quiet zone, glare, cropping in the browser</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Guests keep asking for the password</td>
                      <td className="px-4 py-3 text-muted-foreground">Placement, signage clarity, and whether the card is easy to notice</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Old card no longer works</td>
                      <td className="px-4 py-3 text-muted-foreground">Password rotation or router changes; reprint the QR card</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-2">
              <Link href="/guide" className="group bg-card rounded-3xl p-6 border border-border/60 shadow-sm hover:border-primary/30 transition-colors">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Guide</p>
                <h2 className="text-xl font-display font-bold mb-2">Read the full WiFi QR guide</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A longer explanation of the QR format, compatibility, troubleshooting, and venue-specific use cases.
                </p>
              </Link>
              <Link href="/about" className="group bg-card rounded-3xl p-6 border border-border/60 shadow-sm hover:border-primary/30 transition-colors">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">About</p>
                <h2 className="text-xl font-display font-bold mb-2">See how the tool is built</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Learn why the generator runs locally, what data is never stored, and how the site handles privacy.
                </p>
              </Link>
            </section>

            <div className="pt-2">
              <AdBanner slot="9601998432" format="auto" className="min-h-[90px]" />
            </div>

            <section className="bg-primary/5 rounded-3xl p-6 sm:p-8 border border-primary/20 text-center">
              <h2 className="text-2xl font-display font-bold mb-3">Ready to generate your card?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-5">
                Use the generator, test one printed copy, and keep the card tied to a guest network.
                That combination is simple, useful, and much easier for visitors than typing a long password.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Wifi className="w-4 h-4" />
                Go to the Generator
              </Link>
            </section>
          </article>
        </main>

        <footer className="border-t mt-8 py-6 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center text-sm text-muted-foreground space-y-2">
            <p>Securely generated in your browser. Passwords are not stored.</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/guide" className="underline underline-offset-2 hover:text-foreground transition-colors">
                Guide
              </Link>
              <Link href="/resources" className="underline underline-offset-2 hover:text-foreground transition-colors">
                Resources
              </Link>
              <Link href="/faq" className="underline underline-offset-2 hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Link href="/about" className="underline underline-offset-2 hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="underline underline-offset-2 hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
