import React, { useContext,useState,useEffect } from "react";
import FooterCss from "../Footer/Footer.module.css";
import { ThemeContext } from "../../ThemeContext";
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";
function Newsletter() {
  const { theme } = useContext(ThemeContext);


  const [ref,inView]=useInView({
    triggerOnce: false,
    delay: 500
  })



  const slideInVariantsMobile = {
    initial: { translateY: 100, opacity: 0 },
    animate: { translateY: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };


  return (
    <>
      <section
        id="Contacts"
        className={`${
          theme === "dark" ? FooterCss.darkMain1 : FooterCss.main1
        }`}>
        <motion.div initial={inView ? "animate" : "initial"}
              animate={inView ? "animate" : "initial"}
              variants={slideInVariantsMobile}className={FooterCss.newsletter}>
          <h1   className={FooterCss.heading}>Subscribe to our newsletter</h1>
          <div   ref={ref}
               className={FooterCss.newsletterInputs}>
            <from type="submit" className={FooterCss.form}>
              <input
                className={`${
                  theme === "dark" ? FooterCss.darkinputs : FooterCss.inputs
                }`}
                type="text"
                placeholder="First name"
              />
              <input
                className={`${
                  theme === "dark" ? FooterCss.darkinputs : FooterCss.inputs
                }`}
                type="text"
                placeholder="Email Address"
              />
              <button
                className={`${
                  theme === "dark" ? FooterCss.darkbutton : FooterCss.button
                }`}>
                Subscribe now
              </button>
            </from>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Newsletter;
