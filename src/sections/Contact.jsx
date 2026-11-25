
import React, { useState } from "react";
import { motion } from "framer-motion";

import ParticlesBackground from "../components/ParticlesBackground";
import Astronaut from "../assets/Astra.png";


// CONTACT COMPONENT
export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");


  // HANDLE INPUT CHANGES
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };


  // HANDLE FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual email address
    const contactEmail = "pawan.ursstech@gmail.com";

    const subject = encodeURIComponent(
      `Portfolio Contact: ${formData.service}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Service Needed: ${formData.service}\n\n` +
      `Project Details:\n${formData.message}`
    );

    window.location.href =
      `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    setStatus("Your email application is opening.");
  };


  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        w-full
        bg-black
        text-white
        overflow-hidden
        flex items-center
        justify-center
        px-5 sm:px-8
        py-20
      "
    >

      {/* PARTICLES BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>


      {/* PURPLE AMBIENT GLOW */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-72 h-72
          sm:w-[450px] sm:h-[450px]
          rounded-full
          bg-purple-700/10
          blur-[120px]
          pointer-events-none
        "
      />


      {/* CYAN GLOW */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-72 h-72
          rounded-full
          bg-cyan-500/10
          blur-[120px]
          pointer-events-none
        "
      />


      {/* MAIN CONTENT */}
      <div
        className="
          relative z-10
          w-full
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12 lg:gap-16
          items-center
        "
      >


        {/* LEFT SIDE - ASTRONAUT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            relative
            flex
            items-center
            justify-center
            min-h-[300px]
            sm:min-h-[400px]
            order-2 lg:order-1
          "
        >

          {/* ASTRONAUT BACKGROUND GLOW */}
          <div
            className="
              absolute
              w-64 h-64
              sm:w-80 sm:h-80
              rounded-full
              bg-purple-600/15
              blur-[90px]
            "
          />


          {/* FLOATING ASTRONAUT IMAGE */}
          <motion.img
            src={Astronaut}
            alt="Astronaut illustration"
            animate={{
              y: [0, -18, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.06,
            }}
            className="
              relative z-10
              w-full
              max-w-[260px]
              sm:max-w-[360px]
              lg:max-w-[430px]
              h-auto
              object-contain
              drop-shadow-[0_0_35px_rgba(124,58,237,0.25)]
            "
          />

        </motion.div>



        {/* RIGHT SIDE - CONTACT FORM */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            order-1 lg:order-2
            w-full
          "
        >

          {/* FORM CONTAINER */}
          <div
            className="
              relative
              w-full
              rounded-2xl
              border border-white/10
              bg-[#0c0c0c]/90
              backdrop-blur-xl
              p-6 sm:p-8
              shadow-[0_0_40px_rgba(0,0,0,0.5)]
              hover:border-cyan-400/30
              transition-all duration-500
            "
          >

            {/* FORM TOP GLOW */}
            <div
              className="
                absolute
                top-0 left-10 right-10
                h-[1px]
                bg-gradient-to-r
                from-transparent
                via-cyan-400/60
                to-transparent
              "
            />


            {/* HEADING */}
            <h2
              className="
                text-2xl sm:text-3xl
                font-bold
                text-white
                mb-7
              "
            >
              Let's Work Together
            </h2>


            {/* CONTACT FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="
                    block
                    text-sm
                    font-medium
                    text-gray-200
                    mb-2
                  "
                >
                  Your Name
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="
                    w-full
                    rounded-lg
                    border border-gray-600
                    bg-[#262626]
                    px-4 py-3
                    text-sm
                    text-white
                    placeholder:text-gray-400
                    outline-none
                    transition-all duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    hover:border-gray-400
                  "
                />
              </div>


              {/* EMAIL */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="
                    block
                    text-sm
                    font-medium
                    text-gray-200
                    mb-2
                  "
                >
                  Your Email
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="
                    w-full
                    rounded-lg
                    border border-gray-600
                    bg-[#262626]
                    px-4 py-3
                    text-sm
                    text-white
                    placeholder:text-gray-400
                    outline-none
                    transition-all duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    hover:border-gray-400
                  "
                />
              </div>


              {/* SERVICE SELECT */}
              <div>
                <label
                  htmlFor="contact-service"
                  className="
                    block
                    text-sm
                    font-medium
                    text-gray-200
                    mb-2
                  "
                >
                  Service Needed
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    rounded-lg
                    border border-gray-600
                    bg-[#262626]
                    px-4 py-3
                    text-sm
                    text-white
                    outline-none
                    transition-all duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    hover:border-gray-400
                  "
                >
                  <option value="" disabled>
                    Something in mind?
                  </option>

                  <option value="Web Development">
                    Web Development
                  </option>

                  <option value="Frontend Development">
                    Frontend Development
                  </option>

                  <option value="React Development">
                    React Development
                  </option>

                  <option value="UI/UX Design">
                    UI/UX Design
                  </option>

                  <option value="Full Stack Development">
                    Full Stack Development
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>


              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="
                    block
                    text-sm
                    font-medium
                    text-gray-200
                    mb-2
                  "
                >
                  Explain Your Idea
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Explain your idea..."
                  rows="5"
                  required
                  className="
                    w-full
                    min-h-[120px]
                    rounded-lg
                    border border-gray-600
                    bg-[#262626]
                    px-4 py-3
                    text-sm
                    text-white
                    placeholder:text-gray-400
                    outline-none
                    resize-y
                    transition-all duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    hover:border-gray-400
                  "
                />
              </div>


              {/* SUBMIT BUTTON */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  relative
                  w-full
                  py-3.5
                  rounded-lg
                  overflow-hidden
                  bg-gradient-to-r
                  from-blue-600
                  via-blue-500
                  to-cyan-500
                  text-white
                  text-sm
                  font-bold
                  shadow-[0_0_20px_rgba(37,99,235,0.25)]
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
                  transition-all duration-300
                "
              >
                <span className="relative z-10">
                  Send Message
                </span>
              </motion.button>


              {/* SUBMISSION STATUS */}
              {status && (
                <p className="text-xs text-cyan-300 text-center">
                  {status}
                </p>
              )}

            </form>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
