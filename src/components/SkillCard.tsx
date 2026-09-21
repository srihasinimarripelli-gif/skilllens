import React from 'react';
import { Clock, Play } from 'lucide-react';
import type { Skill } from '../types';
import { CATEGORIES } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { getLocalizedCategory, getLocalizedSkill, getLocalizedDifficulty } from '../data/localizedContent';

interface SkillCardProps {
  skill: Skill;
  bestScore?: number | null;
  onClick: () => void;
  onPractice?: (e: React.MouseEvent) => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  bestScore,
  onClick,
  onPractice,
}) => {
  const { t, language } = useApp();
  const rawCategory = CATEGORIES.find((c) => c.id === skill.categoryId);
  const category = rawCategory ? getLocalizedCategory(rawCategory, language) : null;
  const localizedSkill = getLocalizedSkill(skill, language);

  const difficultyBadges = {
    Beginner: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    Intermediate: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    Advanced: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800',
  };

  return (
    <div
      onClick={onClick}
      className="skill-card-interactive p-4 cursor-pointer flex flex-col justify-between group h-full"
    >
      <div>
        {/* Category & Badge */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 truncate">
            {category?.name || t('common.skills')}
          </span>
          {skill.flagship && (
            <span className="text-[10px] font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 px-2 py-0.5 rounded-md shrink-0">
              {t('common.featured')}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-1.5">
          {localizedSkill.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
          {localizedSkill.description}
        </p>
      </div>

      {/* Meta info & Action */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between gap-2 mt-auto">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span
            className={`text-[10px] font-medium px-2 py-0.5 rounded-md border ${
              difficultyBadges[skill.difficulty] || difficultyBadges.Beginner
            }`}
          >
            {getLocalizedDifficulty(skill.difficulty, language)}
          </span>
          <span className="text-slate-300 dark:text-slate-600">·</span>
          <div className="flex items-center gap-1 text-[11px]">
            <Clock className="w-3 h-3 text-slate-400 dark:text-slate-500" />
            <span>{localizedSkill.duration}</span>
          </div>
          {bestScore !== undefined && bestScore !== null && (
            <>
              <span className="text-slate-300 dark:text-slate-600">·</span>
              <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                {bestScore}%
              </span>
            </>
          )}
        </div>

        {onPractice ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPractice(e);
            }}
            className="interactive-btn flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-600 dark:hover:bg-blue-600 text-blue-600 dark:text-blue-400 hover:text-white dark:hover:text-white border border-blue-200 dark:border-blue-800 hover:border-blue-600 text-xs font-semibold cursor-pointer"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>{t('common.practice')}</span>
          </button>
        ) : (
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
            {t('common.learn')} →
          </span>
        )}
      </div>
    </div>
  );
};
