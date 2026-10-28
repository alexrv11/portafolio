export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`logo-mark ${className}`}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Alex Ventura"
      style={{ width: 40, height: 40, color: "var(--color-text)" }}
    >
      <circle cx="38" cy="60" r="22" fill="none" stroke="currentColor" strokeWidth="10" />
      <path d="M60 38 L60 82" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      <path
        d="M60 38 L80 82 L100 38"
        fill="none"
        stroke="var(--color-brand-graphic)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
