import { useEffect, useRef } from 'react';
import { hero, brand } from '../data/content.js';

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    let rafId;
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        el.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Parallax background layer */}
      <div ref={bgRef} aria-hidden="true" className="pointer-events-none absolute inset-0 will-change-transform">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink/20 blur-3xl dark:bg-pink/10" />
        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-green/20 blur-3xl dark:bg-green/10" />
      </div>

      <div className="shell section-pad relative">
        <p className="eyebrow">{hero.eyebrow}</p>

        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-plum dark:text-plum-200 sm:text-5xl md:text-6xl">
          {hero.headlineTop}{' '}
          <span className="relative inline-block">
            <span className="relative z-10">{hero.headlineAccent}</span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-1 z-0 h-3 bg-yellow/70"
            />
          </span>
          <br />
          {hero.headlineBottom}
        </h1>

        <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink/80 dark:text-night-ink/80 md:text-lg">
          {hero.sub}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contacto"
            className="rounded-pill bg-plum px-6 py-3 font-display text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-pink dark:text-ink"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#como-trabajamos"
            className="rounded-pill border-[1.5px] border-plum px-6 py-3 font-display text-sm font-semibold text-plum transition-colors hover:bg-card-plum dark:border-pink dark:text-pink dark:hover:bg-night-card2"
          >
            {hero.ctaSecondary}
          </a>
        </div>

        <div className="mt-10 inline-flex items-center gap-2 rounded-pill bg-card-green px-4 py-2 dark:bg-night-card2">
          <span className="font-display text-lg font-semibold text-olive dark:text-green">
            {brand.yearsExperience} años
          </span>
          <span className="font-body text-sm font-semibold text-olive/80 dark:text-green/80">
            metiéndonos hasta la cocina de cada negocio
          </span>
        </div>
      </div>
    </section>
  );
}
