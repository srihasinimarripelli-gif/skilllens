import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Flame,
  BookOpen,
  LogOut,
  Globe,
  ChevronDown,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { ThemeToggle } from './ThemeToggle';
import type { Language } from '../types';

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
  const { profile, t, language, setLanguage } = useApp();
  const { currentUser, signOut } = useAuth();

  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

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

  // Close language dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'te', label: 'తెలుగు' },
  ];

  const desktopNavLinks = [
    { label: t.nav?.home || 'Home', path: '/home', isActive: currentPath === '/home' },
    { label: t.nav?.skills || 'Skills', path: '/skills', isActive: currentPath.startsWith('/skills') && !currentPath.includes('/learn') },
    { label: t.nav?.progress || 'Progress', path: '/progress', isActive: currentPath === '/progress' || currentPath === '/results' },
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
              aria-label="Go Back"
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
            <div className="w-9 h-9 rounded-xl bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shadow-xs group-hover:bg-blue-700 dark:group-hover:bg-blue-600 transition-colors">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                  SkillLens
                </span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium -mt-1 hidden sm:inline">
                Hands-On Learning
              </span>
            </div>
          </div>

          {/* Subpage title if present */}
          {title && (
            <div className="hidden sm:flex items-center pl-3 ml-2 border-l border-slate-200 dark:border-slate-700 min-w-0">
              <div className="min-w-0">
                <h1 className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">{title}</h1>
                {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{subtitle}</p>}
              </div>
            </div>
          )}
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {desktopNavLinks.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`nav-link-interactive px-3.5 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                item.isActive
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/30 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Controls (Streak, Language, Theme Toggle, Profile, Sign Out) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {rightAction ? (
            <div className="flex items-center gap-2">
              <ThemeToggle />
              {rightAction}
            </div>
          ) : (
            <>
              {/* Streak Badge */}
              <div
                onClick={() => navigate('/progress')}
                title="Active practice streak"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 text-amber-700 dark:text-amber-300 text-xs font-semibold cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
              >
                <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>{profile.streakDays}</span>
                <span className="hidden sm:inline text-[11px] text-amber-600/90 dark:text-amber-400 font-normal">days</span>
              </div>

              {/* Language Selector Dropdown */}
              <div className="relative" ref={langMenuRef}>
                <button
                  onClick={() => setLangMenuOpen((prev) => !prev)}
                  className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                  aria-label="Change language"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  <span className="uppercase font-semibold">{language}</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 mt-1.5 w-32 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg py-1 z-50 animate-fade-in">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLanguage(l.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/60 cursor-pointer ${
                          language === l.code ? 'font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30' : 'text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        <span>{l.label}</span>
                        {language === l.code && <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme Toggle (English ☀/🌙 Profile) */}
              <ThemeToggle />

              {/* Profile Avatar / Link */}
              <button
                onClick={() => navigate('/profile')}
                className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/60 border border-blue-200 dark:border-blue-700 flex items-center justify-center font-bold text-xs transition-colors cursor-pointer"
                title={currentUser?.name || 'Profile'}
                aria-label="User Profile"
              >
                {userInitial}
              </button>

              {/* Sign Out (Desktop) */}
              <button
                onClick={handleSignOut}
                className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 px-2.5 py-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
                title="Sign out of SkillLens"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
