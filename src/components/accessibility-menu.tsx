import { useEffect, useState } from "react";
import { Accessibility, Check, Minus, Plus, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type Settings = { textScale: number; highContrast: boolean; reduceMotion: boolean; underlineLinks: boolean; strongFocus: boolean };
const defaults: Settings = { textScale: 100, highContrast: false, reduceMotion: false, underlineLinks: false, strongFocus: false };
const STORAGE_KEY = "bppa-a11y-settings";
const MIN = 90;
const MAX = 150;

function apply(s: Settings) {
  const root = document.documentElement;
  root.style.fontSize = s.textScale === 100 ? "" : `${s.textScale}%`;
  root.classList.toggle("a11y-high-contrast", s.highContrast);
  root.classList.toggle("a11y-reduce-motion", s.reduceMotion);
  root.classList.toggle("a11y-underline-links", s.underlineLinks);
  root.classList.toggle("a11y-strong-focus", s.strongFocus);
}

function Toggle({ label, description, pressed, onChange }: { label: string; description: string; pressed: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={() => onChange(!pressed)}
      className="flex w-full items-center justify-between gap-3 border border-border p-3 text-left text-sm hover:bg-secondary aria-pressed:border-primary aria-pressed:bg-secondary"
    >
      <span>
        <span className="block font-bold text-foreground">{label}</span>
        <span className="block text-xs text-muted-foreground">{description}</span>
      </span>
      <span className="inline-flex shrink-0 items-center gap-1 border border-current px-2 py-1 text-xs font-extrabold uppercase text-primary">
        {pressed && <Check className="h-3 w-3" aria-hidden="true" />}
        {pressed ? "On" : "Off"}
      </span>
    </button>
  );
}

export function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(defaults);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setSettings({ ...defaults, ...JSON.parse(saved) });
    } catch {
      /* ignore invalid saved settings */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    apply(settings);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings, loaded]);

  const update = (patch: Partial<Settings>) => setSettings((s) => ({ ...s, ...patch }));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="min-h-11 gap-2 px-3" aria-label="Accessibility" aria-haspopup="dialog">
          <Accessibility className="h-5 w-5" aria-hidden="true" />
          <span className="hidden text-xs font-bold uppercase sm:inline">Accessibility</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={8}
        role="dialog"
        aria-labelledby="a11y-menu-title"
        className="max-h-[calc(100vh-7rem)] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto rounded-none border-border p-5"
      >
        <h2 id="a11y-menu-title" className="font-display text-xl font-black uppercase text-primary">Accessibility</h2>
        <p className="mt-1 text-xs text-muted-foreground">Settings are saved on this device.</p>

        <fieldset className="mt-5">
          <legend className="mb-2 text-xs font-extrabold uppercase text-foreground">Text size</legend>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => update({ textScale: Math.max(MIN, settings.textScale - 10) })} disabled={settings.textScale <= MIN} aria-label="Decrease text size"><Minus aria-hidden="true" /></Button>
            <output className="min-w-14 text-center text-sm font-bold" aria-live="polite" aria-label={`Text size ${settings.textScale} percent`}>{settings.textScale}%</output>
            <Button variant="outline" size="sm" onClick={() => update({ textScale: Math.min(MAX, settings.textScale + 10) })} disabled={settings.textScale >= MAX} aria-label="Increase text size"><Plus aria-hidden="true" /></Button>
            <Button variant="ghost" size="sm" onClick={() => update({ textScale: 100 })} disabled={settings.textScale === 100}>Reset</Button>
          </div>
        </fieldset>

        <div className="mt-5 grid gap-2">
          <Toggle label="High contrast" description="Stronger text and border colours" pressed={settings.highContrast} onChange={(v) => update({ highContrast: v })} />
          <Toggle label="Reduce motion" description="Stops non-essential animation" pressed={settings.reduceMotion} onChange={(v) => update({ reduceMotion: v })} />
          <Toggle label="Underline links" description="Makes every link underlined" pressed={settings.underlineLinks} onChange={(v) => update({ underlineLinks: v })} />
          <Toggle label="Enhanced focus" description="Larger, bolder keyboard focus outline" pressed={settings.strongFocus} onChange={(v) => update({ strongFocus: v })} />
        </div>

        <Button className="mt-5 w-full" variant="default" onClick={() => setSettings(defaults)}>
          <RotateCcw aria-hidden="true" /> Reset all settings
        </Button>
      </PopoverContent>
    </Popover>
  );
}
