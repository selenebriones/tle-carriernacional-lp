import es from './es';
import en from './en';

export const dictionaries = { es, en } as const;

export type Locale = keyof typeof dictionaries;

// Prefijo del subdirectorio de publicación (config `base`), sin la diagonal final.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Antepone el `base` a una ruta absoluta del sitio: ruta('/images/x.webp'). */
export function ruta(path: string) {
  return BASE + path;
}

export function getDict(locale: string | undefined) {
  return locale === 'en' ? en : es;
}
