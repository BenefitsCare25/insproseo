# Azure hosting

The website is hosted at https://inspro-website-sg.azurewebsites.net.

- Resource group: `rg-inspro-website-prod`
- App Service plan: `plan-inspro-website-sg`, Linux Basic B1, one instance
- Region: `southeastasia` (Singapore)
- Runtime: Node.js 24 LTS
- Startup: `node scripts/server.mjs`
- Health check: `/healthz`
- HTTPS only; Always On enabled; FTP disabled

The website has a separate plan from the existing Inspro portal. The estimated
base compute price is US$13.14 per 730-hour month, before tax and additional
usage charges. The custom business domain and its DNS records have not been changed.

## Automatic deployment

Pushes to `main` in https://github.com/BenefitsCare25/insproseo run
`.github/workflows/azure-deploy.yml`. The workflow validates the committed static
site, deploys it and checks the live homepage against the committed source.
It can also be run manually from GitHub Actions on `main`.

GitHub authenticates through OpenID Connect using the managed identity
`id-inspro-website-github-sg`. Its federated credential trusts only this repository's
`main` branch. Its Website Contributor role is scoped to this web app.
The repository holds the identity, tenant and subscription IDs as Actions secrets;
there is no Azure password, client secret or publish profile.

Only `site/`, `scripts/server.mjs`, `scripts/http-files.mjs` and a minimal runtime
`package.json` are deployed. Working material, credentials, development dependencies
and verification artifacts are excluded. The existing server preserves directory
indexes, redirects, security headers, video ranges and real 404 responses.

## Editing and rollback

The committed `site/` files are the deployment source. Ordinary HTML/CSS/JS edits
require `npm run build` before pushing. For React island changes, run
`npm run build:ui` followed by `npm run refresh:presentation`, then validate and
commit the generated public files as well as their sources. Full page regeneration
still follows the existing README instructions.

To roll back, revert the relevant commit on `main` and push. The same workflow
deploys the reverted site. Do not change the Singapore resource location.
