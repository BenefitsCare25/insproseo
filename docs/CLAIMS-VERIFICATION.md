# Claims Support and navigation verification — 11 October 2026

Current source revision: **`20261011-claims-4`**, with shared motion lifecycle **`20261011-motion-2`** and navigation **`20261011-navigation-1`**. Preview: **http://127.0.0.1:3000/claims-support/**. The existing static multi-page site and email-draft Contact flow remain in use.

The owner-triggered [full review](../.impeccable/claims-support-20261011/owner-review.md) superseded the earlier ship verdict and required six repairs. The [archived visual handoff](../.impeccable/claims-support-20261011/owner-correction/visual-verdict.md) resolves visual fixes 1–5 and the later footer/height request, with no identified correction regression. It inspected all **20 current required captures** and four phase sheets at original detail. That visual-only handoff left documentation item 6 for closure; the [final bounded verdict](../.impeccable/claims-support-20261011/owner-verdict.md) records the documentation score and final disposition. This is approval of the scored corrections and supplied evidence, rather than a new full review of the entire surface. The claims-4 [source follow-up](../.impeccable/claims-support-20261011/source-review.md) returns **SHIP for source**.

The [finish packet](../.impeccable/claims-support-20261011/finish-packet.md) and [verification summary](../.impeccable/claims-support-20261011/verification-summary.json) identify the current evidence. **273 current browser assertions pass**: **208 main checks + 41 corrected rendered-content/actual-layer checks + 24 print checks**, with **zero failures and page errors**. These functional checks establish their recorded behavior; visual quality was scored separately in the owner review and bounded verdict.

## Implemented surface and retained truths

- The hero shows **Claims Support**, the unchanged introduction “Inspro helps with claim documents, insurer communication and follow-up.” and actual phone/email actions before reporting guidance. Balanced wrapping preserves the original sentence without a lonely desktop final word.
- The three original topic anchors remain: **What To Do First** (`#page-section-1`), **Benefits Programme** (`#page-section-2`) and **Common Questions** (`#page-section-3`). Enhanced topics share an intrinsic responsive frame. Hidden inactive topics contribute to sizing and remain unavailable to interaction; there is no fixed clipping height or filler.
- **Get Support** keeps `/contact-us/?intent=claims`. **Preview Portal Claims** keeps `/employee-benefits/portal/?role=employees&feature=claims#explore`. Plain arrow links have a **44px** minimum height and sit at the right of desktop heading rows; phone layouts place them beneath the heading copy.
- Reporting guidance retains insurer channels, time limits, emergency contacts, policy/incident documents and the appropriate channel before sharing sensitive records. Programme guidance uses the employer's supplied portal or confirmed claim channel; uploads, updates and replies remain programme-dependent. The feature preview is distinct from an employee's actual programme channel.
- All three original FAQ questions and answers remain exact: document uploads require the appropriate channel; the insurer assesses the claim under policy terms and evidence; a letter of guarantee follows programme/hospital/insurer procedures and requirements. The website adds no claim lodging, upload or delivery service.
- Both redundant preparation/programme footer sentences are removed, together with unused `reportingNote` data/import and `cl-note` CSS. Their useful reporting and programme qualifications remain in the body and FAQs. This owner correction supersedes the earlier literal-footer requirement in PRODUCT.md.

Contacts remain **+65 6448 7707** (`tel:+6564487707`) and **helpdesk@inspro.com.sg** (`mailto:helpdesk@inspro.com.sg`). The print-only line contains the actual linked phone and email and occupies zero screen space. Contact prepares an email draft for the visitor to review and send in their email application; no enquiry or claim was sent or stored.

## Authored scenes, type and responsive composition

Four distinct geometric SVG scenes replace the rejected badge-chain graphics:

| Scene | Authored sequence |
| --- | --- |
| Hero | Records reach a substantial broker window, insurer communication follows, and correspondence returns. |
| Preparation | Policy/detail sheets gather into a folder before a support exchange and response. |
| Programme | A central phone reveals document and message rows, then external follow-up correspondence. |
| Questions | Envelope/letter strokes introduce a question, followed by a reply. |

Every Claims scene uses coordinated **7.6-second automatic repeating tracks**, without pause or Replay controls. Packet movement, eased layer arrivals, route reveals and complete reading phases share one clock. Captions stay outside SVG geometry in native HTML, using loaded **Manrope** and the existing **.9rem / 14.4px small-text token**. Their positions and reading size remain stationary. These are illustrations of a process, with no fabricated claim status, approval, entitlement or personal data.

The programme stacks art above full-width guidance at **56rem**; hero/other card columns stack at **48rem**. All three topics have equal dimensions at each recorded width. Removing the footer sentences lowers the natural frame height. These measurements describe this capture revision and are **not sizing tokens**:

| Viewport (CSS px) | Common frame width × height (CSS px) |
| --- | --- |
| 1440 | 1000 × 501.875 |
| 1348 | 960.15625 × 499.3125 |
| 1024 | 710.078125 × 481.859375 |
| 800 | 496 × 669.75 |
| 390 | 350 × 809.5625 |
| 320 | 280 × 864.4375 |

The shared lifecycle requires at least **15% intersection** and cancels all Claims track handles when inactive, offscreen, hidden, printing, using reduced motion or leaving the page. Cancelled/unsupported scenes show complete static geometry. Persisted page-show reobserves scenes. Travel's existing default route/plane branch remains **6.4 seconds**; the current Claims run also checks its four looping scenes and reduced-motion cancellation.

## Functional and capture evidence

