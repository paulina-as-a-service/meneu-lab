import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

const ThemeContext = createContext(null);

// Duration of each phase of the wipe, in ms. Total sweep = DURATION * 2.
const DURATION = 400;

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  try {
    const stored = localStorage.getItem('meneulab-theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch (e) {
    // ignore
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const overlayRef = useRef(null);
  const animating = useRef(false);

  const applyTheme = useCallback((next) => {
    document.documentElement.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('meneulab-theme', next);
    } catch (e) {
      // ignore
    }
    setTheme(next);
  }, []);

  // Keep the html class in sync on first mount (the inline script in
  // index.html sets it pre-paint; this guards against hydration drift).
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === 'light' ? 'dark' : 'light';
    const overlay = overlayRef.current;
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // No animation: just flip.
    if (!overlay || prefersReduced || animating.current) {
      applyTheme(next);
      return;
    }

    animating.current = true;

    // Direction: to dark sweeps left -> right; to light sweeps right -> left.
    const enterFrom = next === 'dark' ? '-100%' : '100%';
    const exitTo = next === 'dark' ? '100%' : '-100%';

    // Phase 0: park the overlay off-screen with no transition.
    overlay.style.transition = 'none';
    overlay.style.transform = `translateX(${enterFrom})`;
    // Force reflow so the next transform animates.
    void overlay.offsetWidth;

    // Phase 1: sweep in to cover the screen.
    overlay.style.transition = `transform ${DURATION}ms cubic-bezier(0.65, 0, 0.35, 1)`;
    overlay.style.transform = 'translateX(0)';

    window.setTimeout(() => {
      // Flip the theme while the screen is covered.
      applyTheme(next);
      // Phase 2: continue the sweep off-screen in the same direction.
      overlay.style.transform = `translateX(${exitTo})`;
      window.setTimeout(() => {
        overlay.style.transition = 'none';
        animating.current = false;
      }, DURATION);
    }, DURATION);
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      {/* Branded sweep overlay. Sits above everything, ignores clicks. */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[100] bg-plum"
        style={{ transform: 'translateX(-100%)' }}
      />
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme debe usarse dentro de <ThemeProvider>');
  }
  return ctx;
}
