import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Mail, BookOpen, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { PasswordInput } from '../components/PasswordInput';
import { Button } from '../components/Button';
import { ThemeToggle } from '../components/ThemeToggle';
import { LanguageSelector } from '../components/LanguageSelector';
import { LoginSuccessAnimation } from '../components/LoginSuccessAnimation';

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, isLoading } = useAuth();
  const { refreshSessions, t } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showSuccessAnim, setShowSuccessAnim] = useState(false);
  const [authedName, setAuthedName] = useState('');

  // Read redirect destination
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/home';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email.trim()) {
      setErrorMessage(t('auth.invalidEmail'));
      return;
    }
    if (!password) {
      setErrorMessage(t('auth.passwordRequired'));
      return;
    }

    const result = await signIn(email, password);
    if (result.success && result.user) {
      refreshSessions();
      setAuthedName(result.user.name);
      setShowSuccessAnim(true);
    } else {
      setErrorMessage(t('auth.loginFailed'));
    }
  };

  const handleQuickDemo = () => {
    setEmail('alex@skilllens.ai');
    setPassword('password123');
    setErrorMessage(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col justify-center items-center px-4 sm:px-6 py-10 relative transition-colors duration-250">
      {/* Top right language & theme toggles */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2">
        <LanguageSelector />
        <ThemeToggle />
      </div>

      {showSuccessAnim && (
        <LoginSuccessAnimation
          userName={authedName}
          mode="signin"
          onComplete={() => navigate(from, { replace: true })}
        />
      )}

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

        {/* Centered Sign In Card */}
        <div className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xs transition-colors duration-250">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              {t('auth.welcomeBack')}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {t('auth.signInSubtitle')}
            </p>
          </div>

          {errorMessage && (
            <div className="p-3 mb-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-700 dark:text-red-300 font-medium text-center">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email Input */}
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
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-300 dark:border-slate-600 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-colors shadow-xs"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <PasswordInput
                label={t('auth.password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('auth.passwordPlaceholder')}
                required
              />
              <div className="flex justify-end mt-1.5">
                <Link
                  to="/forgot-password"
                  className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  {t('auth.forgotPassword')}
                </Link>
              </div>
            </div>

            {/* Primary Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={isLoading}
              className="mt-2"
            >
              <span>{isLoading ? t('common.loading') : t('auth.signIn')}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          {/* Quick Demo Credentials helper */}
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>{t('auth.quickDemo')}</span>
            <button
              type="button"
              onClick={handleQuickDemo}
              className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline cursor-pointer"
            >
              Demo
            </button>
          </div>
        </div>

        {/* Bottom Signup Link */}
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-6">
          {t('auth.dontHaveAccount')}{' '}
          <Link
            to="/signup"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
          >
            {t('auth.createAccount')}
          </Link>
        </p>
      </div>
    </div>
  );
};
