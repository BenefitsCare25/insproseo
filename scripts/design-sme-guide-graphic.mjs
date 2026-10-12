const branches = [
  { x: 100, y: 116, label: 'Group medical', route: 'M214 208C187 168 149 165 100 146', symbol: '<path d="M-17-21h34v42h-34zM-9-9h18M0-15v12M-9 5h18M-9 13h12"/>' },
  { x: 400, y: 116, label: 'Work injury', route: 'M286 208C313 168 351 165 400 146', symbol: '<path d="M0-23l19 8v17c0 12-10 20-19 24-9-4-19-12-19-24v-17zM-8 0h16M0-8v16"/>' },
  { x: 100, y: 350, label: 'Work-pass', second: 'medical', route: 'M214 272C187 312 149 301 100 320', symbol: '<path d="M-23-17h46v34h-46zM-13-7h11M-13 1h11M-13 9h8M8-5v12M2 1h12"/>' },
  { x: 400, y: 350, label: 'Security bond', route: 'M286 272C313 312 351 301 400 320', symbol: '<path d="M-2-14l-6-6a12 12 0 0 0-17 17l9 9a12 12 0 0 0 17 0M2 14l6 6a12 12 0 0 0 17-17l-9-9a12 12 0 0 0-17 0M-8-8l16 16"/>' },
];

export function employeeWorkforceGraphic() {
  return `<svg class="sg-diagram" viewBox="0 0 500 460" role="img" aria-labelledby="workforce-diagram-title workforce-diagram-desc">
    <title id="workforce-diagram-title">Four different cover purposes around your workforce</title>
    <desc id="workforce-diagram-desc">Group medical benefits, work injury compensation, work-pass medical insurance and a security bond address different needs. Their relevance depends on your employees and employment arrangements.</desc>
    ${branches.map((branch, i) => `<g style="--ga-order:${i}">
      <path class="ga-route-base" d="${branch.route}"/>
      <path class="ga-route-line" data-motion-stroke pathLength="1" d="${branch.route}"/>
      <circle class="sg-symbol-disc" cx="${branch.x}" cy="${branch.y}" r="33"/>
      <g class="sg-symbol" data-motion-symbol transform="translate(${branch.x} ${branch.y})">${branch.symbol}</g>
      <text class="sg-cover-label" text-anchor="middle" x="${branch.x}" y="${i < 2 ? 55 : 410}">${branch.label}${branch.second ? `<tspan x="${branch.x}" dy="32">${branch.second}</tspan>` : ''}</text>
    </g>`).join('')}
    <circle class="sg-workforce" cx="250" cy="240" r="80"/>
    <path class="sg-workforce-symbol" d="M237 182h26v30h-26zM243 190h14M243 197h14M243 204h9"/>
    <text class="sg-workforce-label" text-anchor="middle" x="250" y="244">Your<tspan x="250" dy="27">workforce</tspan></text>
  </svg>`;
}
