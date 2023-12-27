import React, { useContext } from "react";
import FooterCss from "./Footer.module.css";
import gdsclogo from "../Navbar/images/gdscnlogo.png";
import {NavLink, useNavigate} from "react-router-dom"
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

  const nav = useNavigate();
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
        <motion.div  
className={FooterCss.column1}>
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
              <div>
                The LNMIIT Jaipur
              </div>
         <div> Rupa ki Nangal, Post-Sumel, Via, </div> 
         <div>
         Jamdoli, Jaipur, Rajasthan 302031
          </div> 
          </div>
          <div>
            <motion.button
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
        style={{justifyContent:"space-evenly"}}
            className={FooterCss.footerDataDiv}>
          <div className={FooterCss.data}>
            <h2 style={{cursor:"pointer"}} onClick={()=>{nav("/")}}>Home</h2>
            <h4 style={{cursor:"pointer"}}  onClick={()=>{nav("/about")}}>About</h4>
            <h4 style={{cursor:"pointer"}} onClick={()=>{nav("/events")}}>Events</h4>
            <h4 style={{cursor:"pointer"}} onClick={()=>{nav("/projects")}}>Project</h4>
          </div>

          <div className={FooterCss.data}>
            <h2 style={{cursor:"pointer"}} onClick={()=>{nav("/about")}} >About</h2>
            <h4 style={{cursor:"pointer"}} onClick={()=>{nav("/out-team")}} >Our Team</h4>
            <h4 style={{cursor:"pointer"}} onClick={()=>{nav("/")}} >Contact Us</h4>
            <h4 style={{cursor:"pointer"}} onClick={()=>{nav("/events")}} >Events</h4>
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
