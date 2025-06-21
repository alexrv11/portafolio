import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      whileHover={{ backgroundColor: "#5e42a6" }}
      transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
      className={`group pointer-events-auto relative flex h-fit w-full md:w-auto items-center justify-center overflow-hidden rounded-full bg-[#312450] px-8 py-4 font-bold tracking-wide text-white transition-colors duration-800 text-base hover:text-black ${className}`}
      {...props}
    >
      <span className="absolute inset-0 bg-[#00c896] translate-y-full transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-y-0 group-hover:rounded-none"></span>

      <span className="relative z-10 inline-flex items-center space-x-2">
        {children}
      </span>
    </motion.button>
  );
}
