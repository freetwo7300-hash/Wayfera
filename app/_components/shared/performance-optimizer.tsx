"use client";

import { useEffect } from 'react';

/**
 * Lightweight client hint: honour prefers-reduced-motion.
 * Preconnect/dns-prefetch hints are now in the static <head> in layout.tsx
 * so the browser sees them before any JS runs.
 */
export function PerformanceOptimizer() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }
    const handler = (e: MediaQueryListEvent) => {
      document.documentElement.style.setProperty(
        '--animation-duration',
        e.matches ? '0.01ms' : ''
      );
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return null;
}
