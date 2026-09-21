import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      {/* 1. Extremely subtle light-blue curved shape in the top-right corner */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-blue-50/70 dark:bg-blue-950/30 blur-3xl" />

      {/* 2. Extremely subtle very-light-blue curved accent at bottom-left */}
      <div className="absolute -bottom-40 -left-32 w-[480px] h-[480px] rounded-full bg-slate-50 dark:bg-slate-950/40 blur-3xl" />

      {/* 3. Subtle decorative dot grid pattern (almost invisible, clean architectural feel) */}
      <div className="absolute inset-0 subtle-dot-grid opacity-30 dark:opacity-20" />
    </div>
  );
};
