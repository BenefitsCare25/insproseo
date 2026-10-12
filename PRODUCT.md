# Inspro website

<!-- impeccable:product-schema 1 -->

Updated 11 October 2026.

## Platform

web

## Product Purpose

Help visitors understand Inspro's insurance broking services and prepare an informed enquiry.

## Users

Confirmed by the owner: Singapore SMEs and employers first; personal cover is secondary. BenefitsCare for SME is the SME product. Larger companies have customised employee-benefits needs.

## Service Name Glossary

Owner-approved on 9 October 2026. Use these exact category and product labels consistently across page content, navigation, cards, forms, metadata, structured data and interactive controls. This glossary supersedes older naming in project records.

| Exact label | Scope |
| --- | --- |
| Employee Benefits (Life & Medical) | Independent life and medical programme category |
| Business Insurance | Commercial cover, including employee-related business policies |
| Personal Insurance | Personal cover category; Travel Insurance also has direct navigation |
| BenefitsCare for SME | Standalone SME employee-benefits product with Starter, Flex and Premier plans |

Owner-approved navigation update on 11 October 2026: rename Claims Help to **Claims Support** and About to **About Us**. Navigation, footer groups, breadcrumb names and topic labels use title case, including **Insurance Solutions**, **Travel Insurance**, **Portal Preview**, **Claims Support** and **About Us**. Preserve canonical service names, including **BenefitsCare for SME**, and every existing destination.

## Capabilities and Constraints

Existing static multi-page website; no framework replacement or backend. The owner requested shadcn/ui + Lucide React + Motion on 3 October 2026. Focused React islands use those libraries while all product content is rendered into the shipped HTML. Build dependencies are pinned; serving the prebuilt website still requires no npm installation. The contact form has one **Send enquiry** action: validate the fields, then open the configured email app with an encoded message to **helpdesk@inspro.com.sg**, retaining the service and selected plan/topic. The visitor reviews and sends the email there. The website does not submit or store enquiries; the on-page draft preview and Copy/Open controls were removed at the owner's request on 9 October 2026. Preserve the completed homepage cinematic animation, product rail, assets, mobile fallback and reduced-motion behavior. GSAP and ScrollTrigger are bundled locally.

The contact page keeps a short introduction and labelled form fields. Its top contact area consolidates phone, email, the address **38 Jalan Pemimpin, M38 #02-08, Singapore 577178**, directions and a short call/email-to-arrange-a-visit note. There is no separate bottom office section. The owner-requested removal of the visible form heading and explanatory copy retains the form's accessible name.

## Brand Commitments

Inspro name, red logo, completed homepage animation. Keep the supplied footer PNG unchanged with its original transparency; the footer's white backing has been removed. The user delegated the rest of the redesign and content flow. Build the reviewable site directly in code within the existing project.

The owner rejected the serif editorial direction as static, immature and wordy. The replacement uses Manrope, confident sans-serif hierarchy, concise product copy, responsive hover states, animated shadcn tabs, selectable plans and meaningful GSAP scroll sequences. Do not restore the rejected serif system or repeat the same layout on every page.

## Evidence on Hand

The owner authorised a read-only review of `C:/Users/huien/inspro` on 3 October 2026 to select public portal features. Current source supports employee benefit statements and usage, claims/document autofill and correspondence, panel clinics/cards and enrolment; HR delegated claims and filed enrolment-form downloads; broker coverage matching, claims work and reports. HR roster and policy modules are still marked coming soon. HR permissions are restricted and form acknowledgement remains with the broker. See [the feature audit](docs/PORTAL-FEATURE-AUDIT.md). Source evidence is not a deployed-portal or entitlement check. Public previews use labelled synthetic information, with programme-dependent availability.

Inspro's public About page confirms incorporation in June 2000 and work in insurance advice, risk management and claims assistance. MAS directory confirms Registered Insurance Broker and Exempt Financial Adviser status, checked 3 October 2026. Current source includes business, benefits and personal product categories. AI imagery is illustrative, not staff or office photography.

