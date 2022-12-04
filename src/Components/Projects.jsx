import React from "react";
import { motion } from "framer-motion";
import LineGradient from "./LineGradient";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overLayStyle = `absolute h-full w-full opacity-0 hover:opacity-90 transition
    duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center
    p-16 text-deep-blue`;
  const projectTite = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overLayStyle}>
        <p className="text-2xl">{title}</p>
        <p className="mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, pariatur
          Lorem ipsum dolor sit amet consectetur adipisicing elit, pariatur?
        </p>
      </div>
      <img src={require(`../assets/${projectTite}.jpeg`)} alt={projectTite} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="text-4xl font-semibold">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          iusto expedita perferendis? Ipsam, quae repudiandae!
        </p>
      </motion.div>
      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="grid grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
            max-w-[400px] max-h-[400] text-2xl font font-semibold"
          >
            BEAUTIFUL USER INTERFACE
          </div>
          <Project title='Project 1'/>
          <Project title='Project 2'/>

          {/* ROW 2 */}
          <Project title='Project 3'/>
          <Project title='Project 4'/>
          <Project title='Project 5'/>

          {/* ROW 3 */}
          <Project title='Project 6'/>
          <Project title='Project 7'/>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
            max-w-[400px] max-h-[400] text-2xl font font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
