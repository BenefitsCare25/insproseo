const guide = '/guides/insurance-review-checklist/';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { portalRoute, preparePortalTemplate, portalContent, corporatePortalSection, portalLinkSection } from './portal-content.mjs';
import { enhanceFlow, leadNavigation } from './lead-flow.mjs';
import { enhanceCatalogue, routes } from './insurance-catalogue.mjs';
import { optimizeSite } from './optimize-seo.mjs';
import { guidesDirectoryBody } from './design-guides-directory.mjs';
import { renewalChecklistBody } from './design-renewal-checklist.mjs';
const require = createRequire(import.meta.url);
const { renderIsland, renderIcon } = require('../.impeccable/ui-render.cjs');
const root = path.resolve('site');
const business = '/service-details/commercial/commercialoffice-package/';
const corporate = '/service-details/commercial/employees-benefits/';
const personal = '/service-details/personal/view-personal-insurance-products/';
const care = '/employee-benefits/benefitscare/';
const mas = 'https://eservices.mas.gov.sg/fid/institution/detail/765-INSPRO-INSURANCE-BROKERS-PTE-LTD';
const icon = renderIcon;
const link = (text, href, style = '') => `<a class="xp-link ${style}" href="${href}">${text}${icon('arrow')}</a>`;
const button = (text, href, variant = '') => `<a class="xp-button ${variant}" href="${href}">${text}${icon('arrow')}</a>`;
const contact = (text, intent = 'review') => button(text, `/contact-us/?intent=${intent}`);
const island = type => `<div data-ui-island="${type}" id="ui-${type}">${renderIsland(type, `ui-${type}`)}</div>`;
const image = (stem, eager = false) => `<img src="/assets/images/optimized/${stem}-1280.webp" srcset="/assets/images/optimized/${stem}-640.webp 640w, /assets/images/optimized/${stem}-1280.webp 1280w" sizes="(max-width: 760px) 100vw, 55vw" alt="" width="1280" height="720" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
const crumb = label => `<nav class="xp-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">${label}</span></nav>`;
const section = (body, cls = '', id = '') => `<section class="xp-section ${cls}"${id ? ` id="${id}"` : ''}><div class="xp-shell">${body}</div></section>`;
const heading = (title, desc = '') => `<div class="xp-section-heading" data-enter><h2>${title}</h2>${desc ? `<p>${desc}</p>` : ''}</div>`;
const list = items => `<ul class="xp-checks">${items.map(x => `<li>${icon('check')}<span>${x}</span></li>`).join('')}</ul>`;
const details = items => `<div class="xp-faq">${items.map(([q,a])=>`<details><summary>${q}<span aria-hidden="true">+</span></summary><div class="xp-faq-answer"><p>${a}</p></div></details>`).join('')}</div>`;
function hero(label, title, desc, stem, action, href, extra = '') {
  return `<section class="xp-hero"><div class="xp-shell">${crumb(label)}<div class="xp-hero-grid"><div class="xp-hero-copy" data-hero-copy><h1>${title}</h1><p>${desc}</p><div class="xp-actions">${button(action, href)}${extra}</div></div><div class="xp-hero-image" data-hero-image>${image(stem, true)}</div></div></div></section>`;
}
function titleHero(label, title, desc = '') {
  return `<section class="xp-title-hero"><div class="xp-shell">${crumb(label)}<div class="xp-title-row" data-hero-copy><h1>${title}</h1>${desc ? `<p>${desc}</p>` : ''}</div></div></section>`;
}
function cta(title = 'Discuss your insurance needs.', intent = 'review') {
  return section(`<div class="xp-cta" data-enter><h2>${title}</h2>${contact('Talk to Inspro', intent)}</div>`, 'xp-closing');
}
function cards(items) {
  return `<div class="xp-capabilities" data-stagger>${items.map(([symbol,h,p])=>`<article><div class="xp-icon">${icon(symbol)}</div><h3>${h}</h3><p>${p}</p></article>`).join('')}</div>`;
}
const services = [
  ['BenefitsCare for SME', 'Three starting points for a healthier team.', care, 'employee-benefits', 'health'],
  ['Employee Benefits (Life & Medical)', 'A programme built around your workforce.', corporate, 'consultation-table', 'people'],
  ['Business Insurance', 'Cover for the way your business works.', business, 'business-insurance', 'business'],
  ['Personal Insurance', 'For home, travel and everyday life.', personal, 'personal-insurance', 'home'],
];
const serviceGrid = () => `<div class="xp-service-grid" data-stagger>${services.map(([h,p,url,img,symbol])=>`<a class="xp-service-card"${url === business ? ' id="commercial"' : ''} href="${url}"><div class="xp-card-image">${image(img)}</div><div class="xp-service-copy"><div><h2>${h}</h2><p>${p}</p></div><span class="xp-round-arrow">${icon('arrow')}</span></div></a>`).join('')}</div>`;
function journey() {
  return section(heading('Support through the policy year.') + island('service-cycle'), 'xp-section--tint xp-cycle-section', 'how-we-help');
}
function aboutPage() {
  const facts = [['Company','Inspro Insurance Brokers Pte Ltd.'],['Incorporated','June 2000'],['Registration','Registered Insurance Broker &amp; Exempt Financial Adviser']];
  return `<section class="xp-about-hero"><div class="xp-shell">${crumb('About Inspro')}<div class="xp-about-grid"><div class="xp-about-copy" data-hero-copy><h1>About Inspro.</h1><p class="xp-lead">A Singapore insurance brokerage serving employers, businesses and individuals.</p><p>Our work covers insurance placement, employee benefits administration and claims assistance.</p></div><aside class="xp-company-facts" aria-label="Company details" data-enter><dl>${facts.map(([label,value])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>${link('View MAS registration',mas)}</aside></div></div></section>`;
}
function benefitsShowcase() {
  return section(`<div class="xp-benefits-showcase"><div class="xp-benefits-intro"><h2>BenefitsCare for SME</h2><p>Start with panel GP care. Add flexibility or inpatient hospitalisation as your needs grow.</p>${link('Explore BenefitsCare for SME',care)}<div class="xp-benefits-photo">${image('employee-benefits')}</div></div>${island('benefit-preview')}</div>`, 'xp-benefits-section', 'benefitscare');
}
function writePage(route, body, {home = false, scripts = []} = {}) {
  body = enhanceFlow(route, body, {section, heading, details, link, button, contact, cta, icon, crumb, titleHero});
  body = enhanceCatalogue(route, body, {section, heading, details, link, button, contact, cta, icon, crumb, titleHero});
  const pageClass = route === corporate ? ' xp-page-corporate' : route === personal ? ' xp-page-personal' : route === '/privacy-security/' ? ' xp-page-privacy' : '';
  const file = route.endsWith('.html') ? path.join(root, route) : path.join(root, route, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  const snapshot = path.join('.impeccable', 'pre-motion', path.relative(root, file));
  if (!fs.existsSync(snapshot)) { fs.mkdirSync(path.dirname(snapshot), { recursive: true }); fs.writeFileSync(snapshot, html); }
  html = html.replace(/<link rel="stylesheet" href="\/assets\/css\/(?:editorial|experience)\.css[^>]*>/g, '');
  html = html.replace(/<link rel="preload" href="\/assets\/fonts\/manrope\.ttf"[^>]*>/g, '');
  html = html.replace(/homepage\.css(?:\?[^"\s]*)?/g, 'homepage.css?v=20261003-rail-fit');
  html = html.replace(/tokens\.css(?:\?[^"\s]*)?/g, 'tokens.css?v=20261003-portal-final');
  html = html.replace(/<link rel="stylesheet" href="\/assets\/css\/portal-showcase\.css[^>]*>/g, '');
  html = html.replace('</head>', '<link rel="preload" href="/assets/fonts/manrope.ttf" as="font" type="font/ttf" crossorigin><link rel="stylesheet" href="/assets/css/experience.css?v=20261009-footer-1"><link rel="stylesheet" href="/assets/css/portal-showcase.css?v=20261003-portal-final"></head>');
  html = html.replace(/<link rel="stylesheet" href="\/assets\/css\/lead-flow\.css[^>]*>/g, '');
  html = html.replace('</head>', '<link rel="stylesheet" href="/assets/css/lead-flow.css?v=20261009-email-1"></head>');
  html = html.replace(/<link rel="stylesheet" href="\/assets\/css\/insurance-catalogue\.css[^>]*>/g, '');
  html = html.replace('</head>', '<link rel="stylesheet" href="/assets/css/insurance-catalogue.css?v=20261003-catalogue"></head>');
  html = html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/, `<main id="main-content"${home ? '' : ` class="experience${pageClass}"`}>${body}</main>`);
  html = html.replace(/<script src="\/assets\/js\/(?:review-starter|contact|experience-motion|experience-ui)\.js[^>]*><\/script>/g, '');
  if (!html.includes('assets/vendor/gsap-')) html = html.replace('</body>', '<script src="/assets/vendor/gsap-3.15.0.min.js" defer></script><script src="/assets/vendor/ScrollTrigger-3.15.0.min.js" defer></script></body>');
  html = html.replace('</body>', `<script src="/assets/js/experience-motion.js?v=20261003-portal-final" defer></script>${body.includes('data-ui-island') ? '<script src="/assets/js/experience-ui.js?v=20261009-terms-1" defer></script>' : ''}${scripts.map(s=>`<script src="/assets/js/${s}.js?v=20261003" defer></script>`).join('')}</body>`);
  html = html.replace('Insurance advice.<br>Benefits that work.<br>People who help.', 'For your people.<br>For your business.');
  html = html.replace(/<nav class="nav-links"[\s\S]*?<\/nav>/, leadNavigation(route, icon));
  html = html.replace(/site\.js(?:\?[^"\s]*)?/g, 'site.js?v=20261003-flow');
  html = html.replace('<h2>Support &amp; information</h2>', `<h2>Support &amp; information</h2>${(html.includes('>Benefits portal</a>') || html.includes('>Portal preview</a>')) ? '' : `<a href="${portalRoute}">Benefits portal</a>`}`);
  html = html.replaceAll('>Benefits portal</a>', '>Portal preview</a>');
  html = html.replace(/(<h2>Insurance solutions<\/h2>)[\s\S]*?(?=<\/div>)/, `$1<a href="${corporate}">Employee Benefits (Life & Medical)</a><a href="${routes.business}">Business Insurance</a><a href="${routes.personal}">Personal Insurance</a><a href="${routes.travel}">Travel Insurance</a>`);
  html = html.replace(/(experience-ui|contact)\.js(?:\?[^"\s]*)?/g, '$1.js?v=20261009-email-1');
  fs.writeFileSync(file, html);
}


writePage(care, hero('BenefitsCare for SME', 'BenefitsCare<br><span>for SME.</span>', 'Choose from three plans, with panel GP access and options for flexible benefits and hospital cover.', 'employee-benefits', 'Explore the plans', '#plans', link('Speak to our team', '/contact-us/?intent=benefitscare')) + section(heading('Compare the plans.') + island('plans'), 'xp-section--tint', 'plans') + section(`<div class="xp-split" data-enter><div><h2>Additional cover.</h2><p>Need a broader benefits package? We can discuss additional cover alongside your chosen plan.</p>${link('Discuss your team’s needs','/contact-us/?intent=benefitscare')}</div><div class="xp-cover-chips">${['Group term life','Personal accident','Major medical','Outpatient specialist','Dental','Work injury compensation'].map(x=>`<span>${icon('check')}${x}</span>`).join('')}<p class="xp-fine">Additional benefits are not automatically included in the three plans. Your quotation confirms the scope.</p></div></div>`) + portalLinkSection({ section, link }, 'care') + section(`<div class="xp-split"><div><h2>What we need for your quotation.</h2>${list(['Approximate employee headcount','Benefits you want to include','Preferred start or renewal date'])}</div><div>${details([['What does the listed monthly price include?', 'The listed prices are S$2 for Starter, S$4 for Flex and S$6 for Premier per employee per month, as shown in Inspro’s BenefitsCare for SME flyer. Ask for a quotation confirming the total cost, taxes, any separate fees, benefit limits and eligibility.'],['What if we have a larger workforce?', `Explore our <a href="${corporate}">Employee Benefits (Life & Medical)</a> service for programme design, HR administration and employee support.`]])}</div></div>`, 'xp-section--tint') + cta('Request a BenefitsCare for SME quotation.', 'benefitscare'));

writePage(corporate, hero('Employee Benefits (Life & Medical)', 'Employee Benefits (Life & Medical)<br><span>for larger teams.</span>', 'Tailored benefits, practical administration and support throughout the policy year.', 'consultation-table', 'Build your programme', '/contact-us/?intent=benefits', link('See the support', '#support')) + corporatePortalSection({ section, link, icon }) + journey() + section(heading('Choose the scope of cover.') + cards([['health','Health & medical','Hospital and surgical, major medical, outpatient and dental options.'],['shield','Life & accident','Group term life, critical illness and personal accident benefits.'],['flex','Flexible benefits','Insurance and non-insurance benefit administration, where agreed.']])) + cta('Discuss your benefits programme.', 'benefits'));

writePage(business, hero('Business Insurance', 'Cover for the way<br><span>you do business.</span>', 'Start with your operations. Review the risks, responsibilities and cover that keep your business moving.', 'business-insurance', 'Explore your risks', '#risks', link('Request a review','/contact-us/?intent=business')) + section(heading('Where does your business<br>need protection?') + island('business'), 'xp-section--tint', 'risks') + section(`<div class="xp-split" data-enter><div><h2>When to review your cover.</h2><p>Opening a location, growing your team, signing a new contract or buying equipment can change your insurance needs.</p></div><div class="xp-review-actions">${contact('Request a business review','business')}</div></div>`));

writePage(personal, hero('Personal Insurance', 'Cover for life<br><span>outside work.</span>', 'Practical cover for your car, your travels and the place you call home.', 'personal-insurance', 'Find your cover', '#cover') + section(heading('What are you protecting?') + island('personal'), 'xp-section--tint', 'cover') + section(`<div class="xp-split" data-enter><div><h2 id="other">Other Personal Insurance.</h2><p>Ask us about personal accident, domestic helper and other Personal Insurance needs.</p></div><div class="xp-note-card">${icon('list')}<h3>Already insured?</h3><p>Bring your policy schedule and renewal date. We’ll help you compare the details that matter.</p>${contact('Review your Personal Insurance','personal')}</div></div>`));

writePage('/about-us/', aboutPage());

writePage('/claims-support/', titleHero('Claims support', 'Help with your<br><span>insurance claim.</span>', 'Help with documents, insurer follow-up and settlement queries.') + section(`<div class="xp-contact-strip"><a href="tel:+6564487707">Call Inspro <strong>+65 6448 7707</strong>${icon('arrow')}</a><a href="mailto:helpdesk@inspro.com.sg">Email our team <strong>helpdesk@inspro.com.sg</strong>${icon('arrow')}</a></div><div class="xp-claim-steps" data-stagger>${[['01','Check your policy','Follow the insurer’s reporting channel and time limits. For urgent assistance, use the insurer’s emergency contact.'],['02','Gather the details','Keep your policy number, incident date, receipts, reports and insurer correspondence together.'],['03','Get help with the next step','Share your claim reference and insurer correspondence so we can help with the next step.']].map(([n,h,p])=>`<article><span>${n}</span><h2>${h}</h2><p>${p}</p></article>`).join('')}</div>`, 'xp-section--first') + portalLinkSection({ section, link }, 'claims') + section(`<div class="xp-split"><div><h2>Common claim questions.</h2></div>${details([['Can I upload documents here?', 'No. Ask our team for the appropriate channel before sharing medical records, identification or complete policy documents.'],['Can Inspro guarantee my claim?', 'No. The insurer assesses the claim against the policy terms and supporting evidence.'],['What if my employee needs a letter of guarantee?', 'Follow your programme’s hospital and insurer procedures. Contact Inspro for help with the request; issuance is subject to the programme and insurer’s requirements.']])}</div>`, 'xp-section--tint'));

writePage('/guides/', guidesDirectoryBody());

writePage(guide, renewalChecklistBody());

writePage('/contact-us/', '', {scripts:['contact']});

const privacyItems = [['Your enquiry','Send enquiry opens your configured email app with helpdesk@inspro.com.sg, a subject and your enquiry details filled in. Review and send the message in that app. This website does not submit or store the form contents.'],['Email and telephone','Information you provide directly to Inspro may be used to respond to your enquiry and provide requested services. Contact Inspro with questions about information you have provided.'],['Sensitive information','Do not include NRIC numbers, medical records, payment details, passwords or complete policy documents in an initial website enquiry. Ask our team for an appropriate channel.'],['Cookies and local storage','This website does not use advertising cookies or store enquiry data in the browser. Interactive selections and checklist progress are temporary. This notice will be updated if optional analytics or other services are added.'],['External websites','External links, including the MAS directory, are governed by those sites’ own privacy and security practices.'],['Changes to this notice','This notice may be updated when website services or enquiry-handling processes change.']];
writePage('/privacy-security/', titleHero('Privacy & security','Privacy &amp; security.', 'How this website handles enquiries and personal information. Updated 3 October 2026.') + section(`<div class="xp-policy">${privacyItems.map(([h,p])=>`<section><h2>${h}</h2><p>${p}</p></section>`).join('')}${link('Contact Inspro','/contact-us/')}</div>`, 'xp-section--first'));
writePage('/404.html', `<section class="xp-error"><div class="xp-shell"><span class="xp-error-number" aria-hidden="true">404</span><h1>Page not found.</h1><div class="xp-actions">${button('Go home','/')}</div>${link('Contact Inspro','/contact-us/')}</div></section>`);

preparePortalTemplate(root);
writePage(portalRoute, portalContent({ section, crumb, island, button, link, details, icon, corporate, care }));


const homeFile = path.join(root,'index.html');
const homeSource = fs.readFileSync(homeFile, 'utf8');
const homeStart = homeSource.indexOf('<section class="story"');
const productStart = homeSource.indexOf('<section class="product-story', homeStart);
const homeEnd = homeSource.indexOf('</section>', productStart) + '</section>'.length;
if (homeStart < 0 || productStart < 0 || homeEnd < productStart) throw new Error('Cannot locate protected homepage sections.');
const preserved = homeSource.slice(homeStart,homeEnd).trimEnd();
const homeBody = preserved + '<div class="experience">' + benefitsShowcase() + section(island('portal-teaser'), '', 'how-we-help') + section(`<div class="xp-split xp-home-review" id="review"><div><h2>Start a conversation.</h2></div>${island('review')}</div>`, 'xp-section--tint') + '</div>';
writePage('/',homeBody,{home:true});
const pageCount = await optimizeSite(root);
process.stdout.write(`Generated ${pageCount} content pages and the 404 page. Preserved homepage cinematic and product-rail content.\n`);
