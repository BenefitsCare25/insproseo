import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pageByRoute, routes } from './seo/page-map.mjs';
import { escapeHtml } from './seo/content.mjs';
import { breadcrumbHtml } from './seo/schema.mjs';
import { guideArrow, renderGuidePage } from './design-guide-page.mjs';
import { employeeCovers, quotationBrief, employerQuestions, guideSections, employeeProductLinks } from './design-sme-guide-content.mjs';
import { employeeWorkforceGraphic } from './design-sme-guide-graphic.mjs';

const inlineLink = ([label, href]) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;

function coverRow(cover) {
  return `<article class="sg-cover-row" id="${cover.id}" aria-labelledby="${cover.id}-title">
    <div class="sg-cover-heading"><h3 id="${cover.id}-title">${escapeHtml(cover.title)}</h3><p>${escapeHtml(cover.purpose)}</p></div>
    <div class="sg-cover-detail"><p>${escapeHtml(cover.detail)}</p><dl>
      <div><dt>Your workforce</dt><dd>${escapeHtml(cover.workforce)}</dd></div>
      <div><dt>Before you quote</dt><dd>${escapeHtml(cover.prepare)}</dd></div>
    </dl>${cover.sources.length ? `<p class="sg-sources">${cover.sources.map(inlineLink).join('<span aria-hidden="true"> · </span>')}</p>` : ''}</div>
  </article>`;
}

function quotationSection() {
  return `<section class="sg-brief" id="quotation-brief" aria-labelledby="quotation-title"><div class="ga-shell sg-reading-grid">
    <div><h2 id="quotation-title">Build a quotation brief HR can maintain.</h2><p class="sg-section-intro">A clear workforce overview and a few practical priorities give the review a useful starting point.</p></div>
    <div><dl class="sg-brief-list">${quotationBrief.map(([title, detail]) => `<div><dt>${escapeHtml(title)}</dt><dd>${escapeHtml(detail)}</dd></div>`).join('')}</dl>
      <p class="sg-products">For a structured SME starting point, compare ${inlineLink(employeeProductLinks[0])}. For tailored benefits and administration, discuss ${inlineLink(employeeProductLinks[1])}.</p>
    </div>
  </div></section>`;
}

function questionsSection() {
  return `<section class="sg-questions" id="employer-questions" aria-labelledby="questions-title"><div class="ga-shell sg-reading-grid">
    <h2 id="questions-title">Questions employers often need to resolve.</h2>
    <div class="sg-faq">${employerQuestions.map(([question, answer], i) => `<details${i === 0 ? ' open' : ''}><summary>${escapeHtml(question)}<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary><p>${escapeHtml(answer)}</p></details>`).join('')}</div>
  </div></section>`;
}

export function smeEmployeeGuideBody() {
  const page = pageByRoute.get(routes.employerGuide);
  return `<header class="ga-hero"><div class="ga-shell">${breadcrumbHtml(page)}
    <div class="ga-hero-grid"><div class="ga-hero-copy"><h1>${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.intro)}</p><p class="ga-byline">Published by Inspro Insurance Brokers · Updated <time datetime="2026-10-10">10 October 2026</time></p></div>
      <figure class="sg-art" data-article-motion>${employeeWorkforceGraphic()}<figcaption>Match each cover to your workforce and its purpose.</figcaption></figure>
    </div>
  </div></header>
  <div class="ga-shell sg-navigation" id="explore-page"><nav aria-label="Employee insurance guide sections"><ul>${guideSections.map(([id, label]) => `<li><a href="#${id}">${escapeHtml(label)}${guideArrow}</a></li>`).join('')}</ul></nav></div>
  <section class="sg-covers" id="comparison" aria-labelledby="covers-title"><div class="ga-shell">
    <div class="sg-section-heading"><h2 id="covers-title">Each cover has a different job.</h2><p>Buying one does not automatically meet the requirements of the others. Start with your employees’ actual duties, pass types and employment arrangements.</p></div>
    <div class="sg-cover-list">${employeeCovers.map(coverRow).join('')}</div>
    <p class="ga-fine sg-source-date">MOM sources checked <time datetime="2026-10-10">10 October 2026</time>. Use the linked requirements when reviewing your workforce and proposed policies.</p>
  </div></section>
  ${quotationSection()}${questionsSection()}
  <section class="ga-next" id="next-reading"><div class="ga-shell ga-next-grid">
    <div><h2>Review your employee cover.</h2><p>Tell Inspro your workforce size, business activities and preferred start or renewal date. We’ll help clarify the next information to prepare.</p><a class="ga-button" href="/contact-us/?intent=benefits&amp;topic=review" aria-label="Review employee insurance with Inspro">Review${guideArrow}</a></div>
    <div class="ga-related"><h3>Preparing for renewal?</h3><p>Gather policy documents, record changes and compare quotations with a practical four-step checklist.</p><a class="ga-text-link" href="${routes.checklist}">Read the insurance renewal checklist${guideArrow}</a></div>
    <p class="ga-fine sg-cover-note">General insurance information. Availability, eligibility, benefits and exclusions depend on the insurer and policy. A quotation or enquiry does not activate cover.</p>
  </div></section>`;
}

export function renderSmeEmployeeGuide(html) {
  return renderGuidePage(html, 'employerGuide', smeEmployeeGuideBody(), { className: 'sg-page', style: 'sme-employee-guide' });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const file = fileURLToPath(new URL('../site/guides/sme-employee-insurance-singapore/index.html', import.meta.url));
  await fs.writeFile(file, renderSmeEmployeeGuide(await fs.readFile(file, 'utf8')));
  process.stdout.write('Redesigned the SME Employee Insurance Guide only.\n');
}
