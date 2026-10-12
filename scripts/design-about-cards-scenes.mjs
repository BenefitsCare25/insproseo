const lines = (x, y, widths) => widths.map((width, index) => `<rect class="ab-art-line" x="${x}" y="${y + index * 14}" width="${width}" height="3" rx="1.5"/>`).join('');
const part = (name, body) => `<g data-ab-part="${name}">${body}</g>`;
const trace = (name, d) => `<path class="ab-art-rule" d="${d}"/><path class="ab-art-trace" data-ab-part="${name}" d="${d}" pathLength="100"/>`;
const scene = (name, body) => `<figure class="ab-scene ab-scene--${name}" data-ab-scene="${name}" aria-hidden="true"><svg viewBox="0 0 360 280" width="360" height="280" focusable="false">${body}</svg></figure>`;

export function aboutVisionScene() {
  return scene('vision', `
    <circle class="ab-art-ring" cx="180" cy="140" r="108"/>
    ${trace('direction', 'M83 187a108 108 0 0 1 166-131')}
    <circle class="ab-art-paper" cx="180" cy="140" r="81"/>
    <circle class="ab-art-ring" cx="180" cy="140" r="60"/>
    <path class="ab-art-rule" d="M180 69v13m0 116v13M109 140h13m116 0h13M131 91l8 8m82 82 8 8m-98 0 8-8m82-82 8-8"/>
    <g transform="translate(180 140)">${part('needle', '<path class="ab-art-accent" d="m0-52 17 52-17 52-17-52Z"/><path class="ab-art-paper" d="M0 0v52l-17-52Z"/>')}</g>
    <circle class="ab-art-paper" cx="180" cy="140" r="8"/>
    <circle class="ab-art-accent" cx="180" cy="140" r="3"/>
    ${part('destination', '<circle class="ab-art-soft" cx="256" cy="64" r="17"/><path class="ab-art-strong" d="M250 70l12-12m-12 0h12v12"/>')}
    <path class="ab-art-rule" d="M44 140h13m-6-6v12M297 140h13m-6-6v12"/>`);
}

export function aboutMissionScene() {
  return scene('mission', `
    ${trace('connection', 'M63 192C63 226 145 242 183 208M306 101C340 101 335 214 268 217')}
    <g transform="translate(49 67)">${part('alternative', `<rect class="ab-art-paper" width="128" height="165" rx="12"/><rect class="ab-art-soft" x="15" y="17" width="98" height="35" rx="6"/>${lines(15, 72, [97, 80, 89, 68])}<path class="ab-art-rule" d="M15 138h27m-13-13v26"/>`)}</g>
    <g transform="translate(153 41)">${part('services', `<rect class="ab-art-paper" width="151" height="190" rx="12"/><rect class="ab-art-accent" x="13" y="13" width="125" height="46" rx="7"/><path class="ab-art-inverse" d="M28 29h24m-24 10h16M85 29h35m-35 10h25"/>${lines(21, 83, [109, 86])}${lines(21, 132, [96, 110])}<path class="ab-art-rule" d="M21 115h109"/>`)}</g>
    ${part('focus', '<rect class="ab-art-focus" x="174" y="121" width="109" height="45" rx="6"/>')}
    <path class="ab-art-rule" d="M29 51h13m-6-6v12M313 241h13m-6-6v12"/>`);
}

