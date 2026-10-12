import { icon } from './design-content.mjs';
import { choices, previewPanel, metric, amount, flowGraphic } from './design-portal-scene-parts.mjs';

function members() {
  return `<div class="pt-report-view"><section class="pt-ui-card pt-report-graphic"><h4>Programme membership</h4><div class="pt-report-donut"><svg viewBox="0 0 200 200" aria-hidden="true"><circle class="pt-donut-track" cx="100" cy="100" r="80"/><circle class="pt-donut-fill" cx="100" cy="100" r="80" pathLength="100" stroke-dasharray="75 25"/></svg><div><strong>4</strong><span>Covered records</span></div></div><div class="pt-chart-key"><span><i></i>Employees · 3</span><span><i></i>Dependants · 1</span></div></section><section class="pt-report-summary"><div class="pt-metric-pair">${metric('Employees', '3', 'people')}${metric('Dependants', '1', 'people')}</div><div class="pt-ui-card"><h4>Coverage mix</h4><div class="pt-horizontal-bars"><div><span>Employees</span><strong>75%</strong><i style="--bar-share:75%"></i></div><div><span>Dependants</span><strong>25%</strong><i style="--bar-share:25%"></i></div></div></div></section></div>`;
}

function flex() {
  return `<div class="pt-report-view"><section class="pt-ui-card pt-report-graphic"><h4>Flexible-benefits allowance</h4><div class="pt-report-total"><strong>${amount(500)}</strong><span>Total allowance</span></div><div class="pt-allocation-bar" aria-hidden="true"><i style="--allocation-share:25%"></i><i style="--allocation-share:10%"></i><i style="--allocation-share:65%"></i></div><dl class="pt-allocation-key"><div><dt>Approved</dt><dd>S$125</dd></div><div><dt>Pending</dt><dd>S$50</dd></div><div><dt>Available</dt><dd>S$325</dd></div></dl></section><section class="pt-report-summary"><div class="pt-metric-pair">${metric('Filed enrolments', '3', 'document')}${metric('Acknowledged', '1', 'check')}</div><div class="pt-ui-card"><h4>Enrolment progress</h4><div class="pt-form-progress"><span>1 of 3 forms acknowledged</span><strong>33%</strong><progress max="3" value="1" aria-label="Enrolment forms acknowledged">1 of 3</progress></div><p class="pt-functional-copy">Acknowledgement remains with Inspro.</p></div></section></div>`;
}

function claims() {
  return `<div class="pt-report-view"><section class="pt-ui-card pt-report-graphic"><h4>HR-submitted claims</h4><div class="pt-report-total"><strong>${amount(125)}</strong><span>2 permitted submissions</span></div><div class="pt-claim-comparison"><div><span>Claim A</span><i style="--bar-share:40%"></i><strong>S$50</strong></div><div><span>Claim B</span><i style="--bar-share:60%"></i><strong>S$75</strong></div></div></section><section class="pt-report-summary"><div class="pt-metric-pair">${metric('Under review', '1', 'search')}${metric('Receipt attached', '1', 'document')}</div><div class="pt-ui-card"><h4>Assessment workflow</h4>${flowGraphic()}<ol class="pt-report-flow"><li>${icon('document')}Supporting documents</li><li>${icon('support')}Inspro follow-up</li><li>${icon('shield')}Insurer assessment</li></ol></div></section></div>`;
}

export function reports() {
  return `<div class="pt-reports-layout">${choices('report', [['members', 'Members'], ['flex', 'Enrolment & flex'], ['claims', 'Claims']])}${previewPanel('report', 'members', members())}${previewPanel('report', 'flex', flex())}${previewPanel('report', 'claims', claims())}</div>`;
}
