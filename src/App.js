import React, { useState } from "react";
import "./index.css";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import { useEffect } from "react";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./Components/LineGradient";
import MySkills from "./Components/MySkills";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setSelectedPage(true);
      if (window.scrollY !== 0) setSelectedPage(false);
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-deep-blue">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
          <MySkills/>
      </div>
      <div className="w-5/6 mx-auto">
          <Projects/>
      </div>
      <div className="w-5/6 mx-auto md:h-full">
          <Testimonials/>
      </div>
      <div className="w-5/6 mx-auto md:h-full">
          <Contact/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
