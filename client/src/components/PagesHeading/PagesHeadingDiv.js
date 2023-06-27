import React, { useState, useContext } from "react";
import PageCss from "./PagesHeading.module.css";
import { ThemeContext } from "../../ThemeContext";

function PagesHeading(props) {
  const [isActive, setActive] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { variant } = props;
  let name = "";
  let showTag = true;

  if (variant === "events") {
    name = PageCss.EventSection;
  } else if (variant === "projects") {
    name = PageCss.ProjectSection;
  } else {
    name = PageCss.TeamSection;
    showTag = false;
  }

  const [selectedTenure, setSelectedTenure] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");

  const handleTenureChange = (event) => {
    const tenure = event.target.value;
    // console.log(props.domain);
    setSelectedTenure(tenure);
    if (props.onFilterChange) {
      props.onFilterChange(selectedDomain, tenure);
    }
  };

  const handleDomainChange = (event) => {
    const domain = event.target.value;
    // console.log(props.tenure);
    setSelectedDomain(domain);
    if (props.onFilterChange) {
      props.onFilterChange(domain, selectedTenure);
    }
  };

  return (
    <>
      <section className={PageCss.section1}>
        <div className={name}>
          <h1
            className={`${theme === "dark" ? PageCss.darkeventHeading : PageCss.eventHeading}`}
          >
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
          className={`${theme === "dark" ? PageCss.darkfilterHeading : PageCss.filterHeading}`}
        >
          {props.FilterHeading}
        </h1>
        <div className={PageCss.eventsFilterDiv}>
          <select
            className={`${theme === "dark" ? PageCss.darkselect : PageCss.select}`}
            value={selectedTenure}
            onChange={handleTenureChange}
          >
            <option value="">Select Tenure</option>
            <option value="2019-2020">2019-2020</option>
            <option value="2020-2021">2020-2021</option>
            <option value="2021-2022">2021-2022</option>
            <option value="2022-2023">2022-2023</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2024-2025">2024-2025</option>
            <option value="2025-2026">2025-2026</option>
          </select>

          {showTag && (
            <select
              className={`${theme === "dark" ? PageCss.darkselect : PageCss.select}`}
              value={selectedDomain}
              onChange={handleDomainChange}
            >
              <option value="">Select Domain</option>
              <option value="development">Development</option>
              <option value="creative">Creative</option>
              <option value="management">Management</option>
              <option value="gamedev">Game Dev</option>
              <option value="cp">Competitive Programming</option>
              <option value="aiml">AI/ML</option>
            </select>
          )}
        </div>
      </section>
    </>
  );
}

export default PagesHeading;
