import { useState, useEffect } from "react";
import MenuIcon from "~/icons/menu";
import CloseIcon from "~/icons/close";

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
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection("home"); setOpen(false); }}
            className="select-none"
          >
            <img src="/logo.svg" alt="AV Logo" className="h-8 w-auto" />
          </a>

          {/* Center tagline — hidden on mobile */}
          <span className="hidden md:block text-xs font-medium tracking-widest uppercase text-gray-400 select-none">
            Digital Innovation © {new Date().getFullYear()}
          </span>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Let's talk pill */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection("contact"); setOpen(false); }}
              className="hidden sm:flex items-center px-5 py-3 rounded-full border border-[#312450] group-hover:border-black text-xs font-bold tracking-widest uppercase relative overflow-hidden group"
            >
              {/* fill layer — slides up from bottom */}
              <span className="absolute inset-x-0 bottom-0 h-0 bg-black group-hover:h-full transition-all duration-300 ease-in-out" />
              {/* text */}
              <span className="relative z-10 text-[#312450] group-hover:text-white transition-colors duration-300">
                Let's talk
              </span>
            </a>

            {/* Hamburger */}
            <button
              className="p-2 text-[#312450] hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col">

          {/* Top bar — close only */}
          <div className="flex justify-end px-8 pt-6 shrink-0">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-white/40 hover:text-white transition-colors duration-200"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Main content */}
          <div className="flex flex-1 min-h-0 px-10 md:px-16 py-6 gap-8">

            {/* Left — monogram + socials */}
            <div className="hidden md:flex flex-col justify-between w-2/5 shrink-0">
              <span className="text-white font-thin leading-none select-none"
                style={{ fontSize: "clamp(6rem, 14vw, 14rem)" }}>
                AV/
              </span>
              <div className="flex flex-col gap-2 pb-2">
                <a
                  href="https://linkedin.com/in/alexrv11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white text-sm transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/alexrv11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white text-sm transition-colors duration-200"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Right — nav links */}
            <nav className="flex flex-col justify-center flex-1">
              {links.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(id); setOpen(false); }}
                  className={`block font-light leading-tight py-1 transition-colors duration-200 hover:text-white ${
                    activeSection === id ? "text-white" : "text-white/25"
                  }`}
                  style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom bar */}
          <div className="shrink-0 px-10 md:px-16 pb-8 flex items-center justify-between">
            <span className="text-white/25 text-xs tracking-widest">
              Digital Innovation © {new Date().getFullYear()}
            </span>
            <span className="text-white/25 text-xs">
              alex.rv11@gmail.com
            </span>
          </div>
        </div>
      )}
    </>
  );
};
