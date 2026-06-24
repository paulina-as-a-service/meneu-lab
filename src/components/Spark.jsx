export default function Spark({ className = '', stroke = '#fb92ff' }) {
  return (
    <svg
      viewBox="0 0 34 26"
      className={className}
      role="img"
      aria-label="Marca MeneuLab"
    >
      <g stroke={stroke} strokeWidth="4" strokeLinecap="round">
        <line x1="6" y1="20" x2="2" y2="6" />
        <line x1="17" y1="22" x2="17" y2="6" />
        <line x1="28" y1="20" x2="32" y2="6" />
      </g>
    </svg>
  );
}
