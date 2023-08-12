import React, { useContext } from "react";
import FooterCss from "./Footer.module.css";
import gdsclogo from "../Navbar/images/gdsclogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../../ThemeContext";
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";

function Footer() {

  const [ref,inView]=useInView({
    triggerOnce: false
  })

  const slideInVariants = {
    initial: { translateY: 100, opacity: 0 }, 
    animate: { translateY: 0, opacity:1, transition: { duration: 0.7, ease: "easeOut" } }, 
  };

  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section
        id="Footer"
        className={`${theme === "dark" ? FooterCss.darkmain : FooterCss.main}`}>
        <motion.div   ref={ref} 
             initial={inView ? "animate" : "initial"}
      animate={inView ? "animate" : "initial"}
      variants={slideInVariants}  className={FooterCss.column1}>
          <div className={FooterCss.logoimagediv}>
            <img src={gdsclogo} className={FooterCss.gdsclogo} alt="gdsclogo" />

            <div
              className={`${
                theme === "dark" ? FooterCss.darklogoname : FooterCss.logoname
              }`}>
              <p className={FooterCss.logonameheading}>
                Google Developer Student Clubs{" "}
              </p>
              <p className={FooterCss.logonameheading2}>
                The LNM Institute of Information Technology
              </p>
            </div>
          </div>
          <div
            className={`${
              theme === "dark" ? FooterCss.darkbelow : FooterCss.below
            }`}>
            <span>dhsbubfai iacsuiucb</span>
            <span>dhsbubfai iacsuiucb</span>
            <span>dhsbubfai iacsuiucb</span>
          </div>
          <div>
            <motion.button
            whileHover={{rotate:[-7, 7, -5, 5, -3, 3, 0],scale:1.2}}
              className={`${
                theme === "dark"
                  ? FooterCss.darkbrandButtons
                  : FooterCss.brandButtons
              }`}>
              <FontAwesomeIcon size="1x" icon={faTwitter} />
            </motion.button>
            <motion.button
            whileHover={{rotate:[-7, 7, -5, 5, -3, 3, 0],scale:1.2}}
              className={`${
                theme === "dark"
                  ? FooterCss.darkbrandButtons
                  : FooterCss.brandButtons
              }`}>
              <FontAwesomeIcon size="1x" icon={faFacebookF} />
            </motion.button>
            <motion.button
            whileHover={{rotate:[-7, 7, -5, 5, -3, 3, 0],scale:1.2}}
              className={`${
                theme === "dark"
                  ? FooterCss.darkbrandButtons
                  : FooterCss.brandButtons
              }`}>
              <FontAwesomeIcon size="1x" icon={faInstagram} />
            </motion.button>
            <motion.button
            whileHover={{rotate:[-7, 7, -5, 5, -3, 3, 0],scale:1.2}}
              className={`${
                theme === "dark"
                  ? FooterCss.darkbrandButtons
                  : FooterCss.brandButtons
              }`}>
              <FontAwesomeIcon size="1x" icon={faLinkedinIn} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div   ref={ref} 
             initial={inView ? "animate" : "initial"}
      animate={inView ? "animate" : "initial"}
      variants={slideInVariants} className={FooterCss.footerDataDiv}>
          <div className={FooterCss.data}>
            <h2>XYZ</h2>
            <h4>Lorem ipsum</h4>
            <h4>Lorem ipsum</h4>
            <h4>Lorem ipsum</h4>
          </div>

          <div className={FooterCss.data}>
            <h2>XYZ</h2>
            <h4>Lorem ipsum</h4>
            <h4>Lorem ipsum</h4>
            <h4>Lorem ipsum</h4>
          </div>

          <div className={FooterCss.data}>
            <h2>XYZ</h2>
            <h4>Lorem ipsum</h4>
            <h4>Lorem ipsum</h4>
            <h4>Lorem ipsum</h4>
          </div>
        </motion.div>
      </section>

      <section
        className={`${
          theme === "dark"
            ? FooterCss.darkcopyrightSection
            : FooterCss.copyrightSection
        }`}>
        <div className={FooterCss.copyright}>
          <h5
            className={`${
              theme === "dark" ? FooterCss.darkcHeading : FooterCss.cHeading
            }`}>
            © Copyright 2023, All Rights Reserved by GDSC
          </h5>
        </div>
      </section>
    </>
  );
}

export default Footer;
