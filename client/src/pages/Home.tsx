import { WifiForm } from "@/components/WifiForm";
import { PrintableCard } from "@/components/PrintableCard";
import { AdSense } from "@/components/AdSense";
import { useState } from "react";
import type { InsertWifiConfig } from "@shared/schema";
import { Wifi } from "lucide-react";

export default function Home() {
  const [config, setConfig] = useState<InsertWifiConfig>({
    ssid: "",
    password: "",
    encryption: "WPA",
    hidden: false,
  });

  const handleHistorySelect = (ssid: string, encryption: string, hidden: boolean) => {
    // Note: Password is NOT stored in history for security, so user must re-enter it
    setConfig((prev) => ({
      ...prev,
      ssid,
      encryption,
      hidden,
      password: "", // Reset password as it's not saved
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Wifi className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
              와이파이 QR 생성기
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* 상단 광고 영역 */}
        <AdSense client="ca-pub-YOUR_PUBLISHER_ID" slot="YOUR_AD_SLOT_ID" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Form & History */}
          <div className="lg:col-span-7 space-y-8">
            <section className="bg-card rounded-3xl p-6 sm:p-8 shadow-sm border border-border/60">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-bold mb-2">네트워크 정보 입력</h2>
                <p className="text-muted-foreground">
                  와이파이 정보를 입력하여 QR 코드를 생성하세요. 비밀번호는 저장되지 않습니다.
                </p>
              </div>
              
              <WifiForm 
                onUpdate={setConfig} 
                currentConfig={config}
              />
            </section>
          </div>

          {/* Right Column: Preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-secondary/30 rounded-3xl p-6 sm:p-8 border border-border/40 backdrop-blur-sm">
              <div className="mb-8 text-center">
                <h2 className="text-xl font-display font-bold mb-2">미리보기</h2>
                <p className="text-sm text-muted-foreground">
                  인쇄될 카드의 모습입니다.
                </p>
              </div>

              <div className="flex justify-center transform hover:scale-[1.02] transition-transform duration-300">
                <PrintableCard config={config} />
              </div>

              <div className="mt-8 flex justify-center">
                <p className="text-xs text-center text-muted-foreground max-w-xs">
                  팁: 여러 장을 인쇄하여 거실, 침실 또는 사무실에 비치해 보세요.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 광고 영역 */}
        <div className="mt-12">
          <AdSense client="ca-pub-YOUR_PUBLISHER_ID" slot="YOUR_AD_SLOT_ID" />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>브라우저에서 안전하게 생성됩니다. 비밀번호는 저장되지 않습니다.</p>
        </div>
      </footer>

      {/* Hidden Print Area - Only visible when printing */}
      <div id="print-area" className="hidden">
        <div className="transform scale-150 origin-center">
          <PrintableCard config={config} />
        </div>
      </div>
    </div>
  );
}
