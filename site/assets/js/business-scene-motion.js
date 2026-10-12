function trace(scope, timeline) {
  scope.querySelectorAll('[data-bs-draw]').forEach((path, i) => {
    const length = path.getTotalLength();
    timeline.fromTo(path, { strokeDasharray: length, strokeDashoffset: length }, {
      strokeDashoffset: 0, duration: .48, clearProps: 'strokeDasharray,strokeDashoffset',
    }, Number(path.dataset.bsAt ?? (.04 + Math.min(i * .025, .2))));
  });
}
function pieces(scope, timeline) {
  const kind = scope.dataset.bsGraphic;
  scope.querySelectorAll('[data-bs-piece]').forEach((node, i) => {
    const direction = node.dataset.bsPiece;
    const distance = ['projects', 'repair'].includes(kind) ? 22 : ['fleet', 'cargo'].includes(kind) ? 24 : 12;
    timeline.fromTo(node, {
      x: direction === 'right' ? -distance : direction === 'left' ? distance : 0,
      y: direction === 'up' ? distance : 0, opacity: .5, clipPath: 'inset(0 0 8% 0)',
    }, {
      x: 0, y: 0, opacity: 1, clipPath: 'inset(0)', duration: .42,
      clearProps: 'transform,opacity,clipPath',
    }, .12 + Math.min(i * .065, .26));
  });
}
function transfer(scope, timeline, selector, origin, at = .1, duration = .65) {
  const node = scope.querySelector(selector);
  if (!node) return;
  timeline.fromTo(node, origin, {
    x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, duration, ease: 'power3.out',
    transformOrigin: 'center', clearProps: 'transform,transformOrigin,opacity',
  }, at);
}
function followRoute(scope, timeline, gsap) {
  const route = scope.querySelector('[data-bs-route]');
  const mover = scope.querySelector('[data-bs-path-mover]');
  if (!route || !mover) return;
  const length = route.getTotalLength(), end = route.getPointAtLength(length);
  const state = { progress: 0 };
  timeline.fromTo(state, { progress: 0 }, {
    progress: 1, duration: 1.1, ease: 'power3.out',
    onUpdate() {
      const position = state.progress * length, point = route.getPointAtLength(position);
      const before = route.getPointAtLength(Math.max(0, position - 1));
      const after = route.getPointAtLength(Math.min(length, position + 1));
      const angle = Math.atan2(after.y - before.y, after.x - before.x) * 180 / Math.PI;
      const rotation = mover.dataset.bsHeading ? angle - Number(mover.dataset.bsHeading) : 0;
      gsap.set(mover, { x: point.x - end.x, y: point.y - end.y, rotation, transformOrigin: 'center' });
    },
    onComplete() { gsap.set(mover, { clearProps: 'transform,transformOrigin' }); },
  }, .15);
}
export function businessSceneMotion(scope, gsap) {
  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  scope.querySelectorAll('[data-bs-graphic]').forEach(graphic => {
    trace(graphic, timeline);
    pieces(graphic, timeline);
    transfer(graphic, timeline, '[data-bs-cash-route]', { x: -436 }, .2, 1.1);
    transfer(graphic, timeline, '[data-bs-loss-mark]', { opacity: 0, scale: .75 }, .75, .4);
    transfer(graphic, timeline, '[data-bs-package-cash]', { x: -148, y: 0 });
    transfer(graphic, timeline, '[data-bs-package-cash-small]', { x: 0, y: -58 });
    transfer(graphic, timeline, '[data-bs-package-continuity]', { scaleY: .2 });
    transfer(graphic, timeline, '[data-bs-package-continuity-small]', { scaleY: .2 });
    transfer(graphic, timeline, '[data-bs-package-responsibility]', { scale: .5 });
    transfer(graphic, timeline, '[data-bs-pause]', { opacity: 0, scale: .75 }, .8, .4);
    transfer(graphic, timeline, '[data-bs-hoist]', { y: -65 }, .3, .85);
    transfer(graphic, timeline, '[data-bs-contract-seal]', { scale: .5 }, .75, .4);
    transfer(graphic, timeline, '[data-bs-artwork]', { x: -168, y: -113 }, .25, 1);
    transfer(graphic, timeline, '[data-bs-incident]', { opacity: 0, scale: .8 }, .55, .45);
    transfer(graphic, timeline, '[data-bs-delivery]', { x: -102 }, .2, .85);
    transfer(graphic, timeline, '[data-bs-network-packet]', { x: -39 }, .2, .7);
    const claim = graphic.querySelector('[data-bs-claim]');
    if (claim) transfer(graphic, timeline, '[data-bs-claim]', {
      x: Number(claim.dataset.bsFromX), y: Number(claim.dataset.bsFromY), opacity: 0,
    }, .55, .65);
    followRoute(graphic, timeline, gsap);
    transfer(graphic, timeline, '[data-bs-bond-seal]', { scale: .6 }, .45, .5);
    transfer(graphic, timeline, '[data-bs-benefit-document]', { x: -76, y: -112, opacity: 0 }, .4, .8);
    const benefits = graphic.querySelectorAll('[data-bs-work-benefit]');
    if (benefits.length) timeline.fromTo(benefits, { opacity: .1, clipPath: 'inset(0 0 25% 0)' }, {
      opacity: 1, clipPath: 'inset(0)', duration: .4, stagger: .13,
      clearProps: 'opacity,clipPath',
    }, .4);
    transfer(graphic, timeline, '[data-bs-vessel]', { y: 10 }, .2, .7);
    transfer(graphic, timeline, '[data-bs-machinery]', { opacity: 0, scale: .8 }, .5, .45);
    transfer(graphic, timeline, '[data-bs-sail]', { y: 40, opacity: .4 }, .35, .8);
    transfer(graphic, timeline, '[data-bs-waves]', { x: -12 }, .2, .8);
    transfer(graphic, timeline, '[data-bs-repair-part]', { y: -61 }, .3, .85);
    transfer(graphic, timeline, '[data-bs-unpaid]', { opacity: 0, scale: .7 }, .65, .5);
    transfer(graphic, timeline, '[data-bs-role-vessel]', { x: -22 }, .15, .8);
    transfer(graphic, timeline, '[data-bs-role-hoist]', { y: -23 }, .15, .8);
    transfer(graphic, timeline, '[data-bs-role-crate]', { x: -58 }, .15, .8);
    transfer(graphic, timeline, '[data-bs-role-report]', { opacity: .2, y: 6 }, .15, .8);
    const vehicles = graphic.querySelectorAll('[data-bs-fleet-vehicle]');
    if (vehicles.length) timeline.fromTo(vehicles, { x: -48 }, { x: 0, duration: .9,
      stagger: .08, clearProps: 'transform,transformOrigin' }, .2);
  });
  return timeline;
}
