import React from 'react';
import {
  Paintbrush,
  Scissors,
  Sparkles,
  CircleDot,
  Heart,
  Smile,
  Flower2,
  Utensils,
  Wrench,
  Palette,
  ChevronRight,
} from 'lucide-react';
import type { Category } from '../types';
import { useApp } from '../context/AppContext';
import { getLocalizedCategory } from '../data/localizedContent';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
  compact?: boolean;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Paintbrush,
  Scissors,
  Sparkles,
  CircleDot,
  Heart,
  Smile,
  Flower2,
  Utensils,
  Wrench,
  Palette,
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onClick,
  compact = false,
}) => {
  const { t, language } = useApp();
  const localizedCat = getLocalizedCategory(category, language);
  const IconComponent = iconMap[category.iconName] || Sparkles;

  if (compact) {
    return (
      <div
        onClick={onClick}
        className="category-card-interactive flex flex-col items-center justify-center p-3 cursor-pointer text-center group h-full"
      >
        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
          <IconComponent className="w-5 h-5" />
        </div>
        <span className="text-xs font-semibold text-slate-900 dark:text-slate-100 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {localizedCat.name}
        </span>
        <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
          {category.skillCount} {t('common.skills')}
        </span>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="category-card-interactive flex items-center justify-between p-4 cursor-pointer group"
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <div className="w-11 h-11 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <IconComponent className="w-5 h-5" />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {localizedCat.name}
            </h3>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 shrink-0">
              {category.skillCount} {t('common.skills')}
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
            {localizedCat.description}
          </p>
        </div>
      </div>

      <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
    </div>
  );
};
