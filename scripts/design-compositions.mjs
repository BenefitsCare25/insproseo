import { escape, icon } from './design-content.mjs';
import { composeHomePanels } from './design-home-panels.mjs';
import { composeBenefits } from './design-benefits.mjs';
import { composeBusiness } from './design-business.mjs';
import { composePersonal } from './design-personal.mjs';
import { composeAbout } from './design-about.mjs';

function element(document, html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
}

function productHero(document, main, hero, route) {
  const flagship = /benefitscare|employees-benefits|commercialoffice-package|view-personal-insurance-products/.test(route);
  hero.classList.add(flagship ? 'ds-flagship-hero' : 'ds-product-hero');
  if (flagship) {
    const visual = hero.querySelector('.ds-visual');
    const picture = visual?.querySelector('.ds-visual-photo');
    if (picture) hero.querySelector('.ds-hero-grid').prepend(picture);
    return;
  }
  const visual = hero.querySelector('.ds-visual');
  const picture = visual?.querySelector('.ds-visual-photo');
  const intro = main.querySelector('.ic-product-intro');
  if (picture && intro) {
    picture.classList.add('ds-detail-photo');
    intro.before(picture);
    intro.parentElement.classList.add('ds-product-opening');
  } else picture?.remove();
  if (visual) visual.classList.add('ds-cover-brief');
  const coverIcon = visual?.querySelector('.ds-icon');
  if (coverIcon) coverIcon.classList.add('ds-cover-symbol');
}

function homeComposition(main) {
  const home = main.querySelector(':scope > .experience');
  if (!home) return;
  home.classList.add('ds-home-composition');
  home.querySelector('.lf-home-choices')?.remove();
  const travel = home.querySelector('.ic-travel-section');
  const portal = home.querySelector('#how-we-help');
  if (travel && portal) portal.after(travel);
  home.querySelector('.xp-benefits-section')?.classList.add('ds-home-benefits');
  home.querySelector('.search-section')?.classList.add('ds-home-introduction');
  composeHomePanels(main);
}

function guideComposition(hero) {
  hero.classList.add('ds-guide-heading');
  hero.querySelector('.ds-visual')?.remove();
}

function contactComposition(document, main) {
  const form = main.querySelector('.xp-contact-form');
  const select = form?.querySelector('select[name="intent"]') || form?.querySelector('#contact-intent');
  if (!select) return;
  const options = [
    ['benefitscare', 'BenefitsCare for SME', 'health'], ['benefits', 'Employee Benefits (Life & Medical)', 'people'],
    ['business', 'Business Insurance', 'business'], ['personal', 'Personal Insurance', 'home'],
  ];
  const validOptions = new Set([...select.querySelectorAll('option')].map(option => option.value));
  const choices = options.filter(([value]) => validOptions.has(value));
  if (!choices.length) return;
  const picker = element(document, `<div class="ds-enquiry-options" role="group" aria-label="Quick service selection">${choices.map(([value, title, symbol]) => `<button type="button" data-enquiry-choice="${value}" aria-pressed="false">${icon(symbol)}<span>${escape(title)}</span>${icon('arrow')}</button>`).join('')}</div>`);
  const label = select.closest('label') || select.parentElement;
  label.before(picker);
}

export function composePages(document, main, route) {
  main.dataset.composition = route === '/' ? 'home' : route.includes('/guides/') ? 'guide' : route.includes('about-us') ? 'about' : route.includes('claims-support') ? 'claims' : route.includes('contact-us') ? 'contact' : 'product';
  if (route === '/') return homeComposition(main);
  const hero = main.querySelector('.ds-hero');
  if (hero && route.includes('/guides/')) guideComposition(hero);
  else if (hero) productHero(document, main, hero, route);
  if (route === '/about-us/') composeAbout(document, main);
  if (route.includes('contact-us')) contactComposition(document, main);
}

export function reconcileCompositions(main, route) {
  if (route === '/service-details/commercial/employees-benefits/') composeBenefits(main);
  if (route === '/service-details/commercial/commercialoffice-package/') composeBusiness(main);
  if (route === '/service-details/personal/view-personal-insurance-products/') composePersonal(main);
  if (route === '/') homeComposition(main);
  if (route === '/about-us/') composeAbout(main.ownerDocument, main);
}
