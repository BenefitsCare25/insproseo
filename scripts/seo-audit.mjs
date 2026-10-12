import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { origin, pages } from './seo/page-map.mjs';

const project=fileURLToPath(new URL('../',import.meta.url));
const root=path.join(project,'site');
const failures=[];
const warnings=[];
const report=[];
const decode=value=>value?.replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
const text=html=>decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim());
const meta=(html,key)=>decode(html.match(new RegExp(`<meta (?:name|property)="${key}" content="([^"]*)"`))?.[1]);
const unique=new Map();

function check(value,message) { if(!value) failures.push(message); }
function checkDistinct(type,value,route) {
  const key=`${type}:${value}`;
  if(unique.has(key)) failures.push(`${route}: duplicate ${type} with ${unique.get(key)}`);
  unique.set(key,route);
}

async function auditPage(page) {
  const html=await fs.readFile(path.join(root,page.route,'index.html'),'utf8');
  const title=decode(html.match(/<title>(.*?)<\/title>/)?.[1]);
  const description=meta(html,'description');
  const canonical=html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const h1=[...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map(m=>text(m[1]));
  const main=html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]||'';
  const links=[...html.matchAll(/<a\b[^>]*\bhref="([^"?#]+)[^\"]*"/g)].map(m=>m[1]).filter(url=>url.startsWith('/'));
  const schemaTags=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  check(h1.length===1,`${page.route}: expected one H1, found ${h1.length}`);
  check(title&&description,`${page.route}: missing title/description`);
  check(canonical===origin+page.route,`${page.route}: incorrect canonical`);
  check(meta(html,'og:title')===title&&meta(html,'og:description')===description,`${page.route}: social metadata differs`);
  check(!/noindex/i.test(meta(html,'robots')||''),`${page.route}: noindex on public content`);
  check(meta(html,'robots')?.includes('max-image-preview:large'),`${page.route}: missing image preview directive`);
  checkDistinct('title',title,page.route); checkDistinct('description',description,page.route);
  if(page.intro) check(text(main).includes(page.intro),`${page.route}: mapped introduction is not present in the visible HTML`);
  const headings=[...main.matchAll(/<h([1-6])\b[^>]*>/g)].map(m=>Number(m[1]));
  check(headings.every((level,i)=>!i||level<=headings[i-1]+1),`${page.route}: heading level skips a structural level`);
  check(schemaTags.length===1,`${page.route}: expected one structured-data graph`);
  const graph=JSON.parse(schemaTags[0]?.[1]||'{}')['@graph']||[];
  const agency=graph.find(n=>n['@type']==='InsuranceAgency');
  check(agency?.telephone==='+65 6448 7707'&&agency?.address?.postalCode==='577178',`${page.route}: incomplete business entity`);
  const pageEntity=graph.find(n=>n['@id']===canonical+'#page');
  check(pageEntity?.name===title&&pageEntity?.description===description,`${page.route}: page entity does not match metadata`);
  if(page.key!=='home') check(graph.some(n=>n['@type']==='BreadcrumbList')&&html.includes('aria-label="Breadcrumb"'),`${page.route}: missing visible/structured breadcrumb`);
  if(page.key!=='home') check(pageEntity?.breadcrumb?.['@id']===canonical+'#breadcrumb',`${page.route}: page entity does not reference its breadcrumb`);
  if(page.type==='Service') check(graph.some(n=>n['@type']==='Service'&&n.provider?.['@id']===origin+'/#organization'),`${page.route}: missing linked service`);
  if(page.type==='Article') check(graph.some(n=>n['@type']==='Article'&&n.author?.['@id']===origin+'/#organization'),`${page.route}: missing article publisher`);
  const images=[...html.matchAll(/<img\b[^>]*>/g)].map(m=>m[0]);
  check(images.every(img=>/\balt="/.test(img)),`${page.route}: missing image alt attribute`);
  check(images.every(img=>/\bwidth="/.test(img)&&/\bheight="/.test(img)),`${page.route}: image lacks dimensions`);
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  check(new Set(ids).size===ids.length,`${page.route}: duplicate HTML ids`);
  if(title?.length>68||description?.length>165) warnings.push(`${page.route}: review snippet length (${title?.length}/${description?.length}); search engines choose the displayed snippet`);
  report.push({route:page.route,keyword:page.keyword,title,description,h1:h1[0],canonical,type:page.type,words:text(main).split(' ').length,links:[...new Set(links)],newPage:page.isNew});
}

for(const page of pages) await auditPage(page);
async function htmlRoutes(directory = root) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const routes = [];
  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) routes.push(...await htmlRoutes(file));
    else if (entry.name.endsWith('.html')) {
      const relative = path.relative(root, file).replaceAll('\\', '/');
      routes.push(relative === 'index.html' ? '/' : '/' + relative.replace(/index\.html$/, ''));
    }
  }
  return routes;
}
for (const route of await htmlRoutes()) {
  check(route === '/404.html' || pages.some(page => page.route === route), `${route}: unused public HTML page is absent from the active page map`);
}
const sitemap=await fs.readFile(path.join(root,'sitemap.xml'),'utf8');
const urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
check(urls.length===pages.length&&new Set(urls).size===pages.length,'Sitemap count/uniqueness mismatch');
for(const page of pages) check(urls.includes(origin+page.route),`${page.route}: absent from sitemap`);
const robots=await fs.readFile(path.join(root,'robots.txt'),'utf8');
check(!/^Disallow:\s*\/\s*$/m.test(robots),'robots.txt blocks the site');
check(robots.includes(`Sitemap: ${origin}/sitemap.xml`),'robots.txt sitemap incorrect');
const missing=await fs.readFile(path.join(root,'404.html'),'utf8');
check(/<meta name="robots" content="noindex,follow">/.test(missing),'404 needs noindex');
check(!urls.some(url=>url.endsWith('404.html')),'404 included in sitemap');
const depth=new Map([['/',0]]);
const byRoute=new Map(report.map(page=>[page.route,page]));
const queue=['/'];
for(let index=0;index<queue.length;index++) {
  const route=queue[index];
  for(const target of byRoute.get(route).links) {
    if(!byRoute.has(target)||depth.has(target)) continue;
    depth.set(target,depth.get(route)+1);
    queue.push(target);
  }
}
for(const row of report) {
  row.clickDepth=depth.get(row.route)??null;
  check(row.clickDepth!==null,`${row.route}: unreachable from homepage content`);
  if(row.clickDepth>3) warnings.push(`${row.route}: ${row.clickDepth} internal-link clicks from homepage`);
}
const output={checkedAt:new Date().toISOString(),scope:'Local source, internal content and navigation links; not indexation, rankings, live hosting or field Core Web Vitals',pages:report,failures,warnings};
await fs.mkdir(path.join(project,'docs'),{recursive:true});
await fs.writeFile(path.join(project,'docs/seo-audit.json'),JSON.stringify(output,null,2)+'\n');
process.stdout.write(`${failures.length?'FAIL':'PASS'}: ${pages.length} content pages, canonical URLs, metadata, entities, breadcrumbs, service/article markup, image attributes, sitemap and internal-link reachability.\n`);
if(warnings.length) process.stdout.write(warnings.join('\n')+'\n');
if(failures.length) { process.stderr.write(failures.join('\n')+'\n'); process.exitCode=1; }
