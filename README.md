# Sarayut — Software Developer portfolio

A Thai-first personal portfolio built with React, Vite and React Router. Warm paper, sage green, self-hosted fonts and real personal context replace the previous glass theme. Includes light/dark themes, selected-work filters, case studies, career and education, searchable journal and contact links.

## Develop

```sh
npm ci
npm run dev
npm run build
npm run preview
```

The checked-in `.npmrc` enables legacy peer dependency resolution for the existing React/Helmet combination. Cloudflare Pages is connected to this repository; pushes to `main` trigger the build for `sarayuts.com`. Build command: `npm run build`; output directory: `dist/`. The host must serve `index.html` for client routes such as `/about` and `/project/ill`.

Before pushing, run the build and inspect the staged diff. After pushing, verify the Cloudflare Pages commit check and smoke-test the public homepage and deep links. To roll back, revert the release commit and push the revert through the same pipeline; do not force-push shared history.

## Content

- `PORTFOLIO_CONTEXT.md`: local-only interview context, evidence and open questions. It and `บทสนทนา.md` are intentionally ignored by Git and must not be published.
- `src/data/profileData.js`: profile, employment and education.
- `src/data/caseStudies.js`: delivery-location feature, ill. and Notchy.
- `src/data/blogPosts.js`: existing journal articles, preserved during the redesign.
- `PRODUCT.md` and `DESIGN.md`: product constraints and visual system.
- `src/index.css`: design tokens, responsive styles and reduced-motion support.

Use verified facts, not invented metrics or seniority claims. The delivery and Notchy visuals are labelled schematics, not production screenshots. The ill. image is a capture of the public app; the portrait comes from the existing portfolio. Never include employer source code, customer data or private screenshots in public assets.

## Validation

`npm run build` creates the production bundle. `npm run lint` checks the entire repository, including legacy components retained outside the new route tree. There is no automated test suite configured. Browser checks should cover mobile navigation, both themes, project filters and details, education anchors, journal search/empty state, contact actions, keyboard focus and unknown routes.
