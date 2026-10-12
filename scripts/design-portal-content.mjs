export const portalRoles = [
  { id: 'employees', label: 'Employees', icon: 'people', features: [
    { id: 'benefits', label: 'Cover & balances', icon: 'money' },
    { id: 'claims', label: 'Claims & updates', icon: 'document' },
    { id: 'care', label: 'Clinics & e-card', icon: 'location' },
    { id: 'enrolment', label: 'Benefit enrolment', icon: 'list' },
  ] },
  { id: 'hr', label: 'HR teams', icon: 'business', features: [
    { id: 'hr-claims', label: 'Employee claims', icon: 'document' },
    { id: 'forms', label: 'Enrolment forms', icon: 'list' },
  ] },
  { id: 'inspro', label: 'Inspro support', icon: 'support', features: [
    { id: 'coverage', label: 'Coverage setup', icon: 'shield' },
    { id: 'review', label: 'Claims follow-up', icon: 'mail' },
    { id: 'reports', label: 'Programme reports', icon: 'list' },
  ] },
];

export const portalQuestions = [
  ['What is the Inspro employee benefits portal?', 'The Inspro employee benefits portal connects employee self-service, authorised HR tasks and broker administration for Singapore benefits programmes. Employees can review cover and balances, follow claims, find panel clinics and complete eligible enrolment. Features depend on the agreed programme.'],
  ['Are all portal features included in every plan?', 'No. Available benefits, panel access, enrolment options and portal permissions depend on your agreed programme. Inspro confirms the features and support included in your quotation. Claims remain subject to policy terms and insurer assessment.'],
  ['What can HR teams see and do?', 'Authorised HR users can submit employee claims and track the HR-submitted claims their role permits, and view or download filed enrolment forms. HR access does not give unrestricted visibility of employees’ personal claims. Form review and acknowledgement remain with Inspro.'],
  ['How does my team access the portal?', 'Employees and authorised HR users receive the relevant sign-in details when their programme is set up. Existing members should use the portal link supplied by their employer or contact Inspro for access help.'],
  ['Can I submit a claim through this preview?', 'This public page uses illustrative records, amounts and clinic locations. Use your company’s portal or the claim channel confirmed for your policy to submit documents. Preview controls do not connect to an account, submit claims or download personal documents.'],
];
