import { icon, escape } from './design-content.mjs';
import { businessGraphic, marineRoleGraphic } from './design-business-graphics.mjs';

const enquiry = topic => '/contact-us/?intent=business&amp;topic=' + topic;
const action = (label, href) => '<a class="xp-link bs-action" href="' + href + '">' + label + icon('arrow') + '</a>';
const facts = items => '<dl class="bs-facts">' + items.map(([name, text]) => '<div><dt>' + name + '</dt><dd>' + text + '</dd></div>').join('') + '</dl>';
const entry = (key, label, title, graphic, detail, next) => {
  const liability = ['public', 'professional', 'directors', 'products', 'technology'].includes(graphic);
  if (graphic === 'foreign') detail = detail
    .replace('<div><h4>Foreign-worker medical insurance', '<div>' + businessGraphic('foreign-medical') + '<h4>Foreign-worker medical insurance')
    .replace('<div><h4>Foreign-worker security bonds', '<div>' + businessGraphic('foreign-bond') + '<h4>Foreign-worker security bonds');
  const heading = '<h3><span class="bs-reading-name">' + escape(label) + ' — </span>' + title + '</h3>';
  return { key, label, body: '<div class="bs-presentation">' + (['foreign', 'liabilities'].includes(graphic) ? '' : businessGraphic(graphic))
    + '<div class="bs-detail">' + heading + detail + (liability ? '' : next)
    + '</div>' + (liability ? next : '') + '</div>' };
};
const ask = (topic, label) => action(label, enquiry(topic));

