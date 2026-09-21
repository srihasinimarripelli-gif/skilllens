import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2, BookOpen } from 'lucide-react';
import { Button } from '../components/Button';
import { ThemeToggle } from '../components/ThemeToggle';
import { LanguageSelector } from '../components/LanguageSelector';
import { useTranslation } from '../i18n';

export const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col justify-center items-center px-4 sm:px-6 py-10 relative transition-colors duration-250">
      {/* Top right language & theme toggles */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2">
        <LanguageSelector />
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Brand Logo & Name */}
        <div
          onClick={() => navigate('/')}
          className="flex items-center gap-2.5 mb-6 cursor-pointer select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shadow-sm">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            SkillLens
          </span>
        </div>

        {/* Centered Reset Card */}
        <div className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xs transition-colors duration-250">
          <button
            onClick={() => navigate('/signin')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t('auth.backToSignIn')}</span>
          </button>

          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              {t('auth.resetPassword')}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {t('auth.resetPasswordSubtitle')}
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {t('auth.email')}
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-slate-400 dark:text-slate-500 pointer-events-none flex items-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('auth.emailPlaceholder')}
                    required
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-300 dark:border-slate-600 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-colors shadow-xs"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                className="mt-1"
              >
                {t('auth.sendResetLink')}
              </Button>
            </form>
          ) : (
            <div className="flex flex-col items-center text-center gap-3 py-2">
              <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">{t('common.success')}</h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs">
                {t('auth.resetSuccessMessage')}
              </p>

              <Button
                onClick={() => navigate('/signin')}
                variant="outline"
                size="md"
                className="mt-2"
              >
                {t('auth.backToSignIn')}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
