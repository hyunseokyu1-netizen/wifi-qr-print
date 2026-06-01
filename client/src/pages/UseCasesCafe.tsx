import { Wifi, Coffee, AlertCircle, CheckCircle2, Lightbulb, ArrowRight, MapPin, Settings, Shield } from "lucide-react";
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

function TipCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-card rounded-2xl p-5 border border-border/60 shadow-sm">
      <h3 className="font-display font-semibold text-base text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
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

export default function UseCasesCafe() {
  return (
    <>
      <Helmet>
        <title>WiFi QR Codes for Cafés and Restaurants | WiFi QR Print</title>
        <meta
          name="description"
          content="How cafés and restaurants use WiFi QR code cards to let customers connect instantly — without asking staff, without squinting at a chalkboard, and without typing a long password."
        />
        <link rel="canonical" href="https://wi-fi-qr.xyz/use-cases/cafe" />
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
              <Coffee className="w-4 h-4" />
              Use Case: Cafés &amp; Restaurants
            </p>
            <h1 className="text-4xl font-display font-bold mb-4 leading-tight">
              WiFi QR Codes for Cafés and Restaurants
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A printed WiFi QR card on each table lets customers connect the moment they sit down
              — no interruptions, no misheard passwords, no squinting at a chalkboard across the
              room. Here's everything you need to set it up the right way.
            </p>
          </div>

          {/* Problem */}
          <Section title="The Problem with the Old Approach" icon={<AlertCircle className="w-5 h-5" />}>
            <p>
              Most cafés and restaurants share their WiFi in one of two ways: a password written
              on a chalkboard or a slip of paper, or staff telling customers verbally when asked.
              Both approaches have the same set of problems, which repeat hundreds of times a week
              in a busy venue.
            </p>
            <p>
              When the password is on a board, customers at the back of the room can't read it.
              Others photograph it and share it externally — there's no way to know how widely the
              password has spread. Handwritten passwords are often difficult to read, especially
              when they mix uppercase and lowercase letters or numbers that look like letters (0
              vs O, 1 vs l). The result: customers type it wrong and ask again anyway.
            </p>
            <p>
              When staff deliver the password verbally, the interruption costs time. A table of
              four might each ask separately. During peak hours, this adds up to dozens of small
              interruptions per shift — time that could be spent on actual service. And after a
              hectic rush, there's always the question of whether the staff member actually said
              WPA2 or WEP.
            </p>
            <p>
              Neither approach is efficient, and neither gives the venue any control over who has
              the password or how long it's valid. A printed WiFi QR card solves all of this at
              once.
            </p>
          </Section>

          {/* Benefits */}
          <Section title="What Changes with a QR Card" icon={<CheckCircle2 className="w-5 h-5" />}>
            <p>
              A WiFi QR code card placed on the table (or at the counter) reduces the WiFi
              question to zero. Customers see the card, point their phone camera at it, and
              connect in under three seconds. No typing, no misreading, no interruption.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <TipCard title="No more interruptions">
                Staff don't field WiFi questions during service. The card handles the question
                silently and instantly, which is especially valuable during peak hours.
              </TipCard>
              <TipCard title="No typos or misreads">
                QR codes encode the password exactly. Customers who scan the code never type a
                single character — they connect automatically.
              </TipCard>
              <TipCard title="Cleaner aesthetics">
                A small, well-designed card sits neatly beside a menu or condiment holder. It's
                more professional than a handwritten note and doesn't clutter the visual space.
              </TipCard>
              <TipCard title="Instant password rotation">
                When you change the WiFi password, print a new card and swap it out. The process
                takes two minutes. No erasing boards, no briefing staff on the new password.
              </TipCard>
            </div>
            <p>
              For venues that care about the customer experience, the difference is noticeable.
              Customers who connect quickly tend to settle in faster, order another round, and
              leave better reviews. Removing a small friction point contributes to the overall
              impression of a smooth, well-run place.
            </p>
          </Section>

          {/* CTA mid-page */}
          <div className="my-10 p-6 bg-primary/5 rounded-2xl border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-display font-bold text-base mb-1">Ready to make your café card?</p>
              <p className="text-sm text-muted-foreground">
                Free, instant, no account needed — just enter your network details and print.
              </p>
            </div>
            <CtaButton />
          </div>

          {/* Practical Tips */}
          <Section title="Practical Setup Tips for Cafés" icon={<Lightbulb className="w-5 h-5" />}>
            <p>
              Getting the card right the first time avoids problems later. These tips cover the
              most common mistakes venue owners make when setting up WiFi QR cards.
            </p>

            <div className="mt-6 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-display font-semibold text-foreground">Where to place the card</h3>
                </div>
                <p>
                  The best position is somewhere customers look naturally shortly after sitting
                  down — next to the menu, on top of the condiment holder, or in a small tabletop
                  stand. Counter placement works well for takeaway queues. Avoid laminating the
                  card flat to the table surface: customers will try to scan from awkward angles
                  and often fail. A freestanding card or one leaning against something is easier
                  to scan.
                </p>
                <p className="mt-3">
                  If you have outdoor seating, print separate cards and protect them from moisture
                  with lamination. Wet or wrinkled cards scan poorly — the QR code requires a
                  flat, undamaged surface and a clean white border.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-display font-semibold text-foreground">Set your SSID to match the venue name</h3>
                </div>
                <p>
                  The network name (SSID) appears on the customer's phone when the QR code is
                  scanned — right before they tap "Connect." If your SSID is something generic
                  like "NETGEAR_2G" or "router123", customers may hesitate or not recognise it as
                  yours. Log in to your router's admin panel and rename the guest network to
                  something clear: "BlueDoor Café Guest", "TheBakery-WiFi", or simply your café
                  name followed by "-Guest".
                </p>
                <p className="mt-3">
                  Keep the name short — long SSIDs get truncated on small phone screens. Under 20
                  characters is a good target. Avoid special characters like apostrophes or
                  ampersands, which can occasionally cause display issues on older Android devices.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-display font-semibold text-foreground">Use a dedicated guest network</h3>
                </div>
                <p>
                  Never share the same network your point-of-sale system, payment terminal, or
                  back-office computer uses. Most modern routers — including consumer-grade models
                  from TP-Link, ASUS, and Netgear — support creating a separate guest SSID that
                  provides internet access while isolating guest devices from the main network.
                </p>
                <p className="mt-3">
                  Setting this up typically takes five minutes in the router's admin panel. Once
                  configured, the guest network runs independently. Customers can browse the
                  internet but cannot reach your printers, POS terminals, network storage, or any
                  other device on your staff network. This is the single most important security
                  step for any venue sharing WiFi with the public.
                </p>
                <p className="mt-3">
                  Point the QR code only at the guest network. Your staff and operational
                  equipment should be on the main network, which customers never see.
                </p>
              </div>
            </div>
          </Section>

          {/* Step-by-step */}
          <Section title="Step-by-Step: From Generator to Table" icon={<ArrowRight className="w-5 h-5" />}>
            <p>
              The whole process from opening the generator to having a printed card on your
              tables takes about ten minutes.
            </p>
            <ol className="list-decimal list-inside space-y-3 mt-4">
              <li>
                <strong>Set up your guest network</strong> — log in to your router and create a
                dedicated guest SSID if you haven't already. Choose a recognizable name and a
                strong password (at least 12 characters).
              </li>
              <li>
                <strong>Open the generator</strong> at wi-fi-qr.xyz and enter the guest network
                name (SSID) exactly as it appears in your router settings. Spelling and
                capitalization matter.
              </li>
              <li>
                <strong>Select WPA/WPA2</strong> as the encryption type — this covers virtually
                all routers manufactured after 2010.
              </li>
              <li>
                <strong>Enter the password</strong> — it is processed only in your browser and
                never sent anywhere.
              </li>
              <li>
                <strong>Preview the card</strong> on the right side of the screen. The QR code
                updates in real time as you type.
              </li>
              <li>
                <strong>Print the card</strong> — in the browser print dialog, uncheck "Headers
                and footers" for a clean output. Print one test copy first.
              </li>
              <li>
                <strong>Test it</strong> — scan with two different phones (iOS and Android) from
                the spot where the card will actually sit on the table. Confirm both connect
                successfully.
              </li>
              <li>
                <strong>Print the full batch</strong> and place a card on each table. Laminate if
                the cards will be handled repeatedly or exposed to spills.
              </li>
            </ol>
            <p className="mt-4">
              Keep the original network credentials somewhere safe — in a password manager or a
              locked note on your phone. When you rotate the WiFi password, you'll need them to
              generate a new card.
            </p>
          </Section>

          <div className="mb-12">
            <AdBanner slot="9601998432" format="auto" className="min-h-[90px]" />
          </div>

          {/* Final CTA */}
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 text-center mb-12">
            <p className="font-display font-bold text-lg mb-2">
              Create your café's WiFi QR card now
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Free and instant — no sign-up, no watermark on the printed card.
            </p>
            <CtaButton />
          </div>

          {/* Related links */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/guide"
              className="group bg-card rounded-2xl p-5 border border-border/60 shadow-sm hover:border-primary/30 transition-colors"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Guide</p>
              <h2 className="font-display font-bold mb-1">Complete WiFi QR guide</h2>
              <p className="text-sm text-muted-foreground">
                How the QR format works, device compatibility, and security best practices.
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
