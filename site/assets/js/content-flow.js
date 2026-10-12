import { animateScenes, finishPanel, prepareMotion, revealPanel } from './flow-motion.js?v=20261010-reviews-2';

import { topicIcons, selectedIcon } from './page-topic-icons.js?v=20261011-navigation-1';
import { topics } from './page-topics.js?v=20261011-navigation-1';

function create(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function sourcePanels(main, key) {
  if (key === 'checklist') return [...main.querySelectorAll('[data-reading-section]')];
  if (key === 'privacy') return [...main.querySelectorAll('.xp-policy > section')];
  const root = key === 'home' ? main.querySelector(':scope > .experience') : main;
  return [...root.children].filter(node => node.matches('section') && node.querySelector('h2')
    && !node.matches('.ds-hero,.xp-about-hero,.xp-portal-hero,.xp-closing,.ds-home-directory,.xp-review-section'));
}

function makeRail(panels, labels) {
  const rail = create('div', 'flow-rail');
  rail.setAttribute('role', 'tablist');
  rail.setAttribute('aria-label', 'Explore this page');
  rail.setAttribute('aria-orientation', 'vertical');
  panels.forEach((panel, index) => {
    const button = create('button', 'flow-chapter');
    button.type = 'button';
    button.id = `flow-tab-${index}`;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', panel.id);
    const copy = create('span', 'flow-chapter-copy');
    copy.append(create('span', 'flow-chapter-title', labels[index] || panel.querySelector('h2').innerText));
    const symbol = create('span', 'flow-chapter-icon');
    symbol.setAttribute('aria-hidden', 'true');
    symbol.innerHTML = topicIcons[labels[index]] || '';
    const state = create('span', 'flow-chapter-state');
    state.setAttribute('aria-hidden', 'true');
    state.innerHTML = selectedIcon;
    button.append(symbol, copy, state);
    rail.append(button);
  });
  return rail;
}

function makeWorkbench(main, panels, labels) {
  const workbench = create('section', 'flow-workbench xp-shell');
  const topicsOnly = main.dataset.designPage === 'home';
  workbench.classList.toggle('flow-topics-only', topicsOnly);
  workbench.id = 'content-explorer';
  const grid = create('div', 'flow-grid');
  panels.forEach((panel, index) => {
    panel.id ||= `flow-panel-${index}`;
    panel.classList.add('flow-panel');
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', `flow-tab-${index}`);
    panel.tabIndex = -1;
  });
  const rail = makeRail(panels, labels);
  const screen = create('div', 'flow-screen');
  panels[0].before(workbench);
  screen.append(...panels);
  grid.append(rail, screen);
  workbench.append(grid);
  workbench.setAttribute('aria-label', 'Insurance information');
  main.querySelector('.ds-section-nav')?.setAttribute('hidden', '');
  return { workbench, panels, rail };
}

function bindNavigation(view) {
  const { panels, rail, workbench } = view;
  const tabs = [...rail.children];
  let selected = 0;
  let expanded = false;
  const choose = (index, animate = true) => {
    const previous = selected;
    selected = Math.max(0, Math.min(panels.length - 1, index));
    if (previous !== selected) finishPanel(panels[previous]);
    panels.forEach((panel, i) => {
      const inactive = !expanded && i !== selected;
      panel.classList.toggle('flow-inactive', inactive);
      panel.inert = inactive;
      panel.setAttribute('aria-hidden', String(inactive));
    });
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === selected));
      tab.tabIndex = i === selected ? 0 : -1;
    });
    if (rail.scrollWidth > rail.clientWidth) {
      const chip = tabs[selected].getBoundingClientRect();
      const bounds = rail.getBoundingClientRect();
      if (chip.left < bounds.left || chip.right > bounds.right) {
        rail.scrollBy({ left: chip.left - bounds.left - (rail.clientWidth - chip.width) / 2, behavior: 'instant' });
      }
    }
    if (animate && !expanded && previous !== selected) {
      revealPanel(panels[selected], selected > previous ? 1 : -1);
      const top = workbench.getBoundingClientRect().top;
      if (top < 0) workbench.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  };
  const expand = value => {
    expanded = value;
    workbench.classList.toggle('flow-expanded', value);
    choose(selected, false);
  };
  tabs.forEach((tab, index) => tab.addEventListener('click', () => { expand(false); choose(index); }));
  rail.addEventListener('keydown', event => {
    if (!event.target.matches('.flow-chapter')) return;
    const columns = getComputedStyle(rail).gridTemplateColumns.split(' ').length;
    const offsets = { ArrowDown: columns, ArrowRight: 1, ArrowUp: -columns, ArrowLeft: -1 };
    if (!(event.key in offsets) && !['Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (selected + offsets[event.key] + tabs.length) % tabs.length;
    expand(false); choose(index); tabs[index].focus();
  });
  const openTarget = target => {
    const index = panels.findIndex(panel => panel === target || panel.contains(target));
    if (index < 0) return false;
    expand(false); choose(index); return true;
  };
  choose(0, false);
  return { choose, expand, openTarget, isExpanded: () => expanded };
}

function bindAnchors(main, view, controller) {
  const targetFor = hash => {
    try {
      const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      return target?.matches('.ds-section-nav') ? view.workbench : target;
    }
    catch { return null; }
  };
  const open = target => target === view.workbench || controller.openTarget(target);
  const showHash = () => {
    const target = targetFor(location.hash);
    if (target && open(target)) view.workbench.scrollIntoView({ block: 'start' });
  };
  main.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const target = targetFor(link.hash);
    if (!target || !open(target)) return;
    event.preventDefault();
    history.replaceState(null, '', link.hash);
    view.workbench.scrollIntoView({ block: 'start', behavior: 'auto' });
  });
  window.addEventListener('hashchange', showHash);
  if (location.hash) showHash();
  let readingBeforePrint = false;
  window.addEventListener('beforeprint', () => {
    readingBeforePrint = controller.isExpanded();
    view.panels.forEach(finishPanel);
    controller.expand(true);
  });
  window.addEventListener('afterprint', () => controller.expand(readingBeforePrint));
  const media = matchMedia('(max-width: 48rem)');
  const orientation = () => view.rail.setAttribute('aria-orientation', media.matches ? 'horizontal' : 'vertical');
  media.addEventListener('change', orientation);
  orientation();
}

