import { escape, icon, photo } from './design-content.mjs';
import { accidentGraphic, helperGraphic, homeGraphic, lifestyleGraphic, motorGraphic, travelGraphic } from './design-personal-graphics.mjs';
const version = '20261010-personal-3';
const base = '/service-details/personal/';
const link = (label, url, primary = true, attributes = '') => '<a class="' + (primary ? 'xp-button' : 'xp-link') + '" href="' + escape(url) + '" ' + attributes + '>' + label + icon('arrow') + '</a>';
function scene(id, kind, title, copy, graphic, action, detail = '') {
  return '<section class="xp-section ps-section" id="' + id + '" data-personal-version="' + version + '" data-ps-scene="' + kind + '"><div class="xp-shell ps-scene"><div class="ps-copy"><h2>' + title + '</h2><p>' + copy + '</p>' + action + detail + '</div>' + graphic + '</div></section>';
}
function personalHero(main) {
  const hero = main.querySelector('.ds-hero');
  if (!hero) return;
  hero.classList.remove('ds-product-hero');
  hero.classList.add('ds-flagship-hero');
  const grid = hero.querySelector('.ds-hero-grid');
  if (!grid.querySelector('.ds-visual-photo')) {
    const template = main.ownerDocument.createElement('template');
    template.innerHTML = '<div class="ds-visual-photo" data-personal-photo>' + photo('personal-insurance', true) + '</div>';
    grid.prepend(template.content);
  }
  const visual = hero.querySelector('.ds-visual');
  visual?.classList.remove('ds-cover-brief');
  visual?.querySelector('.ds-cover-symbol')?.classList.remove('ds-cover-symbol');
  visual?.querySelector('ul')?.remove();
  const copy = hero.querySelector('.ds-hero-copy');
  copy?.querySelector('.xp-actions')?.remove();
  const actions = main.ownerDocument.createElement('template');
  actions.innerHTML = '<div class="xp-actions">' + link('Explore personal cover', '#travel') + link('Request a review', '/contact-us/?intent=personal', false) + '</div>';
  copy?.append(actions.content);
  const title = hero.querySelector('.ds-visual-title');
  if (title) title.textContent = 'For life at home and away.';
}
export function composePersonal(main) {
  main.querySelectorAll(':scope > section:not(.ds-hero), :scope > .ds-section-nav').forEach(node => node.remove());
  personalHero(main);
  const template = main.ownerDocument.createElement('template');
  template.innerHTML = scene('travel', 'travel', 'Start with your next journey.', 'One trip or a year of travel. Compare cover around your dates, destination and activities.', travelGraphic(), link('Explore travel insurance', base + 'travel-insurance/'), '<p class="ps-copy-note">Travelling with a medical condition? Explore dedicated pre-existing condition options on the travel page.</p>')
    + scene('motor', 'motor', 'Cover for the way you drive.', 'Compare what each cover type protects, then review your drivers, excesses and repair arrangements.', motorGraphic(), link('Review', '/contact-us/?intent=personal&topic=motor'), '<p class="ps-copy-note">Start with your vehicle details and renewal date.</p>')
    + scene('home', 'home', 'Look after the place you call home.', 'Review the building, renovations and belongings separately, whether you own or rent.', homeGraphic(), link('Review', '/contact-us/?intent=personal&topic=home'))
    + scene('accident', 'accident', 'Plan for the impact of an accident.', 'Compare accident benefits alongside your existing medical and life policies.', accidentGraphic(), link('Review', '/contact-us/?intent=personal&topic=accident'), '<p class="ps-copy-note">Check your occupation, activities and the policy’s insured events.</p><span id="other" class="ds-anchor" aria-hidden="true"></span>')
    + scene('helper', 'helper', 'Care for your helper. Clarity for you.', 'Review medical insurance, personal accident cover and the applicable security bond before arrival or renewal.', helperGraphic(), link('Review', '/contact-us/?intent=personal&topic=helper'))
    + scene('lifestyle', 'lifestyle', 'Cover for what you love.', 'From the golf course to your collection or time on the water. Explore specialist personal cover.', lifestyleGraphic(), link('Discuss golfer’s insurance', '/contact-us/?intent=personal&topic=golf', true, 'data-personal-enquiry'), '<span id="cover" class="ds-anchor" aria-hidden="true"></span><span id="page-section-3" class="ds-anchor" aria-hidden="true"></span>');
  main.append(template.content);
  const intro = main.querySelector('.ds-hero-copy > p');
  if (intro) intro.textContent = 'Explore travel, motor, home, accident and domestic helper insurance, plus specialist cover for your interests.';
}
