export const origin = 'https://www.inspro.com.sg';
export const reviewed = '2026-10-09';
export const routes = {
  home: '/', about: '/about-us/', contact: '/contact-us/',
  care: '/employee-benefits/benefitscare/', portal: '/employee-benefits/portal/',
  benefits: '/service-details/commercial/employees-benefits/',
  business: '/service-details/commercial/commercialoffice-package/',
  personal: '/service-details/personal/view-personal-insurance-products/',
  travel: '/service-details/personal/travel-insurance/',
  claims: '/claims-support/', privacy: '/privacy-security/',
  guides: '/guides/', checklist: '/guides/insurance-review-checklist/',
  employerGuide: '/guides/sme-employee-insurance-singapore/',
};

export const sources = {
  mas: 'https://eservices.mas.gov.sg/fid/institution/detail/765-INSPRO-INSURANCE-BROKERS-PTE-LTD',
  wic: 'https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/work-injury-compensation-insurance',
  wicBenefits: 'https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/types-of-compensation',
  wicScope: 'https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/who-is-covered',
  medical: 'https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/medical-insurance',
  sPass: 'https://www.mom.gov.sg/passes-and-permits/s-pass/medical-insurance',
  bonds: 'https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/security-bond',
  helper: 'https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/eligibility-and-requirements/insurance-requirements',
  gia: 'https://gia.org.sg/consumers/other-types-of-insurance/107-business-insurance.html',
};

const rows = [
  ['home','Singapore Insurance Broker for SMEs | Inspro','Inspro helps Singapore SMEs review employee benefits, group medical and Business Insurance, with BenefitsCare for SME plans, HR administration and claims support.','Singapore insurance broker','Insurance broker',null,'WebPage'],
  ['care','BenefitsCare for SME Singapore | Inspro','Compare BenefitsCare for SME Starter, Flex and Premier for Singapore SMEs. Review GP access, flexible benefits and hospital cover, then request a tailored quotation.','SME employee benefits Singapore','BenefitsCare for SME.','Bring insurance, flexible benefits, wellness and medical services together for your team, with practical support for HR.','Service'],
  ['benefits','Employee Benefits (Life & Medical) Singapore | Inspro','Explore outpatient, hospital, life and accident benefits, flexible benefits and wellness. Build an employee benefits programme with Inspro.','employee benefits insurance Singapore','Employee Benefits (Life & Medical)','Life, medical and flexible benefits for your people, with support for the programme behind them.','Service'],
  ['business','Business Insurance Singapore: Packages & Specialist Cover | Inspro','Explore business packages and specialist cover for property, money, liabilities, people, marine operations and trade credit with Inspro.','Business Insurance Singapore','Business Insurance for the way you work.','Business packages and specialist policies for your assets, people, liabilities and trade.','Service'],
  ['portal','Employee Benefits Portal Singapore: HR Tools | Inspro','Preview Inspro’s benefits portal for Singapore employers: employee cover, claims, panel clinics and HR enrolment tools. Features depend on your programme.','employee benefits portal Singapore','Employee benefits. One connected portal.','A connected benefits portal for Singapore employers. Give employees a clearer view of their cover, with practical HR tools and Inspro support.','Service'],
  ['about','About Inspro Insurance Brokers Singapore | Inspro','Learn about Inspro Insurance Brokers Pte Ltd, incorporated in Singapore in June 2000. Verify MAS registration and explore benefits, broking and claims support.','Inspro Insurance Brokers Singapore','About Inspro Insurance Brokers.',null,'AboutPage'],
  ['contact','Contact Inspro Insurance Brokers Singapore | Inspro','Contact Inspro at +65 6448 7707 or helpdesk@inspro.com.sg for insurance enquiries, policy reviews and claims support.','contact Inspro insurance broker','Contact Inspro.','Tell us what you need. We’ll help you take the next step.','ContactPage'],
  ['claims','Insurance Claims Support Singapore | Inspro','Get help with insurance claim documents and insurer follow-up in Singapore. Find what to prepare and the appropriate contact channel for your policy.','insurance claims support Singapore','Claims Support.','Inspro helps with claim documents, insurer communication and follow-up.','Service'],
  ['privacy','Website Privacy & Security | Inspro Singapore','Read how Inspro’s website handles enquiry drafts, browser storage and external links. Find contact details for questions about information you share.','Inspro website privacy','Privacy & security.',null,'WebPage'],
  ['personal','Personal Insurance Broker Singapore | Inspro','Review motor, home, accident, helper and specialist cover with Inspro in Singapore. Explore travel insurance and quote options.','Personal Insurance broker Singapore','Personal Insurance. Home & away.','Explore travel, motor, home, accident and domestic helper insurance, plus specialist cover for your interests.','CollectionPage'],
  ['travel','Travel Insurance Singapore: Personal & Business | Inspro','Explore personal and business travel insurance in Singapore. Find FWD and MSIG quote options and review cover for employees travelling overseas.','travel insurance Singapore','Travel Insurance.','Explore personal travel quotes from MSIG and FWD, or arrange cover for your travelling team.','Service'],
  ['guides','SME Insurance Guides for Singapore Employers | Inspro','Prepare for renewal with Inspro’s insurance review checklist and understand employee cover with our Singapore SME employee insurance guide.','SME insurance guides Singapore','Insurance guides for Singapore employers.','Two practical guides to help you prepare for renewal and understand employee cover. Choose the one that fits your next decision.','CollectionPage'],
  ['checklist','Insurance Renewal Checklist Singapore | Inspro','Prepare for insurance renewal in Singapore. Gather policies, record workforce and business changes, and compare limits, exclusions, costs and claims support.','insurance renewal checklist Singapore','Your insurance renewal checklist.','Prepare your documents, record what has changed and compare policy terms before renewing employee benefits or Business Insurance in Singapore.','Article'],
  ['employerGuide','SME Employee Insurance Guide Singapore | Inspro','Understand employee insurance for Singapore SMEs. Compare group medical, work injury and foreign-worker cover, then prepare a clear benefits quotation brief.','SME employee insurance requirements Singapore','Which employee insurance does your SME need?','Group medical benefits, work injury compensation and work-pass medical requirements address different needs. Use this Singapore employer guide to separate them before comparing quotations.','Article'],
];

