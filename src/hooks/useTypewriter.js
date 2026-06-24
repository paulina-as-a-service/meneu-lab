import { useEffect, useRef, useState } from 'react';

const TYPE_SPEED = 75;   // ms per character typed
const DELETE_SPEED = 40; // ms per character deleted
const PAUSE_AFTER = 1800; // ms pause after fully typed
const PAUSE_BEFORE = 280; // ms pause before typing next word

export function useTypewriter(phrases) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      setDisplayed(phrases[0]);
      return;
    }

    const current = phrases[phraseIndex];

    const tick = () => {
      setDisplayed((prev) => {
        if (!isDeleting) {
          const next = current.slice(0, prev.length + 1);
          if (next === current) {
            timeoutRef.current = setTimeout(
              () => setIsDeleting(true),
              PAUSE_AFTER
            );
          } else {
            timeoutRef.current = setTimeout(tick, TYPE_SPEED);
          }
          return next;
        } else {
          const next = current.slice(0, prev.length - 1);
          if (next === '') {
            timeoutRef.current = setTimeout(() => {
              setIsDeleting(false);
              setPhraseIndex((i) => (i + 1) % phrases.length);
            }, PAUSE_BEFORE);
          } else {
            timeoutRef.current = setTimeout(tick, DELETE_SPEED);
          }
          return next;
        }
      });
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);

    return () => clearTimeout(timeoutRef.current);
  }, [phraseIndex, isDeleting, phrases]);

  return displayed;
}
