import { WifiForm } from "@/components/WifiForm";
import { PrintableCard } from "@/components/PrintableCard";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AdBanner } from "@/components/AdBanner";
import { useState } from "react";
import type { InsertWifiConfig } from "@shared/schema";
import { Wifi } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { t } = useI18n();
  const [config, setConfig] = useState<InsertWifiConfig>({
    ssid: "",
    password: "",
    encryption: "WPA",
    hidden: false,
  });

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start print:block">
          <div className="lg:col-span-7 space-y-8 print:hidden">
            <section className="bg-card rounded-3xl p-6 sm:p-8 shadow-sm border border-border/60">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-bold mb-2" data-testid="text-section-title">{t("header.networkDetails")}</h2>
                <p className="text-muted-foreground">
                  {t("header.networkDetailsDesc")}
                </p>
              </div>
              <WifiForm
                onUpdate={setConfig}
                currentConfig={config}
              />
            </section>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24 print:flex print:justify-center print:pt-8">
            <div className="bg-secondary/30 rounded-3xl p-6 sm:p-8 border border-border/40 backdrop-blur-sm print:bg-transparent print:border-0 print:p-0 print:shadow-none">
              <div className="mb-8 text-center print:hidden">
                <h2 className="text-xl font-display font-bold mb-2">{t("preview.title")}</h2>
                <p className="text-sm text-muted-foreground">
                  {t("preview.desc")}
                </p>
              </div>

              <div className="flex justify-center transform hover:scale-[1.02] transition-transform duration-300 print:transform-none">
                <PrintableCard config={config} />
              </div>

              <div className="mt-8 flex justify-center print:hidden">
                <p className="text-xs text-center text-muted-foreground max-w-xs">
                  {t("preview.tip")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t mt-12 py-8 bg-white print:hidden">
        {/* Bottom banner ad — above footer text */}
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <AdBanner
            slot="9601998432"
            format="fluid"
            layoutKey="-6s+ed+2g-1n-4q"
            className="min-h-[90px]"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>{t("footer.text")}</p>
        </div>
      </footer>
    </div>
  );
}
