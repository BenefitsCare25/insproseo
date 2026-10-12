# Guide cleanup verification

**Last Updated:** 10 October 2026.

The latest owner instruction replaces the sequential guide-redesign task with removal of ten separate detail guides. The active site has **14 content pages plus 404**. The retained guide routes are `/guides/`, `/guides/insurance-review-checklist/` and `/guides/sme-employee-insurance-singapore/`.

Preview: **http://127.0.0.1:3000/**. Keep the local server running. No public deployment, Git push or email delivery was performed.

## Implemented behavior

Non-travel product-card actions retain the visible label **Review** and open **Contact** with the corresponding `intent`, `topic` and selected BenefitsCare `plan`. Their label and destination context remain consistent through initial rendering, hydration and later selection. The Contact form validates the fields and prepares an email draft; the visitor reviews and sends it in their mail application. The website does not send or store enquiries.

Ten guide HTML files and the Public Liability-only CSS, JavaScript and generator are removed. Page generators no longer recreate those guides. Active internal links, sitemap, canonical/social metadata, structured data and `llms.txt` describe the retained pages. Each retired guide has three **301** URL variants: trailing slash, slashless and `index.html`.

| Retired guide route | Contact context |
| --- | --- |
| `/employee-benefits/group-medical-insurance/` | `intent=benefits&topic=medical` |
| `/service-details/commercial/work-injury-compensation-insurance/` | `intent=business&topic=people` |
| `/service-details/commercial/public-liability-insurance/` | `intent=business&topic=liability` |
| `/service-details/commercial/professional-indemnity-insurance/` | `intent=business&topic=professional` |
| `/service-details/commercial/foreign-worker-medical-insurance/` | `intent=business&topic=medical` |
| `/service-details/commercial/foreign-workers-bonds/` | `intent=business&topic=bonds` |
| `/service-details/personal/motor-insurance/` | `intent=personal&topic=motor` |
| `/service-details/personal/home-insurance/` | `intent=personal&topic=home` |
| `/service-details/personal/personal-accident-insurance/` | `intent=personal&topic=accident` |
| `/service-details/personal/maid-insurance/` | `intent=personal&topic=helper` |

## Preservation

Travel Insurance at `/service-details/personal/travel-insurance/` is unchanged byte for byte. Its baseline SHA-256 is `d5181d84b3cfed6bc367839d8417fb9eda8cd0fc369c12244492e95d71237bde`. Travel entry links and labels, the Business travel chapter, Contact context and insurer quotation URLs retain their existing behavior.

The primary product-page content, subject graphics, finite motion, homepage cinematic/product rail and existing visual world remain. Scoped JavaScript changes preserve **Review** during React hydration and keep selected product actions paired with their correct Contact context. The JSX reviewer returned **SHIP** after confirming all three corrections, the rebuilt UI bundle and matching asset query versions.

The [Public Liability record](PUBLIC-LIABILITY-GUIDE-VERIFICATION.md) and its private review evidence are historical. There is no outstanding next-guide approval gate. [DESIGN.md](../DESIGN.md) retains the incumbent tokens and visual world; its Public Liability subsection is marked retired.

## Recorded verification

These records come from the implementation and independent review; the documentation handoff did not rerun browser checks.

| Area | Result and scope |
| --- | --- |
| Regeneration | `npm.cmd run redesign:pages`, `npm.cmd run optimize:seo` and `npm.cmd run design:refresh` passed. Retired guides were not recreated. |
| Build | `npm.cmd run build` passed **132 public site files, 54 script syntax checks and 1,002 local file/anchor references**, plus redirect targets, sitemap and structured data. |
| SEO | `npm.cmd run audit:seo` passed **14 content pages with zero warnings**. |
| Source review | Independent scoped source review returned **SHIP**. Three React hydration/context corrections identified by the JSX review were fixed before final browser confirmation. |
| Preservation | Final source record: **22 changed, 12 retired and 110 unchanged public files**. A full refresh matches all **132 current files byte for byte**; Travel Insurance retains its protected hash. |
| Browser confirmation | **1,219 of 1,219 assertions pass**; zero remaining failures or browser/console errors. All **14 routes** checked at **1,440, 768 and 390 CSS pixels with reduced motion**. **98 actual product-to-Contact click-throughs** and **35 saved captures**. |
| Visual review | Root inspected all **35 captures**; no material layout or action defects. A focused mobile Hospital viewport confirms the full major-medical card and co-insurance text; the cropped element capture was a screenshot artifact. Independent scoped follow-up returned **SHIP**. |
| Product controls | Desktop/mobile checks cover **22 Business choices**, Personal/Lifestyle selections, **six benefits topics** and role tools, **three BenefitsCare plans**, homepage **four service choices**, **three plan previews** and **two portal roles**. Review labels and the matching Contact context/plan pass. |
| Reading and motion | All **14 routes** checked with JavaScript disabled for headings, loaded images and overflow. Checklist **12 checkboxes** and the print action pass at desktop/mobile. One mobile Lifestyle selection retains Review with normal motion. |
| HTTP | All **30 retired aliases** return the matching **301** destination; following the **ten retired guide routes** reaches Contact with **200**. The **three retained guide routes** return **200**, the **three corporate-travel aliases** are unchanged and an unknown route returns a real **404**. |

The first browser pass stopped after an incorrect QA-plan selector and identified hydration/context issues. Three implementation issues were corrected before confirmation. The confirmation's twelve false-positive QA expectations were corrected with scoped rechecks: the selected plan belongs in the Contact context label rather than the optional message, the Lifestyle selection key is `golf`, and the print stub must account for evaluate auto-invocation. The raw report is archived and the final report embeds the correction evidence. No application source changed after the source-review SHIP verdict.

## Evidence and limits

Private evidence remains outside `site/` and is not deployed:

- [Visual review](../.impeccable/guide-removal-20261010/visual-review.json) records all inspected captures and the focused Hospital confirmation.

- [QA plan](../.impeccable/guide-removal-20261010/qa-plan.json) records active routes and the ten Contact mappings.
- [Baseline hashes](../.impeccable/guide-removal-20261010/baseline-hashes.json) preserve the starting source, including Travel Insurance.
- [Source changes](../.impeccable/guide-removal-20261010/source-changes.json) record changed, retired and preserved public files.
- [Regeneration check](../.impeccable/guide-removal-20261010/regeneration-check.json) records the byte-stable final refresh.
- [Final browser confirmation](../.impeccable/guide-removal-20261010/browser-round-2.json) records the completed matrix and scoped QA corrections; the [raw report](../.impeccable/guide-removal-20261010/browser-round-2-raw.json) is retained.
- [Interrupted browser record](../.impeccable/guide-removal-20261010/browser-interruption.json) preserves the first-pass boundary.

Local source and browser checks do not establish a public hosting/DNS/TLS deployment, search indexing or rankings, field Core Web Vitals, Safari/Firefox, real-device or complete assistive-technology behavior. The retired URLs' production behavior still depends on the host applying the supplied routing rules.
