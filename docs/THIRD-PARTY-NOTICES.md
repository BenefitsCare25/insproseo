# Third-party and asset notices

The supplied site includes GSAP 3.15.0 and ScrollTrigger 3.15.0 in site/assets/vendor. Their copyright and license notices remain in the original files. The vendor identifies its license at https://gsap.com/standard-license. The package does not relicense these libraries.

Inspro branding, copy, images and generated video are retained from the supplied project. The supplied pages disclose use of generative AI for visual storytelling. This handover does not grant additional rights or independently establish ownership of these assets.

The server and verification commands use only built-in Node.js modules. There are no npm runtime packages to install. Keep the chosen Node.js release patched on a cloud host. Rebuild container deployments to receive base-image security updates.
## Current component stack

The owner-requested redesign adds React 19.3.0, React DOM 19.3.0, Motion 14.0.0, Lucide React 1.50.0, Radix Tabs 1.1.21, Radix Slot 1.3.3, class-variance-authority 0.7.1 and clsx 2.1.1. Exact build versions are pinned in package-lock.json. esbuild 0.28.2 is a development tool. These dependencies are bundled locally; serving the built site needs no package installation or CDN.

Tabs and Button in src/components/ui are adapted from the MIT-licensed shadcn/ui New York registry. Their component structure and Radix behavior are retained; Tailwind utilities are replaced by this site's semantic CSS classes. Registry sources: https://ui.shadcn.com/r/styles/new-york/tabs.json and https://ui.shadcn.com/r/styles/new-york/button.json. These are local adaptations, not an unmodified shadcn template. Aceternity UI and Magic UI are not installed.

Library license texts are preserved under site/assets/licenses/ and license comments are retained in the generated JavaScript. Lucide uses ISC; class-variance-authority uses Apache-2.0; React, Motion, Radix and shadcn use MIT. Original GSAP assets and license headers are unchanged.

## Manrope font

Current pages self-host Manrope Variable at site/assets/fonts/manrope.ttf. Source: https://github.com/google/fonts/tree/main/ofl/manrope. The SIL Open Font License is retained at site/assets/fonts/OFL-Manrope.txt.

## Retained Newsreader font

Newsreader Regular remains as an unused legacy asset at `site/assets/fonts/newsreader-regular.ttf`; it is no longer loaded by the redesigned pages. Source: [Google Fonts Newsreader](https://github.com/google/fonts/tree/main/ofl/newsreader). Licensed under the SIL Open Font License 1.1; the full copyright and license notice is preserved at `site/assets/fonts/OFL-Newsreader.txt`.
