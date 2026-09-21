// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// El sitio es estático por defecto; el adaptador solo habilita la ruta
// /api/cotizacion (marcada `prerender = false`) como función serverless.
// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
});