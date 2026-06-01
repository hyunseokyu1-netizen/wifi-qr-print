import { useState } from "react";
import { Wifi, ChevronDown, ChevronUp, Shield, Smartphone, Settings, HelpCircle, Users } from "lucide-react";
import { Link } from "wouter";
import type { ReactNode } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AdBanner } from "@/components/AdBanner";
import { Helmet } from "react-helmet-async";

function FaqItem({ question, answer }: { question: string; answer: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border/60 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-secondary/30 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 shrink-0 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 shrink-0 text-muted-foreground" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 pt-2 text-muted-foreground text-sm leading-relaxed bg-card space-y-2">
          {answer}
        </div>
      )}
    </div>
  );
}

function FaqCategory({
  icon,
  title,
  items,
}: {
  icon: ReactNode;
  title: string;
  items: { q: string; a: ReactNode }[];
}) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
          {icon}
        </div>
        <h2 className="text-xl font-display font-bold">{title}</h2>
      </div>
      <div className="space-y-3">
        {items.map((item, i) => (
          <FaqItem key={i} question={item.q} answer={item.a} />
        ))}
      </div>
    </section>
  );
}

export default function Faq() {
  const categories = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Security & Privacy",
      items: [
        {
          q: "Is my WiFi password safe when I use this generator?",
          a: (
            <>
              <p>
                Yes — completely. Every part of the QR code generation happens inside your own
                browser. Your network name and password are never transmitted to any server, never
                stored in a database, and never logged anywhere. The moment you close or navigate
                away from the page, those values disappear.
              </p>
              <p>
                This is a deliberate architectural decision. Because there is no server-side
                processing, there is no central system that could be breached to expose your
                credentials. What you type stays on your device.
              </p>
            </>
          ),
        },
        {
          q: "Is a WiFi QR code more secure than writing the password on a sign?",
          a: (
            <>
              <p>
                In most situations, yes. A password written on a whiteboard or sign can be
                photographed at range and shared widely without any effort. A QR code requires an
                active scan — it is not readable by glancing across the room. That raises the bar
                for accidental or casual sharing.
              </p>
              <p>
                For the best security posture, always point the QR code to a dedicated guest
                network rather than your primary network. That way, even if the code is scanned by
                someone you did not intend, only the isolated guest network is accessible — not
                your computers, storage, printers, or smart-home devices.
              </p>
            </>
          ),
        },
        {
          q: "What should I do if I shared the QR code with someone I no longer trust?",
          a: (
            <p>
              Change your WiFi password immediately through your router's admin panel (typically
              accessible at 192.168.1.1 or 192.168.0.1). Once the password is updated, the old
              QR code stops working. Generate a new QR code with the updated credentials, print a
              fresh card, and replace any copies of the old one. If you were using a guest
              network, your main network and connected devices remain completely unaffected.
            </p>
          ),
        },
        {
          q: "Does the site use cookies or track my activity?",
          a: (
            <p>
              The site stores only one item in your browser's local storage: your language
              preference (e.g. English or Korean). This never leaves your device. Third-party
              services — specifically Google AdSense for advertising — may use cookies for their
              own purposes. You can find the full details in the{" "}
              <Link href="/privacy" className="text-primary underline">
                Privacy Policy
              </Link>
              .
            </p>
          ),
        },
      ],
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Device Compatibility",
      items: [
        {
          q: "Which devices can scan WiFi QR codes?",
          a: (
            <>
              <p>
                All modern smartphones support WiFi QR scanning through their native camera app:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>
                  <strong>iPhone (iOS 11 and later)</strong> — point the default Camera app at
                  the code. A notification banner appears at the top of the screen offering to
                  join the network.
                </li>
                <li>
                  <strong>Android 10 and later</strong> — the Camera app or Google Lens
                  recognizes the code and shows a direct "Connect" prompt.
                </li>
                <li>
                  <strong>Android 9 and earlier</strong> — a third-party QR reader app (such as
                  Google Lens or Barcode Scanner) is required on these older devices.
                </li>
              </ul>
              <p className="mt-1">
                WiFi QR codes are also supported on recent versions of Windows and macOS through
                their built-in camera utilities.
              </p>
            </>
          ),
        },
        {
          q: "Does it work with 2.4 GHz and 5 GHz networks?",
          a: (
            <p>
              Yes. The WiFi QR code format encodes the network name (SSID), not the frequency
              band, so it works identically for 2.4 GHz, 5 GHz, and 6 GHz (Wi-Fi 6E) networks.
              Enter the exact SSID as it appears on your router — if your router broadcasts
              separate SSIDs for each band (e.g. "HomeNetwork" and "HomeNetwork_5G"), generate
              one QR code per network.
            </p>
          ),
        },
        {
          q: "Does this work with all router brands?",
          a: (
            <p>
              Yes. The WiFi QR code standard is a universal format that is independent of the
              router manufacturer. It works with ASUS, TP-Link, Netgear, Linksys, Cisco,
              Huawei, and any other brand. The QR code is read entirely by the smartphone
              operating system, so the router brand has no bearing on whether it connects
              successfully.
            </p>
          ),
        },
        {
          q: "What if the phone sees the code but does not offer to connect?",
          a: (
            <>
              <p>The most common causes, in order of likelihood:</p>
              <ol className="list-decimal list-inside space-y-1 mt-1">
                <li>
                  <strong>SSID case mismatch</strong> — network names are case-sensitive.
                  "MyHome" and "myhome" are different networks. Re-enter the SSID exactly.
                </li>
                <li>
                  <strong>Wrong encryption type</strong> — check your router settings and make
                  sure the encryption selected here (WPA, WEP, None) matches what your router
                  actually uses.
                </li>
                <li>
                  <strong>Hidden network flag</strong> — if your router does not broadcast the
                  SSID, the "Hidden Network" checkbox must be checked when generating the code.
                </li>
                <li>
                  <strong>Special characters in the password</strong> — backslashes, quotes, and
                  semicolons can cause parsing errors. Try simplifying the password and
                  regenerating the code.
                </li>
              </ol>
            </>
          ),
        },
      ],
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Network Settings",
      items: [
        {
          q: "What is the difference between WPA, WEP, and None?",
          a: (
            <>
              <p>
                These refer to the wireless security protocol your router uses to protect the
                network:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>
                  <strong>WPA / WPA2 / WPA3</strong> — the current standard. WPA2 is supported
                  by virtually all devices made after 2004. WPA3 is the newest version and
                  provides stronger encryption. Select "WPA" in the generator for most modern
                  home and business routers.
                </li>
                <li>
                  <strong>WEP</strong> — an older, now-broken protocol from the 1990s. It can
                  be cracked in minutes with freely available tools. Avoid using WEP if at all
                  possible.
                </li>
                <li>
                  <strong>None (Open Network)</strong> — no password. Anyone in range can
                  connect. Suitable only for intentionally public networks where no authentication
                  is intended.
                </li>
              </ul>
            </>
          ),
        },
        {
          q: "How do I check which encryption type my router uses?",
          a: (
            <p>
              Log in to your router's admin panel — the address is usually 192.168.1.1 or
              192.168.0.1, printed on the label on the back of the router. Navigate to the
              Wireless or Wi-Fi settings section and look for "Security Mode" or "Authentication
              Type." Most routers sold after 2018 default to WPA2 or WPA2/WPA3 mixed mode. If
              you are unsure, selecting WPA/WPA2 in this generator covers the majority of modern
              routers.
            </p>
          ),
        },
        {
          q: "Can I use this for a hidden network?",
          a: (
            <p>
              Yes. Check the "Hidden Network" checkbox before generating the QR code. This adds
              the H:true flag to the encoded WiFi string, which tells the phone to actively
              search for the network rather than waiting for a broadcast beacon. Without this
              flag, devices may see the QR code but fail to connect if the SSID is not
              broadcasting.
            </p>
          ),
        },
        {
          q: "Can I use this for an open network with no password?",
          a: (
            <p>
              Yes. Select "None (Open Network)" in the Encryption field and leave the Password
              field blank. The generated QR code will connect devices directly without prompting
              for a password. This is commonly used for public hotspots in libraries, transit
              stations, or community spaces where open access is intentional.
            </p>
          ),
        },
        {
          q: "What happens if I change my WiFi password?",
          a: (
            <p>
              The existing QR code stops working because it contains the old password encoded
              inside it. To restore access, enter your new password in the generator, produce a
              new QR card, and replace any printed copies of the old one. The whole process takes
              under a minute. This is one reason it is worth using a memorable but secure
              password — one you won't need to rotate too frequently.
            </p>
          ),
        },
      ],
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      title: "Using the Generator",
      items: [
        {
          q: "Does it work without an internet connection?",
          a: (
            <p>
              Once the page has fully loaded in your browser, QR code generation and the print
              preview are completely offline. No network connection is needed for either step.
              This matters for use cases where you need to generate a QR code on-site without
              reliable connectivity — for example, setting up a venue before an event or in a
              location with a weak signal.
            </p>
          ),
        },
        {
          q: "Is there a limit to how many QR codes I can generate?",
          a: (
            <p>
              No. The generator is entirely free with no usage caps, no account required, and no
              watermark on printed cards. You can generate and print as many QR codes as you
              need, for as many networks and locations as you like.
            </p>
          ),
        },
        {
          q: "Can I save the QR code as an image file?",
          a: (
            <p>
              The fastest method is a screenshot on your phone or computer. On desktop, the
              browser's "Print to PDF" option in the print dialog captures a clean digital copy
              of the card. Alternatively, you can right-click the QR code image directly in
              some browsers and save it as a PNG. A dedicated download button may be added in a
              future update.
            </p>
          ),
        },
        {
          q: "How should I print the card for the best scan results?",
          a: (
            <>
              <p>
                A few things make a reliable difference in scan quality:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>
                  Print at full size and check the browser's scaling setting before printing —
                  accidental reduction to 70% or 80% makes codes harder to scan.
                </li>
                <li>
                  Use matte paper if possible. Glossy paper reflects light and can cause scan
                  failures in brightly lit rooms.
                </li>
                <li>
                  Keep the white border (quiet zone) around the QR code intact — do not crop the
                  card to the edge of the code itself.
                </li>
                <li>
                  Laminate the card if it will be handled repeatedly, exposed to moisture, or
                  cleaned regularly (e.g. café table cards, hotel room cards).
                </li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Guest Networks",
      items: [
        {
          q: "What is a guest network and should I use one?",
          a: (
            <>
              <p>
                A guest network is a separate SSID provided by your router that gives internet
                access while keeping users isolated from your primary network. Devices connected
                to the guest network cannot see or communicate with computers, printers, NAS
                drives, smart-home devices, or security cameras on your main network.
              </p>
              <p>
                For any venue or situation where you share WiFi with people you don't fully
                trust, a guest network is strongly recommended. This includes hotels, cafés,
                offices with visitor areas, Airbnb listings, and even regular homes where guests
                visit. Most routers sold in the last decade include a guest network option in
                their admin panel.
              </p>
            </>
          ),
        },
        {
          q: "How often should I change the guest network password?",
          a: (
            <p>
              For high-turnover venues like cafés or hotels, a monthly rotation is a reasonable
              baseline. For short-term rentals, changing the password between guests is ideal —
              though this requires printing and replacing the QR card each time. For low-traffic
              settings like a home office or family home, every three to six months is typically
              sufficient. The key is consistency: when you change the password, replace the
              printed card immediately.
            </p>
          ),
        },
        {
          q: "Can I have multiple QR codes for different networks?",
          a: (
            <p>
              Yes. Simply run the generator once per network — enter the SSID and password for
              each, print the corresponding card, and label them clearly. This is common in
              offices that run a staff network and a separate visitor network, or hotels with
              per-floor or per-room SSIDs. Each card is independent and self-contained.
            </p>
          ),
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>WiFi QR Code FAQ – Common Questions Answered | WiFi QR Print</title>
        <meta
          name="description"
          content="Answers to the most common questions about WiFi QR codes: security, device compatibility, encryption types, hidden networks, guest WiFi, and printing tips."
        />
        <link rel="canonical" href="https://wi-fi-qr.xyz/faq" />
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

          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </p>
            <h1 className="text-4xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Common questions about WiFi QR codes — from security and privacy to device
              compatibility, encryption settings, and printing. Can't find your answer here?
              Check the{" "}
              <Link href="/guide" className="text-primary underline underline-offset-2">
                full guide
              </Link>{" "}
              for a deeper explanation.
            </p>
          </div>

          {categories.map((cat, i) => (
            <FaqCategory key={i} icon={cat.icon} title={cat.title} items={cat.items} />
          ))}

          <div className="mt-4 mb-12">
            <AdBanner slot="9601998432" format="auto" className="min-h-[90px]" />
          </div>

          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 text-center">
            <p className="font-display font-bold text-lg mb-2">Ready to create your card?</p>
            <p className="text-muted-foreground text-sm mb-4">
              Free, instant, and runs entirely in your browser — no account needed.
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
            <p>Securely generated in your browser. Passwords are not stored.</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/guide" className="underline underline-offset-2 hover:text-foreground transition-colors">
                Guide
              </Link>
              <Link href="/resources" className="underline underline-offset-2 hover:text-foreground transition-colors">
                Resources
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
