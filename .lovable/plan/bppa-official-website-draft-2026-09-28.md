# BPPA Official Website Draft

## Goal
Build a polished bilingual public website for the Bangladesh Para Pickleball Association, using the supplied logo and its dark green, white, and lime palette. The first release is a frontend-only prototype with clearly marked sample content wherever official details are unavailable.

## Pages and navigation
- Add a shared desktop and mobile navigation with the BPPA logo, seven page links, and a visible English/Bangla switcher.
- Create dedicated routes for Home, About BPPA, Para Pickleball, Athletes, Events, News & Media, and Contact.
- Add a consistent footer with page links, accessibility-minded structure, and placeholder contact/social details clearly labeled as pending official confirmation.
- Give every page distinct bilingual SEO titles and descriptions.

## Homepage
- Create an editorial sports-federation opening section with a strong adaptive-sport image, clear BPPA identity, and restrained calls to explore para pickleball and upcoming events.
- Add concise sections for About BPPA, an introduction to para pickleball, programs, upcoming events, athlete highlights, news/media, and prospective partner presentation.
- Keep all names, dates, achievements, affiliations, sponsors, and statistics explicitly marked as sample or awaiting official confirmation.

## Supporting pages
- **About BPPA:** mission, vision, objectives, governance placeholder, and inclusion commitments.
- **Para Pickleball:** accessible introduction, play formats, equipment, participation pathway, and safety notes without asserting unverified governing-body rules.
- **Athletes:** respectful sample profiles and an athlete-development pathway.
- **Events:** sample upcoming/past event listings with filters or tabs and clear draft labels.
- **News & Media:** bilingual-ready article cards, media resources, and press-contact placeholder.
- **Contact:** non-submitting prototype inquiry form, inquiry categories, and clearly labeled pending contact details.

## Visual system and assets
- Use the uploaded BPPA logo as the official on-page brand asset through the project asset pipeline.
- Define semantic dark-green, lime, white, neutral, border, and focus tokens in the global design system, with crisp corners, strong contrast, and athletic editorial typography.
- Generate a small cohesive set of respectful adaptive pickleball images showing athletes with agency and authentic sporting action; optimize and reuse them across pages.
- Use restrained motion, visible keyboard focus, meaningful alt text, semantic landmarks, and reduced-motion support.

## Bilingual behavior
- Store verified draft English and Bangla interface copy together in a typed content layer.
- Make the language switch update navigation, headings, buttons, labels, and static page copy across the whole site.
- Preserve the chosen language while navigating during the current browser session, without adding a backend.
- Keep article and event data shaped for separate English/Bangla fields rather than machine translation.

## Technical details
- Use TanStack Start file-based routes, React, TypeScript, Tailwind CSS v4, and existing interface primitives.
- Build reusable site shell, language context, section-heading, page-intro, card, and content-list components.
- Keep all prototype data in typed local modules so it can later be replaced by Lovable Cloud content management without redesigning the pages.
- Do not add authentication, databases, external APIs, payments, or a working form submission in this phase.

## Verification
- Confirm all seven routes render and navigation works in both languages.
- Check desktop and mobile layouts, menu behavior, language switching, form controls, image loading, keyboard focus, and overflow.
- Confirm the preview has no build, runtime, console, or broken-link errors.
