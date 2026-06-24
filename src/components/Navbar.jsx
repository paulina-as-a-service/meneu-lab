import { useState, useEffect } from 'react';
import Logo from './Logo.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import ScrollProgressBar from './ScrollProgressBar.jsx';
import { nav, hero } from '../data/content.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'sticky top-0 z-40 border-b transition-all duration-300',
        scrolled
          ? 'border-border1/60 bg-white/80 py-0 shadow-sm backdrop-blur-md dark:border-night-border/60 dark:bg-night/80'
          : 'border-border1 bg-white/90 backdrop-blur dark:border-night-border dark:bg-night/90',
      ].join(' ')}
    >
      <ScrollProgressBar />
      <nav
        className={[
          'shell flex items-center justify-between px-5 sm:px-8 transition-all duration-300',
          scrolled ? 'py-2' : 'py-4',
        ].join(' ')}
      >
        <a href="#top" aria-label="Inicio">
          <Logo />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-semibold text-ink transition-colors hover:text-plum dark:text-night-ink dark:hover:text-pink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-pill bg-plum px-4 py-2 font-display text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-pink dark:text-ink"
          >
            {hero.ctaPrimary}
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-border1 text-plum dark:border-night-border dark:text-night-ink"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border1 bg-white dark:border-night-border dark:bg-night md:hidden">
          <div className="shell flex flex-col gap-1 px-5 py-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 font-body text-sm font-semibold text-ink hover:bg-card-plum dark:text-night-ink dark:hover:bg-night-card2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-pill bg-plum px-4 py-2 text-center font-display text-sm font-semibold text-white dark:bg-pink dark:text-ink"
            >
              {hero.ctaPrimary}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
