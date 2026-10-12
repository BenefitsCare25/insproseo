const version = '20261012-mobile-1';
const stylesheet = `<link rel="stylesheet" href="/assets/css/site-presentation.css?v=${version}">`;

export function applyPresentation(html) {
  html = html.replace(/(<meta\s+name="viewport"\s+content=")[^"]*("\s*\/?>)/,
    '$1width=device-width, initial-scale=1, viewport-fit=cover$2');
  html = html.replace(/<link[^>]+href="\/assets\/css\/site-presentation\.css[^>]*>\s*/g, '');
  html = html.replace(/(href="\/assets\/css\/(?:tokens|navigator-cards)\.css)(?:\?[^" ]*)?"/g,
    `$1?v=${version}"`);
  html = html.replace(/(src="\/assets\/js\/(?:site|content-flow)\.js)(?:\?[^" ]*)?"/g,
    `$1?v=${version}"`);
  return html.replace('</head>', `${stylesheet}\n</head>`);
}
