# Interactive redesign record

**Later owner revisions, 9 October 2026:** removed the homepage three-card category block and only the visible “Explore what matters to you” heading. All five explorer chapters remain. Removed the exact imagery/policy sentence from all 28 footers. Build passed 126 files, 30 syntax checks and 1,877 references; SEO audit passed all 27 content pages. Regeneration did not restore the removed elements. Earlier content-preservation counts below describe the preceding redesign, before these requested removals.

Updated 9 October 2026 for the new local website at `http://127.0.0.1:3000/`. The intended future domain remains `www.inspro.com.sg`. This record covers the local design work; it does not report a deployment to the existing public site.

## What changed

All 28 public pages now use the shared burgundy, rose and white design system. Individual page plans shape the photographs, cover briefs, cards, comparisons, source references and next actions. The owner's screenshot references informed the structure: a photographic service gallery, a side-navigation content stage, layered cards, segmented choices and a searchable catalogue.

Twenty-four pages use a chapter explorer that presents one content section at a time. Desktop visitors choose from a numbered topic rail; mobile visitors swipe through topic chips. Previous and next controls provide a linear path. **Read all sections** reveals the complete reading sequence. The contact form, portal demonstration, guide library and error page keep their existing task-oriented interaction models with refreshed compositions.

GSAP animates chapter changes and selected scene entrances. These are finite, manually triggered transitions or one-time entrances. The existing GSAP and Motion libraries are reused; no new animation dependency was installed. LinkeDOM was added only for build-time manipulation of static HTML.

## Content, accessibility and protected scope

- The chapter explorer moves original sections rather than replacing their copy. All substantive text and links remain in the static source. Without JavaScript the source page remains continuously readable.
- Tab controls expose selected state and associated panels, use a single roving tab stop and support arrow keys, Home and End. Topic orientation changes to horizontal on smaller screens. Native disclosures remain available for supporting material and FAQs.
- Existing section IDs remain addressable. A link to content inside an inactive chapter activates that chapter. Print styles reveal all chapters. Full reading mode also supports continuous reading and browser text search across the page.
- New motion checks `prefers-reduced-motion`. The code bypasses scene entrances for that preference and finishes active animations when it changes. Browser emulation of that preference is a separate verification item, not implied by a source review.
- The protected homepage story, mobile/static fallback and product rail are outside the new motion root. The page remains longer than interior pages because those cinematic sections are retained.
- Insurance limits, eligibility, source references and qualifications remain authoritative. BenefitsCare S$2 / S$4 / S$6 starting figures require a quotation; they are not represented as complete policy premiums. Portal scenes remain illustrative samples. Contact forms prepare unsent email drafts.

## Saved browser evidence

The evidence directory is `outputs/interactive-redesign-20261009/`. The `round-2/` review records the photographic layout pass before the chapter-flow layer. Its 28 desktop entries report one H1, no horizontal page overflow, no duplicate main IDs and no broken loaded images. Those entries support the composition review and do not substitute for the later motion checks.

The current chapter-flow evidence is `motion-flow/reviews.json`, with accompanying viewport captures. It contains **56 entries: 28 desktop and 28 mobile**. All 24 chapter explorers were exercised through every outer chapter in both viewports; the four pages without an outer explorer were inspected in their initial layout. The recorded checks report one H1, no page overflow and one visible chapter after each selection. Earlier cumulative logs include GSAP missing-target warnings. Empty-target guards corrected the cause, and a fresh timestamp-filtered check across all four corporate-travel chapters returned no warnings or errors. Earlier evidence is retained rather than overwritten.

The [page ledger](PAGE-DESIGN-REVIEW.md) records coverage individually. A saved screenshot establishes that the view was captured; animation frames captured during a transition require a settled follow-up view for visual judgment. Browser-tool timeouts are not treated as website failures or successful checks.

## Targeted verification

Targeted browser results are saved in `motion-flow/interactions.json`. Checks passed for:

- All three BenefitsCare plan selections; only the selected mobile plan expands its detail; full reading mode reveals six sections and collapses to one.
- Keyboard Home / End / Right selection and focus, the `/services/#commercial` deep link, next-topic navigation and scrolling the selected mobile chip into view.
- Catalogue search returning five liability products, zero results for an unmatched query and all 19 products after clearing.
- All four corporate policy-year tabs, all four business-risk tabs and every portal role's feature controls: four employee features, two HR features and three Inspro features. The portal supporting disclosure opens.
- Four contact quick choices, required name and email validation, and a Premier-prefilled enquiry that prepares an unsent draft.
- A checklist selection retained across chapter changes, the visible Print control and an opening FAQ disclosure.

Code review prompted fixes for empty GSAP target arrays, cleanup of rapid chapter transitions, the current reduced-motion preference before scene animation, restoration of reading state after printing and scrolling the selected mobile chip into view. The focused console recheck after these corrections passed; accumulated warnings from the earlier review remain in the evidence file. The Print control was inspected without claiming a completed physical print or exported PDF.

## Final source validation

All final checks passed after the motion corrections:

| Check | Recorded result |
| --- | --- |
| `npm run build` | 126 site files, 30 script syntax checks and 1,883 local references passed |
| SEO audit | 27 content pages passed metadata, canonical, schema, entity, sitemap and reachability checks; 404 is excluded from content-page indexing |
| Repeated generation | Two `optimize:seo` runs left all 28 HTML files byte-identical before and after both runs |
| Substantive content | 988 of 988 baseline content units retained; all main-content links and baseline files retained |
| Search metadata | All 28 titles, descriptions, canonicals and semantic JSON-LD retained; three ItemLists were reordered only |
| Protected source | Homepage protected chunk and every original asset except the shared `tokens.css` remained byte-identical |

The integrity review accounts for three generic table headers intentionally removed when their two-column tables became question cards; substantive cell content remains. Evidence is saved in `content-integrity.json` and `regeneration.json` at the root of `outputs/interactive-redesign-20261009/`. These checks establish local source integrity and do not certify external indexing or hosted behavior.

## Review limits

The browser review used Chrome desktop and mobile viewports. Reduced-motion handling and print behavior were reviewed in code; OS/browser preference emulation and an actual print/export were not performed. This revision did not include a new cross-browser, assistive-technology or complete accessibility audit. The saved outer-topic checks and targeted interactions define the actual browser coverage.

Public-host routing, headers, domain configuration, actual email delivery and external indexing remain deployment-specific concerns described in `VERIFICATION.md`. Google and AI-platform rankings cannot be certified by a local visual review.

## Maintenance

Design values live in `site/assets/css/tokens.css`. Static compositions are generated by the modular `scripts/design-*.mjs` files. Runtime flow is isolated in `site/assets/js/content-flow.js` and `flow-motion.js`, with styles in `content-flow.css`. Refresh with `npm run design:refresh`, then use the supplied validation commands and review affected views in the browser. The prior public source is available under `.impeccable/interactive-redesign/before/` for comparison.
