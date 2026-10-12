import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { origin, pages, routes } from './seo/page-map.mjs';
import { content, escapeHtml } from './seo/content.mjs';
import { topicLabels } from './insurance-catalogue.mjs';
import { employerGuideBody } from './seo/employer-guide.mjs';
import { contentDirectory } from './seo/content-directory.mjs';
import { breadcrumbHtml, structuredData } from './seo/schema.mjs';
import { refreshDesign } from './design-refresh.mjs';

const defaultRoot = fileURLToPath(new URL('../site/', import.meta.url));
const fileFor = (root, route) => path.join(root, route, 'index.html');
const legacyTravelRoute = '/service-details/commercial/corporate-travel-insurance/';

export function metadata(html, page) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || '';
  const links = [...main.matchAll(/href="([^"?#]+)[^\"]*"/g)].map(match=>match[1]);
  const image = origin + page.image;
  const tags = [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}">`,
    '<meta name="robots" content="index,follow,max-image-preview:large">',
    `<link rel="canonical" href="${origin}${page.route}">`,
    `<meta property="og:type" content="${page.type==='Article'?'article':'website'}">`,
    '<meta property="og:locale" content="en_SG">',
    '<meta property="og:site_name" content="Inspro Insurance Brokers">',
    `<meta property="og:title" content="${escapeHtml(page.title)}">`,
    `<meta property="og:description" content="${escapeHtml(page.description)}">`,
    `<meta property="og:url" content="${origin}${page.route}">`,
    `<meta property="og:image" content="${image}">`,
    '<meta property="og:image:width" content="1280"><meta property="og:image:height" content="720">',
    '<meta property="og:image:alt" content="Illustrative insurance service image; not Inspro staff or premises">',
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${escapeHtml(page.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}">`,
    `<meta name="twitter:image" content="${image}">`,
    `<script type="application/ld+json">${structuredData(page,links)}</script>`,
  ].join('\n  ');
  return html.replace(/<title>[\s\S]*?<\/title>\s*/g,'')
    .replace(/<meta\b[^>]*(?:name="(?:description|robots|twitter:[^"]+)"|property="(?:og:[^"]+|article:[^"]+)")[^>]*>\s*/g,'')
    .replace(/<link rel="canonical"[^>]*>\s*/g,'')
    .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>\s*/g,'')
    .replace('</head>',`  ${tags}\n</head>`)
    .replace(/<head>([\s\S]*?)<\/head>/,(_,head)=>`<head>${head.replace(/>\s*</g,'>\n<').trim()}</head>`);
}

function enhanceBody(html, page) {
  html = html.replace(/<!-- search-content:start -->[\s\S]*?<!-- search-content:end -->/g,'');
  if (page.key !== 'home') {
    html = html.replace(/<h1\b[^>]*>[\s\S]*?<\/h1>/,`<h1>${escapeHtml(page.h1)}</h1>`);
    if (page.intro) {
      const intro = `<p>${escapeHtml(page.intro)}</p>`;
      if(page.key==='guides') html=html.replace(/(<\/h1>)(?:\s*<p>[\s\S]*?<\/p>)?/,`$1${intro}`);
      else html=html.replace(/(<\/h1>\s*(?:<div>\s*)?)<p(?:\s[^>]*)?>[\s\S]*?<\/p>/,`$1${intro}`);
    }
    const crumb = breadcrumbHtml(page);
    if (html.includes('class="xp-breadcrumb"')) html = html.replace(/<nav class="xp-breadcrumb"[\s\S]*?<\/nav>/,crumb);
    else html = html.replace('<div class="xp-shell"><div class="xp-title-row">',`<div class="xp-shell">${crumb}<div class="xp-title-row">`);
  }
  if (page.key==='medical') html = html.replace(/<div class="ic-source-note">[\s\S]*?<\/div>/,'');
  if (page.key==='contact') html = html.replace(/(<script[^>]+id="insurance-topics"[^>]*>)([\s\S]*?)(<\/script>)/,(_,a,b,c)=>{
    const topics=JSON.parse(b);
    return a+JSON.stringify({ ...topics, ...topicLabels })+c;
  });
  const extra = content[page.key];
  if (extra) {
    const block = `<!-- search-content:start -->${extra}<!-- search-content:end -->`;
    if (page.key==='home') html=html.replace(/(<div class="[^\"]*\bexperience\b[^\"]*">)/,`$1${block}`);
    else html=insertBeforeNextStep(html,block);
  }
  if (page.type==='Article') {
    html=html.replace('Updated 3 October 2026','Updated 9 October 2026');
    html=html.replace(/<div class="(?:xp-shell )?search-byline">[\s\S]*?<\/div>/g,'');
    html=html.replace('</section>',`</section><div class="xp-shell search-byline">Published by <a href="${routes.about}">Inspro Insurance Brokers</a> · Updated 9 October 2026</div>`);
  }
  return html;
}

