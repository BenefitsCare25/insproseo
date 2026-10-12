const formatters = new Map([0, 2].map(decimals => [decimals, new Intl.NumberFormat('en-SG', {
  minimumFractionDigits: decimals, maximumFractionDigits: decimals,
})]));

function target(node) {
  const value = Number(node.dataset.countTarget);
  return Number.isFinite(value) && value >= 0 && value <= 1000000 ? value : 0;
}

function formatted(node, value) {
  const decimals = node.dataset.countDecimals === '2' ? 2 : 0;
  return `S$${formatters.get(decimals).format(value)}`;
}

function paint(node, value) {
  const visual = node.querySelector('[data-count-visual]');
  const label = formatted(node, value);
  if (visual && visual.textContent !== label) visual.textContent = label;
}

export function setPortalAmount(scene, selector, value) {
  if (!Number.isFinite(value) || value < 0 || value > 1000000) return;
  const node = scene.querySelector(`${selector} [data-count-target]`);
  if (!node) return;
  node.dataset.countTarget = String(value);
  node.querySelector('[data-count-label]').textContent = formatted(node, value);
  paint(node, value);
}

export function portalCounters(root) {
  const groups = [...root.querySelectorAll('[data-motion-graphic]')].map(graphic => ({
    graphic, nodes: [...graphic.querySelectorAll('[data-count-target]')], start: null,
  })).filter(group => group.nodes.length);
  let frame;

  const running = group => group.graphic.dataset.motion === 'running' && group.nodes.some(node => !node.closest('[hidden]'));
  function tick(now) {
    frame = undefined;
    for (const group of groups) {
      if (!running(group)) continue;
      group.start ??= now;
      const phase = ((now - group.start) % 7200) / 7200;
      const progress = 1 - Math.pow(1 - Math.min(1, phase / .28), 3);
      group.nodes.forEach(node => {
        if (!node.closest('[hidden]')) paint(node, Math.round(target(node) * progress * 100) / 100);
      });
    }
    if (groups.some(running)) frame = requestAnimationFrame(tick);
  }

  return {
    update() {
      if (frame !== undefined) cancelAnimationFrame(frame);
      frame = undefined;
      groups.forEach(group => {
        if (!running(group)) {
          group.start = null;
          group.nodes.forEach(node => paint(node, target(node)));
        }
      });
      if (groups.some(running)) frame = requestAnimationFrame(tick);
    },
  };
}
