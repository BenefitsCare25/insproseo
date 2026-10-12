const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
const active = new Set();
const specialistNames = { golf: 'golfer’s insurance', art: 'fine art insurance', craft: 'pleasure craft insurance' };
function settle(scope) {
  scope.getAnimations({ subtree: true }).forEach(animation => animation.cancel());
  const nodes = [scope, ...scope.querySelectorAll('*')];
  window.gsap?.killTweensOf(nodes);
  window.gsap?.set(nodes, { clearProps: 'opacity,transform,clipPath,strokeDasharray,strokeDashoffset' });
}
function remember(animation) {
  active.add(animation);
  animation.finished.then(() => active.delete(animation), () => active.delete(animation));
}
function animateSelection(view, kind) {
  if (preference.matches) return;
  remember(view.animate([{ opacity: .65, transform: kind === 'home' ? 'translateY(5px)' : 'translateX(7px)' }, { opacity: 1, transform: 'translate(0)' }], { duration: 320, easing: 'cubic-bezier(.16,1,.3,1)' }));
  view.querySelectorAll('[data-ps-draw]').forEach(path => {
    const length = path.getTotalLength();
    remember(path.animate([{ strokeDasharray: length, strokeDashoffset: length }, { strokeDasharray: length, strokeDashoffset: 0 }], { duration: 520, easing: 'cubic-bezier(.16,1,.3,1)' }));
  });
}
function bindKeyboard(group, buttons, select) {
  group.addEventListener('keydown', event => {
    const current = buttons.indexOf(event.target);
    if (current < 0) return;
    const offsets = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (!(event.key in offsets) && !['Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : (current + offsets[event.key] + buttons.length) % buttons.length;
    select(buttons[next], true);
    buttons[next].focus();
  });
}
function bindDisplay(display) {
  const buttons = [...display.querySelectorAll('[data-ps-choice]')];
  const views = [...display.querySelectorAll('[data-ps-view]')];
  const select = (button, animate = false) => {
    settle(display);
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    views.forEach(view => {
      const selected = view.dataset.psView === button.dataset.psChoice;
      view.hidden = !selected;
      view.inert = !selected;
      view.setAttribute('aria-hidden', String(!selected));
      if (selected && animate) animateSelection(view, display.dataset.psDisplay);
    });
    if (display.dataset.psDisplay === 'lifestyle') {
      const link = display.closest('.ps-scene').querySelector('[data-personal-enquiry]');
      link.href = '/contact-us/?intent=personal&topic=' + button.dataset.psChoice;
      link.firstChild.textContent = 'Review';
      link.setAttribute('aria-label', 'Review ' + specialistNames[button.dataset.psChoice]);
    }
  };
  const deepLink = () => {
    const key = decodeURIComponent(location.hash.slice(1)).replace('ps-view-' + display.dataset.psDisplay + '-', '');
    const button = buttons.find(item => item.dataset.psChoice === key);
    if (button) select(button);
  };
  select(buttons[0]);
  deepLink();
  buttons.forEach(button => button.addEventListener('click', () => select(button, true)));
  bindKeyboard(display.querySelector('.ps-choices'), buttons, select);
  window.addEventListener('hashchange', deepLink);
}
export function initPersonalControls(root) { root.querySelectorAll('[data-ps-display]').forEach(bindDisplay); }
export function finishPersonalControls(panel) {
  panel.getAnimations({ subtree: true }).forEach(animation => animation.cancel());
}
preference.addEventListener('change', () => {
  if (!preference.matches) return;
  active.forEach(animation => animation.cancel());
  active.clear();
});
