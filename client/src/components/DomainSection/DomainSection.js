import React, { useContext, useState, useEffect } from "react";
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
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";


function DomainSection(props) {
 
  const [ref,inView]=useInView({
    triggerOnce: false
  })

  
  const [ref1,inView1]=useInView({
    triggerOnce: false,
    delay: 500
  })

  
  const slideInVariantsMobile = {
    initial: { translateY: 100, opacity: 0 },
    animate: { translateY: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };
  

// console.log("+++++",props.data);
  const { theme } = useContext(ThemeContext);
  const { data, image, leadData} = props;
  var { variant } = props;
  const [current, setCurrent] = useState(0);
  const [heading, setHeading] = useState(data[current].heading);
  const [previous, setPrevious] = useState(data.length - 1);
  const [next, setNext] = useState(1);


  console.log(props.current, current);
  
  var showTag = true;
  var showTag2 = false;
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
    // setImage(data[current].src);
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
    handleDomainChange(data[previous].heading)
  };

  const nextButton = () => {
    if (current === data.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
    setHeading(data[current].heading);
    // setImage(data[current].src);
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
    handleDomainChange(data[next].heading);
  };

  const handleDomainChange = (selectedDomain) => {
    console.log('=================SELECTED DOMAIN===================');
    console.log(selectedDomain);
    console.log('====================================');
    if (props.onDomainChange) {
      props.onDomainChange(selectedDomain);
    }
  };

  
  useEffect(() => {
    handleDomainChange(data[0].heading);
    // setCurrent(0);
    setCurrent(0);
    setHeading(data[0].heading);
    setPrevious(data.length - 1);
    setNext(1);
    console.log('=================Current===================');
    console.log(current);
    console.log('====================================');
    console.log('=================Heading===================');
    console.log(heading);
    console.log('====================================');
    
  }, [props.tenure])

  return (
    <>
      <section className={DomainCss.aboutSection3}>
        <div className={DomainCss.aboutDiv3}>
          <motion.h1
           ref={ref}
           initial={inView ? "animate" : "initial"}
           animate={inView? "animate" : "initial"}
           variants={slideInVariantsMobile}
            className={`${
              theme === "dark"
                ? DomainCss.darkaboutSubHeading2
                : DomainCss.aboutSubHeading2
            }`}>
            {props.heading}
          </motion.h1>
          <div className={DomainCss.domainNameDiv}>
            <div>
              <motion.button whileHover={{rotate:[-7, 7, -5, 5, -3, 3, 0],scale:1.2}} className={DomainCss.button} onClick={previousButton}>
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  size="xl"
                  style={{ color: "grey", width: "30px", height: "30px" }}
                />
              </motion.button>
              <span className={DomainCss.buttonName}>
                {data[previous].heading.charAt(0).toUpperCase() + data[previous].heading.slice(1)}
              </span>
            </div>
            <h2
              className={`${
                theme === "dark"
                  ? DomainCss.darksmallSubHeading
                  : DomainCss.smallSubHeading
              }`}>
              {heading.charAt(0).toUpperCase() + heading.slice(1)}
            </h2>
            
            <div>
            <span className={DomainCss.buttonName}>{data[next].heading.charAt(0).toUpperCase() + data[next].heading.slice(1)}</span>
              <motion.button whileHover={{rotate:[-7, 7, -5, 5, -3, 3, 0],scale:1.2}} className={DomainCss.button} onClick={nextButton}>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  size="xl"
                  style={{ color: "grey", width: "30px", height: "30px" }}
                />
              </motion.button>
            </div>
          </div>
          {showTag && (
            <div className={DomainCss.domainImageDiv}>
                <img src={props.image} className={DomainCss.domainImage} />
            </div>
          )}
          {showTag2 && <LeadsCard data={leadData} variant="yellow" />}
          {props.children}
        </div>
      </section>
    </>
  );
}

export default DomainSection;
