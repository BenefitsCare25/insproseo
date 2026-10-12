const scenes = [...document.querySelectorAll('[data-article-motion]')];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const printMedia = matchMedia('print');
const visible = new Set();
let printing = false;

function syncGuideMotion() {
  const canPlay = !reducedMotion.matches && !printMedia.matches && !printing && !document.hidden;
  scenes.forEach(scene => scene.toggleAttribute('data-motion-playing', canPlay && visible.has(scene)));
}

if (scenes.length && typeof IntersectionObserver === 'function') {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= .25) visible.add(entry.target);
      else visible.delete(entry.target);
    });
    syncGuideMotion();
  }, { threshold: .25 });
  const observe = () => scenes.forEach(scene => observer.observe(scene));
  observe();
  reducedMotion.addEventListener('change', syncGuideMotion);
  printMedia.addEventListener('change', syncGuideMotion);
  document.addEventListener('visibilitychange', syncGuideMotion);
  window.addEventListener('pagehide', () => { observer.disconnect(); visible.clear(); syncGuideMotion(); });
  window.addEventListener('pageshow', event => { if (event.persisted) observe(); });
  window.addEventListener('beforeprint', () => { printing = true; syncGuideMotion(); });
  window.addEventListener('afterprint', () => { printing = false; syncGuideMotion(); });
}
