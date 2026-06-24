import { cta, contact } from '../data/content.js';
import { useFadeIn } from '../hooks/useFadeIn.js';

export default function CTA() {
  const ref = useFadeIn();

  return (
    <section id="contacto" className="section-pad">
      <div className="shell" ref={ref}>
        <div className="fade-up rounded-[20px] bg-plum px-7 py-12 md:px-12 md:py-16">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
            {cta.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-white md:text-4xl">
            {cta.title}
          </h2>
          <p className="mt-4 max-w-xl font-body text-[15px] leading-relaxed text-white/85">
            {cta.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="rounded-pill bg-yellow px-6 py-3 font-display text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {cta.button}
            </a>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-pill border-[1.5px] border-white/40 px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              WhatsApp
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-pill border-[1.5px] border-white/40 px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {contact.instagram}
            </a>
          </div>

          <p className="mt-6 font-body text-sm text-white/70">
            {contact.email} &nbsp;&middot;&nbsp; {contact.city}
          </p>
        </div>
      </div>
    </section>
  );
}
