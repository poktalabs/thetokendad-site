// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Required by @astrojs/sitemap and by the RSS endpoint (context.site).
  site: 'https://thetoken.dad',
  output: 'static',
  // Astro's default ('ignore') lets each host invent its own canonical URL shape:
  // Cloudflare 307s /blog -> /blog/ while Vercel serves /blog directly, so the same
  // build produces two different URL sets and two sets of indexable pages.
  // Pinning it makes the canonical shape a property of the build, not of the host.
  trailingSlash: 'always',
  // the about page folded into the Writing hero (2026-09-27); old links land there
  redirects: { '/about/': '/blog/' },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