## Positioning

Make cover easier to understand and use through BenefitsCare for SME, corporate programme design, employee/HR portals, flexible-benefits administration, claims-document follow-up and cost-centre billing. These capabilities are documented in the owner-supplied marketing slides. They are not claims that no competitor offers them. No approved case studies, testimonials or exclusive arrangements have been supplied.

## Owner-supplied Materials and Confirmations

References: Downloads/Inspro Marketing Slides - New Client.pdf; Downloads/Inspro Benefits Care Flyer.png; Downloads/Inspo Benefits Care.pdf; Desktop/Inspro/Inspo Benefits Care.pdf (supplied for the 10 October benefits revision). The 2025 slides support the corporate service description. The flyer supports Starter, Flex and Premier features. Owner confirmed on 3 October 2026: S$2/S$4/S$6 per employee/month are indicative starting prices, quotation required. Use incorporation in June 2000 only; do not repeat the slides' 1993 history claim. Do not reproduce source slides containing employee personal details or client data on the public site.

## Product Principles

- Owner instruction on 10 October 2026: remove the `/services/` overview and all links or redirects leading to it. **Insurance solutions** opens exactly four direct pages: Employee Benefits (Life & Medical), Business Insurance, Personal Insurance and BenefitsCare for SME. Keep active individual pages and their relevant links; do not recreate an overview.

- Latest owner instruction on 10 October 2026: retain only `/guides/`, `/guides/insurance-review-checklist/` and `/guides/sme-employee-insurance-singapore/` as guide routes. Retire the ten other detail guides and their Public Liability-only assets; redirect their trailing-slash, slashless and `index.html` URL variants permanently to Contact with the matching service/topic. The active site has 14 content pages plus 404. Page generators, sitemap, metadata, structured data and `llms.txt` must describe active pages only and must not recreate retired guides. This replaces the earlier sequential guide redesign workflow.

- Non-travel product-card actions retain the visible label **Review** and open `/contact-us/` with the correct `intent`, `topic` and selected BenefitsCare `plan`. The owner's latest 11 October BenefitsCare refinement places a plain **Review** arrow link at the top right of the plan and quotation headings. The plan link follows the selected tier after enhancement and remains a generic BenefitsCare enquiry without JavaScript. Keep this label and destination correspondence during initial rendering, hydration and later selection. Preserve the existing primary motion and graphics. Travel Insurance HTML remained unchanged during the earlier catalogue cleanup. The owner's 11 October 2026 request supersedes that restriction with the scoped Travel redesign; all travel entry labels, anchors, Contact context and insurer quotation URLs remain as recorded before the cleanup.

