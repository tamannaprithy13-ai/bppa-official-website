import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, TextLink } from "@/components/page-ui";
import { useLanguage } from "@/components/language-provider";
import { athletes, events, news, programs, text } from "@/lib/content";
import heroImage from "@/assets/para-pickleball-hero.jpg";
import communityImage from "@/assets/para-pickleball-community.jpg";
import athleteImage from "@/assets/para-pickleball-athlete.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Bangladesh Para Pickleball Association | BPPA" },
    { name: "description", content: "Official website draft of the Bangladesh Para Pickleball Association, advancing inclusive para pickleball participation in Bangladesh." },
    { property: "og:title", content: "Bangladesh Para Pickleball Association | BPPA" },
    { property: "og:description", content: "Building an inclusive future for para pickleball in Bangladesh." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  const { tx } = useLanguage();
  return (
    <>
      <section className="relative min-h-[calc(100vh-7rem)] overflow-hidden bg-primary text-primary-foreground">
        <img src={heroImage} alt={tx(text("Wheelchair athlete returning a pickleball shot on court", "কোর্টে পিকলবল শট ফিরিয়ে দিচ্ছেন হুইলচেয়ার অ্যাথলেট"))} width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover object-[62%_center]" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/5" />
        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1440px] items-end px-5 py-14 sm:items-center lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 border-l-4 border-accent bg-primary/70 px-4 py-2 text-xs font-extrabold uppercase backdrop-blur"><span className="h-2 w-2 bg-accent" />{tx(text("Para sport · Bangladesh", "প্যারা স্পোর্ট · বাংলাদেশ"))}</div>
            <h1 className="font-display text-5xl font-black uppercase leading-[0.94] sm:text-7xl lg:text-8xl">{tx(text("The court is for everyone.", "কোর্ট সবার জন্য।"))}</h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-8 text-primary-foreground/80 sm:text-lg">{tx(text("Bangladesh Para Pickleball Association is working to create an inclusive pathway for participation, development, and competition.", "বাংলাদেশ প্যারা পিকলবল অ্যাসোসিয়েশন অংশগ্রহণ, উন্নয়ন ও প্রতিযোগিতার জন্য একটি অন্তর্ভুক্তিমূলক পথ তৈরিতে কাজ করছে।"))}</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><a href="#about">{tx(text("Discover BPPA", "বিপিপিএ জানুন"))}<ArrowRight /></a></Button><Button asChild size="lg" variant="outline" className="border-primary-foreground/60 bg-primary/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href="#sport"><Play />{tx(text("Explore the sport", "খেলাটি জানুন"))}</a></Button></div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden bg-accent px-8 py-5 text-accent-foreground md:block"><span className="block text-xs font-extrabold uppercase">{tx(text("One sport", "একটি খেলা"))}</span><strong className="font-display text-2xl uppercase">{tx(text("More possibilities", "আরও সম্ভাবনা"))}</strong></div>
      </section>

      <section id="about" className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-28">
        <SectionHeading eyebrow={text("About BPPA", "বিপিপিএ সম্পর্কে")} title={text("A national platform built around access", "অংশগ্রহণের সুযোগকে কেন্দ্র করে জাতীয় প্ল্যাটফর্ম")} />
        <div className="lg:pt-10"><p className="text-xl font-semibold leading-9 text-foreground">{tx(text("BPPA is developing a credible, athlete-centered foundation for para pickleball in Bangladesh.", "বিপিপিএ বাংলাদেশে প্যারা পিকলবলের জন্য একটি বিশ্বাসযোগ্য, অ্যাথলেট-কেন্দ্রিক ভিত্তি গড়ে তুলছে।"))}</p><p className="mt-5 leading-8 text-muted-foreground">{tx(text("This website is an early-stage public prototype. BPPA's formal history, leadership, recognition, affiliations, and governance details will be published only after official verification.", "এই ওয়েবসাইটটি প্রাথমিক পর্যায়ের একটি পাবলিক প্রোটোটাইপ। বিপিপিএর আনুষ্ঠানিক ইতিহাস, নেতৃত্ব, স্বীকৃতি, অধিভুক্তি ও পরিচালনা সংক্রান্ত তথ্য যাচাইয়ের পরই প্রকাশিত হবে।"))}</p><div className="mt-7"><TextLink to="/about">{tx(text("Read about BPPA", "বিপিপিএ সম্পর্কে পড়ুন"))}</TextLink></div></div>
      </section>

      <section id="sport" className="bg-secondary"><div className="mx-auto grid max-w-[1440px] lg:grid-cols-2"><div className="min-h-[420px]"><img src={communityImage} alt={tx(text("Adaptive athletes training together on a pickleball court", "পিকলবল কোর্টে একসঙ্গে অনুশীলনরত অভিযোজিত অ্যাথলেটরা"))} loading="lazy" width={1200} height={912} className="h-full w-full object-cover" /></div><div className="flex items-center px-5 py-16 lg:px-16"><div><SectionHeading eyebrow={text("The sport", "খেলাটি")} title={text("Fast, social, and adaptable", "দ্রুত, সামাজিক ও অভিযোজনযোগ্য")} description={text("Para pickleball adapts the widely accessible paddle sport to support players with different physical abilities. Participation formats and technical guidance should follow the rules confirmed for each event.", "প্যারা পিকলবল বিভিন্ন শারীরিক সক্ষমতার খেলোয়াড়দের জন্য জনপ্রিয় প্যাডেল খেলাটিকে অভিযোজিত করে। অংশগ্রহণের ধরন ও কারিগরি নির্দেশনা প্রতিটি ইভেন্টের জন্য নিশ্চিত নিয়ম অনুসরণ করবে।")} /><ul className="mt-7 space-y-3">{[text("Welcoming entry point", "সহজ অংশগ্রহণের সুযোগ"), text("Skill and strategy", "দক্ষতা ও কৌশল"), text("Community connection", "কমিউনিটি সংযোগ")].map((item) => <li key={item.en} className="flex items-center gap-3 font-bold"><span className="grid h-6 w-6 place-items-center bg-accent text-accent-foreground"><Check className="h-4 w-4" /></span>{tx(item)}</li>)}</ul><div className="mt-8"><TextLink to="/para-pickleball">{tx(text("Learn about para pickleball", "প্যারা পিকলবল সম্পর্কে জানুন"))}</TextLink></div></div></div></div></section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 lg:px-8 lg:py-28"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><SectionHeading eyebrow={text("Development", "উন্নয়ন")} title={text("From first rally to competition", "প্রথম র‍্যালি থেকে প্রতিযোগিতা")} /><TextLink to="/events">{tx(text("View programs", "কার্যক্রম দেখুন"))}</TextLink></div><div className="mt-12 grid border-l border-t border-border md:grid-cols-3">{programs.map((program) => <article key={program.number} className="border-b border-r border-border bg-card p-7 sm:p-9"><span className="font-display text-5xl font-black text-accent">{program.number}</span><h3 className="mt-8 font-display text-2xl font-extrabold uppercase">{tx(program.title)}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{tx(program.body)}</p></article>)}</div></section>

      <section className="bg-primary py-20 text-primary-foreground lg:py-28"><div className="mx-auto max-w-[1440px] px-5 lg:px-8"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><SectionHeading light eyebrow={text("On the calendar", "ক্যালেন্ডারে")} title={text("Upcoming opportunities", "আসন্ন সুযোগ")} /><TextLink to="/events"><span className="text-primary-foreground">{tx(text("All events", "সব ইভেন্ট"))}</span></TextLink></div><div className="mt-12 divide-y divide-primary-foreground/20 border-y border-primary-foreground/20">{events.map((event, index) => <article key={event.title.en} className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-center"><div className="font-display text-3xl font-black text-accent">0{index + 1}</div><div><p className="text-xs font-bold uppercase text-accent">{tx(event.type)} · {tx(event.date)}</p><h3 className="mt-2 text-lg font-extrabold">{tx(event.title)}</h3><p className="mt-1 text-sm text-primary-foreground/60">{tx(event.place)}</p></div><ArrowRight className="hidden h-5 w-5 sm:block" /></article>)}</div></div></section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28"><div className="relative min-h-[520px]"><img src={athleteImage} alt={tx(text("Para pickleball athlete portrait", "প্যারা পিকলবল অ্যাথলেটের প্রতিকৃতি"))} loading="lazy" width={1200} height={912} className="h-full w-full object-cover" /><div className="absolute bottom-0 left-0 bg-accent p-5 text-accent-foreground"><span className="text-xs font-extrabold uppercase">{tx(text("Sample visual", "নমুনা ছবি"))}</span></div></div><div className="self-center"><SectionHeading eyebrow={text("Athlete first", "অ্যাথলেট সবার আগে")} title={text("Every journey deserves a platform", "প্রতিটি যাত্রার জন্য চাই একটি প্ল্যাটফর্ম")} description={text("Athlete stories will be published only with consent and verified information. Until then, this section demonstrates how future profiles can celebrate preparation, performance, and ambition with dignity.", "সম্মতি ও যাচাইকৃত তথ্য নিয়েই অ্যাথলেটদের গল্প প্রকাশিত হবে। ততদিন এই অংশটি দেখাবে কীভাবে ভবিষ্যৎ প্রোফাইলে প্রস্তুতি, পারফরম্যান্স ও আকাঙ্ক্ষাকে মর্যাদার সঙ্গে তুলে ধরা যায়।")} /><div className="mt-8"><TextLink to="/athletes">{tx(text("Meet the future team", "ভবিষ্যৎ দলকে জানুন"))}</TextLink></div></div></section>

      <section className="border-t border-border bg-muted"><div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-8"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><SectionHeading eyebrow={text("Latest", "সর্বশেষ")} title={text("News & media", "সংবাদ ও মিডিয়া")} /><TextLink to="/news-media">{tx(text("Media centre", "মিডিয়া সেন্টার"))}</TextLink></div><div className="mt-12 grid gap-px bg-border md:grid-cols-3">{news.map((item) => <article key={item.title.en} className="bg-background p-7 sm:p-9"><p className="text-xs font-extrabold uppercase text-primary">{tx(item.category)} · {tx(text("Demo", "ডেমো"))}</p><h3 className="mt-5 font-display text-2xl font-extrabold uppercase leading-tight">{tx(item.title)}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{tx(item.excerpt)}</p></article>)}</div></div></section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 text-center lg:px-8"><p className="text-xs font-extrabold uppercase text-muted-foreground">{tx(text("Partnership information", "অংশীদারিত্বের তথ্য"))}</p><h2 className="mt-4 font-display text-3xl font-black uppercase">{tx(text("Partner opportunities coming soon", "অংশীদারিত্বের সুযোগ শীঘ্রই"))}</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{tx(text("No sponsors or institutional affiliations are claimed in this draft. Verified partner identities will appear here after formal approval.", "এই খসড়ায় কোনো স্পনসর বা প্রাতিষ্ঠানিক অধিভুক্তির দাবি করা হয়নি। আনুষ্ঠানিক অনুমোদনের পর যাচাইকৃত অংশীদারদের পরিচয় এখানে প্রকাশিত হবে।"))}</p></section>
    </>
  );
}
