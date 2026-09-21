import React from 'react';

export type TransitionVariant = 'fade-slide' | 'fade' | 'scale' | 'default';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  variant?: TransitionVariant;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = '',
  variant = 'fade-slide',
}) => {
  const animationClass =
    variant === 'fade'
      ? 'animate-fade-in'
      : variant === 'scale'
      ? 'animate-scale-subtle'
      : 'animate-fade-up';

  return (
    <div className={`${animationClass} w-full flex-1 flex flex-col ${className}`}>
      {children}
    </div>
  );
};
