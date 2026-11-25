
import { useState } from "react";
import CustomCursor from "./components/CustomCursor";
import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";

import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";

export default function App() {

  // Intro Animation State
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {/* INTRO ANIMATION */}
      {!introDone && (
        <IntroAnimation
          onFinish={() => setIntroDone(true)}
        />
      )}

      {/* MAIN PORTFOLIO WEBSITE */}
      {introDone && (
        <div className="relative gradient text-white">

          {/* Custom Cursor */}
          <CustomCursor />

          {/* Navigation */}
          <Navbar />

          {/* Portfolio Sections */}
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />

          {/* Footer */}
          <Footer />

        </div>
      )}
    </>
  );
}
