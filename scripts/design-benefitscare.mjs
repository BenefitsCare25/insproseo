import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { escape, icon } from './design-content.mjs';
import { pageByRoute } from './seo/page-map.mjs';
import { breadcrumbHtml, structuredData } from './seo/schema.mjs';
import { plans, featuresForPlan, planFeatureDetails } from '../src/data/benefitscare.mjs';
import { optionalGroups, schemeFeatures, quotationQuestions } from './design-benefitscare-content.mjs';
import { careArrow, serviceNetwork, schemeConnection, employeeMobileView } from './design-benefitscare-graphics.mjs';
import { planScene, optionalScene } from './design-benefitscare-scenes.mjs';

export const benefitsCareRoute = '/employee-benefits/benefitscare/';
const version = '20261011-care-7';
const enquiry = '/contact-us/?intent=benefitscare';
const action = (label, href, accessibleLabel = label, attributes = '') => `<a class="xp-link" href="${escape(href)}" aria-label="${escape(accessibleLabel)}" ${attributes}>${escape(label)}${careArrow}</a>`;
const section = (id, body) => `<section class="xp-section bc-section" id="${id}"><div class="xp-shell bc-frame">${body}</div></section>`;
const reviewHeading = (title, description, link) => `<div class="bc-heading bc-heading--review"><h2>${escape(title)}</h2>${link}<p>${escape(description)}</p></div>`;

function tabs(items, name, prefix) {
  return `<div class="bc-tabs" data-bc-tabs role="tablist" aria-label="${escape(name)}" hidden>${items.map(item => `<button type="button" id="${prefix}-tab-${item.id}" data-bc-tab="${item.id}" role="tab" aria-controls="${prefix}-view-${item.id}"><span>${escape(item.name || item.label)}</span></button>`).join('')}</div>`;
}

function planView(plan) {
  const features = featuresForPlan(plan);
  return `<article class="bc-plan-view" id="bc-plan-view-${plan.id}" data-bc-view="${plan.id}" data-bc-review-href="${enquiry}&amp;plan=${plan.id}">
    <div class="bc-plan-body"><div class="bc-plan-copy"><h3 class="bc-plan-name">${escape(plan.name)}</h3><div class="bc-price"><span class="bc-price-from">from</span><strong>S$${plan.price}</strong><span>per employee / month</span></div>
    </div>
    ${planScene(plan.id)}<ul class="bc-plan-benefits">${Object.keys(planFeatureDetails).map(feature => {
      const [symbol, description] = planFeatureDetails[feature];
      const included = features.includes(feature);
      const status = included ? '' : '<span class="bc-benefit-status">Not included</span>';
      return `<li${included ? '' : ' class="bc-benefit--unavailable"'} data-bc-included="${included}"><span class="bc-benefit-symbol">${icon(symbol)}</span><div><strong><span class="bc-benefit-name">${escape(feature)}</span>${status}</strong><p>${escape(description)}</p></div></li>`;
    }).join('')}</ul></div>
  </article>`;
}

function plansSection() {
  return section('plans', `${reviewHeading('Three starting points for your team.', 'Choose the balance of everyday care, flexibility and hospital cover.', action('Review', enquiry, 'Review BenefitsCare for SME plans', 'data-bc-plan-review'))}
    <div class="bc-picker" data-bc-picker data-bc-default="flex">${tabs(plans, 'Compare BenefitsCare for SME plans', 'bc-plan')}<div class="bc-views">${plans.map(planView).join('')}</div></div>`);
}

function optionView(group) {
  return `<article class="bc-option-view" id="bc-option-view-${group.id}" data-bc-view="${group.id}">
    <div class="bc-option-copy"><h3>${escape(group.title)}</h3><p>${escape(group.description)}</p>${optionalScene(group.id)}</div>
    <dl class="bc-option-list">${group.sections.map(([symbol, title, detail]) => `<div><dt><span>${icon(symbol)}</span>${escape(title)}</dt><dd>${escape(detail)}</dd></div>`).join('')}</dl>
  </article>`;
}

function optionsSection() {
  return section('additional-cover', `<div class="bc-heading"><h2>Build around your chosen plan.</h2><p>Explore a broader mix of cover, wellbeing and personal insurance.</p></div>
    <div class="bc-picker" data-bc-picker data-bc-default="insurance">${tabs(optionalGroups, 'Explore optional BenefitsCare services', 'bc-option')}<div class="bc-views">${optionalGroups.map(optionView).join('')}</div></div>`);
}

