# SME Employee Insurance guide verification

**Updated:** 10 October 2026. **Disposition:** SHIP — no required fixes in the independent finish or source review scope. **Local preview:** [SME Employee Insurance guide](http://127.0.0.1:3000/guides/sme-employee-insurance-singapore/).

The three retained guide pages were redesigned sequentially: [Insurance Guides directory](GUIDES-DIRECTORY-VERIFICATION.md), [Insurance Review Checklist](RENEWAL-CHECKLIST-VERIFICATION.md), then this SME article. The latest owner instruction authorised completion of both remaining articles without an intermediate review hold. Their documentation handoffs are complete; no guide remains pending. Earlier records retain their handoff-specific counts and preservation statements.

## Delivered article

The existing page now explains four cover purposes in continuously visible editorial rows: **Group medical benefits**, **Work injury compensation**, **Work-pass medical insurance** and **Security bond**. Each pairs its purpose with **Your workforce** and **Before you quote** prompts. The former sideways comparison table and duplicate guide actions are removed. A native SVG relationship diagram connects four stationary purpose labels to a stationary workforce centre; it does not imply that every employee needs every cover.

Five quotation-brief prompts remain: workforce profile; required cover and additional benefits; current policies and priorities; everyday administration; start date and communication. Three native employer questions address cost, renewal changes and the appropriate channel for staff records. The first question is open initially. They retain native keyboard behavior and print all answers, including without JavaScript, through `details::details-content` visibility styling.

One semantic navigation has six unique destinations: `group-medical`, `work-injury`, `work-pass-medical`, `security-bond`, `quotation-brief` and `employer-questions`. One **Review** action opens `/contact-us/?intent=benefits&topic=review`; one reading action opens the renewal checklist. Two inline product destinations retain BenefitsCare for SME and Employee Benefits (Life & Medical). No Replay control is present. Contact prepares an email draft in the visitor's configured email application; the website does not send or save enquiries.

The built composition extends the approved Manrope, burgundy, rose and warm-paper system. Colors, body text and controls use existing semantic variables. Cover rows and definition lists reflow for phones; the shared hero and reading grid stack at 1,000px, with single-column cover rows and two-column section navigation at 760px. The final policy note uses the small-text token and an 80ch measure. There is no new raster asset or dependency; the graphic is authored native SVG. Route-specific headings and SVG-coordinate text remain local variations, without replacing the global type ramp or normative tokens.

## Source truth

The [official source record](../.impeccable/sme-guide-20261010/sources.md) records four primary MOM pages checked on **10 October 2026**, linked beside the relevant cover explanation:

- [Work injury compensation insurance](https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/work-injury-compensation-insurance).
- [Work Permit medical insurance](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/medical-insurance).
- [S Pass medical insurance](https://www.mom.gov.sg/passes-and-permits/s-pass/medical-insurance).
- [Security bond](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/security-bond).

Guide text is paraphrased. Compulsory requirements retain their workforce/pass distinctions and direct readers to the relevant official requirements. Group benefits, the brief, employer questions and product destinations come from the retained guide and approved local product content. Optional benefits, policy terms and underwriting remain conditional. No universal benefit, premium, automatic compliance, policy acceptance or claims-outcome promise is added. No quoted paragraphs or external imagery are used.

## Final browser and motion evidence

The [final confirmation](../.impeccable/sme-guide-20261010/qa-confirmation.json) is authoritative. Root and the fresh finish reviewer independently viewed all five final captures at the document top, with loaded fonts, images, complete article and footer:

| Capture | Evidence |
| --- | --- |
| Desktop, 1,440 CSS pixels | [SME 1440 PNG](../.impeccable/review/screenshots/sme-guide-1440.png) |
| Tablet, 768 CSS pixels | [SME 768 PNG](../.impeccable/review/screenshots/sme-guide-768.png) |
| Mobile, 390 CSS pixels | [SME 390 PNG](../.impeccable/review/screenshots/sme-guide-390.png) |
| Narrow mobile, 320 CSS pixels | [SME 320 PNG](../.impeccable/review/screenshots/sme-guide-320.png) |
| No JavaScript, 390 CSS pixels | [SME no-JS 390 PNG](../.impeccable/review/screenshots/sme-guide-no-js-390.png) |

Every capture retains one H1, four covers, five brief prompts and three native FAQs, with no horizontal overflow, clipping, missing content or console errors. Native FAQ keyboard toggling, section anchors, Contact context and the single renewal reading action pass. Essential text, diagrams, navigation and questions remain usable without JavaScript; all three FAQ answers appear in print with and without JavaScript.

The [motion summary](../.impeccable/sme-guide-20261010/motion-summary.json) records real 1,440px and 390px samples reaching a second **5.8-second infinite cycle**, with **0px label movement**. Only decorative route strokes and symbol emphasis animate. Reduced-motion interruption, print and offscreen conditions stop the guide scene; preference/visibility resumption restores its decorative loop. Hidden-event interruption was tested by simulating `document.hidden` and a visibility event, **not by physically switching browser tabs**. The shared controller also handles page exit and requires at least 25% intersection before playing.

The initial desktop offscreen global sample counted one inherited header `box-shadow` transition. Focused confirmation records **`scenePlaying: false` and zero scene animations**; the header's global transition then settles to zero. This is a measurement attribution, not an unresolved guide defect.

The first browser pass found an undersized central circle/label and a closed FAQ omitted from print. One fix batch fitted the workforce circle and stationary label, exposed every printed FAQ answer and widened the policy note to its intended small-text measure. The final confirmation and five captures follow that batch. No further application edit was required by either independent review.

## Validation, regeneration and preservation

| Check | Recorded result |
| --- | --- |
| Final `npm.cmd run build` | Pass: **139 public files, 65 script syntax checks, 994 local references**. |
| Final `npm.cmd run audit:seo` | Pass: **14 content pages**. |
| Fresh source-review `npm.cmd run check` | Pass with the same 139 / 65 / 994 counts. |
| Actual full original generator | Pass in an isolated working directory: final SME HTML reproduced byte for byte. |
| SEO then design refresh | Pass in that isolated root: same SME HTML, completed directory/checklist preserved. |
| Travel through full generation and refresh | Protected live Travel HTML reproduced byte for byte. |
| Combined three-guide public scope | Only three guide HTML files changed; seven assets added; no removals; every other original public file unchanged. |

The [full-generation proof](../.impeccable/sme-guide-20261010/full-generation-proof.json) records successful actual generation and refresh, not an inferred renderer-only check. The final SME SHA-256 is `8c7f492e5b35519614a6156d5ba490e5433579f86b32db0e9aeac902942c43b3`. Directory and checklist remain byte unchanged during the SME pass.

No Git repository exists in this workspace. Explicit public-file hashes and source baseline copies establish review scope. The SME pass compares 138 pre-SME public files with the final 139: only SME HTML changed and its stylesheet was added. The [combined three-guide scope proof](../.impeccable/sme-guide-20261010/three-guide-scope-proof.json) compares the **132-file pre-redesign baseline** with the **139-file final site**. Its three changed files are the directory, checklist and SME HTML. The seven added assets are directory CSS/JS, shared article CSS/JS, checklist CSS/JS and SME CSS. No original file was removed. Travel's protected SHA-256 remains `d5181d84b3cfed6bc367839d8417fb9eda8cd0fc369c12244492e95d71237bde`.

The [earlier cleanup verification](GUIDE-CLEANUP-VERIFICATION.md) still governs the ten retired detail guides, their 30 contextual URL redirects, **14 content pages plus 404** and non-travel product-card **Review** → Contact behavior. All other original public files and protected Travel labels, links, anchors and quotation destinations remain unchanged by the three retained-guide redesigns.

## Independent review and detector disposition

The [finish packet](../.impeccable/sme-guide-20261010/finish-packet.md) supplies the final artifacts and limits. The native Impeccable finish-reviewer role was unavailable, so a **fresh independent `code-reviewer`** used the degraded Impeccable finish contract. Its [complete five-section review](../.impeccable/sme-guide-20261010/finish-review.md) returns **SHIP**, with **no material fixes**. Persistence, fidelity, ceiling, material fixes and keep guidance are all recorded. All five final captures were independently viewed, and current HTML was checked against the generation proof hash.

That finish review did **not** independently re-audit first-pass QA, baseline source copies, complete generator/SEO integrations or historical verification appendices. It used supplied generation, scope, source and motion evidence for those conclusions. This is a scoped SME surface verdict, not a new site-wide certification or deployment approval.

A separate **fresh TypeScript/JavaScript reviewer** examined the three authored content/graphic/renderer modules, the baseline diffs for design refresh and SEO employer-guide integration, and the shared wrapper/runtime/CSS as context. Its [source review](../.impeccable/sme-guide-20261010/source-review.md) returns **SHIP**, with no findings in that scope. It ran the canonical syntax/reference validator and in-memory rendering/idempotence checks, and inspected supplied browser/generation evidence. It made no edits and ran no additional browser or detector pass. There is no TypeScript/ESLint setup for this JavaScript static scope; the performed check is the project's supplied validator.

The [single detector pass and findings](../.impeccable/sme-guide-20261010/detector-findings.md) returned exit code 0. Padding advisories concern inherited navigation, full-width sections and native FAQ shells whose section gutters/summary padding provide their inset. Dark-glow advisories refer to inherited context; new SME and shared article styles introduce no shadow or glow. Type advisories concern deliberate local headings and SVG-coordinate labels. The fresh finish review independently judged these against all five captures and found no material craft-floor violation. No detector rerun or ignore-rule change was performed.

## Authored sources and documentation handoff

| Artifact | Purpose |
| --- | --- |
| [SME HTML](../site/guides/sme-employee-insurance-singapore/index.html) | Shipping article, source links and static reading content. |
| [SME CSS](../site/assets/css/sme-employee-guide.css) | Responsive cover rows, native questions and no-JS print visibility. |
| [SME renderer](../scripts/design-sme-employee-guide.mjs) | Reproducible authored body and shared-page integration. |
| [SME content](../scripts/design-sme-guide-content.mjs) | Four cover purposes, five brief prompts, three FAQs and unique section destinations. |
| [Workforce graphic](../scripts/design-sme-guide-graphic.mjs) | Accessible native SVG with stationary labels. |
| [Shared wrapper](../scripts/design-guide-page.mjs) | Shared article assets and retained guide-page shell. |
| [Shared article CSS](../site/assets/css/guide-article.css) and [runtime](../site/assets/js/guide-article.js) | Existing 5.8-second decorative loop and interruption lifecycle; unchanged by the SME pass. |
| [Direction](../.impeccable/sme-guide-20261010/direction.md) and [registered surface](../.impeccable/surfaces/guides-sme-employee-insurance-singapore-index-html.md) | Approved existing-world scope, story, form and quality bar. |
| [Product truth](../PRODUCT.md), [design system](../DESIGN.md) and [sidecar](../.impeccable/design.json) | Existing identity retained; built SME pattern merged without replacing normative primitives or earlier previews. |

The native Impeccable documenter role was unavailable; a `doc-updater` substitute applied its document contract as an authorised merge. This handoff updates this record, the current README and verification summary, and the narrow SME pattern in DESIGN.md and its sidecar. Earlier guide records, normative DESIGN frontmatter, token extensions and existing component previews are preserved. Documentation checks resolve newly added local links, parse JSON and compare those preserved design records; they do not rerun application, browser, detector or build checks.

Evidence remains private under `.impeccable/`, outside the public `site/` directory. No public deployment, host-specific verification, Git push, real enquiry sending or new test files were performed by this handoff. The site continues to prepare email drafts only.
