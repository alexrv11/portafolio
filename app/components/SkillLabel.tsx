import React from "react";

export const SkillLabel = ({ text }: { text: string }) => {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium uppercase tracking-[0.12em]"
      style={{
        background: "var(--color-brand-soft)",
        color: "var(--color-brand-text)",
        fontFamily: "var(--font-mono)",
      }}
    >
      {text}
    </span>
  );
};
