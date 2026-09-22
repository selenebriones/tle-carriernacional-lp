// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Sitio 100% estático: no hay rutas server-side que requieran un adaptador.
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});