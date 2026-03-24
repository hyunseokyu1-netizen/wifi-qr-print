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
    <div
      className="bg-white rounded-3xl p-6 shadow-xl border border-border/50 max-w-xs w-full mx-auto flex flex-col items-center gap-4 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 print:overflow-visible print:shadow-none print:max-w-[260px] print:p-5 print:gap-3"
      data-testid="printable-card"
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-primary/10 to-transparent rounded-t-3xl" />

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center w-full pt-2">
        <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-3 text-primary print:h-10 print:w-10">
          <Wifi className="w-6 h-6" strokeWidth={2.5} />
        </div>
        <h3 className="font-display font-bold text-xl text-center text-foreground mb-0.5 leading-tight px-2 print:text-lg">
          {t("card.title")}
        </h3>
        <p className="text-muted-foreground text-xs font-medium">{t("card.subtitle")}</p>
      </div>

      {/* QR Code */}
      <div className="relative z-10 bg-white p-3 rounded-2xl shadow-sm border border-border/40 print:p-2">
        <QRCodeSVG
          value={qrString}
          size={150}
          level="Q"
          includeMargin={true}
          className="rounded-lg print:w-[130px] print:h-[130px]"
          fgColor="hsl(var(--foreground))"
        />
      </div>

      {/* Network Info */}
      <div className="relative z-10 w-full space-y-2">
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-secondary/50 border border-border/50">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider" data-testid="text-network-label">{t("card.network")}</span>
          <span className="font-semibold text-foreground text-xs truncate max-w-[150px]" data-testid="text-network-name">{config.ssid || t("card.defaultNetwork")}</span>
        </div>

        {config.password && (
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-secondary/50 border border-border/50">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider" data-testid="text-password-label">{t("card.password")}</span>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-muted-foreground" />
              <span className="font-mono text-xs font-medium text-foreground truncate max-w-[120px]" data-testid="text-password-value">
                {config.password}
              </span>
            </div>
          </div>
        )}

        {config.hidden && (
          <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground pt-0.5">
            <EyeOff className="w-3 h-3" />
            <span data-testid="text-hidden-label">{t("card.hidden")}</span>
          </div>
        )}
      </div>

      <div className="relative z-10 text-[9px] text-muted-foreground/40 font-mono pb-1">
        {t("card.footer")}
      </div>
    </div>
  );
}
