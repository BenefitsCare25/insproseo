const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const animations = new Set();

function play(element, frames, options) {
  const animation = element.animate(frames, options);
  animations.add(animation);
  animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
}

export function finishBenefitYear(root) {
  root.querySelectorAll('.eb-year-display, .eb-year-display *').forEach(element => {
    element.getAnimations().forEach(animation => animation.cancel());
  });
}

function bindYear(display) {
  const tabs = [...display.querySelectorAll('[data-year-stage]')];
  const views = [...display.querySelectorAll('[data-year-panel]')];
  const progress = display.querySelector('.eb-year-progress');
  let selected = 0;
  const choose = (index, animate = false) => {
    const previous = selected;
    selected = Math.max(0, Math.min(tabs.length - 1, index));
    finishBenefitYear(display.parentElement);
    display.dataset.yearIndex = String(selected);
    progress.style.setProperty('--eb-year-progress', selected / (tabs.length - 1));
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === selected));
      tab.tabIndex = i === selected ? 0 : -1;
    });
    views.forEach((view, i) => {
      view.hidden = i !== selected;
      view.inert = i !== selected;
      view.setAttribute('aria-hidden', String(i !== selected));
    });
    if (!animate || reduced.matches || previous === selected) return;
    const timing = { duration: 360, easing: 'cubic-bezier(.16,1,.3,1)' };
    play(progress, [
      { transform: 'scaleX(' + previous / (tabs.length - 1) + ')' },
      { transform: 'scaleX(' + selected / (tabs.length - 1) + ')' },
    ], timing);
    play(tabs[selected].querySelector('.eb-year-marker'), [
      { transform: 'scale(.88)' }, { transform: 'scale(1.06)', offset: .6 }, { transform: 'scale(1)' },
    ], timing);
    [...views[selected].children].forEach((element, i) => play(element, [
      { opacity: .5, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' },
    ], { ...timing, delay: i * 35 }));
  };
  tabs.forEach((tab, index) => tab.addEventListener('click', () => choose(index, true)));
  display.querySelector('.eb-year-nav').addEventListener('keydown', event => {
    if (!event.target.matches('[data-year-stage]')) return;
    const offsets = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (!(event.key in offsets) && !['Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1
      : (selected + offsets[event.key] + tabs.length) % tabs.length;
    choose(index, true);
    tabs[index].focus();
  });
  choose(0);
}

export function initBenefitYear(root) {
  root.querySelectorAll('.eb-year-display').forEach(bindYear);
}

reduced.addEventListener('change', () => {
  if (!reduced.matches) return;
  animations.forEach(animation => animation.cancel());
  animations.clear();
});
