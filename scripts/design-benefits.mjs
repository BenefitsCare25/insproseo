import { icon } from './design-content.mjs';
import { policyYearGraphic } from './design-benefit-year.mjs';
const benefitsRoute = '/service-details/commercial/employees-benefits/';
const portalRoute = '/employee-benefits/portal/';
const version = '20261010-reviews-2';
const action = (label, href, primary = false) => `<a class='${primary ? 'xp-button' : 'xp-link'}' href='${href}'>${label}${icon('arrow')}</a>`;
const path = d => `<path data-eb-draw d='${d}' fill='none' stroke='currentColor' stroke-width='2' vector-effect='non-scaling-stroke'/>`;
const paths = markup => `<svg class='eb-connectors' viewBox='0 0 840 80' preserveAspectRatio='none' aria-hidden='true' focusable='false'>${markup}</svg>`;

function scene(id, kind, body) {
  return `<section class='xp-section eb-section' id='${id}' data-benefits-version='${version}' data-eb-scene='${kind}'><div class='xp-shell eb-scene eb-scene--${kind}'>${body}</div></section>`;
}
function copy(title, text, extra = '') {
  return `<div class='eb-copy'><h2>${title}</h2><p>${text}</p>${extra}</div>`;
}
function everydayCare() {
  const items = [
    ['health', 'Group Outpatient Clinical', 'GP treatment and diagnostic tests for illness or injury.'],
    ['people', 'Group Outpatient Specialist', 'Specialist treatment and diagnostic tests for illness or injury.'],
    ['check', 'Group Outpatient Dental', 'Dental treatment expenses according to the benefit schedule.'],
  ];
  const diagram = `<div class='eb-care-map' aria-label='Three outpatient benefit options'><div class='eb-care-hub'>${icon('health')}<strong>Outpatient care</strong></div>${paths(path('M420 0V20Q420 40 400 40H160Q140 40 140 60V80') + path('M420 0V80') + path('M420 0V20Q420 40 440 40H680Q700 40 700 60V80'))}<div class='eb-care-branches'>${items.map(([symbol, title, text]) => `<article class='eb-care-node'><span class='eb-node-symbol'>${icon(symbol)}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div>`;
  return scene('scope', 'care', copy('Care for the everyday.', 'Bring GP, specialist and dental benefits into your employee programme.', action('Review', '/contact-us/?intent=benefits&topic=outpatient')) + diagram);
}
function hospitalCare() {
  const diagram = `<div class='eb-hospital-board' aria-label='Hospital and major medical benefit options'><article class='eb-hospital-core'>${icon('health')}<h3>Group Hospital &amp; Surgical</h3><p>Hospitalisation and day surgery for illness or injury.</p><span class='eb-worldwide'>24/7 worldwide cover</span></article><article class='eb-major-medical'><h3>Group Major Medical</h3><p>Hospitalisation and day surgery cover, with co-insurance and an annual limit.</p><strong>20% co-insurance</strong></article></div>`;
  return scene('hospital-cover', 'hospital', copy('Support when care gets more involved.', 'Explore hospital and surgical cover alongside major medical benefits. Your quotation confirms the limits and terms.', action('Review', '/contact-us/?intent=benefits&topic=hospital')) + diagram);
}
function protection() {
  const items = [
    ['shield', 'Group Term Life', 'Death and total permanent disability benefits due to illness or injury.'],
    ['health', 'Group Dread Disease', 'Cover on diagnosis of a covered critical illness.'],
    ['people', 'Group Personal Accident', 'Death and total permanent disablement benefits due to injury.'],
  ];
  const band = `<div class='eb-protection-band'>${items.map(([symbol, title, text]) => `<article class='eb-protection-unit'><span class='eb-protection-symbol'>${icon(symbol)}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div><p class='eb-worldwide eb-protection-caption'>${icon('shield')}24/7 worldwide cover options</p>`;
  return scene('protection', 'protection', copy('Protection beyond medical bills.', 'Life, critical illness and accident benefits address different events. Choose the mix for your workforce.', action('Review', '/contact-us/?intent=benefits&topic=protection')) + band);
}
function flexibleBenefits() {
  const diagram = `<div class='eb-flex-graphic' aria-label='Flexible benefits, wellness and dependent coverage'><div class='eb-flex-person'>${icon('people')}<strong>Your people</strong></div><svg viewBox='0 0 100 300' class='eb-flex-paths' preserveAspectRatio='none' aria-hidden='true' focusable='false'>${path('M0 150H20Q40 150 40 130V60Q40 40 55 40H100')}${path('M0 150H100')}${path('M0 150H20Q40 150 40 170V240Q40 260 55 260H100')}</svg><div class='eb-flex-branches'><div class='eb-flex-branch'><span>${icon('flex')}</span><h3>Flexible benefits</h3><p>Build choice into the agreed benefit mix.</p></div><div class='eb-flex-branch'><span>${icon('health')}</span><h3>Wellness</h3><p>Bring employee wellbeing into programme design.</p></div><div class='eb-flex-branch'><span>${icon('people')}</span><h3>Dependent coverage</h3><p>Explore cover for eligible family members.</p></div></div></div>`;
  return scene('flexible-benefits', 'flex', copy('Room for individual needs.', 'Shape your programme with flexible benefits, wellness and dependent cover.', action('Review', '/contact-us/?intent=benefits&topic=flexible')) + diagram);
}
function toolView(role, entries) {
  return `<div class='eb-tools-view' id='benefits-tools-${role}' data-benefit-role-panel='${role}' aria-labelledby='benefits-role-${role}'><div class='eb-tool-items'>${entries.map(([symbol, title, detail]) => `<div class='eb-tool-item'>${icon(symbol)}<div><h3>${title}</h3><p>${detail}</p></div></div>`).join('')}</div>${action(`Explore ${role === 'hr' ? 'HR' : 'employee'} tools`, `${portalRoute}?role=${role}#explore`)}</div>`;
}
function tools() {
  const employee = [['health', 'Cover & balances', 'Benefit statements and claim usage.'], ['list', 'Claims & updates', 'Documents, status and correspondence.'], ['people', 'Clinics & e-card', 'Panel care and digital card access.'], ['check', 'Benefit enrolment', 'Eligible choices and enrolment forms.']];
  const hr = [['list', 'Submit employee claims', 'Submit and track the HR-submitted claims your role permits.'], ['check', 'Download enrolment forms', 'Filed forms in PDF, ZIP and Excel.']];
  const controls = `<div class='eb-tools-switch' role='group' aria-label='Choose whose portal tools to view'><button id='benefits-role-employees' type='button' data-benefit-role='employees' aria-pressed='true' aria-controls='benefits-tools-employees'>${icon('people')}Employees</button><button id='benefits-role-hr' type='button' data-benefit-role='hr' aria-pressed='false' aria-controls='benefits-tools-hr'>${icon('business')}HR teams</button></div>`;
  const broker = `<div class='eb-broker-link'>${icon('shield')}<p><strong>Inspro connects the programme.</strong><span>Coverage administration, claims follow-up and reporting.</span></p></div>`;
  const display = `<div class='eb-tools-display'>${controls}${toolView('employees', employee)}${toolView('hr', hr)}</div>`;
  return scene('support', 'tools', copy('From cover to everyday use.', 'Employees access their benefits. HR gets practical tools.', broker) + display);
}
function policyYear() {
  return scene('how-we-help', 'year', copy('Support through the policy year.', 'One connected flow, from programme review to renewal.', action('Discuss your programme', '/contact-us/?intent=benefits')) + policyYearGraphic());
}
export function composeBenefits(main) {
  if (main.querySelector(`[data-benefits-version='${version}']`)) return;
  const body = everydayCare() + hospitalCare() + protection() + flexibleBenefits() + tools() + policyYear();
  main.querySelectorAll(':scope > section:not(.ds-hero), :scope > .ds-section-nav').forEach(node => node.remove());
  const template = main.ownerDocument.createElement('template');
  template.innerHTML = body;
  main.append(template.content);
  const intro = main.querySelector('.ds-hero-copy > p');
  if (intro) intro.textContent = 'Life, medical and flexible benefits for your people, with support for the programme behind them.';
}
