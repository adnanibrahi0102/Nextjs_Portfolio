import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Programmar", "Software Developer", "MERN Developer", ];

  return (
    <div className=" flex justify-center items-center px-4">
      <div className="text-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Hi, I'm Adnan Ibrahim, a 
        <FlipWords words={words} /> <br />
        based in Kashmir,India.
      </div>
    </div>
  );
}
