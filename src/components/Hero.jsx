import { hero, brand } from '../data/content.js';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft brand glow, decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink/20 blur-3xl dark:bg-pink/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-green/20 blur-3xl dark:bg-green/10"
      />

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
            {brand.yearsExperience} anos
          </span>
          <span className="font-body text-sm font-semibold text-olive/80 dark:text-green/80">
            metiendonos hasta la cocina de cada negocio
          </span>
        </div>
      </div>
    </section>
  );
}
