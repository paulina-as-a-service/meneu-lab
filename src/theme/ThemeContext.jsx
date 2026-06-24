import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

const ThemeContext = createContext(null);

const DURATION = 350;

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

    if (!overlay || prefersReduced || animating.current) {
      applyTheme(next);
      return;
    }

    animating.current = true;

    // Phase 1: sweep overlay in from the left.
    overlay.classList.remove('theme-sweep-in', 'theme-sweep-out');
    // Force reflow so removing classes takes effect before re-adding.
    void overlay.offsetWidth;
    overlay.classList.add('theme-sweep-in');

    window.setTimeout(() => {
      // Flip theme while screen is covered.
      applyTheme(next);
      // Phase 2: continue sweeping the overlay out to the right.
      overlay.classList.remove('theme-sweep-in');
      void overlay.offsetWidth;
      overlay.classList.add('theme-sweep-out');

      window.setTimeout(() => {
        overlay.classList.remove('theme-sweep-out');
        animating.current = false;
      }, DURATION);
    }, DURATION);
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          backgroundColor: '#633058',
          transform: 'translateX(-100%)',
        }}
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
