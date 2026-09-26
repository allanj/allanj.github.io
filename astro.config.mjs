// @ts-check
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { katexPlugin } from './src/lib/katex-plugin.mjs';

export default defineConfig({
  site: 'https://allanj.github.io',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  // Astro 7 defaults to JSX whitespace rules; keep normal HTML whitespace semantics for prose.
  compressHTML: true,
  integrations: [sitemap()],
  markdown: {
    processor: satteri({
      features: { math: true },
      hastPlugins: [katexPlugin],
    }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      defaultColor: false,
    },
  },
  // Keep URLs from the old Jekyll (al-folio) site alive.
  redirects: {
    '/activities': '/about/#service',
    '/software': '/about/#open-source',
    '/projects': '/about/',
    '/news': '/#news',
    '/blog/2022': '/blog/',
    '/blog/2024': '/blog/',
    '/blog/category/nlp': '/blog/',
    '/blog/page/2': '/blog/',
  },
});