| Record | Current scope and result |
| --- | --- |
| [Main browser record](../.impeccable/claims-support-20261011/final/browser.json) | **208/208 pass**: claims-4 version, removed footers, six-width frames/captions/reflow, authored phases and actual repeats, static/reduced/native reading, lifecycle suspension/resume, print/restoration and shared Travel regression. |
| [Rendered-content and layer record](../.impeccable/claims-support-20261011/final/visible-containment.json) | **41/41 pass**: rendered content and every opened native answer at six widths, plus the actual nine authored layer nodes and their phase/static state. |
| [Print record](../.impeccable/claims-support-20261011/final/print-correction.json) | **24/24 pass**: linked real contacts, all topics and original answers, omitted diagrams/footer notes, screen-space absence of the print line and restored screen state. |
| [Capture integrity](../.impeccable/claims-support-20261011/final/capture-integrity.json) | **20 current required views**: four first-view full pages; three cards at four widths; programme at 800; print; two no-JavaScript phone views. All were opened by root and the bounded visual reviewer. |
| [Phase sheets](../.impeccable/claims-support-20261011/final/phases-programme.png) | Four scene sheets combine same-clock phases **.10, .38, .66, .87**, alongside recorded real repeat completion. The reviewer scored these supplied views, without running a live playback review. |

The initial containment probe measured answer geometry hidden by native closed `details`, causing two diagnostic failures. The corrected `checkVisibility` probe measures rendered content and opens every answer at all six widths. An empty authored-layer selector was replaced with the **nine actual `cl-art-layer` nodes**. The [original diagnostic](../.impeccable/claims-support-20261011/final/browser-probe-uncorrected.json) is retained; these were probe corrections, with no production workaround.

Five claims-4 verified aliases are byte-identical alternate reads of current card/print captures. Raw PNG heading insets and hashes establish the same source images where resized/cached previews displaced glyphs. They do not add to the twenty authoritative views, and the presentation issue establishes no production design rule.

Native question semantics remain `details`/`summary`. Enhanced reading uses existing rows/dividers and one open answer per group; native fallback retains full-perimeter cards with all original answers emitted open. No-JavaScript reading exposes all topics and answers. Print exposes every topic and answer, removes decorative scenes and retains real phone/email; topic/question selection is restored afterward.

## Navigation, generation and public scope

Owner-approved shared labels use title case: **Insurance Solutions**, **Travel Insurance**, **Portal Preview**, **Claims Support** and **About Us**. Claims Help becomes Claims Support; About becomes About Us. Canonical category/product names, routes and destinations remain. The **prior claims-3 owner round's 249 passing checks** cover unchanged navigation across all fifteen HTML pages and actual Support/Portal clicks; that round predates final footer removal and is distinct from the current 273 assertions.

Final source validation/build passes **150 public files, 80 script syntax checks and 1,004 local references**; SEO passes **14 content pages**. The refreshed [private generation proof](../.impeccable/claims-support-20261011/generation/proof.json) records claims-4 reproduction from the full original generator/design refresh, retained print contacts, native captions and removed footer notes. The current Claims main matches that reproduction.

All **14 other HTML pages** match the navigation-normalized baseline through **parsed DOM serialization**, including intended labels/cache queries. Their body content remains unchanged. They are not described as byte-identical: ampersand entity spelling differs in navigation. Applying normalization again is **byte-idempotent**.

Public scope grows **146 → 150 files**: **19 existing files modified**, **4 scoped assets added**, **127 existing files unchanged**, **0 deleted**. The modified set is fifteen HTML files plus shared `content-flow.js`, `page-topic-icons.js`, `page-topics.js` and `travel-motion.js`. New assets are `claims.css`, `claims-scenes.css`, `claims-motion.js` and `navigation-labels.js`. No imagery, dependencies, test files, backend or public deployment was added.

## Review history and limits

The earlier **337 checks** and print-only [ship verdict](../.impeccable/claims-support-20261011/owner-correction/rejected-final-review.md) concern the rejected claims-2 visual revision. The [earlier full review](../.impeccable/claims-support-20261011/review-2.md) is retained. Those verdicts establish their original functional/print scope and **do not approve the corrected graphics**. The later full owner review requires six repairs; current visual acceptance comes from the bounded claims-4 verdict, which resolves fixes 1–5 and the footer/height steering with documentation closure and final disposition recorded in the final bounded verdict.

One detector pass produced nine warnings on the rejected revision; [its triage](../.impeccable/claims-support-20261011/detector-triage.md) remains historical. No new detector was run for the bounded correction. The unavailable skill-specific reviewer/documenter roles were disclosed as **code-reviewer** and **doc-updater** substitutes.

Verification is local Chromium. Print was emulated; visibility, pagehide and persisted-return/BFCache states were event simulations, rather than physical background-tab or real cache restoration tests. The no-JavaScript mobile header retains its inherited open navigation overlay. No new whole-site accessibility certification, Safari/Firefox, real-device/assistive-technology run, insurer purchase, email delivery, Git push, public hosting or deployment result is claimed.

Grounded implementation: [renderer](../scripts/design-claims.mjs), [content](../scripts/design-claims-content.mjs), [scenes](../scripts/design-claims-scenes.mjs), [Claims styles](../site/assets/css/claims.css), [scene styles](../site/assets/css/claims-scenes.css), [phase controller](../site/assets/js/claims-motion.js), [shared lifecycle](../site/assets/js/travel-motion.js) and [navigation normalization](../site/assets/js/navigation-labels.js). [DESIGN.md](../DESIGN.md), [.impeccable/design.json](../.impeccable/design.json), [PRODUCT.md](../PRODUCT.md), [README.md](../README.md) and [current verification](VERIFICATION.md) carry the scoped extension without replacing the incumbent world.
