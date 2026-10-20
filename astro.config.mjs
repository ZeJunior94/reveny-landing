import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.reveny.com.br',
  trailingSlash: 'ignore',
  integrations: [sitemap({ customPages: ['https://www.reveny.com.br/'] })],
});
