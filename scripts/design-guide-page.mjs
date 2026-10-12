import { pageByRoute, routes } from './seo/page-map.mjs';
import { escapeHtml } from './seo/content.mjs';
import { structuredData } from './seo/schema.mjs';

export const guideVersion = '20261010-articles-1';
export const guideArrow = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

export function renderGuidePage(html, key, body, { className, style, script }) {
  const page = pageByRoute.get(routes[key]);
  if (!page || !/<main\b[^>]*>[\s\S]*?<\/main>/.test(html)) throw new Error(`Missing guide page: ${key}`);
  const main = `<main id="main-content" class="experience ds-page ds-surface ga-page ${className}" data-design-page="${key}-article" data-design-version="${guideVersion}">${body}</main>`;
  html = html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/, main);
  for (const asset of ['guide-article', style]) {
    html = html.replace(new RegExp(`<link[^>]+href="/assets/css/${asset}\\.css[^>]*>\\s*`, 'g'), '');
    html = html.replace('</head>', `<link rel="stylesheet" href="/assets/css/${asset}.css?v=${guideVersion}">\n</head>`);
  }
  for (const asset of ['content-flow', 'guide-article', script].filter(Boolean)) {
    html = html.replace(new RegExp(`<script[^>]+src="/assets/js/${asset}\\.js[^>]*><\\/script>\\s*`, 'g'), '');
  }
  html = html.replace('</body>', ['guide-article', script].filter(Boolean).map(asset => `<script type="module" src="/assets/js/${asset}.js?v=${guideVersion}"></script>`).join('\n') + '\n</body>');
  html = html.replace(/(<meta (?:name="(?:description|twitter:description)"|property="og:description") content=")[^"]*(">)/g, `$1${escapeHtml(page.description)}$2`);
  const schema = JSON.parse(structuredData(page));
  schema['@graph'].filter(item => item['@type'] === 'Article').forEach(item => { item.dateModified = '2026-10-10'; });
  return html.replace(/(<script type="application\/ld\+json">)[\s\S]*?(<\/script>)/, (_, start, end) => `${start}${JSON.stringify(schema).replaceAll('<', '\\u003c')}${end}`);
}
