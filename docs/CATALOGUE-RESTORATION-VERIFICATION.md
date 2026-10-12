# Product catalogue restoration and verification

Completed locally on 3 October 2026. Preview: http://127.0.0.1:3002/. The preview server remains running. No production deployment or insurance purchase was performed.

## What changed

The public-site audit found that the redesign had removed useful product destinations and insurer referral routes. This revision restores the essential journeys within the established Inspro design.

- Correct categories throughout the directory, homepage choices, navigation menu and footer: **Employee Benefits**, **Business Insurance**, **Personal Insurance**. The owner explicitly rejected “employer cover” as a separate category.
- Direct **Travel Insurance** navigation, a homepage travel section outside the protected animation, and a dedicated travel page with FWD, MSIG TravelEasy and MSIG TravelEasy Pre-Ex links. Existing referral parameters are preserved. FWD is accurately labelled as a website destination; the MSIG routes lead to quote/eligibility screens.
- Dedicated pages restored for motor, home, personal accident, domestic helper, foreign-worker medical insurance and foreign-worker security bonds. Corporate travel now has its own page.
- A commercial directory restores specific liability, fleet, construction, marine, trade-credit and specialist asset enquiries. Personal golf, fine-art and pleasure-craft products are individually discoverable.
- Business packages now have six industry entry points. Corporate benefits explain staff communications and link to employee-related business insurance, keeping those distinct from employee benefits.
- The contact form preserves each product or industry selection and lets visitors change the topic. Selected BenefitsCare plans still survive into the email draft. The form prepares drafts only; it does not deliver or store enquiries.
- Restored pages have their own titles, descriptions, canonicals and structured data. Their old redirects to generic sections were removed and their URLs added to the sitemap. The personal overview retains its `#travel` anchor for existing bookmarks.
- The obsolete foreign-worker medical minimum was not copied. The replacement links to current MOM guidance and identifies the source date. Current insurer terms determine quotations; no unverified discount is advertised.

## Implementation

`scripts/insurance-catalogue.mjs` holds the product routes, referral URLs, topic labels, compositions and metadata generation. `scripts/redesign-pages.mjs` composes the new and existing pages. `scripts/lead-flow.mjs` supplies the corrected shared navigation and contact markup. `site/assets/css/insurance-catalogue.css` styles the catalogue, quote panels and product guidance. `site/assets/js/contact.js` reads the generated topic data and manages drafts.

Run `npm.cmd run redesign:pages` to regenerate the HTML, then `npm.cmd run check`. No new client library or runtime dependency was added. No test source files were created. All existing image assets were reused; no new raster assets were generated.

## Verification results

| Check | Result |
| --- | --- |
| Supplied validator / build | Passed: 109 public files, 17 script syntax checks, 1,204 local file/anchor references, redirect targets, sitemap and structured data. |
| Responsive browser pass | 23 pages at 1440, 1065 and 390 CSS pixels: 69 checks. One H1 each, no horizontal overflow, broken images, duplicate IDs, JavaScript page errors or unexpected HTTP errors detected. |
| Automated accessibility | Axe-core WCAG A/AA tagged checks across all 23 pages at 1065 pixels: zero reported violations. This is not a complete assistive-technology audit. |
| Interactions | 61 checks passed: desktop/mobile menus, Escape handling, travel links and FAQ, all generated product/industry topics, invalid form blocking, draft preparation, intent changes, BenefitsCare plan retention, unknown-topic rejection, clipboard success/fallback and no-JavaScript contact recovery. |
| Internal navigation | All 65 unique internal page/enquiry URLs returned HTTP 200. Restored product URLs now resolve to their own pages. |
| Normal motion | All 22 content pages checked with normal motion: visible main headings, no page errors or horizontal overflow. |
| Homepage preservation | Protected story and product-rail HTML match the pre-change baseline. `hero.js`, `homepage-motion.js` and `homepage.css` are unchanged. |
| Regeneration | A repeated page generation produced byte-identical HTML across all 23 pages. |
| Independent finish review | **SHIP** for the scoped local implementation. No material defects found in the representative desktop/mobile screenshots and implementation review. Intentional catalogue type/radius additions are recorded in DESIGN.md. |

Machine-readable evidence: `catalogue-browser-review.json`, `catalogue-interaction-review.json`, `catalogue-motion-links-review.json`. Private screenshots, baselines, detector advisories and the independent review are under `.impeccable/catalogue-review/` and are excluded from deployment.

## Limits

The earlier public-site audit verified that the FWD link loaded and both MSIG quote entry screens opened. This revision verifies their exact referral URLs in the rendered site; no insurer purchase, medical eligibility decision, referral attribution or discount was tested. Current product availability remains subject to the insurer.

Browser checks used desktop Chrome with emulated viewports, plus JavaScript-disabled and reduced-motion contexts. Safari, Firefox, physical mobile devices, screen readers, field Core Web Vitals and public hosting were not tested. No actual email was sent. These bounded checks found no defects; they are not a guarantee that every possible browser or external-service condition is bug-free.
