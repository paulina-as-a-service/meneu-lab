import { words } from '../data/content.js';

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 text-olive dark:text-green"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 text-plum dark:text-pink"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function Words() {
  return (
    <section className="section-pad">
      <div className="shell">
        <p className="eyebrow">{words.eyebrow}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* SI */}
          <div className="rounded-card bg-card-green p-7 dark:bg-night-card2">
            <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-olive dark:text-green">
              <span className="h-5 w-[7px] rounded bg-green" aria-hidden="true" />
              {words.yesTitle}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {words.yes.map((w) => (
                <li
                  key={w}
                  className="inline-flex items-center gap-2 rounded-pill bg-white px-3.5 py-2 font-body text-sm font-bold text-ink dark:bg-night-card dark:text-night-ink"
                >
                  <Check />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          {/* NO */}
          <div className="rounded-card bg-card-plum p-7 dark:bg-night-card2">
            <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-plum dark:text-plum-200">
              <span className="h-5 w-[7px] rounded bg-pink" aria-hidden="true" />
              {words.noTitle}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {words.no.map((w) => (
                <li
                  key={w}
                  className="inline-flex items-center gap-2 rounded-pill bg-white px-3.5 py-2 font-body text-sm font-bold text-ink/70 line-through decoration-pink decoration-2 dark:bg-night-card dark:text-night-ink/60"
                >
                  <Cross />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
