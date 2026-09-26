# allanj.github.io

Personal site of **Zhanming (Allan) Jie** — <https://allanj.github.io>.

Built with [Astro](https://astro.build) as a fully static site; no client framework.
Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to the `gh-pages` branch (the branch GitHub Pages serves).

## Editing content

| What | Where |
| --- | --- |
| Name, role, links, news, experience, highlights, service, repos | `src/data/site.ts` |
| Publications (drives `/publications/`, the home page and ⌘K search) | `src/data/publications.ts` |
| Blog posts | `src/content/blog/<slug>/index.md` (images live next to the post) |
| Static files (PDFs, the JSON viewer at `/jsonv/`) | `public/` |

Posts are served at `/blog/<year>/<slug>/`, matching the old Jekyll URLs. Math uses `$…$` / `$$…$$` and is rendered with KaTeX at build time.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

Requires Node 22+.

## Notes

- Dark is the default theme; the header toggle switches to light and remembers the choice.
- `public/og.png` is the social preview card; `public/fonts/sym-mono-*.woff2` is a small subset of DejaVu Sans Mono that supplies math glyphs (⊢ ∧ ∃ ⟨⟩ …) missing from JetBrains Mono's web subsets.
- The previous al-folio/Jekyll site is preserved at the `legacy-jekyll-source` (source) and `legacy-site-2025` (built output) tags.
