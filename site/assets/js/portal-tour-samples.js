import { setPortalAmount } from './portal-tour-counters.js?v=20261011-portal-4';

const periods = {
  prepare: ['Prepare the benefit year', 'Confirm the schedule and eligibility before opening enrolment.', 'Programme setup'],
  open: ['Open employee enrolment', 'Eligible employees can review the options and file their selections.', 'Enrolment period open'],
  review: ['Review filed selections', 'Check the filed forms and acknowledge them through Inspro administration.', 'Forms awaiting review'],
};
const followup = {
  evidence: ['Document review', 'Receipt attached. Check the claim details against the supporting document.', 'Awaiting insurer assessment'],
  followup: ['Claim correspondence', 'Please confirm the consultation date on your receipt.', 'Employee reply received'],
};

function setText(root, selector, value) {
  const target = root.querySelector(selector);
  if (target) target.textContent = value;
}

function selectPreview(scene, key, value) {
  scene.querySelectorAll(`[data-preview-group="${key}"]`).forEach(panel => {
    const active = panel.dataset.previewValue === value;
    panel.hidden = !active; panel.inert = !active;
    panel.setAttribute('aria-hidden', String(!active));
  });
}

function chooseSample(scene, key, value) {
  selectPreview(scene, key, value);
  if (key === 'clinic' && ['a', 'b'].includes(value)) {
    const area = value.toUpperCase();
    setText(scene, '[data-clinic-name]', `Example clinic ${area}`);
    setText(scene, '[data-clinic-detail]', `Sample area ${area}`);
    const diagram = scene.querySelector('.pt-clinic-diagram');
    diagram.dataset.clinic = value;
    const route = value === 'b' ? diagram.dataset.routeB : diagram.dataset.routeA;
    diagram.querySelector('.pt-map-pulse').setAttribute('cx', value === 'b' ? '350' : '128');
    diagram.querySelector('.pt-map-pulse').setAttribute('cy', value === 'b' ? '88' : '72');
    diagram.querySelector('.pt-map-route').setAttribute('d', route);
    diagram.style.setProperty('--pt-map-route', `path('${route}')`);
  }
  if (key === 'submission' && ['a', 'b'].includes(value)) {
    setText(scene, '[data-employee]', `Employee ${value.toUpperCase()}`);
    setPortalAmount(scene, '[data-hr-amount]', value === 'a' ? 50 : 75);
    setText(scene, '[data-hr-status]', value === 'a' ? 'Under review' : 'Receipt attached');
    setText(scene, '[data-hr-file]', `Receipt-${value.toUpperCase()}.pdf`);
    setText(scene, '[data-hr-stage]', value === 'a' ? 'Details being checked' : 'Supporting document received');
  }
  if (key === 'match-person' && ['employee', 'dependant'].includes(value)) {
    const employee = value === 'employee';
    setText(scene, '[data-match-id]', employee ? 'E-001' : 'D-001');
    setText(scene, '[data-match-relationship]', employee ? 'Employee' : 'Dependant');
    setText(scene, '[data-match-group]', employee ? 'Employee group' : 'Eligible dependant group');
    setText(scene, '[data-match-result]', employee ? 'Record matched to benefit schedule' : 'Linked to employee E-001');
    setText(scene, '[data-match-status]', employee ? 'Employee record matched' : 'Dependant eligibility matched');
  }
  if (key === 'period' && periods[value]) {
    const [title, copy, state] = periods[value];
    setText(scene, '[data-period-title]', title); setText(scene, '[data-period-copy]', copy);
    setText(scene, '[data-period-state]', state);
    scene.querySelectorAll('[data-period-step]').forEach(step => step.classList.toggle('is-current', step.dataset.periodStep === value));
  }
  if (key === 'follow-up' && followup[value]) {
    const [title, copy, state] = followup[value];
    setText(scene, '[data-followup-title]', title); setText(scene, '[data-followup-copy]', copy);
    setText(scene, '[data-followup-state]', state);
    scene.querySelector('[data-evidence-checks]').hidden = value !== 'evidence';
    scene.querySelector('[data-reply-preview]').hidden = value !== 'followup';
  }
}

function updateEnrolment(scene, reviewed = false) {
  const selected = ['Medical cover', ...[...scene.querySelectorAll('[data-benefit-option]:checked')].map(input => input.dataset.benefitOption)];
  const list = scene.querySelector('[data-selected-benefits]');
  list.replaceChildren(...selected.map(label => { const item = document.createElement('li'); item.textContent = label; return item; }));
  scene.querySelectorAll('[data-benefit-animation]').forEach(node => {
    node.dataset.selected = String(selected.includes(node.dataset.benefitAnimation));
  });
  scene.querySelector('[data-enrolment]').checked = reviewed;
  setText(scene, '[data-enrolment-status]', reviewed ? 'Selection reviewed' : `${selected.length} benefits selected`);
}

function updateBalance(scene, pending) {
  setPortalAmount(scene, '[data-balance]', pending ? 325 : 375);
  setText(scene, '[data-balance-caption]', pending ? 'after pending claims' : 'before pending claims');
  scene.querySelector('.pt-ring-available').style.strokeDasharray = pending ? '65 35' : '75 25';
  scene.querySelector('[data-allocation-pending]').style.setProperty('--allocation-share', pending ? '10%' : '0%');
  scene.querySelector('[data-allocation-available]').style.setProperty('--allocation-share', pending ? '65%' : '75%');
  setText(scene, '[data-pending-share]', pending ? '10%' : 'Excluded');
  setText(scene, '[data-available-share]', pending ? '65%' : '75%');
}

function bindPreviewPrint(root) {
  let states = null;
  window.addEventListener('beforeprint', () => {
    if (states) return;
    states = [...root.querySelectorAll('[data-preview-group]')].map(panel => [panel, panel.hidden, panel.inert]);
    states.forEach(([panel]) => { panel.hidden = false; panel.inert = false; panel.removeAttribute('aria-hidden'); });
  });
  window.addEventListener('afterprint', () => {
    if (!states) return;
    states.forEach(([panel, hidden, inert]) => { panel.hidden = hidden; panel.inert = inert; panel.setAttribute('aria-hidden', String(hidden)); });
    states = null;
  });
}

export function bindPortalSamples(root) {
  root.querySelectorAll('[data-sample-choices]').forEach(group => {
    const selected = group.querySelector('[aria-pressed="true"]');
    if (selected) chooseSample(group.closest('[data-scene]'), group.dataset.sampleChoices, selected.dataset.sampleValue);
  });
  root.querySelectorAll('[data-benefit-option]').forEach(input => { input.disabled = false; });
  root.addEventListener('click', event => {
    const button = event.target.closest('[data-sample-value]');
    if (!button || !root.contains(button)) return;
    const group = button.closest('[data-sample-choices]');
    const scene = button.closest('[data-scene]');
    if (!group || !scene) return;
    group.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    chooseSample(scene, group.dataset.sampleChoices, button.dataset.sampleValue);
    root.dispatchEvent(new Event('portal:sample-change'));
  });
  root.addEventListener('change', event => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement)) return;
    const scene = input.closest('[data-scene]');
    if (!scene) return;
    if (input.matches('[data-pending]')) updateBalance(scene, input.checked);
    if (input.matches('[data-enrolment]')) updateEnrolment(scene, input.checked);
    if (input.matches('[data-benefit-option]')) updateEnrolment(scene);
    root.dispatchEvent(new Event('portal:sample-change'));
  });
  bindPreviewPrint(root);
}
