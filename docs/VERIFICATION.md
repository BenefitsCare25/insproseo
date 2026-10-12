# Current verification: Portal Preview retirement ? 12 October 2026

The standalone page, public links and sample demonstrations are removed. All 13 remaining content pages pass the SEO audit with no warnings. The replacement support content and supplied logo-only favicon are documented in [retirement and SEO verification](PORTAL-REMOVAL-SEO-VERIFICATION.md). Earlier entries below record historical revisions.

---

# Current verification: presentation and Azure — 12 October 2026

All 15 HTML pages use the transparent Inspro PNG icon and shared Manrope typography.
Non-home page titles share a size, weight and line-height system; centered reading
widths and smaller hero gaps reduce excess empty space. The homepage Why Inspro
and Your Benefits Portal cards now have one primary action each, meaningful service
and audience guidance, and no repeated feature links. The footer logo's visible
artwork aligns with its tagline.

Employee Benefits, Business and Personal place the text card 20px below the breadcrumb. Above 64rem,
the photo extends upward to the breadcrumb row, filling the empty upper strip.
Its shorter viewport-aware height keeps the support panel within the first screen
at the checked desktop heights.
At tablet widths its top aligns with the card; mobile keeps the stacked layout.
Navigation uses Manrope at 14px/650,
with a soft filled active-page state and a single keyboard focus indicator. Spaced
dropdown rows keep the active fill distinct from unselected hover text. The category
menu highlights only its own destinations; Travel has its own active state.

Local browser checks cover 14 content pages at desktop and mobile widths with no
horizontal overflow. Final targeted title checks confirm the shared weight/size on
About, Contact, Claims, Travel and Portal. The latest header correction was checked
at 1280px, 1050px and 390px; selecting Travel from the mobile menu updates its
active state. Homepage employee/HR tabs and their contextual preview links were
checked. These are focused checks, not a new audit of every existing animation.

The separate Linux B1 App Service is in Singapore (`southeastasia`), at
https://inspro-website-sg.azurewebsites.net. GitHub Actions deployment through OIDC
has passed its region, runtime health and byte-identical homepage checks. The
custom domain remains unchanged. Resource and deployment details are in
[Azure deployment](AZURE-DEPLOYMENT.md). Contact still prepares an email draft.

---

# Previous verification: Portal Preview — 11 October 2026

Current revision **20261011-portal-5** uses nine source-backed demonstrations and compact, active-only natural content heights at every width. Matching groups employer record, assigned benefit schedule and eligibility checks into one workspace; enrolment groups its graphic, selected benefits and review controls. This latest owner instruction supersedes the portal’s earlier equal-height interpretation.

Current local Chromium evidence passes **296/296 assertions**, with zero page/console/HTTP errors and **40 captures**. A real initial **295/296** failure at 320px was repaired in shipping CSS and replaced by focused current evidence; **28/28 correction checks** and prior **184/184** checks remain separate. The [fresh full finish review](../.impeccable/portal-redesign-20261011/final-review.md) returns **ship**, after independently opening all forty captures and nine owner references. Build passes **163 files, 98 syntax checks and 1,023 references**; SEO passes **14 pages**; 21st reviews **11 scoped paths** with zero findings. Public scope: **2 modified, 10 added, 151 unchanged, 0 deleted**. Generation preserves portal content/schema and shared header bindings.

