import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import ArrowUpLeftIcon from "~/icons/arrow-up-left";

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
  const [shortTitle, setShortTitle] = useState("");
  const shortTitleLabel = "Sr. Software Engineer";
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

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setShortTitle((prev) => shortTitleLabel.slice(0, index + 1));

      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
  }, []);

  return (
    <div className=" bg-white  h-full flex flex-col justify-center transition ease-in-out duration-1000">
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
            className="font-bold md:text-8xl md:mt-2 mt-20 text-4xl" // Added responsive text size adjustment
          >
            Alex Ventura
          </motion.div>
        </div>
        <div>
          <h2 className="md:text-3xl text-xl tracking-widest font-semibold mt-4 mb-4 text-center md:text-left">
            <span className="hidden md:inline">{title}</span>
            <span className="inline md:hidden">{shortTitle}</span>
          </h2>
        </div>
      </div>
      <div id="content" className="flex flex-col items-center md:mt-10 mt-1 mx-4">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-4 md:text-lg text-md text-gray-700"
          >
            <span>
              Innovative Software Engineer skilled in full-stack development,
              cloud computing, and scalable solutions. Passionate about
              delivering high-quality code and enhancing user experiences.
            </span>
          </motion.p>
          <div className="flex justify-end mt-6">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="mt-2 px-6 py-4 bg-[#312450] text-white font-bold rounded-3xl hover:bg-[#3c2c62] flex items-center"
            >
              <NavLink
                to="/contact"
                className="text-white no-underline uppercase flex items-center"
              >
                <span className="mr-2">
                  <ArrowUpLeftIcon />
                </span>
                CONTACT
              </NavLink>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
