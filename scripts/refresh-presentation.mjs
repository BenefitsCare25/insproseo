import { readFile, writeFile, readdir } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';
import { composeHomePanels } from './design-home-panels.mjs';
import { leadNavigation } from './lead-flow.mjs';
import { retirePortalMarkup } from './retire-portal.mjs';
import { applyPresentation } from './presentation-assets.mjs';

const project = fileURLToPath(new URL('../', import.meta.url));
const root = resolve(project, 'site');

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
  if (!introduction) throw new Error('Homepage introduction is missing.');
  const previousIntro = introduction.outerHTML;
  if (!source.includes(previousIntro)) {
    throw new Error('Homepage source differs from its parsed panels.');
  }
  composeHomePanels(document.querySelector('main'));
  return source.replace(previousIntro, introduction.outerHTML);
}

for (const path of await pagesIn(root)) {
  let source = retirePortalMarkup(await readFile(path, 'utf8'));
  if (path === resolve(root, 'index.html')) source = refreshHome(source);
  const route = '/' + relative(root, path).split(sep).join('/').replace(/index\.html$/, '');
  if (!source.includes('<nav class="nav-links"')) throw new Error(`Navigation missing in ${route}`);
  source = source.replace(/<nav class="nav-links"[\s\S]*?<\/nav>/, leadNavigation(route));
  source = applyPresentation(source);
  await writeFile(path, source);
}
process.stdout.write('Updated homepage panels and shared presentation styles.\n');
