const page = document.querySelector('.gd-page');
const preference = matchMedia('(prefers-reduced-motion: reduce)');
const printMedia = matchMedia('print');
const scenes = page ? [...page.querySelectorAll('[data-guide-motion]')].map(element => ({ element, animations: [], inView: false })) : [];
const supported = typeof Element.prototype.animate === 'function' && typeof IntersectionObserver === 'function';
let printing = false;

function settle(scene) {
  scene.animations.forEach(animation => animation.cancel());
  scene.animations = [];
}

function cycle(start, finish, begin, end) {
  return [
    { ...start, offset: 0 }, { ...start, offset: begin, easing: 'cubic-bezier(.22,1,.36,1)' },
    { ...finish, offset: end }, { ...finish, offset: .92, easing: 'ease-in-out' },
    { ...start, offset: 1 },
  ];
}

function move(scene, selector, frames) {
  const elements = [...scene.element.querySelectorAll(selector)].filter(element => element.getBoundingClientRect().width > 0);
  elements.forEach((element,index) => {
    scene.animations.push(element.animate(typeof frames === 'function' ? frames(index) : frames, {
      duration: 5200, iterations: Infinity,
    }));
  });
}

function play(scene) {
  settle(scene);
  if (!supported || preference.matches || printMedia.matches || printing || document.hidden || !scene.inView) return;
  if (scene.element.dataset.guideMotion === 'renewal') {
    move(scene, '[data-motion-paper]', cycle(
      { transform: 'translate(-8px, 8px) rotate(-3deg)', transformOrigin: '120px 210px' },
      { transform: 'translate(0, 0) rotate(0deg)', transformOrigin: '120px 210px' },
      .01, .18,
    ));
    move(scene, '[data-motion-route]', index => cycle({ strokeDashoffset: '1' }, { strokeDashoffset: '0' }, .05 + index * .07, .16 + index * .07));
    move(scene, '[data-motion-check]', index => cycle({ strokeDashoffset: '1' }, { strokeDashoffset: '0' }, .15 + index * .07, .24 + index * .07));
    move(scene, '[data-motion-marker]', index => cycle({ opacity: .4 }, { opacity: 1 }, .12 + index * .07, .24 + index * .07));
  } else {
    move(scene, '[data-motion-cover]', index => cycle(
      { transform: `translate(${index % 2 ? 24 : -24}px, 12px) rotate(${index % 2 ? 2 : -2}deg)`, transformOrigin: `280px ${83 + index * 73}px` },
      { transform: 'translate(0, 0) rotate(0deg)', transformOrigin: `280px ${83 + index * 73}px` }, .01 + index * .06, .19 + index * .06,
    ));
  }
}

function syncMotion() {
  scenes.forEach(play);
}

if (supported && scenes.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const scene = scenes.find(item => item.element === entry.target);
      if (!scene) return;
      scene.inView = entry.isIntersecting && entry.intersectionRatio >= .25;
      play(scene);
    });
  }, { threshold: .25 });
  const resize = typeof ResizeObserver === 'function' ? new ResizeObserver(syncMotion) : null;
  const observe = () => scenes.forEach(scene => { observer.observe(scene.element); resize?.observe(scene.element); });
  observe();
  preference.addEventListener('change', syncMotion);
  printMedia.addEventListener('change', syncMotion);
  document.addEventListener('visibilitychange', syncMotion);
  window.addEventListener('pagehide', () => { observer.disconnect(); resize?.disconnect(); scenes.forEach(settle); });
  window.addEventListener('pageshow', event => { if (event.persisted) observe(); });
  window.addEventListener('beforeprint', () => { printing = true; syncMotion(); });
  window.addEventListener('afterprint', () => { printing = false; syncMotion(); });
}
