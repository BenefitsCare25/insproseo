const guide = '/guides/insurance-review-checklist/';
import { routes, topicLabels } from './insurance-catalogue.mjs';
const care = '/employee-benefits/benefitscare/';
const corporate = '/service-details/commercial/employees-benefits/';
const business = '/service-details/commercial/commercialoffice-package/';
const personal = '/service-details/personal/view-personal-insurance-products/';
const portal = '/employee-benefits/portal/';

const choices = [
  ['Employee Benefits (Life & Medical)', 'Employee Benefits (Life & Medical)', 'BenefitsCare for SME and corporate programmes for staff medical, life and accident cover.', corporate, 'Explore Employee Benefits (Life & Medical)', 'employee-benefits'],
  ['Business Insurance', 'Business Insurance', 'Protect your operations, liabilities and responsibilities as an employer.', business, 'Explore Business Insurance', 'business-insurance'],
  ['Personal Insurance', 'Personal Insurance', 'Travel, motor, home, domestic helper and specialist Personal Insurance.', personal, 'Explore Personal Insurance', 'personal-insurance'],
];

export function leadNavigation(route, icon) {
  const current = href => route === href ? ' aria-current="page"' : '';
  const categories = [['Employee Benefits (Life & Medical)',corporate],['Business Insurance',business],['Personal Insurance',personal],['BenefitsCare for SME',care]];
  return `<nav class="nav-links" aria-label="Main navigation"><details class="lf-nav-menu"><summary${categories.some(([, url]) => route === url) ? ' class="is-current"' : ''}>Insurance Solutions<span aria-hidden="true">⌄</span></summary><div class="lf-nav-options">${categories.map(([name,url])=>`<a href="${url}"${current(url)}>${name}</a>`).join('')}</div></details><a href="${routes.travel}"${current(routes.travel)}>Travel Insurance</a><a href="${portal}"${current(portal)}>Portal Preview</a><a href="/claims-support/"${current('/claims-support/')}>Claims Support</a><a href="/about-us/"${current('/about-us/')}>About Us</a></nav>`;
}

function shortcuts(items) {
  return `<nav class="lf-sections" aria-label="On this page"><div class="xp-shell"><span>On this page</span>${items.map(([id,label])=>`<a href="#${id}">${label}</a>`).join('')}</div></nav>`;
}

function directory({section, icon}, compact = false) {
  return section(`${compact ? `<div class="lf-directory-heading"><h2>${compact ? 'What can we help you protect?' : 'Start with what you need.'}</h2><p>Choose a starting point. We can help you refine the cover.</p></div>` : ''}<div class="lf-directory${compact ? ' lf-directory--compact ic-home-categories' : ''}">${choices.map(([need,name,description,url,action,img])=>`<a href="${url}" class="lf-choice"${url === business ? ' id="commercial"' : ''}>${compact ? '' : `<img src="/assets/images/optimized/${img}-640.webp" alt="" width="640" height="360" loading="lazy">`}<div><h3>${need}</h3><p>${description}</p><span class="lf-choice-action">${action}${icon('arrow')}</span></div></a>`).join('')}</div>`, compact ? 'lf-home-choices' : 'xp-section--first', 'choose-cover');
}

function benefitsChoice({section, link}) {
  return section(`<div class="xp-split"><div><h2>Two ways to build<br>employee benefits.</h2><p>Choose a packaged starting point or a programme shaped around your workforce.</p></div><div class="lf-comparison"><article><h3>Start with BenefitsCare for SME</h3><p>For SMEs comparing three defined starting plans. Add further cover after discussing your needs.</p>${link('Compare BenefitsCare for SME plans',care)}</article><article><h3>Build a tailored programme</h3><p>For employers reviewing benefit design, insurer options and ongoing administration together.</p>${link('Explore Employee Benefits (Life & Medical)',corporate)}</article></div></div>`, 'xp-section--tint', 'benefits-options');
}

function nextSteps({section, link}, intent = 'review') {
  return section(`<div class="lf-next"><div><h2>A clearer next step.</h2><p>You do not need every answer before we talk.</p>${link('Start your enquiry',`/contact-us/?intent=${intent}`)}</div><ol><li><strong>Tell us what you need</strong><p>Share your priorities and any start or renewal date. An approximate picture is enough to begin.</p></li><li><strong>Discuss the options</strong><p>We help you clarify the information needed to review suitable cover and request terms.</p></li><li><strong>Review before deciding</strong><p>Check the quotation, scope, exclusions and insurer terms before arranging cover.</p></li></ol></div>`, 'lf-next-section', 'next-steps');
}

