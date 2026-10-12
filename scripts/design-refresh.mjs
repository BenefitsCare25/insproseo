import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';
import { escape, icon, photo, profileFor, topicIcon, visualPanel } from './design-content.mjs';
import { composePages, reconcileCompositions } from './design-compositions.mjs';
import { applyPageStrategy, navigationLabels } from './design-page-strategies.mjs';
import { cleanContent, removeRedundantActions } from './design-content-cleanup.mjs';

import { writeNavigatorIcons } from './design-navigators.mjs';
import { leadNavigation } from './lead-flow.mjs';
import { pageByRoute } from './seo/page-map.mjs';
import { breadcrumbHtml } from './seo/schema.mjs';
import { applyProductReviews, retireGuidePages } from './product-reviews.mjs';
import { travelRoute } from './product-review-routes.mjs';
import { renderGuidesDirectory } from './design-guides-directory.mjs';
import { renderRenewalChecklist } from './design-renewal-checklist.mjs';
import { renderSmeEmployeeGuide } from './design-sme-employee-guide.mjs';
import { benefitsCareRoute, renderBenefitsCare } from './design-benefitscare.mjs';
import { renderTravel } from './design-travel.mjs';
import { renderClaims } from './design-claims.mjs';
import { renderAboutCards } from './design-about-cards.mjs';
import { retirePortalMarkup } from './retire-portal.mjs';
import { applyPresentation } from './presentation-assets.mjs';
import { normaliseNavigation } from './navigation-labels.mjs';

const publicRoot = fileURLToPath(new URL('../site/', import.meta.url));
const version = '20261009-design-2';
const assetVersion = '20261010-reviews-2';
const styles = ['design-layout', 'design-components', 'design-compositions', 'design-page-details', 'content-flow', 'navigator-cards', 'card-content'];

async function htmlFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.map(entry => entry.isDirectory() ? htmlFiles(path.join(directory, entry.name)) : entry.name.endsWith('.html') ? [path.join(directory, entry.name)] : []));
  return groups.flat();
}

function node(document, html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
}

function makeHero(document, main, profile, route) {
  const hero = main.querySelector('.xp-title-hero, .xp-hero');
  if (!hero) return;
  if (route.includes('privacy')) {
    hero.classList.add('ds-privacy-heading');
    return;
  }
  hero.classList.add('ds-hero');
  if (profile.quiet) hero.classList.add('ds-hero--reading');
  const shell = hero.querySelector('.xp-shell');
  const row = shell.querySelector('.xp-title-row, .xp-hero-grid');
  if (!row) return;
  const copy = row.querySelector('.xp-hero-copy') || row;
  copy.classList.add('ds-hero-copy');
  copy.removeAttribute('data-hero-copy');
  const actions = shell.querySelector(':scope > .xp-actions');
  if (actions) copy.append(actions);
  const grid = node(document, '<div class="ds-hero-grid"></div>');
  row.replaceWith(grid);
  grid.append(copy);
  grid.append(node(document, visualPanel(profile)));
}

function addSectionNavigation(document, main, route) {
  const old = main.querySelector('.lf-sections');
  main.querySelector('.ds-section-nav')?.remove();
  if (route.includes('privacy')) { old?.remove(); return; }
  if (route === '/' || route.includes('contact-us') || route.endsWith('404.html')) return;
  if (old) old.remove();
  const sections = [...main.querySelectorAll(':scope > section, :scope > .ds-guide-shelf > section')]
    .filter(element => !element.matches('.ds-hero, .xp-about-hero, .xp-portal-hero, .xp-closing'));
  main.querySelectorAll('[id^="page-section-"]').forEach(element => element.removeAttribute('id'));
  const items = sections.map((section, index) => {
    const heading = section.querySelector('h2');
    if (!heading) return null;
    if (!section.id) section.id = `page-section-${index + 1}`;
    const title = heading.innerHTML.replace(/<br\s*\/?\s*>/gi, ' ').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().replace(/\.$/, '');
    const decoder = document.createElement('span');
    decoder.innerHTML = title;
    return { id: section.id, title: decoder.textContent };
  }).filter(Boolean);
  if (!items.length) return;
  if (!main.querySelector('#explore-page')) sections[0].insertAdjacentHTML('afterbegin', '<span id="explore-page" class="ds-anchor" data-design-addition></span>');
  const labels = navigationLabels(route);
  const nav = node(document, `<nav class="ds-section-nav" aria-label="On this page" data-design-addition><div class="xp-shell"><span class="ds-nav-label">Explore</span><div class="ds-section-links">${items.slice(0, 6).map((item, index) => `<a href="#${item.id}">${escape(labels[index] || item.title)}</a>`).join('')}</div></div></nav>`);
  const hero = main.querySelector('.ds-hero, .xp-about-hero, .xp-portal-hero');
  if (hero) hero.after(nav);
}

