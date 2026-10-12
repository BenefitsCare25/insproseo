import { icon } from './design-content.mjs';
import { packageGraphic } from './design-business-graphics.mjs';
import { liabilityProducts, marineProducts, moneyProducts, peopleProducts, propertyProducts } from './design-business-products.mjs';
const version = '20261010-business-9';
const packageGroups = [
  ['assets', 'Assets & continuity', [
    ['Property all risks', 'Physical business assets.'],
    ['Business interruption', 'Income after insured damage.'],
  ]],
  ['cash', 'Cash & trust', [
    ['Money', 'Cash in storage or transit.'],
    ['Fidelity guarantee', 'Employee dishonesty losses.'],
  ]],
  ['people', 'People & responsibilities', [
    ['Public liability', 'Injury or damage to others.'],
    ['Work injury compensation', 'Employer liability under WICA.'],
    ['Personal accident', 'Defined accident benefits.'],
  ]],
];
function scene(id, kind, title, text, body, aliases = '') {
  return '<section class="xp-section bs-section" id="' + id + '" data-business-version="' + version + '" data-bs-scene="' + kind + '"><div class="xp-shell bs-scene"><header class="bs-copy"><h2>' + title + '</h2><p>' + text + '</p>' + aliases + '</header>' + body + '</div></section>';
}
function packagePresentation() {
  const groups = packageGroups.map(([key, title, facts]) =>
    '<section class="bs-package-group" data-bs-package-group="' + key + '">'
    + packageGraphic(key) + '<div class="bs-package-group-copy"><h3>' + title + '</h3><dl>'
    + facts.map(([name, text]) => '<div><dt>' + name + '</dt><dd>' + text + '</dd></div>').join('')
    + '</dl></div></section>').join('');
  const contexts = '<p class="bs-package-context">For offices, retail, food &amp; beverage, light industrial, clinics and education.</p>';
  const action = '<a class="xp-link bs-action" href="/contact-us/?intent=business">Discuss your package' + icon('arrow') + '</a>';
  return '<div class="bs-package-overview"><div class="bs-package-groups">' + groups
    + '</div><footer class="bs-package-footer">' + contexts + action + '</footer></div>';
}
export function composeBusiness(main) {
  main.querySelectorAll(':scope > section:not(.ds-hero), :scope > .ds-section-nav').forEach(node => node.remove());
  const template = main.ownerDocument.createElement('template');
  template.innerHTML = scene('industries', 'industry', 'One package. Cover that fits.', 'Bring assets, finances and workplace responsibilities together.', packagePresentation(), '<span id="tailor-package" class="ds-anchor" aria-hidden="true"></span><span id="questions" class="ds-anchor" aria-hidden="true"></span>')
    + scene('property-cover', 'property', 'Protect assets. Keep trading.', 'Match the policy to what you own, use or build.', propertyProducts(), '<span id="risks" class="ds-anchor" aria-hidden="true"></span><span id="property" class="ds-anchor" aria-hidden="true"></span>')
    + scene('money-fidelity', 'money', 'Money, fraud & employee dishonesty.', 'Different financial exposures call for different policies.', moneyProducts())
    + scene('liability-workforce', 'liability', 'Understand your responsibilities.', 'Match liability cover to your operations, work and decisions.', liabilityProducts(), '<span id="liability" class="ds-anchor" aria-hidden="true"></span>')
    + scene('people-travel', 'people', 'People at work. People on the move.', 'Work injury, foreign-worker requirements, accident benefits and business travel.', peopleProducts(), '<span id="people" class="ds-anchor" aria-hidden="true"></span><span id="personal-accident" class="ds-anchor" aria-hidden="true"></span>')
    + scene('marine-trade', 'marine', 'Protect the journey. Protect the trade.', 'Cargo, vessels, marine responsibilities and customer-payment risks.', marineProducts(), '<span id="marine" class="ds-anchor" aria-hidden="true"></span>');
  main.append(template.content);
  const intro = main.querySelector('.ds-hero-copy > p');
  if (intro) intro.textContent = 'Business packages and specialist policies for your assets, people, liabilities and trade.';
}
