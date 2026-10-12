# Portal showcase verification — 3 October 2026

Preview: http://127.0.0.1:3002/employee-benefits/portal/

The feature selection is documented in [PORTAL-FEATURE-AUDIT.md](PORTAL-FEATURE-AUDIT.md). Review of the actual portal was limited to source code and documentation. The public website remains a separate static site; the actual portal project, accounts, documents and database were not changed.

## Checked behavior

- All 14 website routes checked at 1440, 1044 and 390 CSS pixels: no horizontal overflow, missing decoded images or JavaScript page errors. Each page has one visible level-one heading; Home retains separate protected desktop/mobile alternatives. The 1044 captures use 0.9 DPR to match the owner's screenshot scale.
- Nine feature states checked at 1440, 1044, 390 and 320 pixels, with no page overflow. Role tabs and feature tabs support their respective arrow-key navigation. Claims links select the claims preview. All nine previews remain visible without JavaScript.
- Motion transitions settle to full opacity; normal-motion execution has no JavaScript page errors. Reduced-motion verification uses the static rendered state.
- Portal navigation, walkthrough intent, editable enquiry prefill, required fields and the complete email-draft flow passed. The resulting draft is addressed to `helpdesk@inspro.com.sg` with the correct walkthrough context. The page explicitly states that no enquiry has been sent. No email was sent.
- Mobile navigation includes the portal page and closes with Escape.
- Axe-core 4.10.3 returned zero violations across 24 scans: all nine portal states at 1044 and 390 pixels, plus Home, Services, BenefitsCare, Corporate Benefits, Claims and Contact at 1044 pixels. Tags: WCAG 2 A/AA, 2.1 AA and 2.2 AA. The new breadcrumb touch target was enlarged after the first scan. This is automated testing, not a full assistive-technology audit.
- Original homepage cinematic and product-story sections, `hero.js` and `homepage-motion.js` still match the saved baseline. The previously corrected product-rail CSS was not edited in this task.

## Evidence

`portal-layout-report.json` contains 42 page/viewport checks and 27 initial feature-state checks. `portal-final-layout-report.json` contains 36 feature-state/viewport checks. `portal-interaction-report.json` contains 57 passing behavior checks. `portal-accessibility-report.json` records the 24 scans; all 18 portal states were rescanned after the review corrections. `portal-review-fix-report.json` records 27 post-correction checks. Screenshots remain private under `.impeccable/portal-review/r1`, `r2` and `r3`. No test source files were added.

Final source validation: `npm.cmd run build` passed with 98 public site files, 15 script syntax checks and 645 local file/anchor references, plus redirects, sitemap and structured data.

Independent review inspected 51 required captures and identified two material findings: misleading button styling on static download-format labels, and repeated sample/availability caveats. The format labels now use plain metadata, and every preview has one feature-specific sample caption. Internal duplicate notes were removed. The correction checks found no duplicate notes, button borders, overflow or JavaScript errors. The reviewer inspected all 33 recaptures, scored both findings resolved and returned **ship at the scope of those two fixes**. This is not a new whole-site approval or owner acceptance. The private verdict is `.impeccable/portal-review/verdict.json`.

The first keyboard check read the selected state before Radix's deferred focus update; waiting for the selected-state change verified the actual behavior. The initial Home heading counter included its hidden alternative; the corrected check counts visible headings.

The design detector ran once. It returned advisory type-ramp and radius differences from the existing design document; output was truncated, so this is not recorded as a clean detector pass. Sample typography was enlarged to a 0.75rem minimum and the final captures were supplied for independent visual review.

## Delivery limits

No public deployment, live portal authentication, client-data access, insurer integration, entitlement verification, field Core Web Vitals, Search Console submission, Safari/Firefox or real-device testing was performed. The feature previews are illustrative, and the agreed programme determines availability. Existing BenefitsCare price qualifications and June 2000 incorporation wording are retained.
