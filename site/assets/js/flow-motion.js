import { benefitEntrance, finishBenefitGraphics, initBenefitGraphics } from './benefit-graphics.js?v=20261010-benefits-5';

import { businessEntrance, finishBusinessGraphics, initBusinessGraphics } from './business-graphics.js?v=20261010-business-9';
import { personalEntrance, finishPersonalGraphics, initPersonalGraphics } from './personal-graphics.js?v=20261010-reviews-2';

const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
const active = new Set();
const panelAnimations = new WeakMap();
const homeCopy = '.hp-intro-copy > *, .hp-benefits-copy > *, .xp-portal-teaser-copy > *, .hp-travel-copy > *, .hp-contact-copy > *';
const homeVisuals = '.hp-intro-photo, .xp-benefits-photo, .hp-portal-preview, .hp-travel-photo';
const homeDetails = '.hp-credentials > *, .xp-benefit-preview, .hp-contact-picker';

function homeEntrance(panel, gsap, direction) {
  const copy = [...panel.querySelectorAll(homeCopy)];
  const visuals = [...panel.querySelectorAll(homeVisuals)];
  const details = [...panel.querySelectorAll(homeDetails)];
  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  if (copy.length) timeline.fromTo(copy, { opacity: .4, x: 12 * direction }, {
    opacity: 1, x: 0, duration: .34, stagger: .035, clearProps: 'opacity,transform',
  }, 0);
  if (visuals.length) timeline.fromTo(visuals, { clipPath: 'inset(0 5% 0 0)', opacity: .7 }, {
    clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: .48, clearProps: 'clipPath,opacity',
  }, .03);
  if (details.length) timeline.fromTo(details, { opacity: .45, y: 8 }, {
    opacity: 1, y: 0, duration: .3, stagger: .035, clearProps: 'opacity,transform',
  }, .07);
  return timeline;
}

function track(animation) {
  active.add(animation);
  animation.eventCallback('onComplete', () => active.delete(animation));
  return animation;
}

export function finishPanel(panel) {
  finishBenefitGraphics(panel);
  if (panel.dataset.bsScene) finishBusinessGraphics(panel);
  if (panel.dataset.psScene) finishPersonalGraphics(panel);
  const previous = panelAnimations.get(panel);
  if (previous) {
    previous.progress(1).kill();
    active.delete(previous);
    panelAnimations.delete(panel);
  }
  panel.dataset.motionState = 'ready';
}

export function revealPanel(panel, direction = 1) {
  finishPanel(panel);
  const gsap = window.gsap;
  if (!gsap || preference.matches) return;
  panel.dataset.motionState = 'entering';
  let timeline;
  if (panel.closest('.hp-home')) timeline = homeEntrance(panel, gsap, direction);
  else if (panel.dataset.ebScene) timeline = benefitEntrance(panel, gsap, direction);
  else if (panel.dataset.bsScene) timeline = businessEntrance(panel, gsap, direction);
  else if (panel.dataset.psScene) timeline = personalEntrance(panel, gsap, direction);
  else {
    const heading = panel.querySelector('h2');
    const selector = '.search-copy,.ds-product-opening,.ic-rows,.xp-plans,.xp-capabilities,.xp-faq,.ds-question-board,[data-ui-island]';
    const candidates = [...panel.querySelectorAll(selector)];
    const content = candidates.filter(node => !candidates.some(parent => parent !== node && parent.contains(node)));
    timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    if (heading) timeline.fromTo(heading, { opacity: .5, x: 8 * direction }, {
      opacity: 1, x: 0, duration: .26, clearProps: 'opacity,transform',
    }, 0);
    if (content.length) timeline.fromTo(content, { opacity: .5, y: 10 }, {
      opacity: 1, y: 0, duration: .32, stagger: .035, clearProps: 'opacity,transform',
    }, .035);
  }
  timeline.call(() => { panel.dataset.motionState = 'ready'; });
  panelAnimations.set(panel, timeline);
  track(timeline);
}

export function prepareMotion(root) {
  initBenefitGraphics(root);
  initBusinessGraphics(root);
  initPersonalGraphics(root);
  const gsap = window.gsap;
  if (!gsap) return;
  window.ScrollTrigger?.getAll().forEach(trigger => {
    if (trigger.trigger && root.contains(trigger.trigger)) trigger.kill(true);
  });
  const existing = [...root.querySelectorAll('[data-enter], [data-stagger] > *')];
  if (existing.length) {
    gsap.killTweensOf(existing);
    gsap.set(existing, { clearProps: 'opacity,visibility,transform' });
  }
}

export function animateScenes(root) {
  if (!window.gsap || preference.matches) return;
  const scenes = [...root.querySelectorAll('.ds-cover-brief,.ds-flagship-hero .ds-visual-photo,.ds-category-stage,.ds-guide-shelf,.ds-established,.ds-contact-photo')];
  const homeScreen = (root.matches('.hp-home') || root.querySelector('[data-eb-scene],[data-bs-scene],[data-ps-scene]')) && root.querySelector('.flow-screen');
  if (homeScreen) scenes.push(homeScreen);
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    observer.unobserve(entry.target);
    if (preference.matches) return;
    if (entry.target === homeScreen) {
      const panel = homeScreen.querySelector('.flow-panel:not(.flow-inactive)');
      if (panel && !panel.dataset.motionState) revealPanel(panel);
      return;
    }
    const children = entry.target.matches('.ds-cover-brief') ? entry.target.querySelectorAll('.ds-cover-symbol,.ds-visual-title,li') : entry.target.children;
    if (!children.length) return;
    track(window.gsap.fromTo(children, { opacity: .4, y: 16 }, {
      opacity: 1, y: 0, stagger: .06, duration: .5, ease: 'power3.out', clearProps: 'opacity,transform',
    }));
  }), { threshold: .18 });
  scenes.forEach(scene => observer.observe(scene));
  window.addEventListener('pagehide', () => observer.disconnect(), { once: true });
}

preference.addEventListener('change', () => {
  if (!preference.matches) return;
  active.forEach(animation => animation.progress(1).kill());
  active.clear();
});
