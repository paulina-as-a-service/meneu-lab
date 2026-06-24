import { useEffect, useRef, useState } from 'react';

const TYPE_SPEED = 75;
const DELETE_SPEED = 40;
const PAUSE_AFTER = 1800;
const PAUSE_BEFORE = 280;

export function useTypewriter(phrases) {
  const [displayed, setDisplayed] = useState('');
  const stateRef = useRef({ phraseIndex: 0, isDeleting: false, text: '' });
  const timerRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      setDisplayed(phrases[0]);
      return;
    }

    function tick() {
      const s = stateRef.current;
      const current = phrases[s.phraseIndex];

      if (!s.isDeleting) {
        s.text = current.slice(0, s.text.length + 1);
        setDisplayed(s.text);

        if (s.text === current) {
          timerRef.current = setTimeout(() => {
            s.isDeleting = true;
            tick();
          }, PAUSE_AFTER);
        } else {
          timerRef.current = setTimeout(tick, TYPE_SPEED);
        }
      } else {
        s.text = current.slice(0, s.text.length - 1);
        setDisplayed(s.text);

        if (s.text === '') {
          s.isDeleting = false;
          s.phraseIndex = (s.phraseIndex + 1) % phrases.length;
          timerRef.current = setTimeout(tick, PAUSE_BEFORE);
        } else {
          timerRef.current = setTimeout(tick, DELETE_SPEED);
        }
      }
    }

    timerRef.current = setTimeout(tick, TYPE_SPEED);

    return () => clearTimeout(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return displayed;
}