function contactPage({crumb, icon, link}) {
  const office = `<div class="cp-contact-office"><address>38 Jalan Pemimpin<br>M38, #02-08<br>Singapore 577178</address><a class="xp-link" href="https://www.google.com/maps/search/?api=1&amp;query=38%20Jalan%20Pemimpin%20M38%2002-08%20Singapore%20577178">Get directions${icon('arrow')}</a><p>Call or email to arrange a visit.</p></div>`;
  return `<section class="xp-contact-page lf-contact"><div class="xp-shell">${crumb('Contact')}<div class="xp-contact-grid"><div class="xp-contact-copy"><h1>Let’s talk about<br>your cover.</h1><p>Tell us where you are starting. We’ll help you work out the next step.</p><div class="xp-contact-direct"><a href="tel:+6564487707">+65 6448 7707${icon('arrow')}</a><a href="mailto:helpdesk@inspro.com.sg">helpdesk@inspro.com.sg${icon('arrow')}</a></div>${office}</div><form class="xp-contact-form" data-contact-form aria-label="Contact Inspro"><div class="xp-field"><label for="contact-intent">I’d like help with</label><select id="contact-intent" name="intent"><option value="review">Choosing or reviewing cover</option><option value="benefitscare">BenefitsCare for SME</option><option value="benefits">Employee Benefits (Life & Medical)</option><option value="business">Business Insurance</option><option value="personal">Personal Insurance</option><option value="claims">An insurance claim</option><option value="portal">A benefits portal walkthrough</option></select><p class="lf-selection" data-enquiry-context hidden></p></div><div class="xp-field" data-topic-field hidden><label for="contact-topic">Type of cover <span>(optional)</span></label><select id="contact-topic" name="topic"><option value="">Not sure yet / general enquiry</option></select></div><div class="xp-form-row"><div class="xp-field"><label for="contact-name">Your name</label><input id="contact-name" name="name" autocomplete="name" maxlength="80" required></div><div class="xp-field"><label for="contact-email">Email address</label><input id="contact-email" type="email" name="email" autocomplete="email" maxlength="160" required></div></div><div class="xp-form-row"><div class="xp-field"><label for="contact-company">Company <span>(optional)</span></label><input id="contact-company" name="company" autocomplete="organization" maxlength="120"></div><div class="xp-field"><label for="contact-phone">Phone <span>(optional)</span></label><input id="contact-phone" type="tel" name="phone" autocomplete="tel" maxlength="40"></div></div><div class="xp-field"><label for="contact-need">Anything you’d like us to know? <span>(optional)</span></label><textarea id="contact-need" name="need" rows="3" maxlength="1200" placeholder="Your priorities, approximate team size or renewal date." aria-describedby="sensitive-note"></textarea><p id="sensitive-note" class="xp-fine">Leave out NRIC numbers, medical records and payment details.</p></div><button type="submit" class="xp-button" disabled>Send enquiry${icon('arrow')}</button><p class="xp-fine"><a href="/privacy-security/">Privacy &amp; security</a></p><p class="xp-form-status" data-form-status role="status" aria-live="polite"></p><noscript><p>Use <a href="mailto:helpdesk@inspro.com.sg">helpdesk@inspro.com.sg</a> or call <a href="tel:+6564487707">+65 6448 7707</a> to contact us. The enquiry button requires JavaScript.</p></noscript></form></div></div></section><script type="application/json" id="insurance-topics">${JSON.stringify(topicLabels)}</script>`;
}

