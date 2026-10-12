import React, { useEffect, useState } from 'react';
import { motion, useAnimate, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Check, ChevronRight, FileText, FileCheck2, Users, HeartPulse, MapPin, CreditCard, Wallet, ClipboardList, Building2, MessageSquare, Paperclip } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs.jsx';

const roles = [
  { id: 'employees', label: 'Employees', icon: Users, title: 'Your benefits, at hand.', description: 'See your cover and take the next step, wherever the day takes you.', features: [
    { id: 'benefits', label: 'Cover & balances', icon: Wallet, text: 'Check your benefit statement, claim usage and flexible-benefits balance.', note: 'Benefits and balances reflect your employer’s programme.' },
    { id: 'claims', label: 'Claims & updates', icon: FileText, text: 'Upload supporting documents, review prefilled details and follow your claim. Keep questions and replies with the claim.', note: 'Document autofill is available where configured. Review details before submitting.' },
    { id: 'care', label: 'Clinics & e-card', icon: MapPin, text: 'Find panel clinics by location and access your digital card before a visit.', note: 'Panel access, card availability and treatment terms depend on your cover.' },
    { id: 'enrolment', label: 'Benefit enrolment', icon: ClipboardList, text: 'Review eligible choices, select benefits and complete your enrolment form during an open enrolment period.', note: 'Options, dependant eligibility and enrolment dates are set for your programme.' },
  ] },
  { id: 'hr', label: 'HR teams', icon: Building2, title: 'Practical tools for HR.', description: 'Support your people with the records and tasks you need.', features: [
    { id: 'hr-claims', label: 'Submit employee claims', icon: FileCheck2, text: 'Submit claims on behalf of employees, attach supporting documents and track the HR-submitted claims your role permits.', note: 'HR access does not give unrestricted visibility of employees’ personal claims.' },
    { id: 'forms', label: 'Download enrolment forms', icon: ClipboardList, text: 'Find filed enrolment forms and download individual PDFs, a ZIP bundle or an Excel summary.', note: 'HR can view and download. Review and acknowledgement stay with Inspro.' },
  ] },
  { id: 'inspro', label: 'Inspro support', icon: HeartPulse, title: 'A team behind the tools.', description: 'Our broker workspace connects programme setup with ongoing administration.', features: [
    { id: 'coverage', label: 'Coverage administration', icon: Users, text: 'Inspro configures benefit schedules, matches employee records to cover and manages enrolment for each benefit year.', note: 'Programme setup follows the agreed insurer terms and employer requirements.' },
    { id: 'review', label: 'Claims follow-up', icon: MessageSquare, text: 'Our team reviews documents, requests missing information and records assessment and insurer follow-up.', note: 'Insurance claims remain subject to policy terms and the insurer’s assessment.' },
    { id: 'reports', label: 'Programme reporting', icon: ClipboardList, text: 'Inspro prepares member, enrolment, flex and claims reports to support administration and programme review.', note: 'Reporting scope is agreed with your organisation.' },
  ] },
];

function RecordRow({ icon: Icon = FileText, title, detail, status }) {
  return <div className="xp-demo-row"><Icon size={19} aria-hidden="true" /><div><strong>{title}</strong>{detail && <span>{detail}</span>}</div>{status && <span className="xp-demo-status">{status}</span>}</div>;
}

function BenefitsScene() {
  return <><div className="xp-demo-balance"><div><span>Flexible benefits</span><strong>S$325<span>left after pending claims</span></strong></div><Wallet size={30} aria-hidden="true" /></div><div className="xp-demo-ledger"><div><span>Allowance</span><strong>S$500</strong></div><div><span>Approved</span><strong>S$125</strong></div><div><span>Pending</span><strong>S$50</strong></div></div><div className="xp-demo-records"><RecordRow icon={HeartPulse} title="Outpatient medical" detail="Benefit schedule and cover details" /><RecordRow icon={Users} title="Dependants" detail="View recorded family coverage" /></div></>;
}

function ClaimsScene({ hr = false, review = false }) {
  return <><div className="xp-demo-claim-heading"><div><span>{hr ? 'HR-submitted claim' : review ? 'Claims review' : 'My claim'}</span><h4>Outpatient consultation</h4></div><span className="xp-demo-status">Under review</span></div><div className="xp-demo-records"><RecordRow icon={Paperclip} title="Supporting documents" detail="Receipt attached" status="PDF" />{hr && <RecordRow icon={Users} title="Employee A" detail="Submitted by HR" />}</div><ol className="xp-demo-steps"><li><Check size={16} aria-hidden="true" /><span>Submitted</span></li><li className="is-current"><span className="xp-demo-step-dot" /><span>Under review</span></li><li><span className="xp-demo-step-dot" /><span>Outcome</span></li></ol><div className="xp-demo-message"><MessageSquare size={20} aria-hidden="true" /><div><strong>{hr ? 'Track your submission' : review ? 'Documents and follow-up together' : 'Keep the conversation together'}</strong><p>{hr ? 'View the status and supporting documents for permitted HR-submitted claims.' : review ? 'Review evidence and request any missing information.' : 'Read claim updates and reply to requests for information.'}</p></div></div></>;
}

