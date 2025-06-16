import { NavLink, useLocation } from "react-router";
import { useState } from "react";
import MenuIcon from "~/icons/menu";
import CloseIcon from "~/icons/close";

interface SidebarProps {
  className?: string;
}

interface SideBarLinkProps {
  to: string;
  children: React.ReactNode;
  handleClick?: () => void;
}

function SideBarLink({ to, children, handleClick }: SideBarLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  

  return (
    <li className="transform transition-opacity ease-in-out duration-[750ms] mt-[1.5em] opacity-100">
      <NavLink
        to={to}
        className={`block text-[rgba(255,255,255,0.35)] md:text-base text-lg font-bold tracking-widest leading-[1.75] uppercase hover:text-[rgba(255,255,255,0.55)] active:text-white transition-colors ease-in-out duration-200 border-0 outline-0 p-[1.35em_0] relative text-decoration-none before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-full before:h-[0.2em] before:bg-[#3c2c62] hover:before:bg-[rgba(255,255,255,0.55)] ${isActive ? "text-white" : ""}`}
        onClick={() => handleClick && handleClick()} // Close sidebar on click
      >
        {children}
      </NavLink>
    </li>
  );
}

export default function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 right-4 z-[10001] p-2 bg-[#312450] text-white rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <section
        id="sidebar"
        className={`p-10 pt-2 bg-[#312450] cursor-default h-screen fixed top-0 left-0 w-full overflow-x-hidden overflow-y-auto text-center z-[10000] transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"} md:translate-y-0 md:w-auto ${className}`}
      >
        <div className="inner flex flex-col justify-center min-h-full opacity-100 w-full transition-opacity ease-in-out duration-1000">
          <nav>
            <ul className="list-none p-0">
              <SideBarLink to="/" handleClick={() => setIsOpen(false)}>Home</SideBarLink>
              <SideBarLink to="/about" handleClick={() => setIsOpen(false)}>About</SideBarLink>
              <SideBarLink to="/services" handleClick={() => setIsOpen(false)}>Services</SideBarLink>
              <SideBarLink to="/contact" handleClick={() => setIsOpen(false)}>Contact</SideBarLink>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}