export const serviceConnections = [
  ['insurance', 'shield', 'Insurance', 'Employee benefits & general cover'],
  ['flex', 'money', 'Flexible benefits', 'Non-insured benefits administration'],
  ['medical', 'medical', 'Medical services', 'Check-ups & health screening'],
  ['lifestyle', 'home', 'Lifestyle', 'Personal insurance options'],
  ['wellness', 'health', 'Wellness', 'Programmes, talks & marketplace'],
];

export const optionalGroups = [
  {
    id: 'insurance', label: 'Insurance', title: 'Build the cover around your workforce.',
    description: 'Explore life, medical and workforce cover for your team.',
    sections: [
      ['shield', 'Life & accident', 'Term life · Critical illness · Personal accident'],
      ['medical', 'Medical care', 'Hospital & surgical · Major medical · Outpatient clinical · Outpatient specialist · Dental'],
      ['worker', 'Workforce & travel', 'Foreign-worker medical · Work injury compensation · Business travel'],
    ],
  },
  {
    id: 'wellness', label: 'Flex & wellness', title: 'Make room for different needs.',
    description: 'More choice for your people, with administration support from Inspro.',
    sections: [
      ['money', 'Flexible benefits', 'Third-party administration of agreed non-insured benefits.'],
      ['people', 'Mental wellness', 'Discuss suitable mental wellbeing support for your team.'],
      ['health', 'Wellness programmes', 'Corporate wellness, health talks and wellness marketplace services.'],
      ['medical', 'Medical services', 'Pre-employment check-ups and health screening.'],
    ],
  },
  {
    id: 'lifestyle', label: 'Lifestyle', title: 'Care beyond the workplace.',
    description: 'Personal cover for life beyond work.',
    sections: [
      ['travel', 'Travel', 'Cover for personal trips and travel needs.'],
      ['car', 'Motor car', 'Review vehicle cover and driver requirements.'],
      ['home', 'Home', 'Consider your home, contents and personal responsibilities.'],
      ['people', 'Domestic helper', 'Discuss maid insurance and related household requirements.'],
    ],
  },
];

export const schemeFeatures = [
  ['layers', 'Scheme insurance arrangements', 'Discuss pre-arranged rates, scheme-specific extensions and portfolio underwriting in your quotation.'],
  ['list', 'Administration through Inspro', 'Coordinate agreed flexible benefits, medical services and wellness support through the scheme.'],
  ['mobile', 'Mobile access', 'Use the scheme’s mobile services to access benefits, where included in your programme.'],
  ['support', '24/7 scheme helpdesk', 'Around-the-clock scheme support. Confirm the helpdesk contact route and service scope for your plan.'],
];

export const quotationQuestions = [
  ['What does the listed monthly price include?', 'The indicative starting prices are S$2 for Starter, S$4 for Flex and S$6 for Premier per employee per month. Your quotation confirms the total premium, taxes, separate fees, benefit limits, eligibility and employee co-payments.'],
  ['Can a small company request BenefitsCare for SME?', 'Yes. Share your headcount and workforce profile so Inspro can confirm eligibility, minimum participation and the terms for your chosen plan.'],
  ['What does panel GP access mean?', 'A panel is a network of participating clinics. GP means general practitioner. Check the clinic list, treatment benefits, visit limits and any employee co-payment for your plan.'],
  ['Does every plan include hospital insurance?', 'Starter focuses on panel GP access. Flex adds non-panel access and flexible benefits. Premier includes inpatient hospitalisation, subject to the insurer’s terms. Confirm limits, eligibility, exclusions and any employee payment before choosing.'],
  ['What if we have a larger workforce?', 'Share your headcount, planned growth and benefit priorities with Inspro to review a suitable BenefitsCare plan and service mix.'],
];
