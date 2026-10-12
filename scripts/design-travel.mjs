import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { escape, icon } from './design-content.mjs';
import { insurerLinks } from './insurance-catalogue.mjs';
import { pageByRoute } from './seo/page-map.mjs';
import { breadcrumbHtml, structuredData } from './seo/schema.mjs';
import { travelOptions, travelChecks, businessTravelChecks } from './travel-content.mjs';
import { travelHeroScene, travelQuoteScene, travelCheckScene, businessTravelScene } from './design-travel-scenes.mjs';

const version = '20261011-travel-1';
const route = '/service-details/personal/travel-insurance/';
const businessEnquiry = '/contact-us/?intent=business&topic=corporateTravel';
const arrow = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const action = (label, href, external = false) => `<a class="xp-link tr-action" href="${escape(href)}">${escape(label)}${external ? icon('arrow') : arrow}</a>`;
const section = (id, body) => `<section class="xp-section tr-section" id="${id}"><div class="xp-shell">${body}</div></section>`;
const heading = (title, description, aside = '', extra = '') => `<div class="tr-heading ${extra}"><div><h2>${title}</h2><p>${description}</p></div>${aside}</div>`;
const checks = (items, extra = '') => `<dl class="tr-checks ${extra}">${items.map(([title, description, symbol]) => `<div><dt><span class="tr-check-icon">${icon(symbol)}</span>${escape(title)}</dt><dd>${escape(description)}</dd></div>`).join('')}</dl>`;

function quotesSection() {
  return section('quotes', `${heading('Choose your travel cover.', 'Continue on the insurer’s website to compare plans and get a quote.', travelQuoteScene())}
    <div class="tr-quotes">${travelOptions.map(([name, description, label, key, symbol]) => `<article class="tr-quote"><span class="tr-quote-icon">${icon(symbol)}</span><div><h3>${escape(name)}</h3><p>${escape(description)}</p></div>${action(label, insurerLinks[key], true)}</article>`).join('')}</div>
    <p class="tr-note">The insurer confirms premiums, eligibility and policy terms. Cover starts only after acceptance, purchase and the confirmed effective date.</p>`);
}

function compareSection() {
  return section('compare', `${heading('Check the details before you go.', 'Match the policy to your itinerary and the people travelling.', travelCheckScene())}
    ${checks(travelChecks)}<p class="tr-note">Changed your plans? Confirm any policy update with the insurer. For an existing incident, <a href="/claims-support/">see claims support</a>.</p>`);
}

function businessSection() {
  return section('business-travel', `${heading('Travelling for work?', 'Arrange cover for employees and the work they do overseas.', action('Discuss business travel', businessEnquiry), 'tr-heading--action')}
    <div class="tr-business-layout">${businessTravelScene()}${checks(businessTravelChecks, 'tr-checks--business')}</div>`);
}

export function travelBody() {
  const page = pageByRoute.get(route);
  return `<section class="ds-hero ds-hero--reading tr-hero"><div class="xp-shell">${breadcrumbHtml(page)}
    <div class="tr-hero-grid"><div class="tr-hero-copy"><h1>${escape(page.h1)}</h1><p class="tr-hero-statement">For holidays and business.</p>
      <p>${escape(page.intro)}</p>
      <div class="tr-hero-actions"><a class="xp-button" href="#quotes">Personal quotes${arrow}</a>${action('Business travel', '#business-travel')}</div>
    </div>${travelHeroScene()}</div></div></section>
    <nav class="ds-section-nav" aria-label="On this page"><div class="xp-shell"><div class="ds-section-links">${[['quotes', 'Personal travel quotes'], ['compare', 'Before you buy'], ['business-travel', 'Business travel']].map(([id, label]) => `<a href="#${id}">${label}</a>`).join('')}</div></div></nav>
    ${quotesSection()}${compareSection()}${businessSection()}`;
}

export function renderTravel(html) {
  if (!/<main\b[^>]*>[\s\S]*?<\/main>/.test(html)) throw new Error('Travel Insurance main content is missing.');
  html = html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/, `<main id="main-content" class="experience ds-page ds-surface tr-page" data-design-page="travel" data-design-version="${version}">${travelBody()}</main>`);
  html = html.replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/, `<script type="application/ld+json">${structuredData(pageByRoute.get(route))}</script>`);
  for (const asset of ['travel', 'travel-scenes']) {
    html = html.replace(new RegExp(`<link[^>]+href="/assets/css/${asset}\\.css[^>]*>\\s*`, 'g'), '');
    html = html.replace('</head>', `<link rel="stylesheet" href="/assets/css/${asset}.css?v=${version}">\n</head>`);
  }
  html = html.replace(/<script[^>]+src="\/assets\/js\/travel-motion\.js[^>]*><\/script>\s*/g, '');
  return html.replace('</body>', `<script type="module" src="/assets/js/travel-motion.js?v=${version}"></script>\n</body>`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const file = fileURLToPath(new URL('../site/service-details/personal/travel-insurance/index.html', import.meta.url));
  await fs.writeFile(file, renderTravel(await fs.readFile(file, 'utf8')));
  process.stdout.write('Redesigned Travel Insurance only.\n');
}
