# Content and enquiry redesign — 3 October 2026

## Purpose and scope

Help Singapore employers and business owners identify a relevant service, understand the options, and start an informed conversation. Personal customers and existing clients retain direct routes. Preserve the homepage cinematic, product rail, their styles, scripts and fallbacks exactly as supplied at the start of this revision.

The redesign retains the Inspro red, Manrope and white/grey brand direction recorded in PRODUCT.md. It changes information architecture: task-based service choices, clear comparison criteria, section navigation, specific next steps, and an enquiry that carries selected cover into the draft. Existing facts, prices and qualifications remain authoritative; no testimonials, guarantees or delivery promises are invented.

## Audit and page plan

| Page | Friction found | Revised flow / intended action |
| --- | --- | --- |
| Home | Long protected experience; supporting sections lack an immediate route by need | Preserve animation → choose a need → BenefitsCare → portal demonstration → review enquiry |
| Insurance solutions | Four large photographs require scanning before the differences become clear | Task-based service directory → SME/custom benefits comparison → support route → tailored enquiry |
| BenefitsCare | Plan details work; navigation and next-step expectations are weak | Overview → plans → extras → preparation/FAQ → quotation; section links and draft expectations |
| Corporate benefits | Administration appears before the scope of cover is understood | Overview → cover → service/portal support → policy-year process → programme conversation |
| Business | Chosen risk is discarded by contact link | Overview → risk explorer → preparation → questions → enquiry retaining selected risk |
| Personal | Chosen product is discarded; limited preparation guidance | Overview → cover explorer → preparation/FAQ → enquiry retaining product |
| Benefits portal | “Portal” in navigation can be mistaken for a login | Explicit preview naming/context → interactive demonstration → programme fit → walkthrough; existing-client help |
| About | Company facts end without showing the working relationship or a strong next step | Identity and registration → broker role → conversation expectations → review enquiry |
| Claims | Practical guidance exists but no structured claim enquiry | Immediate phone/email → steps → portal guidance → FAQ → claim enquiry, with insurer responsibility retained |
| Guides | Single article feels like an endpoint | Checklist → need-based next destinations → review enquiry |
| Review checklist | Useful content; readers must leave the end to find a next action | Section navigation → temporary checklist → relevant cover routes → review enquiry |
| Contact | Blank required message, ambiguous email/phone field; no usable draft if mail handler fails | Selected enquiry summary → name/email plus optional context → visible email draft → explicit open/copy actions; phone fallback |
| Privacy | Core data explanation is available but entry points are weak | Reading navigation → actual draft handling and no-storage disclosure → direct contact |
| 404 | Generic recovery choices | Services/home recovery plus direct BenefitsCare, claims and contact routes |

## Library decisions

Keep locally bundled GSAP for existing motion, shadcn/Radix tabs and Lucide React for product choices. GSAP supports scoped responsive/reduced-motion behavior ([official documentation](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/)); Radix supplies tab keyboard behavior ([documentation](https://www.radix-ui.com/primitives/docs/components/tabs)); Lucide supports named React icon imports ([documentation](https://lucide.dev/guide/react)). Native HTML disclosures and links suit navigation and FAQs. Additional 3D/rendering/carousel/smooth-scroll libraries have no required job in this content flow and would add loading and interaction complexity. The user's list is treated as options, not a requirement to install every library.

## Review rubric — 100 points

Score each page against its own role: purpose and sequence (20), navigation and next steps (20), truthful useful content (20), layout/responsiveness (15), accessibility/keyboard behavior (15), working interactions and delivery (10). A material unresolved defect prevents a 100 score. Review normal and reduced motion, mobile and desktop, real link destinations and the complete enquiry flow. Scores describe the inspected local implementation, not measured conversion performance, external certification, or owner acceptance.

The static website prepares drafts only. Lead delivery, storage, CRM integration and conversion analytics require a separately scoped service. Success in this revision means a visitor reaches the appropriate enquiry with context intact and can review/copy/open the draft. Actual received leads cannot be measured here.
