import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { escape, icon } from './design-content.mjs';
import { portalRoles, portalQuestions } from './design-portal-content.mjs';
import { portalScenes } from './design-portal-scenes.mjs';
import { pageByRoute } from './seo/page-map.mjs';
import { breadcrumbHtml, structuredData } from './seo/schema.mjs';

export const portalRoute = '/employee-benefits/portal/';
const version = '20261011-portal-5';
const walkthrough = '/contact-us/?intent=portal';
const action = (label, href, primary = false) => `<a class="${primary ? 'xp-button' : 'xp-link'} pt-action" href="${escape(href)}">${label}${icon('arrow')}</a>`;

function featurePanel(feature, role) {
  return `<article class="pt-feature-panel" id="feature-${feature.id}" data-feature="${feature.id}">
    <div class="pt-demo" data-motion-graphic><div class="pt-demo-bar"><h3>${escape(feature.label)}</h3></div>
      <div class="pt-scene pt-scene--${feature.id}" data-scene="${feature.id}">${portalScenes[feature.id]()}</div>
    </div><a class="pt-static-role-link" href="#role-${role.id}">Back to ${escape(role.label)}</a>
  </article>`;
}

function rolePanel(role) {
  return `<section class="pt-role-panel" id="role-${role.id}" data-portal-role="${role.id}"><h2 class="pt-static-role-heading">${escape(role.label)}</h2>
    <div class="pt-feature-panels">${role.features.map(feature => featurePanel(feature, role)).join('')}</div>
  </section>`;
}

function roleMenu(role) {
  return `<div class="pt-role-menu" data-role-menu="${role.id}"><h2 class="pt-static-role-heading">${escape(role.label)}</h2><div class="pt-feature-menu" aria-label="${escape(role.label)} features">${role.features.map(feature => `<a href="#feature-${feature.id}" class="pt-feature-trigger" id="feature-tab-${feature.id}" data-feature-target="${feature.id}">${icon(feature.icon)}<span>${escape(feature.label)}</span><span class="pt-feature-arrow" aria-hidden="true">${icon('arrow')}</span></a>`).join('')}</div></div>`;
}

function exhibit() {
  return `<section class="pt-exhibit xp-shell" id="explore" aria-label="Portal preview">
    <div class="pt-app-shell"><aside class="pt-sidebar" aria-label="Portal features">${portalRoles.map(roleMenu).join('')}</aside><div class="pt-main"><div class="pt-workbench-header"><h2 data-portal-heading>Cover &amp; balances</h2><div class="pt-role-tabs pt-enhanced-control" aria-label="Portal roles">${portalRoles.map(role => `<button type="button" class="pt-role-trigger" id="role-tab-${role.id}" data-role-target="${role.id}">${icon(role.icon)}<span>${escape(role.label)}</span></button>`).join('')}</div></div><div class="pt-role-panels">${portalRoles.map(rolePanel).join('')}</div></div></div>
  </section>`;
}

function programmeAndAnswers() {
  return `<section class="pt-programme-section" id="programme"><div class="xp-shell pt-programme-grid"><div class="pt-programme-copy"><h2>Benefit programmes</h2>
    <div class="pt-programme-link"><h3>BenefitsCare for SME</h3><p>Explore Starter, Flex and Premier for smaller teams.</p>${action('Explore BenefitsCare for SME', '/employee-benefits/benefitscare/')}</div>
    <div class="pt-programme-link"><h3>Employee Benefits (Life &amp; Medical)</h3><p>Discuss a customised programme for your workforce.</p>${action('Explore employee benefits', '/service-details/commercial/employees-benefits/')}</div>
    <p class="pt-member-help"><strong>Already a member?</strong> Use the sign-in link supplied by your employer. ${action('Get access help', walkthrough)}</p>
    </div><div class="pt-answers"><h2>Portal questions</h2><div class="xp-faq pt-faq">${portalQuestions.map(([question, answer], i) => `<details name="portal-questions"${i === 0 ? ' open' : ''}><summary>${escape(question)}<span aria-hidden="true">+</span></summary><div class="xp-faq-answer"><p>${escape(answer)}${i === 4 ? ' <a href="/claims-support/">See Claims Support</a>.' : ''}</p></div></details>`).join('')}</div></div></div></section>`;
}

export function portalBody() {
  const page = pageByRoute.get(portalRoute);
  return `<section class="pt-hero xp-shell">${breadcrumbHtml(page)}<div class="pt-hero-grid"><h1>Employee benefits.<br> <span>One connected portal.</span></h1><div class="pt-hero-copy"><p>${escape(page.intro)}</p>${action('Request a walkthrough', walkthrough, true)}</div></div></section>
    ${exhibit()}${programmeAndAnswers()}
    <section class="pt-close xp-shell"><h2>See how it fits your team.</h2>${action('Request a walkthrough', walkthrough, true)}</section>`;
}

function portalSchema() {
  const graph = JSON.parse(structuredData(pageByRoute.get(portalRoute)));
  const page = graph['@graph'].find(node => node['@type'] === 'WebPage');
  page.hasPart = portalRoles.flatMap(role => role.features.map(feature => ({
    '@type': 'WebPageElement', '@id': `https://www.inspro.com.sg${portalRoute}#feature-${feature.id}`,
    name: feature.label,
    isPartOf: { '@id': page['@id'] },
  })));
  return JSON.stringify(graph).replaceAll('<', '\\u003c');
}

export function renderPortal(html) {
  if (!/<main\b[^>]*>[\s\S]*?<\/main>/.test(html)) throw new Error('Portal Preview main content is missing.');
  html = html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/, `<main id="main-content" class="experience ds-page pt-page" data-design-page="portal-preview" data-design-version="${version}">${portalBody()}</main>`);
  html = html.replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/, `<script type="application/ld+json">${portalSchema()}</script>`);
  for (const asset of ['portal-showcase', 'content-flow', 'navigator-cards', 'card-content', 'portal-tour', 'portal-tour-scenes', 'portal-tour-admin', 'portal-tour-workflows', 'portal-tour-care', 'portal-tour-sequences']) {
    html = html.replace(new RegExp(`<link[^>]+href="/assets/css/${asset}\\.css[^>]*>\\s*`, 'g'), '');
  }
  html = html.replace('</head>', ['portal-tour', 'portal-tour-scenes', 'portal-tour-admin', 'portal-tour-workflows', 'portal-tour-care', 'portal-tour-sequences'].map(asset => `<link rel="stylesheet" href="/assets/css/${asset}.css?v=${version}">`).join('\n') + '\n</head>');
  html = html.replace(/<script[^>]+src="\/assets\/(?:js\/(?:experience-ui|experience-motion|content-flow|portal-tour)|vendor\/(?:gsap-[^"?]+|ScrollTrigger-[^"?]+))\.js[^>]*><\/script>\s*/g, '');
  return html.replace('</body>', `<script type="module" src="/assets/js/portal-tour.js?v=${version}"></script>\n</body>`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const file = fileURLToPath(new URL('../site/employee-benefits/portal/index.html', import.meta.url));
  await fs.writeFile(file, renderPortal(await fs.readFile(file, 'utf8')));
  process.stdout.write('Redesigned Portal Preview only.\n');
}
