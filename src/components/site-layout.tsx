import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { AccessibilityMenu } from "@/components/accessibility-menu";
import { navigation, text } from "@/lib/content";
import logo from "@/assets/bppa-logo.png.asset.json";

export function SiteLayout({ children }: { children: ReactNode }) {
  const { tx } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-3 focus:text-accent-foreground">{tx(text("Skip to main content", "মূল বিষয়ে যান"))}</a>
      <div className="bg-primary px-5 py-2 text-center text-xs font-semibold text-primary-foreground">
        {tx(text("Official website draft · Information awaiting confirmation is clearly marked", "অফিশিয়াল ওয়েবসাইট খসড়া · নিশ্চিতকরণের অপেক্ষায় থাকা তথ্য স্পষ্টভাবে চিহ্নিত"))}
      </div>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 lg:flex lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={tx(text("BPPA home", "বিপিপিএ হোম"))}>
            <img src={logo.url} alt="BPPA" width={64} height={64} className="h-14 w-14 shrink-0 object-contain" />
            <div className="min-w-0 leading-tight">
              <strong className="block truncate font-display text-sm font-extrabold uppercase text-primary sm:text-base">BPPA</strong>
              <span className="hidden truncate text-[11px] font-semibold uppercase tracking-wide text-muted-foreground sm:block">{tx(text("Bangladesh Para Pickleball Association", "বাংলাদেশ প্যারা পিকলবল অ্যাসোসিয়েশন"))}</span>
            </div>
          </Link>
          <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label={tx(text("Main navigation", "প্রধান নেভিগেশন"))}>
            {navigation.map((item) => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="border-b-2 border-transparent px-3 py-7 text-xs font-bold uppercase text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "border-accent text-primary" }}>{tx(item.label)}</Link>)}
          </nav>
          <div className="flex shrink-0 items-center gap-2 lg:ml-3">
            <AccessibilityMenu />
            <Button variant="ghost" size="icon" className="min-h-11 min-w-11 lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={tx(text("Toggle menu", "মেনু খুলুন বা বন্ধ করুন"))}>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</Button>
          </div>
        </div>
        {menuOpen && <nav id="mobile-navigation" className="border-t border-border bg-background px-5 py-3 lg:hidden" aria-label={tx(text("Mobile navigation", "মোবাইল নেভিগেশন"))}>{navigation.map((item) => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="block border-b border-border py-3 text-sm font-bold text-foreground last:border-0" activeProps={{ className: "text-primary" }}>{tx(item.label)}</Link>)}</nav>}
      </header>
      <main id="main-content" tabIndex={-1} className="focus:outline-none">{children}</main>
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <div className="max-w-md"><img src={logo.url} alt="" width={72} height={72} className="mb-5 h-16 w-16 object-contain" /><h2 className="font-display text-xl font-extrabold uppercase">{tx(text("Bangladesh Para Pickleball Association", "বাংলাদেশ প্যারা পিকলবল অ্যাসোসিয়েশন"))}</h2><p className="mt-4 text-sm leading-7 text-primary-foreground/75">{tx(text("Working toward an inclusive national platform for para pickleball in Bangladesh.", "বাংলাদেশে প্যারা পিকলবলের জন্য একটি অন্তর্ভুক্তিমূলক জাতীয় প্ল্যাটফর্ম তৈরিতে কাজ করছে।"))}</p></div>
          <div><h2 className="mb-4 text-xs font-extrabold uppercase text-accent">{tx(text("Explore", "ঘুরে দেখুন"))}</h2><ul className="space-y-3 text-sm">{navigation.slice(1, 6).map((item) => <li key={item.to}><Link to={item.to} className="text-primary-foreground/75 hover:text-primary-foreground">{tx(item.label)}</Link></li>)}</ul></div>
          <div><h2 className="mb-4 text-xs font-extrabold uppercase text-accent">{tx(text("Official information", "আনুষ্ঠানিক তথ্য"))}</h2><p className="text-sm leading-7 text-primary-foreground/75">{tx(text("Contact address, telephone, email, leadership, and affiliations are awaiting official confirmation.", "যোগাযোগের ঠিকানা, টেলিফোন, ইমেইল, নেতৃত্ব ও অধিভুক্তির তথ্য আনুষ্ঠানিক নিশ্চিতকরণের অপেক্ষায়।"))}</p><Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent">{tx(text("Contact page", "যোগাযোগ পাতা"))}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        </div>
        <div className="border-t border-primary-foreground/15 px-5 py-5 text-center text-xs text-primary-foreground/80">© 2026 BPPA · {tx(text("Frontend prototype — not an official publication", "ফ্রন্টএন্ড প্রোটোটাইপ — আনুষ্ঠানিক প্রকাশনা নয়"))} · <Link to="/accessibility" className="font-bold text-primary-foreground underline underline-offset-4 hover:text-accent">Accessibility statement (draft)</Link></div>
      </footer>
    </div>
  );
}