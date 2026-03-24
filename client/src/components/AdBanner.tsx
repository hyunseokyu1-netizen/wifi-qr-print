import { useEffect, useRef } from "react";

interface AdBannerProps {
  slot: string;
  format?: string;
  layoutKey?: string;
  className?: string;
}

export function AdBanner({ slot, format = "auto", layoutKey, className = "" }: AdBannerProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {
      // AdSense not loaded yet or blocked by ad blocker
    }
  }, []);

  return (
    <div className={`print:hidden overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5956370843613648"
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layoutKey ? { "data-ad-layout-key": layoutKey } : {})}
        data-full-width-responsive="true"
      />
    </div>
  );
}
