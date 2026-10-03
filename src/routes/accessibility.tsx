import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-ui";
import { text } from "@/lib/content";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement (Draft) | BPPA" },
      { name: "description", content: "Draft accessibility statement for the BPPA website, pending official confirmation." },
      { property: "og:title", content: "Accessibility Statement (Draft) | BPPA" },
      { property: "og:description", content: "How the BPPA website draft aims to be usable by everyone." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <>
      <PageIntro
        eyebrow={text("Draft · Pending official confirmation", "")}
        title={text("Accessibility statement", "")}
        description={text("This is a working draft. It is not an official BPPA policy and makes no certification or compliance claims.", "")}
      />
      <section className="mx-auto max-w-3xl px-5 py-16 text-base leading-8 text-foreground lg:px-8">
        <h2 className="font-display text-3xl font-black uppercase">Our aim</h2>
        <p className="mt-4 text-muted-foreground">We want this website to be usable by as many people as possible, including people who use keyboards, screen readers, magnification, or reduced-motion settings.</p>
        <h2 className="mt-10 font-display text-3xl font-black uppercase">What we have done so far</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>A "Skip to main content" link and clear page landmarks.</li>
          <li>Visible keyboard focus on links, buttons, and form fields.</li>
          <li>Text descriptions for informative images.</li>
          <li>Labelled form fields and announced form messages.</li>
          <li>Reduced animation when your device requests it.</li>
        </ul>
        <h2 className="mt-10 font-display text-3xl font-black uppercase">Feedback</h2>
        <p className="mt-4 text-muted-foreground">If something is hard to use, please let us know through the <Link to="/contact" className="font-bold text-primary underline underline-offset-4">contact page</Link>. Official accessibility contact details are awaiting confirmation.</p>
      </section>
    </>
  );
}
