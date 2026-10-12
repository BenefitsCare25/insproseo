import { build } from 'esbuild';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { isBuiltin } from 'node:module';
await mkdir('.impeccable', { recursive: true });
// Resolve through Node so builds also work under Windows restricted-directory permissions.
const localFiles = { name: 'node-files', setup(builder) {
  builder.onResolve({ filter: /.*/ }, args => {
    if (isBuiltin(args.path)) return { path: args.path, external: true };
    let resolved;
    if (path.isAbsolute(args.path)) resolved = args.path;
    else if (args.path.startsWith('.')) {
      const base = path.resolve(path.dirname(args.importer), args.path);
      resolved = [base, base+'.js', base+'.jsx', base+'.mjs', path.join(base,'index.js')].find(existsSync);
    } else if (args.path === 'lucide-react') resolved = path.resolve('node_modules/lucide-react/dist/esm/lucide-react.mjs');
    else resolved = fileURLToPath(import.meta.resolve(args.path));
    if (!resolved) throw new Error(`Cannot resolve ${args.path} from ${args.importer}`);
    return { path: resolved, namespace: 'node-files', ...(resolved.includes('lucide-react') ? { sideEffects: false } : {}) };
  });
  builder.onLoad({ filter: /.*/, namespace: 'node-files' }, async args => ({ contents: await readFile(args.path, 'utf8'), loader: args.path.endsWith('.json') ? 'json' : 'jsx' }));
} };
const common = { absWorkingDir: process.cwd(), tsconfigRaw: {}, bundle: true, jsx: 'automatic', plugins:[localFiles], write:false, define: { 'process.env.NODE_ENV': '"production"' }, logLevel: 'info' };
const client = await build({ ...common, entryPoints: [path.resolve('src/client.jsx')], platform: 'browser', format: 'iife', minify: true, legalComments: 'eof', target: ['es2022'] });
await writeFile('site/assets/js/experience-ui.js', client.outputFiles[0].contents);
const server = await build({ ...common, entryPoints: [path.resolve('src/render.jsx')], platform: 'node', format: 'cjs' });
await writeFile('.impeccable/ui-render.cjs', server.outputFiles[0].contents);
console.log(`UI bundle: ${Math.round(client.outputFiles[0].contents.length / 1024)} KB, with static HTML rendering.`);
