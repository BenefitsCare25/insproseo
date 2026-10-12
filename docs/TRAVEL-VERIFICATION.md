# Travel Insurance verification

**Last updated:** 11 October 2026. **Current revision:** `20261011-travel-1`. Source, browser, SEO and private generation evidence pass. The fresh independent full five-section [Travel finish review](../.impeccable/travel-insurance-20261011/final-review.md) returns **ship**, with no material fixes, after opening all twenty current captures.

## Scope and authority

The owner requested the next Travel Insurance redesign within the existing Inspro world. This supersedes the prior catalogue-cleanup instruction to leave Travel HTML unchanged. The single route remains `/service-details/personal/travel-insurance/`; all insurer action labels and referral URLs, chapter anchors, claims support, business Contact context and Home → Personal Insurance → Travel Insurance breadcrumbs remain.

[PRODUCT.md](../PRODUCT.md), the [Travel surface brief](../.impeccable/surfaces/site-service-details-personal-travel-insurance-index-html.md) and the [current direction](../.impeccable/travel-insurance-20261011/direction.md) retain the authority. Burgundy, rose, Manrope, existing semantic tokens and quiet shared navigation remain. The redesign uses geometric SVGs; no new raster asset or approved reproduction comp was required.

## Recorded content and interaction

The compact two-column introduction pairs the product title and personal/business chapter actions with an outbound-and-return scene. Three topics follow: **Personal travel quotes**, **Before you buy** and **Business travel**. Their enhanced cards share one intrinsic responsive frame. Inactive topics remain in the sizing grid while hidden, inert and removed from interaction; static source retains every section in reading order.

The quote chapter shows every insurer choice together. Plain arrow links retain a **2.75rem / 44px minimum height**, explicit keyboard focus and the exact referral context. The business action appears beside its heading at the top right on desktop and stacks below its introduction at **48rem** and below. Quote actions move below their descriptions at **64rem**; mobile descriptions and actions use the full row. Four comparison prompts and three employee-trip prompts remain distinct.

