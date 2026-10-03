import type { LocalizedText } from "@/lib/content";

// The site is published in English only; copy objects keep their shape for future managed content.
const tx = (content: LocalizedText) => content.en;

export function useLanguage() {
  return { tx };
}
