const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');

export const travelOptions = [
  ['MSIG TravelEasy', 'Single-trip or annual cover', 'Get an MSIG quote', 'msig', 'travel'],
  ['MSIG TravelEasy Pre-Ex', 'For travellers with pre-existing medical conditions. Check eligibility and exclusions.', 'Check Pre-Ex eligibility', 'preex', 'medical'],
  ['FWD Travel', 'Visit FWD, then select Travel to explore plans and request a quote.', 'Visit FWD', 'fwd', 'shield'],
];
export const travelChecks = [
  ['Dates & destinations', 'Check the countries covered and the maximum duration of each trip, including annual policies.', 'location'],
  ['People & medical conditions', 'Confirm age, residency and family eligibility. A standard policy may exclude existing medical conditions.', 'people'],
  ['Activities & benefits', 'Match planned activities to the policy. Compare medical assistance, cancellation, delay and baggage limits, excesses and exclusions.', 'shield'],
  ['Assistance abroad', 'Save your policy number and the insurer’s emergency and claims contacts before departure.', 'support'],
];
export const businessTravelChecks = [
  ['Your travelling team', 'Share employee headcount, destinations, trip frequency and the start or renewal date.', 'people'],
  ['Work activities', 'Declare meetings, site visits, manual work and equipment use. Confirm the activities the policy covers.', 'professional'],
  ['Adding a holiday?', 'Check private extensions and accompanying family members. Separate Personal Insurance may be needed.', 'travel'],
];

function quoteOptions(h, links) {
  const options = travelOptions.map(([name, description, action, key]) => [name, description, action, links[key]]);
  return h.section(`<div class="tr-intro"><h2>Choose your travel cover.</h2><p>Continue on the insurer’s website to compare plans and get a quote.</p></div><div class="tr-quotes">${options.map(([name, description, action, href], index) => `${index ? '<hr>' : ''}<article class="tr-quote"><div><h3>${name}</h3><p>${description}</p></div>${h.button(action, escape(href), 'xp-button--outline')}</article>`).join('')}</div><p class="tr-note">The insurer confirms premiums, eligibility and policy terms. Cover starts only after acceptance, purchase and the confirmed effective date.</p>`, 'tr-section', 'quotes');
}

function tripChecks(h) {
  const checks = travelChecks;
  return h.section(`<div class="tr-intro"><h2>Check the details before you go.</h2><p>Match the policy to your itinerary and the people travelling.</p></div><dl class="tr-checks">${checks.map(([title, description]) => `<div><dt>${title}</dt><dd>${description}</dd></div>`).join('')}</dl><p class="tr-note">Changed your plans? Confirm any policy update with the insurer. For an existing incident, ${h.link('see claims support', '/claims-support/')}.</p>`, 'tr-section', 'compare');
}

function businessTrips(h) {
  return h.section(`<div class="tr-intro"><h2>Travelling for work?</h2><p>Arrange cover for employees and the work they do overseas.</p></div><dl class="tr-checks">${businessTravelChecks.map(([title, description]) => `<div><dt>${title}</dt><dd>${description}</dd></div>`).join('')}</dl><div class="tr-actions">${h.button('Discuss business travel', '/contact-us/?intent=business&topic=corporateTravel')}</div>`, 'tr-section', 'business-travel');
}

export function travelSections(h, links) {
  return quoteOptions(h, links) + tripChecks(h) + businessTrips(h);
}

export function travelPage(h, links) {
  return h.titleHero('Travel insurance', 'Travel insurance for holidays and business trips.', 'Explore personal travel quotes or arrange cover for employees travelling on business.') + travelSections(h, links);
}
