import { icon } from './design-content.mjs';

const stages = [
  { id: 'review', label: 'Review', title: 'Build the right programme.', text: 'Start with your workforce, priorities and current cover.', items: ['Benefit benchmarking', 'Claims experience review', 'Insurer comparison and negotiation'], icon: 'list' },
  { id: 'implement', label: 'Implement', title: 'Get your team set up.', text: 'Coordinate the practical details before the programme begins.', items: ['Enrolment and underwriting follow-up', 'Portal setup', 'Welcome emails and employee communications'], icon: 'people' },
  { id: 'support', label: 'Support', title: 'Keep the everyday moving.', text: 'Have a team to turn to for benefits and claims administration.', items: ['Benefits and claims enquiries', 'Document checks and insurer follow-up', 'Settlement and letter-of-guarantee queries'], icon: 'support' },
  { id: 'renew', label: 'Renew', title: 'Review before you renew.', text: 'Look at how the programme is working and what needs to change.', items: ['Utilisation and cost review', 'Service feedback', 'Benefit changes and remarketing'], icon: 'renew' },
];

export function policyYearGraphic() {
  const buttons = stages.map((stage, index) => [
    "<button type='button' class='eb-year-step' role='tab'",
    " id='benefits-year-tab-" + stage.id + "' data-year-stage='" + stage.id + "'",
    " aria-controls='benefits-year-" + stage.id + "' aria-selected='" + (index === 0) + "'>",
    "<span class='eb-year-marker'>" + icon(stage.icon) + "</span><span>" + stage.label + "</span></button>",
  ].join('')).join('');
  const views = stages.map(stage => [
    "<article class='eb-year-view' id='benefits-year-" + stage.id + "' role='tabpanel'",
    " data-year-panel='" + stage.id + "' aria-labelledby='benefits-year-tab-" + stage.id + "' tabindex='-1'>",
    "<p class='eb-year-label'>" + stage.label + "</p><h3>" + stage.title + "</h3><p>" + stage.text + "</p><ul>",
    stage.items.map(item => "<li>" + icon('check') + "<span>" + item + "</span></li>").join(''),
    "</ul></article>",
  ].join('')).join('');
  return "<div class='eb-year-display' data-year-index='0'><div class='eb-year-nav' role='tablist' aria-label='Policy year stages'><div class='eb-year-track' aria-hidden='true'><span class='eb-year-progress'></span></div>" + buttons + "</div><div class='eb-year-stories'>" + views + "</div></div>";
}
