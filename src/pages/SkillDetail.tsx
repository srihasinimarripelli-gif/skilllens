import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Clock,
  Wrench,
  ShieldAlert,
  Play,
  BookOpen,
  Award,
  Check,
  Tv,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { SKILLS, CATEGORIES } from '../data/mockData';
import { storageService } from '../services/storage';
import { PageTransition } from '../components/PageTransition';

export const SkillDetail: React.FC = () => {
  const { skillId } = useParams<{ skillId: string }>();
  const navigate = useNavigate();

  const skill = SKILLS.find((s) => s.id === skillId) || SKILLS[0];
  const category = CATEGORIES.find((c) => c.id === skill.categoryId);
  const bestScore = storageService.getBestScoreForSkill(skill.id);

  return (
    <div className="min-h-screen pb-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-250">
      <Header
        showBack
        onBack={() => navigate('/skills')}
        title={skill.name}
        subtitle={category?.name || 'Skill Overview'}
      />

      <PageTransition className="px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto w-full flex flex-col gap-6">
        {/* Main Hero Card */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-5 transition-colors duration-250">
          {/* Top Meta */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
              {category?.name}
            </span>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 font-medium text-slate-700 dark:text-slate-300">
                {skill.difficulty}
              </span>
              <span className="text-slate-300 dark:text-slate-600">·</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                <span>{skill.duration}</span>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              {skill.name}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              {skill.description}
            </p>
          </div>

          {/* Personal Best Status Pill */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-750/50 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">Personal Record</span>
                <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {bestScore !== null ? `${bestScore}% Mastery` : 'No practice recorded yet'}
                </span>
              </div>
            </div>

            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              {storageService.getSkillStatus(skill.id)}
            </span>
          </div>

          {/* Video Lesson Callout */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60">
            <div className="flex items-center gap-2.5">
              <Tv className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Instructional Video Available</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Includes real technique breakdown and steps</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-700">
              {skill.learning.video?.duration || skill.duration}
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Button
              onClick={() => navigate(`/skills/${skill.id}/learn`)}
              variant="primary"
              size="lg"
              className="w-full sm:flex-1"
            >
              <BookOpen className="w-4 h-4" />
              <span>Start Learning Lesson</span>
            </Button>

            <Button
              onClick={() => navigate(`/practice/${skill.id}`)}
              variant="secondary"
              size="lg"
              className="w-full sm:flex-1"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Practice Form with Camera</span>
            </Button>
          </div>
        </div>

        {/* Tools and Equipment Needed */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-xs flex flex-col gap-3 transition-colors duration-250">
          <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <span>Tools & Equipment Needed</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200">
            {skill.tools.map((tool, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-750/50 border border-slate-200/80 dark:border-slate-700">
                <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 stroke-[2.5]" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Evaluation Benchmarks */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-xs flex flex-col gap-3 transition-colors duration-250">
          <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
            Evaluation Benchmarks
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            During camera practice, your form will be assessed on these standards:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {skill.metrics.map((m) => (
              <div key={m.id} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-750/50 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
                <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">{m.name}</span>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-2">{m.target}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Guidelines */}
        {skill.safetyNotes && skill.safetyNotes.length > 0 && (
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-xs flex flex-col gap-2.5 transition-colors duration-250">
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <ShieldAlert className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <h2 className="text-sm font-bold">Safety Notes</h2>
            </div>
            <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1">
              {skill.safetyNotes.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </PageTransition>
    </div>
  );
};
