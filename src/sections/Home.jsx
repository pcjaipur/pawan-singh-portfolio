
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import avator from "../assets/avator.png";
import ParticlesBackground from "../components/ParticlesBackground";

import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

// Developer roles
const roles = [
  "Software Developer",
  "Full Stack Developer",
  "Web Developer",
  "Android Developer",
  "React Developer",
  "Frontend Developer",
];

export default function Home() {
  // Typewriter states
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter animation
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 45);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* ================================== */}
      {/* MOVING PARTICLES BACKGROUND        */}
      {/* ================================== */}

      <ParticlesBackground />

      {/* ================================== */}
      {/* BACKGROUND GLOW EFFECTS            */}
      {/* ================================== */}

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        {/* Top Left Glow */}
        <div
          className="
            absolute -top-32 -left-32
            w-[70vw] h-[70vw]
            sm:w-[50vw] sm:h-[50vw]
            md:w-[40vw] md:h-[40vw]
            max-w-[500px] max-h-[500px]
            rounded-full
            bg-gradient-to-r
            from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-30 sm:opacity-20 md:opacity-10
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse
          "
        />

        {/* Bottom Right Glow */}
        <div
          className="
            absolute bottom-0 right-0
            w-[70vw] h-[70vw]
            sm:w-[50vw] sm:h-[50vw]
            md:w-[40vw] md:h-[40vw]
            max-w-[500px] max-h-[500px]
            rounded-full
            bg-gradient-to-r
            from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-30 sm:opacity-20 md:opacity-10
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse
          "
        />

        {/* Right Purple Glow */}
        <div
          className="
            absolute top-1/3 -right-40
            w-[400px] h-[400px]
            rounded-full
            bg-gradient-to-r from-purple-600 to-pink-500
            opacity-10 blur-[140px]
            animate-pulse
          "
        />
      </div>

      {/* ================================== */}
      {/* MAIN TWO COLUMN HERO LAYOUT        */}
      {/* ================================== */}

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          min-h-screen
          px-6 sm:px-10 lg:px-12
          pt-24 pb-12
          grid grid-cols-1
          lg:grid-cols-[1.05fr_0.95fr]
          items-center
          gap-8 lg:gap-4
        "
      >

        {/* ================================== */}
        {/* LEFT SIDE - TEXT CONTENT           */}
        {/* ================================== */}

        <div className="relative z-10 w-full max-w-2xl text-center lg:text-left">

          {/* Developer Role - White Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-lg sm:text-xl md:text-2xl
              font-bold text-white
              mb-5 min-h-[35px]
            "
          >
            {displayText}
            <span className="text-white animate-pulse">|</span>
          </motion.div>

          {/* Hello I'm */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              text-4xl sm:text-5xl md:text-6xl
              font-bold
              text-transparent bg-clip-text
              bg-gradient-to-r from-teal-300 to-cyan-400
              mb-2
            "
          >
            Hello, I'm
          </motion.h2>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              text-5xl sm:text-6xl md:text-7xl
              font-extrabold text-white
              tracking-tight mb-5
            "
          >
            Pawan Singh
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="
              text-gray-300
              text-base sm:text-lg
              leading-relaxed
              max-w-xl
              mb-8
            "
          >
            I turn complex ideas into seamless, high-impact
            web experiences — building modern, scalable,
            and lightning-fast applications that make a difference.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="
              flex flex-wrap
              items-center
              justify-center lg:justify-start
              gap-4 mb-9
            "
          >
            {/* View My Work */}
            <a
              href="#projects"
              className="
                px-7 py-3 rounded-full
                text-white font-semibold
                bg-gradient-to-r from-cyan-400 to-teal-400
                shadow-lg shadow-cyan-500/30
                hover:scale-105
                hover:shadow-cyan-400/50
                transition-all duration-300
              "
            >
              View My Work
            </a>

            {/* My Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-7 py-3 rounded-full
                bg-white text-black
                font-semibold
                hover:bg-gray-200
                hover:scale-105
                transition-all duration-300
              "
            >
              My Resume
            </a>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="
              flex items-center
              justify-center lg:justify-start
              gap-6
            "
          >
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Twitter"
              className="
                text-white text-2xl
                hover:text-cyan-400
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                text-white text-2xl
                hover:text-cyan-400
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                text-white text-2xl
                hover:text-cyan-400
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <FaGithub />
            </a>
          </motion.div>

        </div>

        {/* ================================== */}
        {/* RIGHT SIDE - ROBOT AVATAR          */}
        {/* ================================== */}

        <div
          className="
            relative w-full
            min-h-[380px]
            sm:min-h-[480px]
            lg:min-h-[580px]
            flex items-center justify-center
            lg:justify-end
          "
        >

          {/* Continuously Animated Gradient Glow */}
          <motion.div
            className="
              absolute
              w-[270px] h-[270px]
              sm:w-[380px] sm:h-[380px]
              lg:w-[480px] lg:h-[480px]
              rounded-full
              bg-gradient-to-br
              from-cyan-400 via-blue-600 to-purple-600
              blur-[65px] sm:blur-[85px]
            "
            animate={{
              opacity: [0.18, 0.48, 0.25, 0.5, 0.18],
              scale: [0.85, 1.1, 0.95, 1.12, 0.85],
              rotate: [0, 45, 90, 135, 180],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Secondary Cyan Glow */}
          <motion.div
            className="
              absolute
              w-[220px] h-[220px]
              sm:w-[300px] sm:h-[300px]
              rounded-full
              bg-gradient-to-r
              from-teal-400 to-cyan-500
              blur-[90px]
            "
            animate={{
              opacity: [0.1, 0.35, 0.1],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Robot Avatar Image */}
          <motion.img
            src={avator}
            alt="Pawan Singh Developer Robot Avatar"
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              relative z-10
              w-full
              max-w-[310px]
              sm:max-w-[420px]
              lg:max-w-[530px]
              h-[380px]
              sm:h-[480px]
              lg:h-[570px]
              object-contain
              object-bottom
              drop-shadow-[0_0_30px_rgba(0,200,255,0.2)]
            "
          />

        </div>

      </div>

    </section>
  );
}
