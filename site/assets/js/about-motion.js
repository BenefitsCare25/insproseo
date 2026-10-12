import { initRouteLoops } from './travel-motion.js?v=20261011-motion-2';

const duration = 8200;
const tracks = {
  vision: [
    ['needle', 'turn', .08, .38], ['direction', 'trace', .14, .72], ['destination', 'emphasis', .42, .88],
  ],
  mission: [
    ['alternative', 'slide-left', .06, .25], ['services', 'slide-right', .19, .40], ['focus', 'highlight', .45, .77], ['connection', 'trace', .36, .89],
  ],
  values: [
    ['teamwork-emphasis', 'value-emphasis', .03, .21], ['accountability-emphasis', 'value-emphasis', .23, .43],
    ['customer-emphasis', 'value-emphasis', .45, .63], ['trust-emphasis', 'value-emphasis', .65, .89],
    ['team-left', 'gather-left', .05, .16], ['team-right', 'gather-right', .05, .16],
    ['responsibility', 'trace', .22, .42], ['focus-left', 'focus-left', .45, .59], ['focus-right', 'focus-right', .45, .59],
    ['trust-mark', 'trace', .65, .88],
  ],
  help: [
    ['lens', 'inspect', .12, .62], ['scope', 'trace', .62, .91],
  ],
  verification: [
    ['entry', 'reveal', .12, .39], ['contact', 'slide-right', .42, .66], ['channel', 'trace', .63, .91],
  ],
};

function traceFrames(start, end) {
  return [{ strokeDashoffset: '100', opacity: 0, offset: 0 },
    { strokeDashoffset: '100', opacity: 0, offset: start },
    { strokeDashoffset: '100', opacity: .8, offset: start + .04, easing: 'cubic-bezier(.22,1,.36,1)' },
    { strokeDashoffset: '0', opacity: .8, offset: end - .08 },
    { strokeDashoffset: '0', opacity: 0, offset: end },
    { strokeDashoffset: '100', opacity: 0, offset: 1 }];
}

function transformFrames(start, end, from, to, restingOpacity = 1) {
  const settle = end + (1 - end) * .7;
  return [{ transform: from, opacity: restingOpacity, offset: 0 },
    { transform: from, opacity: restingOpacity, offset: start, easing: 'cubic-bezier(.22,1,.36,1)' },
    { transform: to, opacity: 1, offset: end },
    { transform: to, opacity: 1, offset: settle, easing: 'ease-in-out' },
    { transform: from, opacity: restingOpacity, offset: 1 }];
}

function framesFor(kind, start, end) {
  if (kind === 'trace') return traceFrames(start, end);
  if (kind === 'value-emphasis') return [{ opacity: 0, offset: 0 }, { opacity: 0, offset: start },
    { opacity: .12, offset: start + .04 }, { opacity: .12, offset: end - .04 },
    { opacity: 0, offset: end }, { opacity: 0, offset: 1 }];
  if (kind === 'highlight') return [{ opacity: 0, offset: 0 }, { opacity: 0, offset: start },
    { opacity: .65, offset: start + .07 }, { opacity: .65, offset: end - .07 },
    { opacity: 0, offset: end }, { opacity: 0, offset: 1 }];
  const transforms = {
    turn: ['rotate(22deg)', 'rotate(45deg)'],
    'slide-left': ['translate(-9px, 5px)', 'translate(0, 0)'],
    'slide-right': ['translate(10px, 6px)', 'translate(0, 0)'],
    'gather-left': ['translateX(-3px)', 'translateX(0)'],
    'gather-right': ['translateX(3px)', 'translateX(0)'],
    'focus-left': ['translateX(-3px)', 'translateX(0)'],
    'focus-right': ['translateX(3px)', 'translateX(0)'],
    inspect: ['translate(-10px, -12px)', 'translate(5px, 5px)'],
    reveal: ['translateY(6px)', 'translateY(0)'],
    emphasis: ['scale(.9)', 'scale(1)'],
  };
  const pair = transforms[kind];
  return pair ? transformFrames(start, end, ...pair, kind === 'reveal' ? .3 : 1) : [];
}

function animateAboutScene(scene) {
  const animations = [];
  for (const [name, kind, start, end] of tracks[scene.dataset.abScene] || []) {
    const element = scene.querySelector(`[data-ab-part="${name}"]`);
    const frames = framesFor(kind, start, end);
    if (element && frames.length) animations.push(element.animate(frames, { duration, iterations: Infinity }));
  }
  return animations;
}

initRouteLoops(document.querySelector('[data-composition="about"]'), {
  sceneSelector: '[data-ab-scene]', animateScene: animateAboutScene,
});
