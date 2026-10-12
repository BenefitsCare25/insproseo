import { origin } from './page-map.mjs';

export function contentDirectory(pages) {
  const groups = [
    ['Employee benefits and Business Insurance', ['home', 'care', 'benefits', 'business']],
    ['Personal Insurance', ['personal', 'travel']],
    ['Insurance guides', ['guides', 'checklist', 'employerGuide']],
    ['Company and support', ['about', 'contact', 'claims', 'privacy']],
  ];
  const directory = groups.map(([label, keys]) => `## ${label}\n\n` + pages
    .filter(page => keys.includes(page.key))
    .map(page => `- [${page.title}](${origin}${page.route}): ${page.description}`).join('\n')).join('\n\n');
  return `# Inspro Insurance Brokers Pte Ltd

> Singapore insurance broker supporting SME employee benefits, Business Insurance and Personal Insurance.

Website: ${origin}/
Telephone: +65 6448 7707
Email: helpdesk@inspro.com.sg
Address: 38 Jalan Pemimpin, M38, #02-08, Singapore 577178

${directory}

## Scope

Website forms prepare email drafts and do not send or store enquiries. Policy terms and insurer acceptance determine cover. Verify current regulatory requirements with the cited official sources.

This file is an optional content directory. It does not confer search eligibility, endorsements or rankings.
`;
}
