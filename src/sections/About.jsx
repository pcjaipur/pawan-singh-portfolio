
import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/p.jpg";


export default function About() {

  // Background glow positions
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 -right-10 w-[420px] h-[420px] opacity-15 blur-[140px]",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  // Information cards
  const infoCards = [
    {
      label: "Experience",
      value: "Software Development",
    },
    {
      label: "Specialty",
      value: "Full Stack",
    },
    {
      label: "Focus",
      value: "Performance & UX",
    },
  ];


  return (
    <section
      id="about"
      className="
        relative w-full
        bg-black text-white
        overflow-hidden
        py-24 sm:py-28
      "
    >

      {/* BACKGROUND GLOWS */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {glows.map((glow, i) => (
          <div
            key={i}
            className={`
              absolute rounded-full
              bg-gradient-to-r
              from-[#302b63]
              via-[#00bf8f]
              to-[#1cd8d2]
              animate-pulse
              ${glow}
            `}
          />
        ))}

      </div>

      {/* MAIN CONTENT */}

      <div className="
        relative z-10
        max-w-5xl w-full mx-auto
        px-6 sm:px-10
      ">

        {/* PROFILE INTRODUCTION */}

        <div className="
          flex flex-col
          md:flex-row
          items-center md:items-start
          gap-7 md:gap-6
        ">

          {/* PROFILE IMAGE WITH NEON EFFECT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.06,
              rotate: 1,
            }}
            className="
              group relative shrink-0
              w-36 h-36
              sm:w-40 sm:h-40
              rounded-xl
              cursor-pointer
              z-10
            "
          >

            {/* Neon glow */}

            <div className="
              absolute -inset-1
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-fuchsia-500
              opacity-40
              blur-md
              transition-all duration-500
              group-hover:opacity-100
              group-hover:blur-xl
              animate-pulse
            " />

            {/* Neon border */}

            <div className="
              absolute -inset-[2px]
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              via-purple-500
              to-pink-500
              opacity-50
              group-hover:opacity-100
              transition-opacity duration-500
            " />

            {/* Image */}

            <div className="
              relative w-full h-full
              rounded-xl overflow-hidden
              border border-white/20
              bg-black
            ">

              <img
                src={profileImage}
                alt="Pawan Singh - Full Stack Developer"
                className="
                  w-full h-full
                  object-cover object-center
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:brightness-110
                "
              />

            </div>

          </motion.div>

          {/* PROFILE DETAILS */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              flex-1 w-full
              text-center md:text-left
            "
          >

            {/* NAME */}

            <h1 className="
              text-3xl sm:text-4xl
              font-bold
              text-transparent bg-clip-text
              bg-gradient-to-r
              from-cyan-400 to-teal-300
              mb-1
            ">
              Pawan Singh
            </h1>

            {/* DESIGNATION */}

            <h3 className="
              text-white text-base sm:text-lg
              font-semibold mb-3
            ">
              Full Stack Developer
            </h3>

            {/* INTRODUCTION */}

            <p className="
              text-gray-300
              text-sm sm:text-base
              leading-relaxed
              max-w-3xl
            ">
              I build scalable, modern applications with a strong
              focus on clean architecture, delightful user experience,
              and performance. I enjoy turning complex ideas into
              practical digital solutions, creating responsive
              interfaces, powerful applications, and smooth
              user experiences.
            </p>

            {/* INFORMATION CARDS */}

            <div className="
              grid grid-cols-1 sm:grid-cols-3
              gap-3 mt-5 max-w-2xl
            ">

              {infoCards.map((card, index) => (

                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  whileHover={{ y: -5 }}
                  className="
                    flex flex-col
                    items-center justify-center
                    min-h-[75px]
                    px-3 py-3
                    rounded-xl
                    bg-white/[0.03]
                    border border-white/10
                    hover:border-teal-400/60
                    hover:shadow-[0_0_15px_rgba(45,212,191,0.15)]
                    transition-all duration-300
                  "
                >

                  <span className="text-gray-400 text-xs mb-1">
                    {card.label}
                  </span>

                  <span className="text-white text-sm font-bold">
                    {card.value}
                  </span>

                </motion.div>

              ))}

            </div>

            {/* ACTION BUTTONS */}

            <div className="
              flex flex-wrap
              justify-center md:justify-start
              gap-3 mt-5
            ">

              <a
                href="#projects"
                className="
                  px-5 py-2.5 rounded-lg
                  bg-white text-black
                  text-sm font-semibold
                  hover:bg-gray-200
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  px-5 py-2.5 rounded-lg
                  bg-white/10
                  border border-white/20
                  text-white text-sm font-semibold
                  hover:bg-teal-500/20
                  hover:border-teal-400
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                Get in Touch
              </a>

            </div>

          </motion.div>

        </div>

        {/* ABOUT ME */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-10 sm:mt-12
            pt-5
            border-t border-white/10
          "
        >

          <h2 className="
            text-2xl sm:text-3xl
            font-bold text-white mb-3
          ">
            About Me
          </h2>

          <p className="
            text-gray-300
            text-sm sm:text-base
            leading-relaxed
            max-w-4xl
          ">
            I'm a Software Developer passionate about building
            modern digital experiences, developing useful
            applications, and solving real-world problems
            through technology.
          </p>

          <p className="
            text-gray-400
            text-sm sm:text-base
            leading-relaxed
            mt-3 max-w-4xl
          ">
            I love turning ideas into scalable, user-friendly
            products that make an impact. My goal is to combine
            creativity, technology, and innovation to build
            meaningful digital solutions.
          </p>

        </motion.div>

      </div>

      

    </section>
  );
}
