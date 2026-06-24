import { useEffect, useRef } from 'react';

/**
 * Attaches IntersectionObserver to a container ref.
 * Direct children with the class `fade-up` get `is-visible` added
 * with a staggered delay when they enter the viewport.
 */
export function useFadeIn(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      el.querySelectorAll('.fade-up').forEach((child) => {
        child.classList.add('is-visible');
      });
      return;
    }

    const targets = Array.from(el.querySelectorAll('.fade-up'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = targets.indexOf(entry.target);
          entry.target.style.animationDelay = `${delay + index * 80}ms`;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}
