import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
import { SkillCard } from '../components/SkillCard';
import { CATEGORIES, SKILLS } from '../data/mockData';
import { storageService } from '../services/storage';
import { PageTransition } from '../components/PageTransition';
import { useTranslation, useLanguage } from '../i18n';
import { getLocalizedCategory, getLocalizedSkill } from '../data/localizedContent';

export const Skills: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();
  const { language } = useLanguage();

  const activeCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');

  const difficultyOptions = useMemo(() => [
    { key: 'All' as const, label: t('common.all') },
    { key: 'Beginner' as const, label: t('common.beginner') },
    { key: 'Intermediate' as const, label: t('common.intermediate') },
    { key: 'Advanced' as const, label: t('common.advanced') },
  ], [t]);

  const filteredSkills = useMemo(() => {
    return SKILLS.filter((skill) => {
      // Category filter
      if (activeCategory !== 'all' && skill.categoryId !== activeCategory) {
        return false;
      }
      // Difficulty filter
      if (difficultyFilter !== 'All' && skill.difficulty !== difficultyFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const localizedSkill = getLocalizedSkill(skill.id, skill.name, skill.description);
        const matchesName = skill.name.toLowerCase().includes(q) || localizedSkill.name.toLowerCase().includes(q);
        const matchesDesc = skill.description.toLowerCase().includes(q) || localizedSkill.description.toLowerCase().includes(q);
        const matchesTools = skill.tools.some((tool) => tool.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesTools) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, difficultyFilter, searchQuery, language]);

  const handleCategorySelect = (catId: string) => {
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  return (
    <div className="min-h-screen pb-24 md:pb-12 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-250">
      <Header title={t('skills.title')} subtitle={t('skills.subtitle')} />

      <PageTransition className="px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 max-w-7xl mx-auto w-full">
        {/* Page Heading & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              {t('skills.title')}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {t('skills.subtitle')}
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('skills.searchPlaceholder')}
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition-colors shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filters: Categories & Difficulties */}
        <div className="flex flex-col gap-3">
          {/* Category Pills Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => handleCategorySelect('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300'
              }`}
            >
              {t('skills.allSkillsCount', { count: SKILLS.length })}
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300'
                }`}
              >
                {getLocalizedCategory(cat.id, cat.name)} ({cat.skillCount})
              </button>
            ))}
          </div>

          {/* Difficulty Chips */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-medium">{t('common.difficulty')}:</span>
            {difficultyOptions.map((diff) => (
              <button
                key={diff.key}
                onClick={() => setDifficultyFilter(diff.key)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  difficultyFilter === diff.key
                    ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-transparent'
                }`}
              >
                {diff.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                bestScore={storageService.getBestScoreForSkill(skill.id)}
                onClick={() => navigate(`/skills/${skill.id}`)}
                onPractice={() => navigate(`/practice/${skill.id}`)}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{t('skills.noSkillsMatch')}</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDifficultyFilter('All');
                handleCategorySelect('all');
              }}
              className="mt-3 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              {t('common.retry')}
            </button>
          </div>
        )}
      </PageTransition>

      <BottomNavigation />
    </div>
  );
};
