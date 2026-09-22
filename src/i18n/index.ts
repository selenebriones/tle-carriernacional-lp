import es from './es';
import en from './en';

export const dictionaries = { es, en } as const;

export type Locale = keyof typeof dictionaries;

export function getDict(locale: string | undefined) {
  return locale === 'en' ? en : es;
}
