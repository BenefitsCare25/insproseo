# Historical Public Liability guide verification

**Last Updated:** 10 October 2026.

**Status:** retired by the later 10 October 2026 guide-cleanup instruction. The guide, its route assets and generator were removed; the former URL now redirects permanently to `/contact-us/?intent=business&topic=liability`. The earlier sequential redesign/owner-review gate is superseded. The records below describe the prior local revision and preserve its evidence. No public deployment or Git push was performed.

Current cleanup and preview: [guide cleanup verification](GUIDE-CLEANUP-VERIFICATION.md), **http://127.0.0.1:3000/**. The former guide path is a redirect, not a guide preview.

## Historical built behavior

The existing Public Liability introduction leads a compact two-column desktop entry with a contextual enquiry and comparison link. Three topics retain the established burgundy/rose/Manrope world, quiet topic rail and mobile chips.

| Topic | Corresponding explanation and graphic |
| --- | --- |
| Your activities | Customer visits, deliveries/events and off-site work: three distinct scenarios, each paired with its own declaration and review prompts. Visitor/parcel path travel and contained tool movement illustrate the activity. |
| Limits & terms | Activities, limits, excess, extensions and contracts: five quotation questions with activity mapping, event/aggregate brackets, claim contribution, wording branches and contract-to-schedule matching. No numerical limits or proportions are promised. |
| Common questions | One policy-distinction figure and three native FAQ disclosures distinguish public liability, professional indemnity, employee injury obligations and the business-package caveat. The phone diagram reflows its labels. |

There are **eight selectable views and nine subject-specific SVG figures**: three scenarios, five terms and one policy distinction. Selection synchronizes `aria-pressed`, the controlled view, `hidden`, `inert` and `aria-hidden`. Arrow keys, Home and End select and focus the corresponding button. Motion reveals a meaningful relationship, responds to a selection and settles; there is no looping background decoration.

The screen frame retains intrinsic space for corresponding views and grows for open FAQ content. Narrow layouts stack diagrams and reading surfaces. Supplemental overview captures show exercised states, including opened questions; they are not claims about the default state.

## Historical recorded verification

These are the completed implementation/review records; documentation did not rerun commands or browser checks.

| Area | Result and boundary |
| --- | --- |
| Build | `npm.cmd run build` passed: **144 public files, 54 script syntax checks and 1,580 local references**. |
| SEO | `npm.cmd run audit:seo` passed **24 content pages**. Existing About/Guides four-click content-link reachability advisories remain. |
| Outcome record | **21 checks pass; no recorded failures.** Includes state correspondence, finite motion, reading alternatives, route entry and preservation. |
| Chromium interactions | All three topics and eight choices checked at **1,440 and 390 CSS pixels**. Pressed/hidden/inert state, contained subject motion, keyboard operation, rapid changes, live reduced-motion cancellation and deep links `#comparison`, `#page-section-3` and `#explore-page` pass. No recorded browser errors. |
| Responsive geometry | Additional **320, 768, 958, 1,280 and 1,753 CSS pixel** scans found no document or content overflow. Mobile policy distinctions and opened questions remain readable and contained. |
| Accessibility scan | Axe WCAG A/AA checks returned **zero findings in main content** for all topics and opened FAQs at **1,440 and 390 pixels**. The unchanged shared header/footer were outside this scan; this is not a complete assistive-technology audit. |
| No JavaScript | All **three topics and eight detail views** remain readable, selectors stay hidden and native FAQ disclosures open. |
| Print | Print expands all topics, choices and FAQs, then restores prior selections/question states. The **four-page PDF** has selectable extracted text, first-page font resources and all **eight detail headings plus three FAQ headings**. |
| Source preservation | Repeated full refresh is byte-stable. **141 other existing public files are unchanged**. This guide HTML is the only changed existing public file; its CSS and JavaScript are the two new route assets. |
| Source review | Scoped JavaScript/generator review returned **approve**, with no unresolved material findings. The persisted `pagehide` observer issue was corrected: motion settles on exit, observers survive a persisted exit and disconnect on an uncached exit. |
| Finish review | The full review completed **persistence, fidelity, ceiling, material_fixes and keep**; all **31 required captures** were inspected. Disposition **SHIP**, with **no material findings**, for this historical revision. |

The cached-transition exercise used a **synthetic persisted `pagehide` event**, not a complete real BFCache navigation. Browser evidence is Chromium on this Windows machine; Safari, Firefox, real-device and assistive-technology behavior are not established by these records.

Review substitution: a fresh delegated code-reviewer followed the Impeccable finish-reviewer contract because the native role was unavailable. Documentation uses the doc-updater role under the Impeccable documenter contract for the same reason.

## Historical facts and implementation

That revision preserved the original introduction, canonical metadata, FAQ structured data, source link, policy distinctions, contextual enquiry, section IDs, professional-indemnity/WIC/business-package cross-links and renewal checklist. Examples were illustrative and conditional; proposed insurer wording controlled cover. An enquiry or quotation did not activate cover. Contact still prepares an email draft in the visitor's mail application; the website does not send or store it.

The archived composition is [design-public-liability.mjs](../.impeccable/guide-removal-20261010/baseline/scripts/design-public-liability.mjs), with semantic SVG figures in [design-public-liability-graphics.mjs](../.impeccable/guide-removal-20261010/baseline/scripts/design-public-liability-graphics.mjs). Archived [public-liability.css](../.impeccable/guide-removal-20261010/baseline/site/assets/css/public-liability.css) and [public-liability.js](../.impeccable/guide-removal-20261010/baseline/site/assets/js/public-liability.js) belonged only to this guide. The active generator hooks were removed during cleanup. No new dependencies or raster imagery were added in that historical revision.

[DESIGN.md](../DESIGN.md) retains a short historical note for the scoped diagram/controller/motion/reflow pattern. The cleanup preserves the existing palette, type, spacing and control tokens; this retired pattern adds no active token primitives or global component variants.

## Evidence

Private review evidence remains outside `site/` and is never shipped:

- [Direction contract](../.impeccable/public-liability-20261010/direction.md) and [surface brief](../.impeccable/surfaces/s-commercial-public-liability-insurance-index-html.md).
- [Final verification](../.impeccable/public-liability-20261010/verification.json) and [preservation](../.impeccable/public-liability-20261010/preservation.json).
- [Source review](../.impeccable/public-liability-20261010/code-review.md) and [full finish review](../.impeccable/public-liability-20261010/finish-review.md).
- [Confirmation browser record](../.impeccable/public-liability-20261010/round-2/browser-record.json) and [selectable print record](../.impeccable/public-liability-20261010/round-2/print-record.json).

## Superseded workflow

The earlier plan was to review Public Liability before proceeding through the other Business-linked guides one at a time. The later owner instruction replaces that plan with removal of the separate detail guides. There is no pending next-guide task. The existing Travel Insurance page and its Business travel chapter remain unchanged.
