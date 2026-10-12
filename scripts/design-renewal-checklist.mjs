import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pageByRoute, routes } from './seo/page-map.mjs';
import { escapeHtml } from './seo/content.mjs';
import { breadcrumbHtml } from './seo/schema.mjs';
import { guideArrow, renderGuidePage } from './design-guide-page.mjs';
import { renewalRouteGraphic } from './design-renewal-graphic.mjs';

const stages = [
  { id: 'documents', nav: 'Gather documents', title: 'Gather your documents.', intro: 'Start with what you already have. Keep the current terms and renewal information together.', items: [
    'Current policy schedules and benefit summaries', 'Renewal dates and recent premium breakdowns', 'Claims history and outstanding insurer correspondence',
  ] },
  { id: 'changes', nav: 'Record changes', title: 'Record what has changed.', intro: 'A renewal is a chance to check whether your cover still fits. Note the changes relevant to the policy you are reviewing.', items: [
    'Workforce size, roles and benefit priorities', 'Premises, equipment, activities or contracts', 'Family circumstances, vehicles or travel plans',
  ] },
  { id: 'compare', nav: 'Compare terms', title: 'Compare the detail.', intro: 'Use the same workforce, activities, dates and requested limits for each quotation. Record assumptions, excluded activities and information still outstanding.', items: [
    'Benefits, limits, sub-limits and excesses', 'Exclusions, waiting periods and eligibility', 'Provider access, claims process and administration',
  ] },
  { id: 'decide', nav: 'Confirm next steps', title: 'Confirm the next steps.', intro: 'Resolve the practical questions before cover begins, and make sure everyone knows what happens next.', items: [
    'Final terms, premium and effective dates', 'Enrolment or underwriting requirements', 'Claims contacts and employee communications',
  ] },
];

function comparison() {
  return `<div class="rc-comparison"><h3>Ask about cover, cost and service.</h3><dl>
    <div><dt>Cover</dt><dd>What is included, limited or excluded? Compare per-person, per-event and annual limits. Ask how excesses, co-payments and waiting periods affect a claim.</dd></div>
    <div><dt>Cost</dt><dd>What is the final premium and what would you pay when claiming? Separate the insurance premium, taxes and any stated fees.</dd></div>
    <div><dt>Service</dt><dd>Who handles enrolment, enquiries and claims follow-up? Confirm reporting requirements and the person responsible for administration.</dd></div>
  </dl></div>`;
}

function checklistStage(stage, index) {
  return `<section class="rc-stage-section" id="${stage.id}" aria-labelledby="${stage.id}-title">
    <div class="rc-stage-heading"><span class="rc-step" aria-hidden="true">0${index + 1}</span><h2 id="${stage.id}-title">${stage.title}</h2></div><p>${stage.intro}</p>
    <div class="rc-checks">${stage.items.map((item, itemIndex) => `<label class="rc-check" for="${stage.id}-${itemIndex}"><input type="checkbox" id="${stage.id}-${itemIndex}" autocomplete="off" data-renewal-check><span>${escapeHtml(item)}</span></label>`).join('')}</div>
    ${stage.id === 'compare' ? comparison() : ''}
  </section>`;
}

export function renewalChecklistBody() {
  const page = pageByRoute.get(routes.checklist);
  return `<header class="ga-hero"><div class="ga-shell">${breadcrumbHtml(page)}
    <div class="ga-hero-grid"><div class="ga-hero-copy"><h1>${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.intro)}</p><p class="ga-byline">Published by Inspro Insurance Brokers · Updated <time datetime="2026-10-10">10 October 2026</time></p></div>
      <figure class="rc-art" data-article-motion>${renewalRouteGraphic()}<figcaption>A clear brief starts with four practical steps.</figcaption></figure>
    </div>
  </div></header>
  <div class="ga-shell rc-workspace" id="explore-page">
    <aside class="rc-rail"><div class="rc-rail-inner">
      <nav aria-label="Checklist sections"><ol>${stages.map((stage, i) => `<li><a href="#${stage.id}"><span aria-hidden="true">0${i + 1}</span>${stage.nav}</a></li>`).join('')}</ol></nav>
      <div class="rc-progress" data-renewal-progress hidden><label for="renewal-progress">Your preparation</label><progress id="renewal-progress" max="12" value="0">0 of 12</progress><p data-renewal-count role="status" aria-live="polite" aria-atomic="true">0 of 12 items checked</p></div>
      <button class="ga-button ga-button--outline rc-print" type="button" data-print hidden><svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M7 8V3h10v5M7 17H4V8h16v9h-3M7 13h10v8H7zM17 10h1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Print checklist</button>
    </div></aside>
    <article class="rc-article"><p class="rc-use-note">Tick the items as you prepare. Progress is kept only while this page stays open. You can print a copy for your renewal discussion.</p>
      ${stages.map(checklistStage).join('')}<p class="ga-fine">General preparation guidance. Your policy wording and insurer’s terms determine your cover.</p>
    </article>
  </div>
  <section class="ga-next" id="next-reading"><div class="ga-shell ga-next-grid">
    <div><h2>Bring your questions to Inspro.</h2><p>Use your documents and outstanding questions to start the insurance review.</p><a class="ga-button" href="/contact-us/?intent=review" aria-label="Review your insurance with Inspro">Review${guideArrow}</a></div>
    <div class="ga-related"><h3>Reviewing employee cover?</h3><p>Understand how employee benefits, work injury and work-pass cover serve different purposes.</p><a class="ga-text-link" href="${routes.employerGuide}">Read the SME employee insurance guide${guideArrow}</a></div>
  </div></section>`;
}

export function renderRenewalChecklist(html) {
  return renderGuidePage(html, 'checklist', renewalChecklistBody(), { className: 'rc-page', style: 'renewal-checklist', script: 'renewal-checklist' });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const file = fileURLToPath(new URL('../site/guides/insurance-review-checklist/index.html', import.meta.url));
  await fs.writeFile(file, renderRenewalChecklist(await fs.readFile(file, 'utf8')));
  process.stdout.write('Redesigned the Insurance Renewal Checklist only.\n');
}
