import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { escape } from './design-content.mjs';
import { aboutVision, aboutMission, aboutValues, aboutHelp, aboutDirectory, aboutVerification, aboutRoles } from './design-about-cards-content.mjs';
import { aboutVisionScene, aboutMissionScene, aboutValueIcon, aboutHelpScene, aboutVerificationScene } from './design-about-cards-scenes.mjs';

const version = '20261011-about-cards-5';
const section = (id, heading, body, kind, intro = '') => `<section class="xp-section ab-section ab-section--${kind}" id="${id}" data-about-version="${version}"><div class="xp-shell"><header class="ab-heading"><h2>${heading}</h2>${intro ? `<p>${escape(intro)}</p>` : ''}</header>${body}</div></section>`;
const arrow = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

export function aboutCards() {
  return [
    section('corporate-vision', 'Our Corporate Vision', `<div class="ab-content ab-vision"><p class="ab-statement">${escape(aboutVision)}</p>${aboutVisionScene()}</div>`, 'vision'),
    section('corporate-mission', 'Our Corporate Mission', `<div class="ab-content ab-mission"><ul class="ab-mission-list">${aboutMission.map(text => `<li>${escape(text)}</li>`).join('')}</ul>${aboutMissionScene()}</div>`, 'mission'),
    section('core-values', 'Our Core Values (TACT)', `<div class="ab-content ab-values"><ul class="ab-values-list" data-ab-scene="values">${aboutValues.map(([, title, description], index) => `<li>${aboutValueIcon(index)}<div><h3>${escape(title)}</h3><p>${escape(description)}</p></div></li>`).join('')}</ul></div>`, 'values'),
    section('page-section-4', 'How We Help', `<div class="ab-content ab-help"><dl class="ab-guidance">${aboutHelp.map(([title, description]) => `<div><dt>${escape(title)}</dt><dd>${escape(description)}</dd></div>`).join('')}</dl>${aboutHelpScene()}</div>`, 'help'),
    section('page-section-5', 'Company Verification', `<div class="ab-content ab-verification"><div class="ab-verification-copy"><p>${escape(aboutVerification)}</p><p><a href="${aboutDirectory}" class="ab-directory" target="_blank" rel="noopener noreferrer">Check Inspro in the MAS directory${arrow}</a>. For an enquiry, use <a href="tel:+6564487707">+65 6448 7707</a> or <a href="mailto:helpdesk@inspro.com.sg">helpdesk@inspro.com.sg</a>. Our address is 38 Jalan Pemimpin, M38, #02-08, Singapore 577178.</p><p class="ab-roles">${escape(aboutRoles)}</p></div>${aboutVerificationScene()}</div>`, 'verification'),
  ];
}

export function renderAboutCards(html) {
  for (const markup of aboutCards()) {
    const id = markup.match(/id="([^"]+)"/)[1];
    const pattern = new RegExp(`<section\\b[^>]*\\bid="${id}"[^>]*>[\\s\\S]*?</section>`);
    if (!pattern.test(html)) throw new Error(`About card is missing: ${id}`);
    html = html.replace(pattern, markup);
  }
  for (const asset of ['about-cards', 'about-scenes']) {
    html = html.replace(new RegExp(`<link[^>]+href="/assets/css/${asset}\\.css[^>]*>\\s*`, 'g'), '');
    html = html.replace('</head>', `<link rel="stylesheet" href="/assets/css/${asset}.css?v=${version}">\n</head>`);
  }
  html = html.replace(/<script[^>]+src="\/assets\/js\/about-motion\.js[^>]*><\/script>\s*/g, '');
  return html.replace('</body>', `<script type="module" src="/assets/js/about-motion.js?v=${version}"></script>\n</body>`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const file = fileURLToPath(new URL('../site/about-us/index.html', import.meta.url));
  await fs.writeFile(file, renderAboutCards(await fs.readFile(file, 'utf8')));
  process.stdout.write('Redesigned the five About Us cards only.\n');
}
