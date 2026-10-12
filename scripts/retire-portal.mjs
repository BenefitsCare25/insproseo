import { homeBenefitsSupport } from './benefits-support.mjs';
import { topicLabels } from './insurance-catalogue.mjs';

export function retirePortalMarkup(html) {
  html = html.replace(/<section\b[^>]*id="how-we-help"[^>]*>[\s\S]*?<\/section>/, homeBenefitsSupport());
  html = html.replace(/<a\b[^>]*href=["']\/employee-benefits\/portal\/[^"']*["'][^>]*>[\s\S]*?<\/a>/g, anchor => {
    if (/Portal Preview|Benefits portal|Portal preview/i.test(anchor.replace(/<[^>]*>/g, ''))) return '';
    const claims = /claims/i.test(anchor);
    return `<a class="xp-link" href="/contact-us/?intent=${claims ? 'claims' : 'benefits'}">${claims ? 'Get programme claims support' : 'Discuss benefits administration'}</a>`;
  });
  return html.replace(/<link rel="icon"[^>]*>/g, '<link rel="icon" href="/assets/images/inspro-site-icon.svg?v=20261012-symbol-4" type="image/svg+xml" sizes="any">')
    .replace(/<link[^>]+href="\/assets\/css\/portal-[^>]*>\s*/g, '')
    .replace(/<option value="portal">[\s\S]*?<\/option>/g, '')
    .replace(/A benefits portal walkthrough/g, 'Employee benefits administration')
    .replace(/(<script[^>]*id="insurance-topics"[^>]*>)[\s\S]*?(<\/script>)/, (_, start, end) => start + JSON.stringify(topicLabels).replaceAll('<', '\\u003c') + end)
    .replace(/Benefits, claims and panel care\. One portal\./g, 'Benefits, claims and panel care. Clearer support.');
}
