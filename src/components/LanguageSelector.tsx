import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useTranslation, SUPPORTED_LANGUAGES } from '../i18n';

interface LanguageSelectorProps {
  variant?: 'compact' | 'full' | 'dropdown';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'dropdown',
  className = '',
}) => {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (variant === 'full') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 ${className}`}>
        {SUPPORTED_LANGUAGES.map((l) => {
          const isSelected = language === l.code;
          return (
            <button
              key={l.code}
              type="button"
              onClick={() => setLanguage(l.code)}
              className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-blue-600 dark:border-blue-500 bg-blue-50/70 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ring-2 ring-blue-500/20 shadow-xs'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <div className="flex flex-col">
                <span className="text-sm font-bold">{l.nativeLabel}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">{l.label}</span>
              </div>
              {isSelected && (
                <span className="w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
        aria-label="Select Language"
        title="Select Language / भाषा चुनें / భాషను ఎంచుకోండి"
      >
        <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
        <span className="font-semibold text-xs">
          {SUPPORTED_LANGUAGES.find((l) => l.code === language)?.nativeLabel || 'English'}
        </span>
        <ChevronDown className="w-3 h-3 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-36 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg py-1 z-50 animate-fade-in">
          {SUPPORTED_LANGUAGES.map((l) => {
            const isSelected = language === l.code;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  setLanguage(l.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors cursor-pointer ${
                  isSelected
                    ? 'font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30'
                    : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                <div className="flex flex-col">
                  <span>{l.nativeLabel}</span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-400">{l.label}</span>
                </div>
                {isSelected && (
                  <span className="text-blue-600 dark:text-blue-400 font-bold ml-2">✓</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
