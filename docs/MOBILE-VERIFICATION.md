# Mobile navigation and layout verification

Updated 12 October 2026. Asset revision: `20261012-mobile-1`.

The owner's three Android screenshots showed clipped homepage topic controls and
two adjoining selected backgrounds in the insurance menu. Checking document
overflow alone missed independently scrolling topic strips on nine pages.

## Changes

- Topic choices reflow into two visible columns at 48rem and below. Labels wrap,
  odd final choices span both columns, and selection keeps its check. Keyboard
  Up/Down follows the rendered column count; Left/Right, Home and End remain
  available. Desktop retains its vertical topic controls.
- The mobile menu opens with the insurance destinations expanded. The category
  heading and selected destination have separate spacing; only the destination
  receives a filled selected state. Menu height follows the dynamic viewport and
  its contents scroll independently on shorter screens.
- Safe-area-aware gutters and smaller stage padding give mobile content and
  nested plan controls more width. The homepage opening uses a shorter, centered
  mobile composition and a smaller heading.
- Standalone contact, review and footer links have a minimum 44px height. Contact
  fields retain 16px text. Without JavaScript, mobile navigation flows above the
  content and its insurance disclosure uses native browser behavior.
- Every page has new asset versions and `viewport-fit=cover`. The shared helper
  `scripts/presentation-assets.mjs` keeps presentation CSS last and applies these
  settings during either presentation or design regeneration.

Factual copy, destinations, product information, desktop cinematic source,
product rail and enquiry behavior retain their existing scope. Contact prepares
an email draft; it does not send or store an enquiry.

## Local evidence

All 13 content pages and the 404 page were reviewed: Home, Employee Benefits,
Business, Personal, BenefitsCare, Travel, Claims, About, Contact, Privacy, the
guide directory and both retained guide articles.

| Evidence | Result |
| --- | --- |
| Responsive layouts | 98 layouts: 14 pages at 320, 360, 390, 430, 768, 1024 and 1440 CSS pixels |
| Topic selections | 315 states on nine pages; no clipped controls, undersized buttons or horizontal overflow |
| Runtime | Zero page JavaScript errors in the responsive pass |
| Focused interaction and fallback | 56/56 checks passed with ordinary motion enabled |
| Short menus | 320 × 568 and landscape 844 × 390: bounded menu, separate highlight, last link reachable, Escape restores focus, outside tap closes |
| Keyboard and resize | Two-column arrows, Home/End, matching active panel and desktop/mobile resize states passed |
| Footer and contact | All 14 pages checked at 320px for fit and standalone tap sizes; form text remained 16px |
| No JavaScript | Inline header and native insurance links checked on Home, About, Contact and the checklist |
| Final build | 154 public files, 88 script syntax checks and 913 local references passed |
| SEO | All 13 content pages passed the existing audit |
| Regeneration helper | Idempotent on all 14 pages; presentation CSS is last and viewport-fit is present |

Private records are `.impeccable/mobile-20261012/baseline/report.json`,
`after/report.json` and `focused/report.json`. The responsive pass generated 142
views; final visual inspection opened every mobile page introduction and targeted
topic, menu and desktop views. Two additional focused captures show portrait and
landscape menus. These artifacts are outside `site/` and are not deployment
contents or application dependencies.

Source inspection and `git diff --check` passed. The 21st review reported no errors
or warnings; its 83 informational palette findings were existing definitions in
the required token file. The single Impeccable scan reported two existing palette
documentation advisories for unchanged image-overlay colors. No new literal
colors were introduced in components.

The responsive pass uses emulated reduced motion for stable captures. The focused
pass checks normal-motion interactions. An initial focused automation attempt
targeted a heading covered by the open menu and timed out; the outside-tap target
was corrected. The completed 56-check record is the current result.

These are local headless Chromium checks, not physical iPhone/Android or
Safari/Firefox verification. Deployment runs through the existing
[Azure workflow](https://github.com/BenefitsCare25/insproseo/actions/workflows/azure-deploy.yml)
on pushes to `main`; that workflow checks health and the live homepage against
the committed source. Its run result establishes deployment status separately
from these local layout checks. The local preview remains at
http://127.0.0.1:3000/.
