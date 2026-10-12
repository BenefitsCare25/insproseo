import { photo } from './design-content.mjs';
import { aboutVision, aboutMission, aboutValues as values } from './design-about-cards-content.mjs';

function element(document, html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
}

function chapters() {
  return [
    ['corporate-vision', 'about-vision', `<h2>Our Corporate Vision</h2>
      <p class="about-statement">${aboutVision}</p>`],
    ['corporate-mission', 'about-mission', `<h2>Our Corporate Mission</h2>
      <ul class="about-mission-list">
        ${aboutMission.map(text => `<li>${text}</li>`).join('')}
      </ul>`],
    ['core-values', 'about-values', `<h2>Our Core Values (TACT)</h2>
      <p class="about-values-intro">The principles that guide how we work with you.</p>
      <ul class="about-values-list">${values.map(([letter, title, description]) => `<li>
        <span class="about-value-letter" aria-hidden="true">${letter}</span>
        <div><h3>${title}</h3><p>${description}</p></div>
      </li>`).join('')}</ul>`],
  ];
}

export function composeAbout(document, main) {
  const hero = main.querySelector('.xp-about-hero');
  const grid = hero?.querySelector('.xp-about-grid');
  const copy = grid?.querySelector('.xp-about-copy');
  if (!hero || !grid || !copy) throw new Error('About page introduction is missing.');

  copy.innerHTML = `<h1>About Inspro.</h1>
    <p class="xp-lead">A Singapore insurance brokerage serving employers, businesses and individuals.</p>
    <p>Incorporated in June 2000, Inspro Insurance Brokers Pte Ltd helps corporate and individual clients structure insurance solutions and review general and group insurance needs.</p>
    <p>Our team brings insurance advice, risk management and claims assistance together, working with insurers to arrange comprehensive and competitive cover.</p>`;

  const picture = hero.querySelector('.ds-about-photo') || element(document,
    `<div class="ds-about-photo">${photo('consultation-table', true)}</div>`);
  grid.append(picture);
  const facts = hero.querySelector('.xp-company-facts');
  if (facts) grid.after(facts);

  let previous = hero;
  for (const [id, className, body] of chapters()) {
    const section = element(document, `<section class="xp-section about-chapter ${className}" id="${id}">
      <div class="xp-shell">${body}</div></section>`);
    main.querySelector(`#${id}`)?.remove();
    previous.after(section);
    previous = section;
  }
}
