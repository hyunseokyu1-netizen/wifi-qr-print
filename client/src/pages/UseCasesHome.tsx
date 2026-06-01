import { Wifi, HomeIcon, AlertCircle, CheckCircle2, Lightbulb, ArrowRight, Users, Settings, Lock } from "lucide-react";
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
      <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
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

export default function UseCasesHome() {
  return (
    <>
      <Helmet>
        <title>WiFi QR Codes for Home Use — Families and Guests | WiFi QR Print</title>
        <meta
          name="description"
          content="How to use a WiFi QR code card at home — so friends, family, and guests can connect instantly without asking for the password or typing a long string of characters."
        />
        <link rel="canonical" href="https://wi-fi-qr.xyz/use-cases/home" />
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
              <HomeIcon className="w-4 h-4" />
              Use Case: Home &amp; Family
            </p>
            <h1 className="text-4xl font-display font-bold mb-4 leading-tight">
              WiFi QR Codes for Home Use
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A WiFi QR card in the living room means friends, family, and guests connect on
              their own — without asking, without fumbling through settings menus, and without
              you having to remember a password you set three years ago.
            </p>
          </div>

          {/* Problem */}
          <Section title="The Familiar Situation" icon={<AlertCircle className="w-5 h-5" />}>
            <p>
              Someone visits your home and the first question after sitting down is: "What's
              your WiFi?" You know the network name — it's the one the router came with, or
              something you chose years ago — but the password? That's somewhere on a sticky
              note, in a settings screen you haven't opened in months, or printed on the back
              of the router that's behind the TV cabinet.
            </p>
            <p>
              Once you find it, the next step is spelling it out character by character while
              the guest types it in, or writing it on a piece of paper that gets lost. Older
              family members — parents, grandparents — often struggle especially with passwords
              that mix uppercase and lowercase letters or include characters like @ or # that
              are in different places on different phone keyboards.
            </p>
            <p>
              If someone visits regularly, the question comes up every single time their phone
              doesn't auto-connect, or when they switch to a new device. The WiFi QR card turns
              this recurring friction into a one-second self-serve experience — every time.
            </p>
          </Section>

          {/* Benefits */}
          <Section title="What a QR Card Does for Your Home" icon={<CheckCircle2 className="w-5 h-5" />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <TipCard title="Guests connect themselves">
                Point the card toward guests who visit. They scan it, tap Connect, and they're
                on the network in under five seconds. No spelling, no dictating, no waiting.
              </TipCard>
              <TipCard title="Works for every generation">
                The native camera app on iPhones and modern Android phones handles the scan
                automatically — no extra app needed. Older relatives who struggle with long
                passwords can connect just as easily as anyone else.
              </TipCard>
              <TipCard title="You stop forgetting your own password">
                With a card always available, you don't need to memorize the password. When a
                new device needs to connect, scan the card yourself. No digging through router
                settings.
              </TipCard>
              <TipCard title="One card, unlimited connections">
                Print once and leave the card in the living room or kitchen permanently.
                Everyone who visits connects from the same card without any extra effort on
                your part.
              </TipCard>
            </div>
          </Section>

          {/* CTA mid-page */}
          <div className="my-10 p-6 bg-primary/5 rounded-2xl border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-display font-bold text-base mb-1">Make your home's QR card</p>
              <p className="text-sm text-muted-foreground">
                Free, instant, no account needed — just enter your network details and print.
              </p>
            </div>
            <CtaButton />
          </div>

          {/* Practical Tips */}
          <Section title="Setup Tips for Home Networks" icon={<Lightbulb className="w-5 h-5" />}>
            <p>
              Home networks have different priorities from commercial ones. These tips reflect
              what matters most in a residential setting — ease for guests and security for the
              household.
            </p>

            <div className="mt-6 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-display font-semibold text-foreground">Consider a separate guest network</h3>
                </div>
                <p>
                  Most home routers support creating a guest SSID alongside the main network.
                  Connecting guests to a guest network keeps them off the same network as your
                  computers, smart-home devices, shared drives, and printers.
                </p>
                <p className="mt-3">
                  For most households with close friends and family, sharing the main network is
                  fine. But if you frequently have acquaintances, children's friends, or service
                  workers visiting and connecting, a guest network is worth the five-minute setup.
                  You get internet access for guests without giving them access to everything else
                  on the local network.
                </p>
                <p className="mt-3">
                  If you create a guest network, point the QR card at that — and keep your main
                  network password private for household devices only.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-display font-semibold text-foreground">Choose a readable SSID and a strong-but-memorable password</h3>
                </div>
                <p>
                  If your router still has a factory-default SSID like "ASUS_2.4G" or
                  "NETGEAR47" — now is a good time to rename it. Log in to your router's admin
                  panel (usually at 192.168.1.1) and pick something short and recognizable, like
                  your surname, apartment number, or a simple nickname. This makes the QR card
                  prompt easier to understand when it appears on a guest's phone.
                </p>
                <p className="mt-3">
                  For the password, aim for something strong but not so complex that you'd never
                  be able to type it manually if needed. A passphrase — three or four random
                  words joined together — is both secure and easier to remember than a string of
                  random characters. For example, "purple-cloud-river-41" is strong and
                  typeable. With a QR card, guests won't need to type it anyway, but you might.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-display font-semibold text-foreground">Where to put the card at home</h3>
                </div>
                <p>
                  The living room or kitchen is the natural spot — where guests land first and
                  where they're most likely to reach for their phone. A card in a small frame or
                  holder looks intentional and is easy to hand to someone. You can also frame it
                  on a shelf or hang it on a hook near the door.
                </p>
                <p className="mt-3">
                  If you have elderly relatives who visit regularly — parents or grandparents who
                  connect a new device on each visit — consider printing a card specifically for
                  them to keep. They can scan it at home whenever they need to reconnect, without
                  calling to ask for the password.
                </p>
                <p className="mt-3">
                  Laminating the card makes it more durable. A home card that doesn't need to be
                  replaced frequently can be laminated once and left out indefinitely — until you
                  change your WiFi password.
                </p>
              </div>
            </div>
          </Section>

          {/* Step-by-step */}
          <Section title="How to Set It Up" icon={<ArrowRight className="w-5 h-5" />}>
            <p>
              Setting up a home WiFi QR card takes about five minutes from start to printed
              card.
            </p>
            <ol className="list-decimal list-inside space-y-3 mt-4">
              <li>
                <strong>Find your network name and password</strong> — check the router label,
                your router's admin panel, or look up the saved password in your phone's
                settings (iOS: Settings → WiFi → tap the network → Password; Android: Settings
                → WiFi → tap the network → Share).
              </li>
              <li>
                <strong>Open the generator</strong> and enter the SSID (network name) exactly
                as it appears — including any capital letters or spaces.
              </li>
              <li>
                <strong>Select WPA/WPA2</strong> as the encryption type (correct for most home
                routers made after 2010).
              </li>
              <li>
                <strong>Enter the password</strong> — it stays in your browser and is never
                sent anywhere.
              </li>
              <li>
                <strong>Print the card</strong> — one copy to start. Uncheck "Headers and
                footers" in the print dialog for a cleaner result.
              </li>
              <li>
                <strong>Test it</strong> — scan with your phone (while disconnected from WiFi)
                to confirm it connects correctly.
              </li>
              <li>
                <strong>Place it</strong> somewhere visible — living room, kitchen counter, or
                in a small frame on a shelf.
              </li>
            </ol>
          </Section>

          <div className="mb-12">
            <AdBanner slot="9601998432" format="auto" className="min-h-[90px]" />
          </div>

          {/* Final CTA */}
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 text-center mb-12">
            <p className="font-display font-bold text-lg mb-2">
              Create your home's WiFi QR card now
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Free and instant — no sign-up, no watermark on the printed card.
            </p>
            <CtaButton />
          </div>

          {/* Related links */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/use-cases/airbnb"
              className="group bg-card rounded-2xl p-5 border border-border/60 shadow-sm hover:border-primary/30 transition-colors"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Use Case</p>
              <h2 className="font-display font-bold mb-1">Airbnb &amp; Short-Term Rentals</h2>
              <p className="text-sm text-muted-foreground">
                How rental hosts use QR cards to give guests instant WiFi from the moment of check-in.
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
