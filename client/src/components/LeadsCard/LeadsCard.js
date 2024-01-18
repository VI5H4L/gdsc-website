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
  
  const slideInVariantsMobile = {
    initial: { translateY: 100, opacity: 0 },
    animate: { translateY: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };
  
  
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

  const convertDriveURL = (url) => {
    const parts = url.split('/');
    const fileId = parts[parts.length - 2];
    // console.log(fileId);
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  };

  return (
    <div className="leads-image-maindiv">
      <motion.div  ref={ref}
              initial={inView? "animate" : "initial"}
              animate={inView? "animate" : "initial"}
              variants={slideInVariantsMobile} style={{
                marginTop:"5rem"
              }} className={LeadCardCss.leadImageDiv}>
                  
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
                } style={{display: "inline-block", position: "relative", width: "200px", height: "200px", overflow: "hidden", borderRadius: "50%"}}><img

              src={convertDriveURL(lead.photo)} alt={lead.name} className={LeadCardCss.photo} style={{width: "100%", height: "100%",objectFit:"cover", marginleft: "-50px"}}/></div>
            </div>
            <div
              className={`${
                theme === "dark"
                  ? LeadCardCss.darkLeadDetails
                  : LeadCardCss.leadDetails
              }`}>
              <h3 className={LeadCardCss.leadName}>{lead.name}</h3>
              {lead.position === "domainlead" ? <h6 className={LeadCardCss.designation}>Domain Lead</h6> : null}
              {lead.position === "gdsclead"  ? <h6 className={LeadCardCss.designation}>GDSC Lead</h6> : null}
              <h6 className={LeadCardCss.designation}>{lead.tenure}</h6>
            </div>
          </div>
        ))}


      </motion.div>
    </div>
  );
}

export default LeadsCard;
