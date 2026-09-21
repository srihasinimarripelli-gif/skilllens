import type { Skill, Category, Language } from '../types';
import { translations } from '../i18n/translations';
import { translate, getStoredLanguage } from '../i18n';

/**
 * Returns a localized category object or localized category name string depending on input.
 * - When passed a Category object: returns localized Category object.
 * - When passed a categoryId string: returns localized category name string.
 */
export function getLocalizedCategory(category: Category, lang?: Language): Category;
export function getLocalizedCategory(categoryId: string, fallbackName?: string, lang?: Language): string;
export function getLocalizedCategory(
  categoryOrId: Category | string,
  arg2?: Language | string,
  arg3?: Language
): Category | string {
  const currentLang: Language = (typeof arg3 === 'string'
    ? arg3
    : typeof arg2 === 'string' && (arg2 === 'en' || arg2 === 'hi' || arg2 === 'te' || arg2 === 'kn' || arg2 === 'ta' || arg2 === 'ml')
    ? (arg2 as Language)
    : getStoredLanguage()) || 'en';

  if (typeof categoryOrId === 'object' && categoryOrId !== null) {
    const cat = categoryOrId as Category;
    const catTrans = translations[currentLang]?.categories?.[cat.id];
    if (!catTrans) return cat;
    return {
      ...cat,
      name: catTrans.name || cat.name,
      description: catTrans.description || cat.description,
    };
  }

  // String ID passed
  const catId = categoryOrId as string;
  const fallbackName = typeof arg2 === 'string' && arg2 !== 'en' && arg2 !== 'hi' && arg2 !== 'te' && arg2 !== 'kn' && arg2 !== 'ta' && arg2 !== 'ml'
    ? arg2
    : catId;
  const catTrans = translations[currentLang]?.categories?.[catId];
  return catTrans?.name || fallbackName;
}

/**
 * Localizes difficulty text ('Beginner' | 'Intermediate' | 'Advanced').
 */
export function getLocalizedDifficulty(
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | string,
  lang?: Language
): string {
  const currentLang = lang || getStoredLanguage();
  switch (difficulty) {
    case 'Beginner':
      return translate(currentLang, 'common.beginner');
    case 'Intermediate':
      return translate(currentLang, 'common.intermediate');
    case 'Advanced':
      return translate(currentLang, 'common.advanced');
    default:
      return difficulty;
  }
}

/**
 * Localizes duration string (e.g. '5-10 min' -> '5-10 मिनट' / '5-10 నిమిషాలు').
 */
export function getLocalizedDuration(duration: string, lang?: Language): string {
  if (!duration) return duration;
  const currentLang = lang || getStoredLanguage();
  const minutesWord = translate(currentLang, 'common.minutes');
  return duration.replace(/\bmin\b/gi, minutesWord);
}

/**
 * Returns a localized skill.
 * - When passed a Skill object: returns localized Skill object.
 * - When passed a skillId string: returns { name, description }.
 */
export function getLocalizedSkill(skill: Skill, lang?: Language): Skill;
export function getLocalizedSkill(skillId: string, fallbackName: string, fallbackDesc?: string, lang?: Language): { name: string; description: string };
export function getLocalizedSkill(
  skillOrId: Skill | string,
  arg2?: Language | string,
  arg3?: string,
  arg4?: Language
): Skill | { name: string; description: string } {
  const currentLang: Language = (typeof arg4 === 'string'
    ? arg4
    : typeof arg2 === 'string' && (arg2 === 'en' || arg2 === 'hi' || arg2 === 'te' || arg2 === 'kn' || arg2 === 'ta' || arg2 === 'ml')
    ? (arg2 as Language)
    : getStoredLanguage()) || 'en';

  if (typeof skillOrId === 'object' && skillOrId !== null) {
    const skill = skillOrId as Skill;
    const skillTrans = translations[currentLang]?.skillsData?.[skill.id];
    const catTrans = translations[currentLang]?.categories?.[skill.categoryId];

    const localizedName = skillTrans?.name || skill.name;
    const localizedDescription = skillTrans?.description || skill.description;
    const localizedDuration = getLocalizedDuration(skill.duration, currentLang);

    return {
      ...skill,
      name: localizedName,
      description: localizedDescription,
      duration: localizedDuration,
      learning: {
        ...skill.learning,
        introduction: skillTrans
          ? `${localizedName} - ${catTrans?.name || ''}. ${localizedDescription}`
          : skill.learning.introduction,
      },
    };
  }

  // String ID passed
  const skillId = skillOrId as string;
  const fallbackName = typeof arg2 === 'string' ? arg2 : skillId;
  const fallbackDesc = typeof arg3 === 'string' ? arg3 : '';
  const skillTrans = translations[currentLang]?.skillsData?.[skillId];

  return {
    name: skillTrans?.name || fallbackName,
    description: skillTrans?.description || fallbackDesc,
  };
}
