import { WifiForm } from "@/components/WifiForm";
import { PrintableCard } from "@/components/PrintableCard";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AdBanner } from "@/components/AdBanner";
import { useState } from "react";
import type { InsertWifiConfig } from "@shared/schema";
import { Wifi, Printer, Shield, WifiOff, ChevronDown, ChevronUp } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Link } from "wouter";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border/60 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-secondary/30 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 shrink-0 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 shrink-0 text-muted-foreground" />}
      </button>
      {open && (
        <div className="px-5 pb-5 pt-2 text-muted-foreground text-sm leading-relaxed bg-card">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const { t } = useI18n();
  const [config, setConfig] = useState<InsertWifiConfig>({
    ssid: "",
    password: "",
    encryption: "WPA",
    hidden: false,
  });

  const steps = [
    { icon: <Wifi className="w-6 h-6" />, title: t("howto.step1.title"), desc: t("howto.step1.desc") },
    { icon: <Shield className="w-6 h-6" />, title: t("howto.step2.title"), desc: t("howto.step2.desc") },
    { icon: <WifiOff className="w-6 h-6" />, title: t("howto.step3.title"), desc: t("howto.step3.desc") },
    { icon: <Printer className="w-6 h-6" />, title: t("howto.step4.title"), desc: t("howto.step4.desc") },
  ];

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Wifi className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700" data-testid="text-app-title">
              {t("app.title")}
            </h1>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 print:p-0 print:max-w-none">
        {/* QR Generator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start print:block">
          <div className="lg:col-span-7 space-y-8 print:hidden">
            <section className="bg-card rounded-3xl p-6 sm:p-8 shadow-sm border border-border/60">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-bold mb-2" data-testid="text-section-title">{t("header.networkDetails")}</h2>
                <p className="text-muted-foreground">
                  {t("header.networkDetailsDesc")}
                </p>
              </div>
              <WifiForm onUpdate={setConfig} currentConfig={config} />
            </section>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24" id="print-column">
            <div className="bg-secondary/30 rounded-3xl p-6 sm:p-8 border border-border/40 backdrop-blur-sm print:bg-transparent print:border-0 print:p-0 print:shadow-none">
              <div className="mb-8 text-center print:hidden">
                <h2 className="text-xl font-display font-bold mb-2">{t("preview.title")}</h2>
                <p className="text-sm text-muted-foreground">{t("preview.desc")}</p>
              </div>
              <div className="flex justify-center transform hover:scale-[1.02] transition-transform duration-300 print:transform-none">
                <PrintableCard config={config} />
              </div>
              <div className="mt-8 flex justify-center print:hidden">
                <p className="text-xs text-center text-muted-foreground max-w-xs">{t("preview.tip")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <section className="mt-20 print:hidden">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-3">{t("howto.title")}</h2>
            <p className="text-muted-foreground">{t("howto.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border/60 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Step {i + 1}</span>
                </div>
                <h3 className="font-display font-bold text-lg leading-tight">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ad Banner */}
        <div className="mt-12 print:hidden">
          <AdBanner slot="9601998432" format="fluid" layoutKey="-6s+ed+2g-1n-4q" className="min-h-[90px]" />
        </div>

        {/* FAQ */}
        <section className="mt-16 print:hidden">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-3">{t("faq.title")}</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t mt-16 py-8 bg-white print:hidden">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2 text-sm text-muted-foreground">
          <p>{t("footer.text")}</p>
          <p>
            <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground transition-colors">
              {t("footer.privacy")}
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
