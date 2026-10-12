# Local production-readiness and editorial review — 9 October 2026

**Verdict: the local build passes the checks below and is ready for Inspro's final content review. Public launch is not yet signed off.** All 27 content pages and the 404 page were reviewed again. Preview: http://127.0.0.1:3000/. The intended launch domain is `https://www.inspro.com.sg`; the existing public website was not changed.

This report supplements [the implementation record](SEO-GEO-AEO-IMPLEMENTATION.md) and [71-action workbook](../outputs/inspro-seo-20261009/Inspro-SEO-Action-Plan.xlsx). It separates verified local work from owner decisions, host checks and ongoing marketing. Local checks cannot establish indexing, rankings, AI citations or real-user performance.

## Language and information structure

The full main-page copy was read page by page, including the HTML for interactive panels and closed FAQs. The review covered natural Singapore English, complete sentences, heading sequence, direct answers, defined abbreviations, insurance distinctions, product qualifications, descriptive links and clear next steps. Metadata was checked against the visible content. Keyword repetition and word count were not treated as quality targets.

The second pass made these corrections:

- Moved explanatory and answer sections before closing enquiry actions and suggested next reading, where those sections exist.
- Added the missing visible guide introduction and corrected the nested portal introduction so the rendered page matches its mapped intent.
- Clarified group medical insurance, panel/non-panel treatment, optional benefits and insurer-dependent minimum membership. Expanded WIC/WICA and separated compulsory insurance purchase from eligibility for statutory compensation.
- Clarified foreign-worker medical insurance sub-limits and that insurance premiums cannot be passed to workers. Avoided confusing premiums with separately regulated medical-bill sharing.
- Explained professional indemnity claims-made wording and retroactive dates, and clarified the distinction between public liability and employee injury cover.
- Replaced awkward quotation language and incomplete enquiry prompts with natural sentences. Removed a repeated updated date from the renewal guide.
- Preserved BenefitsCare and SME capitalisation in prepared email drafts, removed duplicated subject wording, and verified that editing details invalidates an old draft.
- Linked each non-homepage WebPage entity explicitly to its BreadcrumbList. Added audit checks for heading sequence, visible introductions and agreement between metadata and page entities.

## BenefitsCare source supplied by the owner

The source image was inspected: `C:\Users\huien\Desktop\Inspro\Inspro Benefits Care Flyer.png`.

| Tier | Advertised price | Flyer benefits |
| --- | --- | --- |
| Starter | S$2 per employee per month | Panel GP |
| Flex | S$4 per employee per month | Panel GP, non-panel and flexible benefits |
| Premier | S$6 per employee per month | Flex benefits plus inpatient hospitalisation |

The website retains these advertised figures and now explains their source. The flyer does not establish the tax treatment, separate fees, benefit limits, eligibility or all policy conditions. The quotation wording asks for those details; it does not label the figures as final all-inclusive insurance premiums. Inspro's qualified product reviewer still needs to approve the current offer and final terms before launch.

Source SHA-256: `ec4f79aa9e054b941dd220226a1c416ee29a1e2e45a9a8c534cea17737f6dd0b`.

## Page-by-page editorial coverage

All rows below were reviewed locally. A reviewed row is not insurer or legal approval. Paths are routes on the local preview.

