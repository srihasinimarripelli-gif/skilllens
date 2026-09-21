import React from 'react';
import { CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';
import type { MetricScore } from '../types';

interface MetricCardProps {
  metric: MetricScore;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  const statusConfig = {
    optimal: {
      color: 'text-emerald-700 dark:text-emerald-300',
      bg: 'bg-emerald-50 dark:bg-emerald-950/50',
      border: 'border-emerald-200 dark:border-emerald-800',
      barColor: 'bg-emerald-600 dark:bg-emerald-500',
      icon: CheckCircle2,
      label: 'Optimal',
    },
    improving: {
      color: 'text-blue-700 dark:text-blue-300',
      bg: 'bg-blue-50 dark:bg-blue-950/50',
      border: 'border-blue-200 dark:border-blue-800',
      barColor: 'bg-blue-600 dark:bg-blue-500',
      icon: TrendingUp,
      label: 'Steady',
    },
    needs_work: {
      color: 'text-amber-700 dark:text-amber-300',
      bg: 'bg-amber-50 dark:bg-amber-950/50',
      border: 'border-amber-200 dark:border-amber-800',
      barColor: 'bg-amber-500',
      icon: AlertCircle,
      label: 'Adjust',
    },
  };

  const current = statusConfig[metric.status] || statusConfig.improving;
  const Icon = current.icon;

  return (
    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-250">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <Icon className={`w-4 h-4 ${current.color}`} />
          <span className="text-xs font-bold text-slate-900 dark:text-slate-100">{metric.name}</span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${current.bg} ${current.color} ${current.border}`}
          >
            {current.label}
          </span>
          <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{metric.score}%</span>
        </div>
      </div>

      {/* Clean horizontal progress bar */}
      <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden my-2">
        <div
          className={`h-full rounded-full ${current.barColor} transition-all duration-500`}
          style={{ width: `${Math.min(100, Math.max(10, metric.score))}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mt-1">
        <span>Target: <strong className="text-slate-700 dark:text-slate-300 font-semibold">{metric.target}</strong></span>
        <span className="text-right truncate max-w-[65%] text-slate-600 dark:text-slate-300">
          {metric.feedback}
        </span>
      </div>
    </div>
  );
};
