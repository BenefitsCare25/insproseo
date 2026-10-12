const labels = ['Gather documents', 'Record changes', 'Compare terms', 'Confirm next steps'];
const symbols = [
  '<path d="M20 10h20l8 8v36H20zM40 10v10h8M27 30h14M27 38h14M27 46h9"/>',
  '<path d="M22 19a18 18 0 0 1 28 2m0-9v10H40M46 45a18 18 0 0 1-28-2m0 9V42h10"/>',
  '<path d="M17 22h34M17 42h34M25 15v14M43 35v14"/><circle cx="25" cy="22" r="5"/><circle cx="43" cy="42" r="5"/>',
  '<path d="M24 12h20l6 6v38H18V18h6zM26 12v8h16v-8M27 36l6 6 11-13"/>',
];

export function renewalRouteGraphic() {
  return `<svg class="rc-diagram" viewBox="0 0 500 400" role="img" aria-labelledby="renewal-route-title renewal-route-desc">
    <title id="renewal-route-title">Four steps before insurance renewal</title>
    <desc id="renewal-route-desc">Gather documents, record changes, compare policy terms and confirm the next steps.</desc>
    <path class="ga-route-base" d="M65 62v264"/>
    <path class="ga-route-line" data-motion-stroke pathLength="1" d="M65 62v264"/>
    ${labels.map((label, i) => {
      const y = 34 + i * 88;
      return `<g style="--ga-order:${i}">
        <circle class="rc-node" cx="65" cy="${y + 30}" r="22"/>
        <path class="ga-mark" data-motion-mark pathLength="1" d="M56 ${y + 30}l6 6 12-13"/>
        <g class="rc-symbol" data-motion-symbol transform="translate(110 ${y})">${symbols[i]}</g>
        <text class="rc-stage" x="196" y="${y + 37}">${label}</text>
      </g>`;
    }).join('')}
  </svg>`;
}
