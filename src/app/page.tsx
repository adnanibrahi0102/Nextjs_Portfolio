"use client"
import { useState, useEffect } from "react";
import Loader from "@/components/Loader"; // Adjust the path according to your project structure
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { FaInfoCircle, FaProjectDiagram, FaCommentDots, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <main className="bg-black relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "About", link: "#about", icon: <FaInfoCircle /> },
            { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
            { name: "Blogs", link: "#blogs", icon: <FaCommentDots /> },
            { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
          ]}
        />
        <Hero />
        <Grid />
        <Projects />
        <Blogs />
        <Contact />
      </div>
    </main>
  );
}
