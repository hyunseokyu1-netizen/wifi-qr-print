import { Wifi } from "lucide-react";
import { Link } from "wouter";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { Helmet } from "react-helmet-async";

export default function About() {
  const { t } = useI18n();

  return (
    <>
      <Helmet>
        <title>About WiFi QR Print | Free WiFi QR Code Generator</title>
        <meta
          name="description"
          content="About WiFi QR Print — a free, browser-based tool for generating printable WiFi QR code cards. No account required. Your password never leaves your device."
        />
        <link rel="canonical" href="https://wi-fi-qr.xyz/about" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground font-sans">
        <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Wifi className="w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
                {t("app.title")}
              </span>
            </Link>
            <LanguageSwitcher />
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            {t("about.back")}
          </Link>

          <article className="prose prose-slate max-w-none">
            <h1 className="text-3xl font-display font-bold mb-2">About WiFi QR Print</h1>
            <p className="text-muted-foreground text-sm mb-8">wi-fi-qr.xyz</p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              WiFi QR Print is a free, browser-based tool for generating printable WiFi QR code cards.
              It was built for anyone who regularly shares WiFi access with guests — hotel hosts, café
              owners, office managers, Airbnb operators, or anyone who's tired of spelling out a
              16-character password while company waits.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold mb-4">What It Does</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The tool takes your WiFi network name (SSID), password, and encryption type, and generates
                a clean, printable card containing both a scannable QR code and the human-readable
                credentials. Guests point their phone's camera at the code and connect automatically — no
                typing required.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The card is designed to print well on standard A4 or US Letter paper without any
                additional software. The live preview on the main page updates in real time as you type, so
                you can see exactly what will be printed before you send it to the printer.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold mb-4">Privacy and Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All processing happens locally in your browser. Your WiFi password is never transmitted
                to any server — it exists only in your browser's memory while you are on the page, and is
                discarded the moment you navigate away or close the tab. There is no database, no user
                accounts, and no server-side logging of any credentials you enter.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This is a deliberate architectural decision. Running QR generation entirely client-side
                means there is no central point of compromise — even if the server were to be breached,
                no WiFi passwords would be exposed, because none are ever stored there.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The site uses Google AdSense to display advertisements, which may use cookies as described
                in our{" "}
                <Link href="/privacy" className="text-primary underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold mb-4">Free to Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                WiFi QR Print is and will remain free to use with no account required, no watermarks on
                printed cards, and no usage limits. You can generate as many QR codes as you need for as
                many networks as you like. The costs of running the site are covered by the display
                advertising shown on the page.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold mb-4">How It Was Built</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                WiFi QR Print is built with React and TypeScript, using the{" "}
                <code className="text-sm bg-secondary px-1.5 py-0.5 rounded">qrcode.react</code> library
                for QR code generation. The site is hosted on Vercel and has no backend — all QR
                generation runs client-side in the browser.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The tool supports English, Korean (한국어), Chinese (中文), and German (Deutsch). Language
                is detected automatically from your browser settings and can be changed at any time using
                the switcher in the top-right corner of the page.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For feedback, bug reports, or questions about this tool, please refer to the contact
                information listed in the{" "}
                <Link href="/privacy" className="text-primary underline">
                  Privacy Policy
                </Link>
                . We read every message, though we may not be able to respond to all enquiries
                individually.
              </p>
            </section>
          </article>

          <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/20 text-center">
            <p className="font-display font-bold text-lg mb-2">Try the generator</p>
            <p className="text-muted-foreground text-sm mb-4">
              Free, instant, no account needed.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Wifi className="w-4 h-4" />
              Go to the Generator
            </Link>
          </div>
        </main>

        <footer className="border-t mt-8 py-6 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center text-sm text-muted-foreground space-y-2">
            <p>{t("footer.text")}</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/guide" className="underline underline-offset-2 hover:text-foreground transition-colors">
                {t("footer.guide")}
              </Link>
              <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground transition-colors">
                {t("footer.privacy")}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
