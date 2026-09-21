import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Globe,
  Volume2,
  Trash2,
  ShieldCheck,
  Check,
  Sliders,
  Flame,
  LogOut,
  Mail,
  Award,
  BookOpen,
  Target,
  Sun,
} from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
import { Button } from '../components/Button';
import { ThemeToggle } from '../components/ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { storageService } from '../services/storage';
import { PageTransition } from '../components/PageTransition';
import { useTranslation, useLanguage } from '../i18n';
import type { Language } from '../types';

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { currentUser, signOut } = useAuth();
  const { profile, updateProfile, resetData, sessions } = useApp();
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [resetSuccess, setResetSuccess] = useState(false);

  const progress = storageService.getLearningProgress();
  const uniquePracticedCount = new Set(sessions.map((s) => s.skillId)).size;

  const handleSignOut = () => {
    signOut();
    navigate('/signin', { replace: true });
  };

  const languages: { code: Language; label: string; sub: string }[] = [
    { code: 'en', label: 'English', sub: 'English' },
    { code: 'hi', label: 'हिंदी', sub: 'Hindi' },
    { code: 'te', label: 'తెలుగు', sub: 'Telugu' },
    { code: 'kn', label: 'ಕನ್ನಡ', sub: 'Kannada' },
    { code: 'ta', label: 'தமிழ்', sub: 'Tamil' },
    { code: 'ml', label: 'മലയാളം', sub: 'Malayalam' },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const handleAudioToggle = () => {
    updateProfile({
      ...profile,
      settings: {
        ...profile.settings,
        audioCoaching: !profile.settings.audioCoaching,
      },
    });
  };

  const handleFrequencyChange = (freq: 'continuous' | 'periodic' | 'low') => {
    updateProfile({
      ...profile,
      settings: {
        ...profile.settings,
        feedbackFrequency: freq,
      },
    });
  };

  const handleSensitivityChange = (sens: 'normal' | 'high' | 'relaxed') => {
    updateProfile({
      ...profile,
      settings: {
        ...profile.settings,
        sensitivity: sens,
      },
    });
  };

  const handleReset = () => {
    if (window.confirm(t('profile.resetConfirm'))) {
      resetData();
      setResetSuccess(true);
      setTimeout(() => setResetSuccess(false), 3000);
    }
  };

  const userInitials = currentUser?.name
    ? currentUser.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'U';

  return (
    <div className="min-h-screen pb-24 md:pb-12 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-250">
      <Header title={t('profile.title')} subtitle={t('profile.subtitle')} />

      <PageTransition className="px-4 sm:px-6 lg:px-8 py-6 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: User Profile Card & Sign Out (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* User Profile Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col gap-4 transition-colors duration-250">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-lg shrink-0 border border-blue-200 dark:border-blue-700">
                  {userInitials}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 truncate">
                      {currentUser?.name || profile.name}
                    </h2>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0">
                      Active
                    </span>
                  </div>
                  {currentUser?.email && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      <span className="truncate">{currentUser.email}</span>
                    </div>
                  )}
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">
                    {t('profile.learnerLevel')}
                  </p>
                </div>
              </div>

              {/* 4 Learning Statistics Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-700 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <span className="text-base font-bold text-slate-900 dark:text-slate-100 block leading-tight">
                      {progress.completedSkillIds.length}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">{t('progress.skillsCompleted')}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 flex items-center gap-2.5">
                  <Target className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <span className="text-base font-bold text-slate-900 dark:text-slate-100 block leading-tight">
                      {uniquePracticedCount}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">{t('progress.skillsLearning')}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 flex items-center gap-2.5">
                  <Flame className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                  <div>
                    <span className="text-base font-bold text-slate-900 dark:text-slate-100 block leading-tight">
                      {profile.streakDays} {t('common.days')}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">{t('common.streak')}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-base font-bold text-slate-900 dark:text-slate-100 block leading-tight">
                      {profile.overallScore}%
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">{t('home.mastery')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Offline Storage Notice */}
            <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 flex items-start gap-2.5 text-xs text-blue-900 dark:text-blue-200 transition-colors duration-250">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">{t('profile.dataManagement')}</span>
                <p className="text-[11px] text-blue-800 dark:text-blue-300/90 mt-0.5 leading-relaxed">
                  {t('common.offlineNotice')}
                </p>
              </div>
            </div>

            {/* Sign Out Card */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col gap-3 transition-colors duration-250">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100">{t('profile.accountDetails')}</span>
              </div>
              <Button
                onClick={handleSignOut}
                variant="outline"
                size="md"
                fullWidth
                className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30 hover:border-red-200 dark:hover:border-red-800"
              >
                <LogOut className="w-4 h-4" />
                <span>{t('common.signOut')}</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Preferences, Settings & Data (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Appearance & Theme (Light / Dark) */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col gap-3 transition-colors duration-250">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  <Sun className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{t('profile.appearance')}</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 capitalize font-medium">
                  {theme} Mode
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block">{t('profile.themeMode')}</span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Choose between clean light mode or professional dark theme.
                  </p>
                </div>
                <ThemeToggle variant="segmented" />
              </div>
            </div>

            {/* Language Selector (All 6 Supported Languages) */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col gap-3 transition-colors duration-250">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{t('profile.selectLanguage')}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => handleLanguageChange(item.code)}
                    className={`p-3 rounded-xl flex flex-col items-center justify-center transition-colors cursor-pointer border ${
                      language === item.code
                        ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-600 text-blue-700 dark:text-blue-300 font-semibold shadow-xs'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <span className="text-sm font-bold">{item.label}</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">{item.sub}</span>
                    {language === item.code && (
                      <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-1" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Practice Coach Settings */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col gap-4 transition-colors duration-250">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                <Sliders className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{t('profile.appSettings')}</span>
              </div>

              {/* Feedback Frequency */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span>{t('profile.feedbackFrequency')}</span>
                  <span className="text-blue-600 dark:text-blue-400 capitalize font-bold">
                    {profile.settings.feedbackFrequency}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {(['continuous', 'periodic', 'low'] as const).map((freq) => (
                    <button
                      key={freq}
                      onClick={() => handleFrequencyChange(freq)}
                      className={`py-2 px-3 rounded-lg text-center text-xs font-medium border transition-colors cursor-pointer ${
                        profile.settings.feedbackFrequency === freq
                          ? 'bg-blue-600 text-white border-blue-600 font-semibold'
                          : 'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                      }`}
                    >
                      {t(`profile.${freq}`)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Vision Sensitivity */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span>{t('profile.visionSensitivity')}</span>
                  <span className="text-blue-600 dark:text-blue-400 capitalize font-bold">
                    {profile.settings.sensitivity}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {(['relaxed', 'normal', 'high'] as const).map((sens) => (
                    <button
                      key={sens}
                      onClick={() => handleSensitivityChange(sens)}
                      className={`py-2 px-3 rounded-lg text-center text-xs font-medium border transition-colors cursor-pointer ${
                        profile.settings.sensitivity === sens
                          ? 'bg-blue-600 text-white border-blue-600 font-semibold'
                          : 'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                      }`}
                    >
                      {t(`profile.${sens}`)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Audio Coaching Toggle */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700">
                <div className="min-w-0 pr-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-slate-100">
                    <Volume2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>{t('profile.audioCoaching')}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    {t('profile.audioCoachingDesc')}
                  </p>
                </div>

                <button
                  onClick={handleAudioToggle}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer focus:outline-none shrink-0 ${
                    profile.settings.audioCoaching ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                  aria-label="Toggle audio coaching"
                >
                  <span
                    className={`block w-5 h-5 rounded-full bg-white shadow-xs transform transition-transform ${
                      profile.settings.audioCoaching ? 'translate-x-5' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Data Management & Reset */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col gap-3 transition-colors duration-250">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{t('profile.dataManagement')}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {t('profile.resetConfirm')}
                  </p>
                </div>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="sm"
                  className="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 hover:border-red-200 dark:hover:border-red-800 shrink-0"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{t('profile.resetData')}</span>
                </Button>
              </div>

              {resetSuccess && (
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                  ✓ {t('profile.dataResetSuccess')}
                </p>
              )}
            </div>
          </div>
        </div>
      </PageTransition>

      <BottomNavigation />
    </div>
  );
};
