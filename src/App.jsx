import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Words from './components/Words.jsx';
import Pillars from './components/Pillars.jsx';
import Services from './components/Services.jsx';
import Method from './components/Method.jsx';
import Portfolio from './components/Portfolio.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const DURATION = 200;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const handler = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      e.preventDefault();
      clearTimeout(timerRef.current);

      const scrollToTarget = () => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'instant' });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      };

      if (reducedMotion) {
        scrollToTarget();
        return;
      }

      // Reset opacity immediately if already mid-transition, then re-fade.
      setFading(false);
      // rAF ensures the opacity:1 paint happens before we flip to 0.
      requestAnimationFrame(() => {
        setFading(true);
        timerRef.current = setTimeout(() => {
          scrollToTarget();
          setFading(false);
        }, DURATION);
      });
    };

    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main
        className="transition-opacity duration-200"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <Hero />
        <About />
        <Words />
        <Pillars />
        <Services />
        <Method />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
