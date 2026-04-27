import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { useState, useCallback, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { I18nContext, type Language, getTranslation } from "@/lib/i18n";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Guide from "@/pages/Guide";
import About from "@/pages/About";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/guide" component={Guide} />
      <Route path="/about" component={About} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function detectLanguage(): Language {
  const saved = localStorage.getItem("wifi-qr-lang");
  const valid: Language[] = ["en", "ko", "zh", "de"];
  if (valid.includes(saved as Language)) return saved as Language;

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("ko")) return "ko";
  if (browserLang.startsWith("zh")) return "zh";
  if (browserLang.startsWith("de")) return "de";
  return "en";
}

function App() {
  const [lang, setLang] = useState<Language>(detectLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const handleSetLang = useCallback((newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("wifi-qr-lang", newLang);
  }, []);

  const t = useCallback((key: string) => getTranslation(lang, key), [lang]);

  return (
    <HelmetProvider>
      <I18nContext.Provider value={{ lang, setLang: handleSetLang, t }}>
        <TooltipProvider>
          <Router />
          <Toaster />
          <Analytics />
        </TooltipProvider>
      </I18nContext.Provider>
    </HelmetProvider>
  );
}

export default App;
