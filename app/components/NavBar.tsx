import { useState, useEffect } from "react";
import MenuIcon from "~/icons/menu";
import CloseIcon from "~/icons/close";
import { LinkedInIcon } from "~/icons/linkein";
import { GithubIcon } from "~/icons/github";
import LogoMark from "~/components/LogoMark";

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof document === "undefined") return "dark";
    return (document.documentElement.dataset.theme as "dark" | "light") || "dark";
  });

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "light" ? "#FFFAF6" : "#1A1210");
    setTheme(next);
  }

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      document.documentElement.dataset.theme = saved;
      setTheme(saved);
    }
  }, []);

  return { theme, toggleTheme };
}

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const ids = ["home", "about", "works", "services", "contact"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "color-mix(in srgb, var(--color-bg) 85%, transparent)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo lockup */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection("home"); setOpen(false); }}
            className="inline-flex items-center gap-3 select-none text-[var(--color-text)] no-underline"
            aria-label="Alex Ventura — home"
          >
            <LogoMark />
            <span
              className="font-bold hidden sm:block"
              style={{ font: '700 22px/1 "Space Grotesk", system-ui, sans-serif', letterSpacing: "0.02em" }}
            >
              alex ventura
            </span>
          </a>

          {/* Center tagline — hidden on mobile */}
          <span
            className="hidden md:block text-xs font-medium tracking-widest uppercase select-none"
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}
          >
            Building products that scale © {new Date().getFullYear()}
          </span>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Let's talk pill */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection("contact"); setOpen(false); }}
              className="hidden sm:flex items-center px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-colors duration-200"
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                minHeight: 44,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-surface-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "";
              }}
            >
              Let&apos;s talk
            </a>

            {/* Theme toggle */}
            <button
              className="p-2 rounded-md transition-colors"
              style={{ color: "var(--color-text-muted)" }}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)"; }}
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              )}
            </button>

            {/* Hamburger */}
            <button
              className="p-2 rounded-md transition-colors"
              style={{ color: "var(--color-text)" }}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-surface-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "";
              }}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col" style={{ background: "var(--color-bg)" }}>

          {/* Top bar — close only */}
          <div className="flex justify-end px-8 pt-6 shrink-0">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="transition-colors duration-200"
              style={{ color: "var(--color-text-muted)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)"; }}
            >
              <CloseIcon />
            </button>
          </div>

          {/* Main content */}
          <div className="flex flex-1 min-h-0 px-10 md:px-16 py-6 gap-8">

            {/* Left — monogram + socials */}
            <div className="hidden md:flex flex-col items-center justify-between w-2/5 shrink-0">
              <span
                className="font-thin leading-none select-none"
                style={{
                  fontSize: "clamp(6rem, 14vw, 14rem)",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-display)",
                }}
              >
                av/
              </span>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/in/alexventuraq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors duration-200"
                  style={{ color: "var(--color-text-muted)" }}
                  aria-label="LinkedIn"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)"; }}
                >
                  <span className="flex items-center w-5 h-5 shrink-0 [&_svg]:w-full [&_svg]:h-full"><LinkedInIcon /></span>
                  <span className="text-sm leading-none">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/alexrv11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors duration-200"
                  style={{ color: "var(--color-text-muted)" }}
                  aria-label="GitHub"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)"; }}
                >
                  <span className="flex items-center w-5 h-5 shrink-0 [&_svg]:w-full [&_svg]:h-full"><GithubIcon /></span>
                  <span className="text-sm leading-none">GitHub</span>
                </a>
              </div>
            </div>

            {/* Right — nav links */}
            <nav className="flex flex-col justify-center items-start flex-1">
              {links.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(id); setOpen(false); }}
                  onMouseEnter={() => setHoveredLink(id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="font-light leading-tight py-1 transition-colors duration-300"
                  style={{
                    fontSize: "clamp(2.5rem, 7vw, 6rem)",
                    fontFamily: "var(--font-display)",
                    color: hoveredLink === null || hoveredLink === id
                      ? "var(--color-text)"
                      : "var(--color-text-muted)",
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom bar */}
          <div className="shrink-0 px-10 md:px-16 pb-8 flex items-center justify-between">
            <span
              className="text-xs tracking-widest"
              style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}
            >
              Building products that scale © {new Date().getFullYear()}
            </span>
            <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              alex.rv11@gmail.com
            </span>
          </div>
        </div>
      )}
    </>
  );
};
