import React, { ReactElement } from "react";
import { motion } from "framer-motion";
interface Props {}

export default function Experiencecard({}: Props) {
  return (
    <article className="sm:pt-[10px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 curser-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media.gq.com/photos/626ff00ff297d8fecec72624/16:9/w_2560%2Cc_limit/story%2520dnc%25202022_01_13_Delante_Desouza-1369%25201.jpeg"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">ceo of KidoFam</h4>
        <p className="font-bold text-2xl mt-1">Kidofam</p>
        <div className="flex space-x-2 my-2"></div>
        <p>stsrted work ... -Ended </p>
        <ul>
          <li>Sumary pointsSummary pointsSummary points</li>
          <li>Summary pointsSummary pointsSummary pointsSummary points</li>
          <li>
            pointsSummary pointsSummary pointsSummary pointsSummary points
          </li>
          <li>
            pointsSummary pointsSummary pointsSummary pointsSummary points
          </li>
        </ul>
      </div>
    </article>
  );
}
