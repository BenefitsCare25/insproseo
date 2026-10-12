import { createCareMotion } from './benefitscare-motion.js?v=20261011-care-7';

const tabControllers = [];
let motion;

function bindPicker(picker) {
  const bar = picker.querySelector('[data-bc-tabs]');
  const buttons = [...bar.querySelectorAll('[data-bc-tab]')];
  const views = [...picker.querySelectorAll('[data-bc-view]')];
  const review = picker.closest('.bc-section')?.querySelector('[data-bc-plan-review]');
  if (!buttons.length || buttons.length !== views.length) return;
  let selected = Math.max(0, buttons.findIndex(button => button.dataset.bcTab === picker.dataset.bcDefault));
  const choose = index => {
    if (index < 0 || index >= buttons.length) return;
    selected = index;
    views.forEach((view, position) => {
      const inactive = position !== selected;
      view.hidden = inactive;
      view.inert = inactive;
      view.tabIndex = inactive ? -1 : 0;
      view.setAttribute('role', 'tabpanel');
      view.setAttribute('aria-labelledby', buttons[position].id);
    });
    buttons.forEach((button, position) => {
      button.setAttribute('aria-selected', String(position === selected));
      button.tabIndex = position === selected ? 0 : -1;
    });
    if (review) {
      review.href = views[selected].dataset.bcReviewHref;
      review.setAttribute('aria-label', `Review plan: ${buttons[selected].textContent.trim()} — BenefitsCare for SME`);
    }
    motion?.refresh();
  };
  buttons.forEach((button, index) => button.addEventListener('click', () => choose(index)));
  bar.addEventListener('keydown', event => {
    const index = buttons.indexOf(event.target.closest('[data-bc-tab]'));
    if (index < 0) return;
    let next;
    if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = buttons.length - 1;
    else if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + buttons.length) % buttons.length;
    else return;
    event.preventDefault();
    choose(next);
    buttons[next].focus({ preventScroll: true });
  });
  choose(selected);
  bar.hidden = false;
  tabControllers.push({
    expand: () => views.forEach(view => { view.hidden = false; view.inert = false; }),
    restore: () => choose(selected),
  });
}

function init() {
  const main = document.querySelector('.bc-page');
  if (!main) return;
  main.querySelectorAll('[data-bc-picker]').forEach(bindPicker);
  main.classList.add('bc-ready');
  motion = createCareMotion(main);
  window.addEventListener('beforeprint', () => {
    motion.setPrinting(true);
    tabControllers.forEach(controller => controller.expand());
  });
  window.addEventListener('afterprint', () => {
    tabControllers.forEach(controller => controller.restore());
    motion.setPrinting(false);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
else init();