function enrichDirectory(document, main, route) {
  for (const group of main.querySelectorAll('.ic-directory-group')) {
    const intro = group.firstElementChild;
    const title = intro.querySelector('h2')?.textContent || '';
    const stem = /employee|people/i.test(title) ? 'employee-benefits' : /personal/i.test(title) ? 'personal-insurance' : 'business-insurance';
    intro.prepend(node(document, `<span class="ds-category-icon" data-design-addition>${icon(topicIcon(title))}</span>`));
  }
  for (const row of main.querySelectorAll('.ic-row')) {
    if (row.closest('[data-ui-island]')) continue;
    const title = row.querySelector('h3')?.textContent || row.textContent;
    row.prepend(node(document, `<span class="ds-row-icon" data-design-addition>${icon(topicIcon(title))}</span>`));
  }
  for (const choice of main.querySelectorAll('.lf-choice')) {
    if (choice.querySelector('img')) continue;
    const title = choice.querySelector('h3')?.textContent || choice.textContent;
    const stem = /benefit|employee/i.test(title) ? 'employee-benefits' : /business/i.test(title) ? 'business-insurance' : 'personal-insurance';
    choice.prepend(node(document, `<div class="ds-choice-photo" data-design-addition>${photo(stem)}</div>`));
  }
}

function enrichSpecialPages(document, main, profile, route) {
  const about = main.querySelector('.xp-about-grid');
  if (about) {
    const facts = about.querySelector('.xp-company-facts');
    facts?.prepend(node(document, `<div class="ds-about-photo" data-design-addition>${photo('consultation-table', true)}</div>`));
  }
  const portal = main.querySelector('.xp-portal-intro');
  if (portal) portal.append(node(document, `<div class="ds-portal-signature" data-design-addition aria-hidden="true">${icon('people')}${icon('health')}${icon('document')}</div>`));
  const policy = main.querySelector('.xp-policy');
  if (policy) {
    const nav = node(document, `<nav class="ds-policy-nav" aria-label="Privacy topics" data-design-addition>${[...policy.querySelectorAll('section')].map((section, index) => {
      section.id ||= `privacy-${index + 1}`;
      return `<a href="#${section.id}">${escape(section.querySelector('h2').textContent)}${icon('arrow')}</a>`;
    }).join('')}</nav>`);
    policy.before(nav);
    policy.parentElement.classList.add('ds-policy-layout');
  }
}

function enrichSearchContent(main) {
  for (const section of main.querySelectorAll('.search-section')) {
    const heading = section.querySelector('.search-layout > h2');
    if (heading && !heading.querySelector('.ds-heading-icon')) heading.insertAdjacentHTML('afterbegin', `<span class="ds-heading-icon" data-design-addition>${icon(topicIcon(heading.textContent))}</span>`);
  }
  for (const item of main.querySelectorAll('.search-links > li')) {
    if (!item.querySelector('.ds-row-icon')) item.insertAdjacentHTML('afterbegin', `<span class="ds-row-icon" data-design-addition>${icon(topicIcon(item.textContent))}</span>`);
  }
}

