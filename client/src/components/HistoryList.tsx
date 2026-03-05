import { useWifiConfigs } from "@/hooks/use-wifi";
import { format } from "date-fns";
import { Wifi, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface HistoryListProps {
  onSelect: (ssid: string, encryption: string, hidden: boolean) => void;
}

export function HistoryList({ onSelect }: HistoryListProps) {
  const { data: history, isLoading } = useWifiConfigs();
  const { t } = useI18n();

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-16 bg-muted/50 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (!history || history.length === 0) {
    return (
      <div className="text-center py-12 px-4 rounded-2xl border-2 border-dashed border-muted-foreground/20" data-testid="text-history-empty">
        <Wifi className="w-12 h-12 mx-auto text-muted-foreground/40 mb-3" />
        <h3 className="font-semibold text-muted-foreground">{t("history.empty")}</h3>
        <p className="text-sm text-muted-foreground/60 mt-1">
          {t("history.emptyDesc")}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {history.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.ssid, item.encryption, item.hidden)}
          className="w-full text-left bg-card hover:bg-accent/50 p-4 rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-200 group"
          data-testid={`button-history-${item.id}`}
        >
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {item.ssid}
            </h4>
            <span className="text-xs font-medium px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
              {item.encryption}
            </span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground gap-3">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {item.createdAt && format(new Date(item.createdAt), "MMM d, yyyy")}
            </span>
            {item.hidden && (
              <span className="text-orange-500/80 font-medium">{t("history.hidden")}</span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
