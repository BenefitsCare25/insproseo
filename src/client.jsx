import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Island } from './experience.jsx';

document.querySelectorAll('[data-ui-island]').forEach(element => {
  hydrateRoot(element, <Island type={element.dataset.uiIsland} />, { identifierPrefix: element.id });
});
