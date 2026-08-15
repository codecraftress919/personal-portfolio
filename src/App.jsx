import React, { useEffect, useState } from "react";
import Background from "./components/Background";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const sections = ["home", "about", "skills", "projects", "experience", "contact"];

function useActiveSection() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const sectionEls = sections.map((id) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const capitalized = visible[0].target.id.charAt(0).toUpperCase() + visible[0].target.id.slice(1);
          setActive(capitalized);
        }
      },
      { threshold: [0.2, 0.4, 0.7], rootMargin: "-10% 0px -35% 0px" }
    );

    sectionEls.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function App() {
  const activeSection = useActiveSection();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <Background />
      <CustomCursor />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}