import { about } from '../data/content.js';

export default function About() {
  return (
    <section id="que-hacemos" className="section-pad">
      <div className="shell">
        <p className="eyebrow">{about.eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-plum dark:text-plum-200 md:text-4xl">
          {about.title}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {about.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-card border-[1.5px] border-border1 border-t-4 border-t-plum bg-white p-7 dark:border-night-border dark:border-t-pink dark:bg-night-card"
            >
              <h3 className="font-display text-lg font-semibold text-ink dark:text-night-ink">
                {card.title}
              </h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-ink/80 dark:text-night-ink/75">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