export const pages = rows.map(([key,title,description,keyword,h1,intro,type]) => ({
  key, route: routes[key], title, description, keyword, h1, intro, type,
  isNew: key === 'employerGuide',
  image: `/assets/images/optimized/${['care','benefits','portal'].includes(key) ? 'employee-benefits' : ['personal','travel'].includes(key) ? 'personal-insurance' : 'business-insurance'}-1280.webp`,
}));

export const pageByRoute = new Map(pages.map(page => [page.route, page]));
export const breadcrumbLabels = {
  benefits: 'Employee Benefits (Life & Medical)', business: 'Business Insurance',
  care: 'BenefitsCare for SME', portal: 'Portal Preview', personal: 'Personal Insurance',
  travel: 'Travel Insurance', about: 'About Us', contact: 'Contact Us',
  claims: 'Claims Support', privacy: 'Privacy & Security',
  guides: 'Insurance Guides', checklist: 'Renewal Checklist', employerGuide: 'SME Employee Insurance Guide',
};
export function parentRoute(page) {
  if (page.key === 'portal') return routes.benefits;
  if (['benefits','business'].includes(page.key)) return routes.home;
  if (page.route.startsWith('/service-details/commercial/') && page.key !== 'business') return routes.business;
  if (page.route.startsWith('/service-details/personal/') && page.key !== 'personal') return routes.personal;
  if (page.type === 'Article') return routes.guides;
  if (['personal'].includes(page.key)) return routes.home;
  return routes.home;
}
