import { escape, icon } from './design-content.mjs';

export function flowPath(d, index = 0) {
  return `<path class="bc-scene-route" d="${d}"/><path class="bc-scene-flow" data-bc-flow="${index}" pathLength="100" d="${d}"/>`;
}

const symbol = (name, x, y, size = 28) => `<g class="bc-scene-icon" transform="translate(${x} ${y}) scale(${size / 24})">${icon(name)}</g>`;
const label = (text, x, y, emphasis = false) => `<text class="bc-scene-label${emphasis ? ' bc-scene-label--strong' : ''}" x="${x}" y="${y}" text-anchor="middle">${escape(text)}</text>`;
const tile = (name, x, y) => `<rect class="bc-scene-tile" x="${x}" y="${y}" width="60" height="56" rx="12"/>${symbol(name, x + 16, y + 13)}`;

function scene(id, description, drawing, height = 150, extra = '') {
  return `<figure class="bc-scene ${extra}" data-bc-motion data-bc-scene="${id}" aria-label="${escape(description)}"><svg viewBox="0 0 400 ${height}" aria-hidden="true" focusable="false">${drawing}</svg></figure>`;
}

export function planScene(id) {
  const choices = id === 'starter' ? ['medical'] : ['medical', 'money'];
  if (id === 'premier') choices.push('business');
  const centres = choices.length === 1 ? [284] : choices.length === 2 ? [224, 334] : [198, 276, 354];
  const routes = centres.map((x, index) => flowPath(`M82 72H114C${(x + 114) / 2} 72 ${(x + 114) / 2} 58 ${x} 58`, index)).join('');
  const nodes = choices.map((name, index) => tile(name, centres[index] - 30, 30)).join('');
  return scene(id, `${id} plan benefit connections`, `${routes}${tile('people', 22, 44)}${nodes}`, 112, 'bc-scene--plan');
}

export function optionalScene(id) {
  if (id === 'insurance') {
    const paths = [70, 200, 330].map((x, index) => flowPath(`M${x} 68V82Q${x} 98 ${x < 200 ? x + 16 : x > 200 ? x - 16 : x} 98H200V111`, index)).join('');
    return scene(id, 'Life, medical and workforce cover', `${paths}${tile('shield', 40, 12)}${tile('medical', 170, 12)}${tile('worker', 300, 12)}${symbol('people', 186, 108)}`, 146);
  }
  if (id === 'wellness') {
    return scene(id, 'Flexible benefits and wellbeing choices', `${flowPath('M84 77H127Q143 77 143 61V39H214', 0)}${flowPath('M143 77V115Q143 131 159 131H276', 1)}${tile('money', 24, 48)}${tile('health', 214, 12)}${tile('medical', 276, 104)}`, 172);
  }
  return scene(id, 'Personal cover for travel, home and everyday life', `${flowPath('M87 64C145 64 137 102 199 102', 0)}${flowPath('M229 102C281 102 253 40 313 40', 1)}${tile('travel', 27, 24)}${tile('home', 169, 62)}${tile('car', 313, 12)}`, 130);
}

export function schemeScene() {
  return scene('scheme', 'Scheme arrangements connect through Inspro to your team', `${flowPath('M200 70V104', 0)}${flowPath('M200 164V198', 1)}
    <rect class="bc-scene-tile" x="68" y="8" width="264" height="62" rx="14"/>${symbol('layers', 90, 25)}${label('Scheme arrangements', 224, 44, true)}
    <rect class="bc-scene-hub" x="48" y="104" width="304" height="60" rx="14"/><g class="bc-scene-inverse">${symbol('people', 72, 120)}${label('Inspro coordination', 228, 140, true)}</g>
    <rect class="bc-scene-tile" x="68" y="198" width="264" height="62" rx="14"/>${symbol('business', 90, 215)}${label('Your team', 224, 234, true)}`, 270, 'bc-scene--scheme');
}
