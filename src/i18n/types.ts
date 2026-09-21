export type Language = 'en' | 'hi' | 'te' | 'kn' | 'ta' | 'ml';

export type InterpolationParams = Record<string, string | number>;

export type TranslateFunction = (key: string, params?: InterpolationParams) => string;

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' },
  { code: 'te', label: 'Telugu', nativeLabel: 'తెలుగు' },
  { code: 'kn', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ' },
  { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்' },
  { code: 'ml', label: 'Malayalam', nativeLabel: 'മലയാളം' },
];

export const STORAGE_LANGUAGE_KEY = 'skilllens_language';
