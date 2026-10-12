import { icon } from './design-content.mjs';
import { choices, previewPanel, metric, flowGraphic } from './design-portal-scene-parts.mjs';

function schedule() {
  return `<div class="pt-schedule-layout"><section class="pt-schedule-art"><h4>Programme structure</h4><div class="pt-schedule-network" aria-hidden="true"><span class="pt-network-hub">${icon('shield')}</span><svg viewBox="0 0 300 150"><path class="pt-workflow-path" d="M150 25V75H40V125M150 75V125M150 75H260V125"/></svg><div class="pt-network-nodes"><span>${icon('medical')}</span><span>${icon('shield')}</span><span>${icon('money')}</span></div></div><div class="pt-network-labels"><span>Medical</span><span>Hospital</span><span>Flex</span></div></section><section class="pt-ui-card"><div class="pt-card-top"><h4>Benefit schedule</h4>${icon('list')}</div><table class="pt-schedule-table"><caption class="pt-sr-only">Illustrative benefit configuration</caption><thead><tr><th scope="col">Benefit</th><th scope="col">Configuration</th></tr></thead><tbody><tr><th scope="row">Outpatient medical</th><td>Panel access &amp; claims</td></tr><tr><th scope="row">Hospital &amp; surgical</th><td>Insurer benefit terms</td></tr><tr><th scope="row">Flexible benefits</th><td>Allowance &amp; eligible items</td></tr></tbody></table><div class="pt-configuration-fields"><span>${icon('people')}Eligibility groups</span><span>${icon('continuity')}Benefit year</span></div></section></div>`;
}

function matching() {
  return `<section class="pt-ui-card pt-matching-workspace">
    <div class="pt-match-header"><h4>Match records to cover</h4>${choices('match-person', [['employee', 'Employee'], ['dependant', 'Dependant']])}</div>
    <div class="pt-match-flow">
      <div class="pt-match-source"><div class="pt-match-label">${icon('document')}<strong>Employer record</strong></div>
        <dl><div><dt>Member ID</dt><dd data-match-id>E-001</dd></div><div><dt>Relationship</dt><dd data-match-relationship>Employee</dd></div></dl>
      </div>
      <span class="pt-match-link" aria-hidden="true"><svg viewBox="0 0 96 40"><path d="M6 20H87m-8-7 8 7-8 7"/><circle class="pt-match-packet" cx="6" cy="20" r="3"/></svg></span>
      <div class="pt-match-destination"><div class="pt-match-label">${icon('shield')}<strong>Benefit schedule</strong></div>
        <strong data-match-group>Employee group</strong><span data-match-result>Record matched to benefit schedule</span>
        <span class="pt-match-status" data-match-status aria-live="polite">Employee record matched</span>
      </div>
    </div>
    <div class="pt-match-validation"><strong>Eligibility checks</strong><ul class="pt-match-checks"><li>${icon('check')}Identity &amp; relationship</li><li>${icon('check')}Programme group</li><li>${icon('check')}Benefit-year eligibility</li></ul></div>
  </section>`;
}

function enrolment() {
  return `<div class="pt-year-layout"><section class="pt-ui-card"><div class="pt-card-top"><h4>Benefit-year enrolment</h4>${icon('continuity')}</div>${choices('period', [['prepare', 'Prepare'], ['open', 'Open'], ['review', 'Review']], 'pt-period-choices')}<ol class="pt-period-track"><li data-period-step="prepare" class="is-current"><span>01</span><div><strong>Prepare</strong><small>Schedule &amp; eligible groups</small></div></li><li data-period-step="open"><span>02</span><div><strong>Open</strong><small>Employee selections</small></div></li><li data-period-step="review"><span>03</span><div><strong>Review</strong><small>Filed forms &amp; acknowledgement</small></div></li></ol></section><section class="pt-year-detail">${flowGraphic(['list', 'people', 'document'])}<h4 data-period-title>Prepare the benefit year</h4><p data-period-copy>Confirm the schedule and eligibility before opening enrolment.</p><div class="pt-period-state" data-period-state aria-live="polite">Programme setup</div><div class="pt-metric-pair">${metric('Employee forms', '3', 'document')}${metric('Acknowledged', '1', 'check')}</div></section></div>`;
}

export function coverage() {
  return `<div class="pt-coverage-layout">${choices('coverage', [['schedule', 'Benefit schedule', 'list'], ['match', 'Member matching', 'people'], ['enrolment', 'Enrolment', 'document']], 'pt-process-choices')}${previewPanel('coverage', 'schedule', schedule())}${previewPanel('coverage', 'match', matching())}${previewPanel('coverage', 'enrolment', enrolment())}</div>`;
}
