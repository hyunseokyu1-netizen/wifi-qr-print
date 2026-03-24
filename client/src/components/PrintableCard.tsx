import { QRCodeSVG } from "qrcode.react";
import { Wifi, Lock, EyeOff } from "lucide-react";
import type { InsertWifiConfig } from "@shared/schema";
import { useI18n } from "@/lib/i18n";

interface PrintableCardProps {
  config: InsertWifiConfig;
}

export function PrintableCard({ config }: PrintableCardProps) {
  const { t } = useI18n();
  const escapeString = (str: string) => str.replace(/([\\;,":])/g, "\\$1");

  const ssid = escapeString(config.ssid);
  const password = config.password ? escapeString(config.password) : "";
  const encryption = config.encryption === "nopass" ? "nopass" : config.encryption;
  const hidden = config.hidden ? "true" : "false";

  const qrString = `WIFI:S:${ssid};T:${encryption};P:${password};H:${hidden};;`;

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-border/50 max-w-sm w-full mx-auto aspect-[3/4] flex flex-col items-center justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-300 print:overflow-visible print:aspect-auto print:h-auto print:shadow-none print:justify-start print:gap-6" data-testid="printable-card">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/10 to-transparent rounded-t-3xl" />

      <div className="relative z-10 flex flex-col items-center w-full pt-4">
        <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
          <Wifi className="w-8 h-8" strokeWidth={2.5} />
        </div>

        <h3 className="font-display font-bold text-2xl text-center text-foreground mb-1 leading-tight px-4">
          {t("card.title")}
        </h3>
        <p className="text-muted-foreground text-sm font-medium">{t("card.subtitle")}</p>
      </div>

      <div className="relative z-10 bg-white p-4 rounded-2xl shadow-sm border border-border/40">
        <QRCodeSVG
          value={qrString}
          size={200}
          level="Q"
          includeMargin={true}
          className="rounded-lg"
          fgColor="hsl(var(--foreground))"
        />
      </div>

      <div className="relative z-10 w-full space-y-3 mt-4">
        <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 border border-border/50">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider" data-testid="text-network-label">{t("card.network")}</span>
          <span className="font-semibold text-foreground text-sm truncate max-w-[180px]" data-testid="text-network-name">{config.ssid || t("card.defaultNetwork")}</span>
        </div>

        {config.password && (
          <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 border border-border/50">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider" data-testid="text-password-label">{t("card.password")}</span>
            <div className="flex items-center gap-2">
              <Lock className="w-3 h-3 text-muted-foreground" />
              <span className="font-mono text-sm font-medium text-foreground truncate max-w-[150px]" data-testid="text-password-value">
                {config.password}
              </span>
            </div>
          </div>
        )}

        {config.hidden && (
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
            <EyeOff className="w-3 h-3" />
            <span data-testid="text-hidden-label">{t("card.hidden")}</span>
          </div>
        )}
      </div>

      <div className="absolute bottom-2 text-[10px] text-muted-foreground/40 font-mono">
        {t("card.footer")}
      </div>
    </div>
  );
}
