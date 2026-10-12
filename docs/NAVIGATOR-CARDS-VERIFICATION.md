# Navigator card enhancement — 9 October 2026

**Pending follow-up removal request:** the user now requests removal of the extra navigator pattern shown in a new screenshot. The initial supported local screenshot transfer and one bounded retry both returned “download failed with HTTP status 403”; Library read supplied only an image pointer. Actual pixels were not available, so the requested pattern is not identified and **0 navigators have been removed**. Primary navigation and content remain intact; further conflicting design additions are paused. A viewable screenshot or explicit navigator labels/type is required before the removal can proceed. The coverage counts and verification below describe the completed enhancement before this pending removal. See outputs/navigator-cards-20261009/removal-blocker.json.


Implemented in the existing local project **C:\Users\huien\insproseo**. Preview **http://127.0.0.1:3000/about-us/#content-explorer**. Chrome QA used the browser on the user's computer; the server remains running. No publishing, deployment or push occurred.

## Result and coverage

Topic cards now share burgundy selected states, topic-specific Lucide icons, selected checkmarks, consistent spacing and strong keyboard focus. Mobile keeps horizontal swipe navigation with a visible scrollbar and automatic reveal of the selected card. Scroll snapping was removed after it caused repeatable missed clicks on Travel Insurance and Insurance solutions. Selected backgrounds change immediately to avoid a temporary white-text-on-white-surface state. Content panels, company copy, imagery, links, homepage cinematic and product rail remain intact.

All **27 HTML routes** were audited: **25 have navigator targets**; Contact and 404 have none. Coverage includes **23 topic explorers / 76 topic cards**, **52 link cards in 24 groups** (41 product rows, 3 photographic category links, 1 featured guide, 7 resource cards), **25 static/fallback navigation groups / 77 links**, and **7 nested tab groups / 23 controls**. The nested controls comprise 3 portal roles, 9 portal features, 3 homepage plan tabs, 4 business risk tabs and 4 policy-year steps. Fallback links are an alternative source representation and are not added to live topic-card totals.

The shared card stylesheet loads on all 27 pages. Resource-card links have a full-card hit area; existing native anchors and Radix tab behavior are retained. Decorative animated tab markers are hidden in favour of the shared selected background. No npm dependencies or raster assets were added. Existing Lucide/ISC and vendor notices remain in place.

## Verification

- **63 route/viewport checks passed**: all 27 routes at 1,440 × 1,000 and 390 × 844 CSS pixels, six representative routes at 960 × 900, and Home/About/Services at 321 × 844. This covers **188 topic selections**. Desktop/mobile tests also verify Home, End, arrow wrap, one active tab stop and Tab entry into the visible panel.
- All nested controls were exercised at desktop and mobile sizes, including all 9 portal features across 3 roles and all 11 plan/risk/policy-year choices. Nested Home keyboard navigation and visible 3-pixel focus were checked. No horizontal overflow was found in the tested states.
- Keyboard activation of photographic category, product and featured-guide cards reached their original destinations. About `#core-values`, services `#personal-insurance` and Travel `#business-travel` opened the correct topics. Catalogue search returned its matching product, and clearing the search restored topic navigation.
- All **27 main HTML bodies and all anchor destinations are unchanged** against private before copies. Shared refresh against a private copy preserved all 27 main bodies and produced exactly one navigator stylesheet per page.
- `npm.cmd run check` and `npm.cmd run build` passed: **132 public files, 37 script syntax checks and 1,726 local file/anchor references**, plus redirects, sitemap and structured data. `npm.cmd run audit:seo` passed **26 content pages**. The project defines no separate lint or typecheck command. No repository test files were created.
- `21st review` examined the changed CSS/runtime JS and reported **2 files, 0 findings, 0 fixes**. Existing project primitives and installed icons were reused; no registry component was installed.
- Recorded browser warnings/errors: **0**. Calculated contrast: selected text **9.48:1**, inactive text **12.47:1**, icon on pale surface **9.22:1**, focus against white **9.81:1**.
- Reduced-motion, forced-colour, print and JavaScript-disabled fallbacks were preserved/reviewed in source; these modes were not live-emulated in this revision. Safari, Firefox, real devices and assistive technology remain untested.

## Route ledger