export function productDisplay(name, label, entries) {
  const choices = entries.map(({ key, label: title }, i) => '<button type="button" id="bs-' + name + '-' + key + '-choice" data-bs-choice="' + key + '" aria-pressed="' + !i + '" aria-controls="bs-' + name + '-' + key + '">' + escape(title) + '</button>').join('');
  const views = entries.map(({ key, body }) => '<article class="bs-product-view" id="bs-' + name + '-' + key + '" data-bs-view="' + key + '" role="region" aria-labelledby="bs-' + name + '-' + key + '-choice">' + body + '</article>').join('');
  return '<div class="bs-product-display" data-bs-products="' + name + '"><div class="bs-product-picks" role="group" aria-label="' + escape(label) + '">' + choices + '</div><div class="bs-product-views">' + views + '</div></div>';
}
export function propertyProducts() {
  return productDisplay('property', 'Choose an asset or operation', [
    entry('premises', 'Property & equipment', 'Assets & trading income.', 'premises',
      facts([
        ['Property & fire', 'Buildings, stock and business contents.'],
        ['Equipment / machinery all risks', 'Machinery and business equipment.'],
        ['Electronic equipment', 'Computers and electronic systems.'],
        ['Plate glass', 'Fixed glass and mirrors.'],
      ]) + '<div class="bs-emphasis"><h4>Business interruption</h4><p>Earnings lost when insured property damage interrupts trading.</p></div>',
      ask('premises', 'Review property & interruption')),
    entry('fleet', 'Motor & fleet', 'Vehicles used for business.', 'fleet',
      facts([
        ['Vehicles & drivers', 'Vehicle types, fleet size and who drives.'],
        ['Business use', 'Delivery, transport and other work activities.'],
        ['Cover required', 'Third-party liability and own-vehicle damage needs.'],
      ]), ask('fleet', 'Review motor & fleet')),
    entry('projects', 'Projects & bonds', 'Works, installation & guarantees.', 'projects',
      facts([
        ['Contractors’ all risks', 'Construction works and related third-party liabilities.'],
        ['Erection all risks', 'Installation works and the equipment being erected.'],
        ['Surety bonds', 'Guarantees required by your contracts.'],
      ]) + '<p class="bs-distinction">Project damage cover and contract guarantees serve different purposes.</p>',
      ask('trade', 'Review projects & bonds')),
    entry('art', 'Fine art', 'Collections in place or on the move.', 'art',
      facts([
        ['Collection values', 'Itemised works and agreed valuations.'],
        ['Locations', 'Storage, display and exhibition arrangements.'],
        ['Movement', 'Packing, handling and shipment routes.'],
      ]), ask('art', 'Review fine art')),
  ]);
}
export function moneyProducts() {
  return productDisplay('money', 'Choose a financial exposure', [
    entry('money', 'Money', 'Cash in custody and in transit.', 'money',
      facts([
        ['On your premises', 'Money kept in specified secure storage, such as a safe or cash register.'],
        ['In transit', 'Money carried within Singapore.'],
        ['Set the right scope', 'Cash amounts, handling and transport arrangements.'],
      ]), ask('money', 'Review money insurance')),
    entry('fidelity', 'Fidelity guarantee', 'Direct financial loss through employee dishonesty.', 'fidelity',
      facts([
        ['The exposure', 'Staff access to money, property and financial records.'],
        ['The policy scope', 'Employee roles, loss limits and the insured period.'],
      ]), ask('fidelity', 'Review fidelity guarantee')),
    entry('crime', 'Crime', 'Theft and fraud against the business.', 'crime',
      facts([
        ['Assets & transactions', 'Money, property and payment procedures.'],
        ['Sources of loss', 'Employee and external fraud exposures to review.'],
        ['Controls', 'Authority, access and security arrangements.'],
      ]), ask('crime', 'Review crime insurance')),
  ]);
}
export function liabilityProducts() {
  return productDisplay('liability', 'Choose a liability exposure', [
    entry('public', 'Public & general', 'Incidents during your operations.', 'public',
      facts([
        ['Public liability', 'Accidental third-party injury or property damage connected with your operations.'],
        ['Combined general liability', 'Review which liability sections are brought together in the policy.'],
        ['Your operating context', 'Premises, activities and people who may be affected.'],
      ]), ask('liability', 'Review')),
    entry('professional', 'Professional indemnity', 'Advice, work and client expectations.', 'professional',
      '<p>Professional work can lead to allegations of errors or omissions and claims from clients.</p>' + facts([
        ['Your services', 'The professional work and advice you provide.'],
        ['Your responsibilities', 'Contractual duties, clients and territories.'],
        ['Your exposure', 'Claims history and the liability limits required.'],
      ]), ask('professional', 'Review')),
    entry('directors', 'Directors & officers', 'Management decisions. Personal exposure.', 'directors',
      '<p>Addresses claims alleging wrongful acts in directors’ or officers’ management duties.</p>' + facts([
        ['Insured roles', 'Directors, officers and the company structure.'],
        ['Potential claims', 'Shareholder, employee or other third-party allegations.'],
        ['Policy review', 'Defence costs, limits and insured responsibilities.'],
      ]), ask('directors', 'Review directors & officers cover')),
    entry('products', 'Product liability', 'Responsibility for products you supply.', 'products',
      '<p>Consider liability for injury or property damage associated with products made, supplied or sold.</p>' + facts([
        ['The products', 'What you manufacture, import, distribute or sell.'],
        ['The markets', 'Customers, countries and distribution channels.'],
        ['The responsibilities', 'Contract terms and potential third-party claims.'],
      ]), ask('products', 'Review product liability')),
    entry('technology', 'Technology liability', 'Systems, services and client obligations.', 'technology',
      facts([
        ['Technology services', 'Your work, deliverables and client contracts.'],
        ['Information & networks', 'Network responsibilities and potential claims.'],
        ['Policy scope', 'Professional, technology and cyber sections to compare.'],
      ]), ask('cyber', 'Review technology liability')),
  ]);
}
export function peopleProducts() {
  return productDisplay('people', 'Choose a people or travel policy', [
    entry('work', 'Work injury', 'Employer liability under WICA.', 'work',
      facts([
        ['Medical expenses', 'Treatment for the work-related injury.'],
        ['Medical leave wages', 'Wages during eligible medical leave.'],
        ['Compensation', 'Permanent incapacity or death.'],
      ]), ask('people', 'Review')),
    entry('foreign', 'Foreign workers', 'Medical cover and bonds are separate.', 'foreign',
      '<div class="bs-requirements"><div><h4>Foreign-worker medical insurance</h4><p>Inpatient treatment and day surgery for Work Permit and S Pass holders.</p>' + ask('medical', 'Review') + '</div><div><h4>Foreign-worker security bonds</h4><p>A guarantee for applicable non-Malaysian Work Permit obligations.</p>' + ask('bonds', 'Review') + '</div></div>',
      ''),
    entry('accident', 'Personal accident', 'Benefits for a defined accident.', 'accident',
      '<p>Personal accident cover addresses the insured person’s accidental death or permanent disability.</p>' + facts([
        ['Who is insured', 'People named or included in the selected policy.'],
        ['Benefit scope', 'Accident definitions, benefit amounts and exclusions.'],
      ]), ask('businessAccident', 'Review personal accident cover')),
    entry('travel', 'Business travel', 'Employees travelling for work.', 'travel',
      facts([
        ['The journeys', 'Destinations, frequency and duration.'],
        ['The travellers', 'Employees, eligibility and work activities.'],
        ['The protection', 'Medical, trip and other cover to compare.'],
      ]), action('Business travel guide', '/service-details/personal/travel-insurance/#business-travel')),
  ]);
}
export function marineProducts() {
  const roles = [['Vessel operation', ['Protection & indemnity', 'Charterer’s liability']], ['Ports & handling', ['Marina operator’s liability', 'Terminal operators’ liability', 'Stevedore’s liability']], ['Cargo custody & logistics', ['Bailee’s / warehousemen’s liability', 'Freight forwarders’ liability']], ['Professional services', ['Marine professional indemnity']]];
  return productDisplay('marine', 'Choose a marine or trade exposure', [
    entry('cargo', 'Cargo', 'Goods travelling between locations.', 'cargo',
      facts([
        ['Marine cargo', 'Goods and their shipment routes.'],
        ['Project cargo', 'Equipment and shipments for a specific project.'],
        ['Shipment review', 'Cargo values, packing, handling and transport stages.'],
      ]), ask('cargo', 'Review cargo insurance')),
    entry('hull', 'Marine hull', 'The vessel and its machinery.', 'hull',
      facts([
        ['The asset', 'Vessel type, age, value and equipment.'],
        ['The operation', 'Use, operating area and navigation limits.'],
        ['The distinction', 'Vessel damage and marine liabilities need separate review.'],
      ]), ask('hull', 'Review marine hull')),
    entry('liabilities', 'Marine liabilities', 'Liability follows what you do.', 'liabilities',
      '<dl class="bs-role-list">' + roles.map(([role, names], index) => '<div><dt>' + marineRoleGraphic(index) + '<span>' + role + '</span></dt><dd>' + names.map(name => '<span>' + escape(name) + '</span>').join('') + '</dd></div>').join('') + '</dl>',
      ask('marine', 'Review marine liabilities')),
    entry('repair', 'Build & repair', 'Vessels under construction or repair.', 'repair',
      facts([
        ['Builder’s risk', 'Vessel construction works and the asset being built.'],
        ['Ship repairer’s liability', 'Responsibilities arising from vessel repair work.'],
        ['Project review', 'Works, values, contracts and obligations.'],
      ]), ask('shipWorks', 'Review vessel works')),
    entry('credit', 'Trade credit', 'When your customers do not pay.', 'credit',
      facts([
        ['Whole turnover cover', 'Receivables across domestic or export trade.'],
        ['Major debtor cover', 'Selected domestic or export customer accounts.'],
        ['Political risk cover', 'Export-related political risks to assess.'],
      ]), ask('credit', 'Review trade credit')),
    entry('craft', 'Pleasure craft', 'Vessel use sets the scope.', 'craft',
      facts([
        ['The vessel', 'Type, value, equipment and mooring.'],
        ['The use', 'Private use and any other activities to declare.'],
        ['The voyage', 'Cruising area and liability requirements.'],
      ]), ask('craft', 'Review pleasure craft')),
  ]);
}
