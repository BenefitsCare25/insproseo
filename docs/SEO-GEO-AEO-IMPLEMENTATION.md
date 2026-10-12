# Local SEO, GEO and AEO implementation — 9 October 2026

Follow-up: [all-page language and production-readiness review](SEO-PRODUCTION-READINESS.md). This second pass includes the owner-supplied BenefitsCare flyer, editorial corrections, fresh verification and remaining launch requirements.

The new local website has been updated for Singapore SME employee benefits and business insurance. Preview: **http://127.0.0.1:3000/**. All edits are in this project; the existing public website was not changed. `https://www.inspro.com.sg` is the intended production canonical origin, not the location of this preview.

The deliverable is [Inspro-SEO-Action-Plan.xlsx](../outputs/inspro-seo-20261009/Inspro-SEO-Action-Plan.xlsx). It contains **71 actions: all 51 supplied checklist items, plus 20 identified gaps**, with priority, status, suggested owner, timing, evidence and source. Its separate page-audit sheet covers **27 content pages and the 404 page**. The original workbook on the Desktop was read without modification; its cell values are also retained in the new workbook's reference sheet.

Current action counts: **36 done locally, 14 needing owner input, 13 launch checks, 5 ongoing and 3 not applicable**. “Done locally” does not mean published, indexed or ranking. Top-three positions for every Google search or AI response cannot be guaranteed; no live ranking position is claimed.

## Implemented

- Mapped a distinct search purpose to every page. Updated titles, descriptions, canonical URLs and matching social previews across the 27 content pages; retained the approved cinematic homepage heading.
- Added five dedicated pages: [group medical insurance](../site/employee-benefits/group-medical-insurance/index.html), [work injury compensation](../site/service-details/commercial/work-injury-compensation-insurance/index.html), [public liability](../site/service-details/commercial/public-liability-insurance/index.html), [professional indemnity](../site/service-details/commercial/professional-indemnity-insurance/index.html), and an [SME employee insurance guide](../site/guides/sme-employee-insurance-singapore/index.html). Open these through the local server, not as `file://` documents.
- Expanded existing service and support pages with relevant comparison questions, clear answers, quotation inputs and descriptive links. Privacy retains its existing substantive policy; its metadata and shared identity were updated.
- Added comparison tables and native answer disclosures. Two-column tables fit mobile layouts; wider comparisons have a labelled, keyboard-focusable scroll region and a mobile scrolling instruction.
- Kept Employee Benefits as its own breadcrumb branch. Added consistent visible breadcrumbs and matching structured data, one shared InsuranceAgency identity, Service entities, collection lists and Article authorship attributed to the company.
- Included current MOM/MAS references where specific regulatory or registration statements appear. No invented reviewers, client outcomes, ratings, testimonials or opening hours were added.
- Linked all content pages from the site's visible content. The audit computes shortest link depth from the homepage, excluding shared navigation and footer shortcuts. No orphan content pages remain.
- Regenerated the 27-URL sitemap and optional `llms.txt` directory. Retained crawlable robots rules, excluded the 404 page from the sitemap and marked it `noindex`. Node hosting now redirects existing `/index.html` aliases to directory URLs while preserving the query string.
- Added topic-aware enquiry routes for all five new pages. The existing form still prepares an unsent email draft; it neither sends nor stores enquiries.
- Kept the homepage motion source and video. Replaced the logo and homepage poster with smaller WebP files; connected the three product-rail images to existing responsive WebP derivatives. Removed an unused large homepage-image preload from interior pages.
- Integrated the changes into the existing static page generator, with a separate repeatable SEO command and route validator. No replacement framework or runtime service was introduced.

## Media changes

These are file-byte comparisons, not measured improvements to LCP or field Core Web Vitals. Original source images remain available privately in the project assets.

| Asset | Previous bytes | Referenced replacement bytes |
| --- | ---: | ---: |
| Logo | 187,263 | 72,092 |
| Homepage poster | 655,688 | 163,408 |
| Business rail image | 706,018 | 69,560 |
| Benefits rail image | 711,876 | 63,312 |
| Personal rail image | 728,323 | 72,600 |

