import type { Route } from "./+types/home";
import { motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alex Ventura" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  
    return (
        <div className=" bg-white  h-full flex justify-center transition ease-in-out duration-1000">
          
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row">
              <motion.div
                initial={{ opacity: 0.1, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="mr-4"
              >
                <span className="text-5xl tracking-widest font-semibold">
                  Alex 
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.0 }}
              >
                <span className="text-5xl tracking-widest font-semibold">
                  Ventura
                </span>
              </motion.div>
            </div>
            <div>
              <h2 className="text-xl tracking-widest font-semibold  mt-6">
                Senior Software Engineer
              </h2>
            </div>
          </div>
        </div>
    );
}