| Route | Topic cards | Link cards | Static links | Nested tabs | Desktop / mobile |
| --- | ---: | ---: | ---: | ---: | --- |
| /404.html | 0 | 0 | 0 | 0 | Pass / Pass |
| /about-us/ | 5 | 0 | 5 | 0 | Pass / Pass |
| /claims-support/ | 3 | 0 | 3 | 0 | Pass / Pass |
| /contact-us/ | 0 | 0 | 0 | 0 | Pass / Pass |
| /employee-benefits/benefitscare/ | 3 | 0 | 3 | 0 | Pass / Pass |
| /employee-benefits/group-medical-insurance/ | 3 | 0 | 3 | 0 | Pass / Pass |
| /employee-benefits/portal/ | 0 | 0 | 2 | 12 | Pass / Pass |
| /guides/ | 0 | 4 | 3 | 0 | Pass / Pass |
| /guides/insurance-review-checklist/ | 4 | 0 | 5 | 0 | Pass / Pass |
| /guides/sme-employee-insurance-singapore/ | 3 | 0 | 3 | 0 | Pass / Pass |
| / | 5 | 0 | 0 | 3 | Pass / Pass |
| /privacy-security/ | 6 | 0 | 6 | 0 | Pass / Pass |
| /service-details/commercial/commercialoffice-package/ | 4 | 6 | 4 | 4 | Pass / Pass |
| /service-details/commercial/employees-benefits/ | 4 | 0 | 4 | 4 | Pass / Pass |
| /service-details/commercial/foreign-worker-medical-insurance/ | 2 | 0 | 2 | 0 | Pass / Pass |
| /service-details/commercial/foreign-workers-bonds/ | 2 | 0 | 2 | 0 | Pass / Pass |
| /service-details/commercial/professional-indemnity-insurance/ | 3 | 0 | 3 | 0 | Pass / Pass |
| /service-details/commercial/public-liability-insurance/ | 3 | 0 | 3 | 0 | Pass / Pass |
| /service-details/commercial/view-commercial-insurance-products/ | 5 | 19 | 5 | 0 | Pass / Pass |
| /service-details/commercial/work-injury-compensation-insurance/ | 3 | 0 | 3 | 0 | Pass / Pass |
| /service-details/personal/home-insurance/ | 2 | 0 | 2 | 0 | Pass / Pass |
| /service-details/personal/maid-insurance/ | 2 | 0 | 2 | 0 | Pass / Pass |
| /service-details/personal/motor-insurance/ | 2 | 0 | 2 | 0 | Pass / Pass |
| /service-details/personal/personal-accident-insurance/ | 2 | 0 | 2 | 0 | Pass / Pass |
| /service-details/personal/travel-insurance/ | 3 | 0 | 3 | 0 | Pass / Pass |
| /service-details/personal/view-personal-insurance-products/ | 3 | 7 | 3 | 0 | Pass / Pass |
| /services/ | 4 | 16 | 4 | 0 | Pass / Pass |

## Changed files

**33 implementation files:** all 27 HTML paths in the ledger; `site/assets/css/tokens.css`, `site/assets/css/navigator-cards.css`, `site/assets/js/content-flow.js`, `site/assets/js/page-topic-icons.js`, `scripts/design-refresh.mjs`, `scripts/design-navigators.mjs`. Three are new (navigator CSS, generated topic icons and icon generator); 30 are modified. Main page markup is preserved; HTML edits load the shared assets and refresh versioned references.

Two new design metadata files: `.21st/design.json`, `.21st/DESIGN.md`. Documentation: this report, `README.md` and `docs/VERIFICATION.md`. Exact names are in [changed-files.json](../outputs/navigator-cards-20261009/changed-files.json). Evidence is outside `site/` and is not publicly served. Private before copies remain in the task workspace because this folder has no Git repository.

## Evidence and gaps

[Machine-readable browser results](../outputs/navigator-cards-20261009/browser-checks.json), [final preservation](../outputs/navigator-cards-20261009/final-preservation.json), [refresh checks](../outputs/navigator-cards-20261009/refresh-checks.json), [nested navigator inventory](../outputs/navigator-cards-20261009/nested-tabs.json), [extra journeys](../outputs/navigator-cards-20261009/extra-checks.json).

Desktop: [before](../outputs/navigator-cards-20261009/before-desktop.jpg), [after](../outputs/navigator-cards-20261009/after-desktop.jpg), [home](../outputs/navigator-cards-20261009/home-desktop.jpg), [services](../outputs/navigator-cards-20261009/services-desktop.jpg), [catalogue](../outputs/navigator-cards-20261009/catalogue-desktop.jpg), [portal](../outputs/navigator-cards-20261009/portal-desktop.jpg), [guides](../outputs/navigator-cards-20261009/guides-desktop.jpg), [policy year](../outputs/navigator-cards-20261009/policy-year-desktop.jpg). Mobile: [before](../outputs/navigator-cards-20261009/before-mobile.jpg), [after](../outputs/navigator-cards-20261009/after-mobile.jpg), [home](../outputs/navigator-cards-20261009/home-mobile.jpg), [services](../outputs/navigator-cards-20261009/services-mobile.jpg), [catalogue](../outputs/navigator-cards-20261009/catalogue-mobile.jpg), [portal](../outputs/navigator-cards-20261009/portal-mobile.jpg), [policy year](../outputs/navigator-cards-20261009/policy-year-mobile.jpg). Captures show Chrome's visible browser surface; CSS QA dimensions are recorded separately in the JSON.

The supplied Library screenshot could not be materialized. The supported initial transfer and one bounded retry each returned **“download failed with HTTP status 403”**. Library read supplied metadata and an image pointer, without viewable pixels. The attachment itself was not viewed. The matching current section was inspected directly at **http://127.0.0.1:3000/about-us/#content-explorer** and the before captures above record that live baseline. It was treated as the problem section, not a visual template.

The desktop project registry was unavailable (**DesktopProjectsUnavailableError**). Work used the exact requested local folder in this task; no sidebar project entry was created and no hidden app registry/configuration was edited.
