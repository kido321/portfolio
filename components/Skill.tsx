import React, { ReactElement } from "react";
import { motion } from "framer-motion";

interface Props {
  directionLeft?: boolean;
}

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -150 : 150,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://w7.pngwing.com/pngs/840/443/png-transparent-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-orange-thumbnail.png"
      />
      <div className=" absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100"> 100%</p>
        </div>
      </div>
    </div>
  );
}
