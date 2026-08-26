'use client';

import React from 'react';

interface AnimatedImageProps {
  src: string;
  animatedSrc?: string;
  alt: string;
  className?: string;
  alwaysAnimated?: boolean;
}

export default function AnimatedImage({
  src,
  animatedSrc,
  alt,
  className = '',
  alwaysAnimated = false,
}: AnimatedImageProps) {
  // Derive default -animated filename if not explicitly provided
  const getAnimatedPath = (path: string) => {
    if (animatedSrc) return animatedSrc;
    const lastDot = path.lastIndexOf('.');
    if (lastDot === -1) return `${path}-animated.webp`;
    return `${path.substring(0, lastDot)}-animated.webp`;
  };

  const animPath = getAnimatedPath(src);

  if (alwaysAnimated) {
    return (
      <img
        src={animPath}
        alt={alt}
        className={className}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden group/anim ${className}`}>
      {/* Base static image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Animated layer - crossfades into view on hover */}
      <img
        src={animPath}
        alt={`${alt} (animated)`}
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/anim:opacity-100 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        loading="lazy"
      />
    </div>
  );
}