| Insurer option | Preserved action | Exact referral destination |
| --- | --- | --- |
| MSIG TravelEasy | Get an MSIG quote | [MSIG TravelEasy](https://e-insure2.msig.sg/cp/product/broker/TRAVEL/TRNamedTravelEasyV1?act=new&producerRef=INSPRO) |
| MSIG TravelEasy Pre-Ex | Check Pre-Ex eligibility | [MSIG TravelEasy Pre-Ex](https://e-insure2.msig.sg/cp/product/broker/TRAVEL/TRNamedTravelEasyPreExV1?act=new&producerRef=INSPRO) |
| FWD Travel | Visit FWD | [FWD referral](https://www.fwd.com.sg/?utm_source=Inspro&utm_medium=Broker&utm_campaign=Inspro&promo=INSPRO) |

FWD copy tells visitors to select Travel on FWD's website. Pre-Ex eligibility and exclusions remain explicit. The insurer confirms premiums, eligibility and policy terms; cover starts only after acceptance, purchase and the confirmed effective date. No new premiums, benefit limits or endorsements are introduced. The **Discuss business travel** action keeps `/contact-us/?intent=business&topic=corporateTravel`. Existing chapter anchors are `#quotes`, `#compare` and `#business-travel`; the comparison card retains [claims support](../site/claims-support/index.html).

Four scenes share a thin geometric route language: outbound/return hero, quote checkpoints, itinerary/traveller inputs and employee/work-purpose connections. Labels and endpoints remain stationary. Route highlights and the hero plane repeat automatically on **6,400ms** cycles, with **−1,100ms** phase offsets per route. There are no pause or Replay controls. Playback requires **15% intersection** and an active visible chapter; reduced motion, print, inactive/offscreen/hidden state and pagehide settle the artwork. Persisted pages reobserve scenes, while unsupported environments retain complete static artwork.

Without JavaScript, all three chapters, three insurer choices and seven preparation facts remain in native reading order. Print exposes every chapter and removes decorative diagrams; after print, the selected chapter returns. The shared mobile navigation keeps its inherited no-JavaScript presentation, which overlays part of the hero; this task did not change it and does not establish a flawless mobile header fallback.

## Source and generation

| File | Responsibility |
| --- | --- |
| [Travel renderer](../scripts/design-travel.mjs) | Scoped hero and three source sections, exact destinations, matching mapped heading/introduction and structured data. |
| [Travel scenes](../scripts/design-travel-scenes.mjs) | Four decorative SVG compositions using the incumbent icon paths and semantic classes. |
| [Shared Travel content](../scripts/travel-content.mjs) | Three insurer options, four comparison prompts and three business prompts reused by the existing generator. |
| [Travel CSS](../site/assets/css/travel.css) | Compact hero, plain actions, intrinsic equal cards, responsive reading, focus and print layouts. |
| [Scene CSS](../site/assets/css/travel-scenes.css) | Token-based route, badge and stationary label styling; print removes decoration. |
| [Motion controller](../site/assets/js/travel-motion.js) | Web Animations, path-following plane, observation and cancellation/restoration lifecycle. |
| [Public HTML](../site/service-details/personal/travel-insurance/index.html) | Complete source reading, metadata, breadcrumbs, all links and versioned assets. |

The [private generation record](../.impeccable/travel-insurance-20261011/generation-record.json) proves the full existing generator ran from the exact pre-Travel seed and produced current Travel HTML byte for byte. The canonical Travel output alone was adopted. Against **144 existing public files**, only **Travel HTML and travel.css** changed; **travel-scenes.css and travel-motion.js** were added. There were **no deletions**, and **142 other existing public files remain byte-identical**. The resulting public inventory is **146 files**.

The private full run also differs in `llms.txt` and two legacy pages' shared stylesheet tags. Those unrelated outputs were not copied into `site/`; the record does not claim a whole-site generated-byte match. The [baseline hashes](../.impeccable/travel-insurance-20261011/baseline-hashes.json) and [before-content record](../.impeccable/travel-insurance-20261011/before-content.json) retain the comparison. No Git repository or PR metadata is available.

## Current validation

| Area | Recorded result |
| --- | --- |
| Source validator | `npm.cmd run check` **PASS: 146 public files, 74 script syntax checks and 1,000 local references**, plus redirects, sitemap and structured data. |
| SEO | `npm.cmd run audit:seo` **PASS: 14 content pages**, including canonical entities, breadcrumbs, service/article markup, images, sitemap and internal reachability. |
| Browser | Final round 2 **226/226 checks pass**, with **zero browser errors**, across **1,440, 1,348, 1,024, 800, 390 and 320 CSS pixels**. |
| Equal frames and reading | All three topics have equal dimensions at each width; active panels are accessible, inactive panels hidden/inert, and all content fits without horizontal overflow. |
| Referrals and actions | All three exact insurer labels/URLs remain visible; relevant arrow targets are at least **44px** high. The business action was actually clicked and opened Contact with the correct business intent and corporate-travel topic. |
| Keyboard and anchors | Home/End select their corresponding chapters; navigation orientation matches the viewport; hero personal/business actions and the business deep link select their chapter. |
| Motion | The hero plane moves, labels stay stationary, and hero plus all three card scenes continue beyond one cycle. Inactive, reduced-motion and fully offscreen scenes cancel; restored preference/visibility resumes the active scene. No pause or Replay control is present. |
| Lifecycle scope | Simulated hidden/pagehide/persisted-pageshow events cancel loops and restore observation. Print emulation exposes every topic and all policy prompts, stops loops, then restores the selected topic. |
| No JavaScript | At **390 and 320px**, all three topics, three quotes and seven facts remain available with no horizontal overflow; the inherited shared navigation overlap is retained as an explicit limit. |
| Captures | **20 current captures**: four complete first views, thirteen card views, one desktop print and two mobile no-JavaScript views. Root opened all twenty. |
| Source review | Fresh scoped [source review](../.impeccable/travel-insurance-20261011/source-review.md) **SHIP**; no remaining material source finding. |
| Full finish review | Fresh independent full-surface disposition **ship** for all twenty current captures; all five sections completed, with **no material fixes**. |

[Validation record](../.impeccable/travel-insurance-20261011/validation-record.json), [round-2 browser record](../.impeccable/travel-insurance-20261011/round-2/browser-record.json) and [capture manifest](../.impeccable/travel-insurance-20261011/round-2/capture-manifest.json) retain the exact scope, PNG dimensions and capture hashes. The final source command is `npm.cmd run check`; the earlier build uses the same validator but preceded the final mapped-head alignment.

| CSS viewport width | Common card width × height |
| --- | --- |
| 1,440px | 1,000 × 586.453125px |
| 1,348px | 960.15625 × 576.71875px |
| 1,024px | 710.078125 × 690.546875px |
| 800px | 496 × 739.984375px |
| 390px | 350 × 938.8125px |
| 320px | 280 × 939.59375px |

These measured sizes document the current captures; they are not fixed height tokens. Two initial QA selectors did not match the authored SVG class names. The intended stationary-label and reduced-motion static-route checks were rerun against the actual selectors and pass. Desktop business images were recaptured using the card locator at the same paths, replacing manual coordinate crops. Neither correction changed product source.

## Review limits

The [fresh full finish report](../.impeccable/travel-insurance-20261011/final-review.md), produced by the disclosed code-reviewer substitute, completes **persistence, fidelity, ceiling, material_fixes and keep**. All twenty authoritative captures were opened before builder prose, and the reviewer assessed the complete TYPE/MATERIAL/GROUND and five-block contract. The report accepts the shorter chapters’ spare space as the owner’s chosen selection stability: intrinsic sizing follows the tallest real content, with no fixed tall minimum or filler. Optional baseline imagery and build generators were not inspected; supplied current source and generation records retain those checks. This is the current Travel disposition, separate from earlier service handoffs.

The [single detector record](../.impeccable/travel-insurance-20261011/detector-record.json) is a manual transcription of one PTY run, with six warnings about shared padding, positioned-child clipping and dark glow. The fresh finish reviewer checked them against captures and source: shell gutters and 20–28px card padding supply the insets, chapter copy is contained, and no visible glow or decorative directional border appears. Intentional horizontal-rail clipping remains distinct from chapter content. These warnings do not establish new design rules. No extra detector or browser run was performed by the documenter.

Hidden-page, pagehide and persisted-pageshow checks simulate events; they do not establish a physical background-tab or actual browser back/forward-cache result. Print was emulated, and the no-JavaScript captures retain the inherited navigation overlap. No completed insurer quotation, purchase, insurer acceptance, actual email delivery, Git push, public deployment or host verification was performed. Contact prepares a mail draft. The evidence does not establish site-wide accessibility certification or cross-browser/real-device results.
