import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bodybyolga.app',
  integrations: [mdx(), sitemap()],
  output: 'static',
  server: {
    port: parseInt(process.env.PORT || '20728'),
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
