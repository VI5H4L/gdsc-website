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
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";


function Home() {

  const [ref,inView]=useInView({
    triggerOnce: false
  })

  
  const [ref1,inView1]=useInView({
    triggerOnce: false
  })
  const { theme } = useContext(ThemeContext);

  const  [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchAboutData();
}, []);

const slideInVariants = {
  initial: { translateX: 100, opacity: 0 }, 
  animate: { translateX: 0, opacity:1, transition: { duration: 0.7, ease: "easeOut" } }, 
};
const fetchAboutData = async () => {
    try {
        const response = await fetch('http://localhost:8000/ourteam/gdsclead');
        
        const data = await response.json();
        setLeads(data);
      } catch (error) {
        console.error('Error fetching gdsclead:', error);
      }
}

const heading='Google'
const heading1='Developer Student Clubs'
const heading2='The LNM Institute Of Information Technology'

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
          <motion.h1  className={HomeCss.heading1}>   {heading.split("").map((character, index) =>
        character === " " ? (
          <motion.span key={index} style={{ display: "inline-block", width: "0.6em" }}>
            {" "}
          </motion.span>
        ) : (
          <motion.span
            key={index}
            style={{ display: "inline-block" }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {character}
          </motion.span>
        )
      )}</motion.h1>
          <motion.h1 className={HomeCss.heading2}> {heading1.split("").map((character, index) =>
        character === " " ? (
          <motion.span key={index} style={{ display: "inline-block", width: "0.6em" }}>
            {" "}
          </motion.span>
        ) : (
          <motion.span
            key={index}
            style={{ display: "inline-block" }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
          >
            {character}
          </motion.span>
        )
      )}</motion.h1>
          <motion.h1 className={HomeCss.heading3}>
             {heading2.split("").map((character, index) =>
        character === " " ? (
          <motion.span key={index} style={{ display: "inline-block", width: "0.6em" }}>
            {" "}
          </motion.span>
        ) : (
          <motion.span
            key={index}
            style={{ display: "inline-block" }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {character}
          </motion.span>
        )
      )}
          </motion.h1>
          <div>
            <motion.button whileHover={{rotate:[-7, 7, -5, 5, -3, 3, 0],scale:1.2}}
              className={`${
                theme === "dark"
                  ? HomeCss.darkBrandButtons
                  : HomeCss.brandButtons
              }`}>
                
              <FontAwesomeIcon size="1x" icon={faTwitter} />
            </motion.button>
            < motion.button whileHover={{rotate:[-7, 7, -5, 5, -3, 3, 0],scale:1.2}}
              className={`${
                theme === "dark"
                  ? HomeCss.darkBrandButtons
                  : HomeCss.brandButtons
              }`}>
              <FontAwesomeIcon size="1x" icon={faFacebookF} />
            </motion.button>
            <motion.button whileHover={{rotate:[-7, 7, -5, 5, -3, 3, 0],scale:1.2}}
              className={`${
                theme === "dark"
                  ? HomeCss.darkBrandButtons
                  : HomeCss.brandButtons
              }`}>
              <FontAwesomeIcon size="1x" icon={faInstagram} />
            </motion.button>
            <motion.button whileHover={{rotate:[-7, 7, -5, 5, -3, 3, 0],scale:1.2}}
              className={`${
                theme === "dark"
                  ? HomeCss.darkBrandButtons
                  : HomeCss.brandButtons
              }`}>
              <FontAwesomeIcon size="1x" icon={faLinkedinIn} />
            </motion.button>
          </div>
        </div>
        <motion.div  ref={ref}
      initial={{ opacity: 0 }} 
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}>
        <div className={HomeCss.imageDiv}>
          <img
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
            <motion.div ref={ref1} 
             initial={inView1 ? "animate" : "initial"}
      animate={inView1 ? "animate" : "initial"}
      variants={slideInVariants}>
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
      variants={slideInVariants} className={FacultyCss.imageArea}>
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
                      width: "auto",
                      height: "100%",
                      marginleft: "-50px",
                    }}
                  />
                  </div>
              </div>
            </motion.div>
            <motion.div ref={ref1} 
             initial={inView1 ? "animate" : "initial"}
      animate={inView1 ? "animate" : "initial"}
      variants={slideInVariants} className={FacultyCss.mentorSection}>
              <div
                className={`${
                  theme === "dark"
                    ? FacultyCss.darkParagraph
                    : FacultyCss.paragraph
                }`}>
                <div>Sourabh Kumar</div>
                <div>Mentor designation</div>
              </div>
              <div
                className={`${
                  theme === "dark"
                    ? FacultyCss.darkParagraph
                    : FacultyCss.paragraph
                }`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim venia
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <About data={leads} variant="green" />
      <Events />
      <Photo />
      <Newsletter />
    </>
  );
}

export default Home;
