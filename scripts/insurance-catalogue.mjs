
const personalBase = '/service-details/personal/';
const businessBase = '/service-details/commercial/';
export const routes = {
  travel: `${personalBase}travel-insurance/`,
  personal: `${personalBase}view-personal-insurance-products/`,
  corporateTravel: `${personalBase}travel-insurance/#business-travel`,
  business: `${businessBase}commercialoffice-package/`, benefits: `${businessBase}employees-benefits/`,
  care: '/employee-benefits/benefitscare/',
};
export const insurerLinks = {
  fwd: 'https://www.fwd.com.sg/?utm_source=Inspro&utm_medium=Broker&utm_campaign=Inspro&promo=INSPRO',
  msig: 'https://e-insure2.msig.sg/cp/product/broker/TRAVEL/TRNamedTravelEasyV1?act=new&producerRef=INSPRO',
  preex: 'https://e-insure2.msig.sg/cp/product/broker/TRAVEL/TRNamedTravelEasyPreExV1?act=new&producerRef=INSPRO',
};
export const topicLabels = {
  benefits: { administration: 'Benefits administration', access: 'Existing member access help', medical: 'Group medical insurance', outpatient: 'Group outpatient medical benefits', hospital: 'Group hospital and major medical benefits', protection: 'Group life and accident benefits', flexible: 'Flexible benefits, wellness and dependent cover', review: 'Employee benefits programme review' },
  personal: { travel: 'Travel insurance', motor: 'Motor insurance', home: 'Home insurance', accident: 'Personal accident insurance', helper: 'Domestic helper insurance', golf: "Golfer's insurance", art: 'Fine art insurance', craft: 'Pleasure craft insurance' },
  business: { premises: 'Property and equipment', interruption: 'Business interruption', art: 'Commercial fine art insurance', craft: 'Commercial pleasure craft insurance', people: 'Work injury compensation', liability: 'Public liability insurance', trade: 'Construction and project risks', medical: 'Foreign-worker medical insurance', bonds: 'Foreign-worker security bonds', corporateTravel: 'Corporate travel insurance', fleet: 'Commercial motor and fleet', professional: 'Professional indemnity', directors: 'Directors and officers liability', cyber: 'Information and network technology liability', products: 'Product liability', cargo: 'Marine and project cargo', marine: 'Marine hull and liabilities', credit: 'Trade credit and political risks', crime: 'Crime insurance', money: 'Money insurance', fidelity: 'Fidelity guarantee', businessAccident: 'Business personal accident', hull: 'Marine hull', shipWorks: 'Vessel construction and repair', office: 'Office package', retail: 'Retail package', food: 'Food and beverage package', industrial: 'Light industrial package', clinics: 'Clinic package', education: 'Education package' },
};
export const enquiry = (intent, topic) => `/contact-us/?intent=${intent}&topic=${topic}`;
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
const entries = (h, items) => `<div class="ic-rows">${items.map(([name,desc,url]) => `<a class="ic-row" href="${escape(url)}"><div><h3>${name}</h3><p>${desc}</p></div>${h.icon('arrow')}</a>`).join('')}</div>`;
const jump = items => `<nav class="lf-sections" aria-label="On this page"><div class="xp-shell">${items.map(([id,label])=>`<a href="#${id}">${label}</a>`).join('')}</div></nav>`;
const qualified = '<p class="xp-fine">Availability, eligibility, benefits, limits and exclusions depend on the insurer and policy. A quotation or enquiry does not activate cover.</p>';
const personalItems = [
  ['Travel insurance', 'Compare single-trip and annual travel cover, plus dedicated pre-existing condition options.', routes.travel],
  ['Motor insurance', 'Compare cover, driver conditions, excesses and repair arrangements.', enquiry('personal','motor')],
  ['Home insurance', 'Review the building, renovations and belongings you want to protect.', enquiry('personal','home')],
  ['Personal accident insurance', 'Consider accident benefits alongside your existing medical cover.', enquiry('personal','accident')],
  ['Domestic helper insurance', 'Review medical, accident and bond requirements for your helper.', enquiry('personal','helper')],
  ["Golfer’s insurance", 'Ask about equipment, accidents and liability on the course.', enquiry('personal','golf')],
  ['Fine art insurance', 'Discuss valuations, where pieces are kept and any transit needs.', enquiry('personal','art')],
  ['Pleasure craft insurance', 'Discuss your vessel, its use, cruising area and liability needs.', enquiry('personal','craft')],
];

export function travelFeature(h) {
  return h.section(`<div class="ic-travel-feature"><div><h2>A trip coming up?</h2><p>Holiday or business trip? Explore single-trip and annual cover, plus personal travel quote options from FWD and MSIG.</p>${h.button('Explore travel insurance', routes.travel)}</div><div class="ic-travel-aside">${h.icon('travel')}<p>Single trip or annual cover<br>Travelling with a medical condition<br>Personal and business trips</p></div></div>`, 'ic-travel-section', 'travel');
}

function personalDirectory(h) {
  return h.titleHero('Personal Insurance','For your travels.<br>And life closer to home.','Explore travel, motor, home and more. Choose a product for quote options or speak with Inspro about specialist cover.') + travelFeature(h) + h.section(`<h2>Explore Personal Insurance.</h2><div class="ic-personal-list">${personalItems.slice(1).map((item,i)=>`<div id="${['motor','home','other','helper','golf','art','craft'][i]}">${entries(h,[item])}</div>`).join('')}</div>${qualified}`,'','cover') + h.section(`<div class="lf-support-row"><div><h2>Already have a policy?</h2><p>Start with your renewal date and what you want to change.</p></div>${h.button('Review my Personal Insurance','/contact-us/?intent=personal')}</div>`,'xp-section--tint');
}

export function enhanceCatalogue(route,body,h) {
  if(route===routes.personal) return personalDirectory(h);
  if(route==='/') return body.replace('<div class="experience">',`<div class="experience">${travelFeature(h)}`);
  if(route===routes.benefits) return body.replace('<section class="xp-section lf-next-section"',`${h.section(`<div class="xp-split"><div><h2>Help employees understand<br>their benefits.</h2><p>Discuss staff briefings, onboarding and renewal communications as part of your programme. Agree the scope and delivery with our team.</p></div><div><h3>Other employee-related Business Insurance</h3><p>Work injury insurance, foreign-worker protection and corporate travel address different needs from employee benefits.</p>${h.link('Explore these business policies',`${routes.business}#people`)}</div></div>`,'xp-section--tint')}<section class="xp-section lf-next-section"`);
  return body;
}

