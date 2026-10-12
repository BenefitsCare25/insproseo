import { origin, reviewed, sources, parentRoute, pageByRoute, breadcrumbLabels } from './page-map.mjs';
import { escapeHtml } from './content.mjs';

export const organization = {
  '@type': 'InsuranceAgency', '@id': `${origin}/#organization`,
  name: 'Inspro Insurance Brokers Pte Ltd', alternateName: 'Inspro Insurance Brokers',
  url: `${origin}/`, logo: `${origin}/assets/images/inspro-logo.webp`,
  image: `${origin}/assets/images/inspro-logo.webp`, telephone: '+65 6448 7707',
  email: 'helpdesk@inspro.com.sg', foundingDate: '2000-06',
  address: {'@type':'PostalAddress', streetAddress:'38 Jalan Pemimpin, M38, #02-08', addressLocality:'Singapore', postalCode:'577178', addressCountry:'SG'},
  areaServed: {'@type':'Country',name:'Singapore'}, sameAs: [sources.mas],
  contactPoint: {'@type':'ContactPoint',telephone:'+65 6448 7707',email:'helpdesk@inspro.com.sg',contactType:'Insurance enquiries',areaServed:'SG'},
};

export function crumbs(page) {
  const chain = [{label:'Home',route:'/'}];
  const parents = [];
  let route = parentRoute(page);
  while (route !== '/') {
    const parent = pageByRoute.get(route);
    if (!parent || parents.some(item=>item.route===route)) throw new Error(`Invalid breadcrumb parent for ${page.route}`);
    parents.unshift({label:breadcrumbLabels[parent.key]||parent.h1.replace(/\.$/,''),route});
    route = parentRoute(parent);
  }
  return [...chain,...parents,{label:breadcrumbLabels[page.key]||page.h1.replace(/\.$/,''),route:page.route}];
}

export function breadcrumbHtml(page) {
  return `<nav class="xp-breadcrumb" aria-label="Breadcrumb">${crumbs(page).map((item,i,items)=>`${i?'<span aria-hidden="true">/</span>':''}${i===items.length-1?`<span aria-current="page">${escapeHtml(item.label)}</span>`:`<a href="${item.route}">${escapeHtml(item.label)}</a>`}`).join('')}</nav>`;
}

function personalCatalogue(route) {
  const base = '/service-details/personal/';
  const items = [
    ['Travel insurance', base + 'travel-insurance/'],
    ['Motor insurance', route + '#motor'],
    ['Home insurance', route + '#home'],
    ['Personal accident insurance', route + '#accident'],
    ['Domestic helper insurance', route + '#helper'],
    ['Golfer’s insurance', route + '#golf'],
    ['Fine art insurance', route + '#art'],
    ['Pleasure craft insurance', route + '#craft'],
  ];
  return items.map(([name, destination], index) => ({ '@type': 'ListItem', position: index + 1, name, url: origin + destination }));
}

export function structuredData(page, links = []) {
  const url = origin + page.route;
  const site = {'@type':'WebSite','@id':`${origin}/#website`,url:`${origin}/`,name:'Inspro Insurance Brokers',publisher:{'@id':organization['@id']},inLanguage:'en-SG'};
  const type = ['Service','Article'].includes(page.type) ? 'WebPage' : page.type;
  const webpage = {'@type':type,'@id':`${url}#page`,url,name:page.title,description:page.description,inLanguage:'en-SG',isPartOf:{'@id':site['@id']},about:{'@id':organization['@id']},primaryImageOfPage:{'@type':'ImageObject',url:origin+page.image}};
  const graph = [organization,site,webpage];
  if (page.key !== 'home') {
    webpage.breadcrumb={'@id':`${url}#breadcrumb`};
    graph.push({'@type':'BreadcrumbList','@id':webpage.breadcrumb['@id'],itemListElement:crumbs(page).map((item,i)=>({'@type':'ListItem',position:i+1,name:item.label,item:origin+item.route}))});
  }
  if (page.type === 'Service') {
    const id = `${url}#service`;
    webpage.mainEntity = {'@id':id};
    graph.push({'@type':'Service','@id':id,name:page.h1.replace(/\.$/,''),description:page.intro||page.description,serviceType:page.keyword,provider:{'@id':organization['@id']},areaServed:{'@type':'Country',name:'Singapore'},url});
  }
  if (page.type === 'Article') {
    webpage.mainEntity = {'@id':`${url}#article`};
    graph.push({'@type':'Article','@id':`${url}#article`,headline:page.h1.replace(/\.$/,''),description:page.description,author:{'@id':organization['@id']},publisher:{'@id':organization['@id']},mainEntityOfPage:{'@id':webpage['@id']},dateModified:reviewed,inLanguage:'en-SG',image:origin+page.image});
  }
  if (page.type === 'CollectionPage') {
    webpage.mainEntity = {'@type':'ItemList',itemListElement:page.key === 'personal' ? personalCatalogue(page.route) : [...new Set(links)].filter(route=>pageByRoute.has(route)&&route!==page.route&&route!=='/').map((route,i)=>({'@type':'ListItem',position:i+1,name:pageByRoute.get(route).h1.replace(/\.$/,''),url:origin+route}))};
  }
  return JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c');
}
