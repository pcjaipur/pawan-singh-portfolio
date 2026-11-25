
import React, { useState } from "react";
import { motion } from "framer-motion";

import { FaJava, FaReact } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiFastapi,
  SiPython,
  SiDocker,
  SiMongodb,
  SiAngular,
} from "react-icons/si";

import { DiNodejsSmall } from "react-icons/di";

export default function Skills() {

  const [direction, setDirection] = useState("left");

  // Skills Data
  const skills = [
    { icon: FaJava, name: "Java", color: "#ED8B00" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiFastapi, name: "FastAPI", color: "#009688" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: DiNodejsSmall, name: "Node.js", color: "#5FA04E" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiAngular, name: "Angular", color: "#DD0031" },
  ];

  // Duplicate skills for infinite scrolling
  const scrollingSkills = [...skills, ...skills];

  return (

    <section
      id="skills"
      className="
        relative w-full
        bg-black text-white
        overflow-hidden
        py-16 sm:py-20
      "
    >

      {/* BACKGROUND GLOW EFFECTS */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div
          className="
            absolute top-1/4 left-0
            w-[300px] h-[300px]
            rounded-full
            bg-gradient-to-r
            from-slate-400 via-cyan-500 to-slate-300
            opacity-10 blur-[120px]
            animate-pulse
          "
        />

        <div
          className="
            absolute bottom-1/4 right-0
            w-[300px] h-[300px]
            rounded-full
            bg-gradient-to-r
            from-slate-300 via-blue-400 to-slate-500
            opacity-10 blur-[120px]
            animate-pulse
          "
        />

      </div>


      {/* SECTION HEADING */}

      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center mb-10"
      >

        <h2
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-extrabold
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-cyan-400
            via-teal-300
            to-indigo-500
            drop-shadow-[0_0_15px_rgba(34,211,238,0.55)]
          "
        >
          My Skills
        </h2>

        <p
          className="
            mt-3
            text-sm sm:text-base md:text-lg
            font-medium
            tracking-wide
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-slate-200
            via-slate-400
            to-slate-200
            drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]
          "
        >
          Modern Technologies | Modern Applications
        </p>

      </motion.div>


      {/* INTERACTIVE ANIMATED SKILLS STRIP */}

      <div
        className="
          relative z-10
          w-full mt-12
          py-8
          overflow-hidden
          group
        "
        onMouseMove={(e) => {

          const rect = e.currentTarget.getBoundingClientRect();

          const mouseY = e.clientY - rect.top;

          if (mouseY < rect.height / 2) {
            setDirection("right");
          } else {
            setDirection("left");
          }

        }}
        onMouseLeave={() => setDirection("left")}
      >

        {/* LEFT FADE */}

        <div
          className="
            absolute left-0 top-0 bottom-0
            w-16 sm:w-28
            z-20 pointer-events-none
            bg-gradient-to-r
            from-black to-transparent
          "
        />


        {/* RIGHT FADE */}

        <div
          className="
            absolute right-0 top-0 bottom-0
            w-16 sm:w-28
            z-20 pointer-events-none
            bg-gradient-to-l
            from-black to-transparent
          "
        />


        {/* INFINITE ICON MOVEMENT */}

        <motion.div
          className="flex w-max items-center"
          animate={{
            x: direction === "left"
              ? ["0%", "-50%"]
              : ["-50%", "0%"],
          }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >

          {scrollingSkills.map((skill, index) => {

            const Icon = skill.icon;

            return (

              <div
                key={`${skill.name}-${index}`}
                className="
                  group/skill
                  flex flex-col
                  items-center justify-center
                  shrink-0
                  w-[110px] sm:w-[135px]
                  py-3
                  cursor-pointer
                  transition-all duration-300
                "
              >

                {/* ORIGINAL BRAND COLOR ICON */}

                <motion.div
                  whileHover={{
                    scale: 1.3,
                    y: -5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  style={{
                    color: skill.color,
                  }}
                  className="
                    text-[35px] sm:text-[43px]
                    drop-shadow-[0_0_10px_rgba(34,211,238,0.25)]
                    group-hover/skill:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]
                    transition-all duration-300
                  "
                >

                  <Icon />

                </motion.div>


                {/* TECHNOLOGY NAME */}

                <span
                  className="
                    mt-3
                    text-xs sm:text-sm
                    font-medium
                    tracking-wide
                    text-cyan-300
                    whitespace-nowrap
                    group-hover/skill:text-white
                    transition-colors duration-300
                  "
                >
                  {skill.name}

                </span>

              </div>

            );

          })}

        </motion.div>

      </div>

    </section>

  );

}
