import LogoMark from "~/components/LogoMark";

export default function Footer() {
  return (
    <footer
      className="py-6 px-8 border-t"
      style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <LogoMark className="!w-8 !h-8" />
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          &copy; {new Date().getFullYear()} Alex Ventura Quiroz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
