import { readFile, writeFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { parseHTML } from 'linkedom';
import { composeHomePanels } from './design-home-panels.mjs';

const project = fileURLToPath(new URL('../', import.meta.url));
const root = resolve(project, 'site');
const { renderIsland } = createRequire(import.meta.url)(resolve(project, '.impeccable/ui-render.cjs'));
const stylesheet = '<link rel="stylesheet" href="/assets/css/site-presentation.css?v=20261012-site-1">';

async function pagesIn(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...await pagesIn(path));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(path);
  }
  return files;
}

function refreshHome(source) {
  const { document } = parseHTML(source);
  const introduction = document.querySelector('.ds-home-introduction');
  const teaser = document.querySelector('[data-ui-island="portal-teaser"]');
  if (!introduction || !teaser) throw new Error('Homepage panels are missing.');
  const previousIntro = introduction.outerHTML;
  const previousTeaser = teaser.outerHTML;
  if (!source.includes(previousIntro) || !source.includes(previousTeaser)) {
    throw new Error('Homepage source differs from its parsed panels.');
  }
  composeHomePanels(document.querySelector('main'));
  teaser.innerHTML = renderIsland('portal-teaser', teaser.id);
  return source.replace(previousIntro, introduction.outerHTML).replace(previousTeaser, teaser.outerHTML);
}

for (const path of await pagesIn(root)) {
  let source = await readFile(path, 'utf8');
  if (path === resolve(root, 'index.html')) source = refreshHome(source);
  source = source.replace(/<link[^>]+href="\/assets\/css\/site-presentation\.css[^>]*>\s*/g, '');
  source = source.replace('</head>', `${stylesheet}\n</head>`);
  await writeFile(path, source);
}
process.stdout.write('Updated homepage panels and shared presentation styles.\n');
