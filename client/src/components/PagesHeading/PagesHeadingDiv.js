import React, { useState, useContext } from "react";
import PageCss from "./PagesHeading.module.css";
import { ThemeContext } from "../../ThemeContext";

function PagesHeading(props) {
  const [isActive, setActive] = useState(false);

  const { theme } = useContext(ThemeContext);
  const { variant } = props;
  var name = "";
  var showTag = true;

  if (variant == "events") {
    name = PageCss.EventSection;
  } else if (variant == "projects") {
    name = PageCss.ProjectSection;
  } else {
    name = PageCss.TeamSection;
    showTag = false;
  }

  return (
    <>
      <section className={PageCss.section1}>
        <div className={name}>
          <h1
            className={`${
              theme === "dark" ? PageCss.darkeventHeading : PageCss.eventHeading
            }`}>
            {props.heading}
          </h1>
          <img
            src={`${theme === "dark" ? props.image1 : props.image2}`}
            className={PageCss.eventImage}
            alt="about-image"
          />
        </div>
      </section>

      <section className={PageCss.section2}>
        <h1
          className={`${
            theme === "dark" ? PageCss.darkfilterHeading : PageCss.filterHeading
          }`}>
          {props.FilterHeading}
        </h1>
        <div className={PageCss.eventsFilterDiv}>
          <select
            className={`${
              theme === "dark" ? PageCss.darkselect : PageCss.select
            }`}
            value="Select Tenure">
            <option>Select Tenure</option>
            <option>b</option>
            <option>c</option>
          </select>

          {showTag && (
            <select
              className={`${
                theme === "dark" ? PageCss.darkselect : PageCss.select
              }`}
              name="Select Domain">
              <option class>Select Domain</option>
              <option>b</option>
              <option>c</option>
            </select>
          )}
        </div>
      </section>
    </>
  );
}

export default PagesHeading;
