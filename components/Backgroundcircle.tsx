import React, { ReactElement } from "react";
import { motion } from "framer-motion";

interface Props {}

export default function Backgroundcircle({}: Props): ReactElement {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className=" absolute border border-[#333333] border-red-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className=" absolute border border-[#333333] border-red-500 rounded-full h-[250px] w-[250px] mt-52 animate-ping" />
      <div className=" absolute border border-[#333333] border-red-500 rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className=" absolute border border-[#f7AB0A] border-red-500 rounded-full h-[350px] w-[350px] opacity-20 mt-52 animate-ping" />
      <div className=" absolute border border-[#333333] border-red-500 rounded-full h-[400px] w-[400px] mt-52 animate" />
    </motion.div>
  );
}
