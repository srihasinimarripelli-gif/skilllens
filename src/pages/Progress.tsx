import React from 'react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/mockData';
import { storageService } from '../services/storage';
import { PageTransition } from '../components/PageTransition';
import { useTranslation } from '../i18n';
import { getLocalizedCategory } from '../data/localizedContent';

export const Progress: React.FC = () => {
  const { profile, sessions } = useApp();
  const { t } = useTranslation();

  const progress = storageService.getLearningProgress();
  const skillsLearningCount = progress.viewedSkillIds.length || (sessions.length > 0 ? Math.min(8, sessions.length + 2) : 2);
  const skillsCompletedCount = progress.completedSkillIds.length || (sessions.length > 3 ? 3 : 1);
  const practiceSessionsCount = sessions.length;
  const currentStreak = profile.streakDays;

  // Badges list with full localized strings
  const badges = [
    {
      id: 'first-drill',
      title: t('progress.badges.firstDrillTitle'),
      description: t('progress.badges.firstDrillDesc'),
      unlocked: sessions.length >= 1,
      icon: '🎯',
    },
    {
      id: 'steady-streak',
      title: t('progress.badges.steadyStreakTitle'),
      description: t('progress.badges.steadyStreakDesc'),
      unlocked: profile.streakDays >= 3,
      icon: '🔥',
    },
    {
      id: 'craft-virtuoso',
      title: t('progress.badges.craftVirtuosoTitle'),
      description: t('progress.badges.craftVirtuosoDesc'),
      unlocked: profile.overallScore >= 85,
      icon: '🏆',
    },
    {
      id: 'versatile-maker',
      title: t('progress.badges.versatileMakerTitle'),
      description: t('progress.badges.versatileMakerDesc'),
      unlocked: new Set(sessions.map((s) => s.categoryId)).size >= 3,
      icon: '✨',
    },
  ];

  // Category coverage
  const categoryStats = CATEGORIES.map((cat) => {
    const count = sessions.filter((s) => s.categoryId === cat.id).length;
    return {
      id: cat.id,
      name: getLocalizedCategory(cat.id, cat.name),
      count,
      total: cat.skillCount,
      percent: Math.min(100, Math.round((count / Math.max(1, cat.skillCount)) * 100)),
    };
  });

  return (
    <div className="min-h-screen pb-24 md:pb-12 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-250">
      <Header title={t('progress.title')} subtitle={t('progress.subtitle')} />

      <PageTransition className="px-4 sm:px-6 lg:px-8 py-6 max-w-5xl mx-auto w-full flex flex-col gap-8">
        {/* Title */}
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            {t('progress.title')}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t('progress.subtitle')}
          </p>
        </div>

        {/* 4 Simple Statistic Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-5 shadow-xs flex flex-col justify-between transition-colors duration-250">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {t('progress.skillsLearning')}
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 mt-2 leading-none">
              {skillsLearningCount}
            </div>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
              {t('progress.activeCourses')}
            </span>
          </div>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-5 shadow-xs flex flex-col justify-between transition-colors duration-250">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {t('progress.skillsCompleted')}
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-2 leading-none">
              {skillsCompletedCount}
            </div>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
              {t('progress.passedBenchmarks')}
            </span>
          </div>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-5 shadow-xs flex flex-col justify-between transition-colors duration-250">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {t('progress.practiceSessions')}
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-2 leading-none">
              {practiceSessionsCount}
            </div>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
              {t('progress.recordedSessions')}
            </span>
          </div>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-5 shadow-xs flex flex-col justify-between transition-colors duration-250">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {t('progress.currentStreak')}
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 mt-2 leading-none flex items-center gap-1.5">
              <span>{currentStreak}</span>
              <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">
                {t('common.days')}
              </span>
            </div>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
              {t('progress.activeStreak')}
            </span>
          </div>
        </div>

        {/* Minimal Readable Category Breakdown */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-xs flex flex-col gap-4 transition-colors duration-250">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {t('progress.categoriesProgress')}
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {CATEGORIES.length} {t('home.exploreCategories')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categoryStats.map((cat) => (
              <div key={cat.id} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{cat.name}</span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    {cat.count} / {cat.total}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                  <div
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${Math.max(cat.count > 0 ? 12 : 0, cat.percent)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Milestones & Badges */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-xs flex flex-col gap-4 transition-colors duration-250">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-700 pb-3">
            {t('progress.earnedBadges')}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {badges.map((b) => (
              <div
                key={b.id}
                className={`p-4 rounded-xl border flex flex-col gap-2 transition-colors ${
                  b.unlocked
                    ? 'bg-blue-50/40 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 text-slate-900 dark:text-slate-100'
                    : 'bg-slate-50/60 dark:bg-slate-850/60 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{b.icon}</span>
                  {b.unlocked ? (
                    <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                      {t('progress.unlocked')}
                    </span>
                  ) : (
                    <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                      {t('progress.locked')}
                    </span>
                  )}
                </div>

                <div className="text-xs font-bold mt-1 text-slate-900 dark:text-slate-100">{b.title}</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageTransition>

      <BottomNavigation />
    </div>
  );
};