function schemeSection() {
  return section('scheme-features', `<div class="bc-heading"><h2>A scheme with support built around it.</h2><p>Connect insurance arrangements with practical administration and employee access.</p></div>
    <div class="bc-scheme-grid"><dl class="bc-feature-list">${schemeFeatures.map(([symbol, title, detail]) => `<div><dt>${icon(symbol)}${escape(title)}</dt><dd>${escape(detail)}</dd></div>`).join('')}</dl>${schemeConnection()}</div>`);
}

function toolsSection() {
  return section('employee-hr-tools', `<div class="bc-heading"><h2>Easier to use. Easier to coordinate.</h2><p>Connect employee self-service with practical tools for HR and support from Inspro.</p></div>
    <div class="bc-tools-grid">${employeeMobileView()}<div class="bc-tools-copy">
      <div><h3>For your employees</h3><p>Benefit statements and claim usage, documents and updates, panel clinics, digital cards and eligible enrolment choices.</p></div>
      <div><h3>For your HR team</h3><p>Submit and track permitted employee claims, and download filed benefit-enrolment forms.</p></div>
      <p class="bc-tools-support">${icon('support')}<span><strong>Inspro connects the programme.</strong> Benefits administration, claims follow-up and reporting support.</span></p>
    </div></div>`);
}

function quotationSection() {
  return section('quotation', `${reviewHeading('Shape your quotation.', 'Start with three practical details about your team.', action('Review', enquiry, 'Review BenefitsCare for SME with Inspro'))}
    <div class="bc-quotation-grid"><div><dl class="bc-brief-list">
      <div><dt>${icon('people')}Your workforce</dt><dd>Approximate employee headcount and workforce profile.</dd></div>
      <div><dt>${icon('health')}Your priorities</dt><dd>Benefits you want to include and your preferred plan.</dd></div>
      <div><dt>${icon('renew')}Your timing</dt><dd>Preferred start date or upcoming renewal date.</dd></div>
    </dl></div>
    <div class="bc-questions">${quotationQuestions.map(([question, answer]) => `<details open><summary>${escape(question)}<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary><div><p>${answer}</p></div></details>`).join('')}</div></div>`);
}

export function benefitsCareBody() {
  const page = pageByRoute.get(benefitsCareRoute);
  return `<section class="bc-hero ds-hero"><div class="xp-shell">${breadcrumbHtml(page)}<div class="bc-hero-grid">
    <div class="bc-hero-copy"><h1>BenefitsCare<br>for SME.</h1><p class="bc-hero-statement">More care. Less coordination.</p><p>${escape(page.intro)}</p>
      <a class="xp-button" href="#plans">Compare plans${careArrow}</a><p class="bc-hero-note">Three plans. A service mix shaped around your agreed programme.</p>
    </div>${serviceNetwork()}</div></div></section>
    <nav class="ds-section-nav" aria-label="On this page"><div class="xp-shell"><div class="ds-section-links">${[['plans', 'Compare plans'], ['additional-cover', 'Optional benefits'], ['scheme-features', 'Scheme features'], ['employee-hr-tools', 'Employee & HR tools'], ['quotation', 'Quotation details']].map(([id, title]) => `<a href="#${id}">${escape(title)}</a>`).join('')}</div></div></nav>
    ${plansSection()}${optionsSection()}${schemeSection()}${toolsSection()}${quotationSection()}`;
}

export function renderBenefitsCare(html) {
  if (!/<main\b[^>]*>[\s\S]*?<\/main>/.test(html)) throw new Error('BenefitsCare main content is missing.');
  html = html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/, `<main id="main-content" class="experience ds-page ds-surface bc-page" data-design-page="care" data-design-version="${version}">${benefitsCareBody()}</main>`);
  html = html.replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/, `<script type="application/ld+json">${structuredData(pageByRoute.get(benefitsCareRoute))}</script>`);
  for (const asset of ['benefitscare', 'benefitscare-diagrams', 'benefitscare-scenes']) {
    html = html.replace(new RegExp(`<link[^>]+href="/assets/css/${asset}\\.css[^>]*>\\s*`, 'g'), '');
    html = html.replace('</head>', `<link rel="stylesheet" href="/assets/css/${asset}.css?v=${version}">\n</head>`);
  }
  html = html.replace(/<script[^>]+src="\/assets\/js\/benefitscare\.js[^>]*><\/script>\s*/g, '');
  return html.replace('</body>', `<script type="module" src="/assets/js/benefitscare.js?v=${version}"></script>\n</body>`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const file = fileURLToPath(new URL('../site/employee-benefits/benefitscare/index.html', import.meta.url));
  await fs.writeFile(file, renderBenefitsCare(await fs.readFile(file, 'utf8')));
  process.stdout.write('Redesigned BenefitsCare for SME only.\n');
}
