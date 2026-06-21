// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // TODO: replace with the real production domain before deploying
    site: 'https://kevinfocke.com',
    integrations: [sitemap()],
    devToolbar: {
        enabled: false,
    },
});
