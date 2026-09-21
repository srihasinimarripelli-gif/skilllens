import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import type { UserProfile, Language, PracticeSession } from '../types';
import { createTranslator } from '../i18n';
import type { TranslateFunction } from '../i18n/types';
import { STORAGE_LANGUAGE_KEY } from '../i18n/types';
import { storageService } from '../services/storage';

interface AppContextType {
  profile: UserProfile;
  t: TranslateFunction & Record<string, any>;
  language: Language;
  setLanguage: (lang: Language) => void;
  updateProfile: (profile: UserProfile) => void;
  sessions: PracticeSession[];
  refreshSessions: () => void;
  resetData: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile>(() => storageService.getProfile());
  const [sessions, setSessions] = useState<PracticeSession[]>(() => storageService.getSessions());

  // Determine active language from localStorage key 'skilllens_language', then profile, then 'en'
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const storedLang = localStorage.getItem(STORAGE_LANGUAGE_KEY) as Language;
      if (storedLang && ['en', 'hi', 'te', 'kn', 'ta', 'ml'].includes(storedLang)) {
        return storedLang;
      }
    } catch {
      // ignore localStorage errors
    }
    const profile = storageService.getProfile();
    return (profile?.language as Language) || 'en';
  });

  // Ensure storage is synced on mount
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_LANGUAGE_KEY, currentLang);
    } catch (e) {
      console.error('Failed to sync language key', e);
    }
  }, [currentLang]);

  const setLanguage = useCallback((lang: Language) => {
    try {
      localStorage.setItem(STORAGE_LANGUAGE_KEY, lang);
    } catch (e) {
      console.error('Failed to save language to localStorage', e);
    }
    setCurrentLang(lang);
    setProfile((prev) => {
      const updated = { ...prev, language: lang };
      storageService.saveProfile(updated);
      return updated;
    });
  }, []);

  const updateProfile = useCallback((updated: UserProfile) => {
    setProfile(updated);
    storageService.saveProfile(updated);
  }, []);

  const refreshSessions = useCallback(() => {
    setSessions(storageService.getSessions());
    setProfile(storageService.getProfile());
  }, []);

  const resetData = useCallback(() => {
    storageService.resetAllData();
    setProfile(storageService.getProfile());
    setSessions(storageService.getSessions());
  }, []);

  // Memoized translation helper
  const t = useMemo(() => createTranslator(currentLang), [currentLang]);

  const contextValue = useMemo<AppContextType>(
    () => ({
      profile,
      t,
      language: currentLang,
      setLanguage,
      updateProfile,
      sessions,
      refreshSessions,
      resetData,
    }),
    [profile, t, currentLang, setLanguage, updateProfile, sessions, refreshSessions, resetData]
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
