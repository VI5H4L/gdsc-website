import React, { useContext, useEffect, useState } from "react";
import LeadCardCss from "./LeadsCard.module.css";
import { ThemeContext } from "../../ThemeContext";
import { useInView } from "react-intersection-observer";
import { motion} from 'framer-motion';
function LeadsCard(props) {

  const [ref,inView]=useInView({
    triggerOnce: false,
    delay: 500
  })

  const slideInVariantsDesktop = {
    initial: { translateX: 100, opacity: 0 },
    animate: { translateX: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };
  
  
  const slideInVariantsMobile = {
    initial: { translateY: 100, opacity: 0 },
    animate: { translateY: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };
  
  
  const [animationVariants, setAnimationVariants] = useState(slideInVariantsDesktop);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setAnimationVariants(slideInVariantsMobile);
      } else {
        setAnimationVariants(slideInVariantsDesktop);
      }
    };
  
  
    window.addEventListener("resize", handleResize);
  
   
    handleResize();
  
   
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { theme } = useContext(ThemeContext);
  const { variant } = props;

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Props data:", props.data);
    if (Array.isArray(props.data)) {
      setData(props.data);
    } else {
      setData([]);
    }
  }, [props.data]);

  return (
    <>
      <motion.div  ref={ref}
              initial={inView? "animate" : "initial"}
              animate={inView? "animate" : "initial"}
              variants={animationVariants} className={LeadCardCss.leadImageDiv}>
        {data.map((lead) => (
          <div key={lead.id} className={LeadCardCss.imageArea}>
            <div
              className={
                variant === "green"
                  ? LeadCardCss.imageBigDiv
                  : LeadCardCss.teamimageBigDiv
              }>
              <div
                className={
                  variant === "green"
                    ? LeadCardCss.imageDiv
                    : LeadCardCss.teamImageDiv
                } style={{display: "inline-block", position: "relative", width: "200px", height: "200px", overflow: "hidden", borderRadius: "50%"}}><img src={lead.photo} alt={lead.name} className={LeadCardCss.photo} style={{width: "auto", height: "100%", marginleft: "-50px"}}/></div>
            </div>
            <div
              className={`${
                theme === "dark"
                  ? LeadCardCss.darkLeadDetails
                  : LeadCardCss.leadDetails
              }`}>
              <h3 className={LeadCardCss.leadName}>{lead.name}</h3>
              <h6 className={LeadCardCss.designation}>{lead.position}</h6>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default LeadsCard;
