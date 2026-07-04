import { NavLink, useLocation } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { routes } from "./routes";

interface SidebarProps {
  className?: string;
}

interface SideBarLinkProps {
  to: string;
  children: React.ReactNode;
  handleClick?: () => void;
}

export function SideBarLink({ to, children, handleClick }: SideBarLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="transform transition-opacity ease-in-out duration-[750ms] mt-[1.5em] opacity-100">
      <NavLink
        to={to}
        className={`block text-[rgba(175, 240, 151, 0.35)] md:text-base text-lg font-bold tracking-widest leading-[1.75] uppercase active:text-white transition-colors ease-in-out duration-200 border-0 outline-0 p-[1.35em_0] relative text-decoration-none before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-full before:h-[0.1em] before:bg-[#3c2c62] hover:before:bg-[rgba(255,255,255,0.55)] ${
          isActive ? "text-white" : "hover:text-[rgba(255,255,255,0.55)]"
        }`}
        onClick={() => handleClick && handleClick()} // Close sidebar on click
      >
        {children}
      </NavLink>
    </li>
  );
}

export default function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed top-0 left-0 h-full z-[2000]">
      <motion.section
        id="sidebar"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        animate={
          shouldReduceMotion
            ? {}
            : {
                backgroundColor: isHovering ? "#372a54ff" : "#312450",
                color: "#00c896",
              }
        }
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`flex max-w-full max-h-full h-full px-4 cursor-default  md:w-[280px] overflow-x-hidden overflow-y-auto text-center z-[10000]  md:static md:translate-y-0 ${className}`}
        style={{ backgroundColor: "#312450" }}
      >
        <div className="inner flex flex-col justify-center min-h-full opacity-100 w-full transition-opacity ease-in-out duration-1000">
          <nav>
            <ul className="list-none p-0">
              <SideBarLink to="/" handleClick={() => setIsOpen(false)}>Home</SideBarLink>
              <SideBarLink to="/about" handleClick={() => setIsOpen(false)}>About</SideBarLink>
              <SideBarLink to="/works" handleClick={() => setIsOpen(false)}>Works</SideBarLink>
              <SideBarLink to="/services" handleClick={() => setIsOpen(false)}>Services</SideBarLink>
              <SideBarLink to="/contact" handleClick={() => setIsOpen(false)}>Contact</SideBarLink>
            </ul>
          </nav>
        </div>
      </motion.section>
    </>
  );
}
