# Insurance Review Checklist verification

Updated 10 October 2026. Preview: [Insurance Review Checklist](http://127.0.0.1:3000/guides/insurance-review-checklist/).

The article is an open renewal worksheet: four continuously visible stages, twelve native labelled checkboxes, a temporary live count from 0 to 12, one section navigation, one **Review** link to Contact and one SME guide reading link. Checks are current-page preparation aids; they are not saved or sent. The existing shared print handler runs once.

| Check | Recorded result |
| --- | --- |
| Build and SEO | **138 public files, 62 syntax checks and 996 local references** pass; SEO passes **14 content pages**. |
| Responsive and native controls | Desktop 1,440, tablet 768, mobile 390 and narrow 320 CSS pixels pass layout, navigation, keyboard checks and complete checkbox/count updates. No-JavaScript mobile retains complete content and native checks. |
| Motion | Decorative strokes, symbols and marks repeat automatically on **5.8-second CSS loops**, without Replay. Four real-time samples at each of two widths reach the second cycle and record **0px label movement**. |
| Motion interruption and print | The shared controller requires **25% intersection** and settles for offscreen, hidden, reduced-motion, print and pagehide states. Confirmation records **one print call and zero print animations** after styles settle. The hidden-event check is simulated; physical background-tab behavior was not separately verified. |
| Generation and preservation | Full isolated page generation and SEO/design refresh reproduce checklist HTML byte for byte. Only checklist HTML and four new public CSS/JS assets change; no public files are removed. Directory, SME guide and Travel Insurance remain unchanged at this handoff. |
| Independent reviews | A fresh `code-reviewer` substitute completed Impeccable's full five-section finish review: **SHIP**, no fixes, all five captures valid and the review ceiling reached. Separate `typescript-reviewer` source review: **SHIP**, covering the new modules and narrow integrations against the portable no-Git baseline. |

The manual detector ran once. Its remaining spacing and glow advisories concern inherited styling; local editorial, sequence, SVG-coordinate and print type sizes are intentional surface values, not new global typography tokens. The [detector findings](../.impeccable/renewal-checklist-20261010/detector-findings.md) explain their disposition.

Implementation: [article wrapper](../scripts/design-guide-page.mjs), [checklist content](../scripts/design-renewal-checklist.mjs), [SVG diagram](../scripts/design-renewal-graphic.mjs), [shared article CSS](../site/assets/css/guide-article.css), [checklist CSS](../site/assets/css/renewal-checklist.css), [shared motion controller](../site/assets/js/guide-article.js) and [checklist progress](../site/assets/js/renewal-checklist.js). Existing design refresh, page generation, lead flow, SEO and content integrations retain the article.

Evidence: [direction](../.impeccable/renewal-checklist-20261010/direction.md), [browser record](../.impeccable/renewal-checklist-20261010/qa-first.json), [confirmation and measurement limits](../.impeccable/renewal-checklist-20261010/qa-confirmation.json), [generation proof](../.impeccable/renewal-checklist-20261010/full-generation-proof.json) and [portable baseline](../.impeccable/renewal-checklist-20261010/baseline-hashes.json). The confirmation supersedes the initial print instrumentation samples.

Required final captures: [1,440](../.impeccable/review/screenshots/renewal-checklist-1440.png), [768](../.impeccable/review/screenshots/renewal-checklist-768.png), [390](../.impeccable/review/screenshots/renewal-checklist-390.png), [320](../.impeccable/review/screenshots/renewal-checklist-320.png) and [no-JavaScript 390](../.impeccable/review/screenshots/renewal-checklist-no-js-390.png).

Checklist HTML SHA-256: `1fea6064fb4e12a637187db142aed5002254e23cf23f023573a6408321207b78`. Protected Travel HTML SHA-256: `d5181d84b3cfed6bc367839d8417fb9eda8cd0fc369c12244492e95d71237bde`.

[DESIGN.md](../DESIGN.md) and its [sidecar](../.impeccable/design.json) capture the shared article/checklist guidance without replacing existing primitives. No new raster assets, dependencies or fonts were added. No deployment or enquiry delivery was performed; Contact prepares an email draft. This checklist handoff is complete, and the owner has authorised continuing the SME guide automatically.
