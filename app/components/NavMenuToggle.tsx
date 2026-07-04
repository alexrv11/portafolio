"use client"

import { useEffect, useRef, useState } from "react"
import { motion, type Variants } from "framer-motion";
import { routes } from "./routes";
import { NavLink } from "react-router";

const container: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    zIndex: 1000,
}

const nav: React.CSSProperties = {
    width: '100vw',
    height: '100vh',
    position: "absolute",
}

const background: React.CSSProperties = {
    backgroundColor: "#312450",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100vw',
    height: '100vh',
}

const toggleContainer: React.CSSProperties = {
    outline: "none",
    border: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    cursor: "pointer",
    position: "fixed",
    top: 18,
    right: 15,
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
}

const list: React.CSSProperties = {
    listStyle: "none",
    padding: 25,
    margin: 0,
    position: "absolute",
    top: 80,
    width: '100%',
}

const listItem: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 0,
    margin: 0,
    listStyle: "none",
    cursor: "pointer",
}


const textPlaceholder: React.CSSProperties = {
    borderRadius: 5,
    width: 200,
    height: 20,
    flex: 1,
}

// --- Motion variants (converted for framer-motion) ---
const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const itemVariants = {
    open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
    closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
};

const sidebarVariants: Variants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
        transition: { type: "spring", stiffness: 20, restDelta: 2 },
    }),
    closed: { clipPath: "circle(30px at calc(100% - 40px) 40px)", transition: { delay: 0.2, type: "spring", stiffness: 400, damping: 40 } },
};

interface PathProps {
    d?: string;
    variants?: Variants;
    transition?: { duration: number };
}

const Path = (props: PathProps) => (
    <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" {...props} />
);

const MenuToggle = ({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) => (
    <button style={toggleContainer} onClick={toggle} aria-label="Toggle menu">
        <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="#00c896"
                strokeLinecap="round"
                initial={false}
                animate={isOpen ? { d: "M 3 16.5 L 17 2.5" } : { d: "M 2 2.5 L 20 2.5" }}
            />
            <motion.path
                d="M 2 9.423 L 20 9.423"
                fill="transparent"
                strokeWidth="3"
                stroke="#00c896"
                strokeLinecap="round"
                initial={false}
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.1 }}
            />
            <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="#00c896"
                strokeLinecap="round"
                initial={false}
                animate={isOpen ? { d: "M 3 2.5 L 17 16.346" } : { d: "M 2 16.346 L 20 16.346" }}
            />
        </svg>
    </button>
);

export default function Variants() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { height } = useDimensions(containerRef);

    return (
        <div style={container} ref={containerRef}>
            <motion.nav initial={false} animate={isOpen ? "open" : "closed"} custom={height} style={nav}>
                <motion.div style={background} variants={sidebarVariants} />
                <motion.ul style={list} variants={navVariants}>
                    {routes.map((route) => (
                        <motion.li key={route.to} style={listItem} variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <NavLink
                                to={route.to}
                                onClick={() => setIsOpen(false)}
                                className={`block text-[rgba(175, 240, 151, 0.35)] md:text-base text-xl font-bold tracking-widest leading-[1.75] uppercase active:text-white transition-colors ease-in-out duration-200 border-0 outline-0 p-[1.0em_0] relative text-decoration-none before:content-[''] before:absolute before:bottom-[0.3em] before:left-0 before:w-full before:h-[0.1em] before:bg-[#3c2c62] before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100 hover:before:bg-[rgba(255,255,255,0.55)] ${true ? "text-white" : "hover:text-[rgba(255,255,255,0.55)]"}`}
                            >
                                {route.textLabel}
                            </NavLink>
                        </motion.li>
                    ))}
                </motion.ul>
                <MenuToggle toggle={() => setIsOpen((v) => !v)} isOpen={isOpen} />
            </motion.nav>
        </div>
    );
}

// Simple useDimensions hook (measures offsetHeight) - kept local
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetHeight;
        }
    }, [ref]);

    return dimensions.current;
};