function insertBeforeNextStep(html, block) {
  const next = /<section\b[^>]*(?:\blf-next-section\b|\bid="next-reading")[^>]*>/;
  const closing = /<section\b[^>]*\bxp-closing\b[^>]*>/;
  const support = /<section\b[^>]*><div class="xp-shell"><div class="lf-support-row">/;
  const anchor = html.match(next) || html.match(closing) || html.match(support);
  return anchor ? html.slice(0,anchor.index)+block+html.slice(anchor.index) : html.replace('</main>',`${block}</main>`);
}

function linksAndAssets(html, page) {
  html = html.replaceAll(`href="${legacyTravelRoute}"`, `href="${routes.travel}#business-travel"`);
  const targets={people:routes.wic,liability:routes.liability,professional:routes.professional};
  if (page.key==='catalogue') {
    for (const [topic,route] of Object.entries(targets)) html=html.replaceAll(`href="/contact-us/?intent=business&amp;topic=${topic}"`,`href="${route}"`);
  }
  html=html.replaceAll('/assets/images/inspro-logo.png','/assets/images/inspro-logo.webp');
  if(page.key==='home') {
    html=html.replaceAll('/assets/images/hero-exterior-4k.jpg','/assets/images/optimized/hero-exterior-1920.webp');
    html=html.replace(/src="\/assets\/images\/products\/(business-insurance|employee-benefits|personal-insurance)-4k.jpg" width="3840" height="2160"/g,(_,stem)=>`src="/assets/images/optimized/${stem}-1280.webp" srcset="/assets/images/optimized/${stem}-640.webp 640w, /assets/images/optimized/${stem}-1280.webp 1280w" sizes="(max-width: 760px) 90vw, 78vw" width="1280" height="720"`);
  }
  html=html.replace(/<link rel="stylesheet" href="\/assets\/css\/search-content.css[^>]*>/g,'');
  html=html.replace('</head>','<link rel="stylesheet" href="/assets/css/search-content.css?v=20261009"></head>');
  // Interior pages inherit this unused large homepage preload from the original template.
  if(page.key!=='home') html=html.replace(/<link rel="preload"[^>]*href="\/assets\/images\/hero-exterior-4k.jpg"[^>]*>\s*/g,'');
  html=html.replace(/<a href="\/guides\/insurance-review-checklist\/">Insurance review guide<\/a>/g,'<a href="/guides/">Insurance guides</a>');
  return html;
}

export async function optimizeSite(root = defaultRoot) {
  const template = await fs.readFile(fileFor(root,routes.benefits),'utf8');
  for (const page of pages) {
    if (page.route === routes.travel) continue;
    const file=fileFor(root,page.route);
    let html = page.isNew ? template.replace(/<main\b[^>]*>[\s\S]*?<\/main>/,`<main id="main-content" class="experience search-page">${employerGuideBody(page)}</main>`) : await fs.readFile(file,'utf8');
    html = linksAndAssets(enhanceBody(html,page),page);
    html = metadata(html,page);
    await fs.mkdir(path.dirname(file),{recursive:true});
    await fs.writeFile(file,html);
  }
  const notFound=path.join(root,'404.html');
  let html=await fs.readFile(notFound,'utf8');
  html=html.replace(/<meta name="robots"[^>]*>/g,'').replace('</head>','<meta name="robots" content="noindex,follow"></head>');
  html=html.replaceAll('/assets/images/inspro-logo.png','/assets/images/inspro-logo.webp');
  html=html.replace(/<link rel="preload"[^>]*href="\/assets\/images\/hero-exterior-4k.jpg"[^>]*>\s*/g,'');
  await fs.writeFile(notFound,html);
  await fs.rm(fileFor(root, legacyTravelRoute), { force: true });
  const redirectFile = path.join(root, '_redirects');
  const legacyPaths = [legacyTravelRoute.slice(0, -1), legacyTravelRoute, `${legacyTravelRoute}index.html`];
  const redirects = (await fs.readFile(redirectFile, 'utf8')).split(/\r?\n/)
    .filter(line => line.trim() && !legacyPaths.includes(line.trim().split(/\s+/)[0]));
  redirects.push(...legacyPaths.map(route => `${route} ${routes.travel}#business-travel 301`));
  await fs.writeFile(redirectFile, `${redirects.join('\n')}\n`);
  await fs.writeFile(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(page=>`  <url><loc>${origin}${page.route}</loc></url>`).join('\n')}\n</urlset>\n`);
  await fs.writeFile(path.join(root,'llms.txt'), contentDirectory(pages));
  await refreshDesign(root);
  // The benefits and business compositions own their content; refresh metadata after composition.
  for (const page of pages.filter(page => ['benefits','business'].includes(page.key))) {
    const file = fileFor(root, page.route);
    await fs.writeFile(file, metadata(await fs.readFile(file, 'utf8'), page));
  }
  return pages.length;
}

if (process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  const count=await optimizeSite();
  process.stdout.write(`Optimized ${count} content pages and the 404 page.\n`);
}