function enhanceMain(source, route) {
  const { document } = parseHTML(`<html><body>${source}</body></html>`);
  const main = document.querySelector('main');
  if (!main) throw new Error(`Missing main content: ${route}`);
  const decorated = main.dataset.designVersion === version;
  main.dataset.designVersion = version;
  main.classList.add('ds-page');
  if (route === '/') main.querySelector(':scope > .experience')?.classList.add('ds-surface');
  else main.classList.add('ds-surface');
  main.dataset.pageKind = route.includes('/guides/') ? 'guide' : route.includes('privacy') ? 'privacy' : 'product';
  const profile = profileFor(route);
  if (!decorated) makeHero(document, main, profile, route);
  addSectionNavigation(document, main, route);
  if (!decorated) {
    enrichDirectory(document, main, route);
    enrichSpecialPages(document, main, profile, route);
    composePages(document, main, route);
  }
  enrichSearchContent(main);
  reconcileCompositions(main, route);
  applyPageStrategy(document, main, route);
  cleanContent(document, main, main.dataset.designPage);
  const page = pageByRoute.get(route);
  const breadcrumb = main.querySelector('.xp-breadcrumb');
  if (page && breadcrumb) breadcrumb.replaceWith(node(document, breadcrumbHtml(page)));
  for (const link of main.querySelectorAll('a[href]')) {
    if (/^\/services(?:\/|[?#]|$)/.test(link.getAttribute('href'))) link.remove();
  }
  addSectionNavigation(document, main, route);
  return main.outerHTML;
}

async function retireOverview(root) {
  await fs.rm(path.join(root, 'services', 'index.html'), { force: true });
  try { await fs.rmdir(path.join(root, 'services')); }
  catch (error) { if (!['ENOENT', 'ENOTEMPTY'].includes(error.code)) throw error; }
  const redirects = path.join(root, '_redirects');
  const entries = (await fs.readFile(redirects, 'utf8')).split(/\r?\n/)
    .filter(line => line.trim() && !/^\/services\/?(?:[?#]|$)/.test(line.trim().split(/\s+/)[1] || ''));
  await fs.writeFile(redirects, `${entries.join('\n')}\n`);
  const sitemap = path.join(root, 'sitemap.xml');
  await fs.writeFile(sitemap, (await fs.readFile(sitemap, 'utf8'))
    .replace(/\s*<url><loc>https:\/\/www\.inspro\.com\.sg\/services\/<\/loc><\/url>/g, ''));
}


async function retireCommercialDirectory(root) {
  const route = '/service-details/commercial/view-commercial-insurance-products/';
  const file = path.join(root, route, 'index.html');
  try { await fs.unlink(file); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  try { await fs.rmdir(path.dirname(file)); }
  catch (error) { if (!['ENOENT', 'ENOTEMPTY'].includes(error.code)) throw error; }
  const redirects = path.join(root, '_redirects');
  const variants = [route.slice(0, -1), route, route + 'index.html'];
  const lines = (await fs.readFile(redirects, 'utf8')).split(/\r?\n/).filter(line => line.trim()
    && !variants.includes(line.trim().split(/\s+/)[0]));
  await fs.writeFile(redirects, lines.join('\n') + '\n');
}

export async function refreshDesign(root = publicRoot) {
  await retireGuidePages(root);
  await retireOverview(root);
  await retireCommercialDirectory(root);
  await writeNavigatorIcons(root);
  for (const file of await htmlFiles(root)) {
    let html = (await fs.readFile(file, 'utf8')).replaceAll('/service-details/commercial/view-commercial-insurance-products/', '/service-details/commercial/commercialoffice-package/');
    const relative = path.relative(root, file).replaceAll('\\', '/');
    const route = relative === 'index.html' ? '/' : relative === '404.html' ? '/404.html' : `/${relative.replace(/index.html$/, '')}`;
    const match = html.match(/<main\b[^>]*>[\s\S]*?<\/main>/);
    if (!match) throw new Error(`Missing main: ${relative}`);
    let source = match[0];
    let protectedHome = '';
    if (route === '/') {
      const start = source.indexOf('<section class="story"');
      const rail = source.indexOf('<section class="product-story');
      const end = source.indexOf('</section>', rail) + '</section>'.length;
      if (start < 0 || rail < start || end < rail) throw new Error('Protected homepage sections not found.');
      protectedHome = source.slice(start, end);
      source = source.replace(protectedHome, '<!-- protected-home -->');
    }
    const authoredGuide = ['/guides/', '/guides/insurance-review-checklist/', '/guides/sme-employee-insurance-singapore/', benefitsCareRoute, travelRoute, '/claims-support/'].includes(route);
    let enhanced = authoredGuide ? source : enhanceMain(source, route);
    if (protectedHome) enhanced = enhanced.replace('<!-- protected-home -->', protectedHome);
    html = removeRedundantActions(html.replace(match[0], enhanced));
    html = html.replace(/<nav class="nav-links"[\s\S]*?<\/nav>/, leadNavigation(route, icon));
    // Template-derived pages must not inherit another page's scene stylesheet.
    html = html.replace(/<link[^>]+href="\/assets\/css\/(?:benefit|business|personal)-scenes\.css[^>]*>\s*/g, '');
    if (route === '/service-details/commercial/employees-benefits/') {
      html = html.replace('</head>', `<link rel="stylesheet" href="/assets/css/benefit-scenes.css?v=${assetVersion}">\n</head>`);
    }
    if (route === '/service-details/commercial/commercialoffice-package/') {
      html = html.replace('</head>', `<link rel="stylesheet" href="/assets/css/business-scenes.css?v=${assetVersion}">\n</head>`);
    }
    if (route === '/service-details/personal/view-personal-insurance-products/') {
      html = html.replace('</head>', `<link rel="stylesheet" href="/assets/css/personal-scenes.css?v=${assetVersion}">\n</head>`);
    }
    html = html.replace(/(href="\/assets\/css\/tokens\.css)\?[^" ]+/g, `$1?v=${assetVersion}`);
    for (const style of styles) html = html.replace(new RegExp(`<link[^>]+href="/assets/css/${style}\\.css[^>]*>\\s*`, 'g'), '');
    html = html.replace('</head>', `${styles.map(style => `<link rel="stylesheet" href="/assets/css/${style}.css?v=${assetVersion}">`).join('\n')}\n</head>`);
    if (route === '/') {
      for (const style of ['home-panels']) {
        html = html.replace(new RegExp(`<link[^>]+href="/assets/css/${style}\\.css[^>]*>\\s*`, 'g'), '');
        html = html.replace('</head>', `<link rel="stylesheet" href="/assets/css/${style}.css?v=${assetVersion}">\n</head>`);
      }
    }

    if (route === '/contact-us/') {
      html = html.replace(/<link[^>]+href="\/assets\/css\/contact\.css[^>]*>\s*/g, '');
      html = html.replace('</head>', '<link rel="stylesheet" href="/assets/css/contact.css?v=20261009-contact-2">\n</head>');
    }
    if (route === '/about-us/') {
      html = html.replace(/<link[^>]+href="\/assets\/css\/about\.css[^>]*>\s*/g, '');
      html = html.replace('</head>', '<link rel="stylesheet" href="/assets/css/about.css?v=20261009-about-1">\n</head>');
    }
    if (route.endsWith('/travel-insurance/')) {
      html = html.replace(/<link[^>]+href="\/assets\/css\/travel\.css[^>]*>\s*/g, '');
      html = html.replace('</head>', '<link rel="stylesheet" href="/assets/css/travel.css?v=20261009-cleanup-1">\n</head>');
    }
    html = html.replace(/(src="\/assets\/js\/experience-ui\.js)\?[^" ]+/g, `$1?v=${assetVersion}`);
    html = html.replace(/<script src="\/assets\/js\/design-interactions.js[^>]*><\/script>/g, '');
    html = html.replace(/<script type="module" src="\/assets\/js\/content-flow.js[^>]*><\/script>/g, '');
    html = html.replace('</body>', `<script src="/assets/js/design-interactions.js?v=${version}" defer></script></body>`);
    const flowVersion = '20261011-navigation-1';
    html = html.replace('</body>', `<script type="module" src="/assets/js/content-flow.js?v=${flowVersion}"></script></body>`);
    html = applyProductReviews(html, route);
    if (route === '/guides/') html = renderGuidesDirectory(html);
    if (route === '/guides/insurance-review-checklist/') html = renderRenewalChecklist(html);
    if (route === '/guides/sme-employee-insurance-singapore/') html = renderSmeEmployeeGuide(html);
    if (route === benefitsCareRoute) html = renderBenefitsCare(html);
    if (route === travelRoute) html = renderTravel(html);
    if (route === '/claims-support/') html = renderClaims(html);
    if (route === '/about-us/') html = renderAboutCards(html);
    html = applyPresentation(retirePortalMarkup(normaliseNavigation(html)));
    await fs.writeFile(file, html);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await refreshDesign();
  process.stdout.write('Applied the shared design to every page; protected homepage sections preserved.\n');
}
