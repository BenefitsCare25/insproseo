function sectionWith(main, expression) {
  return [...main.querySelectorAll(':scope > section')]
    .find(section => expression.test(section.querySelector('h2')?.textContent || ''));
}

export function removeRedundantActions(html) {
  return html.replace(/<(a|button)\b[^>]*>[\s\S]*?<\/\1>/g, action => {
    const label = action.replace(/<svg\b[\s\S]*?<\/svg>/g, '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    return /^(?:Talk to Inspro|Explore this page)$/i.test(label) ? '' : action;
  }).replace(/<div\b[^>]*class="[^"]*\bxp-actions\b[^"]*"[^>]*>\s*<\/div>/g, '');
}

function appendHtml(document, target, html) {
  if (!target) return;
  const template = document.createElement('template');
  template.innerHTML = html;
  target.append(template.content);
}

function compactLinks(document, section, target) {
  if (!section || !target) return;
  const reading = document.createElement('div');
  reading.className = 'ds-related-reading';
  const key = section.querySelector('h2')?.textContent || 'Related cover';
  reading.dataset.relatedSource = key;
  target.querySelectorAll('[data-related-source]').forEach(existing => {
    if (existing.dataset.relatedSource === key) existing.remove();
  });
  if (section.id) reading.id = section.id;
  const heading = document.createElement('h3');
  heading.textContent = 'Related reading';
  const links = document.createElement('div');
  links.className = 'ds-related-links';
  const seen = new Set();
  for (const source of section.querySelectorAll('a[href]')) {
    const href = source.getAttribute('href');
    if (seen.has(href)) continue;
    seen.add(href);
    const link = document.createElement('a');
    link.className = 'xp-link';
    link.href = href;
    link.textContent = source.querySelector('h3,strong')?.textContent || source.textContent;
    links.append(link);
  }
  if (links.children.length) {
    reading.append(heading, links);
    target.append(reading);
  }
  section.remove();
}

function consolidateCare(document, main) {
  const quotation = main.querySelector('#quotation');
  const questions = sectionWith(main, /^Choose a starting plan/);
  if (quotation && questions) {
    quotation.querySelectorAll('[data-care-question], [data-care-guide]').forEach(item => item.remove());
    const cost = [...quotation.querySelectorAll('details')][0]?.querySelector('p');
    if (cost) cost.textContent = 'The listed monthly prices are S$2 for Starter, S$4 for Flex and S$6 for Premier per employee. Ask for a quotation confirming the total premium, taxes, separate fees, benefit limits, eligibility and employee co-payments.';
    const faq = quotation.querySelector('.xp-faq');
    for (const detail of questions.querySelectorAll('details')) {
      if (!detail.querySelector('summary').textContent.startsWith('How do I compare the total cost')) {
        detail.dataset.careQuestion = '';
        faq?.append(detail);
      }
    }
    const copy = questions.querySelector('.search-copy > p:last-child');
    if (copy) {
      copy.dataset.careGuide = '';
      quotation.querySelector('.xp-shell')?.append(copy);
    }
    questions.remove();
  }
  const portal = sectionWith(main, /^Put your benefits to work/);
  if (portal && quotation) {
    appendHtml(document, quotation.querySelector('.xp-shell'), '<p class="ds-related-reading"><a class="xp-link" href="/employee-benefits/portal/?role=employees#explore">Preview the employee benefits portal</a>. Features depend on your agreed programme.</p>');
    portal.remove();
  }
}

function consolidatePreparation(document, main, key) {
  if (key === 'business') {
    const renewal = sectionWith(main, /^When to review your cover/);
    const questions = main.querySelector('#questions .xp-split');
    if (renewal && questions) {
      const paragraph = renewal.querySelector('p');
      if (paragraph) questions.append(paragraph);
      const checklist = renewal.querySelector('a[href*="insurance-review-checklist"]');
      if (checklist) questions.append(checklist);
      renewal.remove();
    }
  }
  if (key === 'claims') {
    const preparation = sectionWith(main, /^Keep the initial enquiry focused/);
    const steps = main.querySelectorAll('.xp-claim-steps article p');
    if (steps.length === 3 && preparation) {
      steps[1].textContent = 'Keep your policy type, insurer, policy number, incident date, receipts, reports and correspondence together.';
      steps[2].textContent = 'Share your claim reference and the help you need, such as documents, claim status or a settlement query. Ask for a suitable channel before sharing sensitive records.';
      if (!main.querySelector('[data-claims-note]')) appendHtml(document, main.querySelector('.xp-claim-steps').parentElement, '<p class="xp-fine" data-claims-note>An enquiry does not lodge a claim. Follow your insurer’s reporting channel and time limits.</p>');
      preparation.remove();
    }
  }
  if (key === 'checklist') {
    const comparison = sectionWith(main, /^Compare quotations on the same basis/);
    if (comparison) {
      if (!main.querySelector('[data-comparison-note]')) appendHtml(document, main.querySelector('#compare'), '<p data-comparison-note>Use the same workforce, activities, dates and benefit limits for each quotation. Compare the total premium, taxes and fees, and how excesses, co-payments and waiting periods affect a claim.</p>');
      compactLinks(document, comparison, main.querySelector('#decide'));
    }
  }
}

export function cleanContent(document, main, key) {
  main.querySelectorAll('.lf-next-section, .xp-closing').forEach(section => section.remove());
  for (const section of main.querySelectorAll(':scope > section')) {
    const heading = section.querySelector('h2')?.textContent || '';
    if (/^Start with (?:the essentials|your priorities)/.test(heading)) {
      const preparation = section.querySelector('.lf-support-row p');
      const intro = main.querySelector('.ic-product-intro > div');
      if (preparation && intro && !intro.querySelector('.ic-preparation')) {
        preparation.className = 'ic-preparation';
        intro.append(preparation);
      }
      const caution = section.querySelector('.search-source');
      const content = main.querySelector('.search-section .search-copy');
      if (caution && content && !content.querySelector('.search-source')) content.append(caution);
      section.remove();
    }
    if (['personal', 'services'].includes(key) && /^Already (?:have a policy|insured with us)/.test(heading)) section.remove();
    if (key === 'portal' && /^Confirm what your programme includes/.test(heading)) section.remove();
    if (key === 'benefits' && /^Help employees understand/.test(heading)) section.remove();
    if (key === 'catalogue' && !section.querySelector('h1,h2') && section.querySelector('a[href*="commercialoffice-package"]')) section.remove();
  }
  if (key === 'care') consolidateCare(document, main);
  consolidatePreparation(document, main, key);
  const related = [...main.querySelectorAll(':scope > section:has(.ic-related), :scope > section:has(.search-links), :scope > #next-reading')];
  for (const section of related) {
    if (['services', 'guides'].includes(key)) continue;
    const previous = section.previousElementSibling;
    const target = key === 'checklist' ? main.querySelector('#decide')
      : main.querySelector('.ic-product-intro')?.parentElement || previous?.querySelector('.search-copy, .xp-shell');
    compactLinks(document, section, target);
  }
  if (key === 'travel') {
    main.querySelector('.ds-hero .ds-visual')?.remove();
    main.querySelector('.ds-hero')?.classList.add('tr-hero');
    main.querySelector('.ds-hero .xp-actions a[href^="#"]')?.remove();
  }
}
