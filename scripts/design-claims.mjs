import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { escape } from './design-content.mjs';
import { pageByRoute } from './seo/page-map.mjs';
import { breadcrumbHtml, structuredData } from './seo/schema.mjs';
import { claimContacts, claimSteps, programmeGuidance, claimQuestions, portalPreview } from './design-claims-content.mjs';
import { claimSymbol, claimsHeroScene, claimsStepsScene, claimsProgrammeScene, claimsQuestionsScene } from './design-claims-scenes.mjs';
import { normaliseNavigation } from './navigation-labels.mjs';

const version = '20261011-claims-4';
const route = '/claims-support/';
const arrow = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const chevron = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const action = (label, href) => `<a class="cl-action" href="${escape(href)}">${escape(label)}${arrow}</a>`;
const section = (number, body) => `<section class="xp-section cl-section" id="page-section-${number}"><div class="xp-shell">${body}</div></section>`;
const heading = (title, description, aside = '') => `<div class="cl-heading"><div><h2>${title}</h2><p>${description}</p></div>${aside}</div>`;
const guidance = items => `<dl class="cl-guidance">${items.map(([title, description, symbol]) => `<div><dt><span class="cl-guidance-icon">${claimSymbol(symbol)}</span>${escape(title)}</dt><dd>${escape(description)}</dd></div>`).join('')}</dl>`;

function firstSteps() {
  return section(1, `${heading('What to do first.', 'Keep the policy, the incident and your next step together.', action('Get Support', '/contact-us/?intent=claims'))}
    <div class="cl-steps-layout">${claimsStepsScene()}${guidance(claimSteps)}</div>`);
}

function benefitsProgramme() {
  return section(2, `${heading('On an Inspro benefits programme?', 'Start with the claim channel confirmed for your cover.', action('Preview Portal Claims', portalPreview))}
    <div class="cl-programme-layout">${claimsProgrammeScene()}${guidance(programmeGuidance)}</div>`);
}

function commonQuestions() {
  return section(3, `${heading('Common claim questions.', 'Know where to share documents and who assesses your claim.', claimsQuestionsScene())}
    <div class="xp-faq cl-questions">${claimQuestions.map(([question, answer]) => `<details open><summary>${escape(question)}${chevron}</summary><p>${escape(answer)}</p></details>`).join('')}</div>`);
}

export function claimsBody() {
  const page = pageByRoute.get(route);
  return `<section class="ds-hero ds-hero--reading cl-hero"><div class="xp-shell">${breadcrumbHtml(page)}
    <div class="cl-hero-grid"><div class="cl-hero-copy"><h1>${escape(page.h1)}</h1><p class="cl-hero-statement">A clearer next step for your claim.</p><p>${escape(page.intro)}</p>
      <div class="cl-hero-actions"><a class="xp-button" href="${escape(claimContacts.phone.href)}">${claimSymbol('phone')}Call ${escape(claimContacts.phone.text)}</a>${action('Email Our Team', claimContacts.email.href)}</div>
      <p class="cl-print-contact">Call <a href="${escape(claimContacts.phone.href)}">${escape(claimContacts.phone.text)}</a> or email <a href="${escape(claimContacts.email.href)}">${escape(claimContacts.email.text)}</a>.</p>
    </div>${claimsHeroScene()}</div></div></section>
    <nav class="ds-section-nav" aria-label="On this page"><div class="xp-shell"><div class="ds-section-links">${['What To Do First', 'Benefits Programme', 'Common Questions'].map((label, index) => `<a href="#page-section-${index + 1}">${label}</a>`).join('')}</div></div></nav>
    ${firstSteps()}${benefitsProgramme()}${commonQuestions()}`;
}

export function renderClaims(html) {
  if (!/<main\b[^>]*>[\s\S]*?<\/main>/.test(html)) throw new Error('Claims Support main content is missing.');
  html = html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/, `<main id="main-content" class="experience ds-page ds-surface cl-page" data-design-page="claims" data-design-version="${version}">${claimsBody()}</main>`);
  html = html.replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/, `<script type="application/ld+json">${structuredData(pageByRoute.get(route))}</script>`);
  for (const asset of ['claims', 'claims-scenes']) {
    html = html.replace(new RegExp(`<link[^>]+href="/assets/css/${asset}\\.css[^>]*>\\s*`, 'g'), '');
    html = html.replace('</head>', `<link rel="stylesheet" href="/assets/css/${asset}.css?v=${version}">\n</head>`);
  }
  html = html.replace(/<script[^>]+src="\/assets\/js\/claims-motion\.js[^>]*><\/script>\s*/g, '');
  return normaliseNavigation(html.replace('</body>', `<script type="module" src="/assets/js/claims-motion.js?v=${version}"></script>\n</body>`));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const file = fileURLToPath(new URL('../site/claims-support/index.html', import.meta.url));
  await fs.writeFile(file, renderClaims(await fs.readFile(file, 'utf8')));
  process.stdout.write('Redesigned Claims Support only.\n');
}
