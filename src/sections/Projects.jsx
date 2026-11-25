
import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
} from "react";

import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

// PROJECT IMAGES
import img1 from "../assets/img1.JPG";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";

import photo1 from "../assets/photo1.JPG";
import photo2 from "../assets/photo2.PNG";
import photo3 from "../assets/photo3.png";


// MOBILE DETECTION HOOK
const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(() => {
    return (
      typeof window !== "undefined" &&
      window.matchMedia(query).matches
    );
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);

    const handler = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mql.matches);

    mql.addEventListener("change", handler);

    return () => {
      mql.removeEventListener("change", handler);
    };
  }, [query]);

  return isMobile;
};


// PROJECTS COMPONENT
export default function Projects() {
  const isMobile = useIsMobile();

  const sceneRef = useRef(null);


  // PROJECT DATA
  const projects = useMemo(
    () => [
      {
        title: "NK Studio",
        link: "https://www.nk.studio",
        bgColor: "#0d4d3d",
        image: isMobile ? photo1 : img1,
      },

      {
        title: "Gamily",
        link: "https://familyapp.com/",
        bgColor: "#3884d3",
        image: isMobile ? photo2 : img2,
      },

      {
        title: "Hungry Tiger",
        link: "https://www.eathungrytiger.com/",
        bgColor: "#dc9317",
        image: isMobile ? photo3 : img3,
      },
    ],
    [isMobile]
  );


  // SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });


  // PROJECT THRESHOLDS
  const thresholds = projects.map(
    (_, index) => (index + 1) / projects.length
  );


  // ACTIVE PROJECT STATE
  const [activeIndex, setActiveIndex] = useState(0);


  // UPDATE ACTIVE PROJECT ON SCROLL
  useMotionValueEvent(
    scrollYProgress,
    "change",
    (value) => {
      const index = thresholds.findIndex(
        (threshold) => value <= threshold
      );

      const newIndex =
        index === -1 ? projects.length - 1 : index;

      setActiveIndex((previousIndex) =>
        previousIndex === newIndex
          ? previousIndex
          : newIndex
      );
    }
  );


  // CURRENT ACTIVE PROJECT
  const activeProject = projects[activeIndex];


  // JSX
  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative w-full min-h-[300vh] bg-black text-white"
    >

      <div className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-6 py-12 sm:py-20">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            className="
              text-4xl sm:text-5xl
              font-extrabold
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-cyan-400
              via-teal-300
              to-indigo-500
            "
          >
            My Projects
          </h2>

          <p
            className="
              mt-3
              text-slate-300
              text-sm sm:text-lg
            "
          >
            Creative Ideas | Real World Applications
          </p>
        </motion.div>


        {/* ACTIVE PROJECT */}
        <motion.div
          key={activeProject.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            w-full max-w-4xl
            min-h-[280px] sm:min-h-[350px]
            rounded-3xl
            flex flex-col
            items-center justify-center
            gap-5 sm:gap-6
            p-5 sm:p-8
            shadow-2xl
          "
          style={{
            backgroundColor: activeProject.bgColor,
          }}
        >

          {/* PROJECT TITLE */}
          <h3
            className="
              text-3xl sm:text-5xl
              font-bold
              text-white
              text-center
            "
          >
            {activeProject.title}
          </h3>


          {/* PROJECT IMAGE */}
          <img
            src={activeProject.image}
            alt={`${activeProject.title} project preview`}
            className="
              w-full max-w-3xl
              max-h-[40vh]
              h-48 sm:h-64 md:h-80
              object-contain
              rounded-xl
            "
          />


          {/* PROJECT LINK */}
          <a
            href={activeProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3
              rounded-full
              bg-white
              text-black
              font-semibold
              hover:bg-slate-200
              transition-colors
            "
          >
            View Project
          </a>

        </motion.div>


        {/* PROJECT INDICATORS */}
        <div className="flex items-center gap-3 mt-8">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`
                h-2 rounded-full
                transition-all duration-300
                ${
                  activeIndex === index
                    ? "w-10 bg-cyan-400"
                    : "w-3 bg-slate-600"
                }
              `}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
