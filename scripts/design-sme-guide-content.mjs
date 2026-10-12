import { routes } from './seo/page-map.mjs';

export const employeeCovers = [
  {
    id: 'group-medical', title: 'Group medical benefits.', purpose: 'Healthcare benefits for your people.',
    detail: 'A group programme provides agreed healthcare benefits for eligible employees. Start with the care your people need and the benefit schedule you want to offer.',
    workforce: 'Confirm the staff categories, eligibility rules and any dependant coverage you want to discuss.',
    prepare: 'Compare outpatient and hospital benefits, limits, exclusions, panel access and claims arrangements. Additional benefits depend on the programme you select.',
    sources: [],
  },
  {
    id: 'work-injury', title: 'Work injury compensation.', purpose: 'An employer’s work injury responsibilities.',
    detail: 'Work injury compensation insurance addresses eligible work-related injury claims. The compulsory insurance rules depend on employees’ duties and salary.',
    workforce: 'Insurance is compulsory for manual employees at any salary and non-manual employees earning S$2,600 or less monthly under MOM’s salary definition. Other employees can still have valid compensation claims even if they are not insured.',
    prepare: 'Declare occupations, headcount and wages accurately. Confirm a designated insurer and the required policy terms. Check MOM’s salary definition when assessing the compulsory group.',
    sources: [['MOM work injury insurance requirements', 'https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/work-injury-compensation-insurance']],
  },
  {
    id: 'work-pass-medical', title: 'Work-pass medical insurance.', purpose: 'Medical cover tied to work-pass requirements.',
    detail: 'Work Permit and S Pass medical insurance requirements include inpatient care and day surgery, including conditions that are not work-related.',
    workforce: 'Identify the Work Permit and S Pass holders you employ. Check the requirements for each pass category and any applicable exception.',
    prepare: 'Confirm the current annual minimum, sub-limits, employer co-payment, exclusions and hospital-payment arrangements. Check that the policy dates and insurance details meet the relevant pass requirements.',
    sources: [
      ['MOM Work Permit medical insurance', 'https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/medical-insurance'],
      ['MOM S Pass medical insurance', 'https://www.mom.gov.sg/passes-and-permits/s-pass/medical-insurance'],
    ],
  },
  {
    id: 'security-bond', title: 'Security bond.', purpose: 'A guarantee for Work Permit obligations.',
    detail: 'A security bond is a bank or insurer’s guarantee tied to Work Permit and bond conditions. Its purpose is separate from paying an employee’s medical bills.',
    workforce: 'Check the bond requirement for the non-Malaysian Work Permit holders you employ.',
    prepare: 'Confirm the required guarantee, submission arrangements and effective date before the worker arrives. Check the conditions and when the bond can be discharged.',
    sources: [['MOM security bond requirements', 'https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/security-bond']],
  },
];

export const quotationBrief = [
  ['Workforce profile', 'Record employee numbers, categories, age bands, actual duties and pass types. Use an overview for the initial discussion; keep personal identifiers out of the website form.'],
  ['Required cover and additional benefits', 'Separate compulsory requirements from the outpatient, dental, life or flexible benefits you want to offer. Record which staff groups each arrangement should cover.'],
  ['Current policies and priorities', 'List renewal dates and benefit limits, then note the practical issues you want the next programme to solve.'],
  ['Everyday administration', 'Compare employee access, claim handling, additions and removals as well as price. Identify who will handle each task.'],
  ['Start date and communication', 'Confirm the final schedule and communicate eligible benefits before the programme starts.'],
];

export const employerQuestions = [
  ['How much will employee insurance cost?', 'There is no universal premium. Workforce profile, benefits, limits, insurer terms and the information available for underwriting affect a quotation. Compare the same assumptions and ask for taxes, fees and employee payments to be shown clearly.'],
  ['Can we just renew last year’s cover?', 'Review changes first: headcount, job duties, pass types, benefits and claims-administration needs. A renewal quotation is a useful point to check whether the policy still reflects the business.'],
  ['What should we do before sending staff records?', 'Ask Inspro which information is needed and the appropriate channel for it. Keep NRIC numbers, medical documents and complete employee records out of an initial website enquiry.'],
];

export const guideSections = [
  ...employeeCovers.map(cover => [cover.id, cover.title.replace(/\.$/, '')]),
  ['quotation-brief', 'Your quotation brief'], ['employer-questions', 'Employer questions'],
];

export const employeeProductLinks = [
  ['BenefitsCare for SME', routes.care], ['Employee Benefits (Life & Medical)', routes.benefits],
];
