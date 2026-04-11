'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface HorizontalTimelineStep {
  title: string;
  description: string;
  status?: 'active' | 'upcoming' | 'completed';
}

const STEP_COLORS = [
  { dot: 'bg-primary-400', border: 'border-primary-400/30', text: 'text-primary-400' },
  { dot: 'bg-secondary-400', border: 'border-secondary-400/30', text: 'text-secondary-400' },
  { dot: 'bg-emerald-400', border: 'border-emerald-400/30', text: 'text-emerald-400' },
  { dot: 'bg-sky-400', border: 'border-sky-400/30', text: 'text-sky-400' },
  { dot: 'bg-violet-400', border: 'border-violet-400/30', text: 'text-violet-400' },
  { dot: 'bg-accent-400', border: 'border-accent-400/30', text: 'text-accent-400' },
];

export function HorizontalTimeline({ steps }: { steps: HorizontalTimelineStep[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <div ref={containerRef} className="relative">
      {steps.length > 3 && (
        <>
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 hidden h-10 w-10 items-center justify-center rounded-full bg-navy-800 ring-1 ring-white/10 text-gray-400 transition-all hover:text-white hover:ring-white/20 lg:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 hidden h-10 w-10 items-center justify-center rounded-full bg-navy-800 ring-1 ring-white/10 text-gray-400 transition-all hover:text-white hover:ring-white/20 lg:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <div
        ref={scrollRef}
        className="scrollbar-hide overflow-x-auto pb-4"
      >
        <div className="relative flex min-w-max gap-0">
          <div className="absolute left-8 right-8 top-[60px] h-px bg-gradient-to-r from-white/5 via-white/15 to-white/5" />

          {steps.map((step, index) => {
            const color = STEP_COLORS[index % STEP_COLORS.length];
            const isAbove = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className="relative flex w-72 flex-shrink-0 flex-col items-center px-4"
                initial={{ opacity: 0, y: isAbove ? -20 : 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                {isAbove ? (
                  <>
                    <div className={`mb-4 w-full rounded-xl bg-navy-800 p-5 ring-1 ring-white/10 border-l-2 ${color.border}`}>
                      <div className={`text-xs font-semibold uppercase tracking-wider ${color.text} mb-2`}>
                        Step {index + 1}
                      </div>
                      <h4 className="font-display text-base font-semibold text-white mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className={`h-4 w-px ${color.dot} opacity-30`} />
                    <div className={`relative z-10 h-4 w-4 rounded-full ${color.dot} ring-4 ring-navy-900`} />
                    <div className="h-4 w-px opacity-0" />
                    <div className="h-[120px]" />
                  </>
                ) : (
                  <>
                    <div className="h-[120px]" />
                    <div className="h-4 w-px opacity-0" />
                    <div className={`relative z-10 h-4 w-4 rounded-full ${color.dot} ring-4 ring-navy-900`} />
                    <div className={`h-4 w-px ${color.dot} opacity-30`} />
                    <div className={`mt-4 w-full rounded-xl bg-navy-800 p-5 ring-1 ring-white/10 border-l-2 ${color.border}`}>
                      <div className={`text-xs font-semibold uppercase tracking-wider ${color.text} mb-2`}>
                        Step {index + 1}
                      </div>
                      <h4 className="font-display text-base font-semibold text-white mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