| Page / route | Editorial focus and result |
| --- | --- |
| Home `/` | SME employee benefits and business insurance focus; plain service explanation, employer questions and related links. Approved cinematic heading and motion retained. |
| Services `/services/` | Clear separation of employee benefits, business and personal insurance; descriptive routes to specific decisions. |
| BenefitsCare `/employee-benefits/benefitscare/` | Flyer-aligned tier benefits and prices; panel explanation, direct eligibility answer and qualified quotation wording. |
| Corporate benefits `/service-details/commercial/employees-benefits/` | Distinguishes programme design from a specific packaged plan; explains review, implementation and support without guaranteed outcomes. |
| Business packages `/service-details/commercial/commercialoffice-package/` | Package scope depends on activities and policy wording; comparison inputs and complete enquiry sentences. |
| Commercial directory `/service-details/commercial/view-commercial-insurance-products/` | Distinct policy categories, specialist service links and no blanket promise that one policy covers every exposure. |
| Portal `/employee-benefits/portal/` | Accurate visible introduction; HR/employee capabilities described as a feature preview with sample information. |
| About `/about-us/` | Business identity and Singapore relevance; no invented biographies, qualifications or client outcomes. |
| Contact `/contact-us/` | Simple enquiry instructions, selected service context and truthful unsent-draft wording; practical visit instructions. |
| Claims `/claims-support/` | Appropriate insurer reporting channels, preparation and sensitive-document guidance; no promise of a claim payout. |
| Guides `/guides/` | Added a clear employer-focused introduction; distinct links to the renewal checklist and SME insurance guide. |
| Renewal guide `/guides/insurance-review-checklist/` | Actionable renewal preparation, clear questions and one visible publication/update attribution. |
| Privacy `/privacy-security/` | Statements checked against the actual static, draft-only website; must be revisited if analytics or delivery is added. |
| Worker medical `/service-details/commercial/foreign-worker-medical-insurance/` | Work Permit/S Pass distinction, minimum cover, sub-limits and premium responsibility; official MOM references. |
| Worker bonds `/service-details/commercial/foreign-workers-bonds/` | Bond purpose and employer obligations distinguished from medical cover; policy and MOM qualifications retained. |
| Corporate travel `/service-details/commercial/corporate-travel-insurance/` | Natural employer heading, business travel exposures and relevant quotation inputs. |
| Personal directory `/service-details/personal/view-personal-insurance-products/` | Retained genuine personal services while keeping commercial priorities clear; comparison and enquiry language reviewed. |
| Travel `/service-details/personal/travel-insurance/` | Clear quotation options, existing insurer routes and readable comparison wording; no purchase or coverage guarantee. |
| Motor `/service-details/personal/motor-insurance/` | Complete enquiry sentence and practical vehicle/use/renewal information. |
| Home `/service-details/personal/home-insurance/` | Buildings versus contents distinction and complete quotation prompts. |
| Personal accident `/service-details/personal/personal-accident-insurance/` | Accident cover distinguished from broader medical cover; relevant benefit and occupation questions. |
| Maid `/service-details/personal/maid-insurance/` | Helper cover and employer requirements described with policy qualifications and practical next steps. |
| Group medical `/employee-benefits/group-medical-insurance/` | Direct definition, insurer-specific membership requirements, panel/non-panel explanation and optional benefits. |
| WIC `/service-details/commercial/work-injury-compensation-insurance/` | Defined WIC/WICA, compulsory purchase thresholds, salary components and statutory scope/exclusions. |
| Public liability `/service-details/commercial/public-liability-insurance/` | Third-party injury/property damage explained; employee injury distinguished; contract and activity details requested. |
| Professional indemnity `/service-details/commercial/professional-indemnity-insurance/` | Professional errors, claims-made notification and retroactive dates explained in accessible language. |
| SME guide `/guides/sme-employee-insurance-singapore/` | Employer comparison of compulsory requirements and elective benefits, with related service links and official sources. |
| Error page `/404.html` | Plain recovery navigation; noindex and excluded from the sitemap. Unknown routes return HTTP 404. |

## Fresh verification

