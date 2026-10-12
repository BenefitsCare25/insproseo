const steps = ['Gather your policies', 'Record what changed', 'Compare the details', 'Confirm next steps'];

export function renewalGraphic() {
  return `<svg class="gd-diagram" viewBox="0 0 560 370" role="img" aria-labelledby="renewal-art-title renewal-art-desc">
    <title id="renewal-art-title">Four steps before your insurance renewal</title>
    <desc id="renewal-art-desc">Policy documents connect to a renewal brief: gather policies, record changes, compare details and confirm the next steps.</desc>
    <g class="gd-art-wide">
    <g class="gd-source-paper" data-motion-paper>
      <rect class="gd-paper-back" x="40" y="106" width="150" height="213" rx="8" transform="rotate(-9 115 212)"/>
      <rect class="gd-paper" x="48" y="94" width="150" height="213" rx="8"/>
      <path class="gd-paper-rule" d="M70 122h56M70 186h91M70 199h68M70 226h91M70 239h78M70 266h91M70 279h53"/>
    </g>
    <text class="gd-svg-title" x="70" y="160">Policies</text>
    <g class="gd-routes" aria-hidden="true">
      ${[116,174,232,290].map(y => `<path data-motion-route pathLength="1" d="M198 202H216Q232 202 232 ${y < 202 ? 186 : 218}V${y < 202 ? y + 16 : y - 16}Q232 ${y} 248 ${y}H274"/>`).join('')}
    </g>
    <rect class="gd-brief-shadow" x="263" y="45" width="268" height="294" rx="10"/>
    <rect class="gd-paper" x="253" y="35" width="268" height="294" rx="10"/>
    <text class="gd-svg-title" x="274" y="74">Your renewal brief</text>
    ${steps.map((label,index) => {
      const y = 116 + index * 58;
      return `<g class="gd-renewal-step">
        <circle class="gd-check-disc" cx="283" cy="${y}" r="12" data-motion-marker/>
        <path class="gd-check" data-motion-check pathLength="1" d="M277 ${y}l4 4 8-9"/>
        <text class="gd-svg-label" x="306" y="${y+6}">${label}</text>
        <path class="gd-paper-rule" d="M306 ${y+19}h${[136,112,148,122][index]}"/>
      </g>`;
    }).join('')}
    </g>
    <g class="gd-art-compact">
      <g data-motion-paper><rect class="gd-paper-back" x="42" y="36" width="455" height="320" rx="10" transform="rotate(-3 270 195)"/></g>
      <rect class="gd-paper" x="64" y="17" width="455" height="320" rx="10"/>
      <text class="gd-svg-title" x="95" y="60">Before renewal</text>
      ${steps.map((label,index) => {
        const y = 106 + index * 64;
        return `<g class="gd-renewal-step"><circle class="gd-check-disc" cx="111" cy="${y}" r="15" data-motion-marker/>
          <path class="gd-check" data-motion-check pathLength="1" d="M103 ${y}l5 5 11-12"/>
          <text class="gd-svg-label" x="147" y="${y+8}">${label}</text>
          <path class="gd-paper-rule" d="M147 ${y+25}h${[228,188,245,202][index]}"/>
        </g>`;
      }).join('')}
    </g>
  </svg>`;
}

const covers = [
  ['Group medical', 'Healthcare benefits', '<path d="M77 72v27m-13-14h27"/>'],
  ['Work injury', 'Workplace injury risks', '<path d="M64 164h30m-27-3a12 12 0 0 1 24 0M74 149v10m10-10v10"/>'],
  ['Work-pass medical', 'Work-pass requirements', '<rect x="64" y="217" width="29" height="28" rx="3"/><circle cx="73" cy="227" r="3"/><path d="M68 238q5-8 10 0m5-13h6m-6 6h6m-6 6h6"/>'],
  ['Security bond', 'Employer guarantees', '<path d="M67 289h20v25H67zM72 295h10m-10 5h10"/><circle cx="84" cy="312" r="6"/><path d="m82 312 2 2 3-4"/>'],
];

export function employeeGraphic() {
  return `<svg class="gd-diagram" viewBox="0 0 560 370" role="img" aria-labelledby="employee-art-title employee-art-desc">
    <title id="employee-art-title">Four employee insurance categories</title>
    <desc id="employee-art-desc">Group medical, work injury, work-pass medical and security bonds serve different purposes. The SME guide explains how to distinguish them.</desc>
    <path class="gd-cover-thread" d="M33 38v295" aria-hidden="true"/>
    ${covers.map(([title,detail,symbol],index) => {
      const y = 52 + index * 73;
      return `<g class="gd-cover-document"><g data-motion-cover>
        <rect class="gd-cover-shadow" x="56" y="${y+6}" width="461" height="62" rx="6"/>
        <rect class="gd-cover-paper" x="49" y="${y}" width="461" height="62" rx="6"/>
        <g class="gd-cover-symbol" aria-hidden="true">${symbol}</g>
        <path class="gd-cover-corner" d="M478 ${y+12}h19v18" aria-hidden="true"/>
        <circle class="gd-cover-node" cx="33" cy="${y+31}" r="4" aria-hidden="true"/>
        </g>
        <text class="gd-cover-title" x="118" y="${y+25}">${title}</text>
        <text class="gd-cover-detail" x="118" y="${y+48}">${detail}</text>
      </g>`;
    }).join('')}
  </svg>`;
}
