import { pillars } from '../data/content.js';
import { useFadeIn } from '../hooks/useFadeIn.js';

const accentMap = {
  green: 'border-t-green',
  plum: 'border-t-plum dark:border-t-pink',
  pink: 'border-t-pink',
  yellow: 'border-t-yellow',
};

const tagBg = {
  green: 'bg-card-green text-olive dark:bg-night-card2 dark:text-green',
  plum: 'bg-card-plum text-plum dark:bg-night-card2 dark:text-plum-200',
  pink: 'bg-card-plum text-plum dark:bg-night-card2 dark:text-pink',
  yellow: 'bg-card-green text-olive dark:bg-night-card2 dark:text-green',
};

export default function Pillars() {
  const ref = useFadeIn();

  return (
    <section
      id="pilares"
      className="section-pad bg-card-green/40 dark:bg-[#1e1726]"
    >
      <div className="shell" ref={ref}>
        <div className="fade-up">
          <p className="eyebrow">{pillars.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-plum dark:text-plum-200 md:text-4xl">
            {pillars.title}
          </h2>
          <p className="mt-3 max-w-xl font-body text-[15px] text-muted dark:text-night-muted">
            {pillars.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.items.map((item) => (
            <article
              key={item.tag}
              className={`fade-up rounded-card border-[1.5px] border-border1 border-t-4 bg-white p-6 dark:border-night-border dark:bg-night-card ${accentMap[item.accent]}`}
            >
              <span
                className={`inline-flex rounded-pill px-3 py-1 font-display text-xs font-semibold uppercase tracking-wide ${tagBg[item.accent]}`}
              >
                {item.tag}
              </span>
              <p className="mt-4 font-body text-[14px] leading-relaxed text-ink/80 dark:text-night-ink/75">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
