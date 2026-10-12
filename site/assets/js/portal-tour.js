import { bindPortalSamples } from './portal-tour-samples.js?v=20261011-portal-4';
import { portalMotion } from './portal-tour-motion.js?v=20261011-portal-4';

function markPanel(panel, active) {
  panel.dataset.active = String(active);
  panel.setAttribute('aria-hidden', String(!active));
  panel.inert = !active;
  if (panel.hasAttribute('data-feature')) panel.tabIndex = active ? 0 : -1;
}

function bindTabKeys(list, selector, select) {
  list.addEventListener('keydown', event => {
    const keys = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
    if (!keys.includes(event.key)) return;
    const buttons = [...list.querySelectorAll(selector)];
    const index = buttons.indexOf(event.target);
    if (index < 0) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1
      : (index + (['ArrowLeft', 'ArrowUp'].includes(event.key) ? -1 : 1) + buttons.length) % buttons.length;
    buttons[next].focus({ preventScroll: true });
    select(buttons[next]);
  });
}

function initPortal(root) {
  const roleList = root.querySelector('.pt-role-tabs');
  const roleButtons = [...roleList.querySelectorAll('[data-role-target]')];
  const views = new Map([...root.querySelectorAll('[data-portal-role]')].map(panel => {
    const navigation = root.querySelector(`[data-role-menu="${panel.dataset.portalRole}"]`);
    return [panel.dataset.portalRole, {
      panel, navigation, menu: navigation.querySelector('.pt-feature-menu'), buttons: [...navigation.querySelectorAll('[data-feature-target]')],
      features: [...panel.querySelectorAll('[data-feature]')], selected: panel.querySelector('[data-feature]').dataset.feature,
    }];
  }));
  const narrow = matchMedia('(max-width: 48rem)');
  let role = 'employees';
  let motion;

  function select(id, feature, updateUrl = true, animate = true) {
    if (!views.has(id)) return;
    role = id;
    const view = views.get(id);
    if (view.features.some(panel => panel.dataset.feature === feature)) view.selected = feature;
    roleButtons.forEach(button => {
      const active = button.dataset.roleTarget === role;
      button.setAttribute('aria-selected', String(active)); button.tabIndex = active ? 0 : -1;
    });
    views.forEach((item, key) => {
      markPanel(item.panel, key === role);
      markPanel(item.navigation, key === role);
      item.buttons.forEach(button => {
        const active = button.dataset.featureTarget === item.selected;
        button.setAttribute('aria-selected', String(active)); button.tabIndex = active ? 0 : -1;
      });
      item.features.forEach(panel => markPanel(panel, key === role && panel.dataset.feature === item.selected));
    });
    root.querySelector('[data-portal-heading]').textContent = view.buttons.find(button => button.dataset.featureTarget === view.selected).querySelector('span').textContent;
    if (updateUrl) {
      const url = new URL(location.href);
      url.searchParams.set('role', role); url.searchParams.set('feature', view.selected);
      if (url.hash.startsWith('#feature-')) url.hash = `feature-${view.selected}`;
      history.replaceState(history.state, '', url);
    }
    if (animate) motion?.reveal(view.features.find(panel => panel.dataset.feature === view.selected));
    else motion?.update();
  }

  function readLocation() {
    const params = new URLSearchParams(location.search);
    const feature = location.hash.startsWith('#feature-') ? location.hash.slice(9) : params.get('feature');
    const owner = [...views].find(([, view]) => view.features.some(panel => panel.dataset.feature === feature))?.[0];
    const requested = params.get('role');
    select(views.has(requested) ? requested : owner || 'employees', feature, false, false);
  }

  roleList.setAttribute('role', 'tablist');
  roleButtons.forEach(button => {
    button.setAttribute('role', 'tab'); button.setAttribute('aria-controls', `role-${button.dataset.roleTarget}`);
    button.addEventListener('click', () => select(button.dataset.roleTarget));
  });
  views.forEach((view, key) => {
    view.panel.setAttribute('role', 'tabpanel'); view.panel.setAttribute('aria-labelledby', `role-tab-${key}`);
    view.menu.setAttribute('role', 'tablist');
    view.buttons.forEach(button => {
      button.setAttribute('role', 'tab'); button.setAttribute('aria-controls', `feature-${button.dataset.featureTarget}`);
      button.addEventListener('click', event => { event.preventDefault(); select(key, button.dataset.featureTarget); });
    });
    view.features.forEach(panel => { panel.setAttribute('role', 'tabpanel'); panel.setAttribute('aria-labelledby', `feature-tab-${panel.dataset.feature}`); });
    bindTabKeys(view.menu, '[data-feature-target]', button => select(key, button.dataset.featureTarget));
  });
  const orientation = () => views.forEach(view => view.menu.setAttribute('aria-orientation', narrow.matches ? 'horizontal' : 'vertical'));
  narrow.addEventListener('change', orientation); orientation();
  bindTabKeys(roleList, '[data-role-target]', button => select(button.dataset.roleTarget));
  readLocation(); root.classList.add('pt-ready');
  bindPortalSamples(root); motion = portalMotion(root); motion.update();
  window.addEventListener('popstate', readLocation); window.addEventListener('hashchange', readLocation);
  bindPrint(root, views, () => select(role, views.get(role).selected, false, false));
}

function bindPrint(root, views, restore) {
  let opened = null;
  window.addEventListener('beforeprint', () => {
    if (opened) return;
    views.forEach(view => [view.panel, ...view.features].forEach(panel => { panel.inert = false; panel.removeAttribute('aria-hidden'); }));
    opened = [...root.querySelectorAll('.pt-sample-message')].map(details => [details, details.open]);
    opened.forEach(([details]) => { details.open = true; });
  });
  window.addEventListener('afterprint', () => {
    if (!opened) return;
    opened.forEach(([details, open]) => { details.open = open; }); restore();
    opened = null;
  });
}

const root = document.querySelector('.pt-page');
if (root) initPortal(root);
