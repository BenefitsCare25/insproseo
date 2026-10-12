import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ArrowUpRight, BookOpen, Building2, Car, Check, ClipboardList, FileCheck2, HeartPulse, House, LifeBuoy, Mail, MapPin, Phone, Smartphone, Plane, Search, ShieldCheck, Stethoscope, Users, HardHat, BriefcaseBusiness, RotateCw, Store, Utensils, Factory, GraduationCap, Wallet, LockKeyhole, Truck, Square, CirclePause, SlidersHorizontal, Layers, Ship, Minus } from 'lucide-react';

const icons = { arrow: ArrowUpRight, book: BookOpen, business: Building2, car: Car, check: Check, list: ClipboardList, document: FileCheck2, health: HeartPulse, home: House, support: LifeBuoy, mail: Mail, location: MapPin, phone: Phone, mobile: Smartphone, travel: Plane, search: Search, shield: ShieldCheck, medical: Stethoscope, people: Users, worker: HardHat, professional: BriefcaseBusiness, renew: RotateCw, shop: Store, food: Utensils, factory: Factory, education: GraduationCap, money: Wallet, lock: LockKeyhole, transit: Truck, glass: Square, continuity: CirclePause, limits: SlidersHorizontal, layers: Layers, ship: Ship, minus: Minus };
export const icon = name => renderToStaticMarkup(createElement(icons[name] || ShieldCheck, { width: 24, height: 24, strokeWidth: 1.6, 'aria-hidden': true }));
export const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
export const photo = (stem, eager = false) => `<img src="/assets/images/optimized/${stem}-1280.webp" srcset="/assets/images/optimized/${stem}-640.webp 640w, /assets/images/optimized/${stem}-1280.webp 1280w" sizes="(max-width: 760px) 100vw, 45vw" width="1280" height="720" alt="" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;

const benefits = { image: 'employee-benefits', icon: 'health', title: 'For the people behind your business.', points: ['Employee healthcare', 'Benefits administration', 'Claims support'], intent: 'benefits' };
const business = { image: 'business-insurance', icon: 'business', title: 'Built around the way you work.', points: ['Your operations', 'Your responsibilities', 'Your next renewal'], intent: 'business' };
const personal = { image: 'personal-insurance', icon: 'home', title: 'For life, in and beyond Singapore.', points: ['Understand your cover', 'Compare the details', 'Plan your next step'], intent: 'personal' };
const reading = { image: 'consultation-table', icon: 'book', title: 'A little preparation. A clearer decision.', points: ['Gather your policies', 'Review what has changed', 'Ask the right questions'], intent: 'review', quiet: true };

export function profileFor(route) {
  let base = route.includes('/personal/') ? personal : route.includes('employee') || route.includes('benefits') ? benefits : business;
  if (route.includes('/guides/') || route.includes('privacy')) base = reading;
  const overrides = [
    ['benefitscare', { icon: 'health', title: 'A starting point for smaller teams.', points: ['Starter · panel GP care', 'Flex · more flexibility', 'Premier · inpatient option'], intent: 'benefitscare' }],
    ['group-medical', { icon: 'medical', title: 'Make healthcare part of your benefits.', points: ['Hospital & surgical', 'Outpatient access', 'Limits & eligibility'] }],
    ['work-injury', { icon: 'worker', title: 'Protect your team. Know your obligations.', points: ['Employee roles', 'Declared earnings', 'Policy requirements'] }],
    ['public-liability', { icon: 'shield', title: 'Where your business meets the public.', points: ['Business activities', 'Third-party risks', 'Limits & exclusions'] }],
    ['professional-indemnity', { icon: 'professional', title: 'For the advice and services you provide.', points: ['Professional activities', 'Claims-made terms', 'Retroactive dates'] }],
    ['foreign-worker-medical', { icon: 'medical', title: 'Care for the people you employ.', points: ['Work Permit & S Pass', 'Medical benefits', 'Current MOM requirements'] }],
    ['foreign-workers-bonds', { icon: 'document', title: 'Prepare for the next employment step.', points: ['Application or renewal', 'Bond conditions', 'Related insurance'] }],
    ['travel-insurance', { icon: 'travel', title: 'Every journey starts with a plan.', points: ['Who is travelling', 'Where you are going', 'What your policy covers'], intent: 'review' }],
    ['motor-insurance', { icon: 'car', title: 'Cover for the road ahead.', points: ['Drivers & vehicle use', 'Excesses & workshops', 'Your renewal date'] }],
    ['home-insurance', { icon: 'home', title: 'For the place you call home.', points: ['Building & renovations', 'Contents & valuables', 'Liability & disruption'] }],
    ['maid-insurance', { icon: 'people', title: 'Support for your household.', points: ['Medical & accident cover', 'Security bond', 'Employer responsibilities'] }],
    ['personal-accident', { icon: 'shield', title: 'Prepare for the unexpected.', points: ['Accident benefits', 'Your activities', 'Existing cover'] }],
    ['claims-support', { image: 'consultation-table', icon: 'support', title: 'A clearer next step for your claim.', points: ['Check reporting deadlines', 'Keep your claim reference', 'Ask about the next step'], intent: 'claims' }],
    ['about-us', { image: 'consultation-table', icon: 'people', title: 'Insurance is a people business.', points: ['Insurance placement', 'Benefits administration', 'Claims assistance'], intent: 'review' }],
    ['contact-us', { icon: 'phone', title: 'Let’s start with what matters to you.', intent: 'review' }],
    ['portal', { icon: 'people', title: 'Cover, claims and care. Connected.', points: ['Employee self-service', 'Practical HR tools', 'Inspro support'], intent: 'portal' }],
  ];
  for (const [key, values] of overrides) if (route.includes(key)) base = { ...base, ...values };
  return base;
}

export function topicIcon(text) {
  const rules = [[/medical|health|gp|hospital|benefit/i, 'health'], [/travel|trip|marine/i, 'travel'], [/motor|vehicle/i, 'car'], [/home|property|premises/i, 'home'], [/worker|injury|construction/i, 'worker'], [/claim|help|support/i, 'support'], [/professional|advice/i, 'professional'], [/guide|checklist|review/i, 'book'], [/employee|team|personal|hr/i, 'people'], [/bond|policy|document/i, 'document']];
  return rules.find(([match]) => match.test(text))?.[1] || 'shield';
}

export function visualPanel(profile) {
  return `<aside class="ds-visual" data-design-addition aria-label="At a glance"><div class="ds-visual-photo">${photo(profile.image, true)}</div><div class="ds-visual-note"><span class="ds-icon">${icon(profile.icon)}</span><div><p class="ds-visual-title">${escape(profile.title)}</p><ul>${profile.points.map(point => `<li>${icon('check')}<span>${escape(point)}</span></li>`).join('')}</ul></div></div></aside>`;
}
