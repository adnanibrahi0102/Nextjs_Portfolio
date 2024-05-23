
import { InfiniteMovingCardsDemo } from "@/components/Cards";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

import { FloatingNav } from "@/components/ui/FloatingNavBar";
import {  FaInfoCircle, FaProjectDiagram, FaCommentDots, FaEnvelope } from 'react-icons/fa';


export default function Home() {
  return (
    <main className=" bg-black  relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <FloatingNav 
  navItems={[
    { name: "About", link: "#about", icon: <FaInfoCircle /> },
    { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
    { name: "Blogs", link: "#blogs", icon: <FaCommentDots /> },
    { name: "Contact", link: "#contact", icon: <FaEnvelope /> }
  ]}
/>
        <Hero/>
        <Grid/>
        <Projects/>
       <InfiniteMovingCardsDemo/>
       
        
        
      </div>
    </main>
  );
}
