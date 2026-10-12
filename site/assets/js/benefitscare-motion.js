const preference = matchMedia('(prefers-reduced-motion: reduce)');

class CareMotion {
  constructor(main) {
    this.main = main;
    this.roots = [...main.querySelectorAll('[data-bc-motion]')];
    this.animations = new Map();
    this.printing = false;
    this.frame = 0;
    this.refresh = this.refresh.bind(this);
    this.schedule = this.schedule.bind(this);
    this.intersections = 'IntersectionObserver' in window ? new IntersectionObserver(this.schedule) : null;
    this.changes = new MutationObserver(this.schedule);
    this.observe();
    preference.addEventListener('change', this.schedule);
    document.addEventListener('visibilitychange', () => document.hidden ? this.refresh() : this.schedule());
    window.addEventListener('resize', this.schedule);
    if (!this.intersections) window.addEventListener('scroll', this.schedule, { passive: true });
    window.addEventListener('pagehide', () => this.suspend());
    window.addEventListener('pageshow', event => { if (event.persisted) { this.observe(); this.schedule(); } });
    this.refresh();
  }

  observe() {
    this.roots.forEach(root => this.intersections?.observe(root));
    this.changes.observe(this.main, { subtree: true, attributes: true, attributeFilter: ['hidden', 'class'] });
  }

  schedule() {
    if (!this.frame) this.frame = requestAnimationFrame(this.refresh);
  }

  start(root) {
    if (!root.animate) return;
    if (!this.animations.has(root)) {
      const duration = root.dataset.bcScene === 'network' ? 6400 : 5600;
      const animations = [...root.querySelectorAll('[data-bc-flow]')].map(path => path.animate([
        { strokeDashoffset: 112, opacity: 0 },
        { opacity: .85, offset: .12 },
        { opacity: .85, offset: .78 },
        { strokeDashoffset: -16, opacity: 0 },
      ], { duration, delay: -Number(path.dataset.bcFlow) * 1050, iterations: Infinity, easing: 'linear' }));
      this.animations.set(root, animations);
    }
    root.dataset.bcMotionState = 'playing';
  }

  stop(root) {
    this.animations.get(root)?.forEach(animation => animation.cancel());
    this.animations.delete(root);
    root.dataset.bcMotionState = 'static';
  }

  refresh() {
    this.frame = 0;
    const disabled = preference.matches || document.hidden || this.printing;
    this.roots.forEach(root => {
      const bounds = root.getBoundingClientRect();
      const visible = bounds.width && bounds.height && bounds.bottom > 0 && bounds.top < innerHeight;
      if (disabled || !visible || root.closest('[hidden], .flow-inactive')) this.stop(root);
      else this.start(root);
    });
  }

  setPrinting(value) {
    this.printing = value;
    this.refresh();
  }

  suspend() {
    cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.roots.forEach(root => this.stop(root));
    this.intersections?.disconnect();
    this.changes.disconnect();
  }
}

export const createCareMotion = main => new CareMotion(main);
