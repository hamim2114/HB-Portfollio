import React from "react";
import "animate.css";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import profileImage from "../assets/profile-image.png";
import SocialMediaIcon from "../Components/SocialMediaIcon";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreen ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
            before:w-full before:max-w-[400px] before:h-full
            before:border-2 before:border-blue before:z-[-1] "
          >
            <img
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
            max-w-[700px] md:max-w-[1000px] animate__animated animate__zoomIn"
              src={profileImage}
              alt="profile"
            />
          </div>
        ) : (
          <img
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
          max-w-[300px] md:max-w-[400px] animate__animated animate__zoomIn"
            src={profileImage}
            alt="profile"
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-bold z-10 text-center md:text-start animate__animated animate__jackInTheBox">
            Miss {""}
            <span
              className="xs:relative xs:text-deep-blue z-20
                xs:before:content-brush before:absolute before:-left-[25px]
                before:-top-[70px] before:z-[-1]"
            >
              Brishty
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            I'm a Loved girl & a serius Person so Don't Judge Me!
          </p>
        </motion.div>
        {/* CALL TO ACTION */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7
          hover:bg-blue hover:text-white transition duration-500 "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="bg-gradient-rainblue rounded-r-sm py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500 w-full h-full
            flex items-center justify-center px-10"
            >
              Let's Talk
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcon />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
