
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";


// EXPERIENCE DATA
const experience = [
  {
    role: "Web Developer Intern",
    company: "Brain Mentors",
    duration: "2021",
    description:
      "Gained hands-on web development experience.",
  },
  {
    role: "Web Developer",
    company: "Data Integrated Solutions",
    duration: "2022-2023",
    description:
      "Built high-performance apps, integrated AI features, and improved engagement by 10%.",
  },
  {
    role: "Web Developer",
    company: "Chiklick Softech",
    duration: "2024",
    description:
      "Built the frontend of a GenAI-powered PV Intake App with Next.js and TypeScript for a US client.",
  },
];


// EXPERIENCE ITEM COMPONENT
function ExperienceItem({
  exp,
  idx,
  start,
  end,
  scrollYProgress,
  layout,
}) {
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [0.5, 1]
  );

  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    [0, 1]
  );

  const y = useTransform(
    scrollYProgress,
    [start, end],
    [idx % 2 === 0 ? 30 : -30, 0]
  );

  const x = useTransform(
    scrollYProgress,
    [start, end],
    [-24, 0]
  );


  // DESKTOP TIMELINE ITEM
  if (layout === "desktop") {
    return (
      <div className="relative flex flex-1 justify-center items-center min-w-0 h-[440px]">

        {/* TIMELINE DOT */}
        <motion.div
          className="
            absolute top-1/2 -translate-y-1/2
            z-20
            w-7 h-7
            rounded-full
            bg-white
            shadow-[0_0_0_8px_rgba(255,255,255,0.1)]
          "
          style={{ scale, opacity }}
        />


        {/* CONNECTOR LINE */}
        <motion.div
          className={`
            absolute w-[2px]
            bg-white/40
            ${
              idx % 2 === 0
                ? "bottom-1/2 h-10"
                : "top-1/2 h-10"
            }
          `}
          style={{ opacity }}
        />


        {/* EXPERIENCE CARD */}
        <motion.article
          className={`
            absolute
            ${
              idx % 2 === 0
                ? "bottom-[58%]"
                : "top-[58%]"
            }
            bg-gray-900/90
            backdrop-blur
            border border-gray-700/70
            rounded-xl
            p-5 sm:p-6
            w-[300px]
            max-w-[90vw]
            shadow-xl
          `}
          style={{
            opacity,
            y,
          }}
        >
          <h3 className="text-xl font-semibold text-white">
            {exp.role}
          </h3>

          <p className="text-sm text-gray-400 mb-3">
            {exp.company} | {exp.duration}
          </p>

          <p className="text-sm text-gray-300 leading-relaxed break-words">
            {exp.description}
          </p>
        </motion.article>

      </div>
    );
  }


  // MOBILE TIMELINE ITEM
  return (
    <div className="relative flex items-start min-h-[150px]">

      {/* TIMELINE DOT */}
      <motion.div
        className="
          absolute
          -left-[14px]
          top-3
          z-10
          w-7 h-7
          rounded-full
          bg-white
          shadow-[0_0_0_8px_rgba(255,255,255,0.1)]
        "
        style={{ scale, opacity }}
      />


      {/* EXPERIENCE CARD */}
      <motion.article
        className="
          bg-gray-900/90
          backdrop-blur
          border border-gray-700/70
          rounded-xl
          p-5
          w-full
          max-w-sm
          ml-6
          shadow-xl
        "
        style={{
          opacity,
          x,
        }}
      >
        <h3 className="text-lg font-semibold text-white break-words">
          {exp.role}
        </h3>

        <p className="text-sm text-gray-400 mb-2 break-words">
          {exp.company} | {exp.duration}
        </p>

        <p className="text-sm text-gray-300 leading-relaxed break-words">
          {exp.description}
        </p>
      </motion.article>

    </div>
  );
}


// MAIN EXPERIENCE COMPONENT
export default function Experience() {
  const sceneRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);


  // MOBILE DETECTION
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);


  // SCENE HEIGHT
  const sceneHeightVh = isMobile
    ? 160 * experience.length
    : 120 * experience.length;


  // SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });


  // EXPERIENCE THRESHOLDS
  const thresholds = useMemo(
    () =>
      experience.map(
        (_, index) => (index + 1) / experience.length
      ),
    []
  );


  // TIMELINE PROGRESS
  const lineSize = useTransform(
    scrollYProgress,
    (value) => `${value * 100}%`
  );


  // ACTIVE EXPERIENCE
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (value) => {
      const index = thresholds.findIndex(
        (threshold) => value <= threshold
      );

      const newIndex =
        index === -1
          ? experience.length - 1
          : index;

      setActiveIndex((previousIndex) =>
        previousIndex === newIndex
          ? previousIndex
          : newIndex
      );
    }
  );


  // JSX
  return (
    <section
      id="experience"
      ref={sceneRef}
      className="relative bg-black text-white"
      style={{
        height: `${sceneHeightVh}vh`,
      }}
    >

      <div className="
        sticky top-0
        h-screen
        flex flex-col
        justify-center
        overflow-hidden
        px-5 sm:px-8
        py-8
      ">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="
            text-4xl sm:text-5xl
            font-extrabold
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-cyan-400
            via-teal-300
            to-indigo-500
          ">
            My Experience
          </h2>

          <p className="mt-3 text-sm sm:text-lg text-gray-400">
            My Professional Journey
          </p>
        </motion.div>


        {/* DESKTOP TIMELINE */}
        {!isMobile && (
          <div className="relative w-full max-w-7xl mx-auto">

            {/* TIMELINE BACKGROUND */}
            <div className="
              absolute
              top-1/2
              left-0
              w-full
              h-[6px]
              -translate-y-1/2
              bg-white/15
              rounded-full
            " />

            {/* TIMELINE PROGRESS */}
            <motion.div
              className="
                absolute
                top-1/2
                left-0
                h-[6px]
                -translate-y-1/2
                bg-white
                rounded-full
                origin-left
                z-10
              "
              style={{
                width: lineSize,
              }}
            />

            {/* EXPERIENCE ITEMS */}
            <div className="relative flex justify-between">
              {experience.map((exp, idx) => (
                <ExperienceItem
                  key={idx}
                  exp={exp}
                  idx={idx}
                  start={
                    idx === 0
                      ? 0
                      : thresholds[idx - 1]
                  }
                  end={thresholds[idx]}
                  scrollYProgress={scrollYProgress}
                  layout="desktop"
                />
              ))}
            </div>

          </div>
        )}


        {/* MOBILE TIMELINE */}
        {isMobile && (
          <div className="
            relative
            w-full
            max-w-md
            mx-auto
            pl-3
            overflow-visible
          ">

            {/* VERTICAL TIMELINE BACKGROUND */}
            <div className="
              absolute
              left-[13px]
              top-3
              bottom-3
              w-[3px]
              bg-white/15
              rounded-full
            " />

            {/* VERTICAL TIMELINE PROGRESS */}
            <motion.div
              className="
                absolute
                left-[13px]
                top-3
                w-[3px]
                bg-white
                rounded-full
                origin-top
              "
              style={{
                height: lineSize,
              }}
            />

            {/* EXPERIENCE ITEMS */}
            <div className="relative flex flex-col gap-5">
              {experience.map((exp, idx) => (
                <ExperienceItem
                  key={idx}
                  exp={exp}
                  idx={idx}
                  start={
                    idx === 0
                      ? 0
                      : thresholds[idx - 1]
                  }
                  end={thresholds[idx]}
                  scrollYProgress={scrollYProgress}
                  layout="mobile"
                />
              ))}
            </div>

          </div>
        )}

      </div>

    </section>
  );
}
