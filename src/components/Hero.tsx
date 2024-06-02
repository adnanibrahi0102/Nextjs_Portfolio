import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FlipWordsDemo } from "./Words";
import Shimmer from "./ui/Shiimer";
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:left-32 md:top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full  h-[80vh] w-[50vw] "
          fill="white"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw] "
          fill="white"
        />
      </div>
      <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.02] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex  justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-center text-blue-200 max-w-80">Eat.Sleep.code.repeat</h1>
    
          <TextGenerateEffect className="text-center text-[40px] md:text-6xl lg:text-8xl" words="Transforming ideas into Seamless User Experiences" />
          <div className="text-center  line-clamp-1 md:tracking-wider mb-4 font-bold text-base md:text-lg lg:text-2xl"> <FlipWordsDemo/> </div>
          <div className="flex flex-row gap-2 mt-10">
            <Link href="https://github.com/adnanibrahi0102">
              <MagicButton title="My Work" />
            </Link>
            <a href="">
              <Shimmer title="Download CV"/>
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