Together these five desktop image choices fall from 2,989,168 to 440,972 bytes, about 85% smaller. Responsive selection, caching and loading behaviour determine actual network transfer. The existing approximately 13.95 MB desktop video remains a performance consideration and needs a throttled loading review before launch.

## Checklist corrections and strategy

The supplied WordPress checklist was adapted to this static site: plugin and WordPress visibility instructions are not applicable. Local robots, canonical and HTTP checks replace those implementation-specific steps.

Google's current guidance emphasises useful original content, ordinary SEO fundamentals and index eligibility for AI visibility; `llms.txt` has no Google ranking benefit. The file here is only an optional content directory. Search Console inclusion controls and performance reports are recorded as account-dependent tasks. [Google AI optimisation guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

Useful questions remain visible without a promise of FAQ rich results. Google stopped that rich-result feature in May 2026 and removed its documentation in June. [Google documentation updates](https://developers.google.com/search/updates).

Search crawler access must also be verified at the eventual CDN/firewall. OpenAI distinguishes search access from model-training crawler policy; allowing one should not be treated as consent for the other. [OpenAI publisher guidance](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq). Perplexity provides separate crawler guidance for host configuration. [Perplexity crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers).

Qualitative review of [Howden's SME benefits offering](https://www.howdengroup.com/sg-en/employee-benefits/benefits-for-small-businesses) and [Pacific Prime's employee benefits pages](https://www.pacificprime.sg/employee-benefits/) informed the decision to separate programme, group-medical and employer-guide intents. This is a content-structure observation, not a ranking or traffic comparison. Inspro's existing BenefitsCare choices and portal walkthrough provide specific service context; approved firsthand broker examples would strengthen that content further. No search-volume figures or competitor rank positions were invented.

## Verification

- `npm.cmd run redesign:pages`: regenerated 27 content pages plus 404 with the SEO step included.
- `npm.cmd run check`: passed 117 public files, 23 script syntax checks, 1,557 local file/anchor references, redirect targets, sitemap and structured data.
- `npm.cmd run audit:seo`: passed all 27 content pages. [Machine-readable results](seo-audit.json) include primary intent, metadata, content links and click depth.
- Repeating the SEO generator produced no file changes after its head-whitespace handling was corrected.
- [Browser evidence](seo-browser-checks.json): 56 checks across 28 pages using desktop/mobile viewport overrides of 1440 and 390. Those are requested browser dimensions; the existing browser zoom affects effective CSS width. Each check found one H1, a main region, no document-wide horizontal overflow and no visible broken images. This is not a complete accessibility or cross-browser certification.
- Targeted browser checks confirmed FAQ expansion, mobile navigation, the group-medical draft flow, SME review preselection and all three new business-policy enquiry topics. The draft explicitly remained unsent. No insurer purchase or external email delivery was performed.
- Local HTTP checks confirmed 27 content routes returned 200; a missing route returned 404 with `noindex`; robots, sitemap, `llms.txt` and health returned 200. Existing index aliases and missing trailing slashes redirected with 301. Direct `/404.html` returns the error document with `noindex`; actual unknown routes return HTTP 404.
- A manual UI detector identified two typography advisories, which were aligned with the existing design scale. Its inferred 384px heading/0.15 line-height reports did not match browser styles: the inspected mobile H1 measured about 41px with 46px leading. Section gutters and table-cell padding were present in the browser. Existing sitewide menu clipping and hover styling remain outside this content revision; mobile navigation was checked.
- Workbook formulas recalculate when statuses change, and no formula errors were found. Three sheet previews were inspected, and source-heading wrapping was corrected. A separate XLSX read verifies sheet sizes, cached counts, validations and original values. Native Excel was not used. The rendering/export process returned exit code 1 after writing its completed outputs, so the exported workbook was verified independently rather than treating that process as a clean exit.

Private working evidence and recoverable pre-change source copies are under `.impeccable/seo/`; they must not be deployed.

## Remaining work in order

1. **Before launch:** obtain a qualified Inspro review of policy statements and plan terms; confirm contact details, real opening/visit arrangements and approved identities. Decide whether enquiry delivery should remain a mail draft or become a separately scoped service. Reconcile a full historical URL export with existing redirects.
2. **At launch:** deploy only `site/`, enforce HTTPS and the preferred www host, verify host-specific redirects/headers/404s, configure search crawler access, confirm cache/compression and measure performance. Keep staging private or noindexed if a public staging URL is introduced; the current loopback preview is local only.
3. **Connect real accounts:** verify Google Search Console and Bing Webmaster Tools, submit the deployed sitemap, inspect representative new and retained URLs, check AI inclusion settings, and reconcile Google Business Profile details. Analytics requires real identifiers plus privacy and CSP review. A draft-prepared event must not be labelled a received lead.
4. **Build evidence:** add approved broker biographies and authentic SME case studies, plus an agreed process for requesting honest client reviews. No fabricated expertise or results are substitutes for these inputs.
5. **After launch:** inspect indexing, selected canonicals, crawl errors and enquiries on day 1 and day 7; then review search visibility monthly and regulatory/product wording quarterly or when it changes.

The original public domain was not crawled further after the owner clarified the local-only scope. Migration completeness is therefore an explicit launch task, not a claim of this audit.

## Measurement brief

Track these initial query groups in Singapore, splitting mobile/desktop and branded/non-branded results: `Singapore insurance broker for SMEs`, `SME employee benefits Singapore`, `group medical insurance Singapore`, `business insurance Singapore SME`, `work injury compensation insurance Singapore`, `public liability insurance Singapore`, and `professional indemnity insurance Singapore`. The page-audit sheet supplies the corresponding landing-page intent. Validate demand with actual Search Console data rather than assuming volume.

For AI visibility, record the date, platform, model/search mode, answer and cited URLs for a fixed prompt set:

- Which insurance brokers in Singapore help SMEs arrange employee benefits?
- How should a Singapore SME compare group medical insurance?
- What is the difference between employee medical benefits and work injury insurance in Singapore?
- Which insurance policies should a Singapore consultancy review?
- Which Singapore brokers provide employee benefits administration and portal support?

Treat citation frequency and qualified enquiries as separate measures from Google organic position or local-pack presence. Do not force a top-three ordinal metric onto platforms that return unranked answers.

## Maintaining the implementation

Edit `scripts/seo/page-map.mjs` for routes and metadata, `content.mjs` for additions to existing pages, `new-pages.mjs` for the five new page bodies and `schema.mjs` for linked entities. Styling is scoped in `site/assets/css/search-content.css` and uses existing colour tokens. Ordinary serving needs no package installation.

After content edits run `npm.cmd run optimize:seo`, `npm.cmd run check` and `npm.cmd run audit:seo`. The full `npm.cmd run redesign:pages` command also applies the SEO step after existing page composition. Build is validation; `npm start` runs the production Node server, while `npm run dev` binds the local preview. Static hosts need equivalent route/header behaviour because Node's index-alias redirect does not execute on static hosting.

Insurance source references used in the affected pages include the [MAS institution listing](https://eservices.mas.gov.sg/fid/institution/detail/765-INSPRO-INSURANCE-BROKERS-PTE-LTD), [MOM WIC insurance](https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/work-injury-compensation-insurance), [Work Permit medical insurance](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/medical-insurance), [S Pass medical insurance](https://www.mom.gov.sg/passes-and-permits/s-pass/medical-insurance), [security bonds](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/security-bond), [domestic-worker insurance](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/eligibility-and-requirements/insurance-requirements) and [GIA business insurance](https://gia.org.sg/consumers/other-types-of-insurance/107-business-insurance.html). Confirm current requirements before publication or policy placement.
