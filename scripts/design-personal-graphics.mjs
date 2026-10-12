import { escape, icon } from './design-content.mjs';
const connector = paths => '<svg class="ps-connector" viewBox="0 0 420 36" preserveAspectRatio="none" aria-hidden="true" fill="none"><path data-ps-draw d="' + paths + '" /></svg>';
const detail = (title, copy, key = '') => '<div class="ps-detail"' + (key ? ' data-ps-piece="' + key + '"' : '') + '><h3>' + title + '</h3><p>' + copy + '</p></div>';
function choices(group, items) {
  return '<div class="ps-choices" role="group" aria-label="' + escape({travel:'Choose a travel policy period',motor:'Compare motor cover types',home:'Explore parts of your home',lifestyle:'Choose specialist personal cover'}[group]) + '">' + items.map(([key, label], index) => '<button type="button" id="ps-choice-' + group + '-' + key + '" data-ps-choice="' + key + '" aria-pressed="' + (index === 0) + '" aria-controls="ps-view-' + group + '-' + key + '">' + label + '</button>').join('') + '</div>';
}
const view = (group, key, content) => '<div class="ps-view" data-ps-view="' + key + '" id="ps-view-' + group + '-' + key + '" role="region" aria-labelledby="ps-choice-' + group + '-' + key + '">' + content + '</div>';
function display(group, items, views, extra = '') {
  return '<div class="ps-display" data-ps-display="' + group + '">' + choices(group, items) + '<div class="ps-views">' + views + '</div>' + extra + '</div>';
}
function routeGraphic(annual = false) {
  const path = annual ? 'M28 80C85 10 139 10 196 80S310 150 392 80' : 'M28 80H392';
  return '<svg class="ps-travel-route" viewBox="0 0 420 140" aria-hidden="true" fill="none"><path class="ps-route-track" data-ps-draw d="' + path + '"/><circle cx="28" cy="80" r="6"/><circle cx="392" cy="80" r="6"/><g class="ps-route-plane">' + '<path d="m318 72 23-13 3 4-13 13 6 15-5 3-10-11-12 5-3-3 9-8-7-8 4-4 11 8"/>' + '</g></svg>';
}
export function travelGraphic() {
  const benefits = '<div class="ps-travel-checks"><div>' + icon('medical') + '<span>Medical & assistance</span></div><div>' + icon('travel') + '<span>Disruption & belongings</span></div></div>';
  const single = view('travel','single',routeGraphic() + '<div class="ps-travel-window"><div><span>Departure</span><strong>Your start date</strong></div><span class="ps-window-arrow" aria-hidden="true">' + icon('arrow') + '</span><div><span>Return</span><strong>Your end date</strong></div></div><p class="ps-caption">For one journey. Check the policy’s maximum trip duration.</p>');
  const annual = view('travel','annual',routeGraphic(true) + '<div class="ps-travel-window"><div><span>Policy period</span><strong>A year of travel</strong></div><span class="ps-window-arrow" aria-hidden="true">' + icon('arrow') + '</span><div><span>Each journey</span><strong>Trip duration limits</strong></div></div><p class="ps-caption">For multiple trips. Check the limit for each journey.</p>');
  return display('travel', [['single','Single trip'],['annual','Annual multi-trip']],single + annual, benefits);
}
const motorTypes = [
  ['third','Third party only', 'Other people & property', 'Third-party liability for injury and property damage.'],
  ['fire','Fire & theft', 'Add fire & theft', 'Third-party cover, plus damage to your car from fire or theft.'],
  ['comprehensive','Comprehensive', 'Add accidental damage', 'Fire and theft cover, plus accidental damage to your car.'],
];
function carGraphic() {
  return '<svg class="ps-car-graphic" viewBox="0 0 420 132" aria-hidden="true" fill="none"><path class="ps-asset-outline" data-ps-draw d="M78 97V77Q78 65 90 62L113 37Q121 29 136 29H269Q285 29 293 42L311 62L330 70Q340 74 340 87V97H307M270 97H157M119 97H78M107 63H301M149 37L141 62M246 37L261 62"/><circle class="ps-asset-outline" cx="138" cy="97" r="19"/><circle class="ps-asset-outline" cx="289" cy="97" r="19"/><path class="ps-route-track" d="M42 120H378"/></svg>';
}
export function motorGraphic() {
  const views = motorTypes.map(([key,label,title,copy],index) => view('motor',key,carGraphic() + detail(title,copy) + '<ol class="ps-motor-layers" aria-label="Risks included in this cover type">' + ['Third-party injury & property damage','Fire or theft of your car','Accidental damage to your car'].map((text,i) => '<li class="' + (i <= index ? 'ps-layer-on' : 'ps-layer-off') + '">' + icon(i<=index?'check':'minus') + '<span>' + text + '</span>' + (i>index?'<span class="ps-layer-status">Not included</span>':'') + '</li>').join('') + '</ol>')).join('');
  return display('motor',motorTypes.map(x=>[x[0],x[1]]),views);
}
function houseGraphic(key) {
  return '<svg class="ps-house-graphic" viewBox="0 0 420 200" aria-hidden="true" fill="none"><path class="ps-house-shell ' + (key==='building'?'ps-house-active':'') + '" data-ps-draw d="M93 94L210 18L327 94M113 83V180H307V83M91 180H329"/><path class="ps-house-renovation ' + (key==='renovations'?'ps-house-active':'') + '" data-ps-draw d="M188 180V109H231V180M135 105H169V133H135ZM251 105H286V133H251ZM139 115H164M263 105V133"/><path class="ps-house-contents ' + (key==='contents'?'ps-house-active':'') + '" data-ps-draw d="M244 166V150Q244 144 250 144H285Q291 144 291 150V166M239 167H296M246 174V167M289 174V167M130 168V153H172V168M135 174V168M167 174V168"/><circle class="ps-house-marker" cx="' + ({building:113,renovations:210,contents:268}[key]) + '" cy="' + ({building:85,renovations:123,contents:153}[key]) + '" r="5"/></svg>';
}
export function homeGraphic() {
  const items = [['building','Building','The structure','Review the building cover you need and what is your responsibility.'],['renovations','Renovations','Fixtures, fittings & renovations','Account for fitted interiors and renovation values.'],['contents','Contents','Your belongings','Review replacement values, item limits and valuables needing separate cover.']];
  return display('home',items.map(x=>[x[0],x[1]]),items.map(([key,label,title,copy])=>view('home',key,houseGraphic(key)+detail(title,copy))).join(''));
}
export function accidentGraphic() {
  return '<div class="ps-accident-display"><div class="ps-accident-hub">' + icon('people') + '<h3>An accident</h3></div>' + connector('M210 0V12Q210 18 204 18H100V36M210 18H320V36') + '<div class="ps-accident-outcomes"><div>' + icon('shield') + '<h3>Death & disability</h3><p>Compare lump-sum benefits for the insured accident outcomes.</p></div><div>' + icon('medical') + '<h3>Medical expenses</h3><p>Review eligible treatment, benefit limits and exclusions.</p></div></div></div>';
}
export function helperGraphic() {
  return '<div class="ps-helper-display"><h3>Protect your helper</h3><div class="ps-helper-covers"><div>' + icon('medical') + '<h3>Medical insurance</h3><p>Inpatient care and day surgery.</p></div><div>' + icon('shield') + '<h3>Personal accident</h3><p>Compensation for accidental death or permanent disability.</p></div></div>' + '<div class="ps-helper-bond">' + icon('document') + '<div><h3>Separate security bond</h3><p>A separate guarantee for Work Permit obligations. Required for non-Malaysian helpers.</p></div></div></div>';
}
function golfGraphic() {
  return '<svg class="ps-golf-graphic" viewBox="0 0 420 132" aria-hidden="true" fill="none"><path class="ps-golf-ground" data-ps-draw d="M25 108Q111 86 207 108T395 108M70 98Q194 15 342 92"/><path class="ps-asset-outline" data-ps-draw d="M342 19V102M342 20L381 32L342 47"/><ellipse cx="342" cy="105" rx="12" ry="4"/><circle class="ps-golf-ball" cx="323" cy="99" r="5"/></svg>';
}
function artGraphic() {
  return '<svg class="ps-art-graphic" viewBox="0 0 420 148" aria-hidden="true" fill="none"><path class="ps-asset-outline" data-ps-draw d="M132 12H288V134H132ZM145 25H275V121H145Z"/><path class="ps-art-work" data-ps-draw d="M147 111L190 65L219 91L245 72L273 111"/><circle class="ps-art-work" cx="241" cy="50" r="12"/></svg>';
}
function craftGraphic() {
  return '<svg class="ps-craft-graphic" viewBox="0 0 420 132" aria-hidden="true" fill="none"><path class="ps-asset-outline" data-ps-draw d="M84 78H342L311 104H120ZM144 78V56H253L284 78M160 56V29H214L242 56M173 38H210"/><path class="ps-craft-water" data-ps-draw d="M38 115Q64 101 91 115T144 115T197 115T250 115T303 115T356 115T409 115"/></svg>';
}
function specialistRows(items) {
  return '<dl class="ps-specialist-facts">' + items.map(([name,copy])=>'<div><dt>'+name+'</dt><dd>'+copy+'</dd></div>').join('') + '</dl>';
}
export function lifestyleGraphic() {
  const items = [['golf','Golf'],['art','Fine art'],['craft','Pleasure craft']];
  const golf = view('lifestyle','golf','<span id="golf" class="ds-anchor" aria-hidden="true"></span>'+golfGraphic()+specialistRows([['Equipment','Ask about clubs and equipment cover.'],['Accidents','Review benefits for play on the course.'],['Liability','Discuss injury or damage to others.']]));
  const art = view('lifestyle','art','<span id="art" class="ds-anchor" aria-hidden="true"></span>'+artGraphic()+specialistRows([['Valuation','Start with current values and records.'],['Location','Discuss display and storage.'],['Movement','Review any transit or exhibition needs.']]));
  const craft = view('lifestyle','craft','<span id="craft" class="ds-anchor" aria-hidden="true"></span>'+craftGraphic()+specialistRows([['Your vessel','Describe its type, value and use.'],['Cruising area','Review where you plan to sail.'],['Liability','Discuss your responsibilities to others.']]));
  const fallback = (key, content) => content.replace(/<\/div>$/, '<a class="xp-link ps-fallback-action" href="/contact-us/?intent=personal&amp;topic=' + key + '">Discuss ' + ({golf:'golfer’s insurance',art:'fine art insurance',craft:'pleasure craft insurance'}[key]) + icon('arrow') + '</a></div>');
  return display('lifestyle',items,fallback('golf',golf)+fallback('art',art)+fallback('craft',craft));
}
