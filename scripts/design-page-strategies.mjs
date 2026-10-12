import { pageByRoute } from './seo/page-map.mjs';
import { topics } from '../site/assets/js/page-topics.js';
import { icon, topicIcon, escape } from './design-content.mjs';

export const pagePlans = {
  home: ['Find the right insurance journey', 'Protected cinematic opening and product rail; heading-free content explorer with BenefitsCare for SME, portal and travel features', 'Product links, content chapters and the enquiry picker'],
  care: ['Understand a connected SME benefits scheme', 'Five-service network; compact plan comparison; optional insurance, wellness and lifestyle; scheme features, employee/HR tools and quotation preparation', 'All plans and optional groups; scoped scheme support; stationary-label motion; plan-specific Review and portal destinations'],
  benefits: ['Understand a tailored employer programme', 'Photographic introduction; outpatient branches, layered hospital cover, life and accident protection, flexible benefits and wellness, role-specific portal tools and policy-year tabs', 'Every support stage, role context and quotation route'],
  business: ['Find the business cover for a specific risk', 'Six equal responsive presentations: package sections, assets and operations, money and crime, liability, people and travel, marine and trade', 'Six industry contexts, all 19 migrated product groups, meaningful product views and corresponding enquiry or guide destinations'],
  catalogue: ['Find one of 19 commercial products', 'Compact risk brief; live catalogue finder; distinct risk groups with product tiles', 'Search, empty state, clearing, all 19 destinations'],
  portal: ['Explore employee, HR and broker tools', 'Burgundy introduction; role rail; large application preview with side navigation', 'All three roles, feature tabs and sample-data disclosures'],
  about: ['Understand the brokerage and what guides it', 'Company introduction and facts; corporate vision; two-part mission; TACT values; broking support and company verification', 'All five topics, keyboard selection, MAS link and meaningful mobile reading order'],
  contact: ['Start the right enquiry', 'One contact area with phone, email, office address and directions; labelled form with direct email-app handoff', 'Service choices, validation, email handoff and intent persistence'],
  claims: ['Know the next claims step', 'Help brief; prominent contact methods; three horizontal process rows; practical FAQs', 'Contact destinations, reporting cautions and disclosures'],
  guides: ['Choose a useful reading resource', 'Large library title; feature checklist beside an article shelf; linked next steps', 'Guide links, reading hierarchy and stacked mobile library'],
  checklist: ['Prepare a consistent renewal brief', 'Quiet reading header; sticky chapter navigation; working checklist; comparison table', 'Checkboxes, chapter anchors and print action'],
  privacy: ['Understand website information handling', 'Quiet document title; compact topic index; readable policy column', 'All topic anchors and accurate draft/storage notices'],
  medical: ['Review work-pass medical cover', 'Workforce brief; medical preparation panel; sourced requirements as the key reading section', 'MOM references, preparation details and separate-cover links'],
  bonds: ['Prepare an application or renewal bond', 'Guarantee brief; application, conditions and related-cover sequence; obligations section', 'Bond conditions, date enquiry and related medical cover'],
  personal: ['Choose protection for life at home and away', 'Family photograph; six compact equal frames with journey windows, motor risk layers, a home cutaway, accident outcomes, distinct helper requirements and specialist review scenes', 'All eight personal products; eleven native detail views; matching guides, specialist enquiry context and preserved insurer quotation routes'],
  travel: ['Compare personal and business travel in one place', 'Journey brief; personal quotation routes; shared comparison prompts; business travel guidance', 'All insurer URLs, employee-trip enquiry, work activities, eligibility and assistance guidance'],
  motor: ['Compare vehicle cover and repair terms', 'Driver brief; photographic opening; prominent cover, driver and repair comparison rows', 'FWD route, vehicle enquiry and reporting guidance'],
  house: ['Separate buildings, belongings and liability', 'Home brief; image and responsibility overview; a layered three-part cover board', 'Owner/tenant context, online quote and related cover'],
  accident: ['Compare accident benefits with current cover', 'Accident brief; benefits-first panel; activity and existing-policy checks', 'No assumed benefits, insurer route and occupation enquiry'],
  helper: ['Review helper insurance and bond arrangements', 'Household brief; three distinct responsibilities; prominent sourced requirements', 'MOM references, insurer route and new-hire/renewal context'],
  groupMedical: ['Compare healthcare, access and eligibility', 'Healthcare brief; five benefit-question panels; programme choice and medical FAQs', 'Benefit terms, employer options and separate mandatory-cover links'],
  wic: ['Distinguish insurance duties from compensation', 'Employer brief; requirements-first reading; declaration checklist and source references', 'Compulsory-cover distinction, sources, comparison and claims links'],
  liability: ['Map third-party risks and contract requirements', 'Public-risk brief; exposure narrative; large limit/terms comparison and distinctions', 'Contract caveats, comparison questions and PI/WIC cross-links'],
  professional: ['Understand service scope and claims timing', 'Professional brief; scope narrative; policy-trigger and retroactive-date panels', 'Claims-made wording, continuity questions and related liability cover'],
  employerGuide: ['Separate benefits and compulsory requirements', 'Reading-led title; full-width four-cover comparison; quotation-brief list and FAQs', 'All four cover routes, source references and readable mobile table'],
  notFound: ['Recover from an unavailable URL', 'Oversized 404 with direct recovery actions and visual service destinations', 'Home, service and contact recovery paths; noindex'],
};

