# Homepage scroll story — employer and HR revision

The owner requested a rewrite of the animation's words on 3 October 2026 after finding the generic insurance-review story unhelpful. This explicitly supersedes the earlier restriction on changing homepage wording. Video, scroll length, scene timing, motion code and the product rail remain unchanged.

## Message plan

The audience is a business owner or HR lead considering employee benefits. The sequence recognises the pressure, explains relevant service capabilities and ends with a specific enquiry. It makes no savings, claims-approval or guaranteed workload-reduction promises.

| Scene | Headline | Job in the story |
| --- | --- | --- |
| 1 | Rising premiums. HR stretched thin? | Recognise budget and workload pressure immediately. |
| 2 | Still chasing claims and explaining cover? | Name the recurring work that consumes HR time. |
| 3 | Benefits, claims and panel care. One portal. | Introduce employee self-service; qualify programme-dependent features. |
| 4 | Get help with enrolment and claims follow-up. | Explain Inspro's human support alongside the portal. |
| 5 | Compare cover and costs before you renew. | Give the employer a concrete reason to start a review. |
| 6 | Make your next renewal count. | Invite action: share team size, renewal date and what is not working. |

Final action: **Review our employee benefits**, linking directly to `/contact-us/?intent=benefits`. The contact form offers both corporate employee benefits and BenefitsCare for SMEs; visitors can change the selected enquiry type. The static mobile/reduced-motion version summarises the same message and uses the same action. The scroll cue now says “See how Inspro can help.”

## Editing and verification

The words live in `site/index.html`. Unlike ordinary generated page bodies, `scripts/redesign-pages.mjs` reads and preserves the homepage story, static fallback and product rail from that file. Wording changes in this region survive page regeneration.

Browser evidence is private in `.impeccable/story-copy/`: six actual scroll frames at 1440×900, 1065×960 and 900×700; mobile fallback at 390×844; reduced-motion fallback at 1440×900. All 23 checks passed, including each final CTA arriving at the selected employee-benefits enquiry. No clipping, horizontal overflow or JavaScript errors were found. Syntax/reference validation passed.

This is a targeted content revision, not a conversion-performance measurement or a new whole-site score. Earlier byte-for-byte preservation reports describe the previous revision; the homepage words are now intentionally different under the owner's instruction.

Independent copy/visual review accepted the sequence and identified a low-contrast static audience label. Reusing the existing light story-label class resolved it; both mobile and reduced-motion fallback captures were rechecked and accepted. Animation styles/scripts, scene timing attributes and the product rail are unchanged. Regeneration was checked to retain the revised wording.
