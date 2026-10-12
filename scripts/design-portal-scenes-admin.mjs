import { icon } from './design-content.mjs';
import { choices, record, receipt, amount, flowGraphic } from './design-portal-scene-parts.mjs';

import { forms } from './design-portal-scenes-forms.mjs';
import { coverage } from './design-portal-scenes-coverage.mjs';
import { reports } from './design-portal-scenes-reports.mjs';

function hrClaims() {
  return `<div class="pt-hr-layout"><section class="pt-ui-card pt-claim-register"><div class="pt-card-top"><h4>HR submissions</h4><span class="pt-status">2 records</span></div><div class="pt-person-choices pt-sample-choices" data-sample-choices="submission" aria-label="Sample HR submissions">${['a', 'b'].map((person, i) => `<button type="button" class="pt-person-choice" data-sample-value="${person}" aria-pressed="${i === 0}"><span class="pt-person-avatar">E${person.toUpperCase()}</span><span><strong>Employee ${person.toUpperCase()}</strong><small>Outpatient medical</small></span>${icon('arrow')}</button>`).join('')}</div><div class="pt-static-records">${record('people', 'Employee A', 'Outpatient medical')}${record('people', 'Employee B', 'Outpatient medical')}</div>${flowGraphic(['people', 'document', 'support'])}<div class="pt-register-footer">${icon('business')}<span>HR-submitted claims</span></div></section>
    <section class="pt-ui-card pt-claim-detail"><div class="pt-card-top"><h4 data-employee aria-live="polite">Employee A</h4><span class="pt-status" data-hr-status>Under review</span></div><div class="pt-claim-amount"><span>Claim amount</span><strong data-hr-amount>${amount(50, 2)}</strong></div><dl class="pt-detail-list"><div><dt>Benefit</dt><dd>Outpatient medical</dd></div><div><dt>Submitted by</dt><dd>HR account</dd></div><div><dt>Visibility</dt><dd>Permitted submission</dd></div></dl><div class="pt-attachment-card">${icon('document')}<div><strong data-hr-file>Receipt-A.pdf</strong><span>Supporting document</span></div><span class="pt-status">PDF</span></div><div class="pt-claim-stage">${icon('support')}<span data-hr-stage>Details being checked</span></div></section></div>`;
}



function review() {
  return `<div class="pt-review-layout"><section class="pt-document-well">${receipt()}</section><section class="pt-ui-card pt-review-workspace"><div class="pt-card-top"><h4>Claim follow-up</h4><span class="pt-status">Under review</span></div>${choices('follow-up', [['evidence', 'Documents', 'document'], ['followup', 'Correspondence', 'mail']])}<div class="pt-review-context"><span class="pt-large-symbol">${icon('support')}</span><div><strong data-followup-title>Document review</strong><span>Inspro support</span></div></div><div class="pt-message pt-support-message"><strong>Inspro support</strong><p data-followup-copy>Receipt attached. Check the claim details against the supporting document.</p></div><div class="pt-followup-checklist" data-evidence-checks><span>${icon('check')}Receipt attached</span><span>${icon('search')}Consultation details</span><span>${icon('shield')}Insurer requirements</span></div><div class="pt-reply-preview" data-reply-preview hidden><span>${icon('mail')}Employee reply</span><p>Consultation date confirmed. Updated receipt attached.</p></div>${flowGraphic(['document', 'support', 'mail'])}<div class="pt-review-outcome">${icon('shield')}<span data-followup-state>Awaiting insurer assessment</span></div></section></div>`;
}


export const adminScenes = { 'hr-claims': hrClaims, forms, coverage, review, reports };
