import React, { ReactElement } from "react";
import { motion } from "framer-motion";
interface Props {}

export default function About({}: Props) {
  return (
    <div className="pt-[160px] flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auti items-center overflow-scroll">
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://media.gq.com/photos/626ff00ff297d8fecec72624/16:9/w_2560%2Cc_limit/story%2520dnc%25202022_01_13_Delante_Desouza-1369%25201.jpeg"
        className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
      />

      <div className="space-y-10 px-0 pt-20 md:px-10 md:pt-0">
        <h4 className=" text-4xl font-semibold mt-[10px]">
          {" "}
          Here is a little background
        </h4>
        <p className="text-base text-xs md:text-sm">
          Lout aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nullaLt
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nullaLout aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nullaLrehenderit in voluptate velit esse cillum dolore eu fugiat
          nullaLout aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderitout aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nullaLout aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugia
        </p>
      </div>
    </div>
  );
}
