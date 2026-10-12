import { finishBenefitYear, initBenefitYear } from './benefit-year.js?v=20261010-benefits-5';

const preference = matchMedia('(prefers-reduced-motion: reduce)');
const roleAnimations = new Set();

function drawConnections(timeline, panel) {
  panel.querySelectorAll('[data-eb-draw]').forEach((line, index) => {
    const length = line.getTotalLength();
    timeline.fromTo(line, { strokeDasharray: length, strokeDashoffset: length }, {
      strokeDashoffset: 0, duration: .65, ease: 'power3.out',
      clearProps: 'strokeDasharray,strokeDashoffset',
    }, .08 + index * .045);
  });
}

export function benefitEntrance(panel, gsap, direction = 1) {
  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  timeline.fromTo(panel.querySelectorAll('.eb-copy > *'), { opacity: .6, x: direction * 10 }, {
    opacity: 1, x: 0, duration: .32, stagger: .04, clearProps: 'opacity,transform',
  }, 0);
  drawConnections(timeline, panel);
  const kind = panel.dataset.ebScene;
  if (kind === 'care') {
    timeline.fromTo(panel.querySelectorAll('.eb-care-node'), { clipPath: 'inset(0 0 100% 0)', y: 10 }, {
      clipPath: 'inset(0 0 0% 0)', y: 0, duration: .48, stagger: .08,
      clearProps: 'clipPath,transform',
    }, .2);
  } else if (kind === 'hospital') {
    timeline.fromTo(panel.querySelector('.eb-hospital-core'), { clipPath: 'inset(0 100% 0 0)' }, {
      clipPath: 'inset(0 0% 0 0)', duration: .5, clearProps: 'clipPath',
    }, .02);
    timeline.fromTo(panel.querySelector('.eb-major-medical'), { x: -24, y: 18, scale: .96 }, {
      x: 0, y: 0, scale: 1, duration: .55, clearProps: 'transform',
    }, .14);
  } else if (kind === 'protection') {
    timeline.fromTo(panel.querySelectorAll('.eb-protection-unit'), { clipPath: 'inset(0 0 0 100%)' }, {
      clipPath: 'inset(0 0 0 0%)', duration: .5, stagger: .1, clearProps: 'clipPath',
    }, .06);
    timeline.fromTo(panel.querySelectorAll('.eb-protection-symbol'), { scale: .85, rotation: -8 }, {
      scale: 1, rotation: 0, duration: .5, stagger: .08, clearProps: 'transform',
    }, .06);
  } else if (kind === 'flex') {
    timeline.fromTo(panel.querySelectorAll('.eb-flex-branch'), { clipPath: 'inset(0 100% 0 0)' }, {
      clipPath: 'inset(0 0% 0 0)', duration: .5, stagger: .12, clearProps: 'clipPath',
    }, .15);
  } else if (kind === 'tools') {
    timeline.fromTo(panel.querySelectorAll('.eb-tool-item'), { opacity: .5, y: 12 }, {
      opacity: 1, y: 0, duration: .35, stagger: .045, clearProps: 'opacity,transform',
    }, .06);
  } else if (kind === 'year') {
    timeline.fromTo(panel.querySelectorAll('.eb-year-marker'), { scale: .75 }, {
      scale: 1, duration: .45, stagger: .075, clearProps: 'transform',
    }, .06);
    timeline.fromTo(panel.querySelector('.eb-year-stories'), { clipPath: 'inset(0 100% 0 0)', y: 10 }, {
      clipPath: 'inset(0 0% 0 0)', y: 0, duration: .5, clearProps: 'clipPath,transform',
    }, .18);
  }
  return timeline;
}

export function initBenefitGraphics(root) {
  initBenefitYear(root);
  root.querySelectorAll('.eb-tools-display').forEach(display => {
    const buttons = [...display.querySelectorAll('[data-benefit-role]')];
    const panels = [...display.querySelectorAll('[data-benefit-role-panel]')];
    const select = (role, animate = false) => {
      buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.benefitRole === role)));
      panels.forEach(panel => {
        const selected = panel.dataset.benefitRolePanel === role;
        panel.hidden = !selected;
        panel.inert = !selected;
        panel.setAttribute('aria-hidden', String(!selected));
        panel.getAnimations({ subtree: true }).forEach(animation => animation.cancel());
        if (selected && animate && !preference.matches) {
          const animation = panel.animate([
            { opacity: .6, clipPath: 'inset(0 0 8% 0)', transform: 'translateY(8px)' },
            { opacity: 1, clipPath: 'inset(0 0 0% 0)', transform: 'translateY(0)' },
          ], { duration: 280, easing: 'cubic-bezier(.16,1,.3,1)' });
          roleAnimations.add(animation);
          animation.finished.then(() => roleAnimations.delete(animation), () => roleAnimations.delete(animation));
        }
      });
    };
    select('employees');
    buttons.forEach(button => button.addEventListener('click', () => select(button.dataset.benefitRole, true)));
  });
}

export function finishBenefitGraphics(panel) {
  finishBenefitYear(panel);
  panel.querySelectorAll('.eb-tools-view').forEach(view => view.getAnimations({ subtree: true }).forEach(animation => animation.cancel()));
}

preference.addEventListener('change', () => {
  if (!preference.matches) return;
  roleAnimations.forEach(animation => animation.cancel());
  roleAnimations.clear();
});