function compactSupportingSections(main, key) {
  if (!['portal', 'checklist', 'guides'].includes(key)) return;
  const sections = [...main.querySelectorAll(':scope > .search-section')];
  if (key === 'portal') sections.push(...main.querySelectorAll(':scope > section:has(.xp-faq)'));
  sections.forEach(section => {
    const heading = section.querySelector('h2');
    if (!heading || section.querySelector('.flow-disclosure')) return;
    const details = create('details', 'flow-disclosure xp-shell');
    const summary = create('summary', '', heading.innerText);
    const body = create('div', 'flow-disclosure-body');
    while (section.firstChild) body.append(section.firstChild);
    details.append(summary, body);
    section.append(details);
    section.classList.add('flow-support-section');
  });
}

function prepareCatalogue(main, view, controller) {
  const finder = main.querySelector('.ds-finder');
  if (!finder) return;
  view.workbench.prepend(finder);
  document.addEventListener('inspro:catalogue-filter', event => {
    controller.expand(event.detail.active);
    view.workbench.classList.toggle('flow-searching', event.detail.active);
  });
  view.rail.addEventListener('click', () => {
    const input = finder.querySelector('input');
    if (!input.value) return;
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });
}

function init() {
  const main = document.querySelector('main.ds-page');
  if (!main) return;
  const key = main.dataset.designPage;
  const root = key === 'home' ? main.querySelector(':scope > .experience') : main;
  const panels = topics[key] ? sourcePanels(main, key) : [];
  prepareMotion(root);
  if (panels.length > 1) {
    const view = makeWorkbench(main, panels, topics[key]);
    const controller = bindNavigation(view);
    bindAnchors(main, view, controller);
    const print = main.querySelector('[data-print]');
    if (key === 'checklist' && print) {
      const tools = create('div', 'flow-tools');
      tools.append(print);
      view.workbench.prepend(tools);
    }
    if (key === 'catalogue') prepareCatalogue(main, view, controller);
  }
  compactSupportingSections(main, key);
  root.classList.add('flow-ready');
  animateScenes(root);
  window.ScrollTrigger?.refresh();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
else init();
