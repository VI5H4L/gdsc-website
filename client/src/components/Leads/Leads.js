import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import AboutCss from "./Leads.module.css";
import { ThemeContext } from "../../ThemeContext";
import plane from "./images/planeIllustration.png";
import LeadsCard from "../LeadsCard/LeadsCard";
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";

function About(props) {

  const [ref,inView]=useInView({
    triggerOnce: false
  })

  const airplaneVariants = {
    initial: { x: "-100%", y: "-100%" }, 
    animate: { x: "200%", y: "200%", transition: { duration: 3, ease: "easeInOut",repeat: Infinity } },
    exit: { x: "100%", y: "100%", transition: { duration: 3, ease: "easeInOut" } }, 
  };
  const { theme } = useContext(ThemeContext);
  const { variant } = props;

  var mainClass = "";
  var showTag = true;
  if (variant === "yellow") {
    mainClass = AboutCss.mainYellow;
    showTag = false;
  } else {
    mainClass = AboutCss.main;
  }
  return (
    <>
      <section id="our-team" className={mainClass}>
        {showTag && (
          <div className={AboutCss.plane}>
            <motion.img   ref={ref}
      initial={inView ? "animate" : "initial"}
      animate="animate" // Apply enter animation
      exit="exit" // Apply exit animation
      variants={airplaneVariants} className={AboutCss.planeImage} src={plane} />
          </div>
        )}
        {showTag && (
          <h1
            className={`${
              theme === "dark" ? AboutCss.darkHeading : AboutCss.heading
            }`}>
            Meet our Leads !!
          </h1>
        )}
        <LeadsCard data={props.data} variant={variant} />
      </section>
    </>
  );
}

export default About;
