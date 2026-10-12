import { finishBusinessControls, initBusinessControls } from './business-controls.js?v=20261010-business-9';
import { businessSceneMotion } from './business-scene-motion.js?v=20261010-business-9';

export function businessEntrance(panel, gsap, direction) {
  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  timeline.fromTo(panel.querySelector('.bs-copy'), { opacity: .75, x: direction * 6 }, {
    opacity: 1, x: 0, duration: .25, clearProps: 'opacity,transform',
  }, 0);
  const view = panel.querySelector('.bs-product-view:not([hidden]),.bs-package-overview');
  if (view) timeline.add(businessSceneMotion(view, gsap), .03);
  return timeline;
}
export const initBusinessGraphics = initBusinessControls;
export const finishBusinessGraphics = finishBusinessControls;
