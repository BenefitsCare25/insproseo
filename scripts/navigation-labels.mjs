import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';
import { navigationLabel } from '../site/assets/js/navigation-labels.js';

function labelFragment(fragment, footer = false) {
  const { document } = parseHTML(`<html><body>${fragment}</body></html>`);
  const roots = footer ? [...document.querySelectorAll('.ed-footer__links h2, .ed-footer__links a[href^="/"]')] : [document.body];
  let changed = false;
  const visit = node => {
    if (node.nodeType === 3) {
      const label = navigationLabel(node.textContent);
      if (label !== node.textContent) { node.textContent = label; changed = true; }
    } else if (!node.matches?.('svg, [aria-hidden="true"]')) {
      [...node.childNodes].forEach(visit);
    }
  };
  roots.forEach(visit);
  return changed ? document.body.innerHTML : fragment;
}

function breadcrumbNames(script) {
  const json = script.match(/>([\s\S]*)<\/script>$/)?.[1];
  if (!json) return script;
  const data = JSON.parse(json);
  let changed = false;
  for (const node of data['@graph'] || [data]) {
    if (node['@type'] !== 'BreadcrumbList') continue;
    for (const entry of node.itemListElement || []) {
      const item = typeof entry.item === 'object' ? entry.item : entry;
      if (typeof item.name !== 'string') continue;
      const name = navigationLabel(item.name);
      if (name !== item.name) { item.name = name; changed = true; }
    }
  }
  return changed ? script.replace(json, JSON.stringify(data).replace(/</g, '\\u003c')) : script;
}

export function normaliseNavigation(html) {
  return html.replace(/<nav\b[\s\S]*?<\/nav>/g, fragment => labelFragment(fragment))
    .replace(/<footer\b[\s\S]*?<\/footer>/g, fragment => labelFragment(fragment, true))
    .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g, breadcrumbNames)
    .replace(/>Claims help</g, '>Claims Support<')
    .replace(/(src="\/assets\/js\/content-flow\.js)(?:\?[^" ]*)?/g, '$1?v=20261011-navigation-1')
    .replace(/(src="\/assets\/js\/travel-motion\.js)(?:\?[^" ]*)?/g, '$1?v=20261011-motion-2');
}

export async function normaliseSiteNavigation(root) {
  for (const entry of await fs.readdir(root, { withFileTypes: true })) {
    const file = path.join(root, entry.name);
    if (entry.isDirectory()) await normaliseSiteNavigation(file);
    else if (entry.name.endsWith('.html')) {
      const original = await fs.readFile(file, 'utf8');
      const html = normaliseNavigation(original);
      if (html !== original) await fs.writeFile(file, html);
    }
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await normaliseSiteNavigation(fileURLToPath(new URL('../site/', import.meta.url)));
  process.stdout.write('Updated navigation labels throughout the public site.\n');
}
