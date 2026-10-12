import fs from 'node:fs/promises';
import path from 'node:path';
import { parseHTML } from 'linkedom';
import { topicLabels } from './insurance-catalogue.mjs';
import { productIntents, retiredGuides, retiredGuideTargets, reviewHref, travelRoute } from './product-review-routes.mjs';

const serviceNames = {
  review: 'insurance cover', benefitscare: 'BenefitsCare for SME',
  benefits: 'Employee Benefits (Life & Medical)', business: 'Business Insurance',
  personal: 'Personal Insurance', portal: 'the benefits portal',
};

function reviewAction(link, url) {
  const intent = url.searchParams.get('intent');
  const topic = url.searchParams.get('topic');
  const plan = url.searchParams.get('plan');
  const product = topicLabels[intent]?.[topic] || (plan ? `${plan[0].toUpperCase()}${plan.slice(1)} — BenefitsCare for SME` : serviceNames[intent]);
  link.setAttribute('href', url.pathname + url.search);
  link.setAttribute('aria-label', `Review ${product}`);
  const arrow = link.querySelector('svg, [aria-hidden="true"]');
  if (link.querySelector('h3')) {
    link.querySelector('[data-review-label]')?.remove();
    const label = link.ownerDocument.createElement('span');
    label.className = 'xp-link';
    label.dataset.reviewLabel = '';
    label.textContent = 'Review';
    if (arrow) label.append(arrow);
    link.append(label);
  } else link.innerHTML = 'Review' + (arrow?.outerHTML || '');
}

function updateMainLinks(source) {
  const { document } = parseHTML(source);
  const anchors = [...document.querySelectorAll('a')];
  let index = 0;
  return source.replace(/<a\b[^>]*>[\s\S]*?<\/a>/g, original => {
    const link = anchors[index++];
    if (!link || link.closest('nav')) return original;
    const url = new URL(link.getAttribute('href') || '', 'https://www.inspro.com.sg');
    if (url.origin !== 'https://www.inspro.com.sg' || url.pathname === travelRoute
      || url.searchParams.get('topic') === 'travel' || url.searchParams.get('topic') === 'corporateTravel') return original;
    const retired = retiredGuideTargets.get(url.pathname.replace(/index\.html$/, '').replace(/\/?$/, '/'));
    const intent = productIntents.get(url.pathname);
    const isAction = link.matches('.xp-link,.xp-button,.button,.text-link') || link.closest('.xp-programme-links');
    let target;
    if (retired) target = new URL(retired, url.origin);
    else if (intent && isAction) target = new URL(reviewHref(intent), url.origin);
    else if (url.pathname === '/contact-us/' && serviceNames[url.searchParams.get('intent')]
      && url.searchParams.get('topic') !== 'access') target = url;
    else if (link.closest('.eb-tools-view')) target = new URL(reviewHref('portal', url.searchParams.get('role') === 'hr' ? 'hrTools' : 'employeeTools'), url.origin);
    if (!target) return original;
    reviewAction(link, target);
    return link.outerHTML;
  });
}

export function applyProductReviews(html, route) {
  if (route === travelRoute) return html;
  html = html.replace(/<p\b[^>]*data-care-guide[^>]*>[\s\S]*?<\/p>/g, '');
  return html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/, updateMainLinks);
}

async function removeFile(root, relative) {
  const file = path.resolve(root, relative);
  const local = path.relative(path.resolve(root), file);
  if (local.startsWith('..') || path.isAbsolute(local)) throw new Error(`Removal outside public root: ${relative}`);
  try { await fs.unlink(file); } catch (error) { if (error.code !== 'ENOENT') throw error; }
}

export async function retireGuidePages(root) {
  for (const [route] of retiredGuides) await removeFile(root, route.slice(1) + 'index.html');
  for (const file of ['assets/css/public-liability.css', 'assets/js/public-liability.js']) await removeFile(root, file);
  const directories = retiredGuides.map(([route]) => path.resolve(root, route.slice(1))).sort((a, b) => b.length - a.length);
  for (const directory of directories) {
    try { await fs.rmdir(directory); } catch (error) { if (!['ENOENT', 'ENOTEMPTY'].includes(error.code)) throw error; }
  }
  const redirectFile = path.join(root, '_redirects');
  const variants = new Map(retiredGuides.flatMap(([route, intent, topic]) =>
    [route.slice(0, -1), route, route + 'index.html'].map(from => [from, reviewHref(intent, topic)])));
  const lines = (await fs.readFile(redirectFile, 'utf8')).split(/\r?\n/)
    .filter(line => line.trim() && !variants.has(line.trim().split(/\s+/)[0]));
  lines.push(...[...variants].map(([from, to]) => `${from} ${to} 301`));
  await fs.writeFile(redirectFile, lines.join('\n') + '\n');
  const sitemapFile = path.join(root, 'sitemap.xml');
  const sitemap = (await fs.readFile(sitemapFile, 'utf8')).replace(/\s*<url>[\s\S]*?<\/url>/g, entry =>
    retiredGuides.some(([route]) => entry.includes(`https://www.inspro.com.sg${route}<`)) ? '' : entry);
  await fs.writeFile(sitemapFile, sitemap);
  const directoryFile = path.join(root, 'llms.txt');
  const directory = (await fs.readFile(directoryFile, 'utf8')).split('\n')
    .filter(line => !retiredGuides.some(([route]) => line.includes(`https://www.inspro.com.sg${route})`))).join('\n');
  await fs.writeFile(directoryFile, directory);
}
