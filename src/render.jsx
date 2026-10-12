import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Island, Icon } from './experience.jsx';
export const renderIsland = (type, id) => renderToString(<Island type={type} />, { identifierPrefix: id });
export const renderIcon = (name) => renderToStaticMarkup(<Icon name={name} />);
