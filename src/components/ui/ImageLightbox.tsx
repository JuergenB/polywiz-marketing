'use client';

import { useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LightboxImage {
  src: string;
  caption?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  open: boolean;
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function ImageLightbox({ images, open, index, onClose, onIndexChange }: ImageLightboxProps) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose, goNext, goPrev]);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e: React.TouchEvent) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    const delta = touchStartX.current - touchEndX.current;
    const minSwipe = 50;
    if (Math.abs(delta) > minSwipe) {
      if (delta > 0) goNext();
      else goPrev();
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/92"
          onClick={onClose}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white/70 transition hover:bg-white/20 hover:text-white"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {images.length > 1 && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-sm text-white/60">
              {index + 1} / {images.length}
            </div>
          )}

          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white/70 transition hover:bg-white/20 hover:text-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative mx-16 h-[80vh] w-[90vw] max-w-6xl cursor-pointer"
          >
            <Image
              src={images[index].src}
              alt={images[index].caption || ''}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </motion.div>

          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white/70 transition hover:bg-white/20 hover:text-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {images[index].caption && (
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-white/70">
              {images[index].caption}
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
