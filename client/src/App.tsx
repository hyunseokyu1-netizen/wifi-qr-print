import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useCallback } from "react";
import { I18nContext, type Language, getTranslation } from "@/lib/i18n";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("wifi-qr-lang");
    const valid: Language[] = ["en", "ko", "zh", "de"];
    return valid.includes(saved as Language) ? (saved as Language) : "ko";
  });

  const handleSetLang = useCallback((newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("wifi-qr-lang", newLang);
  }, []);

  const t = useCallback((key: string) => getTranslation(lang, key), [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </I18nContext.Provider>
  );
}

export default App;
