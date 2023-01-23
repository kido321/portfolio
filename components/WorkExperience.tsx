import React, { ReactElement } from "react";
import Experiencecard from "../components/Experiencecard";
import { motion } from "framer-motion";
interface Props {}

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        <Experiencecard />
        <Experiencecard />
        <Experiencecard />
      </div>
    </motion.div>
  );
}
