import React, { useContext, useState } from "react";
import AboutCss from "./AboutPage.module.css";
import AboutImage from "./images/aboutImage.png";
import darkAboutImage from "./images/darkAboutImage.png";
import DomainImage from "./images/domainImage.png";
import DomainSection from "../../components/DomainSection/DomainSection";
import DomainData from "../../Data/Domain";
import { ThemeContext } from "../../ThemeContext";
function AboutPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section className={AboutCss.aboutSection}>
        <div className={AboutCss.aboutDiv}>
          <h1
            className={`${
              theme === "dark"
                ? AboutCss.darkaboutHeading
                : AboutCss.aboutHeading
            }`}>
            {" "}
            About Us
          </h1>
          <img
            src={`${theme === "dark" ? darkAboutImage : AboutImage}`}
            className={AboutCss.aboutImage}
            alt="about-image"
          />
        </div>
      </section>

      <section className={AboutCss.aboutSection2}>
        <div className={AboutCss.aboutDiv2}>
          <h1
            className={`${
              theme === "dark"
                ? AboutCss.darkaboutSubHeading
                : AboutCss.aboutSubHeading
            }`}>
            We're A Vibrant Community Of Student Developers At The LNMIIT
          </h1>
          <div className={AboutCss.frameDiv}>
            <div className={AboutCss.frame2}>
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
            </div>
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
            <div className={AboutCss.frame2}>
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
            </div>
          </div>
        </div>
      </section>

      <DomainSection
        heading="Introducing our 6 domains!"
        current="Development"
        data={DomainData}
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
