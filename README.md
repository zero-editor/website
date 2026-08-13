# zero — website

The one-page site for [zero](https://github.com/zero-editor/zero), a 14 MB
macOS code editor built around running coding agents.

Built with [Astro](https://astro.build), statically generated, no client
framework. The only JavaScript on the page asks GitHub for the latest release
(version, date, dmg size), so the site never goes stale between deploys — the
download link points at `/releases/latest/` and keeps working regardless.

The design is the app's: tokens from its `App.css` (`#1f1f1f`, `#181818`,
text `#cccccc`, and an accent that isn't a hue — things stand out here by
being brighter), SF Mono for anything that states a fact, and the icon's
ellipse as the mark. The copy leans on the README's benchmarks; the receipts
are real and reproducible from [`bench/`](https://github.com/zero-editor/zero/tree/main/bench).

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static site into dist/
```

Everything is in `src/pages/index.astro` — copy, styles, and the release
fetch. One page, one file.

## Deploy (Railway)

The repo carries a `Dockerfile` (Astro build → Caddy serving `dist/`, ~40 MB
image) and a `railway.json` that points at it, so:

1. [railway.com/new](https://railway.com/new) → deploy from this GitHub repo.
2. There is no step 2. `PORT` is injected by Railway; the Caddyfile reads it.

Or from the CLI: `railway init && railway up`.

When there's a real domain: add it under the service's **Settings →
Networking**, then set `site` in `astro.config.mjs` and swap the `og:image`
URL in `index.astro` from the GitHub raw link to the domain's `/icon.png`.