| Check | Observed result |
| --- | --- |
| `npm run build` | PASS: 117 public files, 23 script syntax checks and 1,557 local file/anchor references, plus redirect targets, sitemap and structured data. Rerun after the final contact-script edit. |
| `npm run audit:seo` | PASS: all 27 content pages, no failures or warnings. Unique metadata, canonicals, visible introductions, hierarchy, schema links, image attributes, sitemap and content-link reachability. |
| Generator repeatability | Re-running `npm run optimize:seo` changed zero public files by SHA-256 comparison. |
| Browser page coverage | 56 fresh page/viewport checks: all 28 pages at measured 1,440 and 390 CSS pixels. One H1 each, language attribute present, no horizontal overflow or visible broken images. |
| HTTP page coverage | All 27 content routes returned 200 with the configured security headers. |
| Routing and file delivery | Unknown path 404; project README and host-rule files not served; hidden config blocked; POST 405; index/slash aliases 301 with query preserved; HEAD empty body; conditional 304; valid byte range 206; invalid range 416. |
| Enquiry interactions | Required fields block incomplete drafts. Premier selection reaches the draft. Correct subject/brand wording and unsent status. Editing a detail hides the stale draft. No mail app opened or email sent. |
| Mobile navigation and FAQ | Navigation opens and closes with Escape. Updated BenefitsCare pricing disclosure opens and shows the source-qualified figures. |
| Copy hygiene | No placeholder terms or replacement characters found in the 27 main-page text extracts. |

The refreshed workbook was exported, visually inspected and independently reopened with openpyxl. Its 71 action rows, 28 page rows, original source values, status dropdowns and cached summary formulas reconcile. The artifact exporter returned exit code 1 after reporting successful export; the independent file checks passed.

Evidence: [source audit](seo-audit.json), [browser checks](seo-readiness-browser.json), [HTTP checks](seo-readiness-http.json), [interaction checks](seo-readiness-interactions.json). These are scoped checks, not full accessibility, security or cross-browser certification. Earlier broader interaction/accessibility records remain available in VERIFICATION.md and apply to their stated revisions.

## Remaining launch work

1. **Inspro product sign-off:** confirm current BenefitsCare availability and full quotation conditions; approve the insurance descriptions, business contact details and regulatory wording. The supplied flyer resolves the advertised-price question, but does not replace the current insurer terms.
2. **Host and migration verification:** deploy the reviewed `site/` release to the chosen host, verify TLS, preferred www redirects, header/routing rules and crawler access. Reconcile the complete legacy URL list from a Search Console or hosting export. Local redirects do not prove the future host applies them.
3. **Operational enquiry check:** approve the existing email-draft workflow and confirm the mailbox is monitored and receives a real user-sent enquiry. A direct-send backend is optional, not a requirement invented by this audit. Existing insurer quotation destinations require a launch smoke check; no purchase was made.
4. **Performance and browser sign-off:** run throttled measurements on the actual release host and complete real-device, cross-browser, keyboard and assistive-technology checks. The preserved approximately 13.95 MB desktop cinematic remains a loading consideration. Mobile/reduced-motion gates remain in place. Field Core Web Vitals require real traffic and cannot be certified from local geometry checks.

Search Console, Bing Webmaster Tools, Google Business Profile reconciliation, sitemap submission and properly configured analytics are outstanding launch/measurement tasks. Team biographies, genuine photography, substantiated case studies and ongoing review acquisition are trust-building work; their absence is not itself a static-build failure. The workbook records each separately instead of treating them all as code defects.

No ranking can be promised across all Google searches or AI platforms. The site is structured to be understandable, crawlable and useful. Actual performance needs to be measured after publication for a defined Singapore query set, with Google positions, local visibility and AI citations recorded separately. Google's current guidance supports ordinary SEO fundamentals and helpful accessible content for AI visibility. [Google AI optimisation guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

## Official references checked

- [MOM — work injury compensation insurance](https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/work-injury-compensation-insurance): compulsory purchase categories and salary threshold components.
- [MOM — who is covered by WICA](https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/who-is-covered): statutory scope and exclusions, distinct from mandatory insurance purchase.
- [MOM — Work Permit medical insurance](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/medical-insurance) and [S Pass medical insurance](https://www.mom.gov.sg/passes-and-permits/s-pass/medical-insurance): minimum coverage, sub-limits and responsibility for insurance costs.
- The supplied BenefitsCare flyer is the source for the three advertised monthly tier prices. No source was invented for unspecified product terms.

Only `site/` is the public website. Reports, source checklist data and the supplied flyer path belong to this private handover material.
