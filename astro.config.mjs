// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Sitio 100% estático: no hay rutas server-side que requieran un adaptador.
// Se publica en un subdirectorio del cPanel del cliente: `base` hace que Astro
// genere los assets y rutas con ese prefijo. Las rutas escritas a mano en los
// componentes pasan por ruta() (src/i18n/index.ts) para respetarlo.
// i18n: español en la raíz (sin prefijo) e inglés bajo /en/.
// https://astro.build/config
export default defineConfig({
  site: 'https://tle.com.mx',
  base: '/transporte-carga-nacional',
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