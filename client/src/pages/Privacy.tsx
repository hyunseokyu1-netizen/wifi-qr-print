import { Wifi } from "lucide-react";
import { Link } from "wouter";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  const { t } = useI18n();

  return (
    <>
      <Helmet>
        <title>Privacy Policy – WiFi QR Print</title>
        <meta name="description" content="Privacy policy for WiFi QR Print. Your WiFi passwords are never stored or sent to any server — all processing happens in your browser." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://wi-fi-qr.xyz/privacy" />
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
          {t("privacy.back")}
        </Link>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-display font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: March 2026</p>

          <section className="mb-8">
            <h2 className="text-xl font-display font-bold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              WiFi QR Print (<strong>wi-fi-qr.xyz</strong>) is a free, browser-based tool that generates printable WiFi QR codes.
              We are committed to protecting your privacy. This policy explains what information is collected and how it is used.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-display font-bold mb-3">Information We Do NOT Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We do <strong>not</strong> collect, store, or transmit any of the following:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>WiFi network names (SSID)</li>
              <li>WiFi passwords</li>
              <li>Generated QR codes</li>
              <li>Any personally identifiable information</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              All QR code generation happens entirely within your browser. No data is ever sent to our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-display font-bold mb-3">Cookies &amp; Local Storage</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use your browser's <strong>localStorage</strong> solely to remember your language preference (e.g. English, Korean).
              This data never leaves your device.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Third-party services on this site may use cookies for their own purposes:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
              <li><strong>Google AdSense</strong> — displays advertisements and may use cookies to show relevant ads. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google's Privacy Policy</a>.</li>
              <li><strong>Google Fonts</strong> — loads web fonts from Google's servers. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google's Privacy Policy</a>.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-display font-bold mb-3">Google AdSense &amp; Advertising</h2>
            <p className="text-muted-foreground leading-relaxed">
              This site uses Google AdSense to display advertisements. Google may use cookies and web beacons to serve ads based on your prior visits to this and other websites.
              You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google Ads Settings</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-display font-bold mb-3">Analytics</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not currently use any analytics services. If this changes in the future, this policy will be updated accordingly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-display font-bold mb-3">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              This service is not directed to children under the age of 13. We do not knowingly collect any personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-display font-bold mb-3">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
              Continued use of the service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-display font-bold mb-3">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, you can reach us at:
              <br />
              <strong>wi-fi-qr.xyz</strong>
            </p>
          </section>
        </article>
      </main>

      <footer className="border-t mt-8 py-6 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>{t("footer.text")}</p>
        </div>
      </footer>
    </div>
    </>
  );
}