function CareScene() {
  return <><div className="xp-demo-care"><div className="xp-demo-card"><CreditCard size={25} aria-hidden="true" /><span>Digital panel card</span><strong>Employee A</strong><span>Sample programme</span></div><div className="xp-demo-clinic"><MapPin size={25} aria-hidden="true" /><h4>Find panel care</h4><p>Search by location, clinic name or area.</p><span className="xp-demo-tag">GP clinics</span></div></div><RecordRow icon={MapPin} title="Example panel clinic" detail="Address, contact and clinic details" /></>;
}

function EnrolmentScene() {
  return <><div className="xp-demo-claim-heading"><div><span>Benefit enrolment</span><h4>Choose what fits.</h4></div><ClipboardList size={26} aria-hidden="true" /></div><div className="xp-demo-records"><RecordRow icon={Check} title="Review eligible benefits" detail="Your employer’s available options" /><RecordRow icon={Check} title="Make your selections" detail="Cover and flexible-benefit choices" /><RecordRow icon={FileText} title="Review & complete your form" detail="Declarations and enrolment details" /></div></>;
}

function FormsScene() {
  return <><div className="xp-demo-claim-heading"><div><span>Enrolment register</span><h4>Filed forms, together.</h4></div><FileCheck2 size={26} aria-hidden="true" /></div><div className="xp-demo-records"><RecordRow title="Employee A" detail="Enrolment form" status="Submitted" /><RecordRow title="Employee B" detail="Enrolment form" status="Acknowledged" /><RecordRow title="Employee C" detail="Enrolment form" status="Submitted" /></div><div className="xp-demo-formats"><span>Download formats</span><strong>PDF, ZIP and Excel</strong></div></>;
}

function CoverageScene() {
  return <><div className="xp-demo-claim-heading"><div><span>Coverage administration</span><h4>From plan to people.</h4></div><Users size={26} aria-hidden="true" /></div><div className="xp-demo-records"><RecordRow icon={ClipboardList} title="Benefit schedule" detail="Benefits, limits and eligible groups" status="Configured" /><RecordRow icon={Users} title="Member coverage" detail="Employee records matched to cover" status="Matched" /><RecordRow icon={FileCheck2} title="Enrolment" detail="Selections and confirmations" status="Reviewed" /></div></>;
}

function ReportsScene() {
  return <><div className="xp-demo-claim-heading"><div><span>Programme reports</span><h4>Records for the next review.</h4></div><ClipboardList size={26} aria-hidden="true" /></div><div className="xp-demo-records"><RecordRow title="Member & coverage records" detail="Programme administration" status="Excel" /><RecordRow title="Enrolment & flex records" detail="Selections and benefits" status="Excel" /><RecordRow title="Claims register" detail="Claims and assessment records" status="Excel" /></div></>;
}

const scenes = { benefits: BenefitsScene, claims: ClaimsScene, care: CareScene, enrolment: EnrolmentScene, forms: FormsScene, coverage: CoverageScene, reports: ReportsScene };

function FeatureScene({ feature }) {
  const Scene = scenes[feature.id];
  return <div className="xp-portal-scene"><div className="xp-demo-top"><span>Inspro <span>benefits portal</span></span><span>Illustrative preview</span></div><div className="xp-demo-screen">{Scene ? <Scene /> : <ClaimsScene hr={feature.id === 'hr-claims'} review={feature.id === 'review'} />}</div><p className="xp-demo-caption">Sample information. {feature.note}</p></div>;
}

function RoleFeatures({ role }) {
  const [selected, setSelected] = useState(role.features[0].id);
  const [scope, animate] = useAnimate();
  const reduce = useReducedMotion();
  useEffect(() => {
    const requested = new URLSearchParams(location.search).get('feature');
    if (role.features.some(feature => feature.id === requested)) setSelected(requested);
  }, [role]);
  useEffect(() => {
    if (!reduce) animate('.xp-portal-feature-panel[data-state="active"] .xp-portal-scene', { opacity: [.5, 1], y: [10, 0] }, { duration: .32, ease: [.16, 1, .3, 1] });
  }, [selected, reduce, animate]);
  return <div ref={scope}><div className="xp-role-heading"><h2>{role.title}</h2><p>{role.description}</p></div><Tabs value={selected} onValueChange={setSelected} orientation="vertical" className="xp-portal-workspace"><TabsList className="xp-portal-features" aria-label={`${role.label} features`}>{role.features.map(feature => <TabsTrigger key={feature.id} value={feature.id}><feature.icon size={20} aria-hidden="true" /><span>{feature.label}</span><ChevronRight size={17} aria-hidden="true" /></TabsTrigger>)}</TabsList><div className="xp-portal-feature-body">{role.features.map(feature => <TabsContent className="xp-portal-feature-panel" key={feature.id} value={feature.id} forceMount><div className="xp-portal-feature-copy"><h3>{feature.label}</h3><p>{feature.text}</p></div><FeatureScene feature={feature} /></TabsContent>)}</div></Tabs></div>;
}

