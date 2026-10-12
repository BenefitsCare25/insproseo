import { icon } from './design-content.mjs';
import { amount, receipt } from './design-portal-scene-parts.mjs';
import { care } from './design-portal-scenes-care.mjs';

function benefits() {
  return `<div class="pt-benefits-layout"><section class="pt-balance-card"><div class="pt-card-top"><h4>Flexible benefits</h4>${icon('money')}</div><div class="pt-balance"><svg class="pt-balance-ring" viewBox="0 0 200 200" aria-hidden="true"><circle class="pt-ring-track" cx="100" cy="100" r="84"/><circle class="pt-ring-approved" cx="100" cy="100" r="84" pathLength="100"/><circle class="pt-ring-available" cx="100" cy="100" r="84" pathLength="100"/></svg><div class="pt-balance-number"><span>Available balance</span><output data-balance aria-live="polite">${amount(325)}</output><span data-balance-caption>after pending claims</span></div></div><div class="pt-allowance"><span>Total allowance</span><strong>${amount(500)}</strong></div></section>
    <div class="pt-benefits-detail"><div class="pt-metric-pair"><div class="pt-metric-card">${icon('check')}<span>Approved claims</span><strong>${amount(125)}</strong></div><div class="pt-metric-card">${icon('continuity')}<span>Pending claims</span><strong>${amount(50)}</strong></div></div><section class="pt-ui-card pt-balance-breakdown"><h4>Allowance breakdown</h4><div class="pt-allocation-bar" aria-hidden="true"><i style="--allocation-share:25%"></i><i data-allocation-pending style="--allocation-share:10%"></i><i data-allocation-available style="--allocation-share:65%"></i></div><dl class="pt-allocation-key"><div><dt>Approved</dt><dd>25%</dd></div><div><dt>Pending</dt><dd data-pending-share>10%</dd></div><div><dt>Available</dt><dd data-available-share>65%</dd></div></dl><label class="pt-sample-toggle"><input type="checkbox" data-pending checked><span>Include pending claims</span></label><div class="pt-cover-tags"><span>${icon('medical')}Outpatient medical</span><span>${icon('people')}Dependants</span></div></section></div></div>`;
}

function claims() {
  return `<div class="pt-claim-layout"><section class="pt-document-well">${receipt()}</section><section class="pt-ui-card pt-journey-card"><div class="pt-card-top"><h4>Claim progress</h4><span class="pt-status">Under review</span></div><ol class="pt-claim-track"><li><span class="pt-track-icon">${icon('check')}</span><div><strong>Submitted</strong><span>Receipt attached</span></div></li><li><span class="pt-track-icon pt-step-pulse">${icon('search')}</span><div><strong>Under review</strong><span>Details being checked</span></div></li><li><span class="pt-track-icon">${icon('shield')}</span><div><strong>Outcome</strong><span>Awaiting assessment</span></div></li></ol><details class="pt-sample-message"><summary>${icon('mail')}Correspondence${icon('arrow')}</summary><div class="pt-message"><strong>Inspro support</strong><p>Please confirm the consultation date on your receipt.</p></div></details></section></div>`;
}

function selectionGraphic() {
  return `<div class="pt-selection-graphic" aria-hidden="true"><svg viewBox="0 0 240 150"><path class="pt-selection-route" d="M42 27H90Q120 27 120 75H192" pathLength="100"/><path class="pt-selection-route" data-benefit-animation="Flexible benefits" data-selected="true" d="M42 75H192" pathLength="100"/><path class="pt-selection-route" data-benefit-animation="Dependant cover" data-selected="false" d="M42 123H90Q120 123 120 75H192" pathLength="100"/></svg><span class="pt-selection-node" data-benefit-animation="Medical cover" data-selected="true">${icon('medical')}</span><span class="pt-selection-node" data-benefit-animation="Flexible benefits" data-selected="true">${icon('money')}</span><span class="pt-selection-node" data-benefit-animation="Dependant cover" data-selected="false">${icon('people')}</span><span class="pt-selection-document">${icon('document')}</span></div>`;
}

function enrolment() {
  return `<div class="pt-enrolment-layout">
    <ol class="pt-enrolment-steps"><li><span>${icon('check')}</span><strong>Review</strong></li><li class="pt-current-step"><span>${icon('list')}</span><strong>Select</strong></li><li><span>${icon('document')}</span><strong>Complete</strong></li></ol>
    <div class="pt-enrolment-cards"><section class="pt-ui-card">
      <div class="pt-card-top"><h4>Eligible benefit options</h4><span class="pt-status">Open period</span></div>
      <div class="pt-option-fixed">${icon('medical')}<div><strong>Medical cover</strong><small>Core benefit</small></div>${icon('check')}</div>
      <label class="pt-benefit-option">${icon('money')}<span><strong>Flexible benefits</strong><small>Eligible programme items</small></span><input type="checkbox" data-benefit-option="Flexible benefits" checked disabled></label>
      <label class="pt-benefit-option">${icon('people')}<span><strong>Dependant cover</strong><small>Eligible family members</small></span><input type="checkbox" data-benefit-option="Dependant cover" disabled></label>
    </section><section class="pt-selection-card"><h4>Selection summary</h4>
      <div class="pt-selection-overview">${selectionGraphic()}<ul class="pt-selected-benefits" data-selected-benefits><li>Medical cover</li><li>Flexible benefits</li></ul></div>
      <div class="pt-selection-actions"><label class="pt-sample-toggle"><input type="checkbox" data-enrolment><span>Review selection</span></label><div class="pt-review-state" data-enrolment-status aria-live="polite">2 benefits selected</div></div>
    </section></div>
  </div>`;
}

export const employeeScenes = { benefits, claims, care, enrolment };
