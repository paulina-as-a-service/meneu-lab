import { portfolio } from '../data/content.js';
import Spark from './Spark.jsx';

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="section-pad bg-card-green/40 dark:bg-[#1e1726]"
    >
      <div className="shell">
        <p className="eyebrow">{portfolio.eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-plum dark:text-plum-200 md:text-4xl">
          {portfolio.title}
        </h2>
        <p className="mt-3 max-w-xl font-body text-[15px] text-muted dark:text-night-muted">
          {portfolio.intro}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.items.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-card border-[1.5px] border-border1 bg-white dark:border-night-border dark:bg-night-card"
            >
              {/* Image, or branded placeholder when imageSrc is empty */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {item.imageSrc ? (
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-card-plum to-card-green dark:from-night-card2 dark:to-night">
                    <Spark className="h-8 w-11 opacity-60" stroke="#633058" />
                  </div>
                )}
              </div>

              <div className="p-5">
                <p className="font-display text-xs font-semibold uppercase tracking-wide text-olive dark:text-green">
                  {item.category}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink dark:text-night-ink">
                  {item.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
