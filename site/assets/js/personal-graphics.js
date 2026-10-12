import { finishPersonalControls, initPersonalControls } from './personal-controls.js?v=20261010-reviews-1';
const all = (panel, selector) => [...panel.querySelectorAll(selector)].filter(node => node.checkVisibility());
export function initPersonalGraphics(root) { initPersonalControls(root); }
export function finishPersonalGraphics(panel) { finishPersonalControls(panel); }
function draw(timeline, panel, start = .1) {
  all(panel, '[data-ps-draw]').forEach((path, index) => {
    const length = path.getTotalLength();
    timeline.fromTo(path, { strokeDasharray: length, strokeDashoffset: length }, { strokeDashoffset: 0, duration: .55, clearProps: 'strokeDasharray,strokeDashoffset' }, start + index * .035);
  });
}
function show(timeline, nodes, direction = 1, start = .05) {
  if (!nodes.length) return;
  timeline.fromTo(nodes, { opacity: .55, y: 6 * direction }, { opacity: 1, y: 0, duration: .32, stagger: .045, clearProps: 'opacity,transform' }, start);
}
export function personalEntrance(panel, gsap, direction) {
  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  show(timeline, all(panel, '.ps-copy > *:not(.ds-anchor)'), direction, 0);
  show(timeline, all(panel, '.ps-choices > button'), direction, .025);
  draw(timeline, panel);
  const kind = panel.dataset.psScene;
  if (kind === 'travel') {
    show(timeline, all(panel, '.ps-travel-window,.ps-travel-checks > div,.ps-caption'), 1, .15);
    const plane = all(panel, '.ps-route-plane');
    if (plane.length) timeline.fromTo(plane, { x: -118, opacity: .6 }, { x: 0, opacity: 1, duration: .65, clearProps: 'opacity,transform' }, .1);
  } else if (kind === 'motor') show(timeline, all(panel, '.ps-detail,.ps-motor-layers > li'), 1, .12);
  else if (kind === 'home') show(timeline, all(panel, '.ps-house-marker,.ps-detail'), 1, .12);
  else if (kind === 'accident') show(timeline, all(panel, '.ps-accident-hub,.ps-accident-outcomes > div'), 1, .1);
  else if (kind === 'helper') show(timeline, all(panel, '.ps-helper-covers > div,.ps-helper-bond'), 1, .12);
  else {
    show(timeline, all(panel, '.ps-specialist-facts > div'), 1, .12);
    const ball = all(panel, '.ps-golf-ball');
    if (ball.length) timeline.fromTo(ball, { x: -218 }, { x: 0, duration: .65, clearProps: 'transform' }, .1);
  }
  return timeline;
}
