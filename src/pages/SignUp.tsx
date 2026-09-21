import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User as UserIcon, Mail, BookOpen, ArrowRight, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { PasswordInput } from '../components/PasswordInput';
import { Button } from '../components/Button';
import { ThemeToggle } from '../components/ThemeToggle';
import { LanguageSelector } from '../components/LanguageSelector';
import { CATEGORIES } from '../data/mockData';
import { getLocalizedCategory } from '../data/localizedContent';
import { LoginSuccessAnimation } from '../components/LoginSuccessAnimation';

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { signUp, isLoading } = useAuth();
  const { refreshSessions, t, language } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['cat-1', 'cat-2']);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showSuccessAnim, setShowSuccessAnim] = useState(false);
  const [createdUserName, setCreatedUserName] = useState('');

  const toggleInterest = (catId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(catId) ? prev.filter((id) => id !== catId) : [...prev, catId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmedName = name.trim();
    if (!trimmedName) {
      setErrorMessage(t('auth.fillAllFields'));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage(t('auth.invalidEmail'));
      return;
    }

    if (password.length < 6) {
      setErrorMessage(t('auth.passwordMinLength'));
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage(t('auth.passwordMismatch'));
      return;
    }

    const result = await signUp({
      name: trimmedName,
      email: email.trim(),
      password,
      interests: selectedInterests,
    });

    if (result.success && result.user) {
      refreshSessions();
      setCreatedUserName(result.user.name);
      setShowSuccessAnim(true);
    } else {
      setErrorMessage(result.error || t('auth.registerFailed'));
    }
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
          userName={createdUserName}
          mode="signup"
          onComplete={() => navigate('/onboarding', { replace: true })}
        />
      )}

      <div className="w-full max-w-lg mx-auto flex flex-col items-center">
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

        {/* Centered Sign Up Card */}
        <div className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xs transition-colors duration-250">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              {t('auth.createAccount')}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {t('auth.createAccountSubtitle')}
            </p>
          </div>

          {errorMessage && (
            <div className="p-3 mb-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-700 dark:text-red-300 font-medium text-center">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {t('auth.fullName')}
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3 text-slate-400 dark:text-slate-500 pointer-events-none flex items-center">
                  <UserIcon className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('auth.fullNamePlaceholder')}
                  required
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-300 dark:border-slate-600 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-colors shadow-xs"
                />
              </div>
            </div>

            {/* Email Address */}
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

            {/* Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <PasswordInput
                label={t('auth.password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('auth.passwordPlaceholder')}
                required
              />
              <PasswordInput
                label={t('auth.confirmPassword')}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={t('auth.confirmPasswordPlaceholder')}
                required
              />
            </div>

            {/* Interests Selector */}
            <div className="flex flex-col gap-2 text-left pt-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {t('home.exploreCategories')}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES.slice(0, 6).map((cat) => {
                  const localizedCat = getLocalizedCategory(cat, language);
                  const isSelected = selectedInterests.includes(cat.id);
                  return (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => toggleInterest(cat.id)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium border flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-600 text-blue-700 dark:text-blue-300 font-semibold'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="truncate">{localizedCat.name}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 ml-1" />}
                    </button>
                  );
                })}
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
              <span>{isLoading ? t('common.loading') : t('auth.createAccount')}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>

        {/* Bottom Sign In Link */}
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-6">
          {t('auth.alreadyHaveAccount')}{' '}
          <Link
            to="/signin"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
          >
            {t('auth.signIn')}
          </Link>
        </p>
      </div>
    </div>
  );
};
