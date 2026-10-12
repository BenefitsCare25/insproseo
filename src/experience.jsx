import React, { useState, useEffect } from 'react';
import { motion, MotionConfig, useReducedMotion, useAnimate } from 'motion/react';
import { ArrowUpRight, ArrowRight, Check, Users, HeartPulse, Building2, BriefcaseBusiness, Plane, House, CarFront, FileCheck2, Smartphone, SlidersHorizontal, MapPin, ClipboardList, ShieldCheck, Wallet, CircleHelp } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs.jsx';
import { Button } from './components/ui/button.jsx';
import { PortalShowcase, PortalTeaser } from './portal-showcase.jsx';
import { plans } from './data/benefitscare.mjs';

const iconMap = { arrow: ArrowUpRight, next: ArrowRight, check: Check, people: Users, health: HeartPulse, business: Building2, briefcase: BriefcaseBusiness, travel: Plane, home: House, motor: CarFront, claims: FileCheck2, mobile: Smartphone, flex: SlidersHorizontal, location: MapPin, list: ClipboardList, shield: ShieldCheck, wallet: Wallet, help: CircleHelp };
export function Icon({ name = 'arrow', ...props }) {
  const Component = iconMap[name] || ArrowUpRight;
  return <Component size={22} strokeWidth={1.6} aria-hidden="true" {...props} />;
}
function Plans() {
  const [selected, setSelected] = useState('flex');
  const reduce = useReducedMotion();
  return <div className="plan-picker"><div className="xp-plans">{plans.map(plan => (
    <motion.article key={plan.id} className={`xp-plan ${selected === plan.id ? 'is-selected' : ''}`} whileHover={reduce ? undefined : { y: -7 }} transition={{ type: 'spring', stiffness: 320, damping: 28 }}>
      <button type="button" className="xp-plan-select" aria-pressed={selected === plan.id} onClick={() => setSelected(plan.id)}>
        <span className="xp-plan-name"><Icon name={plan.icon} />{plan.name}<span className="xp-radio">{selected === plan.id && <Check size={13} />}</span></span>
        <span className="xp-price"><small>from</small><strong>S${plan.price}</strong></span>
        <span className="xp-price-unit">per employee / month</span>
        <span className="xp-plan-desc">{plan.text}</span>
      </button>
      <ul>{plan.features.map(item => <li key={item}><Check size={17} />{item}</li>)}</ul>
      <Button asChild variant={selected === plan.id ? 'default' : 'outline'}><a href={`/contact-us/?intent=benefitscare&plan=${plan.id}`} aria-label={`Review ${plan.name} — BenefitsCare for SME`}>Review<ArrowUpRight size={18} /></a></Button>
    </motion.article>
  ))}</div><p className="xp-fine">Indicative starting prices. Quotation required. Benefits, eligibility, limits and exclusions are subject to the insurer’s terms. Inpatient hospitalisation is included in Premier, subject to policy terms.</p></div>;
}
const explorerData = {
  business: [
    { id: 'premises', label: 'Premises', icon: 'business', title: 'Protect what keeps you running.', text: 'What would it take to recover after damage to your workplace?', items: [['business', 'Property & equipment', 'Review buildings, contents, stock and equipment.'], ['wallet', 'Business interruption', 'Discuss income loss and recovery costs following an insured event.']], action: 'Review premises cover', intent: 'business' },
    { id: 'people', label: 'People', icon: 'people', title: 'Look after the people behind it.', text: 'Does your cover reflect the work your team actually does?', items: [['shield', 'Work injury compensation', 'Review the scope for your workforce and job duties.'], ['health', 'Employee Benefits (Life & Medical)', 'Medical and other benefits shaped around your team.']], action: 'Review workforce cover', intent: 'business' },
    { id: 'liability', label: 'Liability', icon: 'shield', title: 'Understand your responsibilities.', text: 'Could a claim against your business interrupt your plans?', items: [['people', 'Public liability', 'Discuss third-party injury and property damage exposures.'], ['briefcase', 'Professional risks', 'Consider liabilities arising from advice, services and management.']], action: 'Review liability cover', intent: 'business' },
    { id: 'trade', label: 'Trade', icon: 'briefcase', title: 'Keep your business moving.', text: 'Where do your goods, contracts and operations take you?', items: [['business', 'Goods & transit', 'Review cargo and transportation exposures.'], ['list', 'Contracts & projects', 'Identify insurance requirements before work begins.']], action: 'Review trade risks', intent: 'business' },
  ],
  personal: [
    { id: 'motor', label: 'Motor', icon: 'motor', title: 'For every journey.', text: 'Review the protection behind the wheel.', items: [['motor', 'Cover & excess', 'Compare the cover type, excess and driver conditions.'], ['claims', 'Repairs & claims', 'Check workshop arrangements and reporting requirements.']], action: 'Discuss motor insurance', intent: 'personal' },
    { id: 'travel', label: 'Travel', icon: 'travel', title: 'Go with a clearer plan.', text: 'Match cover to your destination, trip and activities.', items: [['health', 'Medical & assistance', 'Check overseas medical limits and relevant exclusions.'], ['travel', 'Trip disruption', 'Compare cancellation, delay and baggage benefits.']], action: 'Discuss travel insurance', intent: 'personal' },
    { id: 'home', label: 'Home', icon: 'home', title: 'For the place you call yours.', text: 'Look beyond the building to what makes it home.', items: [['home', 'Buildings & contents', 'Check what is insured and the basis of settlement.'], ['shield', 'Liability & limits', 'Review liability protection, item limits and exclusions.']], action: 'Discuss home insurance', intent: 'personal' },
  ],
};
function Explorer({ kind = 'business' }) {
  const entries = explorerData[kind];
  const [value, setValue] = useState(entries[0].id);
  const [scope, animate] = useAnimate();
  const reduce = useReducedMotion();
  useEffect(() => {
    if (kind !== 'personal') return;
    const syncHash = () => {
      const selected = location.hash.slice(1);
      if (!entries.some(entry => entry.id === selected)) return;
      setValue(selected);
      requestAnimationFrame(() => document.getElementById('cover')?.scrollIntoView({ behavior: 'instant' }));
    };
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, [kind, entries]);
  useEffect(() => {
    if (!reduce) animate('[data-state="active"] .xp-explorer-body', { opacity: [0.4, 1], y: [14, 0] }, { duration: 0.35 });
  }, [value, reduce, animate]);
  return <div ref={scope}>{kind === 'personal' && entries.map(entry => <span key={entry.id} id={entry.id} className="xp-anchor" />)}<Tabs value={value} onValueChange={setValue} className={`xp-explorer xp-explorer--${kind}`}>
    <TabsList aria-label={kind === 'corporate' ? 'Employee and HR benefits' : 'Types of cover'}>{entries.map(entry => <TabsTrigger value={entry.id} key={entry.id}><Icon name={entry.icon} /><span>{entry.label}</span>{value === entry.id && <motion.span className="xp-tab-marker" layoutId={`tab-${kind}`} transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 34 }} />}</TabsTrigger>)}</TabsList>
    {entries.map(entry => <TabsContent key={entry.id} value={entry.id} forceMount><div className="xp-explorer-body"><div className="xp-explorer-intro"><span className="xp-icon-large"><Icon name={entry.icon} size={34} /></span><h3>{entry.title}</h3><p>{entry.text}</p><Button asChild><a href={`/contact-us/?intent=${entry.intent}&topic=${entry.id}`}>{entry.action}<ArrowUpRight size={18} /></a></Button></div><div className="xp-feature-list">{entry.items.map(([icon, title, text]) => <div className="xp-feature" key={title}><Icon name={icon} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</div></div></TabsContent>)}
  </Tabs><p className="xp-fine">{kind === 'corporate' ? 'Features and support depend on your agreed programme.' : 'Availability, cover, limits and exclusions depend on the insurer and policy.'}</p></div>;
}
function Review() {
  const [value, setValue] = useState('benefitscare');
  const options = [['benefitscare', 'BenefitsCare for SME', 'health'], ['benefits', 'Employee Benefits (Life & Medical)', 'people'], ['business', 'Business Insurance', 'business'], ['personal', 'Personal Insurance', 'home']];
  return <div className="xp-review-picker"><div className="xp-review-options" role="group" aria-label="What would you like to review?">{options.map(([id, text, icon]) => <button key={id} type="button" aria-pressed={id === value} onClick={() => setValue(id)}><Icon name={icon} />{text}<span className="xp-radio">{id === value && <Check size={13} />}</span></button>)}</div><Button asChild><a href={`/contact-us/?intent=${value}`} aria-label={`Review ${options.find(([id]) => id === value)[1]}`}>Review<ArrowRight size={18} /></a></Button></div>;
}
function BenefitPreview() {
  const [value, setValue] = useState('starter');
  const [scope, animate] = useAnimate();
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!reduce) animate('[data-state="active"] .xp-benefit-panel', { opacity: [.8, 1], y: [8, 0] }, { duration: .28 });
  }, [value, reduce, animate]);
  const benefits = [['Panel GP access', 0], ['Non-panel access', 1], ['Flexible benefits', 1], ['Inpatient hospitalisation', 2]];
  return <div ref={scope} className="xp-benefit-preview"><Tabs value={value} onValueChange={setValue}>
    <TabsList aria-label="Compare BenefitsCare for SME plans">{plans.map(plan => <TabsTrigger key={plan.id} value={plan.id}><span>{plan.name}</span>{value === plan.id && <motion.span className="xp-tab-marker" layoutId="benefit-preview" transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 34 }} />}</TabsTrigger>)}</TabsList>
    {plans.map((plan, index) => <TabsContent key={plan.id} value={plan.id} forceMount><div className="xp-benefit-panel">
      <div className="xp-benefit-price"><div><h3>{plan.name}</h3><span>from <strong>S${plan.price}</strong></span></div><p>per employee<br />per month</p></div>
      <ul className="xp-benefit-inclusions">{benefits.map(([name, from]) => <li key={name}><span>{name}</span>{index >= from ? <span className="xp-included"><Check size={18} /><span className="sr-only">Included</span></span> : <span className="xp-not-included">Not included</span>}</li>)}</ul>
      <Button asChild><a href={`/contact-us/?intent=benefitscare&plan=${plan.id}`} aria-label={`Review ${plan.name} — BenefitsCare for SME`}>Review<ArrowUpRight size={18} /></a></Button>
    </div></TabsContent>)}
  </Tabs><p className="xp-fine">Indicative starting prices; quotation required. Benefits, limits and exclusions are subject to policy terms.</p></div>;
}
const stages = [
  { id: 'review', label: 'Review', title: 'Build the right programme.', text: 'Start with your workforce, priorities and current cover.', items: ['Benefit benchmarking', 'Claims experience review', 'Insurer comparison and negotiation'], icon: 'list' },
  { id: 'implement', label: 'Implement', title: 'Get your team set up.', text: 'Coordinate the practical details before the programme begins.', items: ['Enrolment and underwriting follow-up', 'Portal setup', 'Welcome emails and employee communications'], icon: 'people' },
  { id: 'support', label: 'Support', title: 'Keep the everyday moving.', text: 'Have a team to turn to for benefits and claims administration.', items: ['Benefits and claims enquiries', 'Document checks and insurer follow-up', 'Settlement and letter-of-guarantee queries'], icon: 'claims' },
  { id: 'renew', label: 'Renew', title: 'Review before you renew.', text: 'Look at how the programme is working and what needs to change.', items: ['Utilisation and cost review', 'Service feedback', 'Benefit changes and remarketing'], icon: 'flex' },
];
function ServiceCycle() {
  const [value, setValue] = useState('review');
  const [scope, animate] = useAnimate();
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!reduce) animate('[data-state="active"] .xp-cycle-panel', { opacity: [.75, 1], y: [10, 0] }, { duration: .3 });
  }, [value, reduce, animate]);
  return <div ref={scope}><Tabs value={value} onValueChange={setValue} className="xp-service-cycle">
    <TabsList aria-label="Support through the policy year">{stages.map((stage, index) => <TabsTrigger key={stage.id} value={stage.id}><span className="xp-cycle-index">0{index + 1}</span><span>{stage.label}</span>{value === stage.id && <motion.span className="xp-cycle-marker" layoutId="service-cycle" transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 340, damping: 32 }} />}</TabsTrigger>)}</TabsList>
    {stages.map(stage => <TabsContent key={stage.id} value={stage.id} forceMount><div className="xp-cycle-panel"><div className="xp-cycle-copy"><Icon name={stage.icon} size={30} /><h3>{stage.title}</h3><p>{stage.text}</p><a className="xp-link" href="/contact-us/?intent=benefits" aria-label="Review Employee Benefits (Life & Medical)">Review<ArrowUpRight size={18} /></a></div><div className="xp-cycle-deliverables"><h4>How Inspro helps</h4><ul>{stage.items.map(item => <li key={item}><Check size={18} /><span>{item}</span></li>)}</ul></div></div></TabsContent>)}
  </Tabs></div>;
}
export function Island({ type }) {
  return <MotionConfig reducedMotion="user">{type === 'portal' ? <PortalShowcase /> : type === 'portal-teaser' ? <PortalTeaser /> : type === 'plans' ? <Plans /> : type === 'review' ? <Review /> : type === 'benefit-preview' ? <BenefitPreview /> : type === 'service-cycle' ? <ServiceCycle /> : <Explorer kind={type} />}</MotionConfig>;
}
