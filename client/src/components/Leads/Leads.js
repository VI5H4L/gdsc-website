import React, { useContext } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import axios from "axios";
import AboutCss from "./Leads.module.css";
import { ThemeContext } from "../../ThemeContext";
// import plane from "./images/planeIllustration.png";
import LeadsCard from "../LeadsCard/LeadsCard";
import { useInView } from "react-intersection-observer";


function About(props) {
  const [ref,inView]=useInView({
    triggerOnce: false,
    delay: 500
  })

  const [ref1,inView1]=useInView({
    triggerOnce: false,
    delay: 500
  })



  const slideInVariants = {
    initial: { translateY: 100, opacity: 0 },
    animate: { translateY: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
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


  const { scrollYProgress } = useViewportScroll();

 
  const airplaneX = useTransform(scrollYProgress, [0, 1], ["-150%", "100%"]);
  const airplaneY = useTransform(scrollYProgress, [0, 1], ["-150%", "100%"]);

  return (
    <>
      <section id="our-team" className={mainClass}>
        {/* {showTag && (
          <div className={AboutCss.plane}>
            <img
              src={plane}
            />
          </div>
        )} */}
        {showTag && (
          <motion.h1
          ref={ref1}
          initial={inView1 ? "animate" : "initial"}
          animate={inView1? "animate" : "initial"}
          variants={slideInVariants}
          style={{
            marginTop:"8rem" ,
          marginBottom:"8rem"         }}
            className={`${
              theme === "dark" ? AboutCss.darkHeading : AboutCss.heading
            }`}
          >
            Meet our Leads!!
          </motion.h1>
        )}
        <div className="leads-home">
        <LeadsCard data={props.data} variant={variant} />
        </div>
      </section>
    </>
  );
}

export default About;