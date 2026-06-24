import Spark from './Spark.jsx';
import { brand } from '../data/content.js';

// Logo / wordmark.
// PLACEHOLDER: si brand.logoSrc esta vacio, se muestra la marca de chispa
// + el wordmark de texto. Cuando tengas el logo final, define brand.logoSrc
// en src/data/content.js y este componente lo usa automaticamente.
export default function Logo({ className = '', tone = 'plum' }) {
  const wordColor =
    tone === 'light' ? 'text-white' : 'text-plum dark:text-plum-200';
  const sparkColor = tone === 'light' ? '#fff163' : '#fb92ff';

  if (brand.logoSrc) {
    return (
      <img
        src={brand.logoSrc}
        alt={brand.logoAlt}
        className={`h-8 w-auto ${className}`}
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Spark className="h-[18px] w-[24px]" stroke={sparkColor} />
      <span className={`font-display text-xl font-semibold ${wordColor}`}>
        {brand.wordmark}
      </span>
    </span>
  );
}
