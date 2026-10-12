import { businessSceneMotion } from './business-scene-motion.js?v=20261010-business-9';
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
const active = new Map();

function settle(scope) {
  for (const [target, timeline] of active) {
    if (scope === target || scope.contains(target)) {
      timeline.progress(1).kill();
      active.delete(target);
    }
  }
  scope.getAnimations({ subtree: true }).forEach(animation => animation.cancel());
  const nodes = [scope, ...scope.querySelectorAll('*')];
  window.gsap?.killTweensOf(nodes);
  window.gsap?.set(nodes, { clearProps: 'opacity,transform,transformOrigin,clipPath,strokeDasharray,strokeDashoffset' });
}
function play(scope) {
  const gsap = window.gsap;
  if (!gsap || preference.matches) return;
  const timeline = businessSceneMotion(scope, gsap);
  active.set(scope, timeline);
  const finish = () => { if (active.get(scope) === timeline) active.delete(scope); };
  timeline.eventCallback('onComplete', finish);
  timeline.eventCallback('onInterrupt', finish);
}
function keyboard(group, buttons, select) {
  group.addEventListener('keydown', event => {
    const index = buttons.indexOf(event.target);
    if (index < 0) return;
    const offsets = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (!(event.key in offsets) && !['Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1
      : (index + offsets[event.key] + buttons.length) % buttons.length;
    select(buttons[next], true);
    buttons[next].focus();
  });
}
function productChoices(root) {
  root.querySelectorAll('[data-bs-products]').forEach(display => {
    const buttons = [...display.querySelectorAll('[data-bs-choice]')];
    const views = [...display.querySelectorAll('[data-bs-view]')];
    const select = (button, animate = false) => {
      settle(display);
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      views.forEach(view => {
        const selected = view.dataset.bsView === button.dataset.bsChoice;
        view.hidden = !selected;
        view.inert = !selected;
        view.setAttribute('aria-hidden', String(!selected));
        if (selected && animate) play(view);
      });
    };
    const hashChoice = () => {
      const view = views.find(item => '#' + item.id === location.hash);
      if (view) select(buttons.find(item => item.dataset.bsChoice === view.dataset.bsView));
    };
    select(buttons[0]);
    hashChoice();
    window.addEventListener('hashchange', hashChoice);
    buttons.forEach(button => button.addEventListener('click', () => select(button, true)));
    keyboard(display.querySelector('.bs-product-picks'), buttons, select);
  });
}
export function initBusinessControls(root) { productChoices(root); }
export function finishBusinessControls(panel) { settle(panel); }
preference.addEventListener('change', () => {
  if (preference.matches) [...active.keys()].forEach(settle);
});
