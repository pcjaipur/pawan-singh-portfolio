
import React from "react";
import { motion } from "framer-motion";

import m1 from "../assets/m1.PNG";
import m2 from "../assets/m2.PNG";
import w1 from "../assets/w1.PNG";
import w2 from "../assets/w2.PNG";


// TESTIMONIAL DATA
const testimonials = [
  {
    name: "Rajesh Choudhary",
    role: "Software Engineer",
    company: "Brain Mentors",
    image: m1,
    quote:
      "Working together was an excellent experience. The attention to detail, creativity, and dedication made the entire project successful.",
  },
  {
    name: "Sharddha Shukla",
    role: "UI/UX Designer",
    company: "Brain Mentors",
    image: w1,
    quote:
      "A talented developer with a strong understanding of modern design and development. The final result exceeded expectations.",
  },
  {
    name: "Kartikey",
    role: "Project Manager",
    company: "Data Integrated Solutions Pvt ltd.",
    image: m2,
    quote:
      "From planning to execution, everything was handled professionally. Great communication, innovative ideas, and quality work.",
  },
  {
    name: "Nandini Ahuja",
    role: "Business Owner",
    company: "Chiklick SOftech",
    image: w2,
    quote:
      "The ability to transform ideas into functional digital experiences is impressive. Highly appreciated the dedication and effort.",
  },
];


// ANIMATION VARIANTS
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};


// TESTIMONIAL CARD
function TestimonialCard({ item, index }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="
        group relative
        rounded-2xl
        p-[1px]
        overflow-hidden
        bg-gray-700/70
        hover:bg-gradient-to-r
        hover:from-cyan-400
        hover:via-teal-400
        hover:to-indigo-500
        transition-all duration-500
      "
    >

      {/* GRADIENT GLOW */}
      <div
        className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          bg-gradient-to-r
          from-cyan-500/20
          via-teal-400/20
          to-indigo-500/20
          blur-xl
          transition-opacity duration-500
        "
      />


      {/* CARD CONTENT */}
      <div
        className="
          relative h-full
          min-h-[250px]
          rounded-2xl
          bg-[#1b1b1b]
          px-6 py-7 sm:px-8
          flex flex-col
          items-center
          justify-center
          text-center
          overflow-hidden
        "
      >

        {/* SUBTLE CARD GLOW */}
        <div
          className="
            absolute -top-20 -right-20
            w-40 h-40
            rounded-full
            bg-purple-600/10
            blur-3xl
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-500
          "
        />


        {/* PROFILE IMAGE */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="
            relative z-10
            w-[68px] h-[68px]
            rounded-full
            p-[2px]
            bg-gradient-to-r
            from-cyan-400
            via-teal-300
            to-indigo-500
            mb-5
          "
        >
          <img
            src={item.image}
            alt={item.name}
            className="
              w-full h-full
              rounded-full
              object-cover
              border-2 border-[#1b1b1b]
            "
          />
        </motion.div>


        {/* QUOTE */}
        <p
          className="
            relative z-10
            text-gray-300
            text-sm sm:text-[15px]
            leading-relaxed
            italic
            mb-5
            max-w-md
          "
        >
          "{item.quote}"
        </p>


        {/* CLIENT NAME */}
        <h3
          className="
            relative z-10
            text-white
            font-bold
            text-base
            mb-1
            group-hover:text-cyan-300
            transition-colors duration-300
          "
        >
          {item.name}
        </h3>


        {/* DESIGNATION */}
        <p
          className="
            relative z-10
            text-gray-400
            text-xs sm:text-sm
          "
        >
          {item.role} at {item.company}
        </p>

      </div>
    </motion.div>
  );
}


// MAIN TESTIMONIALS COMPONENT
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        relative
        w-full
        min-h-screen
        bg-black
        text-white
        py-20 sm:py-24
        px-5 sm:px-8
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW - LEFT */}
      <div
        className="
          absolute
          -top-20 -left-32
          w-80 h-80
          rounded-full
          bg-cyan-500/10
          blur-[120px]
          pointer-events-none
        "
      />

      {/* BACKGROUND GLOW - RIGHT */}
      <div
        className="
          absolute
          top-1/3 -right-32
          w-80 h-80
          rounded-full
          bg-purple-600/10
          blur-[120px]
          pointer-events-none
        "
      />


      {/* SECTION CONTENT */}
      <div className="
        relative z-10
        max-w-5xl
        mx-auto
      ">

        {/* SECTION HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: -25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center mb-12 sm:mb-14"
        >

          <h2
            className="
              text-3xl sm:text-4xl
              font-extrabold
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-cyan-400
              via-teal-300
              to-indigo-500
            "
          >
            What People Say
          </h2>

          <p
            className="
              mt-3
              text-gray-400
              text-sm sm:text-base
            "
          >
            Feedback and experiences from people I've worked with.
          </p>

        </motion.div>


        {/* TESTIMONIAL GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6 sm:gap-7
          "
        >

          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              item={item}
              index={index}
            />
          ))}

        </motion.div>

      </div>

    </section>
  );
}
