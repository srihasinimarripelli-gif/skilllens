import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Camera, ShieldCheck, Zap, ArrowRight, Layers } from 'lucide-react';
import { Button } from '../components/Button';
import { ThemeToggle } from '../components/ThemeToggle';
import { LanguageSelector } from '../components/LanguageSelector';
import { useTranslation } from '../i18n';

export const Landing: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-250">
      {/* Top Brand Bar */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5 cursor-pointer select-none" onClick={() => navigate('/')}>
          <div className="w-10 h-10 rounded-xl bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shadow-xs">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              SkillLens
            </span>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium -mt-1 hidden sm:block">
              {t('landing.tagline')}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <LanguageSelector />
          <ThemeToggle />
          <button
            onClick={() => navigate('/signin')}
            className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {t('common.signIn')}
          </button>
          <Button
            onClick={() => navigate('/signup')}
            variant="primary"
            size="sm"
          >
            {t('landing.getStarted')}
          </Button>
        </div>
      </header>

      {/* Hero Content - Clean, Balanced, Centered Layout */}
      <main className="max-w-3xl mx-auto w-full my-auto py-12 lg:py-20 flex flex-col items-center text-center">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/80 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 dark:text-blue-300 mb-5">
          <span>{t('landing.badge')}</span>
        </div>

        {/* Headlines */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight mb-4 max-w-2xl">
          {t('landing.headline')}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-8">
          {t('landing.subheadline')}
        </p>

        {/* 3 Key Value Props */}
        <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left mb-8">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors shadow-xs">
            <Camera className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{t('landing.features.watch')}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t('landing.features.watchDesc')}</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors shadow-xs">
            <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{t('landing.features.correct')}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t('landing.features.correctDesc')}</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors shadow-xs">
            <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{t('landing.features.track')}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t('landing.features.trackDesc')}</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="w-full max-w-md flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={() => navigate('/signup')}
            variant="primary"
            size="lg"
            fullWidth
            className="flex-1"
          >
            <span>{t('landing.getStarted')}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            onClick={() => navigate('/signin')}
            variant="secondary"
            size="lg"
            fullWidth
            className="flex-1"
          >
            <span>{t('common.signIn')}</span>
          </Button>
        </div>

        {/* Privacy footnote */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-6">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{t('common.offlineNotice')}</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full py-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-2">
        <span>SkillLens © 2026. Practical Skill Learning System.</span>
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <span>Private Focused</span>
          <span>·</span>
          <span>Accessible</span>
          <span>·</span>
          <span>Multilingual</span>
        </div>
      </footer>
    </div>
  );
};
