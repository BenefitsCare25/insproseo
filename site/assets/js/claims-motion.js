import { initRouteLoops } from './travel-motion.js?v=20261011-motion-2';

const duration = 7600;
const tracks = {
  hero: {
    moves: [['hero-record', 'hero-in', .08, .33], ['hero-message', 'hero-out', .49, .70], ['hero-reply', 'hero-return', .74, .94]],
    pulses: [['hero-focus', .27, .72, .7], ['hero-review', .33, .49, .10]],
    layers: [['hero-document', .27, .97], ['hero-insurer-record', .65, .98], ['hero-correspondence', .72, .98]],
  },
  steps: {
    moves: [['steps-record', 'steps-in', .09, .32], ['steps-question', 'steps-out', .58, .80]],
    pulses: [['steps-focus', .29, .55, .65], ['steps-response', .75, .93, .12]],
    layers: [['steps-organised', .28, .97], ['steps-next-step', .72, .98]],
  },
  programme: {
    moves: [['programme-record', 'programme-in', .09, .32], ['programme-note', 'programme-out', .55, .77], ['programme-reply', 'programme-return', .78, .96]],
    pulses: [['programme-focus', .28, .76, .7], ['programme-document', .33, .51, .10], ['programme-update', .52, .76, .10], ['programme-message', .72, .90, .65]],
    layers: [['programme-doc-row', .29, .97], ['programme-update-row', .51, .98], ['programme-correspondence', .71, .98]],
  },
  questions: {
    moves: [['questions-note', 'questions-in', .10, .33], ['questions-reply', 'questions-return', .70, .94]],
    pulses: [['questions-dot-1', .36, .56, 1], ['questions-dot-2', .42, .62, 1], ['questions-dot-3', .48, .68, 1]],
    layers: [['questions-answer', .64, .98]],
  },
};

function packetFrames(element, path, start, end) {
  const length = path.getTotalLength();
  const origin = element.parentElement.transform.baseVal.consolidate()?.matrix;
  if (!origin || !Number.isFinite(length) || length <= 0) return [];
  const frame = (progress, offset, opacity) => {
    const point = path.getPointAtLength(length * progress);
    return { transform: `translate(${point.x - origin.e - 11}px, ${point.y - origin.f - 14}px)`, opacity, offset };
  };
  const travelStart = start + .04;
  const travelEnd = end - .04;
  return [frame(0, 0, 0), frame(0, start, 0), frame(0, travelStart, 1),
    ...Array.from({ length: 28 }, (_, index) => {
      const progress = (index + 1) / 28;
      return frame(1 - (1 - progress) ** 3, travelStart + (travelEnd - travelStart) * progress, 1);
    }), frame(1, end, 0), frame(1, 1, 0)];
}

function pulseFrames(start, end, peak, base = 0) {
  const fade = (end - start) / 4;
  return [{ opacity: base, offset: 0 }, { opacity: base, offset: start },
    { opacity: peak, offset: start + fade }, { opacity: peak, offset: end - fade },
    { opacity: base, offset: end }, { opacity: base, offset: 1 }];
}

function routeFrames(start, end) {
  return [{ strokeDashoffset: '100', opacity: 0, offset: 0 },
    { strokeDashoffset: '100', opacity: 0, offset: start },
    { strokeDashoffset: '100', opacity: .65, offset: start + .04 },
    { strokeDashoffset: '0', opacity: .65, offset: end - .04 },
    { strokeDashoffset: '0', opacity: 0, offset: end },
    { strokeDashoffset: '100', opacity: 0, offset: 1 }];
}

function layerFrames(start, end) {
  return [{ opacity: 0, transform: 'translateY(8px)', offset: 0 },
    { opacity: 0, transform: 'translateY(8px)', offset: start, easing: 'ease-out' },
    { opacity: 1, transform: 'translateY(0)', offset: start + .07 },
    { opacity: 1, transform: 'translateY(0)', offset: end - .04 },
    { opacity: 0, transform: 'translateY(0)', offset: end },
    { opacity: 0, transform: 'translateY(8px)', offset: 1 }];
}

function animateClaimsScene(scene) {
  const track = tracks[scene.dataset.clScene];
  if (!track) return [];
  const animations = [];
  const part = name => scene.querySelector(`[data-cl-part="${name}"]`);
  const play = (element, frames) => {
    if (element && frames.length) animations.push(element.animate(frames, { duration, iterations: Infinity }));
  };
  track.moves.forEach(([name, route, start, end]) => {
    const element = part(name), path = part(route);
    if (!element || !path) return;
    play(element, packetFrames(element, path, start, end));
    play(path, routeFrames(start, end));
  });
  track.pulses.forEach(([name, start, end, peak, base]) => play(part(name), pulseFrames(start, end, peak, base)));
  track.layers.forEach(([name, start, end]) => play(part(name), layerFrames(start, end)));
  if (scene.dataset.clScene === 'questions') {
    play(part('questions-flap'), [{ transform: 'scaleY(1)', offset: 0 },
      { transform: 'scaleY(1)', offset: .08 }, { transform: 'scaleY(-.6)', offset: .16 },
      { transform: 'scaleY(-.6)', offset: .27 }, { transform: 'scaleY(1)', offset: .35 },
      { transform: 'scaleY(1)', offset: 1 }]);
  }
  return animations;
}

initRouteLoops(document.querySelector('.cl-page'), {
  sceneSelector: '[data-cl-scene]', animateScene: animateClaimsScene,
});