export const sectionLabels = topics;

export function navigationLabels(route) {
  return sectionLabels[pageByRoute.get(route)?.key] || [];
}

function tableAsQuestions(document, section) {
  const table = section?.querySelector('.search-table');
  if (!table || table.querySelectorAll('thead th').length !== 2) return;
  const wrapper = document.createElement('div');
  wrapper.className = 'ds-question-board';
  const caption = table.querySelector('caption')?.textContent;
  if (caption) wrapper.setAttribute('aria-label', caption);
  for (const row of table.querySelectorAll('tbody tr')) {
    const cells = row.querySelectorAll('th,td');
    if (cells.length !== 2) continue;
    const article = document.createElement('article');
    article.innerHTML = `<span class="ds-question-symbol">${icon(topicIcon(cells[0].textContent))}</span><h3>${escape(cells[0].textContent)}</h3><p>${cells[1].innerHTML}</p>`;
    wrapper.append(article);
  }
  table.closest('.search-table-wrap').replaceWith(wrapper);
}

function markSection(main, selector, className) {
  main.querySelector(selector)?.classList.add(className);
}

export function applyPageStrategy(document, main, route) {
  const key = pageByRoute.get(route)?.key || 'notFound';
  main.dataset.designPage = key;
  if (key === 'contact') main.querySelectorAll('.ds-contact-photo').forEach(photo => photo.remove());
  if (key === 'groupMedical' || key === 'professional') {
    const section = main.querySelector('#comparison');
    section?.classList.add('ds-comparison-feature');
    tableAsQuestions(document, section);
  }
  if (key === 'wic') {
    markSection(main, '.search-section', 'ds-obligation-reading');
    markSection(main, '#comparison', 'ds-comparison-feature');
  }
  if (key === 'liability' || key === 'employerGuide') markSection(main, '#comparison', 'ds-comparison-feature');
  if (['medical', 'helper', 'bonds'].includes(key)) markSection(main, '.search-section', 'ds-obligation-reading');
  if (key === 'house' || key === 'accident') markSection(main, '.ic-check-rows', 'ds-layered-cover');
  if (key === 'motor') markSection(main, '.ic-check-rows', 'ds-driver-checks');
  if (key === 'bonds') markSection(main, '.ic-check-rows', 'ds-bond-sequence');
  if (key === 'personal') markSection(main, '.ic-personal-list', 'ds-personal-directory');
  if (key === 'travel') {
    main.querySelectorAll('.ic-quotes article').forEach(article => {
      if (article.querySelector('h3')?.textContent.includes('Pre-Ex')) article.classList.add('ds-quote-special');
    });
  }
  if (key === 'benefits') markSection(main, '#scope', 'ds-scope-matrix');
  if (key === 'business') markSection(main, '#industries', 'ds-industry-board');
  if (key === 'portal') markSection(main, '.xp-portal-hero', 'ds-portal-introduction');
}
