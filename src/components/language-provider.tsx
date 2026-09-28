import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { LocalizedText } from "@/lib/content";

type Language = "en" | "bn";
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; tx: (value: LocalizedText) => string };

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = window.sessionStorage.getItem("bppa-language");
    if (saved === "en" || saved === "bn") setLanguage(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "bn" ? "bn" : "en";
    window.sessionStorage.setItem("bppa-language", language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, tx: (content: LocalizedText) => content[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}