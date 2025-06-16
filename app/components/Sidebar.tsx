import { NavLink } from "react-router";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <section
      id="sidebar"
      className={`p-10 pt-2 bg-[#312450] cursor-default h-screen fixed left-0 overflow-x-hidden overflow-y-auto text-right top-0 z-[10000] ${className}`}
    >
      <div className="inner flex flex-col justify-center min-h-full opacity-100 w-full transition-opacity ease-in-out duration-1000">
        <nav>
          <ul className="list-none p-0">
            <li className="transform transition-opacity ease-in-out duration-[750ms] mt-[1.5em] opacity-100">
              <NavLink
                to="/"
                className="block text-[rgba(255,255,255,0.35)] text-xs font-bold tracking-widest leading-[1.75] uppercase hover:text-[rgba(255,255,255,0.55)] active:text-white transition-colors ease-in-out duration-200 border-0 outline-0 p-[1.35em_0] relative text-decoration-none before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-full before:h-[0.2em] before:bg-[#3c2c62] hover:before:bg-[rgba(255,255,255,0.55)]"
              >
                Home
              </NavLink>
            </li>
            <li className="transform transition-opacity ease-in-out duration-[750ms] mt-[1.5em] opacity-100">
              <NavLink
                to="/about"
                className="block text-[rgba(255,255,255,0.35)] text-xs font-bold tracking-widest leading-[1.75] uppercase hover:text-[rgba(255,255,255,0.55)] active:text-white transition-colors ease-in-out duration-200 border-0 outline-0 p-[1.35em_0] relative text-decoration-none before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-full before:h-[0.2em] before:bg-[#3c2c62] hover:before:bg-[rgba(255,255,255,0.55)]"
              >
                About
              </NavLink>
            </li>
            <li className="transform transition-opacity ease-in-out duration-[750ms] mt-[1.5em] opacity-100">
              <NavLink
                to="/services"
                className="block text-[rgba(255,255,255,0.35)] text-xs font-bold tracking-widest leading-[1.75] uppercase hover:text-[rgba(255,255,255,0.55)] active:text-white transition-colors ease-in-out duration-200 border-0 outline-0 p-[1.35em_0] relative text-decoration-none before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-full before:h-[0.2em] before:bg-[#3c2c62] hover:before:bg-[rgba(255,255,255,0.55)]"
              >
                Services
              </NavLink>
            </li>
            <li className="transform transition-opacity ease-in-out duration-[750ms] mt-[1.5em] opacity-100">
              <NavLink
                to="/contact"
                className="block text-[rgba(255,255,255,0.35)] text-xs font-bold tracking-widest leading-[1.75] uppercase hover:text-[rgba(255,255,255,0.55)] active:text-white transition-colors ease-in-out duration-200 border-0 outline-0 p-[1.35em_0] relative text-decoration-none before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-full before:h-[0.2em] before:bg-[#3c2c62] hover:before:bg-[rgba(255,255,255,0.55)]"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}