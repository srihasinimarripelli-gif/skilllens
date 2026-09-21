import React, { createContext, useContext, useState, useEffect } from 'react';
import type { UserProfile, Language, PracticeSession } from '../types';
import { translations, type TranslationDict } from '../i18n/translations';
import { storageService } from '../services/storage';

interface AppContextType {
  profile: UserProfile;
  t: TranslationDict;
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

  useEffect(() => {
    // Sync language from profile
    if (profile.language) {
      storageService.saveProfile(profile);
    }
  }, [profile]);

  const setLanguage = (lang: Language) => {
    const updated = { ...profile, language: lang };
    setProfile(updated);
    storageService.saveProfile(updated);
  };

  const updateProfile = (updated: UserProfile) => {
    setProfile(updated);
    storageService.saveProfile(updated);
  };

  const refreshSessions = () => {
    setSessions(storageService.getSessions());
    setProfile(storageService.getProfile());
  };

  const resetData = () => {
    storageService.resetAllData();
    setProfile(storageService.getProfile());
    setSessions(storageService.getSessions());
  };

  const currentLang = profile.language || 'en';
  const t = translations[currentLang] || translations.en;

  return (
    <AppContext.Provider
      value={{
        profile,
        t,
        language: currentLang,
        setLanguage,
        updateProfile,
        sessions,
        refreshSessions,
        resetData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
