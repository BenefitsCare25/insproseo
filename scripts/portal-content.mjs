import fs from 'node:fs';
import path from 'node:path';

export const portalRoute = '/employee-benefits/portal/';

export function preparePortalTemplate(root) {
  const file = path.join(root, portalRoute, 'index.html');
  if (fs.existsSync(file)) return;
  let html = fs.readFileSync(path.join(root, 'employee-benefits/benefitscare/index.html'), 'utf8');
  const title = 'Employee Benefits Portal for Singapore Employers';
  const description = 'Explore Inspro’s employee and HR benefits portal: cover, claims, panel clinics, enrolment forms and broker support. Request a programme walkthrough.';
  const url = `https://www.inspro.com.sg${portalRoute}`;
  const graph = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${url}#page`, url, name: title, description, inLanguage: 'en-SG', isPartOf: { '@id': 'https://www.inspro.com.sg/#website' } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.inspro.com.sg/' },
      { '@type': 'ListItem', position: 2, name: 'Employee benefits portal', item: url },
    ] },
    { '@type': 'Service', name: 'Employee benefits portal and programme administration', serviceType: 'Employee benefits administration', provider: { '@id': 'https://www.inspro.com.sg/#organization' }, areaServed: { '@type': 'Country', name: 'Singapore' }, url },
  ] };
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title} | Inspro</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${description}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${title}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${description}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(graph)}</script>`)
    .replace(/ aria-current="page"/g, '');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

export function portalContent({ section, crumb, island, button, link, details, icon, corporate, care }) {
  const intro = `<section class="xp-portal-hero"><div class="xp-shell">${crumb('Employee benefits portal')}<div class="xp-portal-intro" data-hero-copy><h1>Employee benefits.<br>Connected.</h1><div><p>One benefits programme. Dedicated tools for employees, HR and the Inspro team supporting you.</p>${button('Request a walkthrough', '/contact-us/?intent=portal')}</div></div></div></section>`;
  const exhibit = section(island('portal'), 'xp-portal-exhibit', 'explore');
  const choice = `<div><h2>Built around<br>your programme.</h2><p>We confirm the cover, portal features and support that fit your team.</p><div class="xp-programme-links"><a href="${care}"><span><strong>BenefitsCare for SME</strong><span>Explore the three SME plans.</span></span>${icon('arrow')}</a><a href="${corporate}"><span><strong>Employee Benefits (Life & Medical)</strong><span>Design a programme for a larger workforce.</span></span>${icon('arrow')}</a></div></div>`;
  const faq = details([
    ['Are all features included in every plan?', 'No. Available benefits, panel access, enrolment options and portal permissions depend on your agreed programme. Ask us to confirm the features for your quotation.'],
    ['How does my team access the portal?', 'Employees and authorised HR users receive the relevant sign-in details when their programme is set up. Existing members should use their company’s portal link or contact Inspro for help.'],
    ['Can I submit a claim on this website?', 'This public website is a feature preview. Use your company’s portal or the claim channel confirmed for your policy to submit documents.'],
  ]);
  const setup = section(`<div class="xp-split">${choice}<div>${faq}</div></div>`, 'xp-section--tint');
  const close = section(`<div class="xp-cta"><h2>See how it fits your team.</h2>${button('Request a walkthrough', '/contact-us/?intent=portal')}</div>`, 'xp-closing');
  return intro + exhibit + setup + close;
}

export function corporatePortalSection({ section, link, icon }) {
  const rows = [
    ['people', 'Employees access their benefits.', 'Cover and balances, claims, panel care and eligible enrolment choices.'],
    ['list', 'HR has the tools to help.', 'Submit permitted employee claims and download filed enrolment forms.'],
    ['shield', 'Inspro manages the programme.', 'Coverage setup, member matching, claim follow-up and programme reports.'],
  ];
  return section(`<div class="xp-portal-service"><div><h2>Cover is only<br>the start.</h2><p>Connect the policy with the people who use it, supported by Inspro’s benefits portal.</p>${link('Preview the portal', portalRoute)}<p class="xp-fine">Features and access depend on your agreed programme.</p></div><div class="xp-portal-service-list" data-stagger>${rows.map(([symbol, title, text]) => `<div>${icon(symbol)}<div><h3>${title}</h3><p>${text}</p></div></div>`).join('')}</div></div>`, '', 'support');
}

export function portalLinkSection({ section, link }, context) {
  const copy = {
    care: ['Put your benefits to work.', 'Explore employee access to benefits, claims and panel care. We’ll confirm the portal features available with your BenefitsCare for SME quotation.', 'See the employee experience', `${portalRoute}?role=employees#explore`],
    claims: ['On an Inspro benefits programme?', 'Your company’s portal may support document uploads, claim updates and replies to follow-up questions. Use the portal link supplied by your employer or the claim channel confirmed for your cover. The link below is a feature preview.', 'Preview portal claims', `${portalRoute}?role=employees&feature=claims#explore`],
    services: ['Employee benefits, connected.', 'See the tools for employees, HR and the Inspro team supporting your programme.', 'Explore the benefits portal', portalRoute],
  }[context];
  return section(`<div class="xp-platform-link" data-enter><div><h2>${copy[0]}</h2><p>${copy[1]}</p></div>${link(copy[2], copy[3])}</div>`, 'xp-section--first');
}
