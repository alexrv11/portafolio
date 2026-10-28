import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  if (variant === "secondary") {
    return (
      <button
        className={`inline-flex items-center justify-center px-5 py-3 rounded-[10px] text-sm font-semibold transition-colors duration-200 ${className}`}
        style={{
          border: "1px solid var(--color-border)",
          color: "var(--color-text)",
          background: "transparent",
          minHeight: 44,
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--color-surface-2)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[10px] text-sm font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      style={{
        background: "var(--color-brand)",
        color: "var(--color-on-brand)",
        minHeight: 44,
      }}
      onMouseEnter={(e) => {
        if (!props.disabled) (e.currentTarget as HTMLElement).style.background = "var(--color-brand-hover)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--color-brand)";
      }}
      {...props}
    >
      {children}
    </button>
  );
}
