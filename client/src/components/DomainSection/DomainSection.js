import React, { useContext, useState } from "react";
import DomainCss from "./DomainSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../ThemeContext";
import LeadsCard from "../LeadsCard/LeadsCard";
import {
  CpMembers,
  DevelopmentMembers,
  CreativeMembers,
  AiMembers,
  GameDevMembers,
  managementMembers,
} from "../../Data/Teams";
function DomainSection(props) {
  const { theme } = useContext(ThemeContext);
  const { data } = props;
  var { variant } = props;
  const [current, setCurrent] = useState(0);
  const [heading, setHeading] = useState(data[current].heading);
  const [previous, setPrevious] = useState(data.length - 1);
  const [next, setNext] = useState(1);
  const [image, setImage] = useState(data[current].src);
  var showTag = true;
  var showTag2 = false;
  var data1 = DevelopmentMembers;
  if (variant === "team") {
    showTag = false;
    showTag2 = true;
  }

  const previousButton = () => {
    if (current === 0) {
      setCurrent(data.length - 1);
    } else {
      setCurrent(current - 1);
    }
    setHeading(data[current].heading);
    setImage(data[current].src);
    if (current === 0) {
      setPrevious(data.length - 1);
      setNext(current + 1);
    } else if (current === data.length - 1) {
      setNext(0);
      setPrevious(current - 1);
    } else {
      setPrevious(current - 1);
      setNext(current + 1);
    }
  };

  const nextButton = () => {
    if (current === data.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
    setHeading(data[current].heading);
    setImage(data[current].src);
    if (current === 0) {
      setPrevious(data.length - 1);
      setNext(current + 1);
    } else if (current === data.length - 1) {
      setNext(0);
      setPrevious(current - 1);
    } else {
      setPrevious(current - 1);
      setNext(current + 1);
    }
  };

  if (heading === "development") {
    data1 = DevelopmentMembers;
  } else if (heading === "CP") {
    data1 = CpMembers;
  } else if (heading === "Creative") {
    data1 = CreativeMembers;
  } else if (heading === "AI/ML") {
    data1 = AiMembers;
  } else if (heading === "GameDev") {
    data1 = GameDevMembers;
  } else if (heading === "Management") {
    data1 = managementMembers;
  }

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
              <button className={DomainCss.button} onClick={previousButton}>
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  size="xl"
                  style={{ color: "grey", width: "30px", height: "30px" }}
                />
              </button>
              <span className={DomainCss.buttonName}>
                {data[previous].heading}
              </span>
            </div>
            <h2
              className={`${
                theme === "dark"
                  ? DomainCss.darksmallSubHeading
                  : DomainCss.smallSubHeading
              }`}>
              {heading}
            </h2>
            <div>
              <span className={DomainCss.buttonName}>{data[next].heading}</span>
              <button className={DomainCss.button} onClick={nextButton}>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  size="xl"
                  style={{ color: "grey", width: "30px", height: "30px" }}
                />
              </button>
            </div>
          </div>
          {showTag && (
            <div className={DomainCss.domainImageDiv}>
              <img src={image} className={DomainCss.domainImage} />
            </div>
          )}
          {showTag2 && <LeadsCard data={data1} variant="yellow" />}
          {props.children}
        </div>
      </section>
    </>
  );
}

export default DomainSection;
