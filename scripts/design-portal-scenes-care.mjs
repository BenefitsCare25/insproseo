import { icon } from './design-content.mjs';
import { choices } from './design-portal-scene-parts.mjs';

const routeA = 'M108 186V130Q108 112 126 112H128V72';
const routeB = 'M108 186V130Q108 112 126 112H328Q350 112 350 90V88';

function clinicMap() {
  return `<div class="pt-clinic-diagram" data-clinic="a" data-route-a="${routeA}" data-route-b="${routeB}" aria-hidden="true">
    <svg viewBox="0 0 480 230">
      <path class="pt-map-park" d="M16 146h58v66H16zM380 18h82v60h-82z"/>
      <g class="pt-map-buildings"><rect x="20" y="18" width="66" height="68" rx="8"/><rect x="153" y="18" width="61" height="60" rx="8"/><rect x="250" y="24" width="60" height="54" rx="8"/><rect x="397" y="148" width="65" height="64" rx="8"/><rect x="160" y="150" width="62" height="62" rx="8"/><rect x="257" y="155" width="88" height="57" rx="8"/></g>
      <path class="pt-map-street" d="M-10 112H480M108-10V230M232-10V230M350-10V230"/>
      <path class="pt-map-road" d="M-10 112H480M108-10V230M232-10V230M350-10V230"/>
      <path class="pt-map-route" d="${routeA}" pathLength="100"/>
      <g class="pt-map-you"><circle cx="108" cy="186" r="12"/><circle class="pt-map-origin" cx="108" cy="186" r="5"/></g>
      <g class="pt-map-pin pt-map-pin-a"><path class="pt-pin-shape" d="M128 40c-13 0-23 10-23 23 0 17 23 35 23 35s23-18 23-35c0-13-10-23-23-23Z"/><path class="pt-pin-cross" d="M121 63h14m-7-7v14"/></g>
      <g class="pt-map-pin pt-map-pin-b"><path class="pt-pin-shape" d="M350 56c-13 0-23 10-23 23 0 17 23 35 23 35s23-18 23-35c0-13-10-23-23-23Z"/><path class="pt-pin-cross" d="M343 79h14m-7-7v14"/></g>
      <circle class="pt-map-pulse" cx="128" cy="72" r="31"/>
      <circle class="pt-map-traveller" cx="0" cy="0" r="4"/>
    </svg>
    <div class="pt-map-key"><span>${icon('location')}Panel clinic</span><span><i></i>Your location</span></div>
  </div>`;
}

function digitalCard() {
  return `<section class="pt-ui-card pt-card-wallet"><div class="pt-card-top"><h4>Digital panel card</h4>${icon('shield')}</div>
    <div class="pt-wallet-stage"><div class="pt-card-back" aria-hidden="true"></div><div class="pt-digital-card">
      <div class="pt-card-brand"><strong>Inspro</strong><span>Employee benefits</span></div>
      <div class="pt-card-identity"><span class="pt-member-avatar">EA</span><div><strong>Employee A</strong><span>Sample programme</span></div></div>
      <div class="pt-card-credential"><span>${icon('medical')}Outpatient medical</span><svg class="pt-credential-seal" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" pathLength="100"/><path d="m12 20 5 5 11-11" pathLength="100"/></svg></div>
    </div></div>
    <dl class="pt-card-facts"><div><dt>Member ID</dt><dd>E-001</dd></div><div><dt>Access</dt><dd>Digital panel card</dd></div></dl>
    <div class="pt-access-steps"><span>${icon('location')}Find clinic</span>${icon('arrow')}<span>${icon('shield')}Present card</span></div>
  </section>`;
}

export function care() {
  return `<div class="pt-care-layout"><section class="pt-ui-card pt-clinic-card"><div class="pt-card-top"><h4>Panel clinics</h4>${icon('location')}</div>${choices('clinic', [['a', 'Area A'], ['b', 'Area B']])}${clinicMap()}<div class="pt-clinic-result">${icon('medical')}<div><strong data-clinic-name>Example clinic A</strong><span data-clinic-detail>Sample area A</span></div><span class="pt-status">Panel</span></div></section>${digitalCard()}</div>`;
}
