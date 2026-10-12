function settle(scene) {
  scene.animations.forEach(animation => animation.cancel());
  scene.animations = [];
}

function flightFrames(path) {
  const length = path.getTotalLength();
  if (!Number.isFinite(length) || length <= 0) return [];
  const frame = (distance, offset, opacity) => {
    const point = path.getPointAtLength(distance);
    const next = path.getPointAtLength(Math.min(length, distance + 1));
    const previous = path.getPointAtLength(Math.max(0, distance - 1));
    const angle = Math.atan2(next.y - previous.y, next.x - previous.x) * 180 / Math.PI + 45;
    return { transform: `translate(${point.x}px, ${point.y}px) rotate(${angle}deg)`, opacity, offset };
  };
  return [frame(0, 0, 0), frame(0, .12, 1), ...Array.from({ length: 32 }, (_, index) => frame(length * (index + 1) / 32, .12 + .64 * (index + 1) / 32, 1)), frame(length, .88, 0), frame(0, .99, 0), frame(0, 1, 0)];
}

export function initRouteLoops(root, { sceneSelector = '[data-tr-scene]', routeSelector = '[data-tr-route]', animateScene } = {}) {
  if (!root) return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const printMedia = matchMedia('print');
  const scenes = [...root.querySelectorAll(sceneSelector)].map(element => ({ element, inView: false, animations: [] }));
  const supported = typeof Element.prototype.animate === 'function' && typeof IntersectionObserver === 'function';
  let printing = false;

  function sync(scene) {
    const inactive = scene.element.closest('.flow-panel')?.getAttribute('aria-hidden') === 'true';
    const visible = getComputedStyle(scene.element).visibility !== 'hidden';
    const canPlay = supported && scene.inView && visible && !inactive && !preference.matches && !printMedia.matches && !printing && !document.hidden;
    if (!canPlay) return settle(scene);
    if (scene.animations.length) return;
    if (typeof animateScene === 'function') {
      scene.animations = animateScene(scene.element);
      return;
    }
    scene.element.querySelectorAll(routeSelector).forEach((element, index) => {
      scene.animations.push(element.animate([{ strokeDashoffset: '110' }, { strokeDashoffset: '-10' }], { duration: 6400, delay: index * -1100, iterations: Infinity }));
    });
    const plane = scene.element.querySelector('[data-tr-plane]');
    const path = scene.element.querySelector('[data-tr-flight-path]');
    if (plane && path) {
      const frames = flightFrames(path);
      if (frames.length) scene.animations.push(plane.animate(frames, { duration: 6400, iterations: Infinity }));
    }
  }

  const syncAll = () => scenes.forEach(sync);
  if (supported && scenes.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const scene = scenes.find(item => item.element === entry.target);
        if (scene) scene.inView = entry.isIntersecting && entry.intersectionRatio >= .15;
      });
      syncAll();
    }, { threshold: [0, .15] });
    const changes = new MutationObserver(syncAll);
    const observe = () => {
      scenes.forEach(scene => observer.observe(scene.element));
      changes.observe(root, { subtree: true, attributes: true, attributeFilter: ['aria-hidden', 'class'] });
    };
    observe();
    preference.addEventListener('change', syncAll);
    printMedia.addEventListener('change', syncAll);
    document.addEventListener('visibilitychange', syncAll);
    window.addEventListener('beforeprint', () => { printing = true; syncAll(); });
    window.addEventListener('afterprint', () => { printing = false; syncAll(); });
    window.addEventListener('pagehide', () => { observer.disconnect(); changes.disconnect(); scenes.forEach(scene => { scene.inView = false; settle(scene); }); });
    window.addEventListener('pageshow', event => { if (event.persisted) observe(); });
  }
}

initRouteLoops(document.querySelector('.tr-page'));