[Detailed Portal verification](PORTAL-PREVIEW-VERIFICATION.md) links current evidence, the repaired failure, corrected generation probe and historical limits. Synthetic preview choices do not submit, download or connect accounts; Contact prepares an email draft only. Print/preference/no-JavaScript modes are emulated and earlier lifecycle events simulated; no physical background/BFCache, other-browser/real-device, public deployment, indexing, ranking or AI-citation result is claimed. [Local preview](http://127.0.0.1:3000/employee-benefits/portal/) returned **200** for portal-5.

---

# Previous verification: About Us cards — 11 October 2026

Current revision **`20261011-about-cards-5`** changes only the five company cards. The introduction/photo/company-facts block, header, breadcrumb, footer and existing About stylesheet remain byte-identical; original photographs and corporate wording are retained. Wider cards share a compact intrinsic frame; **64rem and below** use natural content heights and heading-row figures. TACT integrates four meaningful icons beside its native descriptions, with **ten coordinated tracks** on the **8.2-second** cycle. Reduced-motion/static/no-JavaScript and print content remain complete.

Focused v5 local Chromium evidence passes **34/34 assertions**, zero errors. Prior **138/138 v4** and **214/214 v2** records remain dated support, not aggregate totals. The initial v5 **33/34** probe used an invalid heading-gap guard; a fresh centered-row measurement replaces one assertion without a production edit. The 38-view corpus contains **five fresh v5 1,024px cards** and **33 retained v4 views**. Source review returns **SHIP for v5 source**; the [accepted bounded verdict](../.impeccable/about-cards-20261011/owner-correction/owner-verdict.md) returns **ship** for density, carried-forward TACT resolution and direct reflow regressions. It does not replace the historical full-review fix with a new whole-surface review.

Final validation/build passes **153 public files, 84 syntax checks and 1,007 local references**. The current **14-page SEO audit** passes without warnings/failures. **21/21 focused SEO/GEO/AEO checks** verify existing canonical/social metadata, linked company/AboutPage/breadcrumb schema, native factual answers and local crawl controls. [SEO evidence](../.impeccable/about-cards-20261011/seo-geo-aeo.json) and the [current site audit](seo-audit.json) record source/local HTTP verification; no new public source was needed and no live indexing, ranking, AI visibility or field Core Web Vitals result is claimed. Public scope against 150 files: **one modified, three added, 149 unchanged, zero deleted**. Private direct rendering is byte-identical and idempotent; the original full generation matches the parsed About main DOM and protected hero. [Detailed About verification](ABOUT-CARDS-VERIFICATION.md) links records, dimensions, generation and protected-source evidence.

Five matched protected upper captures are pixel-identical; at 320px only the original photograph reveal area differs because the baseline had not revealed it. Source/assets and surrounding geometry are unchanged. Print is emulated and visibility/pagehide/persisted return are simulated; no actual physical background/BFCache test, public deployment or email delivery is claimed. The inherited no-JavaScript mobile navigation overlay stays outside the protected card-only scope. Preview: **http://127.0.0.1:3000/about-us/**.

---

# Previous verification: Claims Support and navigation correction — 11 October 2026

The verified Claims revision **`20261011-claims-4`** uses four authored **7.6-second** scenes, stationary native **14.4px Manrope** captions, three shorter equal intrinsic frames, balanced unchanged hero copy and programme art above guidance at **56rem**. Both redundant card-footer notes are removed; insurer guidance, original FAQ truths, actual phone/email and qualified Support/Portal destinations remain. Shared navigation now uses title case, including **Claims Support** and **About Us**.

Dated Claims local Chromium evidence passes **273/273 assertions**: **208 main + 41 corrected rendered-content/actual-layer + 24 print** checks, with zero failures/page errors. The initial hidden-answer geometry and empty layer selector were corrected in the probes; no production workaround was needed. The prior claims-3 owner round separately records **249 checks** for unchanged fifteen-page navigation and actual support/portal clicks. Final validation/build passes **150 public files, 80 syntax checks and 1,004 local references**; SEO passes **14 content pages**. Private full regeneration reproduces current Claims; fourteen other HTML pages match the navigation-normalized baseline through semantic DOM serialization, with byte-idempotent normalization. Public scope is **19 modified, 4 added, 127 unchanged and 0 deleted** against the 146-file baseline.

The owner-triggered [full review](../.impeccable/claims-support-20261011/owner-review.md) supersedes the earlier rejected ship verdict. The [archived visual handoff](../.impeccable/claims-support-20261011/owner-correction/visual-verdict.md) resolves fixes 1–5 and footer/height steering, with no identified correction regression, after opening **20 current required captures** and four phase sheets at original detail. Source review returns **SHIP for source**. The [final bounded verdict](../.impeccable/claims-support-20261011/owner-verdict.md) records the documentation closure and final disposition. These are separate functional, source and visual scopes; the 273 assertions do not approve visual quality.

[Claims verification](CLAIMS-VERIFICATION.md) links current records, generation proof, capture integrity and historical reviews. Print is emulated; visibility/pagehide/persisted-return checks are event simulations. Complete native topic/FAQ reading remains, with the inherited no-JavaScript mobile navigation overlay. No physical background/BFCache test, new backend, claim/email delivery, public deployment or host result is claimed. Preview: **http://127.0.0.1:3000/claims-support/**.

---

# Previous verification: Travel Insurance redesign — 11 October 2026

The verified Travel revision was **`20261011-travel-1`**. A compact journey introduction leads to three equal intrinsic cards: Personal travel quotes, Before you buy and Business travel. Every insurer choice remains visible within the quote card with its original action label/referral URL. Plain arrow actions retain a **44px** minimum height; the business enquiry remains beside its desktop heading and stacks below the introduction on mobile. Four geometric scenes use **6.4-second** automatic loops with stationary labels, and retain reduced-motion/static reading without pause controls.

The final `npm.cmd run check` passes **146 public files, 74 script syntax checks and 1,000 local references**; SEO passes **14 content pages**. Final round 2 passes **226/226 browser checks**, with **zero browser errors**, at **1,440, 1,348, 1,024, 800, 390 and 320 CSS pixels**. All three cards share dimensions per width, contain their content and avoid horizontal overflow. Exact referrals, accessible active/inert inactive state, keyboard/deep-link selection, continuing motion, cancellation, print expansion/restoration and no-JavaScript reading pass. The contextual business action was actually clicked. Root opened all **20 current captures**. Source review returns **SHIP**. The fresh full five-section [Travel finish review](../.impeccable/travel-insurance-20261011/final-review.md) returns **ship**, with no material fixes, after opening all twenty current captures.

Private full regeneration from the exact pre-Travel seed reproduces the current Travel HTML byte for byte. Only Travel HTML and travel.css changed; two scoped scene/motion assets were added, with **142 other existing public files unchanged** and no deletions. Unrelated private-generated outputs were not copied to the public site. [Travel verification](TRAVEL-VERIFICATION.md) links the exact validation, browser, capture and generation records. Hidden/pagehide/persisted-return checks are event simulations; print was emulated. The no-JavaScript mobile header retains its inherited navigation overlap. No physical background-tab/BFCache, insurer purchase, email delivery, Git push, public deployment or host result is claimed.

Preview: **http://127.0.0.1:3000/service-details/personal/travel-insurance/**. Earlier dated records below retain their original counts and scope.

---
# Completed BenefitsCare refinement — 11 October 2026

The current BenefitsCare revision is **`20261011-care-7`**. Plans and quotation use a plain **Review** arrow link at the top right of their heading rows. The bottom qualifier/solid plan action row and quotation bottom link are removed. The plan link follows the selected tier after enhancement and is a generic BenefitsCare enquiry without JavaScript. Name-only tabs, one left-column/mobile-centered price, all four inclusion rows, scoped 50% secondary detail opacity with full-opacity statuses, equal frames, automatic hero/eight-scene motion and static quotation remain.

Current validation passes **144 public files, 71 script syntax checks and 996 local references**; SEO passes **14 content pages**. All **471 care-7 browser checks** pass: **449 responsive** at **1,440, 1,348, 1,024, 800, 390 and 320 CSS pixels**, plus **22 lifecycle** checks. All nine states have equal dimensions at each width, no overflow or page errors, a centered single price, correct four-row inclusions and a top-right Review target at least **44px** high without heading overlap. Checks cover selected-tier link context, keyboard/inert focus behavior, continuing loops, reduced motion, hidden/offscreen suspension, complete print/restoration and no-JavaScript reading. There are **27 current captures**. The care-7 source verdict is **SHIP**. The fresh full five-section [care-7 finish review](../.impeccable/benefitscare-refine-20261011/final-review.md) returns **ship**, with no material fixes, after opening all **35 current care and FAQ captures**.

The shared question controller passes **221 separate checks** on **four pages and 14 questions** at **1,348 and 390 CSS pixels**, with **eight captures**. Opening another question closes the previous answer in its own group. Native keyboard activation, rapid clicks, a nameless fallback, repeated print/all-answer reading and state restoration pass. No-JavaScript reading retains the original native disclosure behavior. Its separate source verdict is **SHIP**. Current private generation reproduces care-7 BenefitsCare HTML byte for byte: six existing public files changed, two assets were added and **136 existing public files remain unchanged**, with no deletions. Two unrelated private-generated pages have duplicate shared stylesheet tags and were not copied into `site/`. [BenefitsCare verification](BENEFITSCARE-VERIFICATION.md) links the exact records; earlier dated records retain their checked scope.

**Historical care-6 handoff:** validation passes **144 public files, 71 script syntax checks and 995 local references**; SEO passes **14 content pages**. All **339 browser checks** pass: **312 responsive** at **1,440, 1,348, 1,024, 800, 390 and 320 CSS pixels**, plus **27 lifecycle** checks. All nine states have equal dimensions, without overflow or browser errors. The selected price aligns within **2px** of the left desktop section's center or the whole mobile column's center. Checks cover four details per plan with original inclusion counts, separated opacity/status treatment, keyboard/inactive focus, continuing loops, synchronous hidden-state cancellation, reduced motion, complete print/restoration and no-JavaScript reading. There were **26 captures**, including the owner's 1,348px Starter view. Its source verdict is **SHIP** and its full five-section finish disposition is **ship**, with no material fixes. The current care-7 action changes supersede that finish verdict.

The normal-opacity **Not included** status measures **5.23:1** on paper in dark-mode print/no-JavaScript reading and **8.69:1** in the checked dark enhanced card. Those measurements apply to the explicit status. The owner's faded names/descriptions/icons are a scoped visual exception; no broad contrast claim is made for them. Care-6 private generation reproduces care-6 BenefitsCare HTML byte for byte. Five existing public files changed and two scoped assets were added against the 142-file baseline, with **137 existing files unchanged**. Two unrelated private-generated pages gain duplicate stylesheet tags and were not copied into `site/`; a whole-site generator match is not claimed.

The historical care-5 handoff recorded **144 files, 71 syntax checks, 995 references, 303 browser checks** (**276 responsive + 27 lifecycle**) and **25 captures**, with SEO passing **14 pages**. Its source verdict is **SHIP** and full five-section finish disposition is **ship**, with no material fixes. Its private original generator reproduced care-5 BenefitsCare HTML byte for byte. Five existing public files changed and two scoped assets were added against the 142-file baseline, with **137 existing files unchanged**. Two unrelated private-generated pages gained duplicate stylesheet tags and were not copied into `site/`.

[BenefitsCare verification](BENEFITSCARE-VERIFICATION.md) records revision-specific source, evidence and generation scope. Preview: **http://127.0.0.1:3000/employee-benefits/benefitscare/**. Contact prepares an email draft. No public deployment, host verification, Git push or actual enquiry delivery was performed. Hidden-state checks are simulated; no physical background-tab or site-wide accessibility certification is claimed.

The historical care-3 refinement recorded **144 files, 71 syntax checks, 995 references, 190 browser checks and 25 captures**, with SEO passing **14 pages**. Its captions, repeated plan headings/prices and quotation illustration are superseded. The detailed record links its archived browser and capture metadata. Earlier dated records below retain their original counts and scope.

---

# Earlier verification: BenefitsCare initial redesign — 11 October 2026

This care-1 record is historical. Its finite-motion, radial-network and local-preview guidance is superseded by the current care-5 refinement above; its counts and review outcome apply only to the original handoff.

The existing `/employee-benefits/benefitscare/` product page has been redesigned from the three supplied screenshot materials within the established burgundy, rose and Manrope system. Its five-service network reflows into connected mobile branches. Five topic frames and native plan/optional selections use equal intrinsic heights; finite connector, pulse and symbol motion leaves all labels stationary. Programme and quotation qualifications remain explicit, including indicative S$2/S$4/S$6 prices and Premier's Flex-plus-hospital cover.

Final build passes **142 public files, 69 script syntax checks and 1,000 local references**; SEO passes **14 content pages**. The final browser record passes **43 checks** at **320, 390, 768, 960 and 1,440 CSS pixels**. Evidence covers complete responsive frames, twelve stationary network labels, a **3,720ms** maximum animation end time, keyboard tabs and selected-panel focus, mobile menu/Escape, native questions, all print reading with screen-state restoration, no-JavaScript content and all three plan-specific Contact selections. No browser errors were recorded. Representative text/control contrast ranges from **6.92:1 to 11.72:1**; this is a scoped check, not a site-wide accessibility certification.

All **16 final captures** were independently reviewed. The fresh finish review returns **ship**, with complete persistence, fidelity, ceiling, material-fixes and keep sections and no material fixes. A separate fresh source review's one tabpanel-focus finding was fixed; its scoped follow-up returns **SHIP**, with no direct regression. The corrected mobile quotation capture preserves the settled rail position; no public source changed during recapture. Full original generation in private staging reproduces BenefitsCare HTML byte for byte. Against the **139-file** baseline, three existing public files changed and three scoped CSS/JS files were added, producing **142 files**; all other original public files are unchanged.

See [BenefitsCare verification](BENEFITSCARE-VERIFICATION.md) for the exact source, capture and review records. Preview: **http://127.0.0.1:3000/employee-benefits/benefitscare/**. Visibility interruption was reviewed in source; no physical background-tab test is claimed. No Git repository exists; explicit baseline hashes establish scope. No Git push, public deployment, host verification or enquiry delivery was performed. Contact prepares an email draft. Earlier dated records below retain their original counts and checked scope.

---

# Earlier verification: all three retained guides complete — 10 October 2026

The Insurance Guides directory, Insurance Review Checklist and SME Employee Insurance guide have been redesigned sequentially and documented. The latest owner instruction authorised completion of the two articles without an intermediate hold. There is no pending guide review gate. Earlier handoff counts and preservation statements below apply to their recorded stages.

| Page | Current behavior | Record and local preview |
| --- | --- | --- |
| Insurance Guides | Two editorial spreads, one reading link per retained article and one Review action; 5.2-second SVG loops. | [Directory verification](GUIDES-DIRECTORY-VERIFICATION.md) · [Preview](http://127.0.0.1:3000/guides/) |
| Insurance Review Checklist | Four open stages, twelve native labelled checks, temporary 0–12 count, one Review and one SME reading link; 5.8-second SVG loops. | [Checklist verification](RENEWAL-CHECKLIST-VERIFICATION.md) · [Preview](http://127.0.0.1:3000/guides/insurance-review-checklist/) |
| SME Employee Insurance | Four open cover explanations, five quotation-brief prompts, three native FAQs, six unique section links, one Review and one renewal reading action; 5.8-second SVG loops. | [SME verification](SME-EMPLOYEE-GUIDE-VERIFICATION.md) · [Preview](http://127.0.0.1:3000/guides/sme-employee-insurance-singapore/) |

Final build passes **139 public files, 65 script syntax checks and 994 local references**; SEO passes **14 content pages**. All guide labels stay stationary and no Replay control is present. Final SME captures at **1,440, 768, 390 and 320 CSS pixels**, plus **no-JavaScript 390**, were viewed independently by root and the fresh finish reviewer: document top, fonts, images, full content and footer are complete, with no overflow or console errors. Keyboard-operated native FAQs and all three printed answers pass, including print without JavaScript. Real desktop/mobile samples reach a second motion cycle with **0px label movement**. Reduced-motion, print and offscreen checks stop scene motion; hidden-event checks use a **simulation**, not a physical background-tab switch. The transient desktop global offscreen count belongs to an inherited header box-shadow transition; the guide scene has zero animations and the header settles to zero.

The actual full original generator in an isolated working directory, followed by SEO/design refresh, reproduces SME HTML byte for byte and preserves directory, checklist and Travel HTML. The [combined scope proof](../.impeccable/sme-guide-20261010/three-guide-scope-proof.json) compares **132 original public files** with **139 final files**: only the three guide HTML files changed, seven CSS/JS assets were added, no files were removed, and every other original file is unchanged. Ten retired detail guides, their 30 contextual redirects, the **14 content pages plus 404**, and non-travel **Review** → Contact behavior remain as recorded in the [cleanup verification](GUIDE-CLEANUP-VERIFICATION.md). Travel retains its protected hash.

The SME's fresh independent finish and source reviews both return **SHIP**, with no required fixes. Its complete five-section finish review covers persistence, fidelity, ceiling, material fixes and keep guidance; it is a scoped surface review. The unavailable native Impeccable finish-reviewer and documenter roles were substituted by a fresh `code-reviewer` and `doc-updater`; a separate TypeScript/JavaScript reviewer examined source/integration. Their exact read scope, supplied-evidence limits, the one browser fix batch, official MOM source record and private capture paths are documented in the [SME record](SME-EMPLOYEE-GUIDE-VERIFICATION.md). This is not a new site-wide certification. No Git repository exists; explicit baselines establish scope. No public deployment, host verification, Git push or enquiry delivery was performed. Contact prepares an email draft.

---

# Earlier verification: Insurance Review Checklist handoff — 10 October 2026

The article at `/guides/insurance-review-checklist/` is a continuously visible four-stage worksheet with twelve native labelled checks, a temporary 0–12 progress count, one section navigation, one **Review** link to Contact and one SME reading link. Its decorative SVG loops automatically every **5.8 seconds**, without Replay; labels remain stationary. Responsive, keyboard, reduced-motion, print and no-JavaScript checks pass. Print confirmation records **one call and zero running animations**; hidden-event interruption was simulated, with no claim of a physical background-tab test.

Build passes **138 public files, 62 syntax checks and 996 local references**; SEO passes **14 content pages**. Full isolated generation and SEO/design refresh reproduce checklist HTML byte for byte. Only its HTML and four new CSS/JS assets change the public site; directory, SME and Travel remain unchanged at this earlier handoff. Fresh independent finish and scoped source reviews return **SHIP**, no fixes; all five required captures are valid. See [checklist verification](RENEWAL-CHECKLIST-VERIFICATION.md) for evidence, hashes, capture links, detector disposition and the portable no-Git baseline scope. The subsequent SME revision and completed three-guide handoff are recorded above. No public deployment or enquiry delivery was performed; Contact prepares an email draft.

---

# Earlier verification: Insurance Guides directory — 10 October 2026

The `/guides/` directory uses two alternating editorial spreads, one reading action for each retained guide and one **Review** action to Contact. Native SVG illustrations repeat on the owner's requested **5.2-second loops**, with no Replay controls. All **19 SVG labels remain stationary**; decorative movement cancels to the final readable state offscreen, in the background, for reduced motion/print and on page exit. Both article pages and Travel Insurance were unchanged at this earlier handoff. The two article redesigns subsequently completed; their current records are linked above.

Final build validation passes **134 public files, 57 script syntax checks and 998 local references**; SEO passes **14 content pages**. Desktop/tablet/mobile checks at **1,440, 768, 390 and 320 CSS pixels** cover overflow, destination uniqueness, keyboard use, mobile navigation, repeating motion, reduced motion, print and no-JavaScript reading. Five final captures are valid. Eight samples over two motion cycles at desktop/mobile confirm **0px label movement**. The full original page generator reproduces the directory byte for byte; SEO optimisation and design refresh preserve it. Only the directory HTML and its two new assets change the public site; all **131 other original public files** remain unchanged.

Independent source review returned **SHIP**. A fresh `code-reviewer` substitute used the Impeccable finish contract because its dedicated role was unavailable. Its full review named one label-motion repair; the same reviewer's scoped verdict scored that **one fix resolved**, **SHIP**, with no observed regressions and all five captures valid. This is not a second whole-surface review. A `doc-updater` substitute used the document contract for this handoff.

See [directory verification](GUIDES-DIRECTORY-VERIFICATION.md) for sources, evidence, captures, hashes and review scope. Preview: **http://127.0.0.1:3000/guides/**. In-app preview was unavailable; no public deployment, hosting verification or enquiry delivery was performed. Contact prepares an email draft. The cleanup facts and dated records below remain valid for their stated scope.

---

# Earlier verification: guide cleanup — 10 October 2026

The latest owner instruction retains **three guide routes** (`/guides/`, `/guides/insurance-review-checklist/` and `/guides/sme-employee-insurance-singapore/`) and retires ten other detail guides. The active site now has **14 content pages plus 404**. Thirty retired URL variants use **301** redirects to Contact with the matching service/topic. Non-travel product-card actions retain **Review** and open **Contact** with the correct context and BenefitsCare plan. Travel Insurance HTML, links, labels and quotation destinations are unchanged.

The full `redesign:pages`, `optimize:seo` and `design:refresh` pipelines passed. Final build validation passed **132 public files, 54 script syntax checks and 1,002 local references**, plus redirect targets, sitemap and structured data. The SEO audit passed **14 pages with zero warnings**. Source and focused JSX review returned **SHIP** after three React hydration/context corrections. A final refresh is byte-stable across all 132 public files; Travel Insurance matches its protected baseline.

The [final browser record](../.impeccable/guide-removal-20261010/browser-round-2.json) passes **1,219 assertions**, with **zero remaining failures or browser/console errors**, **98 actual product-to-Contact click-throughs** and **35 saved captures**. All 14 routes were checked at 1,440, 768 and 390 CSS pixels with reduced motion; all 14 were also checked with JavaScript disabled for headings, loaded images and overflow. Desktop/mobile checks cover the Business and Personal selections, six benefits topics and role tools, all three BenefitsCare plans, the homepage service/plan/portal choices and the checklist's 12 items/print action. One mobile Lifestyle selection was checked with normal motion. All 30 retired URL aliases return their matching 301 destination; the ten followed guide routes resolve to Contact with 200. The three retained guide routes return 200, the three corporate-travel aliases are unchanged and an unknown route returns a real 404. Twelve incorrect QA expectations were corrected with scoped rechecks; the raw record and correction evidence are retained.

Root inspected all **35 final captures** with no material visual findings. The [visual record](../.impeccable/guide-removal-20261010/visual-review.json) also records a focused mobile Hospital viewport confirmation; independent follow-up approved the complete card and resolved the element-screenshot cropping artifact without an app change.

See [guide cleanup verification](GUIDE-CLEANUP-VERIFICATION.md) for the route mapping, preservation evidence and final check scope. Preview: **http://127.0.0.1:3000/**. No public deployment, Git push or enquiry delivery was performed. The [Public Liability guide record](PUBLIC-LIABILITY-GUIDE-VERIFICATION.md) and dated records below are historical; the earlier one-guide approval gate is superseded by removal.

---

# Earlier verification: Business Insurance sequential card repair — 10 October 2026

The owner's latest feedback rejected duplicated package contents and unrelated motion, and requested reviewing one card at a time. All six cards on **/service-details/commercial/commercialoffice-package/** were revised and checked sequentially. All **19 commercial product groups** and **22 specialist explanations** remain.

The package explains its **seven sections once**, in three groups: assets and continuity, cash and trust, and people and responsibilities. Six business contexts appear once; redundant industry selectors are removed. Each specialist view has a corresponding scene, scope and action. Cash reaches the transit bag, a crane lowers its component, one artwork enters its crate, and aircraft/cargo follow their declared SVG routes. Four marine operating-role scenes contain eight named covers once. Medical cover and security bonds retain distinct guides.

| Area | Current result |
| --- | --- |
| Build | **142 public files, 51 script syntax checks and 1,578 references** pass the supplied validator. |
| SEO | **24 content pages** pass the audit. Existing About/Guides four-click reachability advisories remain. |
| Final browser regression | **308 assertions pass**; zero remaining failures or script/network errors. All 22 views and six topics checked at 1,440, 390, 1,753, 1,280, 958 and 320 CSS pixels. |
| Sequential review | Each card's desktop/mobile views were opened before advancing. All **46 stage captures** and **12 final overview captures** inspected. Cargo paint bounds confirmed with a scoped recapture. |
| Frames | Equal width/height within each viewport: **480px** at 1,440/1,753; **504.23px** at 1,280; **615.70px** at 958; **787.86px** at 390; **865.47px** at 320. Aligned introductions, no overflow or clipped actions. |
| Motion and reading | Subject movement, curved-path travel, finite settling, rapid changes, live reduced-motion cancellation, keyboard selection, deep links, complete print and no-JavaScript content pass. |
| Preservation | **108 source checks** pass, including all 24 protected non-Business main bodies, unchanged tokens, scope descriptions and specialist destinations. Regeneration matches all **142 public files byte for byte**. |
| Routes | Business, Personal and Employee Benefits return **200**. The retired commercial directory and /services/ return **404 without a redirect**. |

Evidence: [individual card review](../outputs/business-card-repair-20261010/card-reviews.md), [finish review](../outputs/business-card-repair-20261010/finish-review.md), [final browser record](../outputs/business-card-repair-20261010/final-regression.json), [source checks](../outputs/business-card-repair-20261010/source-final.json), [build](../outputs/business-card-repair-20261010/build-final.log), [verification record](../outputs/business-card-repair-20261010/verification.json), [desktop package](../outputs/business-card-repair-20261010/final-packages-1440.png), [mobile package](../outputs/business-card-repair-20261010/final-packages-390.png) and [marine roles](../outputs/business-card-repair-20261010/marine-liabilities-390.png).

Stage captures show sequential implementations; some precede the final common-frame reduction. The final twelve overview captures establish current geometry. Two initial topic keyboard assertions read aria-pressed instead of the tabs' existing aria-selected. Source/browser diagnosis and scoped confirmation corrected the evidence without a UI change; both records remain. This revision received root review one card at a time. Earlier independent-review verdicts below apply to their stated revisions.

The [same-day source record](../outputs/business-reassessment-20261010/source.md) distinguishes old Inspro inventory from primary references. No new numerical promises or universal inclusions. Existing Manrope, burgundy and rose design retained. No dependencies or public deployment. Contact prepares an email draft. Preview remains running at **http://127.0.0.1:3000**.

---

# Earlier verification: Business Insurance card reassessment — 10 October 2026

The primary page at **/service-details/commercial/commercialoffice-package/** retains all **19 commercial product groups**, organised into six topics and **22 selectable specialist explanations**. The old site supplies factual inventory, rather than dictating the presentation. A compact full-width introduction replaces the empty left content column; industry and product controls lead to corresponding graphics, explanations and actions.

The six business contexts lead to the **seven actual package sections**, explained in place. Repeated plan labels, redundant note boxes and cross-topic package jump links are removed. Each specialist view has one relevant guide or enquiry action; the foreign-worker view retains its two distinct medical-insurance and security-bond guides. The graphs illustrate premises and trading interruption, cash handling, employee dishonesty, service claims, worker protection, shipment routes, vessel roles and customer receivables. Finite connector traces, component movement and cash/cargo/plane transfers animate the subject itself.

| Area | Verified result |
| --- | --- |
| Build | **142 public files, 51 script syntax checks and 1,578 local references** pass the supplied build validator. |
| SEO | **24 content pages** pass canonical, metadata, entity, breadcrumb, image, sitemap and content-link checks. Existing About/Guides four-click reachability advisories remain. |
| Browser | **402 assertions pass; zero failures or script/network errors.** All six contexts and 22 products checked at 1,440 and 390 CSS pixels; all product views also checked at 1,753, 1,280, 958 and 320 pixels. |
| Frames | All six frames remain **480px** at 1,280/1,440/1,753 pixels. At 390 they share **824.77px**, reduced from the reviewed 934.39px and incumbent 864.84px. At 958 and 320 they share intrinsic frames of **615.70px** and **906.58px**, respectively, with complete content and no overflow. |
| Interaction and motion | Product/action correspondence, unique visible destinations, keyboard arrows/Home/End, deep links, rapid changes, finite motion in all 28 contexts/selections, live reduced-motion cancellation, complete print and no-JavaScript reading pass. |
| Preservation | **105 source checks** pass, including all 24 protected non-Business main bodies and the unchanged token/generator sources. A private full design refresh matches all **142 public files byte for byte**. |
| Review | The fresh full review confirmed product content/actions, inventory, graphic purpose and desktop layout. It named one mobile compactness repair; the same reviewer scored that finding **resolved**, disposition **ship**, at the one-fix verdict scope. |
| Evidence | Root and reviewer individually opened all **60 final captures**. The 25 corrected mobile/tablet screenshots preserve the live navigation position; the camera correction changes no public source or visual styling. |
| Routes | The primary Business, Personal and Employee Benefits pages respond **200**. The retired commercial directory and `/services/` respond **404 without a redirect**. |

Evidence: [browser checks](../outputs/business-reassessment-20261010/browser-qa.json), [source checks](../outputs/business-reassessment-20261010/source-checks.json), [regeneration](../outputs/business-reassessment-20261010/regeneration-checks.json), [full review](../outputs/business-reassessment-20261010/finish-review.md), [one-fix verdict](../outputs/business-reassessment-20261010/fix-verdict.md), [capture validation](../outputs/business-reassessment-20261010/capture-validation.md), [verification record](../outputs/business-reassessment-20261010/verification.json), [desktop package](../outputs/business-reassessment-20261010/industry-office-1440.png), [mobile package](../outputs/business-reassessment-20261010/industry-office-390.png), [property presentation](../outputs/business-reassessment-20261010/product-property-premises-1440.png) and [marine roles](../outputs/business-reassessment-20261010/product-marine-liabilities-390.png).

The [source record](../outputs/business-reassessment-20261010/source.md) distinguishes old Inspro inventory from current primary references. No new numerical cover promises or universal inclusions were added. Original SVG scenes extend the established Manrope, burgundy and rose system; existing photographic assets remain. Review and documentation use fresh delegated agents with the Impeccable role contracts because native role selection is unavailable. There are no new dependencies, public deployment or insurer transactions. Contact prepares an email draft. The local preview remains running at **http://127.0.0.1:3000**.

---

# Earlier verification: Personal Insurance redesign — 10 October 2026

The primary Personal Insurance page at **/service-details/personal/view-personal-insurance-products/** now follows the approved Employee Benefits presentation. Six topics cover all **eight existing product families**: Travel, Motor, Home, Personal accident, Domestic helper, Golfer’s insurance, Fine art insurance and Pleasure craft insurance. **Eleven selectable views** disclose corresponding content; the five existing detailed guides and insurer quotation routes are preserved. The site remains **24 content pages plus 404**, with four direct Insurance solutions destinations.

Each product has its own explanatory graphic: a travel window, progressive motor risks, a home cutaway, accident outcomes, distinct helper insurance and security-bond components, and golf, artwork or vessel review. All six desktop cards share the **480px** frame and **28px** introduction insets at 1,440, 1,773 and 1,840 CSS pixels. At 958, 390 and 320 CSS pixels, equal intrinsic frames accommodate content without clipping. Selection is quiet burgundy; keyboard focus remains visibly inset.

| Area | Result |
| --- | --- |
| Build | `npm.cmd run build`: **141 public files, 49 script syntax checks and 1,591 references** pass. |
| SEO | **24 content pages** pass metadata, canonical, entity, breadcrumb, image, sitemap and content-link checks. Personal structured data lists exactly the eight products. Existing About/Guides reachability advisories remain. |
| Browser | **262 checks pass; zero failures or browser errors.** All six topics and 11 selections checked at 1,440, 390, 1,840, 1,773, 958 and 320 CSS pixels. All 35 final captures were opened and validated. |
| Interactions | Corresponding guide/enquiry links, contextual specialist topics, keyboard arrows/Home/End, deep links, equal dimensions, aligned headings and contained mobile controls pass. |
| Motion/fallback | Finite scene/selection movement, rapid changes, live reduced-motion cancellation, all-source print visibility and complete no-JavaScript reading pass. |
| Preservation | **142 source checks pass**, including protected Business/Benefits content and motion, homepage cinematic/product rail, existing personal guide facts and quote links, source-backed distinctions and 28 public files stable through two private full regeneration passes. |
| Review | Full independent review named one Lifestyle fallback-action correction. The same reviewer scored that fix **resolved**, disposition **ship**, at the one-fix verdict scope. |

Evidence: [browser checks](../outputs/personal-insurance-20261010/browser-qa.json), [source checks](../outputs/personal-insurance-20261010/source-checks.json), [full review](../outputs/personal-insurance-20261010/finish-review.md), [one-fix verdict](../outputs/personal-insurance-20261010/fix-verdict.md), [verification record](../outputs/personal-insurance-20261010/verification.json), [desktop travel](../outputs/personal-insurance-20261010/travel-1440.png), [mobile motor comparison](../outputs/personal-insurance-20261010/selection-motor-comprehensive-390.png), [home contents](../outputs/personal-insurance-20261010/selection-home-contents-1440.png) and [helper insurance and bond](../outputs/personal-insurance-20261010/helper-1440.png).

The [source record](../outputs/personal-insurance-20261010/source.md) separates original Inspro product names from current insurer/MOM references. No numerical cover promises, premiums or universal inclusions were added. Specialist views give review prompts and corresponding enquiries. No new raster assets, dependencies, public deployment or insurer transaction. Contact continues to prepare an email draft. The local site remains running at **http://127.0.0.1:3000**.

---

# Earlier verification: Business Insurance consolidation — 10 October 2026

The separate commercial product directory is removed. All **19 former product groups** are integrated into **/service-details/commercial/commercialoffice-package/** across six topics and **22 detailed selectable views**. Industry choices disclose the seven actual package coverage sections and update corresponding review/enquiry context. Product-specific guide links and specialist enquiries match their displayed content. The site has **24 content pages plus 404**; the four direct Insurance solutions destinations remain.

All six Business frames stay **480px high** at 1,440, 1,773 and 1,840 CSS pixels, with matching **28px** introductory heading insets. At 958, 390 and 320 CSS pixels, overlaid intrinsic sizing keeps every topic and selection at the same responsive dimensions without clipping. Foreign-worker medical-insurance and security-bond descriptions have separate, contained action rows on mobile. Selection uses quiet burgundy with inset keyboard focus.

| Area | Result |
| --- | --- |
| Build | `npm.cmd run build`: **138 public files, 45 script syntax checks, 1,584 local references** pass. |
| SEO | `npm.cmd run audit:seo`: **24 content pages** pass metadata, canonical, entity, breadcrumb, image, sitemap and content-link checks. Existing About/Guides reachability advisories remain. |
| Browser | **286 checks pass; zero script/resource errors.** All six topics and all 22 product views checked at 1,440, 390, 1,840, 1,773, 958 and 320 CSS pixels. Forty final captures were opened and validated. |
| Interactions | All six industry choices, corresponding package links, product disclosures, guide/enquiry context, keyboard controls, focus, equal frames and aligned introductions pass. |
| Motion/fallback | Finite scene/product motion, rapid selection, live reduced-motion cancellation, all-source print visibility and complete no-JavaScript reading pass. |
| Source preservation | **135 checks pass**, including all 19 mapped groups, truthful policy distinctions, no retired targets, protected homepage/benefits sources and repeated private full regeneration matching 28 shipped files. |
| Review | Full independent review requested two geometry corrections. After one scoped batch and recapture, the same reviewer scored **both fixes resolved**, disposition **ship**, at that two-fix verdict scope. |
| Removed routes | The former commercial directory, tested variants and /services/ return **HTTP 404 without a Location header**. No directory redirect remains. |

Evidence: [browser checks](../outputs/business-integration-20261010/browser-qa.json), [source checks](../outputs/business-integration-20261010/source-checks.json), [full review](../outputs/business-integration-20261010/finish-review.md), [two-fix verdict](../outputs/business-integration-20261010/fix-verdict.md), [verification record](../outputs/business-integration-20261010/verification.json), [package sections](../outputs/business-integration-20261010/industries-1440.png), [technology cover](../outputs/business-integration-20261010/product-liability-technology-1440.png), and [mobile foreign-worker actions](../outputs/business-integration-20261010/product-people-foreign-390.png).

Content is grounded in the old Inspro package and commercial product catalogue, with current MOM sources for work injury, foreign-worker medical insurance and security-bond distinctions. No old example limits are represented as universal current benefits. Sources are recorded in [source record](../outputs/business-integration-20261010/source.md). No new raster assets or dependencies were introduced. The local site remains running at **http://127.0.0.1:3000**; no public deployment or insurer transaction was performed.

---

# Earlier verification: Employee Benefits and direct insurance pages — 10 October 2026

The `/services/` overview is removed, together with incoming links, redirects leading to it, breadcrumbs, structured-data references, sitemap entry and generators that could recreate it. **Insurance solutions** contains exactly four direct destinations: Employee Benefits (Life & Medical), Business Insurance, Personal Insurance and BenefitsCare for SME. The site now has **25 content pages plus 404**, with **22 topic explorers**.

Employee Benefits follows the supplied Benefits Care brochure for its eight life and medical benefits. Flexible benefits and wellness retain their distinct presentation; **Dependent coverage** is the owner's subsequent requested third branch, with no invented benefit amounts or automatic entitlement. WIC stays under Business Insurance in the approved site architecture; public liability and professional indemnity are outside this benefits page.

All six benefits topics use one responsive frame with identical dimensions and heading insets. Desktop frames are **480px high** at 1,728, 1,440 and 1,375 CSS pixels. At 958, 390 and 320 CSS pixels, the frame uses the largest topic's intrinsic size so topic, role and policy-year changes preserve the frame without clipping the content. The Inspro support paragraph sits beneath the tools introduction on the left. The policy-year presentation uses four connected selectable milestones, concise details and one enquiry action; the repeated brief, quotation note and comparison footer are removed.

Homepage panels retain equal 480px desktop sizing and top-aligned headings. The portal teaser omits sample balances and repeated support/programme notes. The full portal preview retains its legitimate synthetic-data and permission explanations. Shared topic controls use quiet burgundy selection and inset keyboard focus; the content container has no enclosing selection outline.

## Checked locally

| Area | Result |
| --- | --- |
| Build | `npm.cmd run build`: **136 public files, 41 script syntax checks, 1,644 local references**; redirect targets, sitemap and JSON-LD pass. |
| SEO | `npm.cmd run audit:seo`: **25 content pages** pass metadata, canonical, entity, breadcrumb, image and content-link checks. |
| Browser | **169 checks pass; zero script errors.** All 26 HTML resources checked at desktop/mobile widths; all six benefits topics checked at 1,728, 1,440, 1,375, 958, 390 and 320 CSS pixels. |
| Interactions | Four direct menu destinations, real employee/HR portal role links, both role views, all four policy-year stages, enquiry context, stable dimensions, keyboard arrows/Home/End and quiet focus pass. |
| Motion and fallback | Finite diagram/milestone reveals, animated connector, rapid selection, live reduced-motion cancellation, complete no-JavaScript reading, print expansion and screen-state restoration pass. Print includes all six topics, both roles and all four year stages, with effects finished. |
| Source preservation | **61 checks pass**: four menu destinations on every page, no retired overview targets, exact supplied PDF hash, protected homepage cinematic/product-rail markup and source hashes, and stable repeated private full regeneration. |
| Finish review | Fresh full independent review returns **ship** for the revised benefits cards and direct navigation, with no material UI findings. Valid desktop/mobile captures, accessible motion/print behavior and final regeneration alignment were reviewed. |
| Removed URLs | The overview and tested retired URL variants return **HTTP 404 without a Location header**. Direct access to the real static `/404.html` resource remains HTTP 200 in this server. |

Evidence: [final browser checks](../outputs/employee-benefits-20261010/browser-checks.json), [source checks](../outputs/employee-benefits-20261010/source-checks.json), [regeneration alignment](../outputs/employee-benefits-20261010/regeneration-alignment.json), [full finish review](../outputs/employee-benefits-20261010/finish-review-final.md), [build and scope record](../outputs/employee-benefits-20261010/verification.json), [flex and dependent coverage](../outputs/employee-benefits-20261010/benefits-flex-wellness-1440.png), [tools and left support](../outputs/employee-benefits-20261010/benefits-employee-hr-tools-1440.png), [policy year](../outputs/employee-benefits-20261010/benefits-your-policy-year-1440.png), [mobile policy year](../outputs/employee-benefits-20261010/benefits-your-policy-year-390.png) and [print roles](../outputs/employee-benefits-20261010/benefits-print-tools-1440.png).

The earlier raw browser report is preserved privately: six incorrect assertions were corrected, and its genuine hidden-HR print defect was fixed and rechecked. Final captures use decoded images and full viewport menu captures. The mobile full-page image was recaptured after triggering all lazy image sources and decoding each, then restoring document top. No second detector run or new raster assets were introduced. After five stylesheet cache tags were synchronized with the generator, all 29 recorded regenerated outputs match final source bytes. Source inputs and private scratch material are outside `site/`.

Design handoff is recorded in [DESIGN.md](../DESIGN.md), the schema-v2 [.impeccable/design.json](../.impeccable/design.json) with eight component previews, and the updated homepage/benefits surface briefs.

Preview: **http://127.0.0.1:3000/service-details/commercial/employees-benefits/**. The local server is left running. No public deployment, real email delivery, Safari/Firefox or real-device test is claimed. Earlier dated records below describe their stated revisions.

---
# Earlier verification: navigator card enhancement — 9 October 2026

All 27 routes were audited. The shared system covers 23 topic explorers (76 cards), 52 link cards, 77 fallback links and 23 nested tab controls. All 63 desktop/mobile/tablet/narrow viewport checks passed, as did build, SEO, source preservation and private refresh checks. Content and destinations remain unchanged; mobile click instability caused by snapping was fixed. See [full route coverage, changed files, evidence and remaining gaps](NAVIGATOR-CARDS-VERIFICATION.md). Preview: **http://127.0.0.1:3000/about-us/#content-explorer**. No public deployment occurred. The supplied Library image remains blocked by HTTP 403; the matching live section was inspected.

---

# Historical verification: About Us refinement — 9 October 2026 (cards superseded)

The About Us page now follows the supplied introduction → Corporate Vision → Corporate Mission → Core Values (TACT) → How we help → Company verification sequence. The mission contains two statements; TACT is **Teamwork, Accountability, Customer-centricity and Trust**, with the source typo corrected. The heading is **About Inspro.** The existing illustration, compact company facts, June 2000 incorporation wording and MAS directory link remain; the duplicate oversized 2000 marker is removed.

Five ordered topics use a desktop rail and mobile chips. Vision uses a burgundy statement panel, mission an open list, and values a typographic TACT composition. `scripts/design-about.mjs` and `site/assets/css/about.css` preserve this route through the shared refresh pipeline, with five shared sizing tokens and no new raster assets or npm dependencies.

- Final `npm.cmd run build` passed **130 public files, 35 script syntax checks and 1,699 local references**, including redirects, sitemap and JSON-LD. `npm.cmd run audit:seo` passed **26 content pages**.
- Saved source checks record the section order, one instance of each new section, correct TACT labels, byte-stable repeated refresh and changes to **only `site/about-us/index.html`** among the 27 HTML files; the other 26 HTML files are unchanged.
- **15 Chrome checks** passed. All five topics selected exactly one panel at **1,440 and 390 CSS pixels**, without horizontal overflow. End, Home and ArrowRight navigation, the mobile `#core-values` deep link, loaded images and a **958 × 854** viewport passed. The recorded console has no warnings or errors.
- Independent source and visual finish review approved shipping with no material findings. Reviewed captures include desktop, mobile and the normal 958-pixel viewport; checked contrast ratios ranged from **6.92:1 to 12.47:1**. Build, SEO and browser results were supplied by the implementation agent, rather than independently rerun by the reviewer.

Evidence: [browser checks](../outputs/about-us-20261009/browser-checks.json), [source checks](../outputs/about-us-20261009/source-checks.json), [desktop introduction and vision](../outputs/about-us-20261009/desktop.jpg), [desktop mission](../outputs/about-us-20261009/mission-desktop.jpg), [desktop values](../outputs/about-us-20261009/values-desktop.jpg), [mobile mission](../outputs/about-us-20261009/mission-mobile.jpg), [mobile values](../outputs/about-us-20261009/values-mobile.jpg) and [958-pixel first viewport](../outputs/about-us-20261009/user-958-top.jpg).

Preview: **http://127.0.0.1:3000/about-us/**. No public deployment was performed. JavaScript-disabled rendering, print expansion and reduced-motion paths were reviewed in source; this revision did not perform browser JavaScript-disabled checks, open the print dialog or emulate the operating system's reduced-motion setting. Earlier dated verification below applies to its stated revisions.

---

# Earlier verification: button cleanup — 9 October 2026

All **Talk to Inspro** and **Explore this page** buttons are removed from headers and page content. The design generator no longer adds generic hero actions; empty action rows are removed and trailing hero spacing is reduced.

- Full page regeneration and the 27-page source audit found no remaining requested buttons or empty action rows.
- Build passed **129 public files, 34 script syntax checks and 1,695 local references**; SEO audit passed **26 content pages**.
- Travel Insurance and Insurance solutions were checked at **1,440 and 390 CSS pixels** with no horizontal overflow.

Evidence: [source audit](../outputs/button-cleanup-20261009/source-audit.json), [desktop travel](../outputs/button-cleanup-20261009/travel-desktop.png) and [desktop services](../outputs/button-cleanup-20261009/services-desktop.png). No public deployment was performed.

---

# Earlier verification: site-wide content cleanup — 9 October 2026

All chapter explorers now use topic navigation without explorer titles, **Read all sections**, Previous/Next controls, counters, topic numbers, hints or decorative arrows. Keyboard arrows/Home/End and horizontal mobile chips remain. Catalogue search and print retain internal content expansion. Repeated closing, next-step and action-only cards were removed; related links are inline and overlapping preparation content is consolidated.

Travel Insurance now has three topics: **Personal travel quotes**, **Before you buy** and **Business travel**. Quote options use open rows, checks are compact, and panels size to their content. The repeated hero trip brief and **Explore this page** secondary link are removed.

- Browser checks covered all **26 content pages** at **1,440 and 390 CSS pixels**: removed explorer controls were absent, no horizontal overflow was found, and last-topic selection worked.
- Repeated page regeneration preserved FAQ and related-link counts. The final build passed **129 public files, 34 script syntax checks and 1,743 local references**; the final SEO audit passed **26 content pages**.
- The standalone verifier passed **three unique insurer routes, 52 browser page checks and modular file limits**. Independent source and desktop/mobile visual review approved with no issues.

Evidence: [desktop browser checks](../outputs/content-cleanup-20261009/browser-desktop.json) and [mobile browser checks](../outputs/content-cleanup-20261009/browser-mobile.json). This pass did not open the print dialog, send an email or perform a public deployment. Earlier records below apply to their stated revisions and do not describe the current explorer controls or three-topic travel layout.

---

# Earlier verification: unified Travel Insurance page — 9 October 2026

Travel Insurance now has one content page at `/service-details/personal/travel-insurance/`, covering personal quote options, shared comparison prompts and a **Business travel** chapter. The separate corporate-travel HTML, SEO page-map entry and sitemap entry were removed; three legacy URL variants permanently redirect to the unified page's `#business-travel` section. The site now contains **27 HTML pages (26 content pages plus 404)** and **23 chapter explorers**.

Homepage and Personal Insurance features use one **Explore travel insurance** link. Business Insurance links directly to the shared page's business chapter. Personal quote URLs are unchanged, and business enquiries retain `intent=business&topic=corporateTravel`. Backend and email behavior are unchanged.

Fresh `npm run build` passed **127 public files, 31 script syntax checks and 1,814 local references**; `npm run audit:seo` passed **26 content pages**. Repeat regeneration preserved these results without duplicate pages or redirects.

- Browser checks at **1,440, 960 and 390 CSS pixels** showed no horizontal overflow. Selecting Quotes or Business travel exposed one active panel; all six topic labels aligned, and the business holiday-extension disclosure opened. The console had no warnings or errors.
- The business enquiry action preselected `intent=business&topic=corporateTravel`. The homepage travel panel had exactly one link, **Explore travel insurance**, which opened the canonical page; the secondary **Travelling for work** link was absent.
- All three legacy URL variants returned **HTTP 301** and preserved `?from=legacy`. The trailing-slash route also opened the unified `#business-travel` chapter in the browser. All three insurer quote URLs were unchanged; the protected homepage `.story` and `.product-story` markup matched the backup exactly.
- Independent source and visual review approved the changes for shipping, with no material defects in the reviewed source and five supplied desktop/mobile captures. The browser and HTTP checks above were performed separately by the implementation agent.

Evidence: [browser checks](../outputs/travel-consolidated-20261009/browser-checks.json), [source and HTTP checks](../outputs/travel-consolidated-20261009/source-http-checks.json), [desktop quotes](../outputs/travel-consolidated-20261009/travel-quotes-desktop.png), [desktop business travel](../outputs/travel-consolidated-20261009/travel-business-desktop.png) and [mobile business travel](../outputs/travel-consolidated-20261009/travel-business-mobile.png). Native email handling was unchanged and not retested in this pass; no email was sent and no public deployment was performed. Earlier records below apply to their stated revisions.

---

# Earlier verification: consolidated contact details — 9 October 2026

The top contact area now places **38 Jalan Pemimpin, M38 #02-08, Singapore 577178**, **Get directions** and a short call/email-to-arrange-a-visit note after the phone and email links. The duplicate **Find us in Singapore** section and burgundy address card are removed. The heading, form and direct-email behavior remain unchanged. The generator preserves the layout and loads `contact.css?v=20261009-contact-2`.

Fresh `npm run build` passed **128 public files, 31 script syntax checks and 1,880 local references**; `npm run audit:seo` passed **27 content pages**.

- Browser checks at **1,440, 390 and 321 CSS pixels** showed no horizontal overflow, one main section, no old office block, a single-line heading and one submit action. The inline address displays as a block, and **Get directions** points to the correct Google Maps destination. The console had no warnings or errors.
- Independent source and final visual review approved the change with no material findings. The final build after the CSS token correction also passed the counts above.

Evidence: [browser checks](../outputs/contact-consolidated-20261009/browser-checks.json), [desktop preview](../outputs/contact-consolidated-20261009/desktop-preview.png) and [mobile preview](../outputs/contact-consolidated-20261009/mobile-preview.png). The prior email-handoff checks below still apply to unchanged `contact.js`; this layout pass did not inspect a native email composer or send an email. No public deployment was performed.

---

# Earlier verification: contact page and single enquiry action — 9 October 2026

The contact page opens with **Contact Inspro.** and **Tell us what you need. We’ll help you take the next step.** The cropped photo, left-side instructions/address and visible **Start your enquiry.** heading with its explanatory copy have been removed; the form retains its accessible label. The office section now pairs a concise visit introduction with a burgundy address-and-directions block. Contact styling is isolated in `site/assets/css/contact.css`, with generator and SEO metadata updates preserved through regeneration.

The contact form now uses a single **Send enquiry** button. After validating the fields, it opens the configured email handler with an encoded `mailto:` message to **helpdesk@inspro.com.sg**, including the subject, service, selected plan/topic and entered details. The on-page draft preview and its Copy/Open controls have been removed. The visitor reviews and sends the message in their email app; the website does not submit or store the enquiry.

The source, privacy and homepage supporting copy were updated, unused preview styles removed, and the site regenerated. The footer's white logo backing was removed and the shared stylesheet version updated across all pages. The supplied PNG is SHA-256-identical to its source, with transparent corner pixels preserved.

- Fresh `npm run build` passed **128 public files, 31 script syntax checks and 1,880 local references**. `npm run audit:seo` passed **27 content pages** with no snippet warnings.
- Chrome captures at **1,440 and 390 CSS pixels** showed no horizontal overflow. The contact main content has no photos, draft-preview controls or visible form heading; **Send enquiry** is the single submit action. **Contact Inspro.** remains one line at **320 CSS pixels**, with its measured height matching its line height.
- Clicking **Send enquiry** with a valid name and email showed the opening-email-app status. Empty name/email fields blocked the action. Five email-payload contexts passed recipient, Unicode encoding, selected plan/topic, subject sanitization and whitespace-only-name checks.
- Independent review of four final captures and the current CSS approved the contact layout, labels and footer with no material findings.

Evidence: [browser checks](../outputs/direct-email-20261009/browser-checks.json), [payload checks](../outputs/direct-email-20261009/payload-checks.json) and [final captures](../outputs/direct-email-20261009/final-captures.json). The native email composer was not inspected, no email was sent and no public deployment was performed. Earlier draft-preview evidence below applies only to its stated revision.

---

# Earlier verification: site-wide terminology — 9 October 2026

The approved labels are now applied across all 28 HTML pages, page generators, React component sources and public runtime labels: **Employee Benefits (Life & Medical)**, **Business Insurance**, **Personal Insurance** and **BenefitsCare for SME**. The canonical naming reference is the [product glossary](../PRODUCT.md#service-name-glossary).

The UI assets were rebuilt, then the site regenerated with `npm run redesign:pages`. On Windows, the UI build required an explicit `ESBUILD_BINARY_PATH` to avoid `spawn EPERM`. Fresh `npm run build` passed **127 public files, 31 script syntax checks and 1,880 local references**; `npm run audit:seo` passed **27 content pages**.

The homepage cinematic and product rail retain their layout and motion; relevant service-name text now differs from the earlier snapshots. Byte-identical preservation and homepage-only HTML changes reported below apply to the original panel-redesign stage. No public deployment was performed.

- Chrome checks at **1,440 and 390 CSS pixels** confirmed all four exact labels in the homepage enquiry choices without overflow. Full names fit the mobile navigation; long category labels wrap readably on the services page without document overflow.
- The homepage Employee Benefits (Life & Medical) choice opened the enquiry with `intent=benefits`. Contact quick choices, service selection, draft service and draft subject matched all four approved labels. The email draft was not sent.
- The fresh console check returned no warnings or errors. Independent review approved the changes after two remaining legacy link labels were corrected.

Evidence: [terminology checks](../outputs/service-terms-20261009/checks.json) and [browser captures](../outputs/service-terms-20261009/captures.json).

---

# Earlier verification: homepage topic panels — 9 October 2026

The homepage now uses five compact panels with burgundy topic selection: a split broker introduction and incorporation/MAS strip, BenefitsCare comparison with photography below its copy, a portal capability visual, split travel photography, and an enquiry chooser with direct contact details. Navigation is topic-only on the homepage; other chapter explorers retain **Read all sections**, Previous and Next.

- Fresh `npm run build`: **127 public files, 31 script syntax checks and 1,880 local references** passed. `npm run audit:seo`: **27 content pages** passed.
- Browser checks covered all five panels at **1,600 and 390 CSS pixels**, with no horizontal overflow or extra homepage navigation controls. All three plans, four enquiry choices, keyboard navigation, rapid topic switching and the `#travel` deep link were checked. The BenefitsCare page's Next control remained available; the fresh console check returned no warnings or errors.
- At the original panel-redesign stage, source comparison showed only `site/index.html` changed among the 28 HTML files. The protected homepage cinematic and product rail were byte-identical; existing React islands remained. Regeneration produced no HTML drift. The later site-wide terminology revision updates text across those pages.
- Reduced-motion handling was reviewed in code only; OS-preference emulation and public deployment were not performed.

Evidence: [panel captures and measurements](../outputs/home-panels-20261009/final-captures.json), [interaction checks](../outputs/home-panels-20261009/interactions.json) and [source integrity](../outputs/home-panels-20261009/source-integrity.json). Preview: **http://127.0.0.1:3000/#content-explorer**. Earlier records below apply to their stated revisions; host and launch checks remain outstanding.

---

# Earlier verification: interactive content flow — 9 October 2026

**Owner-requested homepage/footer revision:** the three homepage category cards and visible explorer heading were removed; all five explorer chapters are retained. The footer imagery/policy sentence was removed on all 28 pages. Fresh build: 126 files, 30 syntax checks, 1,877 references; SEO audit: 27 content pages passed. Regeneration left all 28 HTML files unchanged. Earlier counts and full-content preservation results below precede these requested removals.

The [interactive redesign record](INTERACTIVE-REDESIGN.md) and [page-by-page ledger](PAGE-DESIGN-REVIEW.md) supersede earlier visual reviews below. Local preview: **http://127.0.0.1:3000/employee-benefits/benefitscare/#plans**.

- Final `npm run build`: **126 public files, 30 script syntax checks, 1,883 local references**, redirects, sitemap and structured data passed.
- Final `npm run audit:seo`: **27 content pages** passed metadata, canonical, entity, breadcrumb, service/article schema, image and content-link checks.
- Browser evidence: **28 desktop and 28 mobile page checks**, one H1 and no page overflow. Every chapter in all 24 explorers was selected in both viewport sizes. Nested plan, policy-year, business-risk and portal controls, catalogue search, keyboard navigation, deep links, FAQ and checklist state were checked. Contact validation and Premier prefill produced an explicitly unsent email draft.
- Animation review corrected rapid-transition cleanup, empty GSAP targets, changed reduced-motion preferences, print-view restoration and selected mobile-chip visibility. A fresh timestamp-filtered console check after the fixes returned no warnings or errors across the four corporate-travel chapters. Earlier cumulative warnings remain in the saved evidence.
- Source comparison retained **988/988 substantive text units**, all original main-content links, titles, metadata and canonical URLs. Schema facts are equivalent; three ItemLists changed order with the compositions. Three generic table headers were intentionally removed when their cells became cards.
- The protected homepage story, static fallback and product rail markup are byte-identical to the pre-redesign backup. Every original public asset except the extended `tokens.css` is byte-identical. Two consecutive SEO/design regenerations left all 28 HTML files unchanged.
- New design styles contain no literal colours outside tokens and no decorative directional borders. Reduced-motion and print behavior were reviewed in code; this revision does not claim OS-preference emulation, a completed print export, a new full accessibility audit, cross-browser or real-device testing.

Evidence: [browser checks](../outputs/interactive-redesign-20261009/motion-flow/reviews.json), [interaction checks](../outputs/interactive-redesign-20261009/motion-flow/interactions.json), [content integrity](../outputs/interactive-redesign-20261009/content-integrity.json), [regeneration](../outputs/interactive-redesign-20261009/regeneration.json), [desktop preview](../outputs/interactive-redesign-20261009/motion-flow/care-desktop-final.png).

Public deployment, host routing/headers/TLS, external indexing, field performance and business approval remain separate launch work. No search-ranking or award outcome is claimed. The server must remain running for the local preview.

---

# Earlier visual update: reference burgundy palette — 9 October 2026

The owner-supplied colour reference was sampled at **#79272D** and applied through shared semantic tokens. Warm light surfaces, burgundy headings/actions and the burgundy footer replace the prior grey/charcoal palette. All **28 page footers** now use the supplied transparent Inspro PNG, with its original pixels preserved and the white filter removed. The image is lazy-loaded and presented on a light backing for legibility.

Verification: build passed **118 public files, 23 script syntax checks and 1,557 local references**. [Browser checks](../outputs/burgundy-theme-20261009/browser-checks.json) covered every page at **390 and 1,422 CSS pixels**: no horizontal overflow, the correct footer colour/logo/filter and one H1 per page. [Eight palette contrast pairs](../outputs/burgundy-theme-20261009/contrast.json) range from **4.57:1 to 12.54:1**. Non-footer HTML is byte-identical to the saved pre-change copies, preserving page content, metadata and homepage motion markup. Desktop/mobile visual inspection and BenefitsCare selection were checked locally. No public deployment was performed.

[Desktop preview](../outputs/burgundy-theme-20261009/footer-desktop.png). Source backup: `.impeccable/burgundy-theme/before/`.

---

# Current sign-off status: local build verified; launch pending

The [second-pass readiness report](SEO-PRODUCTION-READINESS.md) records the all-page editorial review, flyer-backed BenefitsCare prices, final 117-file / 23-script / 1,557-reference build, 27-page SEO audit, 56 browser checks at measured 1,440/390 CSS pixels and fresh HTTP/enquiry checks. Remaining product approval, host migration, performance and operational checks are explicit. Preview: **http://127.0.0.1:3000/**.

---

# Current revision: local SEO, GEO and AEO

See [SEO-GEO-AEO-IMPLEMENTATION.md](SEO-GEO-AEO-IMPLEMENTATION.md) for the 9 October 2026 local changes, 71-action workbook, all-page audit and remaining launch requirements. The current preview is **http://127.0.0.1:3000/**. The source validator passed 117 public files, 23 script syntax checks and 1,557 local references; the SEO audit passed all 27 content pages. Browser evidence covers 28 pages at desktop/mobile settings, plus targeted enquiry and disclosure checks. No public deployment, indexing, top-three ranking, full accessibility certification or field Core Web Vitals pass is claimed. Older records below apply to their stated revisions.

---

# Previous revision: product catalogue restored

The [catalogue restoration report](CATALOGUE-RESTORATION-VERIFICATION.md) records the implemented product journeys and current checks: 69 responsive page checks, 61 interaction checks, 23 automated accessibility scans, 22 normal-motion pages, 65 internal URL checks and independent finish review. This addresses the essential gaps in the [public-site comparison](PUBLIC-SITE-CONTENT-GAP-AUDIT.md). Preview: http://127.0.0.1:3002/. No public deployment, completed insurer purchase or email delivery was tested.

---

# Current homepage wording revision

See [HOME-STORY-COPY.md](HOME-STORY-COPY.md) for the owner-requested employer/HR story and targeted browser checks. Homepage wording and the final enquiry link changed; video, timing and motion code remain unchanged. Preview: http://127.0.0.1:3002/.

---

# Previous revision: content and enquiry flow

See [LEAD-FLOW-VERIFICATION.md](LEAD-FLOW-VERIFICATION.md) for the final 14-page review, scoped 100-point scores, 42 viewport checks, 82 interaction checks, animation-preservation evidence and print verification. Current preview: http://127.0.0.1:3000. No deployment or actual lead delivery was performed. This supersedes the earlier content/navigation scores below.

---

# Earlier addition: portal feature showcase

See [PORTAL-SHOWCASE-VERIFICATION.md](PORTAL-SHOWCASE-VERIFICATION.md) for the source-backed portal showcase, current browser evidence and its limits. The brand and rail corrections below remain in place.

---

# Current correction: brand, content and rail spacing

See [BRAND-CONTENT-REVIEW.md](BRAND-CONTENT-REVIEW.md) for the latest changes and browser evidence. The historical score-based records below were superseded by the owner's later screenshots.

---

# Page-by-page review loop - 3 October 2026

Current preview: http://127.0.0.1:3002. This review supersedes the earlier visual sign-offs below, which missed defects shown in the owner's screenshots. No public deployment has been performed.

The user explicitly requested repeated page reviews until every page reached 100/110. Two review rounds were completed for this revision. Scores are internal, subjective assessments, not external certification or owner acceptance. The rubric assigns composition/hierarchy 25, typography 20, content/flow 20, interaction 15, responsiveness 15, accessibility 10 and finishing 5. Any material defect caps the score at 99. The page scores and deductions are recorded in DESIGN-REVIEW.md and design-review-scorecard.json.

Changes checked in this revision:

- Rebuilt the home BenefitsCare section as a landscape image, concise introduction and interactive plan comparison. Each selection shows its actual benefits, indicative starting price and plan-specific quotation link.
- Replaced the oversized scrolling stage counter with four service tabs. The selected label and its description/deliverables share one state. Fixed the CSS specificity bug that hid the active underline.
- Removed an unstyled legacy proof strip and wrapper from the home page. Reduced excessive heading size/tracking, tightened copy and corrected the corporate headline wrap.
- Corrected Personal/About image crops, moved the mobile About date below the photo, moved the guide action before its mobile illustration, centred the privacy reading column and enlarged contact/footer disclosures.
- Corrected the original product-rail instruction's text contrast through an override; its animation source is unchanged.

Current evidence:

- All 13 pages captured at 1440, 1065 and 390 CSS pixels. The 1065 capture uses 0.9 DPR to reproduce the owner's 959-pixel screenshots. 39 page/viewport checks: one H1 each, no horizontal overflow, no missing images after decoding and no JavaScript page errors. Home lazy images were explicitly decoded for complete full-page screenshots.
- Normal-motion captures additionally cover the Premier comparison and Review/Implement service states at 1065 and 390. All three plan selections, all four service stages, keyboard navigation and state persistence after scrolling passed. The active stage underline is visible and measurable in every state.
- JavaScript-disabled home renders all three plans and four service stages. Reduced-motion service panels have no transform. Additional 768/958 checks of home, BenefitsCare, corporate and contact found no horizontal overflow.
- Mobile navigation opens/closes with Escape. Premier intent and plan prefill are retained. Required fields block incomplete requests; completed fields prepare an email draft with truthful unsent status. No email was sent. Guide checkboxes and print action passed.
- Axe-core 4.10.3 WCAG A/AA tagged checks returned zero violations on all 13 pages at 1065 pixels with reduced motion. This is an automated scan, not a complete accessibility audit.
- The original homepage cinematic, static fallback and product-story HTML, hero.js, homepage-motion.js, homepage.css and the two original GSAP vendor files match the saved baseline byte for byte.

Final npm.cmd run build passed: 96 public site files, 14 script syntax checks and 573 local file/anchor references, plus redirect targets, sitemap and structured data.

Reports: loop-layout-report.json, loop-interaction-report.json and loop-accessibility-report.json. Screenshots and independent reviewer evidence remain private under .impeccable/loop-review/r1 and r2. No test source files were added.

Not performed: public hosting/DNS/TLS deployment, Search Console submission, field Core Web Vitals, Safari/Firefox, real-device or assistive-technology testing. These checks do not establish search ranking results. The supplied product facts, indicative-price qualifications and June 2000 incorporation date are retained.

---

## Historical verification records (superseded for visual quality)

# Motion redesign verification ? 3 October 2026

Preview: http://127.0.0.1:3002 (server must remain running). This replaces the owner-rejected serif design. No public deployment or search ranking result is claimed.

- Layout: 12 content pages plus 404 at 1440 and 390 pixels; one literal H1, no horizontal overflow, no missing images and no browser errors. BenefitsCare, corporate and contact also checked at 768 and 1024 pixels.
- Components: real adapted shadcn Tabs/Button with Radix, Lucide React and Motion. Server-rendered HTML and client hydration checked. Tab click and ArrowLeft keyboard selection passed; no React hydration errors remain.
- Product flow: Starter selection is retained in the quotation link and contact message. Required fields block incomplete input. Valid input prepares an email draft with an explicit unsent status; no message was sent.
- Motion: plan hover reached translateY(-7px); corporate timeline reached stage 03 / Support and advanced its progress; guide reading progress advanced. Mobile menu, FAQ, temporary checkboxes, business/personal tabs and personal hash links passed.
- Preservation: hero.js, homepage-motion.js, homepage.css, original vendor scripts and the protected homepage HTML match the baseline byte-for-byte. Desktop cinematic sought from 0 to 9.01 seconds of 18.04; product rail moved to slide 02 at -1065px.
- Accessibility behavior: reduced-motion hero fallback visible, reduced-motion plans had no transform. Both Employee and HR panels and navigation remained visible with JavaScript disabled. These checks are not a complete assistive-technology audit.
- Delivery: Manrope and imagery are local; UI bundle is approximately 400 KB / 129 KB gzip. No network CDN dependency. Images retain responsive WebP sources. Original library licenses and added dependency notices are included.
- Review: fresh independent screenshot review returned ship within its desktop/mobile screenshot scope, with no material findings. Motion behavior was tested by the main agent. Mobile footer text was increased to 0.8rem following an optional note.

Evidence: docs/motion-browser-report.json and docs/motion-interaction-report.json. Captures are private under .impeccable/motion-review/. No test files were added. Final npm.cmd run build passed: 96 public files, 14 script syntax checks, 566 local file/anchor references, redirect targets, sitemap and structured data.

Still unperformed: live hosting/DNS/TLS deployment, Search Console submission, field Core Web Vitals, Safari/Firefox, real-device and assistive-technology testing, actual mail delivery. Product terms and launch content remain subject to the owner?s current approved materials.

---

# Redesign verification — 3 October 2026

Local redesign preview: `http://127.0.0.1:3002`. The server must remain running while previewing. Public deployment, Search Console submission and ranking outcomes have not been performed or measured.

| Area | Current evidence |
| --- | --- |
| Build | `npm.cmd run build` passed: 63 public files, 10 script syntax checks, 590 local references, redirects, sitemap and JSON-LD. |
| Browser | Headless Chrome: 12 content pages plus the 404 page at 1440 and 390 pixels; BenefitsCare and contact also at 768 pixels. 28 viewport checks, one literal H1 each, no horizontal overflow, no missing images, no JavaScript or console errors. |
| Product flow | BenefitsCare Flex link prefills both the correct enquiry area and plan context. Required fields block an incomplete form. Valid input prepares an email draft and shows a truthful status; no enquiry was sent. |
| Interaction | Mobile menu opens and closes with Escape; desktop navigation remains visible after Escape; native FAQs open; home review selector updates preparation guidance and contact intent. |
| Progressive enhancement | BenefitsCare content and mobile navigation remain visible without JavaScript. The form depends on JavaScript; direct phone/email alternatives remain available. |
| Animation preservation | Original cinematic and product-story markup, hero.js, homepage-motion.js, homepage.css and both vendor scripts match the baseline byte-for-byte. Desktop video loaded (18.04 seconds) and sought from 0 to 9.27 seconds during scrolling. Reduced-motion fallback remained active when requested. |
| Product animation | Desktop product rail translated to the second slide on scroll; the active indicator read `02` and employee-benefits content was active. |
| Finish review | Independent design review identified one material copy issue: Premier's hospitalisation wording differed between summary and table. The wording was aligned with the supplied flyer and recaptured at 1440, 768 and 390 pixels. The reviewer scored this fix resolved, with disposition `ship` at that scope. |
| Text contrast | Semantic text pairs checked: muted text on paper 5.91:1; on tinted sections 5.41:1; brand red on white 4.92:1; footer text 9.79:1. This is not a full assistive-technology audit. |
| Assets | Service imagery now uses local responsive WebP derivatives: approximately 26–32 KB at 640 pixels, 63–75 KB at 1280 pixels, rather than approximately 700 KB source files. Existing animation assets are untouched. Newsreader font and original OFL license are local. |
| HTTP | Font and WebP returned the correct MIME types; health and sitemap returned 200; unknown path returned real 404 with the custom page. |
| SEO | Canonical URLs, visible breadcrumbs, service/organisation/article data, social metadata and expanded 12-URL sitemap checked locally. Existing service URLs retained. No fabricated ratings, reviews or exact-price offers. |

Current machine-readable evidence: `docs/redesign-browser-report.json` and `docs/redesign-interaction-report.json`. Visual captures remain outside `site/` in `.impeccable/review/`. No new test files or runtime npm dependencies were added.

User confirmed SME/employer priority, BenefitsCare indicative starting prices (S$2/S$4/S$6 per employee/month, quotation required), and June 2000 incorporation wording. The client slides and extracted working references are not public website assets.

Remaining verification: current product schedule and service terms, real hosting/DNS/TLS, Search Console indexing, field Core Web Vitals, Safari/Firefox, real-device testing and actual mail-application delivery. Browser checks do not independently certify business claims or policy wording. See `docs/SEO-CONTENT-PLAN.md` for the content and launch work.

---

# Historical handover verification — 2 October 2026

This handover is deployable as the existing static marketing website. It has no server-side enquiry delivery. A real cloud deployment and domain/TLS setup have not been performed by this packaging task.

## Checks completed

| Area | Evidence and result |
| --- | --- |
| Source validation | `npm run build` passed in a newly extracted directory: 48 site files, 10 JavaScript/module syntax checks, 277 local file/anchor references, redirect destinations, sitemap URLs and JSON-LD. |
| Windows portability | Node 22.18.0; clean ZIP extraction; `npm run dev` started on a different port without npm install, credentials or the old working directory. All eight pages and the cinematic video loaded from that server without JavaScript errors. |
| Linux container | Docker build passed with Node 24.21.0. Container ran as user `node`, with a read-only filesystem and dropped capabilities. Docker health status was `healthy`; homepage, services, health endpoint, legacy redirect and missing-page routing passed. |
| Browser pages | Headless desktop Chrome loaded all eight content pages at 1440 × 1000; one H1 per page; no horizontal overflow; eager images loaded; zero JavaScript/console errors. |
| Mobile | All eight pages checked at 390 × 844 with no horizontal overflow. Menu opening, Escape closure and static hero passed. |
| Motion | Desktop video loaded and sought as the page scrolled. Desktop reduced-motion mode used the static hero. |
| Interactions | Review selector changed guidance and form intent. Contact query-string intent, required fields and mail-draft preparation passed. No email was sent. |
| HTTP delivery | 46 publicly served files were compared byte-for-byte with disk. All 24 legacy redirects returned their configured 301 destinations. |
| HTTP behavior | 404, health, HEAD, 405 for unsupported methods, cache revalidation, valid/invalid video byte ranges, MIME types and security headers passed. |
| Public-file boundary | Dot paths, traversal attempts, malformed URLs, hidden configuration and project/server files were rejected. Only site/ is served. |
| Packaging hygiene | Browser profiles, cookies, review exports, raw production footage and temporary artifacts were excluded. A scan for common private-key/token patterns found no matches in the package. No live env file or credentials are included. |

Browser and HTTP result records are included alongside this document. Screenshots used for review remain outside the deployment archive. MANIFEST.sha256 records the packaged files; the ZIP also has a companion SHA-256 checksum.

## Fix included

The shared navigation previously allowed outside-click and Escape handlers to hide the desktop menu. It now closes the menu only in the mobile layout. The desktop and mobile behavior was verified in Chrome.

## Boundaries

- The form opens an email draft. Delivery depends on the visitor's mail application and their explicit Send action. If automatic submission is required, a backend/mail integration remains additional work.
- Real Netlify account deployment, cloud DNS, TLS, email deliverability, Safari/Firefox, real-device performance and production traffic load have not been verified.
- Canonical and sitemap URLs remain https://www.inspro.com.sg. Business claims, contact details, legal wording and asset rights are inherited; this technical verification does not independently certify them.
- The bundled animation libraries retain their original license notices. Node/container versions need normal security maintenance.
- No server process is embedded in the ZIP. In another session, start the provided command again and keep it running while viewing the local URL.
