import { icon } from './design-content.mjs';

const scene = (id, width, height, body, extra = '') => `<figure class="tr-scene ${extra}" data-tr-scene="${id}" aria-hidden="true"><svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">${body}</svg></figure>`;
const symbol = (name, x, y, size = 30) => icon(name).replace('width="24"', `x="${x - size / 2}" y="${y - size / 2}" width="${size}"`).replace('height="24"', `height="${size}"`);
const badge = (name, x, y, size = 62) => `<rect class="tr-scene-badge" x="${x - size / 2}" y="${y - size / 2}" width="${size}" height="${size}" rx="14"/>${symbol(name, x, y)}`;
const route = (d, extra = '') => `<path class="tr-route-base" d="${d}"/><path class="tr-route-active" data-tr-route pathLength="100" d="${d}" ${extra}/>`;

export function travelHeroScene() {
  return scene('journey', 520, 300, `${route('M94 146C210 8 314 8 426 146', 'data-tr-flight-path')}
    ${route('M426 182C314 284 210 284 94 182')}
    ${badge('home', 64, 164, 76)}${badge('location', 456, 164, 76)}
    <g class="tr-plane" data-tr-plane transform="translate(258 54) rotate(45)">${symbol('travel', 0, 0, 38)}</g>
    <text class="tr-scene-label" x="64" y="229" text-anchor="middle">Singapore</text>
    <text class="tr-scene-label" x="456" y="229" text-anchor="middle">Destination</text>`, 'tr-scene--hero');
}

export function travelQuoteScene() {
  return scene('quotes', 400, 104, `${route('M62 52H338')}${badge('document', 54, 52)}${badge('travel', 200, 52)}${badge('renew', 346, 52)}`);
}

export function travelCheckScene() {
  return scene('compare', 400, 140, `${route('M82 38C158 38 190 70 266 70')}${route('M82 102C158 102 190 70 266 70')}
    ${badge('location', 54, 38, 54)}${badge('people', 54, 102, 54)}${badge('document', 306, 70, 68)}`);
}

export function businessTravelScene() {
  return scene('business', 360, 260, `${route('M70 130C146 130 146 66 254 66')}${route('M70 130C146 130 146 194 254 194')}
    ${badge('people', 54, 130, 68)}${badge('travel', 288, 66, 68)}${badge('professional', 288, 194, 68)}
    <circle class="tr-scene-junction" cx="148" cy="130" r="5"/>`);
}
