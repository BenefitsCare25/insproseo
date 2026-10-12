import { escape, icon } from './design-content.mjs';

const outlines = {
  record: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zm0 0v6h6M8 13h8M8 17h5"/>',
  insurer: '<path d="m12 3 8 3v7c0 4-4 7-8 8-4-1-8-4-8-8V6z"/>',
  support: '<path d="M4 12v-1a8 8 0 0 1 16 0v1M4 11H3v6h4v-6Zm16 0h1v6h-4v-6Zm0 6c0 3-2 4-5 4h-3"/>',
  message: '<path d="M4 4h16v13H9l-5 4zm4 5h8m-8 4h5"/>',
};

export const claimSymbol = name => outlines[name]
  ? `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${outlines[name]}</svg>`
  : icon(name);

const symbol = (name, x, y, size = 24) => claimSymbol(name).replace(/width="24" height="24"/, `x="${x}" y="${y}" width="${size}" height="${size}"`);
const lines = (x, y, widths, kind = 'cl-art-line') => widths.map((width, index) => `<rect class="${kind}" x="${x}" y="${y + index * 12}" width="${width}" height="4" rx="2"/>`).join('');
const sheet = (x, y, width, height) => `<g transform="translate(${x} ${y})"><rect class="cl-art-paper" width="${width}" height="${height}" rx="10"/>${symbol('record', 14, 16, 24)}${lines(14, 57, [width - 28, width - 36, width - 47])}</g>`;
const trace = (d, part) => `<path class="cl-art-route" d="${d}"/><path class="cl-art-trace" d="${d}" pathLength="100" data-cl-route data-cl-part="${part}"/>`;
const focus = (x, y, width, height, part, radius = 14) => `<rect class="cl-art-focus" x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" data-cl-part="${part}"/>`;
const movingPaper = (x, y, part, name = 'record') => `<g transform="translate(${x} ${y})"><g class="cl-art-moving" data-cl-part="${part}"><rect class="cl-art-paper cl-art-moving-paper" width="22" height="28" rx="5"/>${symbol(name, 4, 6, 14)}</g></g>`;
const layer = (part, body) => `<g class="cl-art-layer" data-cl-part="${part}">${body}</g>`;
const scene = (name, width, height, body, labels, kind = '') => `<figure class="cl-scene ${kind}" data-cl-scene="${name}" aria-hidden="true"><svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" focusable="false">${body}</svg><figcaption class="cl-scene-labels" style="--cl-label-count:${labels.length}">${labels.map(label => `<span>${escape(label)}</span>`).join('')}</figcaption></figure>`;

export function claimsHeroScene() {
  return scene('hero', 520, 250, `
    ${trace('M128 143H184', 'hero-in')}${trace('M336 143H401', 'hero-out')}
    ${trace('M402 175C376 225 348 226 319 185', 'hero-return')}
    ${sheet(36, 67, 92, 126)}${sheet(24, 78, 92, 126)}
    <rect class="cl-art-paper" x="184" y="33" width="152" height="185" rx="16"/>
    <rect class="cl-art-accent" x="194" y="43" width="132" height="54" rx="10"/>
    <g class="cl-art-inverse">${symbol('support', 208, 58, 24)}${lines(246, 62, [62, 43], 'cl-art-inverse-line')}</g>
    ${layer('hero-document', `<rect class="cl-art-soft" x="197" y="111" width="126" height="39" rx="8"/>${symbol('record', 207, 121, 20)}${lines(238, 122, [68, 45])}`)}
    ${layer('hero-correspondence', `<rect class="cl-art-soft" x="197" y="160" width="126" height="43" rx="8"/>${symbol('message', 207, 172, 20)}${lines(238, 174, [63, 51])}`)}
    <rect class="cl-art-highlight" x="197" y="111" width="126" height="39" rx="8" data-cl-part="hero-review"/>
    <rect class="cl-art-paper" x="402" y="87" width="94" height="118" rx="14"/>
    <circle class="cl-art-soft" cx="449" cy="126" r="24"/>${symbol('insurer', 435, 112, 28)}${layer('hero-insurer-record', lines(419, 164, [60, 42]))}
    ${focus(184, 33, 152, 185, 'hero-focus', 16)}
    ${movingPaper(133, 128, 'hero-record')}${movingPaper(343, 128, 'hero-message', 'mail')}
    ${movingPaper(383, 190, 'hero-reply', 'message')}`, ['Your records', 'Inspro', 'Insurer'], 'cl-scene--hero');
}

