import { escape, icon } from './design-content.mjs';
import { serviceConnections } from './design-benefitscare-content.mjs';
import { flowPath, schemeScene } from './design-benefitscare-scenes.mjs';

export const careArrow = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

export function serviceNetwork() {
  const routes = serviceConnections.map((_, index) => {
    const y = 44 + index * 83;
    return flowPath(`M302 ${y}H322C368 ${y} 359 210 404 210`, index);
  }).join('');
  return `<figure class="bc-network" data-bc-motion data-bc-scene="network" aria-label="Five BenefitsCare service areas connected through mobile access">
    <svg class="bc-network-lines" viewBox="0 0 600 460" preserveAspectRatio="none" aria-hidden="true" focusable="false">${routes}</svg>
    ${serviceConnections.map(([id, name, title, detail], index) => `<div class="bc-network-node bc-network-node--${id}" style="--bc-node-index:${index}"><span class="bc-network-symbol">${icon(name)}</span><strong>${escape(title)}</strong><span>${escape(detail)}</span></div>`).join('')}
    <div class="bc-network-centre"><span class="bc-network-speaker" aria-hidden="true"></span>${icon('mobile')}<strong>BenefitsCare</strong><span>Mobile access</span><div class="bc-network-services" aria-hidden="true">${icon('health')}${icon('money')}${icon('document')}</div><span class="bc-network-home" aria-hidden="true"></span></div>
  </figure>`;
}

export const schemeConnection = schemeScene;

export function employeeMobileView() {
  return `<figure class="bc-mobile-demo" data-bc-motion data-bc-scene="tools">
    <div class="bc-device"><div class="bc-device-top" aria-hidden="true"></div><div class="bc-device-heading">${icon('shield')}<strong>Your benefits</strong></div>
      <div class="bc-device-services">${[['health', 'Benefit information'], ['document', 'Claims & documents'], ['location', 'Clinics & e-card']].map(([name, label], index) => `<div><span>${icon(name)}</span><strong>${label}</strong>${careArrow}<svg class="bc-device-flow" viewBox="0 0 220 2" preserveAspectRatio="none" aria-hidden="true">${flowPath('M0 1H220', index)}</svg></div>`).join('')}</div>
      <div class="bc-device-support">${icon('support')}<span>Scheme helpdesk</span></div>
    </div><figcaption>Illustrative employee view.</figcaption>
  </figure>`;
}
