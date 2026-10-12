(() => {
  'use strict';

  function initialiseFinder() {
    const input = document.querySelector('#cover-search');
    if (!input) return;
    const groups = [...document.querySelectorAll('[data-filter-group]')];
    const rows = groups.flatMap(group => [...group.querySelectorAll('.ic-row')]);
    const status = document.querySelector('#cover-search-status');
    const clear = document.querySelector('[data-search-clear]');
    if (!status || !clear) return;
    const searchText = new Map(rows.map(row => [row, row.textContent.toLocaleLowerCase('en-SG')]));
    const filter = () => {
      const words = input.value.trim().toLocaleLowerCase('en-SG').split(/\s+/).filter(Boolean);
      let matches = 0;
      for (const row of rows) {
        row.hidden = !words.every(word => searchText.get(row).includes(word));
        if (!row.hidden) matches++;
      }
      for (const group of groups) group.hidden = ![...group.querySelectorAll('.ic-row')].some(row => !row.hidden);
      clear.hidden = words.length === 0;
      status.textContent = words.length === 0 ? `${rows.length} insurance products. Browse by category or search above.` : matches ? `${matches} matching ${matches === 1 ? 'product' : 'products'}.` : 'No matching products. Try a broader term, clear your search, or contact Inspro for help.';
      document.dispatchEvent(new CustomEvent('inspro:catalogue-filter', { detail: { active: words.length > 0 } }));
    };
    input.addEventListener('input', filter);
    clear.addEventListener('click', () => { input.value = ''; filter(); input.focus(); });
    document.querySelector('.ds-section-nav')?.addEventListener('click', event => {
      if (!event.target.closest('a')) return;
      input.value = '';
      filter();
    });
    filter();
  }

  function initialiseSectionNavigation() {
    const links = [...document.querySelectorAll('.ds-section-links a')];
    const sections = links.map(link => document.getElementById(link.hash.slice(1)));
    if (!links.length || sections.some(section => !section)) return;
    let scheduled = false;
    const update = () => {
      scheduled = false;
      const navBottom = document.querySelector('.ds-section-nav').getBoundingClientRect().bottom;
      let active = -1;
      sections.forEach((section, index) => {
        if (!section.hidden && section.getBoundingClientRect().top <= navBottom + 40) active = index;
      });
      links.forEach((link, index) => {
        if (index === active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };
    window.addEventListener('scroll', () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(update);
    }, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  function initialiseEnquiryChoices() {
    const select = document.querySelector('#contact-intent');
    const buttons = [...document.querySelectorAll('[data-enquiry-choice]')];
    if (!select || !buttons.length) return;
    const sync = () => buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.enquiryChoice === select.value)));
    buttons.forEach(button => button.addEventListener('click', () => {
      select.value = button.dataset.enquiryChoice;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      sync();
    }));
    select.addEventListener('change', sync);
    sync();
  }

  initialiseFinder();
  initialiseSectionNavigation();
  initialiseEnquiryChoices();
})();
