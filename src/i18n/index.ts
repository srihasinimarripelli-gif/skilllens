import { useApp } from '../context/AppContext';
import { translations } from './translations';
import type { Language, InterpolationParams, TranslateFunction } from './types';

export * from './types';
export * from './translations';

/**
 * Resolves a dot-notation key (e.g. 'home.greetingMorning') from a dictionary.
 */
function resolveKey(dict: any, key: string): any {
  if (!dict || !key) return undefined;
  const parts = key.split('.');
  let current = dict;
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      return undefined;
    }
  }
  return current;
}

/**
 * Interpolates variables in a string (e.g. "Step {{current}} of {{total}}").
 */
function interpolate(template: string, params?: InterpolationParams): string {
  if (!params || !template || typeof template !== 'string') {
    return template;
  }
  return template.replace(/\{\{\s*([a-zA-Z0-9_-]+)\s*\}\}/g, (_, varName) => {
    return varName in params ? String(params[varName]) : `{{${varName}}}`;
  });
}

/**
 * Central translate function with language fallback and interpolation.
 */
export function translate(
  lang: Language,
  key: string,
  params?: InterpolationParams
): string {
  if (!key || typeof key !== 'string') return '';

  // 1. Try selected language
  const targetDict = translations[lang] || translations.en;
  let val = resolveKey(targetDict, key);

  // 2. Fall back to English if missing or non-string
  if (val === undefined && lang !== 'en') {
    val = resolveKey(translations.en, key);
  }

  // 3. Fallback check
  if (val === undefined || typeof val === 'object') {
    if (import.meta.env?.DEV) {
      console.warn(`[i18n] Missing translation key: "${key}" for language "${lang}"`);
    }
    // Return friendly readable fallback instead of raw key if possible
    const lastPart = key.split('.').pop() || key;
    return lastPart;
  }

  return interpolate(String(val), params);
}

/**
 * Creates a callable t() function that also exposes dictionary properties
 * for seamless backward compatibility.
 */
export function createTranslator(lang: Language): TranslateFunction & Record<string, any> {
  const currentDict = translations[lang] || translations.en;

  const tFunc: any = (key: string, params?: InterpolationParams) => {
    return translate(lang, key, params);
  };

  // Attach dictionary properties for backward compatibility (e.g., t.nav.home)
  Object.assign(tFunc, currentDict);

  return tFunc;
}

/**
 * Primary useTranslation hook as required by specs.
 */
export function useTranslation() {
  const { language, setLanguage, t } = useApp();
  return {
    t,
    language,
    setLanguage,
  };
}

/**
 * useLanguage alias as required by specs.
 */
export const useLanguage = useTranslation;

export function getStoredLanguage(): Language {
  try {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('skilllens_language') : null;
    if (saved && (saved === 'en' || saved === 'hi' || saved === 'te' || saved === 'kn' || saved === 'ta' || saved === 'ml')) {
      return saved as Language;
    }
  } catch {}
  return 'en';
}
