import { icon } from './design-content.mjs';

export function homeBenefitsSupport() {
  return `<section class="xp-section" id="how-we-help"><div class="xp-shell hp-support">
    <div class="hp-support-copy"><h2>Support beyond the policy.</h2>
      <p>Inspro helps Singapore employers coordinate employee benefits, policy administration and claims follow-up throughout the policy year.</p>
      <p>Start with your team size, current cover and renewal date. We can help you clarify the support your programme needs.</p>
      <a class="xp-button" href="/contact-us/?intent=benefits">Discuss benefits support${icon('arrow')}</a>
    </div>
    <div class="hp-support-guidance"><dl>
      <div><dt>${icon('people')}For employees</dt><dd>Check your benefit schedule, eligibility and the claim channel confirmed for your cover.</dd></div>
      <div><dt>${icon('business')}For HR teams</dt><dd>Keep member changes and enrolment information up to date, and agree how employee questions are handled.</dd></div>
      <div><dt>${icon('support')}For claims follow-up</dt><dd>Have your insurer, policy details and claim reference ready when asking for help with documents or the next step.</dd></div>
    </dl><a class="xp-link" href="/claims-support/">Read the claims guidance${icon('arrow')}</a>
    <p class="hp-support-note">Benefits, eligibility and service scope depend on the agreed programme. The insurer assesses claims under the policy terms.</p></div>
  </div></section>`;
}

export function corporateSupportSection({ section, link, icon }) {
  const rows = [
    ['people', 'Help employees understand their cover.', 'Confirm benefit schedules, eligibility and the appropriate claim channel.'],
    ['list', 'Keep administration clear.', 'Coordinate member changes, enrolment information and employee questions.'],
    ['shield', 'Follow through during the policy year.', 'Get help with insurer correspondence, claim documents and renewal preparation.'],
  ];
  return section(`<div class="xp-split"><div><h2>Cover is only<br>the start.</h2><p>Agree how your programme will be administered and where employees can get help.</p>${link('Discuss benefits support', '/contact-us/?intent=benefits')}</div><div>${rows.map(([symbol, title, text]) => `<article>${icon(symbol)}<h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div>`, '', 'support');
}

export function benefitsSupportSection({ section, link }, context) {
  const claims = context === 'claims';
  return section(`<div class="xp-split"><div><h2>${claims ? 'On an Inspro benefits programme?' : 'Put your benefits to work.'}</h2><p>${claims ? 'Use the claim channel confirmed for your policy. Ask Inspro for help identifying the appropriate next step.' : 'Confirm benefit schedules, employee eligibility and how enrolment, member changes and claims questions will be handled.'}</p></div>${link(claims ? 'Get claims support' : 'Discuss benefits administration', `/contact-us/?intent=${claims ? 'claims' : 'benefits'}`)}</div>`, 'xp-section--first');
}
