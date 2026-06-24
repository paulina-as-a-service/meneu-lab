import Logo from './Logo.jsx';
import { footer, nav, contact, brand } from '../data/content.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border2 bg-white dark:border-night-border dark:bg-night">
      <div className="shell px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 font-body text-sm leading-relaxed text-muted dark:text-night-muted">
              {footer.blurb}
            </p>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Pie de página">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-sm font-semibold text-ink hover:text-plum dark:text-night-ink dark:hover:text-pink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* PLACEHOLDER: datos de contacto en content.js */}
          <div className="font-body text-sm text-muted dark:text-night-muted">
            <p className="font-semibold text-ink dark:text-night-ink">Contacto</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-2 block hover:text-plum dark:hover:text-pink"
            >
              {contact.email}
            </a>
            <a
              href={contact.instagramUrl}
              className="mt-1 block hover:text-plum dark:hover:text-pink"
            >
              {contact.instagram}
            </a>
            <p className="mt-1">{contact.whatsapp}</p>
          </div>
        </div>

        <p className="mt-10 font-body text-xs text-muted dark:text-night-muted">
          &copy; {year} {brand.wordmark}. {footer.rightsPrefix}. {contact.city}.
        </p>
      </div>
    </footer>
  );
}
