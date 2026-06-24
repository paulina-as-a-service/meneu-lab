import { services } from '../data/content.js';

export default function Services() {
  return (
    <section id="servicios" className="section-pad">
      <div className="shell">
        <p className="eyebrow">{services.eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-plum dark:text-plum-200 md:text-4xl">
          {services.title}
        </h2>
        <p className="mt-3 max-w-xl font-body text-[15px] text-muted dark:text-night-muted">
          {services.intro}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, i) => (
            <article
              key={service.name}
              className="flex flex-col rounded-card border-[1.5px] border-border1 bg-white p-6 dark:border-night-border dark:bg-night-card"
            >
              <span className="font-display text-sm font-semibold text-pink">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink dark:text-night-ink">
                {service.name}
              </h3>
              <p className="mt-2 font-body text-[14px] leading-relaxed text-ink/75 dark:text-night-ink/70">
                {service.desc}
              </p>

              <details className="group mt-4 border-t border-border1 pt-3 dark:border-night-border">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-sm font-semibold text-plum dark:text-plum-200">
                  <span>
                    {services.addOnsLabel} ({service.addOns.length})
                  </span>
                  <svg
                    className="h-4 w-4 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>

                <ul className="mt-3 space-y-2">
                  {service.addOns.map((addOn) => (
                    <li
                      key={addOn.name}
                      className="rounded-lg bg-card-green/60 px-3 py-2 dark:bg-night-card2"
                    >
                      <p className="font-body text-[13px] font-bold text-ink dark:text-night-ink">
                        {addOn.name}
                      </p>
                      {addOn.desc ? (
                        <p className="mt-0.5 font-body text-[12px] leading-snug text-ink/70 dark:text-night-ink/65">
                          {addOn.desc}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
