export const plans = [
  { id: 'starter', name: 'Starter', price: 2, text: 'Start with everyday care.', features: ['Panel GP access'], icon: 'health' },
  { id: 'flex', name: 'Flex', price: 4, text: 'Give your people more choice.', features: ['Panel GP access', 'Non-panel access', 'Flexible benefits'], icon: 'flex' },
  { id: 'premier', name: 'Premier', price: 6, text: 'Bring hospital cover into the picture.', features: ['Everything in Flex', 'Inpatient hospitalisation'], icon: 'shield' },
];

export const planFeatureDetails = {
  'Panel GP access': ['medical', 'Care through participating GP clinics.'],
  'Non-panel access': ['location', 'More choice of clinic, within the agreed benefits.'],
  'Flexible benefits': ['money', 'An agreed allowance for eligible benefit choices.'],
  'Inpatient hospitalisation': ['business', 'Hospital cover under the insurer’s policy terms.'],
};

export function featuresForPlan(plan) {
  if (plan.id !== 'premier') return plan.features;
  return [...plans.find(item => item.id === 'flex').features, ...plan.features.filter(item => item !== 'Everything in Flex')];
}
