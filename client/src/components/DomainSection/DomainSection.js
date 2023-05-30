import React, { useContext } from "react";
import DomainCss from "./DomainSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../ThemeContext";

function DomainSection(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className={DomainCss.aboutSection3}>
        <div className={DomainCss.aboutDiv3}>
          <h1
            className={`${
              theme === "dark"
                ? DomainCss.darkaboutSubHeading2
                : DomainCss.aboutSubHeading2
            }`}>
            {props.heading}
          </h1>
          <div className={DomainCss.domainNameDiv}>
            <div>
              <button className={DomainCss.button}>
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  size="xl"
                  style={{ color: "grey", width: "30px", height: "30px" }}
                />
              </button>
              <span className={DomainCss.buttonName}>Creative</span>
            </div>
            <h2
              className={`${
                theme === "dark"
                  ? DomainCss.darksmallSubHeading
                  : DomainCss.smallSubHeading
              }`}>
              Development
            </h2>
            <div>
              <span className={DomainCss.buttonName}>AI/ML</span>
              <button className={DomainCss.button}>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  size="xl"
                  style={{ color: "grey", width: "30px", height: "30px" }}
                />
              </button>
            </div>
          </div>
          {props.children}
        </div>
      </section>
    </>
  );
}

export default DomainSection;
