export const travelRoute = '/service-details/personal/travel-insurance/';
const commercial = '/service-details/commercial/';
const personal = '/service-details/personal/';

export const retiredGuides = [
  ['/employee-benefits/group-medical-insurance/', 'benefits', 'medical'],
  [commercial + 'work-injury-compensation-insurance/', 'business', 'people'],
  [commercial + 'public-liability-insurance/', 'business', 'liability'],
  [commercial + 'professional-indemnity-insurance/', 'business', 'professional'],
  [commercial + 'foreign-worker-medical-insurance/', 'business', 'medical'],
  [commercial + 'foreign-workers-bonds/', 'business', 'bonds'],
  [personal + 'motor-insurance/', 'personal', 'motor'],
  [personal + 'home-insurance/', 'personal', 'home'],
  [personal + 'personal-accident-insurance/', 'personal', 'accident'],
  [personal + 'maid-insurance/', 'personal', 'helper'],
];

export const productIntents = new Map([
  ['/employee-benefits/benefitscare/', 'benefitscare'],
  [commercial + 'employees-benefits/', 'benefits'],
  [commercial + 'commercialoffice-package/', 'business'],
  [personal + 'view-personal-insurance-products/', 'personal'],
]);

export const reviewHref = (intent, topic) => '/contact-us/?' + new URLSearchParams({
  intent, ...(topic ? { topic } : {}),
});

export const retiredGuideTargets = new Map(retiredGuides.map(([route, intent, topic]) => [
  route, reviewHref(intent, topic),
]));
