# Portal Preview verification — 11 October 2026

Current revision: **`20261011-portal-5`**. Local preview: [Portal Preview](http://127.0.0.1:3000/employee-benefits/portal/). This is the existing static website; no public deployment was performed.

Nine source-backed demonstrations serve Employees, HR teams and Inspro support. The active heading and role tabs share the desktop row. The removed title/icon, sample badge, pause control and repetitive descriptions remain absent. The latest owner instruction supersedes the earlier equal-height interpretation: **every width uses active-only natural content sizing**. Inactive roles, features, menus and nested previews leave layout flow. Compact metrics, receipts, documents, map/card and enrolment reduce empty space. Matching is one employer-record → assigned-benefit-schedule workspace, with eligibility checks grouped below; enrolment places its graphic beside selected benefits and groups review controls. These rules apply to this portal surface.

## Current evidence

| Area | Recorded result |
| --- | --- |
| Browser | [Current round 2](../.impeccable/portal-redesign-20261011/compact-round-2/browser.json): **296/296 assertions**, zero page, console or HTTP errors, **40 captures**. |
| Focused repair | [Correction](../.impeccable/portal-redesign-20261011/compact-round-2/correction.json): **28/28 separate checks**, covering forms/enrolment at 320, 384, 390 and 1440px and narrow metrics across nine tasks plus benefit-year and report variants. |
| Visual finish | [Fresh full review](../.impeccable/portal-redesign-20261011/final-review.md): **ship**, no material fixes, after independently opening **all 40 current captures and nine owner references**. [Capture integrity](../.impeccable/portal-redesign-20261011/capture-integrity.json) records actual dimensions and valid files. Functional counts do not establish visual approval. |
| Source | [Current Portal-5 source review](../.impeccable/portal-redesign-20261011/source-review.md): **SHIP** for compact sizing, matching, grouped enrolment and narrow-screen corrections. This is separate from visual review. |
| Build, SEO and scoped review | [Validation](../.impeccable/portal-redesign-20261011/validation.json): `npm.cmd run build` passes **163 public files, 98 syntax checks and 1,023 local references**, redirects, sitemap and structured data. SEO passes **14 content pages**; 21st review covers **11 portal HTML/CSS/JS paths**, with **zero findings or fixes**. |
| Public scope | [Scope proof](../.impeccable/portal-redesign-20261011/scope-proof.json): **two existing files modified**, **ten scoped assets added** (six styles/four controllers), **151 unchanged**, **zero deleted**. Existing changes are portal HTML and the additive semantic alias in `tokens.css`. |
| Generation | [Scoped proof](../.impeccable/portal-redesign-20261011/owner-generation/proof.json): byte-idempotent renderer; full generation preserves authored portal content and linked schema, each scoped asset once, and no legacy portal islands. Shared header bindings remain. |
| Local HTTP | [Local response](../.impeccable/portal-redesign-20261011/local-http.json): **200**, containing `20261011-portal-5`. |

The [initial round-2 probe](../.impeccable/portal-redesign-20261011/compact-round-2/initial-probe.json) records **295/296** with one real failure: the 320px forms metric label escaped its card. Shipping CSS repairs that label and a measured enrolment graphic/bullet collision. The current 296-check report replaces the failed assertion using focused current evidence; the separate 28-check pass is not added to it. Seven updated/additional captures are included in the authoritative 40-file array.

The [prior compact round](../.impeccable/portal-redesign-20261011/compact-round-1/browser.json) records **184/184**, separately. Portal-4 motion and finish-correction records are historical and superseded for current layout certification. Their earlier review verdicts do not certify Portal-5.

The generation probe also had a distinct measurement correction: it initially mislabelled preserved global `design-interactions.js` header code as a legacy portal island. The corrected scoped asset/controller/markup proof required **no public removal** and retains `site.js` and shared header bindings. This probe correction is separate from the real shipping CSS repair above.

## Checked behavior and product truth

Local headless Chromium checks cover **1440, 1348, 1024, 800, 769, 768, 390 and 320 CSS pixels**: all tasks and alternate states, outer/inner fit, accessible selection and inert inactive views, keyboard/query/history selection, balances and report arithmetic, maps, messages and benefit-year states. Decorative task tracks repeat on **7.2-second** clocks; visual amounts count during the first **28%** and hold their final values, while accessible labels stay stable. Inactive/offscreen/hidden views, pagehide and print pause motion; reduced-motion reading is complete and responds to live preference changes. Native no-JavaScript content and sequential nested print/restoration are retained.

[The feature audit](PORTAL-FEATURE-AUDIT.md) owns feature and access limits. HR sees only permitted HR-submitted claims and filed forms; acknowledgement stays with Inspro. Five native questions below the exhibit qualify programme access and illustrative amounts, identifiers, counts and clinic areas. Preview choices do not connect accounts, submit claims or download documents. There are no new roster/policy features, approval guarantees or invented clinic promises. Contact still prepares an email draft only, without storage, delivery or a backend.

Search evidence covers canonical/social metadata, one H1, native workflow content and answers, linked InsuranceAgency/WebSite/WebPage/Service/BreadcrumbList entities, nine WebPageElement references and sitemap/robots/llms compatibility. No ratings, offers, FAQ rich-result, ranking or AI-citation outcome is implied.

## Limits

Evidence is local headless Chromium. Print, preference and no-JavaScript modes are emulated; earlier visibility/lifecycle events were simulated. No actual physical background-tab recovery, BFCache, Safari/Firefox, real-device or assistive-technology audit, WCAG certification, live account, submission/download, email delivery, public deployment, indexing, ranking, AI visibility or field Core Web Vitals result is claimed. Review captures and working evidence remain private, outside `site/`.
