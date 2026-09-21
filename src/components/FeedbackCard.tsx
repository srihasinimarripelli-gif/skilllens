import React from 'react';
import { CheckCircle2, Lightbulb, ShieldAlert } from 'lucide-react';
import type { FeedbackItem } from '../types';
import { useTranslation } from '../i18n';

interface FeedbackCardProps {
  item: FeedbackItem;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ item }) => {
  const { t } = useTranslation();

  const config = {
    strength: {
      title: t('results.strengthsTitle'),
      icon: CheckCircle2,
      textColor: 'text-emerald-700 dark:text-emerald-300',
      badgeBg: 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200',
      cardBg: 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60',
    },
    improvement: {
      title: t('results.improvementsTitle'),
      icon: Lightbulb,
      textColor: 'text-amber-700 dark:text-amber-300',
      badgeBg: 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200',
      cardBg: 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/60',
    },
    safety: {
      title: t('results.safetyTitle'),
      icon: ShieldAlert,
      textColor: 'text-blue-700 dark:text-blue-300',
      badgeBg: 'bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200',
      cardBg: 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/60',
    },
  };

  const current = config[item.type] || config.improvement;
  const Icon = current.icon;

  return (
    <div
      className={`p-3.5 rounded-xl border ${current.cardBg} shadow-xs flex items-start gap-3 transition-colors duration-250`}
    >
      <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${current.badgeBg}`}>
        <Icon className="w-4 h-4" />
      </div>

      <div className="min-w-0 flex-1">
        <span
          className={`text-[11px] font-bold uppercase tracking-wide block mb-0.5 ${current.textColor}`}
        >
          {current.title}
        </span>
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
          {item.text}
        </p>
      </div>
    </div>
  );
};
