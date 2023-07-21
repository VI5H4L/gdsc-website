import React, { useContext, useState, useEffect } from "react";
import AboutCss from "./AboutPage.module.css";
import AboutImage from "./images/aboutImage.png";
import darkAboutImage from "./images/darkAboutImage.png";
import DomainImage from "./images/domainImage.png";
import DomainSection from "../../components/DomainSection/DomainSection";
import DomainData from "../../Data/Domain";
import { ThemeContext } from "../../ThemeContext";
import {delay, motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";
function AboutPage() {

  const [ref,inView]=useInView({
    triggerOnce: false,
    delay: 600
  })

  const [ref1,inView1]=useInView({
    triggerOnce: false,
  })

  const [ref2,inView2]=useInView({
    triggerOnce: false,
    delay: 500
  })


  const slideInVariants = {
    initial: { opacity: 0 }, 
    animate: { opacity:1, transition: { duration: 0.9, ease: "easeOut" } }, 
  };

  const Variants = {
    initial: { opacity: 0 ,y:100}, 
    animate: { opacity:1,y:0, transition: { duration: 0.9, ease: "easeOut" } }, 
  };

  const box2 = {
    initial: { opacity: 0 ,y:-100,x:300,scale:1.5}, 
    animate: { opacity:1,y:0,x: 0,scale: 1,transition: { duration: 1, ease: "easeOut" } }, 
  };

  const box3 = {
    initial: { opacity: 0 ,y:-100,x:-300,scale:1.5}, 
    animate: { opacity:1,y:0,x: 0,scale:1,transition: { duration: 1, ease: "easeOut" } }, 
  };
  const { theme } = useContext(ThemeContext);
  const [image, setImage] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  
  const slideInVariantsMobile = {
    initial: { translateY: 100, opacity: 0 },
    animate: { translateY: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };
  
  
  const [animationVariants1, setAnimationVariants1] = useState(box2);
  const [animationVariants, setAnimationVariants] = useState(box3);
 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setAnimationVariants(slideInVariantsMobile);
        setAnimationVariants1(slideInVariantsMobile)
      } else {
        setAnimationVariants(box2);
        setAnimationVariants1(box3);
      }
    };
  
    
    window.addEventListener("resize", handleResize);
  
    
    handleResize();
  
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  const fetchData = async (Domain) => {
    try {
      const response = await fetch(`http://localhost:8000/ourteam/batchpic?domain=${Domain}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData);
      console.log(responseData[0].batchPhoto);
      setImage(responseData[0].batchPhoto);
    } catch (error) {
      console.error("Error fetching domain data:", error);
    }
  };

  const heading='About Us'

  return (
    <>
      <section className={AboutCss.aboutSection}>
        <div className={AboutCss.aboutDiv}>
          <motion.h1
            className={`${
              theme === "dark"
                ? AboutCss.darkaboutHeading
                : AboutCss.aboutHeading
            }`}>
            {" "}
            {heading.split("").map((character, index) =>
        character === " " ? (
          <motion.span key={index} style={{ display: "inline-block", width: "0.6em" }}>
            {" "}
          </motion.span>
        ) : (
          <motion.span
            key={index}
            style={{ display: "inline-block" }}
            animate={{ opacity: 1 ,x:0}}
            initial={{ opacity: 0 ,x:-20}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {character}
          </motion.span>
        )
      )}
          </motion.h1>
          <motion.img
          ref={ref} 
          initial={inView ? "animate" : "initial"}
   animate={inView ? "animate" : "initial"}
   variants={slideInVariants}
            src={`${theme === "dark" ? darkAboutImage : AboutImage}`}
            className={AboutCss.aboutImage}
            alt="about-image"
          />
        </div>
      </section>

      <section className={AboutCss.aboutSection2}>
        <div className={AboutCss.aboutDiv2}>
          <motion.h1
            ref={ref1} 
            initial={inView1 ? "animate" : "initial"}
     animate={inView1 ? "animate" : "initial"}
     variants={Variants}
            className={`${
              theme === "dark"
                ? AboutCss.darkaboutSubHeading
                : AboutCss.aboutSubHeading
            }`}>
            We're A Vibrant Community Of Student Developers At The LNMIIT
          </motion.h1>
          <div className={AboutCss.frameDiv}>
            <motion.div  ref={ref2} 
            initial={inView2 ? "animate" : "initial"}
     animate={inView2 ? "animate" : "initial"}
     variants={animationVariants} className={AboutCss.frame2}>
              <span
                className={`${
                  theme === "dark"
                    ? AboutCss.darkframe2Heading
                    : AboutCss.frame2Heading
                }`}>
                13+
              </span>
              <span
                className={`${
                  theme === "dark"
                    ? AboutCss.darkframe2Heading
                    : AboutCss.frame2Heading
                }`}>
                Projects
              </span>
            </motion.div>
            <div
              className={`${
                theme === "dark" ? AboutCss.darkframe1 : AboutCss.frame1
              }`}>
              <span
                className={`${
                  theme === "dark"
                    ? AboutCss.darkframe1Heading
                    : AboutCss.frame1Heading
                }`}>
                50+
              </span>
              <span
                className={`${
                  theme === "dark"
                    ? AboutCss.darkframe1Heading
                    : AboutCss.frame1Heading
                }`}>
                Students
              </span>
            </div>
            <motion.div  ref={ref2} 
            initial={inView2 ? "animate" : "initial"}
     animate={inView2 ? "animate" : "initial"}
     variants={animationVariants1}className={AboutCss.frame2}>
              <span
                className={`${
                  theme === "dark"
                    ? AboutCss.darkframe2Heading
                    : AboutCss.frame2Heading
                }`}>
                15+
              </span>
              <span
                className={`${
                  theme === "dark"
                    ? AboutCss.darkframe2Heading
                    : AboutCss.frame2Heading
                }`}>
                Events
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <DomainSection
        heading="Introducing our 6 domains!"
        current="development"
        data={DomainData}
        onDomainChange = {fetchData}
        image = {image}
        variant="about"></DomainSection>

      <section className={AboutCss.aboutSection4}>
        <div className={AboutCss.aboutDiv4}>
          <p 
            className={`${
              theme === "dark" ? AboutCss.darkdescription : AboutCss.description
            }`}>
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, su orem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam,
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
