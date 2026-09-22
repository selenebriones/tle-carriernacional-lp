// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Sitio 100% estático: no hay rutas server-side que requieran un adaptador.
// i18n: español en la raíz (sin prefijo) e inglés bajo /en/.
// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});