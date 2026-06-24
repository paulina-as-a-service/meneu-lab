import { method } from '../data/content.js';
import { useFadeIn } from '../hooks/useFadeIn.js';

export default function Method() {
  const ref = useFadeIn();

  return (
    <section id="como-trabajamos" className="section-pad">
      <div className="shell" ref={ref}>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="fade-up">
            <p className="eyebrow">{method.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-plum dark:text-plum-200 md:text-4xl">
              {method.title}
            </h2>
            <p className="mt-4 max-w-md font-body text-[15px] leading-relaxed text-ink/80 dark:text-night-ink/80">
              {method.body}
            </p>
          </div>

          <ol className="space-y-4">
            {method.steps.map((step) => (
              <li
                key={step.n}
                className="fade-up flex gap-5 rounded-card border-[1.5px] border-border2 bg-white p-6 dark:border-night-border dark:bg-night-card"
              >
                <span className="font-display text-3xl font-semibold text-pink">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink dark:text-night-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-body text-[14px] leading-relaxed text-ink/75 dark:text-night-ink/70">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
