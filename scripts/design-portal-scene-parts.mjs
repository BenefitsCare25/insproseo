import { escape, icon } from './design-content.mjs';

export function choices(key, items, className = '') {
  return `<div class="pt-sample-choices ${className}" data-sample-choices="${key}" aria-label="${escape(key)} sample options">${items.map(([value, label, symbol], i) => `<button type="button" data-sample-value="${value}" aria-pressed="${i === 0}" class="pt-sample-button">${symbol ? icon(symbol) : ''}<span>${escape(label)}</span></button>`).join('')}</div>`;
}

export function previewPanel(group, value, body) {
  return `<div class="pt-preview-panel" data-preview-group="${group}" data-preview-value="${value}">${body}</div>`;
}

export function metric(label, value, symbol = 'check') {
  return `<div class="pt-metric-card">${icon(symbol)}<span>${label}</span><strong>${value}</strong></div>`;
}

export function amount(value, decimals = 0) {
  if (!Number.isFinite(value) || value < 0) throw new Error('Invalid portal amount.');
  const label = `S$${value.toLocaleString('en-SG', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;
  return `<span class="pt-count" data-count-target="${value}" data-count-decimals="${decimals}"><span data-count-visual aria-hidden="true">${label}</span><span class="pt-sr-only" data-count-label>${label}</span></span>`;
}

export function flowGraphic(symbols = ['document', 'support', 'shield']) {
  return `<div class="pt-flow-graphic" aria-hidden="true"><svg viewBox="0 0 320 72"><path class="pt-flow-line" d="M40 36H280" pathLength="100"/><circle class="pt-flow-packet" cx="40" cy="36" r="4"/></svg><div class="pt-flow-nodes">${symbols.map(symbol => `<span>${icon(symbol)}</span>`).join('')}</div></div>`;
}

export function record(symbol, title, detail, status = '') {
  return `<div class="pt-record">${icon(symbol)}<div><strong>${title}</strong><span>${detail}</span></div>${status ? `<span class="pt-status">${status}</span>` : ''}</div>`;
}

export function receipt() {
  return `<div class="pt-receipt pt-floating-document"><div class="pt-document-top">${icon('document')}<span class="pt-status">Attached</span></div><h4>Consultation receipt</h4><span>Employee A</span><dl class="pt-document-facts"><div><dt>Service</dt><dd>Outpatient medical</dd></div><div><dt>Amount</dt><dd>S$50.00</dd></div></dl><div class="pt-receipt-lines" aria-hidden="true"><i></i><i></i><i></i></div><div class="pt-file-label">${icon('document')}<span>Receipt.pdf</span></div></div>`;
}

export function fileStack() {
  return `<div class="pt-file-stack" aria-hidden="true"><div class="pt-stacked-sheet pt-sheet-back"></div><div class="pt-stacked-sheet pt-sheet-middle"></div><div class="pt-stacked-sheet pt-sheet-front">${icon('document')}<strong data-format-art>PDF</strong><span>Enrolment form</span><div class="pt-receipt-lines"><i></i><i></i><i></i></div></div></div>`;
}
