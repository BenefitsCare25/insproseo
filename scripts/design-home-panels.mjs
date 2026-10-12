import { icon, photo } from './design-content.mjs';

function introductionCopy() {
  return `<h2>A Singapore insurance broker for your people and business.</h2>
    <p>Inspro Insurance Brokers Pte Ltd helps employers review employee benefits and commercial insurance, arrange cover and manage policy administration.</p>
    <ol class="hp-service-flow" aria-label="How Inspro supports you">
      <li><strong>Review your needs</strong><span>Start with your team, business risks and current cover.</span></li>
      <li><strong>Arrange suitable cover</strong><span>Compare insurer options, benefits, limits and exclusions.</span></li>
      <li><strong>Keep things on track</strong><span>Get help with policy administration and claims documents.</span></li>
    </ol>
    <div class="hp-actions"><a class="xp-button" href="/contact-us/?intent=review" aria-label="Review your insurance needs">Review${icon('arrow')}</a></div>`;
}

function introduction(home) {
  const section = home.querySelector('.ds-home-introduction');
  if (!section) return;
  const current = section.querySelector('.hp-intro-copy');
  if (current) {
    current.innerHTML = introductionCopy();
    return;
  }
  const links = [...section.querySelectorAll('.search-home-links a')];
  if (links.length !== 3) throw new Error('Homepage introduction links are missing.');
  const verification = links[2];
  verification.className = 'hp-verification';
  verification.insertAdjacentHTML('beforeend', icon('arrow'));
  section.innerHTML = `<div class="xp-shell hp-introduction">
    <div class="hp-intro-copy">
      ${introductionCopy()}
    </div>
    <figure class="hp-intro-photo">${photo('consultation-table')}</figure>
    <div class="hp-credentials">
      <div>${icon('business')}<p>Incorporated in Singapore<strong>June 2000</strong></p></div>
      <div>${icon('shield')}<p>Listed by MAS<strong>Registered Insurance Broker<br>Exempt Financial Adviser</strong></p></div>
      ${verification.outerHTML}
    </div>
  </div>`;
}

function benefits(home) {
  const intro = home.querySelector('.xp-benefits-intro');
  if (!intro || intro.querySelector('.hp-benefits-copy')) return;
  const copy = intro.ownerDocument.createElement('div');
  copy.className = 'hp-benefits-copy';
  [...intro.children].filter(child => !child.matches('.xp-benefits-photo')).forEach(child => copy.append(child));
  intro.prepend(copy);
}

function travel(home) {
  const section = home.querySelector('.ic-travel-section');
  if (!section || section.querySelector('.hp-travel')) return;
  const feature = section.querySelector('.ic-travel-feature');
  const copy = feature.firstElementChild;
  const aside = feature.querySelector('.ic-travel-aside');
  copy.className = 'hp-travel-copy';
  feature.className = 'hp-travel';
  const action = copy.querySelector('.xp-button');
  action.insertAdjacentHTML('beforebegin', `<ul class="hp-travel-details">
    <li>${icon('travel')}<span>Single trip or annual cover</span></li>
    <li>${icon('health')}<span>Travelling with a medical condition</span></li>
    <li>${icon('business')}<span>Personal and business trips</span></li>
  </ul>`);
  aside.remove();
  feature.insertAdjacentHTML('beforeend', `<figure class="hp-travel-photo">${photo('personal-insurance')}<figcaption>${icon('travel')}<span>Single getaway.<br>A year of journeys.</span></figcaption></figure>`);
}

function conversation(home) {
  const review = home.querySelector('.xp-home-review');
  if (!review || review.querySelector('.hp-contact-copy')) return;
  const copy = review.firstElementChild;
  copy.className = 'hp-contact-copy';
  copy.insertAdjacentHTML('beforeend', `<p>Choose what you would like to discuss. We’ll help you take the next step.</p>
    <div class="hp-contact-direct"><p>Prefer to speak with us?</p><a href="tel:+6564487707">${icon('phone')}+65 6448 7707</a><a href="mailto:helpdesk@inspro.com.sg">${icon('mail')}helpdesk@inspro.com.sg</a></div>`);
  const picker = review.querySelector('[data-ui-island="review"]');
  picker.insertAdjacentHTML('beforebegin', '<p class="hp-picker-label" id="home-enquiry-label">What can we help with?</p>');
  const wrapper = review.ownerDocument.createElement('div');
  wrapper.className = 'hp-contact-picker';
  wrapper.append(review.querySelector('.hp-picker-label'), picker);
  review.append(wrapper);
  wrapper.insertAdjacentHTML('beforeend', '<p class="hp-next-note">Tell us what you need, then send your enquiry from your email app.</p>');
}

export function composeHomePanels(main) {
  const home = main.querySelector(':scope > .experience');
  if (!home) return;
  home.classList.add('hp-home');
  introduction(home);
  benefits(home);
  travel(home);
  conversation(home);
}
