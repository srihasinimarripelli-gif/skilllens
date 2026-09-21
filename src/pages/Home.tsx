import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Flame, ArrowRight, Clock, CheckCircle2, BookOpen } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
import { ScoreCard } from '../components/ScoreCard';
import { CategoryCard } from '../components/CategoryCard';
import { Button } from '../components/Button';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { CATEGORIES, SKILLS } from '../data/mockData';
import { getLocalizedSkill } from '../data/localizedContent';
import { PageTransition } from '../components/PageTransition';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { profile, sessions, t, language } = useApp();
  const { currentUser } = useAuth();

  const userName = currentUser?.name?.split(' ')[0] || 'Learner';

  // Determine time of day greeting
  const hour = new Date().getHours();
  const greeting =
    hour < 12
      ? t('home.greetingMorning', { name: userName })
      : hour < 17
      ? t('home.greetingDay', { name: userName })
      : t('home.greetingEvening', { name: userName });

  // Latest session feedback
  const latestSession = sessions[0] || null;

  // Last practiced skill or fallback to the first flagship skill for active learning
  const rawContinue = latestSession
    ? SKILLS.find((s) => s.id === latestSession.skillId) || SKILLS[0]
    : SKILLS[0];

  const continueSkill = rawContinue ? getLocalizedSkill(rawContinue, language) : null;

  return (
    <div className="min-h-screen pb-24 md:pb-12 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-250">
      <Header />

      <PageTransition className="px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8 max-w-7xl mx-auto w-full">
        {/* Top: Welcome Greeting & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              {greeting}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {t('home.whatToLearn')}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-3">
            <div
              onClick={() => navigate('/progress')}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors shadow-xs"
              title={t('home.streakLabel')}
            >
              <Flame className="w-5 h-5 fill-amber-500 text-amber-500" />
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold leading-none">{profile.streakDays} {t('common.days')}</span>
                <span className="text-[11px] text-amber-700/80 dark:text-amber-400/80">{t('home.streakLabel')}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center shadow-xs">
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-none">{sessions.length}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{t('home.sessionsRecorded')}</div>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center shadow-xs">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-400 leading-none">67</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{t('home.skillsCount')}</div>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center shadow-xs">
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 leading-none">{profile.overallScore}%</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{t('home.mastery')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTA: Continue Learning & Form Readiness */}
        {continueSkill && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 bg-blue-50/60 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700 rounded-2xl p-6 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 px-2.5 py-1 rounded-md">
                    {t('home.continueLearning')}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{continueSkill.duration}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-2">
                  {continueSkill.name}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-6">
                  {continueSkill.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  onClick={() => navigate(`/skills/${continueSkill.id}/learn`)}
                  variant="primary"
                  size="md"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{t('home.continueLearning')}</span>
                </Button>
                <Button
                  onClick={() => navigate(`/practice/${continueSkill.id}`)}
                  variant="secondary"
                  size="md"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{t('home.startPractice')}</span>
                </Button>
              </div>
            </div>

            {/* Overall Score Summary */}
            <div className="lg:col-span-5 flex flex-col">
              <ScoreCard
                score={profile.overallScore}
                label={t('home.overallReadiness')}
                subtext={t('home.scoreSubtitle')}
              />
            </div>
          </div>
        )}

        {/* Recent Feedback Notes */}
        {latestSession && (
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {t('home.recentFeedback')}: <span className="text-blue-600 dark:text-blue-400">{latestSession.skillName}</span>
                </h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
                  {latestSession.score}% {t('home.score')}
                </span>
              </div>
              <button
                onClick={() => navigate('/progress')}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer"
              >
                {t('home.viewFullHistory')}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {latestSession.feedback.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section: Explore by Category (Discipline cards linking to /skills?category=...) */}
        <div className="pb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {t('home.exploreCategories')}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('home.exploreCategoriesSubtitle')}
              </p>
            </div>
            <button
              onClick={() => navigate('/skills')}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 cursor-pointer"
            >
              <span>{t('skills.title')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                onClick={() => navigate(`/skills?category=${cat.id}`)}
              />
            ))}
          </div>
        </div>
      </PageTransition>

      <BottomNavigation />
    </div>
  );
};
