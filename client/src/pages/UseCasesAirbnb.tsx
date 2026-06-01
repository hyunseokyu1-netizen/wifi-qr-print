import { Wifi, Home, AlertCircle, CheckCircle2, Lightbulb, ArrowRight, BookOpen, Star, RotateCcw, Shield } from "lucide-react";
import { Link } from "wouter";
import type { ReactNode } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AdBanner } from "@/components/AdBanner";
import { Helmet } from "react-helmet-async";

function Section({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
          {icon}
        </div>
        <h2 className="text-2xl font-display font-bold">{title}</h2>
      </div>
      <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

function TipCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="bg-card rounded-2xl p-5 border border-border/60 shadow-sm flex gap-4">
      <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function CtaButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
    >
      <Wifi className="w-4 h-4" />
      Create Your WiFi QR Card
    </Link>
  );
}

export default function UseCasesAirbnb() {
  return (
    <>
      <Helmet>
        <title>WiFi QR Codes for Airbnb and Short-Term Rentals | WiFi QR Print</title>
        <meta
          name="description"
          content="How Airbnb hosts and short-term rental operators use WiFi QR code cards to give guests instant network access — without messages, phone calls, or handwritten notes."
        />
        <link rel="canonical" href="https://wi-fi-qr.xyz/use-cases/airbnb" />
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

        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            ← Back to Generator
          </Link>

          {/* Hero */}
          <div className="mb-12">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Home className="w-4 h-4" />
              Use Case: Airbnb &amp; Short-Term Rentals
            </p>
            <h1 className="text-4xl font-display font-bold mb-4 leading-tight">
              WiFi QR Codes for Airbnb and Short-Term Rentals
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A printed WiFi QR card in your listing means guests connect the moment they walk
              through the door — no messages, no phone calls, no hunting through check-in
              instructions for a password buried in paragraph four.
            </p>
          </div>

          {/* Problem */}
          <Section title="The WiFi Friction Every Host Knows" icon={<AlertCircle className="w-5 h-5" />}>
            <p>
              WiFi is one of the first things guests ask about in short-term rentals — often
              before they've even put down their bags. The most common pattern goes like this:
              the host includes the password in a lengthy check-in message, the guest either
              missed it or can't copy-paste it on a new device, and the first interaction after
              arrival is a message or call asking for the password again.
            </p>
            <p>
              Handwritten welcome notes are an improvement, but they have their own problems.
              Guests misread characters — especially in passwords that mix uppercase and
              lowercase letters, zeroes and O's, or ones and lowercase L's. A typo means
              another support message. A guest struggling to connect on their first night leaves
              a worse first impression than the property itself deserves.
            </p>
            <p>
              For hosts managing multiple listings or properties with high turnover, the
              accumulated time spent on WiFi communication adds up quickly. A printed QR card
              eliminates the question entirely — before it's even asked.
            </p>
          </Section>

          {/* Benefits */}
          <Section title="What Changes with a QR Card" icon={<CheckCircle2 className="w-5 h-5" />}>
            <p>
              A WiFi QR card placed in a visible spot in the property lets guests connect within
              seconds of arrival — by scanning with their phone camera, with no typing required.
              The practical effects on your hosting experience are significant.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <TipCard icon={<Star className="w-4 h-4" />} title="Better first impressions">
                Instant connectivity from the moment of arrival signals a well-prepared property.
                Guests who connect immediately tend to settle in faster and start their stay on
                a positive note.
              </TipCard>
              <TipCard icon={<CheckCircle2 className="w-4 h-4" />} title="Fewer support messages">
                WiFi questions are one of the most common guest messages. A QR card removes this
                category of contact entirely — guests help themselves, silently and instantly.
              </TipCard>
              <TipCard icon={<BookOpen className="w-4 h-4" />} title="Cleaner welcome materials">
                Instead of burying the password in a wall of check-in text, you can reference
                "the QR card on the kitchen counter" and move on. Welcome guides become shorter
                and easier to read.
              </TipCard>
              <TipCard icon={<RotateCcw className="w-4 h-4" />} title="Easy password rotation">
                Change the password between guest groups by generating a new card and swapping
                it out. The whole process takes two minutes and requires no updates to your
                listing description or message templates.
              </TipCard>
            </div>
            <p>
              Guests who have a smooth arrival experience — one where everything just works —
              are more likely to leave positive reviews mentioning the property's ease of use.
              WiFi is a small detail that contributes to a larger impression.
            </p>
          </Section>

          {/* CTA mid-page */}
          <div className="my-10 p-6 bg-primary/5 rounded-2xl border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-display font-bold text-base mb-1">Make your listing's QR card</p>
              <p className="text-sm text-muted-foreground">
                Free, instant, no sign-up — enter your network details and print.
              </p>
            </div>
            <CtaButton />
          </div>

          {/* Practical Tips */}
          <Section title="Practical Setup Tips for Rental Hosts" icon={<Lightbulb className="w-5 h-5" />}>
            <p>
              Getting the setup right once means it runs on autopilot for every subsequent
              guest. These tips cover the most common decisions rental hosts face when
              implementing WiFi QR cards.
            </p>

            <div className="mt-6 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-display font-semibold text-foreground">Put the card in the welcome guide — and the room</h3>
                </div>
                <p>
                  The most effective placement is a physical card in a highly visible spot: the
                  kitchen counter, the entrance table, or the bedside table if the listing is a
                  single room. A small tabletop card holder (available cheaply at stationery
                  stores) makes the card look intentional and easy to notice.
                </p>
                <p className="mt-3">
                  If you provide a printed welcome guide or folder, include a printed copy of the
                  QR card inside as well. Guests who find it in the guide first know where to look
                  if they ever need to share the connection with a second device. For self-check-in
                  properties, this is especially useful since guests arrive without any in-person
                  handover.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <RotateCcw className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-display font-semibold text-foreground">Rotate the password between guest groups</h3>
                </div>
                <p>
                  For security, change the guest WiFi password between bookings — or at least
                  between longer stays. This ensures that previous guests can no longer access
                  the network after checkout. It's a small step that's worth taking for any
                  property with regular turnover.
                </p>
                <p className="mt-3">
                  With a QR card, rotating passwords is frictionless: update the router, generate
                  a new card in about thirty seconds, print it, and place it in the property
                  before the next guest arrives. There's no need to update booking platform
                  messages or listing descriptions — the card handles everything.
                </p>
                <p className="mt-3">
                  Laminate the card if you're replacing it less frequently. For high-turnover
                  rentals where the password changes often, plain printed cards are easier to
                  cycle out and cost almost nothing to reprint.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-display font-semibold text-foreground">Use a dedicated guest network</h3>
                </div>
                <p>
                  If the property has smart-home devices — a smart lock, thermostat, camera
                  system, or TV — those devices should be on a separate network from the guest
                  WiFi. Most modern routers support creating a guest SSID that provides internet
                  access while blocking access to other devices on the main network.
                </p>
                <p className="mt-3">
                  This matters even for properties without obvious smart-home equipment. A guest
                  network prevents connected devices from potentially accessing network storage,
                  printers, or any management tools you use for the property. It also means that
                  if a guest connects a compromised device, your operational systems remain
                  unaffected.
                </p>
                <p className="mt-3">
                  Name the guest network something that identifies the property — "OakApartment-Guest"
                  or "StudioA-WiFi" — so guests recognize it when the QR code prompts them to
                  connect. Avoid generic names like "NETGEAR5G" that might cause guests to
                  hesitate or accidentally connect to a neighbor's network instead.
                </p>
              </div>
            </div>
          </Section>

          {/* Step-by-step */}
          <Section title="Step-by-Step Setup for Your Listing" icon={<ArrowRight className="w-5 h-5" />}>
            <p>
              From router configuration to card in the property, the full setup takes about
              fifteen minutes the first time — and under five minutes for every password
              rotation after that.
            </p>
            <ol className="list-decimal list-inside space-y-3 mt-4">
              <li>
                <strong>Create a guest network</strong> on your router. Log in to the admin
                panel (usually at 192.168.1.1) and look for a "Guest Network" or "Guest WiFi"
                option. Give it a short, recognizable name and a strong password.
              </li>
              <li>
                <strong>Open the generator</strong> and enter the guest SSID exactly as it
                appears in your router settings — spelling and capitalization are critical.
              </li>
              <li>
                <strong>Select WPA/WPA2</strong> as the encryption type, which covers
                virtually all modern routers.
              </li>
              <li>
                <strong>Enter the password</strong> — it is processed only in your browser and
                never transmitted to any server.
              </li>
              <li>
                <strong>Preview and print</strong> one test card. In the browser print dialog,
                uncheck "Headers and footers" for a clean card.
              </li>
              <li>
                <strong>Test with two devices</strong> — ideally one iPhone and one Android
                phone — from the spot where the card will be placed in the property.
              </li>
              <li>
                <strong>Place the card</strong> somewhere guests will notice quickly: kitchen
                counter, entrance table, or beside the TV. If you have a welcome guide, include
                a copy inside.
              </li>
              <li>
                <strong>Store the credentials</strong> in a password manager or secure note.
                You'll need them each time you rotate the password.
              </li>
            </ol>
          </Section>

          <div className="mb-12">
            <AdBanner slot="9601998432" format="auto" className="min-h-[90px]" />
          </div>

          {/* Final CTA */}
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 text-center mb-12">
            <p className="font-display font-bold text-lg mb-2">
              Create your rental's WiFi QR card now
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Free and instant — no sign-up, no watermark on the printed card.
            </p>
            <CtaButton />
          </div>

          {/* Related links */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/use-cases/cafe"
              className="group bg-card rounded-2xl p-5 border border-border/60 shadow-sm hover:border-primary/30 transition-colors"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Use Case</p>
              <h2 className="font-display font-bold mb-1">Cafés &amp; Restaurants</h2>
              <p className="text-sm text-muted-foreground">
                How to set up table cards that let customers connect without interrupting staff.
              </p>
            </Link>
            <Link
              href="/faq"
              className="group bg-card rounded-2xl p-5 border border-border/60 shadow-sm hover:border-primary/30 transition-colors"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">FAQ</p>
              <h2 className="font-display font-bold mb-1">Common questions answered</h2>
              <p className="text-sm text-muted-foreground">
                Encryption types, troubleshooting, guest networks, and more.
              </p>
            </Link>
          </div>
        </main>

        <footer className="border-t mt-8 py-6 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center text-sm text-muted-foreground space-y-2">
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
