# Portable project instructions

Read README.md and docs/VERIFICATION.md before work. This is a static multi-page website. The full public source is in site/. Do not scaffold a replacement framework or assume a backend exists.

## Local startup

- Use Node.js 24 LTS or 22; no npm dependencies are required.
- Run `npm run check`, then `npm run dev`, and open http://127.0.0.1:3000.
- On PowerShell, `npm.cmd` avoids execution-policy issues. Direct alternative: `node scripts/server.mjs --local`.
- Keep the server process running while the user previews. A new Codex session may need to restart it. Do not assume an old local URL has a live server.
- Never use file:// or serve the project root. Only site/ is public.
- On Windows shell calls use headless `tty: true`, `login: false`; never launch a visible background terminal. If Start-Process is needed, use -WindowStyle Hidden.

## Changes and deployment

- Edit the existing HTML/CSS/JS. Keep code modular, under 2,500 lines per file and 100 lines per function.
- Colors belong in site/assets/css/tokens.css; use semantic CSS variables. No decorative directional accent borders.
- Preserve mobile and reduced-motion behavior. Preserve third-party license headers.
- Do not create test files unless asked. Run the supplied syntax/reference validator after edits and check affected interactions in a browser.
- Contact forms only prepare email drafts. Do not claim an enquiry was sent or saved. Adding delivery requires an explicitly scoped backend/service integration.
- Production: `npm run build` then `npm start`; the host supplies PORT. Static deployments publish site/ and need the routing/header rules. No database or credentials are needed.
- Never package local .env files, credentials, browser profiles, node_modules or unrelated generated artifacts.
- See docs/VERIFICATION.md for checked behavior and remaining host-specific verification. Do not claim an unperformed deployment passed.
