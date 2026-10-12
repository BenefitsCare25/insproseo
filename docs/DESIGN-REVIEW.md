> Historical review: the owner's subsequent screenshots exposed issues these scores missed. See [the current correction record](BRAND-CONTENT-REVIEW.md). These scores are not the current acceptance status.

# Page-by-page design review

3 October 2026. Two review rounds; all 13 pages now meet the requested 100/110 threshold. These are subjective internal design scores, not an external certification or owner approval.

## Results

| Page | Round 1 /110 | Round 2 /110 |
| --- | ---: | ---: |
| Home | 99 | 103 |
| Insurance solutions | 104 | 105 |
| BenefitsCare | 103 | 104 |
| Corporate employee benefits | 99 | 104 |
| Business insurance | 102 | 103 |
| Personal insurance | 101 | 104 |
| About | 99 | 104 |
| Claims support | 105 | 105 |
| Guides | 101 | 104 |
| Insurance review checklist | 104 | 105 |
| Contact | 105 | 105 |
| Privacy & security | 102 | 105 |
| 404 | 105 | 105 |

A material defect caps a page at 99. Round 1 found a missing service-tab active indicator on Home/Corporate and a mobile subject crop on About. Round 2 verified those fixes. It also checked looser typography, direct headlines, the rebuilt BenefitsCare comparison, image crops, guide reading order, privacy alignment and disclosure legibility.

## Rubric

Composition/hierarchy 25; typography 20; content/flow 20; interaction 15; responsiveness 15; accessibility 10; finishing 5. Category scores and remaining deductions are in [the scorecard](design-review-scorecard.json).

Two independent review groups inspected every page at desktop, intermediate and mobile widths. Main-agent browser checks covered 39 page/viewport combinations, 28 interaction/behavior records and 13 automated accessibility scans. Normal-motion screenshots also cover plan and service-tab states. All selected checks passed. [Verification details](VERIFICATION.md).

## Remaining minor deductions

- **Home:** Remaining minor costs are compact supplementary text, repeated employee-benefits information and a long mobile sequence. Interaction/a11y scores retain headroom because reviewer did not personally test assistive technology or alternate browsers.
- **Insurance solutions:** Large service images make mobile route selection a fairly long scan, and corporate-card title wraps over three lines. Generic closing invitation is less specific than page choices. No clipping or ambiguous card affordance observed.
- **BenefitsCare:** Three stacked mobile plan cards require sequential comparison, and the selection button is partly redundant alongside direct per-plan enquiry buttons. Qualifications remain relatively dense. None blocks comprehension or plan selection.
- **Corporate employee benefits:** Mobile hero has a three-line audience statement and separated secondary CTA, still legible. Explorer footnote is compact. Audience explorer and yearly-cycle content overlap slightly, but overall sequence remains clear.
- **Business insurance:** 390px two-column change-trigger cards have narrow body-copy measure. Explorer CTA retains only business intent rather than named risk subtype. These are minor efficiency/finish opportunities, not material blockers.
- **Personal insurance:** Selected Motor/Travel/Home context is not preserved beyond generic personal enquiry intent. Other-products prompt relies on adjacent/general contact actions. Composition and responsive family-image treatment are substantially improved.
- **About:** Large desktop date badge still takes substantial attention relative to the broker-service explanation; minor hierarchy preference only.
- **Claims support:** Introductory reporting instructions repeat step 01. Shorten either passage if refining copy.
- **Guides:** Headline and introductory sentence repeat insurance review; the illustrative checklist remains tall on mobile, but no longer obstructs the action.
- **Insurance review checklist:** Mobile section navigation and metadata are small relative to checklist text. This is a minor typography refinement.
- **Contact:** Sensitive-data helper text remains small. Prior source inspection found email autocomplete on an Email or phone field; not re-tested in this screenshot review.
- **Privacy & security:** Slightly generous spacing around the introduction; only a minor density preference. No material defect.
- **404:** Large 404 numeral receives more emphasis than recovery; both primary options remain readily available.

## Preview

[Home BenefitsCare](http://127.0.0.1:3002/#benefitscare) ? [Service cycle](http://127.0.0.1:3002/#how-we-help) ? [Insurance solutions](http://127.0.0.1:3002/services/)

The local server must remain running. No production deployment was performed. Screenshots and raw reviewer notes are private working evidence; they are not published with the website.
