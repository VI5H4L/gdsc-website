import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import AboutCss from "./Leads.module.css";
import { ThemeContext } from "../../ThemeContext";
import plane from "./images/planeIllustration.png";
import LeadsCard from "../LeadsCard/LeadsCard";
function About(props) {
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
            <img className={AboutCss.planeImage} src={plane} />
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
