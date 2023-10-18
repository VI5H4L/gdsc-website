import React, { useContext,useState,useEffect } from "react";
import AboutCss from "./AboutPage.module.css";
import AboutImage from "./images/aboutImage.png";
import darkAboutImage from "./images/darkAboutImage.png";
import DomainImage from "./images/domainImage.png";
import DomainSection from "../../components/DomainSection/DomainSection";
import DomainData from "../../Data/Domain";
import { ThemeContext } from "../../ThemeContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



function AboutPage() {
  const { theme } = useContext(ThemeContext);
  const [image, setImage] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: false,
    delay: 600,
  });

  const [ref1, inView1] = useInView({
    triggerOnce: false,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    delay: 500,
  });

  const slideInVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const box2 = {
    initial: { opacity: 0,rotateY: 180 },
    animate: { opacity: 1, rotateY: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const convertDriveURL = (url) => {
    const parts = url.split('/');
    const fileId = parts[parts.length - 2];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  };

  const fetchData = async (Domain) => {
    try {
      const response = await fetch(`https://gdscbackend.vercel.app/ourteam/batchpic?domain=${Domain}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData);
      console.log(responseData[0].batchPhoto);
      const convertedURL = convertDriveURL(responseData[0].batchPhoto);
      setImage(convertedURL);
      // setImage();
    } catch (error) {
      console.error("Error fetching domain data:", error);
    }
  };

  const heading = 'About Us';

  return (
    <>
      <section className={AboutCss.aboutSection}>
        <div className={AboutCss.aboutDiv}>
          <motion.h1
            className={`${
              theme === "dark"
                ? AboutCss.darkaboutHeading
                : AboutCss.aboutHeading
              }`}
            >
            {heading.split("").map((character, index) =>
              character === " " ? (
                <motion.span key={index} style={{ display: "inline-block", width: "0.6em" }}>
                  {" "}
                </motion.span>
              ) : (
                <motion.span
                  key={index}
                  style={{ display: "inline-block" }}
                  animate={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
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
            variants={slideInVariants}
            className={`${
              theme === "dark"
                ? AboutCss.darkaboutSubHeading
                : AboutCss.aboutSubHeading
              }`}
          >
            We're A Vibrant Community Of Student Developers At The LNMIIT
          </motion.h1>
          <div className={AboutCss.frameDiv}>
            <motion.div
              ref={ref2}
              initial={inView2 ? "animate" : "initial"}
              animate={inView2 ? "animate" : "initial"}
              variants={box2}
              className={AboutCss.frame2}
            >
              <span
                className={`${
                  theme === "dark"
                    ? AboutCss.darkframe2Heading
                    : AboutCss.frame2Heading
                  }`}
              >
                13+
              </span>
              <span
                className={`${
                  theme === "dark"
                    ? AboutCss.darkframe2Heading
                    : AboutCss.frame2Heading
                  }`}
              >
                Projects
              </span>
            </motion.div>
            <motion.div
              ref={ref2}
              initial={inView2 ? "animate" : "initial"}
              animate={inView2 ? "animate" : "initial"}
              variants={box2}
              className={`${
                theme === "dark" ? AboutCss.darkframe1 : AboutCss.frame1
              }`}
            >
              <span
                className={`${
                  theme === "dark"
                    ? AboutCss.darkframe1Heading
                    : AboutCss.frame1Heading
                  }`}
              >
                50+
              </span>
              <span
                className={`${
                  theme === "dark"
                    ? AboutCss.darkframe1Heading
                    : AboutCss.frame1Heading
                  }`}
              >
                Students
              </span>
            </motion.div>
            <motion.div
              ref={ref2}
              initial={inView2 ? "animate" : "initial"}
              animate={inView2 ? "animate" : "initial"}
              variants={box2}
              className={AboutCss.frame2}
            >
              <span
                className={`${
                  theme === "dark"
                    ? AboutCss.darkframe2Heading
                    : AboutCss.frame2Heading
                  }`}
              >
                15+
              </span>
              <span
                className={`${
                  theme === "dark"
                    ? AboutCss.darkframe2Heading
                    : AboutCss.frame2Heading
                  }`}
              >
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
        onDomainChange={fetchData}
        image={image}
        variant="about"
      />


     
      <section className={AboutCss.aboutSection4}>
        <div className={AboutCss.aboutDiv4}>
          <p
            className={`${
              theme === "dark" ? AboutCss.darkdescription : AboutCss.description
              }`}
          >
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
          <p
            className={`${
              theme === "dark" ? AboutCss.darkdescription : AboutCss.description
              }`}
          >
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
