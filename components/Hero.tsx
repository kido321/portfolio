import React, { ReactElement } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Backgroundcircles from "./Backgroundcircle";
import Link from "next/link";
interface Props {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["hi my name is kidus", "this is a profound experience"],
    loop: true,
    delaySpeed: 700,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <Backgroundcircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/w_2560%2Cc_limit/Monkey-Selfie.jpg"
      />
      <div className="z-20">
        <h2 className="text-sm text-gray-500 pb-2 tracking-[15px]">
          SOFTWARE ENGINEER
        </h2>
        <h1 className="text-2xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="grey" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="herobutton">About</button>
          </Link>
          <Link href="#exprience">
            <button className="herobutton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="herobutton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="herobutton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
