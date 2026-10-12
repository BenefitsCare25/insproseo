# Public website content gap audit

Implementation update: the essential product routes and catalogue entries identified here were restored later on 3 October 2026. See [the restoration and verification report](CATALOGUE-RESTORATION-VERIFICATION.md). The audit below records the pre-restoration findings. The owner subsequently confirmed the category names Employee Benefits, Business Insurance and Personal Insurance; that naming supersedes the proposed audience labels below.

Checked 3 October 2026 against the existing public Inspro website and the local redesign at http://127.0.0.1:3002/. This is an audit and restoration plan; no public page or insurer integration was changed.

The redesign compressed the product catalogue too far. General categories survived, but several specific products, dedicated landing pages and insurer referral routes did not. Previous visual/interaction scores did not establish catalogue completeness and must not be treated as launch acceptance.

## Confirmed gaps

| Area | Public website evidence | Current local experience | Priority / proposed correction |
| --- | --- | --- | --- |
| Travel | [Dedicated page](https://www.inspro.com.sg/service-details/personal/travel-insurance/) promotes FWD, MSIG TravelEasy and TravelEasy Pre-Ex, with insurer referral links and single-trip/annual choices. | A generic Travel tab leads to a personal enquiry. No insurer links, promotion route, annual-trip explanation or pre-existing-condition option. Old URL redirects to the tab. | P1: restore a dedicated travel page, prominent navigation access and an ordinary homepage promotion section outside the animation. Offer insurer quote routes and a separate advice enquiry. |
| Other personal products | [Personal catalogue](https://www.inspro.com.sg/service-details/personal/view-personal-insurance-products/) names eight products. [Motor](https://www.inspro.com.sg/service-details/personal/motor-insurance/), [home](https://www.inspro.com.sg/service-details/personal/home-insurance/), [personal accident](https://www.inspro.com.sg/service-details/personal/personal-accident-insurance/) and [maid](https://www.inspro.com.sg/service-details/personal/maid-insurance/) pages include FWD referral links. | Motor/home remain as brief tabs; personal accident/domestic helper have a shared one-line mention. Golf, art collections and pleasure craft are absent. All four FWD routes are missing. | P1 for lost referral routes; P2 for specialist catalogue entries and product-specific enquiries. Restore useful detail without copying outdated policy wording. |
| Employer protection | [Commercial catalogue](https://www.inspro.com.sg/service-details/commercial/view-commercial-insurance-products/) includes foreign-worker medical cover, worker bonds and corporate travel. | These are not identifiable offerings. Both former foreign-worker URLs redirect to a generic commercial section. | P1: dedicated foreign-worker medical and bonds destinations; business-travel route linked from employer cover. |
| Specialist commercial cover | The same public catalogue identifies marine, trade-credit, fleet, management/professional liability and technology-related risks, alongside construction and other commercial products. | Four broad tabs retain property, interruption, work injury and liability themes. Goods/transit and professional risks are generic; specialist scope is not discoverable. | P2: restore a complete grouped directory, with specific cover names and topic-preserving enquiry links. Do not create a thin page for every catalogue entry. |
| Industry packages | [Business package page](https://www.inspro.com.sg/service-details/commercial/commercialoffice-package/) addresses offices, retailers, food businesses, light industry, clinics and education. | Generic business explorer; visitors cannot choose their industry. Some named package sections, such as cash loss and employee dishonesty, have disappeared. | P2: industry shortcuts, relevant scenarios and a package enquiry with industry prefilled. Reconfirm numerical limits before publication. |
| Benefits service detail | [Employee benefits page](https://www.inspro.com.sg/service-details/commercial/employees-benefits/) describes staff briefings, onboarding/renewal communications, emergency support and hospital-admission assistance. | Main cover families, flexible benefits, administration and portals remain. Staff briefings and communications are not explicit. | P2: restore evidence-backed service explanations. Emergency hours, admission assistance and service commitments require current operational confirmation; do not promise them solely because the old page did. |

## Travel referral verification

Fresh headless Chrome checks loaded these destinations on 3 October 2026. No applicant details were entered, eligibility questions answered, forms submitted or policies purchased.

| Existing public referral | Observed result | Restoration implication |
| --- | --- | --- |
| [FWD / INSPRO](https://www.fwd.com.sg/?utm_source=Inspro&utm_medium=Broker&utm_campaign=Inspro&promo=INSPRO) | HTTP 200; FWD homepage, with the original campaign parameters retained in its URL. | Restore only with an accurate destination label. A product-specific tracked link would reduce extra navigation, but must be verified before substitution. |
| [MSIG TravelEasy](https://e-insure2.msig.sg/cp/product/broker/TRAVEL/TRNamedTravelEasyV1?act=new&producerRef=INSPRO) | HTTP 200; quote screen with trip/cover choices. Final URL retains `producerRef=INSPRO`. | Appropriate existing quote entry point. |
| [MSIG TravelEasy Pre-Ex](https://e-insure2.msig.sg/cp/product/broker/TRAVEL/TRNamedTravelEasyPreExV1?act=new&producerRef=INSPRO) | HTTP 200; eligibility questionnaire. Final URL retains `producerRef=INSPRO`. | Explain that eligibility and policy conditions apply; keep separate from the standard route. |

A cached search fetch showed an MSIG maintenance page; the fresh browser checks above supersede it for this audit. Link availability does not prove end-to-end purchase completion, referral attribution or any discount. No current INSPRO discount percentage or expiry was verified. Do not invent a promotional price or saving.

## Recommended content structure

Keep the employer/HR homepage story. Add clear entry points around it:

- **For employers:** BenefitsCare, corporate benefits, work injury, foreign-worker protection, corporate travel and portal support.
- **For businesses:** industry packages and a complete commercial directory, including specialist risks.
- **For individuals:** travel first, followed by motor, home, domestic helper, personal accident and specialist personal cover.
- **Travel journey:** direct navigation or homepage promotion → dedicated travel page → trip frequency and relevant needs → clearly labelled insurer quote options or Inspro advice.

Restore the useful existing product URLs rather than redirecting every specific intent to a general page. Keep the enquiry topic when visitors ask for advice. Update navigation, sitemap, page metadata and redirects together. For future campaign measurement, distinguish insurer-link clicks from enquiries and completed purchases; an outbound click is not a confirmed sale.

## Old content that needs correction, not automatic restoration

- The [old foreign-worker medical page](https://www.inspro.com.sg/service-details/commercial/foreign-worker-medical-insurance/) states a S$15,000 annual minimum. [MOM's current requirements](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/medical-insurance) state at least S$60,000 per year for each Work Permit holder, with enhanced requirements implemented in stages. Any replacement must be written against current requirements and the actual product.
- Broad travel assurances about all ages or unlimited benefits need current insurer policy support. Old package limits and benefits schedules are not approved current quotations.
- Keep the portal capability boundaries in PRODUCT.md and PORTAL-FEATURE-AUDIT.md. Old public claims about HR access, reports, round-the-clock help, free services or settlement outcomes do not override verified implementation or agreed service scope.
- The old public footer has a mismatched `telto:` link and placeholder social link. These are defects, not features to restore.
- The public Contact page inspected displayed contact information and no HTML form. There is no evidence from this audit that an old online delivery service was lost. The local form still prepares an email draft only; actual automatic lead delivery remains a separately scoped integration.

## Evidence and limits

Local source: `src/experience.jsx`, `scripts/redesign-pages.mjs`, `scripts/lead-flow.mjs`, `site/_redirects`, all current sitemap destinations, PRODUCT.md and portal documentation. Live local checks confirmed home HTTP 200, the travel URL's 301 to the personal tab, and both foreign-worker URLs' 301 to `/services/#commercial`.

Private evidence is in `.impeccable/public-site-audit/`: `live-inventory.json`, public-page HTML/screenshots, `link-verification.json` and `local-routes.json`. Public catalogue evidence establishes what the old site markets, not insurer appointment validity or present underwriting availability. Search results were supplemented by fresh browser inspection, including the personal catalogue, maid, bonds and insurer pages that the search reader could not reliably retrieve.

Completion of the redesign now requires closing the P1 gaps and reviewing the P2 catalogue omissions. The existing visual and interaction checks remain useful but do not resolve these commercial content findings.
