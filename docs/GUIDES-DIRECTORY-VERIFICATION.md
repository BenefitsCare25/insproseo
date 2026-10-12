# Insurance Guides directory verification

**Last updated:** 10 October 2026. Scope: `/guides/` only.

The directory presents the two retained guides as alternating editorial spreads. **Read the checklist** opens `/guides/insurance-review-checklist/`; **Read the SME guide** opens `/guides/sme-employee-insurance-singapore/`. Each reading destination appears once in the main content. A single **Review** action opens `/contact-us/?intent=review`.

The page extends the existing Manrope, burgundy and rose system. Native SVGs depict policy documents becoming a renewal brief and four distinct employee-cover documents. No raster assets, fonts or dependencies were added or changed. The checklist and SME article pages were unchanged at this handoff; the owner's later instruction authorises proceeding with their redesigns sequentially.

## Implementation and motion

| Source | Responsibility |
| --- | --- |
| [design-guides-directory.mjs](../scripts/design-guides-directory.mjs) | Directory composition, metadata and asset inclusion |
| [design-guide-graphics.mjs](../scripts/design-guide-graphics.mjs) | Native SVG diagrams and stationary labels |
| [guides-directory.css](../site/assets/css/guides-directory.css) | Semantic-token styling, fluid type, responsive figures and static mobile navigation |
| [guides-directory.js](../site/assets/js/guides-directory.js) | Repeating SVG motion and lifecycle cancellation |

Per the owner's motion steering, both decorative scenes repeat every **5.2 seconds**, with a settled interval and no Replay control. All **19 SVG labels** sit outside animated groups. Moving papers, routes and checks remain decorative; text, final diagrams and links are present in static HTML. Motion cancels to the readable final state below **25% intersection**, while the document is hidden, for reduced motion or print, and on `pagehide`. The no-JavaScript mobile header/navigation stays in document flow.

The figures use the local `--gd-art-radius: 1.25rem` and existing semantic colors. The spreads stack below 1,000px; compact SVG coordinates are used at 600px and below. These are directory-specific decisions, not global token or layout replacements. Direction is recorded in the [surface brief](../.impeccable/surfaces/site-guides-index-html.md).

## Checked locally

| Area | Evidence and result |
| --- | --- |
| Build | Supplied validator passes **134 public files, 57 script syntax checks and 998 local references**. |
| SEO | Audit passes **14 content pages**. |
| Responsive layout | [Final QA](../.impeccable/guides-directory-20261010/qa-final.json): 1,440, 768, 390 and 320 CSS pixels; one h1, complete figures/actions and no horizontal overflow. |
| Interaction | Keyboard focus/reading-link activation and mobile menu/Escape pass. Both reading URLs and the single Review destination remain correct. |
| Motion/fallbacks | Repetition through a second cycle, offscreen cancellation, live reduced-motion cancellation/resumption, print with both diagrams and no-JavaScript reading/navigation pass. [Measurement confirmation](../.impeccable/guides-directory-20261010/qa-measurement-confirmation.json) distinguishes a still-visible figure from the explicit offscreen check. |
| Label correction | [Fix evidence](../.impeccable/guides-directory-20261010/finish-fix-evidence.json): every visible SVG label sampled at eight moments across two cycles at 1,440 and 390 pixels; maximum movement **0px**. All 19 source labels are outside animated groups. |
| Captures | Five final captures have loaded fonts, correct scroll origin/header and the supplied footer logo. [Capture validity](../.impeccable/guides-directory-20261010/capture-validity.json) and the fresh fix evidence record their checks. |
| Regeneration | [Full-generator proof](../.impeccable/guides-directory-20261010/full-generation-proof.json): original `redesign-pages.mjs` run in an isolated working directory reproduces the final directory byte for byte. `optimize:seo` and `design:refresh` preserve it. |
| Preservation | Final QA records only `site/guides/index.html` changed, two new directory assets and no removed public files. All **131 other original public files**, including both article pages and Travel Insurance, remain unchanged at this handoff. |

Directory SHA-256: `0b44279cbc093e478dc2d1d3eb5d8f2352fcf40e61c5bdd27914e1aa592d1674`.

Protected Travel Insurance SHA-256: `d5181d84b3cfed6bc367839d8417fb9eda8cd0fc369c12244492e95d71237bde`.

Screenshots: [desktop](../.impeccable/review/screenshots/guides-directory-1440.png), [tablet](../.impeccable/review/screenshots/guides-directory-768.png), [390px](../.impeccable/review/screenshots/guides-directory-390.png), [320px](../.impeccable/review/screenshots/guides-directory-320.png) and [no JavaScript at 390px](../.impeccable/review/screenshots/guides-directory-no-js-390.png).

## Independent review and limits

Independent source review returned **SHIP** after the generator-normalisation correction; the final motion-source correction also received **SHIP**. The dedicated Impeccable reviewer role was unavailable, so a fresh `code-reviewer` substitute used the finish contract. Its full review returned **FIX** for labels inside transformed groups. One correction batch moved those labels outside; the same reviewer's verdict pass scored that **one finding resolved**, **SHIP**, with no observed regressions and all five fresh captures valid. That scoped verdict is not a second whole-surface review. Documentation likewise uses a `doc-updater` substitute under the Impeccable document contract.

Local preview: **http://127.0.0.1:3000/guides/**. The server was live at this handoff; a later session may need to restart it. In-app browser preview was unavailable. No public deployment, hosting verification or enquiry delivery was performed. Contact continues to prepare an email draft for the visitor to send.

The [guide cleanup record](GUIDE-CLEANUP-VERIFICATION.md) remains authoritative for retired routes and their redirects; this directory work does not restore retired guides. The older Public Liability approval gate remains historical. The next two retained article redesigns are authorised, but their completion is not claimed here.
