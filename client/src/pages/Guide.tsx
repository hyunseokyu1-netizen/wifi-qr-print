import { Wifi } from "lucide-react";
import { Link } from "wouter";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AdBanner } from "@/components/AdBanner";
import { useI18n } from "@/lib/i18n";
import { Helmet } from "react-helmet-async";

export default function Guide() {
  const { t } = useI18n();

  return (
    <>
      <Helmet>
        <title>Complete Guide to WiFi QR Codes | WiFi QR Print</title>
        <meta
          name="description"
          content="Everything you need to know about WiFi QR codes — how they work, security best practices, troubleshooting, and where to use them in hotels, cafés, offices, and homes."
        />
        <link rel="canonical" href="https://wi-fi-qr.xyz/guide" />
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
            {t("guide.back")}
          </Link>

          <article className="prose prose-slate max-w-none">
            <h1 className="text-3xl font-display font-bold mb-2">The Complete Guide to WiFi QR Codes</h1>
            <p className="text-muted-foreground text-sm mb-8">Last updated: April 2026</p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              WiFi QR codes are one of the most practical applications of QR technology in everyday life.
              Whether you run a café, manage a hotel, or simply want guests to connect to your home network
              without the usual password hunt, a WiFi QR code makes the process instant. This guide covers
              everything you need to know — how they work, how to keep your network secure, and where to
              use them most effectively.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold mb-4">What Is a WiFi QR Code?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A WiFi QR code is a standard QR code that encodes your network credentials — the network
                name (SSID), password, and encryption type — in a format that smartphones can read
                automatically. When a user points their camera at the code, the operating system recognizes
                the WiFi credentials and offers to connect without the user having to type anything.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This convenience relies on a plain-text format standardized by the WiFi Alliance. A typical
                encoded string looks like this:
              </p>
              <pre className="bg-secondary/50 rounded-xl px-4 py-3 text-sm font-mono overflow-x-auto mb-4">
                WIFI:T:WPA;S:YourNetworkName;P:YourPassword;H:false;;
              </pre>
              <p className="text-muted-foreground leading-relaxed">
                Each field has a specific role: <strong>T</strong> is the encryption type (WPA, WEP, or
                empty for open networks), <strong>S</strong> is the SSID, <strong>P</strong> is the
                password, and <strong>H</strong> indicates whether the network is hidden. The generator on
                this site builds this string automatically from the details you enter.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold mb-4">Device Compatibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                WiFi QR code scanning is built into the native camera app on virtually all modern
                smartphones:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong>iOS 11 and later</strong> — point the Camera app at the code; a notification
                  banner appears offering to join the network.
                </li>
                <li>
                  <strong>Android 10 and later</strong> — the Camera or Google Lens app shows a direct
                  connect prompt.
                </li>
                <li>
                  <strong>Android 9 and earlier</strong> — requires a third-party app such as Google Lens
                  or a QR code reader that understands the WiFi format.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                No additional app is needed on any smartphone released in the last five years. The WiFi QR
                standard is also supported on recent versions of Windows and macOS through their built-in
                camera or QR scanning utilities.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold mb-4">Security Considerations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A common question is whether printing a WiFi QR code is a security risk. The key distinction
                is this: <strong>anyone who scans the code can join your network.</strong> This is
                intentional for guest access — but it means you should think carefully about which network
                you share.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The best practice is to use a <strong>guest network</strong> rather than your main network.
                Almost every modern router supports creating a separate guest SSID. Guests get internet
                access, but cannot reach your main devices, storage, or smart-home equipment. This means
                even if your QR code card is photographed by someone you didn't intend, only the guest
                network is accessible.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">Additional recommendations:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Use WPA2 or WPA3 encryption — never WEP, which is trivially breakable.</li>
                <li>Choose a password of at least 12 characters mixing letters, numbers, and symbols.</li>
                <li>Change the guest password every few months and reprint the card.</li>
                <li>
                  Your password is processed only in your browser when using this generator — it is never
                  sent to any server.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold mb-6">Best Uses by Venue</h2>

              <h3 className="text-xl font-display font-semibold mb-3">Hotels and Accommodation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Guest rooms are the most natural home for a WiFi QR code card. A printed card on the
                bedside table or welcome folder eliminates the most common guest service call — "What's the
                WiFi password?" For multi-room properties, every room can share the same card if they use a
                single network, or have individual cards for per-room networks. Laminating the card makes it
                durable and easy to wipe clean between stays.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3">Cafés and Restaurants</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A table card or counter display lets customers connect without flagging down staff.
                High-turnover venues benefit particularly since queues form quickly when customers ask about
                WiFi. Cards placed in a small table stand (available cheaply at office supply stores) are
                visible, professional, and easy to replace when the password changes.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3">Offices and Co-working Spaces</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Many offices run two networks: one for staff and one for visitors. A QR card at reception
                covers the visitor network, while keeping the main staff SSID private. Co-working spaces can
                place a card on each desk or in each meeting room. Separate cards for separate networks make
                it easy to rotate visitor passwords without disrupting staff access.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3">Homes and Short-Term Rentals</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Airbnb and similar short-term rental hosts can print a card for each listing. Guests never
                need to call or message for the WiFi password. For regular homes, a card in the living room
                or kitchen handles the majority of "what's your WiFi?" requests from friends and family —
                and means you never have to remember the password yourself either.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold mb-4">Troubleshooting WiFi QR Codes</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If a QR code doesn't connect as expected, check the following in order:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>
                  <strong>SSID case:</strong> Network names are case-sensitive. "MyHome" and "myhome" are
                  different networks. Re-enter the SSID exactly as it appears on your router's label or
                  admin page.
                </li>
                <li>
                  <strong>Encryption mismatch:</strong> If your router uses WPA3 but you selected WEP (or
                  vice versa), the code may fail on some devices. WPA/WPA2 in this generator covers the
                  vast majority of home and business routers.
                </li>
                <li>
                  <strong>Hidden network flag:</strong> If your router doesn't broadcast the SSID, check
                  the "Hidden Network" checkbox in the generator. Without this flag, devices won't know to
                  search for the hidden network.
                </li>
                <li>
                  <strong>Special characters in password:</strong> Characters like backslash and double
                  quotes can cause parsing errors in some implementations. If the code fails, try
                  simplifying the password and regenerating.
                </li>
                <li>
                  <strong>Device support:</strong> iPhones below iOS 11 and Android phones below version 9
                  cannot scan WiFi QR codes natively. A third-party QR app is needed on those devices.
                </li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold mb-4">Step-by-Step: Creating Your WiFi QR Card</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Follow these steps to create a WiFi QR card using the generator on this site:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>
                  <strong>Enter the network name (SSID)</strong> exactly as it appears — spelling and
                  capitalization matter.
                </li>
                <li>
                  <strong>Select the encryption type</strong> — WPA/WPA2/WPA3 covers most modern routers.
                </li>
                <li>
                  <strong>Enter the password</strong> — it is processed only in your browser and never
                  stored or transmitted.
                </li>
                <li>
                  <strong>Check "Hidden Network"</strong> if your router does not broadcast the SSID.
                </li>
                <li>
                  <strong>Preview the card</strong> on the right side of the screen — it updates in real
                  time.
                </li>
                <li>
                  <strong>Click "Print Card"</strong> — in the browser print dialog, uncheck "Headers and
                  footers" for a clean card with no browser chrome.
                </li>
                <li>
                  <strong>Place the card</strong> where guests can see and scan it easily.
                </li>
              </ol>
            </section>
          </article>

          <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/20 text-center">
            <p className="font-display font-bold text-lg mb-2">Ready to create your card?</p>
            <p className="text-muted-foreground text-sm mb-4">
              The generator is free, instant, and works entirely in your browser.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Wifi className="w-4 h-4" />
              Go to the Generator
            </Link>
          </div>

          <div className="mt-12">
            <AdBanner slot="9601998432" format="auto" className="min-h-[90px]" />
          </div>
        </main>

        <footer className="border-t mt-8 py-6 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center text-sm text-muted-foreground space-y-2">
            <p>{t("footer.text")}</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link href="/about" className="underline underline-offset-2 hover:text-foreground transition-colors">
                {t("footer.about")}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
