import { escape, icon } from './design-content.mjs';

const box = (x, y, w, h, attrs = '') => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="4" ' + attrs + '/>';
const path = (d, attrs = '') => '<path d="' + d + '" ' + attrs + '/>';
const draw = d => path(d, 'data-bs-draw fill="none"');
const label = (x, y, text, attrs = '') => '<text x="' + x + '" y="' + y + '" ' + attrs + '>' + escape(text) + '</text>';
const glyph = (name, x, y, size = 30) => icon(name).replace('<svg ', '<svg x="' + x + '" y="' + y + '" ').replace('width="24"', 'width="' + size + '"').replace('height="24"', 'height="' + size + '"');
const step = (body, shift = 'up') => '<g data-bs-piece="' + shift + '">' + body + '</g>';
const paper = (x, y, symbol = 'document') => box(x, y, 62, 80, 'class="bs-svg-paper"') + glyph(symbol, x + 17, y + 12, 28) + draw('M' + (x + 14) + ' ' + (y + 52) + 'h34m-34 10h24');
const circle = (x, y, r, attrs = '') => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" ' + attrs + '/>';

function premises() {
  return step(box(32, 48, 256, 136, 'class="bs-svg-wash"') + draw('M32 76H288M120 76V184M208 76V184'), 'up')
    + step(glyph('layers', 61, 103, 31) + glyph('limits', 149, 103, 31), 'up')
    + box(229, 98, 39, 58, 'class="bs-svg-paper"')
    + path('M250 98l-10 19 14 9-12 30', 'data-bs-draw data-bs-at=".4" fill="none"')
    + path('M249 184V201H160V215', 'data-bs-draw data-bs-at=".75" fill="none"')
    + '<g data-bs-pause>' + glyph('continuity', 143, 217, 34) + '</g>'
    + label(160, 31, 'Insured damage', 'text-anchor="middle"')
    + label(92, 243, 'Trading pause', 'text-anchor="middle"');
}
function fleet() {
  return draw('M22 183H298M22 200H298M48 217H83M120 217H155M193 217H228M267 217H298')
    + '<g data-bs-fleet-vehicle>' + glyph('car', 30, 118, 68) + '</g>'
    + '<g data-bs-fleet-vehicle>' + glyph('car', 117, 136, 50) + '</g>'
    + '<g data-bs-fleet-vehicle>' + glyph('transit', 209, 118, 68) + '</g>'
    + step(glyph('people', 57, 39, 33) + glyph('document', 228, 39, 33), 'up')
    + draw('M74 79V101M244 79V101')
    + label(160, 250, 'Working journeys', 'text-anchor="middle"');
}
function projects() {
  return draw('M36 208V51H186M36 74L146 51M36 96L65 74M141 51V123')
    + '<g data-bs-hoist>' + box(105, 127, 72, 14, 'class="bs-svg-brand"') + '</g>'
    + step(box(86, 155, 111, 53, 'class="bs-svg-wash"') + draw('M101 171H182M101 191H182M141 155V208'), 'up')
    + draw('M22 213H202')
    + step(paper(230, 91, 'document'), 'right')
    + '<g data-bs-contract-seal>' + glyph('shield', 243, 185, 35) + '</g>'
    + draw('M215 43V246')
    + label(119, 31, 'On site', 'text-anchor="middle"') + label(263, 31, 'Obligations', 'text-anchor="middle"');
}
function art() {
  return step(box(29, 47, 90, 122, 'class="bs-svg-wash"') + box(40, 58, 68, 100, 'class="bs-svg-paper"'), 'left')
    + draw('M119 108C191 54 254 83 254 153')
    + step(box(197, 168, 96, 77, 'class="bs-svg-wash"') + draw('M197 168L245 191L293 168M245 191V245'), 'right')
    + '<g data-bs-artwork>' + box(222, 197, 46, 33, 'class="bs-svg-paper"') + draw('M230 214H260M245 204V224') + '</g>'
    + step(glyph('transit', 169, 45, 45), 'right')
    + label(74, 200, 'Exhibition', 'text-anchor="middle"')
    + label(230, 261, 'Packed for transit', 'text-anchor="middle"');
}
function money() {
  return step(box(28, 20, 92, 94, 'class="bs-svg-wash"') + circle(74, 67, 22)
    + draw('M74 45V89M52 67H96'), 'left')
    + draw('M120 67H477')
    + step(box(476, 25, 94, 85, 'class="bs-svg-wash"') + draw('M494 25V12H552V25'), 'right')
    + '<g data-bs-cash-route>' + box(510, 58, 26, 19, 'class="bs-svg-brand"') + '</g>'
    + step(glyph('people', 286, 24, 28), 'up');
}
function fidelity() {
  return step(glyph('people', 36, 35, 56), 'left')
    + draw('M92 64H220M292 64H462')
    + step(paper(228, 24, 'document'), 'up')
    + step(box(466, 26, 100, 78, 'class="bs-svg-wash"') + glyph('money', 478, 49, 32), 'right')
    + '<g data-bs-loss-mark>' + circle(545, 88, 15, 'class="bs-svg-brand"')
    + path('M538 88H552', 'class="bs-svg-inverse"') + '</g>';
}
function crime() {
  return step(glyph('people', 28, 10, 32) + glyph('lock', 28, 90, 32), 'left')
    + draw('M65 28H160V65H218M65 106H160V65')
    + step(paper(222, 24, 'document'), 'up') + draw('M284 65H456')
    + step(box(460, 24, 106, 82, 'class="bs-svg-wash"') + glyph('money', 477, 49, 32), 'right')
    + '<g data-bs-loss-mark>' + circle(548, 91, 15, 'class="bs-svg-brand"')
    + path('M541 91H555', 'class="bs-svg-inverse"') + '</g>';
}
function publicLiability() {
  return step(box(99, 30, 122, 90, 'class="bs-svg-wash"') + draw('M99 54H221M143 72V120M178 72V120')
    + glyph('shop', 144, 33, 28), 'up')
    + draw('M160 120V142H67V166M160 142H253V166')
    + '<g data-bs-incident>' + glyph('health', 47, 165, 40) + glyph('glass', 233, 165, 40) + '</g>'
    + path('M67 205V223H136M253 205V223H184', 'data-bs-draw data-bs-at=".55" fill="none"')
    + '<g data-bs-claim data-bs-from-x="-66" data-bs-from-y="-42">' + glyph('document', 138, 204, 44) + '</g>'
    + label(160, 267, 'Third-party claim', 'text-anchor="middle"');
}
function professional() {
  return step(paper(27, 95, 'professional'), 'left') + draw('M89 135H132')
    + step(paper(134, 52, 'document'), 'up')
    + path('M196 92H249V146', 'data-bs-draw data-bs-at=".35" fill="none"')
    + '<g data-bs-claim data-bs-from-x="-84" data-bs-from-y="-94">' + paper(218, 146, 'list') + '</g>'
    + label(57, 203, 'Advice', 'text-anchor="middle"')
    + label(164, 32, 'Work delivered', 'text-anchor="middle"')
    + label(249, 251, 'Client allegation', 'text-anchor="middle"');
}
function directors() {
  return step(box(78, 79, 142, 65, 'class="bs-svg-wash"') + circle(103, 60, 11)
    + circle(149, 60, 11) + circle(195, 60, 11), 'up')
    + step(glyph('document', 112, 92, 28) + glyph('professional', 163, 92, 28), 'up')
    + path('M149 144V185H233', 'data-bs-draw data-bs-at=".35" fill="none"')
    + '<g data-bs-claim data-bs-from-x="-75" data-bs-from-y="-74">' + paper(216, 166, 'document') + '</g>'
    + label(149, 29, 'Boardroom', 'text-anchor="middle"')
    + label(107, 240, 'Alleged wrongful acts', 'text-anchor="middle"');
}
function products() {
  return step(box(26, 56, 86, 103, 'class="bs-svg-wash"') + draw('M26 82H112M43 101H95M43 120H95'), 'left')
    + draw('M112 126H230')
    + '<g data-bs-delivery>' + box(169, 98, 49, 57, 'class="bs-svg-wash"')
    + draw('M169 98L194 111L218 98M194 111V155') + '</g>'
    + step(glyph('people', 240, 53, 46), 'right')
    + path('M263 100V177H186V193M263 177H276V193', 'data-bs-draw data-bs-at=".6" fill="none"')
    + '<g data-bs-incident>' + glyph('health', 170, 198, 32) + glyph('glass', 260, 198, 32) + '</g>'
    + label(69, 189, 'Distribution', 'text-anchor="middle"')
    + label(242, 255, 'After supply', 'text-anchor="middle"');
}
function technology() {
  return step(box(31, 50, 64, 120, 'class="bs-svg-wash"') + draw('M45 74H82M45 100H82M45 126H82M45 152H82'), 'left')
    + draw('M95 109H180')
    + '<g data-bs-network-packet>' + box(130, 102, 15, 14, 'class="bs-svg-brand"') + '</g>'
    + step(box(181, 49, 105, 80, 'class="bs-svg-paper"') + draw('M181 69H286M223 129V145H252'), 'right')
    + path('M253 145V173', 'data-bs-draw data-bs-at=".65" fill="none"')
    + '<g data-bs-claim data-bs-from-x="15" data-bs-from-y="-104">' + paper(217, 171, 'document') + '</g>'
    + label(65, 29, 'Network', 'text-anchor="middle"')
    + label(234, 29, 'Client delivery', 'text-anchor="middle"');
}
function workInjury() {
  return step(glyph('worker', 276, 4, 48), 'up')
    + draw('M300 52V72H82V93M300 72V93M300 72H518V93')
    + '<g data-bs-work-benefit>' + glyph('medical', 62, 94, 40) + '</g>'
    + '<g data-bs-work-benefit>' + glyph('money', 280, 94, 40) + '</g>'
    + '<g data-bs-work-benefit>' + glyph('shield', 498, 94, 40) + '</g>';
}
function foreignMedical() {
  return step(glyph('people', 25, 79, 45), 'left') + draw('M70 102H124')
    + step(paper(129, 64, 'medical'), 'up') + draw('M191 103H226')
    + step(box(224, 48, 73, 126, 'class="bs-svg-wash"') + glyph('medical', 244, 66, 32)
    + draw('M242 119H278M242 132H278M242 145H278'), 'right');
}
function foreignBond() {
  return step(box(78, 29, 156, 151, 'class="bs-svg-wash"') + draw('M101 61H210M101 79H210M101 97H190'), 'up')
    + '<g data-bs-bond-seal>' + glyph('shield', 137, 121, 38) + '</g>';
}
function accident() {
  return step(glyph('people', 28, 56, 64), 'left') + draw('M93 88H146')
    + step(paper(150, 40, 'list'), 'up')
    + path('M213 80H258V154', 'data-bs-draw data-bs-at=".4" fill="none"')
    + '<g data-bs-benefit-document>' + paper(223, 155, 'shield') + '</g>'
    + label(58, 145, 'Person', 'text-anchor="middle"')
    + label(182, 25, 'Policy definitions', 'text-anchor="middle"');
}
function travel() {
  return step(circle(50, 104, 5, 'class="bs-svg-brand"') + circle(580, 34, 5, 'class="bs-svg-brand"'), 'up')
    + path('M50 104C220 104 480 104 550 34', 'data-bs-draw data-bs-route fill="none"')
    + '<g data-bs-path-mover data-bs-heading="-45">' + glyph('travel', 526, 10, 48) + '</g>'
    + step(glyph('document', 118, 29, 35) + glyph('medical', 399, 29, 35), 'up');
}
function cargo() {
  return step(box(29, 20, 84, 83, 'class="bs-svg-wash"') + draw('M29 40H113M47 58H95M47 74H95'), 'left')
    + path('M71 92C172 42 222 49 300 91S433 128 534 91', 'data-bs-draw data-bs-route fill="none"')
    + step(glyph('ship', 269, 83, 64), 'up')
    + step(box(491, 20, 85, 83, 'class="bs-svg-wash"') + draw('M491 40H576M510 57H557'), 'right')
    + '<g data-bs-path-mover>' + box(517, 77, 34, 28, 'class="bs-svg-brand"') + '</g>'
    + label(72, 128, 'Dispatch', 'text-anchor="middle"') + label(534, 128, 'Delivery', 'text-anchor="middle"');
}
function vessel(craft = false) {
  const hull = craft ? 'M61 145H263L233 196H100Z' : 'M35 143H289L256 196H78Z';
  const shape = '<g data-bs-vessel>' + path(hull, 'class="bs-svg-wash" data-bs-draw')
    + draw(craft ? 'M150 145V40' : 'M68 143V102H210V143')
    + (craft ? '' : box(91, 81, 54, 22, 'class="bs-svg-paper"') + draw('M108 81V65H121V81M210 108H259V143')) + '</g>';
  return shape + (craft ? '<g data-bs-sail>' + path('M150 43L150 126H227Z', 'class="bs-svg-paper"') + '</g>'
    : '<g data-bs-machinery>' + box(141, 156, 46, 24, 'class="bs-svg-paper"') + draw('M151 163H177M151 171H177') + '</g>')
    + '<g data-bs-waves>' + draw('M28 211Q62 226 94 211T160 211T226 211T292 211') + '</g>';
}
function shipWorks() {
  return path('M47 158H252L224 202H77Z', 'class="bs-svg-wash" data-bs-draw')
    + draw('M92 158V116H211V158M34 224H272M65 202V224M241 202V224')
    + draw('M278 224V43H121M150 43V99M278 69L193 43')
    + '<g data-bs-repair-part>' + box(126, 107, 47, 30, 'class="bs-svg-brand"') + '</g>'
    + step(paper(25, 29, 'professional'), 'left');
}
function credit() {
  return step(paper(23, 99, 'document'), 'left')
    + draw('M85 139H137V67H229M137 139H229M137 139V211H229')
    + step(box(232, 38, 64, 58, 'class="bs-svg-wash"') + glyph('business', 248, 51, 29), 'up')
    + step(box(232, 110, 64, 58, 'class="bs-svg-wash"') + glyph('business', 248, 123, 29), 'up')
    + step(box(232, 182, 64, 58, 'class="bs-svg-wash"') + glyph('business', 248, 195, 29), 'up')
    + '<g data-bs-unpaid>' + circle(278, 229, 15, 'class="bs-svg-brand"')
    + path('M270 229H286', 'class="bs-svg-inverse"') + '</g>'
    + label(159, 265, 'Outstanding receivable', 'text-anchor="middle"');
}
export function marineRoleGraphic(index) {
  const subjects = [
    '<g data-bs-role-vessel>' + glyph('ship', 31, 3, 58) + '</g>' + draw('M6 62H114'),
    draw('M104 64V8H22M48 8V28') + '<g data-bs-role-hoist>' + box(32, 30, 32, 22, 'class="bs-svg-brand"') + '</g>' + draw('M8 64H114'),
    box(68, 16, 42, 44, 'class="bs-svg-wash"') + draw('M68 30H110M68 44H110')
      + '<g data-bs-role-crate>' + box(74, 37, 26, 21, 'class="bs-svg-brand"') + '</g>' + draw('M4 63H114'),
    '<g data-bs-role-report>' + box(37, 5, 47, 58, 'class="bs-svg-paper"')
      + glyph('professional', 51, 14, 18) + draw('M48 40H73M48 50H67') + '</g>',
  ];
  return '<figure class="bs-role-graphic" data-bs-graphic="role-' + index + '" aria-hidden="true"><svg viewBox="0 0 120 70" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + subjects[index] + '</svg></figure>';
}
const scenes = {
  premises, fleet, projects, art, money, fidelity, crime, public: publicLiability,
  professional, directors, products, technology, work: workInjury, 'foreign-medical': foreignMedical, 'foreign-bond': foreignBond,
  accident, travel, cargo, hull: () => vessel(), repair: shipWorks,
  credit, craft: () => vessel(true),
};
export function businessGraphic(name) {
  const viewBox = name === 'cargo' ? '0 0 600 150'
    : ['money', 'fidelity', 'crime', 'work', 'travel'].includes(name) ? '0 0 600 135'
    : ['foreign-medical', 'foreign-bond'].includes(name) ? '0 0 320 205' : '0 0 320 270';
  return '<figure class="bs-graphic" data-bs-graphic="' + name + '" aria-hidden="true"><svg viewBox="' + viewBox + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + scenes[name]() + '</svg></figure>';
}
function packageAssets() {
  return step(box(23, 19, 118, 72, 'class="bs-svg-wash"') + draw('M23 38H141M67 38V91M104 38V91')
    + glyph('layers', 37, 51, 22) + glyph('limits', 76, 51, 22), 'up')
    + draw('M141 56H175V86H204')
    + '<g data-bs-package-continuity>' + draw('M210 97V43M220 97V72M230 97V58M240 97V33')
    + glyph('continuity', 195, 5, 25) + '</g>';
}
function packageCash() {
  return step(box(22, 26, 74, 75, 'class="bs-svg-wash"') + circle(59, 64, 17)
    + draw('M59 47V81M42 64H76'), 'left')
    + draw('M96 64H183')
    + step(box(181, 30, 63, 67, 'class="bs-svg-wash"') + draw('M194 30V20H231V30')
    + glyph('shield', 198, 51, 29), 'right')
    + '<g data-bs-package-cash>' + box(200, 55, 25, 18, 'class="bs-svg-brand"') + '</g>';
}
function packagePeople() {
  return step(glyph('worker', 103, 17, 56), 'up') + draw('M131 73V88H50V66M131 88H212V66')
    + step(glyph('shield', 32, 25, 37), 'left') + step(glyph('people', 194, 25, 37), 'right')
    + '<g data-bs-package-responsibility>' + glyph('document', 117, 88, 28) + '</g>';
}
function packageMobile(name) {
  if (name === 'assets') return box(9, 15, 52, 39, 'class="bs-svg-wash"')
    + draw('M9 28H61M35 28V54M35 54V74H63')
    + glyph('layers', 16, 33, 16) + '<g data-bs-package-continuity-small>'
    + draw('M58 90V72M67 90V61M76 90V67') + '</g>';
  if (name === 'cash') return box(23, 4, 34, 34, 'class="bs-svg-wash"') + circle(40, 21, 9)
    + draw('M40 12V30M31 21H49M40 38V67') + box(23, 64, 34, 31, 'class="bs-svg-wash"')
    + draw('M31 64V59H49V64') + '<g data-bs-package-cash-small>'
    + box(33, 74, 14, 10, 'class="bs-svg-brand"') + '</g>';
  return step(glyph('worker', 20, 4, 40), 'up') + draw('M40 44V62H16V72M40 62H64V72')
    + glyph('shield', 4, 72, 24) + glyph('people', 52, 72, 24);
}
export function packageGraphic(name) {
  const subjects = { assets: packageAssets, cash: packageCash, people: packagePeople };
  const svg = (body, small = false) => '<svg class="bs-package-' + (small ? 'mobile' : 'wide')
    + '" viewBox="' + (small ? '0 0 80 100' : '0 0 270 120')
    + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + body + '</svg>';
  return '<figure class="bs-package-graphic" data-bs-graphic="package-' + name
    + '" aria-hidden="true">' + svg(subjects[name]()) + svg(packageMobile(name), true) + '</figure>';
}
