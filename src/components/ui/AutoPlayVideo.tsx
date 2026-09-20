'use client';

import React, { useEffect, useRef } from 'react';

type AutoPlayVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  threshold?: number; // video eka kiyadha pena kota play wenna oni (0 - 1)
};

export function AutoPlayVideo({
  src,
  poster,
  className,
  threshold = 0.5,
}: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Viewport ekata awama play karanna
          video.play().catch(() => {
            /* browser eka autoplay block kalanam ignore karanna */
          });
        } else {
          // Viewport eken eliyata giyama pause karanna
          video.pause();
        }
      },
      { threshold }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <video
      ref={videoRef}
      className={className}
      controls
      muted
      playsInline
      loop
      preload="metadata"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support embedded video.
    </video>
  );
}