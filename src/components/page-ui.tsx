import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/components/language-provider";
import type { LocalizedText } from "@/lib/content";

export function PageIntro({ eyebrow, title, description }: { eyebrow: LocalizedText; title: LocalizedText; description: LocalizedText }) {
  const { tx } = useLanguage();
  return <section className="bg-primary text-primary-foreground"><div className="mx-auto max-w-[1440px] px-5 py-16 sm:py-20 lg:px-8"><p className="mb-4 text-xs font-extrabold uppercase text-accent">{tx(eyebrow)}</p><h1 className="max-w-4xl font-display text-4xl font-black uppercase leading-[1.05] sm:text-6xl">{tx(title)}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/75 sm:text-lg">{tx(description)}</p></div></section>;
}

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: LocalizedText; title: LocalizedText; description?: LocalizedText; light?: boolean }) {
  const { tx } = useLanguage();
  return <div className="max-w-3xl"><p className="mb-3 text-xs font-extrabold uppercase text-accent">{tx(eyebrow)}</p><h2 className={`font-display text-3xl font-black uppercase leading-tight sm:text-5xl ${light ? "text-primary-foreground" : "text-foreground"}`}>{tx(title)}</h2>{description && <p className={`mt-5 text-base leading-8 ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{tx(description)}</p>}</div>;
}

export function TextLink({ to, children }: { to: "/about" | "/para-pickleball" | "/athletes" | "/events" | "/news-media" | "/contact"; children: React.ReactNode }) {
  return <Link to={to} className="inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-sm font-extrabold uppercase text-primary hover:text-accent-foreground">{children}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>;
}