import React, { useContext, useEffect, useState } from "react";
import HomeCss from "./Home.module.css";
import FacultyCss from "./FacultyMentor.module.css";
import homeImage from "./images/homeImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import About from "../../components/Leads/Leads";
import Events from "../../components/LatestEvents/Events";
import Photo from "../../components/PhotoGallery/PhotoGallery";
import Newsletter from "../../components/Newsletter/Newsletter";
import LeadsData from "../../Data/Leads";
import { ThemeContext } from "../../ThemeContext";
import facultyImage from "../HomePage/images/faculty_mentor.png";
import {delay, motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import plane from "./images/planeIllustration.png";



function Home() {

  const [ref,inView]=useInView({
    triggerOnce: false
  })

  
  const [ref1,inView1]=useInView({
    triggerOnce: false,
    delay: 500
  })
  const { theme } = useContext(ThemeContext);

  const  [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchAboutData();
}, []);


const fetchAboutData = async () => {
    try {
        // console.log("aaa");
        const response = await fetch('https://gdscbackend.vercel.app/ourteam/gdsclead');

        
        const data = await response.json();
        setLeads(data);
        console.log("Home page")
        console.log(data);
      } catch (error) {
        console.error('Error fetching gdsclead:', error);
      }
}

const slideInVariantsDesktop = {
  initial: { translateX: 100, opacity: 0 },
  animate: { translateX: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

// Animation variants for mobile screen size
const slideInVariantsMobile = {
  initial: { translateY: 100, opacity: 0 },
  animate: { translateY: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

// Determine the screen size and set the appropriate animation variants
const [animationVariants, setAnimationVariants] = useState(slideInVariantsDesktop);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 1000) {
      setAnimationVariants(slideInVariantsMobile);
    } else {
      setAnimationVariants(slideInVariantsDesktop);
    }
  };

  // Add event listener to update animation variants on resize
  window.addEventListener("resize", handleResize);

  // Call the handleResize function initially
  handleResize();

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
    <>
      <section
        id="Home"
        className={`${
          theme === "dark" ? HomeCss.darkHomeDiv : HomeCss.homeDiv
        }`}>
        <div
          className={`${
            theme === "dark" ? HomeCss.darkHeadingDiv : HomeCss.headingDiv
          }`}>
          <motion.h1  ref={ref}
              initial={inView ? "animate" : "initial"}
              animate={inView ? "animate" : "initial"}
              variants={slideInVariantsMobile} className={HomeCss.heading1}>Google</motion.h1>
          <motion.h1  ref={ref}
              initial={inView ? "animate" : "initial"}
              animate={inView ? "animate" : "initial"}
              variants={slideInVariantsMobile} className={HomeCss.heading2}> Developer Student Clubs</motion.h1>
          <motion.h1  ref={ref}
              initial={inView ? "animate" : "initial"}
              animate={inView ? "animate" : "initial"}
              variants={slideInVariantsMobile} className={HomeCss.heading3}>
             The LNM Institute Of Information Technology
          </motion.h1>
          <div className={HomeCss.buttonDiv}>
          {/* <a className={HomeCss.aTag}> <motion.button whileHover={{rotate:[-7, 7, -5, 5, -3, 3, 0],scale:1.2}}
              className={`${
                theme === "dark"
                  ? HomeCss.darkBrandButtons
                  : HomeCss.brandButtons
              }`}>
                
              <FontAwesomeIcon size="1x" icon={faTwitter} />
            </motion.button></a> 
            <a className={HomeCss.aTag}>  < motion.button whileHover={{rotate:[-7, 7, -5, 5, -3, 3, 0],scale:1.2}}
              className={`${
                theme === "dark"
                  ? HomeCss.darkBrandButtons
                  : HomeCss.brandButtons
              }`}>
              <FontAwesomeIcon size="1x" icon={faFacebookF} />
            </motion.button></a> */}
            <a className={HomeCss.aTag} href="https://www.instagram.com/gdsc.lnmiit/">  <motion.button whileHover={{rotate:[-7, 7, -5, 5, -3, 3, 0],scale:1.2}}
              className={`${
                theme === "dark"
                  ? HomeCss.darkBrandButtons
                  : HomeCss.brandButtons
              }`}>
              <FontAwesomeIcon size="1x" icon={faInstagram} />
            </motion.button></a>
            <a className={HomeCss.aTag} href="https://www.linkedin.com/company/gdsc-lnmiit-jaipur/">  <motion.button whileHover={{rotate:[-7, 7, -5, 5, -3, 3, 0],scale:1.2}}
              className={`${
                theme === "dark"
                  ? HomeCss.darkBrandButtons
                  : HomeCss.brandButtons
              }`}>
              <FontAwesomeIcon size="1x" icon={faLinkedinIn} />
            </motion.button></a>
          </div>
        </div>
        <motion.div  ref={ref}
      initial={{ opacity: 0 }} 
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}>
        <div className={HomeCss.imageDiv}>
          <img
          width={"100"}
            className={HomeCss.homeImage}
            src={homeImage}
            alt="homeImage.png"
          />
        </div>
        </motion.div>
      </section>
      <section
        id="faculty"
        className={`${
          theme === "dark" ? FacultyCss.darkmainDiv : FacultyCss.mainDiv
        }`}>
        <div className={FacultyCss.midSection}>
          <div>
            <motion.div  ref={ref1}
              initial={inView1 ? "animate" : "initial"}
              animate={inView1 ? "animate" : "initial"}
              variants={slideInVariantsMobile}>
            <h1
              className={`${
                theme === "dark" ? FacultyCss.darkHeading : FacultyCss.heading
              }`}>
              Faculty Mentor
            </h1>
            </motion.div>
          </div>
          <div className={FacultyCss.main}>
            <motion.div ref={ref1} 
             initial={inView1 ? "animate" : "initial"}
      animate={inView1 ? "animate" : "initial"}
      variants={slideInVariantsMobile} className={FacultyCss.imageArea}>
              <div
                className={`${
                  theme === "dark"
                    ? FacultyCss.darkimageBigDiv
                    : FacultyCss.imageBigDiv
                }`}>
                <div
                  className={`${
                    theme === "dark"
                      ? FacultyCss.darkimageDiv
                      : FacultyCss.imageDiv
                  }`} 
                  style={{
                    display: "inline-block",
                    position: "relative",
                    width: "200px",
                    height: "200px",
                    overflow: "hidden",
                    borderRadius: "50%",
                  }}>
                    <img
                    className="mentorfaculty"
                    src={facultyImage}
                    alt="facultymentor.png"
                    style={{
                      width: "200px",
                      height: "200px",
                      marginleft: "-50px",
                     
                    }}
                  />
                  </div>
              </div>
            </motion.div>
            <motion.div ref={ref1} 
             initial={inView1 ? "animate" : "initial"}
      animate={inView1 ? "animate" : "initial"}
      variants={slideInVariantsMobile} className={FacultyCss.mentorSection}>
              <div
                className={`${
                  theme === "dark"
                    ? FacultyCss.darkParagraph
                    : FacultyCss.paragraph
                }`}>
                <div>Sourabh Kumar</div>
                <div>Our Faculty Mentor</div>
              </div>
              <div
                className={`${
                  theme === "dark"
                    ? FacultyCss.darkParagraph
                    : FacultyCss.paragraph
                }`}>
"The Google Developer Student Club (GDSC) is a non-profit, student-led community,
officially recognized and powered by Google Developers, operating within The LNM
Institute of Information Technology, Jaipur. Students from 2nd and 3rd year of the
undergraduate programs, with an interest in growing as a tech enthusiast, are welcome."	
              </div>
            </motion.div>
          </div>
        </div>
      </section>
          <div className={FacultyCss.plane}>
            <img
              src={plane}
            />
          </div>

    <About data={leads} variant="green" />
        <Events />

       <Photo />
      <Newsletter /> 
    </>
  );
}

export default Home;
