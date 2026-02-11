import { WifiForm } from "@/components/WifiForm";
import { PrintableCard } from "@/components/PrintableCard";
import { HistoryList } from "@/components/HistoryList";
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
              WiFi QR Print
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Form & History */}
          <div className="lg:col-span-7 space-y-8">
            <section className="bg-card rounded-3xl p-6 sm:p-8 shadow-sm border border-border/60">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-bold mb-2">Network Details</h2>
                <p className="text-muted-foreground">
                  Enter your Wi-Fi credentials to generate a QR code. Your password is never saved.
                </p>
              </div>
              
              <WifiForm 
                onUpdate={setConfig} 
                currentConfig={config}
              />
            </section>

            <section>
              <h3 className="text-lg font-bold font-display mb-4 px-2">Recent Networks</h3>
              <HistoryList onSelect={handleHistorySelect} />
            </section>
          </div>

          {/* Right Column: Preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-secondary/30 rounded-3xl p-6 sm:p-8 border border-border/40 backdrop-blur-sm">
              <div className="mb-8 text-center">
                <h2 className="text-xl font-display font-bold mb-2">Live Preview</h2>
                <p className="text-sm text-muted-foreground">
                  This is how your card will look when printed
                </p>
              </div>

              <div className="flex justify-center transform hover:scale-[1.02] transition-transform duration-300">
                <PrintableCard config={config} />
              </div>

              <div className="mt-8 flex justify-center">
                <p className="text-xs text-center text-muted-foreground max-w-xs">
                  Tip: Print multiple copies and place them in your guest room, living room, or office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Securely generated in your browser. Passwords are not stored.</p>
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
