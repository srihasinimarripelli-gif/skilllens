import React, { useState, useEffect } from 'react';
import { Award, TrendingUp } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

interface ScoreCardProps {
  score: number;
  label?: string;
  subtext?: string;
  showGrade?: boolean;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({
  score,
  label = 'Technique Mastery Score',
  subtext = 'Evaluated based on camera form tracking',
  showGrade = true,
}) => {
  // Calculate letter grade
  const getGrade = (val: number) => {
    if (val >= 94) return { letter: 'A+', text: 'Master Level', color: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800' };
    if (val >= 88) return { letter: 'A', text: 'Proficient Form', color: 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800' };
    if (val >= 80) return { letter: 'B+', text: 'Consistent Pace', color: 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800' };
    if (val >= 70) return { letter: 'B', text: 'Developing Grip', color: 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800' };
    return { letter: 'C', text: 'Needs Calibration', color: 'text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-800' };
  };

  const grade = getGrade(score);

  // SVG circular progress calculation
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (score / 100) * circumference;
  const [currentOffset, setCurrentOffset] = useState(circumference);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentOffset(targetOffset);
    }, 60);
    return () => clearTimeout(timer);
  }, [targetOffset]);

  return (
    <div className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col items-center text-center transition-colors duration-250">
      {/* Radial meter */}
      <div className="relative w-32 h-32 flex items-center justify-center my-2">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          {/* Background track */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            className="text-slate-100 dark:text-slate-700 stroke-current"
            strokeWidth="9"
            fill="transparent"
          />
          {/* Progress arc */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#3B82F6"
            strokeWidth="9"
            strokeLinecap="round"
            fill="transparent"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: currentOffset,
              transition: 'stroke-dashoffset 0.6s ease-out',
            }}
          />
        </svg>

        {/* Center score readout */}
        <div className="absolute flex flex-col items-center">
          <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-none">
            <AnimatedCounter value={score} duration={600} />
          </span>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">
            out of 100
          </span>
        </div>
      </div>

      {/* Grade badge */}
      {showGrade && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold mt-2 ${grade.color}`}>
          <Award className="w-3.5 h-3.5" />
          <span>Grade {grade.letter}</span>
          <span className="opacity-40">·</span>
          <span className="font-medium">{grade.text}</span>
        </div>
      )}

      <div className="mt-3">
        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{label}</h3>
        {subtext && <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{subtext}</p>}
      </div>

      {/* Trend indicator */}
      <div className="flex items-center gap-1.5 mt-3 text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800/60">
        <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
        <span>+6% consistency over previous session</span>
      </div>
    </div>
  );
};
