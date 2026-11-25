
import React from "react";
import { motion } from "framer-motion";

import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";


// SOCIAL MEDIA LINKS
const socialLinks = [
  {
    name: "X",
    icon: FaXTwitter,
    url: "https://x.com/PawanCh17889473",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/pawan-singh-b858b645/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/pcjaipur",
  },
];


// FOOTER COMPONENT
export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        w-full
        min-h-[260px]
        bg-black
        text-white
        overflow-hidden
        flex items-center justify-center
        px-5 py-12
      "
    >

      {/* LEFT GREEN AMBIENT GLOW */}
      <div
        className="
          absolute
          left-[-8%]
          top-1/2
          -translate-y-1/2
          w-[420px]
          h-[220px]
          rounded-full
          bg-emerald-500/15
          blur-[100px]
          pointer-events-none
        "
      />


      {/* RIGHT BLUE AMBIENT GLOW */}
      <div
        className="
          absolute
          right-[-8%]
          top-0
          w-[420px]
          h-[220px]
          rounded-full
          bg-blue-600/20
          blur-[110px]
          pointer-events-none
        "
      />


      {/* PURPLE CENTER GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[250px]
          h-[150px]
          rounded-full
          bg-purple-600/10
          blur-[100px]
          pointer-events-none
        "
      />


      {/* FOOTER CONTENT */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          relative z-10
          w-full
          max-w-4xl
          mx-auto
          flex flex-col
          items-center
          text-center
        "
      >

        {/* NAME */}
        <motion.a
          href="#home"
          whileHover={{
            scale: 1.03,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-extrabold
            tracking-wide
            text-white
            drop-shadow-[0_0_15px_rgba(59,130,246,0.15)]
          "
        >
          Pawan Singh
        </motion.a>


        {/* GRADIENT UNDERLINE */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: "90px",
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            h-[3px]
            mt-4
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            via-teal-300
            to-indigo-500
            shadow-[0_0_12px_rgba(45,212,191,0.5)]
          "
        />


        {/* SOCIAL ICONS */}
        <div className="flex items-center justify-center gap-5 mt-5">

          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                whileHover={{
                  y: -5,
                  scale: 1.15,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="
                  text-gray-300
                  hover:text-cyan-400
                  transition-colors
                  duration-300
                "
              >
                <Icon size={22} />
              </motion.a>
            );
          })}

        </div>


        {/* MOTIVATIONAL QUOTE */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="
            mt-5
            text-xs
            sm:text-sm
            italic
            text-gray-300
            tracking-wide
          "
        >
          "Success is when preparation meets opportunity."
        </motion.p>


        {/* COPYRIGHT */}
        <p
          className="
            mt-5
            text-[10px]
            sm:text-xs
            text-gray-400
            tracking-wide
          "
        >
          © {currentYear} Pawan Singh. All rights reserved.
        </p>

      </motion.div>

    </footer>
  );
}
