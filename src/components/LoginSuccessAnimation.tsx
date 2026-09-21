import React, { useEffect, useState } from 'react';
import { CheckCircle2, BookOpen } from 'lucide-react';

interface LoginSuccessAnimationProps {
  userName: string;
  mode?: 'signin' | 'signup';
  onComplete: () => void;
}

export const LoginSuccessAnimation: React.FC<LoginSuccessAnimationProps> = ({
  userName,
  mode = 'signin',
  onComplete,
}) => {
  const [fadeout, setFadeout] = useState(false);
  const displayName = userName?.trim() ? userName.split(' ')[0] : 'Learner';

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeout(true);
    }, 450);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs transition-opacity duration-200 ${
        fadeout ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-xl max-w-sm w-full mx-4 flex flex-col items-center text-center animate-scale-in">
        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center mb-3">
          <BookOpen className="w-6 h-6" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-2 border border-emerald-200 dark:border-emerald-800">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>{mode === 'signup' ? 'Account Created' : 'Signed In'}</span>
        </div>

        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
          {mode === 'signup' ? `Welcome, ${displayName}!` : `Welcome back, ${displayName}!`}
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Loading your learning dashboard...
        </p>
      </div>
    </div>
  );
};
