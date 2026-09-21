import React, { useState, useEffect } from 'react';
import {
  Clock,
  CheckCircle2,
  Tv,
  ExternalLink,
  Check,
  AlertCircle,
  Play,
} from 'lucide-react';
import type { SkillVideo } from '../types';
import { useApp } from '../context/AppContext';
import { storageService } from '../services/storage';

interface LearningVideoProps {
  video?: SkillVideo | null;
  skillId: string;
  skillName: string;
  onWatched?: () => void;
}

export const LearningVideo: React.FC<LearningVideoProps> = ({
  video,
  skillId,
  skillName,
  onWatched,
}) => {
  const { language } = useApp();
  const [isWatched, setIsWatched] = useState<boolean>(() => storageService.isVideoWatched(skillId));
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setIsWatched(storageService.isVideoWatched(skillId));
    setHasError(false);
  }, [skillId]);

  const handleMarkWatched = () => {
    storageService.markVideoWatched(skillId);
    setIsWatched(true);
    if (onWatched) onWatched();
  };

  // Language awareness message
  const getLanguageNotice = () => {
    if (language === 'hi') {
      return 'English video • हिंदी instructions below';
    }
    if (language === 'te') {
      return 'English video • తెలుగు instructions below';
    }
    return 'English instructional video';
  };

  const embedUrl = video?.embedUrl || video?.videoUrl;

  // Format clean embed URL without autoplay, ensuring proper parameters
  const formatEmbedSrc = (raw: string) => {
    try {
      const url = new URL(raw);
      url.searchParams.set('rel', '0');
      url.searchParams.set('modestbranding', '1');
      url.searchParams.set('playsinline', '1');
      return url.toString();
    } catch {
      const separator = raw.includes('?') ? '&' : '?';
      return `${raw}${separator}rel=0&modestbranding=1&playsinline=1`;
    }
  };

  // Fallback if no video available
  if (!video || !embedUrl || hasError) {
    return (
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-xs flex flex-col gap-3 transition-colors duration-250">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Tv className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Instructional Video Lesson
              </h3>
            </div>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium flex items-center gap-1">
            {hasError ? (
              <>
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Video unavailable</span>
              </>
            ) : (
              <span>Video demonstration</span>
            )}
          </span>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          {hasError
            ? 'The video could not be loaded. Please follow the step-by-step visual instructions below.'
            : 'Review the step-by-step instructions below before starting your hands-on practice.'}
        </p>

        <div className="w-full aspect-video rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Step-by-Step Curriculum Ready</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm">
            Proceed through the step breakdown, equipment checklist, and safety tips below for {skillName}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-5 shadow-xs flex flex-col gap-3 transition-colors duration-250">
      {/* Header Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Tv className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
              Instructional Video
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
            <span>{video.duration}</span>
          </div>

          {isWatched && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <Check className="w-3 h-3 stroke-[3]" />
              <span>Watched</span>
            </span>
          )}
        </div>
      </div>

      {/* Video Player Container */}
      <div className="w-full aspect-video rounded-lg bg-slate-900 overflow-hidden relative shadow-xs">
        <iframe
          src={formatEmbedSrc(embedUrl)}
          title={`Instructional video for ${skillName}`}
          className="w-full h-full border-0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onError={() => setHasError(true)}
          loading="lazy"
        />
      </div>

      {/* Video Details & Attribution */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 text-xs text-slate-500 dark:text-slate-400">
        <div className="min-w-0">
          <p className="font-medium text-slate-800 dark:text-slate-200 truncate">
            {video.title}
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            <span>By {video.source || 'SkillLens Masterclass'}</span>
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <span>{getLanguageNotice()}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={video.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium px-2.5 py-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
          >
            <span>YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {!isWatched ? (
            <button
              onClick={handleMarkWatched}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white border border-blue-200 dark:border-blue-800 text-xs font-semibold transition-all cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Mark as Watched</span>
            </button>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold px-2 py-1">
              <Check className="w-3.5 h-3.5" />
              <span>Completed</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
