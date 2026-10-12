# Brand, content and rail correction - 3 October 2026

This supersedes the earlier numerical visual-review result. The owner's screenshots exposed a palette mismatch, an oversized About composition and a large gap below the horizontal product rail. No replacement numerical score is claimed.

## Changes

| Page / area | Correction |
| --- | --- |
| Shared theme | White and neutral grey surfaces, charcoal type/footer, Inspro red actions. Removed navy/blue-grey explorer panels and large dark closing sections. |
| Home | Kept the interactive BenefitsCare comparison; replaced duplicate corporate explorer/service cycle with a short link into Corporate. Removed redundant closing description. |
| Corporate benefits | Owns the full employee/HR explorer and service cycle. Clearer section titles; neutral panels and red selected states; repeated outcome lines removed. |
| About | Compact company profile and readable incorporation/registration facts. Removed oversized title/location echo, reused image, giant date placard, generic capability section and duplicate contact block. |
| Insurance solutions | Four service destinations; removed repeated generic broker capability text. |
| BenefitsCare | Removed repeated SME introduction and Premier FAQ answer; clearer plan, additional-cover and quotation headings. Price qualifications remain. |
| Business | Replaced repetitive trigger cards and preparation list with one short review prompt and checklist link. |
| Personal | Removed the second closing enquiry section. |
| Claims | Removed repeated reporting/follow-up copy and closing enquiry section; retained policy deadlines, insurer emergency guidance and claim qualifications. |
| Guides | Shorter heading; no duplicate introduction, repeated service navigation or generic closing enquiry block. |
| Checklist / Contact | Direct closing action and clearer enquiry labels; required-field and draft-only behaviour retained. |
| Privacy / 404 | Reviewed for palette/content consistency; removed filler text on 404. |

## Product-rail gap

At 1044 by 938 CSS pixels, the old pinned rail used 68vh cards (about 638px) plus 104px bottom padding. This left roughly 212px below the cards while scrolling. Pinned cards now fit the screen height below the header with 24px top/bottom breathing room. Track bottom padding is 24px. Horizontal ScrollTrigger motion remains; mobile still swipes and reduced-motion mode still uses stacked cards.

The original cinematic, rail HTML and animation JavaScript are unchanged. homepage.css has the specifically requested rail height/padding adjustment, so its earlier byte-identical preservation claim no longer applies.

## Evidence

- All 13 pages captured at 1440, 1044 and 390 CSS pixels: 39 layout checks with no overflow, missing images or JavaScript page errors. The intermediate width uses 0.9 DPR to match the owner's screenshot scale.
- About, Guides and Home recaptured at all three widths after the final fixes. Nine rail start/middle/end checks at 1440x1000, 1044x938 and 1044x600 confirm about 24px below cards, slide 03 at the end, and a normal transition into BenefitsCare. Mobile swipe reaches slide 03. Desktop/mobile resize unpins cleanly and recreates exactly one desktop rail pin.
- Product tabs, service stages, plan links, keyboard selection, no-JavaScript content, mobile navigation, contact prefill/required validation, guide checkboxes and print action checked. No enquiry sent.
- Automated axe-core WCAG A/AA checks returned zero violations on all 13 pages. This does not replace real-device or assistive-technology testing.
- Independent screenshot review found the two additional duplicate blocks; its final verdict confirmed those removals and the rail-spacing fix at the captured sizes. This is a scoped review, not owner acceptance.

Final build passed: 96 public files, 14 script syntax checks, 560 local references, redirects, sitemap and structured data.

Reports: brand-layout-report.json, brand-interaction-report.json, brand-accessibility-report.json and brand-rail-report.json. Private captures/reviewer notes: .impeccable/brand-review/.

Preview: http://127.0.0.1:3002/ and http://127.0.0.1:3002/about-us/. No production deployment or field SEO result is claimed.
