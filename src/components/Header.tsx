import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Flame,
  BookOpen,
  LogOut,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBack = false,
  onBack,
  rightAction,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { profile, t } = useApp();
  const { currentUser, signOut } = useAuth();

  const currentPath = location.pathname;

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const handleSignOut = () => {
    signOut();
    navigate('/signin', { replace: true });
  };

  const desktopNavLinks = [
    { label: t('nav.home'), path: '/home', isActive: currentPath === '/home' },
    { label: t('nav.skills'), path: '/skills', isActive: currentPath.startsWith('/skills') && !currentPath.includes('/learn') },
    { label: t('nav.progress'), path: '/progress', isActive: currentPath === '/progress' || currentPath === '/results' },
  ];

  const userInitial = currentUser?.name
    ? currentUser.name.charAt(0).toUpperCase()
    : 'U';

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Branding & Back Button */}
        <div className="flex items-center gap-3 min-w-0">
          {showBack ? (
            <button
              onClick={handleBack}
              aria-label={t('common.back')}
              className="p-2 -ml-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          ) : null}

          {/* Logo & Product Name */}
          <div
            onClick={() => navigate('/home')}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                SkillLens
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-400 hidden sm:block -mt-1 font-medium">
                {t('common.tagline')}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 ml-4 pl-4 border-l border-slate-200 dark:border-slate-800">
            {desktopNavLinks.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  item.isActive
                    ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Center: Title / Subtitle if passed */}
        {title && (
          <div className="hidden lg:flex flex-col items-center text-center">
            <h1 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate max-w-xs">
              {title}
            </h1>
            {subtitle && (
              <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-xs">
                {subtitle}
              </span>
            )}
          </div>
        )}

        {/* Right: Actions & Profile */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {rightAction ? (
            <div className="flex items-center gap-2">
              {rightAction}
              <LanguageSelector />
              <ThemeToggle />
            </div>
          ) : (
            <>
              {/* Streak Badge */}
              <div
                onClick={() => navigate('/progress')}
                title={t('home.streakLabel')}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 text-amber-700 dark:text-amber-300 text-xs font-semibold cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
              >
                <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>{profile.streakDays}</span>
                <span className="hidden sm:inline text-[11px] text-amber-600/90 dark:text-amber-400 font-normal">
                  {t('common.days')}
                </span>
              </div>

              {/* Language Selector Dropdown */}
              <LanguageSelector />

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Profile Avatar / Link */}
              <button
                onClick={() => navigate('/profile')}
                className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/60 border border-blue-200 dark:border-blue-700 flex items-center justify-center font-bold text-xs transition-colors cursor-pointer"
                title={currentUser?.name || t('nav.profile')}
                aria-label={t('nav.profile')}
              >
                {userInitial}
              </button>

              {/* Sign Out (Desktop) */}
              <button
                onClick={handleSignOut}
                className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 px-2.5 py-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
                title={t('common.signOut')}
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>{t('common.signOut')}</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
