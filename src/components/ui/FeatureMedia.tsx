'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { FeatureImage } from '@/config/tools';

/**
 * One slide of a feature carousel: a still, or a silent looping animation laid
 * over that still.
 *
 * The still is always rendered underneath, so it is what shows before the
 * animation loads, if it fails, and for visitors who ask for reduced motion.
 * The animation only runs while it is on screen.
 */
export function FeatureMedia({
  image,
  alt,
  sizes,
  priority,
}: {
  image: FeatureImage;
  alt: string;
  sizes?: string;
  priority?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playable, setPlayable] = useState(false);

  // Decided after mount: the server cannot know the visitor's motion setting.
  useEffect(() => {
    setPlayable(
      Boolean(image.video) &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    );
  }, [image.video]);

  useEffect(() => {
    const video = videoRef.current;
    if (!playable || !video) return;
    video.muted = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => setPlayable(false));
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [playable]);

  return (
    <>
      <Image src={image.src} alt={alt} fill sizes={sizes} priority={priority} className="object-contain" />
      {playable && image.video && (
        <video
          ref={videoRef}
          src={image.video}
          poster={image.src}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onError={() => setPlayable(false)}
          className="absolute inset-0 h-full w-full object-contain"
        />
      )}
    </>
  );
}