export function claimsStepsScene() {
  return scene('steps', 400, 190, `
    ${trace('M98 85C117 85 116 111 137 111', 'steps-in')}${trace('M264 121H294', 'steps-out')}
    ${sheet(20, 31, 78, 114)}${layer('steps-organised', sheet(160, 15, 84, 131))}
    <path class="cl-art-accent" d="M126 101a10 10 0 0 1 10-10h38l12 13h66a10 10 0 0 1 10 10v52a10 10 0 0 1-10 10H136a10 10 0 0 1-10-10z"/>
    <g class="cl-art-inverse">${symbol('list', 147, 119, 24)}${lines(185, 123, [56, 43], 'cl-art-inverse-line')}</g>
    ${layer('steps-next-step', `<path class="cl-art-paper" d="M305 63h65a10 10 0 0 1 10 10v51a10 10 0 0 1-10 10h-44l-20 13v-13h-1a10 10 0 0 1-10-10V73a10 10 0 0 1 10-10z"/>${symbol('support', 309, 76, 23)}${lines(341, 79, [25, 18])}${lines(309, 113, [56])}`)}
    ${focus(155, 10, 94, 140, 'steps-focus', 13)}
    ${movingPaper(100, 87, 'steps-record')}${movingPaper(265, 106, 'steps-question', 'message')}
    <rect class="cl-art-highlight" x="309" y="108" width="57" height="13" rx="4" data-cl-part="steps-response"/>`, ['Policy', 'Documents', 'Next step']);
}

export function claimsProgrammeScene() {
  return scene('programme', 400, 260, `
    ${trace('M101 133H133', 'programme-in')}${trace('M268 155H298', 'programme-out')}
    ${trace('M298 190C288 224 271 226 246 200', 'programme-return')}
    <circle class="cl-art-paper" cx="60" cy="52" r="22"/>${symbol('people', 47, 39, 26)}
    ${sheet(20, 91, 82, 112)}
    <rect class="cl-art-phone" x="132" y="20" width="136" height="220" rx="22"/>
    <rect class="cl-art-line" x="180" y="29" width="40" height="4" rx="2"/>
    <rect class="cl-art-soft" x="141" y="43" width="118" height="178" rx="12"/>
    <rect class="cl-art-accent" x="149" y="51" width="102" height="43" rx="8"/>
    <g class="cl-art-inverse">${symbol('record', 159, 63, 20)}${lines(188, 65, [48, 34], 'cl-art-inverse-line')}</g>
    ${layer('programme-doc-row', `<rect class="cl-art-paper" x="149" y="104" width="102" height="43" rx="8"/>${symbol('record', 159, 116, 20)}${lines(188, 119, [47, 32])}`)}
    ${layer('programme-update-row', `<rect class="cl-art-paper" x="149" y="157" width="102" height="44" rx="8"/>${symbol('message', 159, 169, 20)}${lines(188, 172, [46, 35])}`)}
    <rect class="cl-art-line" x="179" y="231" width="42" height="3" rx="2"/>
    ${layer('programme-correspondence', `<path class="cl-art-paper" d="M310 114h68a10 10 0 0 1 10 10v61a10 10 0 0 1-10 10h-48l-21 13v-13a10 10 0 0 1-10-10v-61a10 10 0 0 1 11-10z"/>${symbol('message', 311, 127, 22)}${lines(345, 130, [28, 19])}${lines(313, 166, [59, 45])}`)}
    <rect class="cl-art-highlight" x="149" y="104" width="102" height="43" rx="8" data-cl-part="programme-document"/>
    <rect class="cl-art-highlight" x="149" y="157" width="102" height="44" rx="8" data-cl-part="programme-update"/>
    ${focus(132, 20, 136, 220, 'programme-focus', 22)}${focus(299, 114, 89, 81, 'programme-message', 10)}
    ${movingPaper(105, 119, 'programme-record')}${movingPaper(271, 141, 'programme-note', 'message')}
    ${movingPaper(280, 197, 'programme-reply', 'message')}`, ['Your team', 'Programme portal', 'Follow-up'], 'cl-scene--programme');
}

export function claimsQuestionsScene() {
  return scene('questions', 360, 124, `
    ${trace('M136 58H223', 'questions-in')}${trace('M225 85C180 111 178 111 136 79', 'questions-return')}
    <rect class="cl-art-paper" x="46" y="31" width="88" height="60" rx="10"/>
    <path class="cl-art-rule" d="m50 85 26-24m52 24-26-24"/>
    <path class="cl-art-rule cl-art-flap" d="m49 36 41 28 41-28" data-cl-part="questions-flap"/>
    <path class="cl-art-paper" d="M235 17h66a11 11 0 0 1 11 11v48a11 11 0 0 1-11 11h-42l-24 14V87a11 11 0 0 1-11-11V28a11 11 0 0 1 11-11z"/>
    ${symbol('support', 235, 29, 21)}${lines(267, 33, [31, 22])}
    <circle class="cl-art-dot" cx="247" cy="69" r="3" data-cl-part="questions-dot-1"/>
    <circle class="cl-art-dot" cx="265" cy="69" r="3" data-cl-part="questions-dot-2"/>
    <circle class="cl-art-dot" cx="283" cy="69" r="3" data-cl-part="questions-dot-3"/>
    ${layer('questions-answer', lines(239, 64, [58, 43]))}
    ${movingPaper(145, 44, 'questions-note', 'message')}${movingPaper(204, 86, 'questions-reply', 'mail')}`, ['Your question', 'Our team'], 'cl-scene--questions');
}
