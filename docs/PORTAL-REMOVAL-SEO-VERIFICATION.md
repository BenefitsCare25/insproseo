# Portal Preview retirement — 12 October 2026

The standalone Portal Preview page is removed. The old URL returns a real 404;
there is no replacement preview or redirect to unrelated content. Header/footer
links, homepage demonstrations, claims preview links, the contact walkthrough
option, sitemap entry and optional content-directory entry are removed.

The homepage now explains policy administration and claims support for employees
and HR teams. Its actions lead to the benefits enquiry and Claims Support pages.
Claims Support directs visitors to the team rather than a sample portal. Existing
members still follow their employer's actual claim channel. The generation sources
use the same replacements; a private 13-page regeneration did not restore the page.

The favicon uses the owner's `inspro logo only.png`, preserved byte-for-byte in
`site/assets/images/inspro-site-icon.png`. A square SVG frame embeds that exact
bitmap and brings the symbol into view at tab size. All remaining HTML pages use
the same versioned icon URL. No replacement artwork was generated.

## SEO, GEO and AEO scope

Build passes **154 public files, 87 syntax checks and 913 local references**.
The SEO audit reports **13 pages, zero failures and zero warnings**. Browser checks
on all 13 desktop pages show no retired links/labels, horizontal overflow or console
errors. Targeted mobile Home/Contact checks pass, and an old contact `intent=portal`
query resolves to benefits support without restoring the removed walkthrough option.
The supplied bitmap and the SVG's embedded bitmap have identical SHA-256 values.
GitHub Actions now runs the SEO audit as well as the build before deploying.

- All 13 content pages pass the supplied SEO audit: unique titles/descriptions,
  canonical and social metadata, one H1, heading hierarchy, business identity,
  visible and structured breadcrumbs, appropriate Service/Article/CollectionPage
  markup, image attributes, sitemap membership and internal-link reachability.
- There are no links to the retired URL in the public HTML or JavaScript, and it
  is absent from the sitemap and optional `llms.txt` directory.
- The replacement content is native HTML with clear audience labels, concrete
  preparation steps, relevant links and qualified policy/claim statements. Existing
  visible questions and answers remain available without relying on a preview.
- Business entity details, Singapore address, phone/email and MAS verification
  references remain consistent. Structured catalogue fragments resolve to actual
  HTML IDs. Structured data describes the current visible content.

This follows [Google's AI features guidance](https://developers.google.com/search/docs/appearance/ai-features)
and its [removed-page guidance](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors).
There is no special AI schema or invented testimonial, eligibility or service claim.

Canonicals remain on `https://www.inspro.com.sg`; custom-domain DNS has not yet
been switched from the existing website. Source audits and browser checks do not
establish live indexing, ranking, AI citations or field Core Web Vitals results.
The website still prepares email drafts rather than delivering enquiries.
