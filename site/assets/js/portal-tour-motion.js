import { portalCounters } from './portal-tour-counters.js?v=20261011-portal-4';

export function portalMotion(root) {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const graphics = [...root.querySelectorAll('[data-motion-graphic]')];
  const visible = new Set();
  let suspended = false;
  let printing = false;
  let entrance;
  const counters = portalCounters(root);

  function update() {
    if (preference.matches || suspended || printing || document.hidden) entrance?.cancel();
    for (const graphic of graphics) {
      const panel = graphic.closest('[data-feature]');
      const active = !panel || panel.dataset.active === 'true';
      const running = active && visible.has(graphic) && !preference.matches && !suspended && !printing && !document.hidden;
      graphic.dataset.motion = running ? 'running' : 'paused';
    }
    counters.update();
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
    update();
  }, { threshold: .08 });
  graphics.forEach(graphic => observer.observe(graphic));
  preference.addEventListener('change', update);
  root.addEventListener('portal:sample-change', update);
  document.addEventListener('visibilitychange', update);
  window.addEventListener('pagehide', () => { suspended = true; update(); });
  window.addEventListener('pageshow', () => { suspended = false; update(); });
  window.addEventListener('beforeprint', () => { printing = true; update(); });
  window.addEventListener('afterprint', () => { printing = false; update(); });

  return {
    update,
    reveal(panel) {
      entrance?.cancel();
      update();
      if (preference.matches || suspended || printing || document.hidden) return;
      entrance = panel.animate([{ opacity: .65, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], {
        duration: 320, easing: 'cubic-bezier(.16,1,.3,1)',
      });
    },
  };
}
