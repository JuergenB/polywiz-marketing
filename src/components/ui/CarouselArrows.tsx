'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Affordance arrows for the image carousels. Deliberately quiet: the dots below
 * already say how many slides there are, so these only need to say that the
 * thing is steppable at all.
 *
 * Two parts. The edge scrims give the chevrons something to sit on, because the
 * screenshots behind them run from near-black UI to pale white diagrams and a
 * bare chevron disappears against half of them. The chevrons themselves rest at
 * a low opacity and come up on hover of the whole carousel, so they read as a
 * hint rather than as chrome.
 *
 * Renders nothing for a single image. Both handlers stopPropagation because the
 * frame underneath opens the lightbox on click.
 */
export function CarouselArrows({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/25 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/25 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/40 transition duration-300 hover:bg-white/10 group-hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/40 transition duration-300 hover:bg-white/10 group-hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </>
  );
}