- Owner-confirmed on 10 October 2026: **Business Insurance** in the four-page menu opens `/service-details/commercial/commercialoffice-package/` directly. Later owner steering removes the separate product directory and integrates all 19 former groups into this primary page. Six topics contain 22 corresponding product views: business packages; property and operations; money and crime; liability and professional; people and travel; marine and trade. Use [the old Inspro product list](https://www.inspro.com.sg/service-details/commercial/view-commercial-insurance-products/) for named specialist products and [the old package page](https://www.inspro.com.sg/service-details/commercial/commercialoffice-package/) for six industry plans and seven sections — property all risks, business interruption, money, work injury compensation, public liability, fidelity guarantee and personal accident. Latest owner feedback rejects repeated coverage within one card and requests sequential individual card review. The current interpretation explains seven shared sections once in three groups, names six business contexts once, and removes selectors that reveal identical contents. Product controls disclose only corresponding specialist explanations and actions. Keep package sections distinct from optional/specialist policies; do not turn old example limits into universal/current promises or imply that medical, professional, marine or fleet policies are included in the package. Follow the Employee Benefits visual world, equal responsive frames and aligned introductions, with distinct finite motion for each content family.

- Owner instruction on 10 October 2026: after Business Insurance is fully complete, redesign the primary Personal Insurance page in the same compact visual world, verifying personal product content against the existing Inspro site before restructuring it.

- The Employee Benefits page follows the supplied `Desktop/Inspro/Inspo Benefits Care.pdf`: Group Outpatient Clinical, Specialist and Dental; Group Hospital & Surgical and Major Medical; Group Term Life, Dread Disease and Personal Accident. Flexible benefits and wellness are also named. The brochure includes WIC, which remains separate employer cover under Business Insurance in the approved website architecture. Public liability and professional indemnity are outside Employee Benefits. Each benefits family has its own compact motion presentation inside one equal responsive frame; product facts take precedence over a reusable content template. The owner's later 10 October steering adds Dependent coverage as a third item alongside flexible benefits and wellness, moves broker support into the left introduction, and simplifies the policy year to connected milestones with concise selected details.

- Follow the exact labels in the Service Name Glossary. Do not introduce “employer cover” as a separate category. Employee-related business policies (work injury, foreign-worker medical, security bonds and corporate travel) are discoverable under Business Insurance. Travel Insurance also has a direct navigation link.

- Keep one Travel Insurance content page at `/service-details/personal/travel-insurance/`, covering personal quote options, shared comparison prompts and a **Business travel** chapter. The Business Insurance page links to its `#business-travel` section; the three retired corporate-travel URL variants permanently redirect there. Homepage and Personal Insurance features use one **Explore travel insurance** link. Preserve personal quote URLs and the business enquiry context `intent=business&topic=corporateTravel`.

- Explain the cover, the important questions and the next step.
- Distinguish broking support from insurer underwriting and claim decisions.
- Keep essential information readable without JavaScript.
- Use evidence for credibility; do not imply superiority without substantiation.

## Owner-approved Claims Support extension — 11 October 2026

The owner authorised the direct-code Claims Support redesign at `/claims-support/`. Keep actual contact channels **+65 6448 7707** (`tel:+6564487707`) and **helpdesk@inspro.com.sg** (`mailto:helpdesk@inspro.com.sg`) before reporting guidance and as readable linked text in print. The three original chapters remain What To Do First, Benefits Programme and Common Questions, at `#page-section-1`, `#page-section-2` and `#page-section-3`.

Retain insurer reporting channels, time limits and emergency contacts, and all three original FAQ answers. Inspro assists with documents and communication; the insurer assesses the claim, and programme/insurer requirements govern letters of guarantee. An enquiry does not lodge a claim. The website does not upload documents or add claim delivery. **Get Support** uses the existing `intent=claims` Contact flow, which prepares an email draft.

The owner's later 11 October correction removes both redundant preparation/programme footer sentences and supersedes the earlier requirement for a literal non-lodging footer note. Keep reporting, insurer assessment and programme-channel qualifications in the guidance and FAQs. The four corrected authored scenes, stationary native captions and shorter equal intrinsic frames retain the existing palette, type and channel truths.

Programme access comes from the employer or the confirmed claim channel. Document uploads, claim updates and follow-up replies remain programme-dependent. **Preview Portal Claims** keeps `/employee-benefits/portal/?role=employees&feature=claims#explore` and describes a feature preview; it is not the employee's actual programme channel. The [Claims verification record](docs/CLAIMS-VERIFICATION.md) retains source, review and delivery limits.

## Owner-approved About Us card extension — 11 October 2026

The owner authorised redesign of only the five About Us cards at `/about-us/`. The header/navigation, breadcrumb, entire introduction/photo/company-facts block and footer remain protected. Preserve the original vision, both mission statements, four TACT meanings, three broking-help descriptions, June 2000 context and company/registration wording. Keep the existing five topic anchors, actual MAS directory destination and website phone/email links. This extension retains website facts; it adds no new company assurance, performance claim or independent certification. The current source/local SEO/GEO/AEO audit verifies the existing native answers, metadata and linked company facts without promising rankings or AI mentions.

Compact wider cards share an intrinsic frame; at 64rem and below each follows its content height. Four decorative figures support the headings, while meaningful TACT pictograms sit beside the original native descriptions. Automatic 8.2-second geometry tracks leave all reading stationary and retain static, no-JavaScript and print content. The [About card verification](docs/ABOUT-CARDS-VERIFICATION.md) records the accepted bounded density/TACT repair and source scope. Contact remains an email-draft flow without delivery or a new backend.

## Owner-approved Portal Preview extension — 11 October 2026

The owner authorised a direct-code redesign of `/employee-benefits/portal/` within the existing Manrope, burgundy and warm-paper world. Nine source-backed demonstrations cover Employees, HR teams and Inspro support. The latest compactness instruction supersedes the earlier identical-height interpretation at every width: active workspaces fit their content, inactive views leave flow, matching combines employer record and assigned benefit schedule with grouped checks, and enrolment combines its selection graphic, selected benefits and review controls. Repeated descriptions, the title/icon, sample badge and pause control remain removed; five native questions preserve essential qualifications.

[The feature audit](docs/PORTAL-FEATURE-AUDIT.md) remains authoritative. HR access covers only permitted HR-submitted claims and filed forms; review and acknowledgement stay with Inspro. Amounts, identifiers, counts and clinic areas are illustrative. Preview choices do not connect accounts, submit claims or download personal documents. Programme access, eligibility and insurer assessment still apply; no future roster/policy module, automatic approval or settlement promise is added.

Task-specific graphics and visual amounts repeat on 7.2-second clocks while native reading and accessible final values remain stable. Reduced-motion, no-JavaScript and print alternatives stay complete. The [Portal verification](docs/PORTAL-PREVIEW-VERIFICATION.md) records the repaired narrow-screen failure, separate check counts and fresh full finish disposition. Shared pages and email-draft-only Contact remain; no delivery backend, public deployment, ranking or AI-visibility outcome is created.

## Open Business Details

Confirm which phone is authoritative before launch: existing website uses +65 6448 7707; MAS directory lists +65 6538 3883. Retain the existing website number for this preview. Real adviser profiles, case studies and service commitments remain owner-supplied work.

## Owner-approved Personal Insurance extension — 10 October 2026

The owner asked to finish Business Insurance, then redesign the primary Personal Insurance page using the Employee Benefits design theme and compact presentation. Business's full review and scoped two-fix verdict are closed before Personal's final review.

Personal Insurance remains the real main route at `/service-details/personal/view-personal-insurance-products/`. Eight existing product families are organised into six topics: **Travel**, **Motor**, **Home**, **Personal accident**, **Domestic helper** and **Lifestyle cover** (Golfer’s, Fine art and Pleasure craft). Eleven native selectable views explain travel periods, three progressive motor cover types, three home review areas and three specialist contexts. No separate new directory or replacement route is introduced.

Follow the approved burgundy/rose/Manrope world, existing family photograph, equal 480px desktop frames, responsive intrinsic equal sizing and top-aligned introductions. Graphic form follows the content: journey windows; actual motor risk layers; highlighted home cutaway; accident outcomes; distinct helper insurance requirements and a separate bond; golf, artwork or vessel review. Each graphic uses a finite reveal or selection response and settles into readable content. Keep quiet selected controls and inset keyboard focus.

Product descriptions are sourced review guidance; no invented benefit limits, premiums, automatic entitlement or universal cover. Dedicated pre-existing-condition travel options remain distinct. Helper medical insurance, accident cover and the non-Malaysian Work Permit guarantee serve different purposes. Specialist choices update only their corresponding Personal enquiry topic. The CollectionPage metadata lists eight named products with active on-page or Travel Insurance destinations.

Preserve the product facts on the primary pages, FWD/MSIG/Pre-Ex referral URLs, the direct four-page menu, final Business/Employee Benefits content and motion, homepage cinematic/product rail, images/fonts/logos and email-draft-only enquiry behavior. The later guide-cleanup policy above retires separate detail guides. No public deployment is part of this task.
