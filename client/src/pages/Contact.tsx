import { Wifi, Mail, MessageSquare, Bug, Lightbulb, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import type { ReactNode } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Helmet } from "react-helmet-async";

function ContactCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
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

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | WiFi QR Print</title>
        <meta
          name="description"
          content="Get in touch with WiFi QR Print for bug reports, feature requests, or general questions about the free WiFi QR code generator."
        />
        <link rel="canonical" href="https://wi-fi-qr.xyz/contact" />
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

        <main className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            ← Back to Generator
          </Link>

          <div className="mb-10">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Mail className="w-4 h-4" />
              Contact
            </p>
            <h1 className="text-4xl font-display font-bold mb-4">Get in Touch</h1>
            <p className="text-muted-foreground leading-relaxed">
              WiFi QR Print is a small, independently run tool. If something isn't working,
              you have a suggestion, or you just want to say hello — send an email. We read
              every message, though response times may vary.
            </p>
          </div>

          {/* Email block */}
          <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1">
                Email
              </p>
              <a
                href="mailto:hyunseok.yu1@gmail.com"
                className="text-lg font-display font-semibold text-primary hover:opacity-80 transition-opacity"
              >
                hyunseok.yu1@gmail.com
              </a>
            </div>
            <a
              href="mailto:hyunseok.yu1@gmail.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shrink-0"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
          </div>

          {/* What to contact about */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-bold mb-5">What to include in your message</h2>
            <div className="space-y-3">
              <ContactCard icon={<Bug className="w-4 h-4" />} title="Bug reports">
                Describe what you expected to happen and what actually happened. Include your
                browser name and version, and the operating system (e.g. Chrome 124 on macOS).
                If the issue is with a printed card not scanning, include the phone model and OS
                version of the device that's having trouble.
              </ContactCard>
              <ContactCard icon={<Lightbulb className="w-4 h-4" />} title="Feature requests">
                Describe the use case you have in mind — what you're trying to do and why the
                current tool doesn't quite cover it. Specific scenarios are more useful than
                general suggestions.
              </ContactCard>
              <ContactCard icon={<MessageSquare className="w-4 h-4" />} title="General feedback">
                Anything else — positive or critical. If the tool helped you, that's great to
                hear. If something about the experience was confusing or frustrating, that's
                equally useful.
              </ContactCard>
            </div>
          </section>

          {/* Response note */}
          <section className="mb-10 text-muted-foreground text-sm leading-relaxed space-y-3">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Response time</h2>
            <p>
              This is a side project maintained by one person. Most messages get a reply within
              a few days, but during busy periods it may take longer. If your question is
              time-sensitive, the{" "}
              <Link href="/faq" className="text-primary underline underline-offset-2">
                FAQ page
              </Link>{" "}
              covers the most common issues and may have an immediate answer.
            </p>
            <p>
              For questions about how the tool works, the{" "}
              <Link href="/guide" className="text-primary underline underline-offset-2">
                complete guide
              </Link>{" "}
              and the{" "}
              <Link href="/resources" className="text-primary underline underline-offset-2">
                resources page
              </Link>{" "}
              cover most topics in detail — from encryption types and hidden networks to
              printing tips and guest network setup.
            </p>
          </section>

          {/* FAQ nudge */}
          <div className="bg-secondary/40 rounded-2xl border border-border/50 p-5 flex gap-4">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <p className="font-display font-semibold text-foreground mb-1">
                Check the FAQ first
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                Questions about device compatibility, encryption settings, hidden networks,
                and why a QR code might not connect are answered in detail on the FAQ page.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
              >
                Go to FAQ →
              </Link>
            </div>
          </div>
        </main>

        <footer className="border-t mt-8 py-6 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center text-sm text-muted-foreground space-y-2">
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
