import { routes as r, sources as s } from './page-map.mjs';

export const escapeHtml = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export const link = (label, href) => `<a href="${escapeHtml(href)}">${label}</a>`;
export const paragraph = text => `<p>${text}</p>`;
export const list = items => `<ul>${items.map(item=>`<li>${item}</li>`).join('')}</ul>`;
export function section(title, body, id = '') {
  return `<section class="search-section"${id ? ` id="${id}"` : ''}><div class="xp-shell search-layout"><h2>${title}</h2><div class="search-copy">${body}</div></div></section>`;
}
export function questions(items) {
  return `<div class="xp-faq search-faq">${items.map(([q,a])=>`<details><summary>${q}<span aria-hidden="true">+</span></summary><div class="xp-faq-answer"><p>${a}</p></div></details>`).join('')}</div>`;
}
export function table(caption, headers, rows) {
  return `${headers.length>2?'<p class="search-table-hint">Scroll across the table to see every column on a small screen.</p>':''}<div class="search-table-wrap" tabindex="0" role="region" aria-label="${escapeHtml(caption)}"><table class="search-table search-table--${headers.length}"><caption>${caption}</caption><thead><tr>${headers.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map((v,i)=>i===0?`<th scope="row">${v}</th>`:`<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
export function related(items, title='Continue your review') {
  return section(title, `<ul class="search-links">${items.map(([label,url,desc])=>`<li>${link(label,url)}${desc?`<p>${desc}</p>`:''}</li>`).join('')}</ul>`);
}
export function sourceNote(items) {
  return `<p class="search-source">Sources checked 9 October 2026: ${items.map(([label,url])=>link(label,url)).join('; ')}. Check the current requirements and your insurer’s terms before arranging cover.</p>`;
}

export const content = {
  home: section('A Singapore insurance broker for your people and business.',
    paragraph('Inspro Insurance Brokers Pte Ltd helps Singapore employers review employee benefits and commercial insurance, arrange cover and manage policy administration. Incorporated in June 2000, Inspro is listed by MAS as a Registered Insurance Broker and Exempt Financial Adviser.') +
    `<div class="search-home-links">${link('Compare BenefitsCare for SME',r.care)}${link('Review Business Insurance',r.business)}${link('Verify Inspro’s MAS registration',s.mas)}</div>`),
  care: section('Choose a starting plan, then confirm the details.',
    paragraph('A small team still needs a clear benefit schedule. Compare which employees can join, what they can claim, which clinics they can visit and what your company or employees may need to pay.') +
    questions([
      ['Can a small company request BenefitsCare for SME?', 'Yes. BenefitsCare for SME is designed as a starting point for SMEs. Share your headcount and workforce profile so Inspro can confirm eligibility, minimum participation and terms for your chosen plan.'],
      ['What does panel GP access mean?', 'A panel is a network of participating clinics. GP means general practitioner. Check the clinic list, treatment benefits, visit limits and any employee co-payment for your plan.'],
      ['Does every BenefitsCare for SME plan include hospital insurance?', 'No. Starter focuses on panel GP access. Flex adds non-panel access and flexible benefits. Premier includes inpatient hospitalisation, subject to the insurer’s terms. Confirm limits, eligibility, exclusions and any employee payment before choosing.'],
      ['How do I compare the total cost?', 'Ask for the final premium, any separately charged administration or other fees, applicable taxes and employee co-payments. Compare the same benefit limits and workforce assumptions across quotations.'],
    ])),
  benefits: '',
  business: '',
  about: section('Verify who you are speaking with.',
    paragraph('Inspro Insurance Brokers Pte Ltd is incorporated in Singapore. The MAS Financial Institutions Directory lists Inspro as a Registered Insurance Broker for Direct Insurance and an Exempt Financial Adviser. Check that listing for the current regulated activities.') +
    paragraph(`${link('Check Inspro in the MAS directory',s.mas)}. For an enquiry, use ${link('+65 6448 7707','tel:+6564487707')} or ${link('helpdesk@inspro.com.sg','mailto:helpdesk@inspro.com.sg')}. Our address is 38 Jalan Pemimpin, M38, #02-08, Singapore 577178.`) +
    paragraph('Inspro supports insurance review, placement and administration. Insurers decide underwriting, policy terms and claim outcomes. Ask how the proposed arrangement, service scope and any charges will work before you proceed.')),
  claims: section('Keep the initial enquiry focused.',
    table('Information to have ready for claims support',['Prepare','Why it helps'],[
      ['Type of policy and insurer','Identifies the reporting process and contact team.'],
      ['Incident date and claim reference, if available','Helps connect your question with the insurer’s records.'],
      ['The step you need help with','For example, a document request, claim status or settlement query.'],
    ]) + paragraph('Do not put medical records, NRIC numbers or payment details in this website’s enquiry form. Ask the team for a suitable channel. For an emergency, use the emergency assistance number in your policy; a website enquiry is not an emergency service.')),
  checklist: '',
  personal: section('Compare the cover you already have.',
    paragraph('Use your policy schedule and renewal date to identify what you want to change. Compare insured people or property, limits, excesses and exclusions before looking only at the premium.') +
    questions([
      ['Can I arrange Personal Insurance online?', `Some pages link to insurer quotation routes, including ${link('travel insurance',r.travel)}. Insurer websites confirm eligibility, premium and acceptance. An enquiry or referral click does not start cover.`],
      ['Can employee benefits replace my Personal Insurance?', 'Do not assume employer benefits meet every personal need or continue after you leave a job. Compare your employer’s schedule with your own policies and discuss gaps or overlap before changing cover.'],
    ])),
  travel: '',
  privacy: '',
};
