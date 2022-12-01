import React, { ReactElement } from "react";
import { motion } from "framer-motion";
interface Props {}

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 5, 6, 4];
  return (
    <motion.div className="h-screen flex relative overflow-hiden flex-col text-left md:flex-row xl:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 ">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen  ">
            <img src="https://static-new.miraheze.org/freshwebsiteswiki/f/f4/Netflix_-_English.jpg" />
            <div>
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  case study {i + 1} of {projects.length}
                </span>{" "}
                clone
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute w-full top-[25%] bg-[#f7Ab0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