export function aboutValueIcon(index) {
  const icons = [
    `<circle class="ab-art-strong" cx="32" cy="23" r="5"/>
     <path class="ab-art-strong" d="M23 46v-5a9 9 0 0 1 18 0v5"/>
     ${part('team-left', '<circle class="ab-art-strong" cx="17" cy="26" r="4"/><path class="ab-art-strong" d="M10 46v-5a7 7 0 0 1 8-7"/>')}
     ${part('team-right', '<circle class="ab-art-strong" cx="47" cy="26" r="4"/><path class="ab-art-strong" d="M54 46v-5a7 7 0 0 0-8-7"/>')}`,
    `<rect class="ab-art-strong" x="20" y="18" width="25" height="32" rx="4"/>
     <rect class="ab-art-paper" x="27" y="14" width="11" height="8" rx="3"/>
     <path class="ab-art-rule" d="M26 41h13"/>
     <path class="ab-art-rule" d="m27 31 4 4 8-9"/>
     <path class="ab-art-trace" data-ab-part="responsibility" d="m27 31 4 4 8-9" pathLength="100"/>`,
    `<circle class="ab-art-strong" cx="32" cy="26" r="5"/>
     <path class="ab-art-strong" d="M24 43v-3a8 8 0 0 1 16 0v3"/>
     ${part('focus-left', '<path class="ab-art-strong" d="M22 16h-7v9m0 14v9h7"/>')}
     ${part('focus-right', '<path class="ab-art-strong" d="M42 16h7v9m0 14v9h-7"/>')}`,
    `<path class="ab-art-rule" d="m32 14 15 6v12c0 10-9 17-15 21-6-4-15-11-15-21V20Z"/>
     <path class="ab-art-strong" d="m25 32 5 5 10-11"/>
     <path class="ab-art-trace" data-ab-part="trust-mark" d="m32 14 15 6v12c0 10-9 17-15 21-6-4-15-11-15-21V20Z" pathLength="100"/>`,
  ];
  const names = ['teamwork', 'accountability', 'customer', 'trust'];
  return `<svg class="ab-value-icon" viewBox="0 0 64 64" width="64" height="64" aria-hidden="true" focusable="false"><circle class="ab-art-soft" cx="32" cy="32" r="31"/><circle class="ab-art-value-emphasis" data-ab-part="${names[index]}-emphasis" cx="32" cy="32" r="31"/>${icons[index] || ''}</svg>`;
}

export function aboutHelpScene() {
  return scene('help', `
    <rect class="ab-art-paper" x="62" y="35" width="168" height="204" rx="12"/>
    <path class="ab-art-rule" d="M83 61h57m-57 17h91"/>
    <rect class="ab-art-soft" x="82" y="99" width="128" height="45" rx="6"/>
    ${lines(94, 113, [89, 69])}${lines(83, 167, [107, 120, 86])}
    <g transform="translate(218 153)">${part('lens', `
      <path class="ab-art-strong" d="m40 40 45 45"/>
      <circle class="ab-art-paper" r="61"/>
      <circle class="ab-art-soft" r="49"/>
      <path class="ab-art-rule" d="M-27-18h52m-52 14h41m-41 14h55m-55 14h32"/>
      <path class="ab-art-strong" d="M-30-30h18m-18 0v18M30 30H12m18 0V12"/>`)}</g>
    ${trace('scope', 'M88 217h57')}
    <path class="ab-art-rule" d="M266 48h13m-6-6v12"/>`);
}

export function aboutVerificationScene() {
  return scene('verification', `
    <rect class="ab-art-soft" x="75" y="30" width="194" height="215" rx="12"/>
    <rect class="ab-art-paper" x="58" y="42" width="194" height="215" rx="12"/>
    <rect class="ab-art-accent" x="71" y="55" width="168" height="53" rx="7"/>
    <path class="ab-art-inverse" d="M88 72h25m-25 13h17m32-13h81m-81 13h58"/>
    ${lines(79, 129, [152, 125, 142])}
    ${part('entry', `<rect class="ab-art-soft" x="79" y="184" width="152" height="50" rx="6"/>${lines(92, 199, [94, 121])}`)}
    <g transform="translate(237 137)">${part('contact', '<rect class="ab-art-paper" width="65" height="75" rx="10"/><path class="ab-art-strong" d="M18 24h29v22H18Zm0 1 14 10 15-10M22 59h21"/>')}</g>
    ${trace('channel', 'M274 212v18c0 8-6 14-14 14h-7')}
    <path class="ab-art-rule" d="M33 94h13m-6-6v12M293 50h13m-6-6v12"/>`);
}
