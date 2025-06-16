import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import { motion } from "framer-motion";

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

export default function Home() {
  const [title, setTitle] = useState("");
  const fullText = "Senior Software Engineer";
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTitle((prev) => fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
  }, []);

  return (
    <div className=" bg-white  h-full flex justify-center transition ease-in-out duration-1000">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row">
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="text-8xl font-bold"
          >
            Alex Ventura
          </motion.div>
        </div>
        <div>
          <h2 className="text-3xl tracking-widest font-semibold  mt-6">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