export function PortalShowcase() {
  const [role, setRole] = useState('employees');
  const reduce = useReducedMotion();
  useEffect(() => {
    const requested = new URLSearchParams(location.search).get('role');
    if (roles.some(item => item.id === requested)) setRole(requested);
  }, []);
  return <div className="xp-portal-showcase"><Tabs value={role} onValueChange={setRole}><TabsList className="xp-portal-roles" aria-label="Explore the portal by role">{roles.map(item => <TabsTrigger key={item.id} value={item.id}><item.icon size={19} aria-hidden="true" /><span>{item.label}</span>{role === item.id && <motion.span className="xp-tab-marker" layoutId="portal-role" transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 34 }} />}</TabsTrigger>)}</TabsList>{roles.map(item => <TabsContent key={item.id} value={item.id} forceMount className="xp-portal-role-panel"><RoleFeatures role={item} /></TabsContent>)}</Tabs></div>;
}

function useLiveReducedMotion() {
  const initial = useReducedMotion();
  const [reduce, setReduce] = useState(Boolean(initial));
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduce(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  return reduce;
}

const teaserDescriptions = {
  benefits: 'Cover, usage and your available balance.',
  claims: 'Documents, status and updates.',
  care: 'Panel clinics and your digital card.',
  enrolment: 'Eligible choices and enrolment forms.',
  'hr-claims': 'Submit and track permitted HR-submitted claims.',
  forms: 'Filed forms in PDF, ZIP and Excel.',
};

export function PortalTeaser() {
  const [role, setRole] = useState('employees');
  const [scope, animate] = useAnimate();
  const reduce = useLiveReducedMotion();
  const previewRoles = roles.slice(0, 2);
  useEffect(() => {
    const controls = animate('.hp-portal-role[data-state="active"] .hp-preview-feature', reduce ? {
      opacity: 1, x: 0,
    } : { opacity: [.5, 1], x: [role === 'employees' ? -10 : 10, 0] }, {
      duration: reduce ? 0 : .26, ease: [.16, 1, .3, 1],
    });
    return () => controls.stop();
  }, [role, reduce, animate]);
  return <div className="xp-portal-teaser">
    <div className="xp-portal-teaser-copy">
      <h2>Benefits your team can actually use.</h2>
      <p>Employee self-service and practical HR tools, connected to your benefits programme.</p>
      <dl className="hp-portal-guidance">
        <div><dt>For employees</dt><dd>Check what your programme covers before a visit or claim.</dd></div>
        <div><dt>For HR teams</dt><dd>Support permitted employee claims and retrieve filed enrolment forms.</dd></div>
      </dl>
      <a href={`/employee-benefits/portal/?role=${role}`} className="xp-button">Preview the benefits portal<ArrowUpRight size={18} aria-hidden="true" /></a>
      <p className="hp-portal-note">A feature preview. Your employer provides access to your live programme.</p>
    </div>
    <div ref={scope} className="hp-portal-preview">
      <Tabs value={role} onValueChange={setRole}>
        <TabsList className="hp-preview-roles" aria-label="Preview portal tools by role">
          {previewRoles.map(item => <TabsTrigger key={item.id} value={item.id}><item.icon size={18} aria-hidden="true" /><span>{item.label}</span></TabsTrigger>)}
        </TabsList>
        {previewRoles.map(item => <TabsContent key={item.id} value={item.id} forceMount className="hp-portal-role">
          <ul className="hp-preview-features">
            {item.features.map(feature => <li className="hp-preview-feature" key={feature.id}>
              <feature.icon size={20} aria-hidden="true" />
              <span><strong>{feature.label}</strong><span>{teaserDescriptions[feature.id]}</span></span>
            </li>)}
          </ul>
          <p className="hp-preview-note">{item.id === 'hr' ? 'HR access is limited to permitted tasks. Enrolment review and acknowledgement remain with Inspro.' : 'Cover, panel access and available tools depend on your employer’s programme.'}</p>
        </TabsContent>)}
      </Tabs>
    </div>
  </div>;
}
