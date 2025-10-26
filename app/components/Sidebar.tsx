import { NavLink, useLocation } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
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
    <>
      <button
        className="fixed top-4 right-4 z-[10001] p-2 bg-[#312450] text-white rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <motion.section
        id="sidebar"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        animate={
          shouldReduceMotion
            ? {}
            : { 
              backgroundColor: isHovering ? "#00c896" : "#312450",
              color: isHovering ? "#000000" : "#00c896",

             }
        }
        transition={{ duration: 0.35, ease: "linear" }}
        className={`flex px-4 cursor-default md:w-[280px] overflow-x-hidden overflow-y-auto text-center z-[10000] transition-transform duration-300 ${
          isOpen ? "fixed translate-y-0 top-0 left-0 " : "-translate-y-full"
        } md:static md:translate-y-0 ${className}`}
        style={{ backgroundColor: "#312450" }}
      >
        {/* Horizontal gradient overlay: positioned under content, animates via transform for performance */}
        {!shouldReduceMotion && (
          <motion.div
            aria-hidden
            initial={{ x: '-100%', scaleX: 0.15 }}
            animate={isHovering ? { x: '0%', scaleX: 1 } : { x: '-100%', scaleX: 0.15 }}
            transition={{ duration: 0.45, ease: [0.25, 0.8, 0.25, 1] }}
            className="pointer-events-none absolute left-0 top-0 h-full w-full z-0"
            style={{
              transformOrigin: 'left',
              background:
                'linear-gradient(90deg, rgba(60,44,98,0.12) 0%, rgba(60,44,98,0.22) 40%, rgba(255,255,255,0.03) 100%)',
              mixBlendMode: 'overlay',
            }}
          />
        )}
        <aside className="inner flex flex-col justify-center w-full">
          <motion.div
          >
          <div className="flex flex-col justify-center   opacity-100 transition-opacity ease-in-out duration-1000">
            <nav>
              <ul className="list-none p-0">
                <SideBarLink to="/" handleClick={() => setIsOpen(false)}>
                  Home
                </SideBarLink>
                <SideBarLink to="/about" handleClick={() => setIsOpen(false)}>
                  About
                </SideBarLink>
                <SideBarLink to="/works" handleClick={() => setIsOpen(false)}>
                  Works
                </SideBarLink>
                <SideBarLink to="/contact" handleClick={() => setIsOpen(false)}>
                  Contact
                </SideBarLink>
              </ul>
            </nav>
          </div>
          </motion.div>
        </aside>
  </motion.section>
    </>
  );
}
