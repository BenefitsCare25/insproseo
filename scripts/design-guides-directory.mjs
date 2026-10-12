import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pageByRoute, routes } from './seo/page-map.mjs';
import { escapeHtml } from './seo/content.mjs';
import { breadcrumbHtml, structuredData } from './seo/schema.mjs';
import { renewalGraphic, employeeGraphic } from './design-guide-graphics.mjs';

const version = '20261010-directory-2';
const arrow = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function illustration(kind, graphic, caption) {
  return `<figure class="gd-art gd-art--${kind}" data-guide-motion="${kind}">
    ${graphic}
    <figcaption>${caption}</figcaption>
  </figure>`;
}

export function guidesDirectoryBody() {
  const page = pageByRoute.get(routes.guides);
  return `<header class="gd-intro"><div class="gd-shell">
    ${breadcrumbHtml(page)}
    <div class="gd-intro-grid"><h1>${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.intro)}</p></div>
  </div></header>
  <div class="gd-library" id="explore-page">
    <section class="gd-feature gd-feature--renewal" id="page-section-1" aria-labelledby="renewal-guide-title">
      <div class="gd-shell gd-feature-grid">
        <div class="gd-copy">
          <h2 id="renewal-guide-title">Insurance review &amp;<br>renewal checklist.</h2>
          <p>A little preparation makes the next conversation clearer. Know what to gather, what to compare and what to ask before renewal.</p>
          <ul class="gd-topics"><li>Policy documents and renewal dates</li><li>Changes to your people or business</li><li>Limits, exclusions and the next steps</li></ul>
          <a class="gd-read" href="${routes.checklist}">Read the checklist${arrow}</a>
        </div>
        ${illustration('renewal', renewalGraphic(), 'Four steps before renewal.')}
      </div>
    </section>
    <section class="gd-feature gd-feature--employee" id="page-section-2" aria-labelledby="employee-guide-title">
      <div class="gd-shell gd-feature-grid">
        <div class="gd-copy">
          <h2 id="employee-guide-title">SME employee<br>insurance guide.</h2>
          <p>Start with the purpose of each cover. Understand how employee benefits, work injury and work-pass cover fit into your insurance decisions.</p>
          <ul class="gd-topics"><li>Four cover categories, explained</li><li>Questions about your workforce</li><li>What to prepare for a quotation</li></ul>
          <a class="gd-read" href="${routes.employerGuide}">Read the SME guide${arrow}</a>
        </div>
        ${illustration('employee', employeeGraphic(), 'Different cover. Different purposes.')}
      </div>
    </section>
  </div>
  <section class="gd-contact" id="next-reading" aria-labelledby="guide-contact-title"><div class="gd-shell gd-contact-row">
    <div><h2 id="guide-contact-title">Ready to discuss your cover?</h2><p>Bring your questions to Inspro. We’ll help you work through the next step.</p></div>
    <a class="gd-review" href="/contact-us/?intent=review" aria-label="Review your insurance with Inspro">Review${arrow}</a>
  </div></section>`;
}

export function renderGuidesDirectory(html) {
  if (!/<main\b[^>]*>[\s\S]*?<\/main>/.test(html)) throw new Error('Insurance Guides directory is missing its main element.');
  const main = `<main id="main-content" class="experience ds-page ds-surface gd-page" data-design-page="guides" data-design-version="${version}" data-composition="guide-directory">${guidesDirectoryBody()}</main>`;
  const page = pageByRoute.get(routes.guides);
  html = html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/, main)
    .replace(/<link[^>]+href="\/assets\/css\/guides-directory\.css[^>]*>\s*/g, '')
    .replace(/<script[^>]+src="\/assets\/js\/guides-directory\.js[^>]*><\/script>\s*/g, '')
    .replace('</head>', `<link rel="stylesheet" href="/assets/css/guides-directory.css?v=${version}">\n</head>`)
    .replace('</body>', `<script type="module" src="/assets/js/guides-directory.js?v=${version}"></script>\n</body>`)
    .replace(/(<meta (?:name="(?:description|twitter:description)"|property="og:description") content=")[^"]*(">)/g, `$1${escapeHtml(page.description)}$2`);
  return html.replace(/(<script type="application\/ld\+json">)[\s\S]*?(<\/script>)/, (_,start,end) => `${start}${structuredData(page, [routes.checklist, routes.employerGuide])}${end}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const file = fileURLToPath(new URL('../site/guides/index.html', import.meta.url));
  await fs.writeFile(file, renderGuidesDirectory(await fs.readFile(file, 'utf8')));
  process.stdout.write('Redesigned the Insurance Guides directory only.\n');
}
