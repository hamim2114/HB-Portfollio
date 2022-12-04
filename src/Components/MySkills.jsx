import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "./LineGradient";
import skillsImg from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-1 pb-34">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-4xl font-bold mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            officiis, doloremque unde aliquam corrupti architecto?
          </p>
        </motion.div>
        <div className="mt-16 md:mt-o">
          {isAboveMediumScreen ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10
                before:-left-10 before:w-full before:h-full before:border-2
                before:border-blue before:z-[-1]"
            >
              <img src={skillsImg} alt="skills" />
            </div>
          ) : (
            <img className="z-10" src={skillsImg} alt="skills" />
          )}
        </div>
      </div>
      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="text-5xl">01</p>
              <p className="text-3xl mt-3">Experience</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Fugiat tempore totam vel corporis.
          </p>
        </motion.div>

          {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="text-5xl">01</p>
              <p className="text-3xl mt-3">INNOVATIVE</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Fugiat tempore totam vel corporis.
          </p>
        </motion.div>
          
          {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="text-5xl">01</p>
              <p className="text-3xl mt-3">IMAGINATIVE</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Fugiat tempore totam vel corporis.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
