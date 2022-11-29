import React, { ReactElement } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Backgroundcircles from "./Backgroundcircle";
interface Props {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["hi my name is kidus", "this is a profound experience"],
    loop: true,
    delaySpeed: 200,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <Backgroundcircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/w_2560%2Cc_limit/Monkey-Selfie.jpg"
      />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="grey" />
      </h1>
    </div>
  );
}