export function enhanceFlow(route, body, h) {
  const {section, heading, details, link, cta, icon} = h;
  if (route === '/contact-us/') return contactPage(h);
  if (route === '/') return body;
  if (route === care) {
    body = body.replace('</section>', `</section>${shortcuts([['plans','Compare plans'],['additional-cover','Additional cover'],['quotation','Quotation questions'],['next-steps','Getting started']])}`);
    body = body.replace('<section class="xp-section "><div class="xp-shell"><div class="xp-split" data-enter>', '<section class="xp-section " id="additional-cover"><div class="xp-shell"><div class="xp-split" data-enter>');
    body = body.replace('<section class="xp-section xp-section--tint"><div class="xp-shell"><div class="xp-split">', '<section class="xp-section xp-section--tint" id="quotation"><div class="xp-shell"><div class="xp-split">');
    return body.replace('<section class="xp-section xp-closing">', `${nextSteps(h,'benefitscare')}<section class="xp-section xp-closing">`);
  }
  if (route === corporate) {
    const scope = body.match(/<section class="xp-section "><div class="xp-shell"><div class="xp-section-heading"[^]*?Choose the scope of cover\.[^]*?<\/section>/);
    if (scope) { body = body.replace(scope[0],''); body = body.replace('</section>', `</section>${scope[0].replace('<section class="xp-section "','<section class="xp-section " id="scope"')}`); }
    body = body.replace('</section>', `</section>${shortcuts([['scope','Scope of cover'],['support','Portal & support'],['how-we-help','Policy-year service'],['next-steps','Getting started']])}`);
    return body.replace('<section class="xp-section xp-closing">', `${nextSteps(h,'benefits')}<section class="xp-section xp-closing">`);
  }
  if ([business,personal].includes(route)) {
    const isBusiness = route === business;
    body = body.replace('</section>', `</section>${shortcuts([[isBusiness?'risks':'cover','Explore cover'],['questions','Common questions'],['next-steps','Getting started']])}`);
    const questions = isBusiness ? [
      ['What should I prepare for a business review?', 'Start with your activities, workforce, locations and renewal date. Existing policy schedules and contract insurance requirements can help later in the review.'],
      ['Can you review an existing policy?', 'Yes. We can discuss how your current cover relates to your operations and what has changed before renewal.'],
      ['Is employee medical cover the same as work injury cover?', `These address different needs. Discuss the scope of each with our team, or explore <a href="${care}">BenefitsCare for SME</a> as a separate starting point.`],
    ] : [
      ['What should I have ready?', 'The type of cover and your preferred start or renewal date are enough to begin. We can then explain the information needed for a quotation.'],
      ['Can you help me compare existing cover?', 'Yes. Tell us what you would like to review. Your policy schedule can help with comparing cover, limits, excesses and exclusions.'],
      ['Can I arrange cover immediately on this website?', 'This website helps you start an enquiry. Cover is subject to the insurer’s acceptance, confirmed terms and the agreed effective date.'],
    ];
    return body + section(`<div class="xp-split"><h2>Before we talk.</h2>${details(questions)}</div>`, 'xp-section--tint','questions') + nextSteps(h,isBusiness?'business':'personal');
  }
  if (route === '/about-us/') return body + section(`<div class="xp-split"><div><h2>Advice that connects<br>cover with everyday needs.</h2></div><div class="lf-comparison"><article><h3>Understand your priorities</h3><p>Start with the people, activities and responsibilities you want to protect.</p></article><article><h3>Make the options clearer</h3><p>Review the scope of cover and insurer terms before you decide.</p></article><article><h3>Know where to turn</h3><p>Get help with policy administration and claims follow-up. The insurer determines cover and claim outcomes under the policy.</p></article></div></div>`, 'xp-section--tint') + nextSteps(h) + cta('Let’s discuss what you need.');
  if (route === '/claims-support/') return body + section(`<div class="lf-next"><div><h2>Need help with<br>your next step?</h2><p>Tell us the type of claim and the help you need. Ask for the appropriate channel before sharing sensitive documents.</p></div><div>${h.contact('Prepare a claims enquiry','claims')}<p class="xp-fine">This enquiry does not lodge a claim with an insurer. Follow the reporting channel and time limits in your policy.</p></div></div>`, 'xp-closing');
  if (route === '/guides/' || route === guide) return body;
  if (route === portal) return body.replace('</section>', `</section>${section(`<div class="lf-member-help"><p><strong>Already a member?</strong> Use the portal link supplied by your employer. This page is an interactive feature preview.</p>${link('Get access help','/contact-us/?intent=portal&topic=access')}</div>`, 'lf-member-section')}`);
  if (route === '/privacy-security/') {
    const labels = ['enquiry','contact','sensitive-information','browser-storage','external-websites','notice-updates'];
    let index = 0;
    body = body.replace(/<section><h2>/g,()=>`<section id="${labels[index++]}"><h2>`);
    return body.replace('</section>', `</section>${shortcuts([['enquiry','Your enquiry'],['sensitive-information','Sensitive information'],['browser-storage','Browser storage']])}`);
  }
  if (route === '/404.html') return body.replace(link('Contact Inspro','/contact-us/'),'') + section(`<div class="lf-support-row"><h2>Try a direct route.</h2>${link('BenefitsCare for SME plans',care)}${link('Claims help','/claims-support/')}${link('Contact the team','/contact-us/')}</div>`, 'xp-section--tint');
  return body;
}
