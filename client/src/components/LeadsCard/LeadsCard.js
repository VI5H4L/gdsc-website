import React, { useContext } from "react";
import LeadCardCss from "./LeadsCard.module.css";
import { ThemeContext } from "../../ThemeContext";
function LeadsCard(props) {
  const { theme } = useContext(ThemeContext);
  const { data, variant } = props;
  return (
    <>
      <div className={LeadCardCss.leadImageDiv}>
        {data.map((item) => (
          <div key={item.id} className={LeadCardCss.imageArea}>
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
                }></div>
            </div>
            <div
              className={`${
                theme === "dark"
                  ? LeadCardCss.darkLeadDetails
                  : LeadCardCss.leadDetails
              }`}>
              <h3 className={LeadCardCss.leadName}>{item.name}</h3>
              <h6 className={LeadCardCss.designation}>{item.desgnation}</h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LeadsCard;
