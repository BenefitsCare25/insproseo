# Inspro redesign and SEO content plan

Prepared 3 October 2026. This is the implementation and publishing plan for the existing static site, not a claim of ranking results or a completed deployment.

## Audience and positioning

Owner-confirmed priority: Singapore SMEs and employers; personal insurance is secondary. Lead with **BenefitsCare for SMEs and practical employee-benefits support**, then show the customised programme available to larger employers. Retain business and personal insurance as clear complementary service areas.

Recommended positioning: **Employee benefits that work for your people and your HR team.** Support that statement with visible processes and product detail. Do not claim that portals, claims support or personalised advice are unique to Inspro.

The owner-supplied 2025 marketing slides substantiate employee/HR portal access, flexible-benefits administration, enrolment and underwriting follow-up, cost-centre premium breakdowns, claim-document checks and periodic programme discussions. These concrete capabilities are stronger website content than generic claims about excellent service. The scope remains programme-dependent. The subsequent read-only portal source review is recorded in [PORTAL-FEATURE-AUDIT.md](PORTAL-FEATURE-AUDIT.md). It narrows HR portal claims to delegated claims and filed-form downloads; programme reporting and coverage administration belong to Inspro?s broker service.

## Competitive context: facts and inference

| Source | What the source shows | Implication for Inspro (recommendation) |
| --- | --- | --- |
| [Howden Singapore employee benefits](https://www.howdengroup.com/sg-en/employee-benefits/energising-employee-benefits) | Employee-benefits consultancy and a range of employer solutions. | Do not treat broad benefits expertise alone as exclusive. Explain Inspro's specific service and SME entry product. |
| [Howden MediHub](https://www.howdengroup.com/sg-en/cover/howden-medihub-members) | App-based benefits access and medical-claims functions. | A portal is credible functionality, not a unique market claim. Show the actual workflow and human support around it. |
| [Acclaim](https://acclaim.com.sg/) | Risk consulting, brokerage, claims advocacy and industry expertise. | Explain tangible deliverables rather than asserting that other brokers lack support. |
| [Inspro About](https://www.inspro.com.sg/about-us/) | Incorporation in June 2000, general/group insurance advice and claims assistance. | Use the company history and service scope consistently. |
| [MAS institution directory](https://eservices.mas.gov.sg/fid/institution/detail/765-INSPRO-INSURANCE-BROKERS-PTE-LTD) | Registered Insurance Broker and Exempt Financial Adviser status. | Link to the record; do not imply endorsement or a guarantee of service quality. |

This is a focused qualitative comparison, not an exhaustive competitor study. No search-volume or ranking data has been obtained. The website should explain Inspro's own strengths without disparaging insurers or other brokers.

## Implemented information architecture

Existing service URLs are retained to preserve links and search history. New pages have descriptive URLs. All core copy is static HTML, with visible links and unique metadata.

| Page | Primary visitor question / search intent | Content and next step |
| --- | --- | --- |
| `/` | Who is Inspro and where should I start? | Preserve cinematic and product rail; BenefitsCare plans, a concise portal introduction and focused enquiry selector. |
| `/services/` | Which insurance service fits my need? | Employer-first directory; business and personal cover; a link to the portal walkthrough. |
| `/employee-benefits/portal/` | Employee benefits portal / HR benefits administration Singapore | Nine source-backed feature previews across employees, HR and Inspro; programme qualifications; walkthrough enquiry. |
| `/employee-benefits/benefitscare/` | SME employee benefits Singapore / Inspro BenefitsCare | Starter, Flex and Premier; indicative starting prices; feature comparison; wider options; preparation; FAQ; contextual quotation enquiry. |
| `/service-details/commercial/employees-benefits/` | Corporate employee benefits Singapore | Customised programme design, accurate employee/HR/Inspro responsibilities, portal link and policy-year support. |
| `/service-details/commercial/commercialoffice-package/` | Business insurance for Singapore SMEs | Commercial cover areas, review triggers, practical questions and enquiry. |
| `/service-details/personal/view-personal-insurance-products/` | Personal insurance broker Singapore | Motor, travel, home and specialist cover questions; personal enquiry. |
| `/claims-support/` | Help with insurance claim process | Reporting boundaries, document preparation, broker role and contact. |
| `/about-us/` | Is Inspro credible and suitable? | Company background, concrete service, verifiable regulatory status. |
| `/guides/` | Practical insurance guidance | Guide directory linked to relevant services; no empty article placeholders. |
| `/guides/insurance-review-checklist/` | How to prepare for an insurance review | Documents, changes, comparison criteria and useful questions. |
| `/contact-us/` | How do I speak to the right team? | Prefilled product/plan context, direct phone/email and truthful email-draft form. |
| `/privacy-security/` | How does this site handle my details? | Existing privacy explanations with shared site navigation and styling. |

## Content to add next, in priority order

1. **A real BenefitsCare benefit schedule.** Publish a current, approved schedule with minimum group size, eligibility, underwriting basis, benefit limits, exclusions, insurer identity where appropriate, exact price basis, GST treatment and separate charges. The present S$2/S$4/S$6 figures are owner-confirmed indicative starting prices per employee/month, subject to quotation. Do not describe these as a guaranteed total insurance premium.
2. **Actual portal captures, if desired.** The public feature walkthrough is now implemented with labelled illustrative sample information. A future recording can show the real portal using an authorised demonstration account. HR reporting must not be presented as an available HR module: the current HR tools are delegated claims and filed enrolment forms. No public login URL has been supplied; do not invent one.
3. **Two approved client stories.** One SME adopting BenefitsCare; one larger employer improving administration. Use the sequence: situation → issue → Inspro's actual work → documented result → limits/context. Obtain permission for names, logos, quotes and any measurable results. Anonymise when appropriate; do not invent outcomes or testimonials.
4. **Real team profiles.** Adviser name, role, relevant qualifications, focus areas, photograph and a concise explanation of the work they do. Use approved biographies and verifiable credentials. AI portraits must never stand in for actual staff.
5. **A clear service scope.** Describe who handles enrolment, claims-document checks, HR escalation, renewal reviews and employee communication. Publish response targets or 24/7 support only after confirming hours, coverage, contact route and any conditions. The 2025 deck's scale figures and helpdesk commitments are not repeated as current promises.
6. **Industry-specific pages where experience supports them.** Prioritise the industries with real clients and meaningful coverage differences. Each page needs industry exposures, relevant services, practical examples and an expert reviewer. Avoid thin pages that merely swap industry names.
7. **Expert-reviewed educational guides.** Priorities: employee benefits renewal checklist; group medical versus work injury compensation; panel versus non-panel access; flexible-benefit budgets; interpreting a benefits schedule. Add a named reviewer and review date for technical insurance or legal topics. Link to current MOM/MAS sources where relevant.

## Design and library decision

The owner rejected the initial static serif treatment and requested shadcn/ui + Lucide React + Motion, alongside meaningful GSAP scrolling. The replacement implements that first combination: locally adapted shadcn Tabs and Button, Radix keyboard behavior, Lucide React icons and Motion interactions. Aceternity UI and Magic UI were considered optional alternatives, not added to the chosen combination. [shadcn Tabs](https://ui.shadcn.com/docs/components/radix/tabs), [Lucide React](https://lucide.dev/guide/react), [Motion layout animation](https://motion.dev/docs/react-layout-animations).

The implemented visual system uses self-hosted Manrope, measured sans-serif headings with looser tracking, white/neutral-grey surfaces, Inspro red, substantial imagery and compact rounded controls. The original homepage cinematic and product rail remain intact. React enhances focused interactive areas; their content is rendered into static HTML before delivery. The existing server and URLs are retained. New npm packages are build dependencies; the prebuilt site runs without installing them.

| Page | Revised flow | Motion and interaction |
| --- | --- | --- |
| Home | Preserved cinematic/rail -> BenefitsCare comparison -> portal introduction -> enquiry choice | Existing cinematic; viewport-fitting horizontal rail; Motion plan tabs; GSAP reveal |
| Solutions | Four service destinations -> help choosing cover | Image zoom and staged reveal |
| BenefitsCare | Introduction -> three plans/prices -> wider cover -> employee portal link -> quote preparation/FAQ | Spring hover; retained plan selection; contextual quotation links |
| Corporate | Employer proposition -> employee/HR/Inspro responsibilities -> policy-year support -> cover scope | Portal walkthrough link; animated four-stage service tabs |
| Business | Operations introduction -> four risk categories -> when to review/checklist link | Category tabs; image scale; concise closing action |
| Personal | Introduction → Motor/Travel/Home → other cover → enquiry | Animated category tabs; existing hash links select their category |
| About | Concise company profile -> incorporation and registration facts -> solutions/MAS links | Restrained text/facts entrance; no giant date or repeated image |
| Claims | Reporting instructions → immediate contact → three steps → focused FAQs | Restrained step reveal; immediate access to reporting/contact |
| Guides | One substantive featured checklist -> guide action | Whole-card hover and paper illustration movement; no repeated service footer links |
| Checklist | Four numbered sections with contents → comparison table → review CTA | Temporary checkboxes, reading progress, active contents, print action |
| Contact | Short introduction/direct contact → visible form | Focus feedback; product/plan prefill; truthful draft-ready status |
| Privacy / 404 | Readable policy / two useful recovery routes | Shared link feedback and restrained entrance treatment |

Desktop and mobile order are purpose-specific. Motion respects reduced-motion preferences; corporate content remains visible without JavaScript. Essential words and policy qualifications never depend on hover.

## Technical SEO implemented

- Clear page-specific titles, descriptions, canonical URLs and share metadata.
- Existing service URLs and redirect destinations preserved; new pages in the sitemap.
- One literal H1 per content page, semantic sections, linked related content and visible breadcrumbs.
- Organisation/website data on the homepage; breadcrumb and service data where appropriate. No fabricated ratings, reviews or exact-price offers.
- Native, readable FAQs; no promises of FAQ search enhancements.
- Locally served images, Manrope font and bundled libraries. Prerendered React islands preserve core product content in HTML; no analytics dependency.
- Useful guide-to-service and service-to-guide links, including direct BenefitsCare navigation.

Google recommends useful, readable content and crawlable internal links; structured data and metadata do not guarantee indexing, rich results or rankings. See [Google's SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

## Before public launch

- Have a product owner verify the BenefitsCare quotation language and service scope against current arrangements. Complete product-specific terms before offering binding online purchase; the present site only prepares enquiries.
- Confirm public contact details. The owner-supplied flyer and site use +65 6448 7707; MAS currently lists +65 6538 3883. Keep the site number and reconcile external records separately.
- Ensure staging environments are protected or excluded from indexing. Production canonicals target `https://www.inspro.com.sg`.
- Deploy `site/` with the supplied routing and header rules; validate HTTPS, preferred hostname, real 404s, legacy redirects and the new sitemap on the actual host.
- Verify domain ownership in Search Console, submit the sitemap and inspect key URLs. This requires the owner's account access and has not been performed.
- Review Google Business Profile and business-directory NAP consistency. Do not create duplicate listings.
- Measure mobile performance on the deployed site and monitor field Core Web Vitals when sufficient data exists. Local browser checks are not field measurements.
- Agree how to measure product-page visits, enquiry clicks and qualified enquiries before adding analytics. No analytics or automatic lead delivery has been introduced.

## Measurement plan

Capture a pre-launch Search Console baseline when account access is available: branded/non-branded impressions, clicks, page-level queries and indexed URLs. Review at 4, 8 and 12 weeks after launch. Track BenefitsCare and corporate-benefits enquiries separately. Prioritise useful content and conversion quality over a fixed keyword-count target. No ranking increase or lead-volume guarantee is made.

## Source handling

Owner references remain outside `site/`; extracted working notes and screenshots are private workspace artefacts under `.impeccable/`. Do not deploy the client deck or working directory. The owner explicitly confirmed SME priority, indicative plan pricing and June 2000 history during this redesign.
