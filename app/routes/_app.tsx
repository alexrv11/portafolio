import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Variants from "~/components/NavMenuToggle";
import Sidebar from "~/components/Sidebar";
import type { Route } from "./+types/_app";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alex Ventura - Senior Software Engineer" },
    {
      name: "description",
      content:
        "Discover Alex Ventura's portfolio showcasing expertise in software engineering, web development, and innovative solutions.",
    },
    {
      name: "keywords",
      content:
        "Alex Ventura, Software Engineer, Web Developer, Portfolio, React, JavaScript, Tailwind CSS",
    },
    { name: "author", content: "Alex Ventura" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "robots", content: "index, follow" },
  ];
}

export function useIsMobile(breakpoint = 768) {
  // default false on server to avoid SSR mismatch
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile("matches" in e ? e.matches : mq.matches);
    };

    // set initial
    handler(mq);
    // prefer addEventListener when available
    mq.addEventListener?.("change", handler);
    // fallback for older browsers
    if (!mq.addEventListener) mq.addListener?.(handler as any);

    return () => {
      mq.removeEventListener?.("change", handler);
      if (!mq.removeEventListener) mq.removeListener?.(handler as any);
    };
  }, [breakpoint]);

  return isMobile;
}

export default function AppLayout() {
  const isMobile = useIsMobile(768);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensure client-only before rendering interactive menu
  }, []);

  return (
    <div className="is-preload md:flex relative min-h-screen max-w-full">
      {mounted && isMobile ? (
        <Variants />
      ) : (
        <Sidebar className="max-h-screen"/>
      )}
      <div id="wrapper" className="flex-1 flex flex-col mt-8 w-full md:ml-72">
        <Outlet />
      </div>
    </div>
  );
}
