# Content and enquiry flow — final local review

Preview: http://127.0.0.1:3000. Reviewed 3 October 2026. This record supersedes earlier content-flow scores; no public deployment was performed.

## Delivered

- All 14 pages reviewed and updated. A needs-based service directory replaces the large photographic category grid; corporate benefits now explains cover before administration.
- Shared insurance navigation exposes direct service routes. “Portal preview” distinguishes the marketing demonstration from an existing member's employer-provided sign-in link.
- Longer product pages have section shortcuts, fully visible on mobile. Business/personal explorer choices and BenefitsCare plans carry into contact enquiries.
- Enquiries require a name and valid email. Company, phone and message are optional. Visitors prepare and inspect a draft before choosing Open email app or Copy draft. Edits invalidate the previous draft, and denied clipboard access has a manual selection fallback.
- JavaScript-disabled visitors have direct phone/email links; the draft button is disabled so the form cannot default to a URL submission.
- Claims guidance preserves the insurer's reporting requirements and decision-making role. Portal illustrations remain labelled sample information. No business claims, testimonials or guarantees were invented.
- The checklist prints as two readable A4 pages, retaining checked state, the comparison table and policy qualification, without website navigation or empty marketing blocks.

## Verification evidence

`npm.cmd run build:ui`, `npm.cmd run redesign:pages` and the supplied validator passed. Final delivery validation is `npm.cmd run build`. The validator checks syntax, local files and anchors, redirects, sitemap and structured data.

`lead-flow-browser-review.json`: 42 checks across 14 pages at 1440, 1065 and 390 CSS pixels, reduced motion. Every record has one H1, no horizontal overflow, no broken images, no page JavaScript errors and zero axe-core WCAG A/AA-tagged violations. These automated checks are not a complete accessibility certification.

`lead-flow-interaction-review.json`: 82 passing checks. Normal-motion coverage includes keyboard disclosure navigation, tab arrows, all business/personal choices, all three plan-to-contact journeys, the nine portal feature states and four policy-year stages, home plan and enquiry selectors at desktop/mobile widths, mobile menus, section anchors, FAQs, checklist/print actions, form validation, visible draft content, focus, clipboard success/denial, invalid query parameters, changed selections, and no-JavaScript fallback. Email links were inspected; no email was sent.

`lead-flow-motion-review.json` records an additional normal-motion pass across all pages. Print output was generated as a real A4 PDF and its rendered pages were visually inspected.

The homepage cinematic/fallback/product-section HTML and `hero.js`, `homepage-motion.js`, `homepage.css`, GSAP and ScrollTrigger vendor files match the revision's saved baseline byte for byte. Normal-motion interaction checks additionally observed video time advance from 0 to 4.45 seconds and the product rail advance to slide 02.

Private screenshot evidence and the original revision backup remain in `.impeccable/lead-review/`; none is public site content. No test source files or dependencies were added.

## Review rounds and scores

Two independent reviewers inspected all page screenshots in complementary groups. Their first round found ambiguous portal labels, mobile section shortcuts outside the initial strip, repetitive introductory copy and inconsistent privacy wording. Those issues were corrected and recaptured. Review of actual PDF output then exposed a print-only defect; a targeted print correction and second PDF inspection resolved it.

The rubric allocates purpose/sequence 20, navigation/next steps 20, truthful/useful content 20, layout/responsiveness 15, accessibility/keyboard behavior 15, and interactions/output 10. Scores below mean no unmet criterion remained in the inspected local scope. They are internal acceptance scores, not a claim of universal design perfection or measured conversion performance.

| Page | Final score |
| --- | ---: |
| Home — redesigned surrounding content; original animation preserved | 100/100 |
| Insurance solutions | 100/100 |
| BenefitsCare | 100/100 |
| Corporate employee benefits | 100/100 |
| Business insurance | 100/100 |
| Personal insurance | 100/100 |
| Benefits portal preview | 100/100 |
| About Inspro | 100/100 |
| Claims support | 100/100 |
| Guides | 100/100 |
| Insurance review checklist | 100/100 |
| Contact | 100/100 |
| Privacy/security | 100/100 |
| 404 recovery | 100/100 |

## Limits and operation

This remains a static website. Drafts are not delivered or stored by the site. Lead delivery, CRM storage and analytics need a separately scoped integration; no received-lead or conversion result has been measured. Preview phone/address facts are retained from the existing site; the open business-detail confirmation recorded in PRODUCT.md remains unchanged.

Unperformed: public deployment, real-device testing, Safari/Firefox testing, assistive-technology testing, field performance measurement and actual email delivery. Chrome automated/keyboard evidence and visual reviews support only the scope described above.

Edit page flows in `scripts/lead-flow.mjs`, composed by `scripts/redesign-pages.mjs`; their styles are in `site/assets/css/lead-flow.css`. Contact behavior is in `site/assets/js/contact.js`; choice links are in `src/experience.jsx`. Regenerate islands/pages after source changes using the README workflow. Existing homepage animation sources remain protected.
