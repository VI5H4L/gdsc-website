import React, { useState, useContext } from "react";
import PopCss from "../Popup/Popup.module.css";
import PopupDiv from "../Popup/PopupDiv";
import { RxCross1 } from "react-icons/rx";
import arrow from "../Popup/images/arrow.png";
import { ThemeContext } from "../../ThemeContext";
function ExpandableData(props) {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
    console.log(props.data.name);
  };

  var { variant } = props;
  var name = "";
  const { theme } = useContext(ThemeContext);

  if (variant == "events") {
    name = PopCss.EventSeeMore;
  } else {
    name = PopCss.ProjectSeeMore;
  }

  
  const formattedStartDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(props.data.timeline.startDate));
  const formattedEndDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(props.data.timeline.endDate));

  const domains = props.data && props.data.domains ? props.data.domains : []; // Assuming props.data.domains is an array of domain names
  const formattedDomains = domains.map((domain) => domain.charAt(0).toUpperCase() + domain.slice(1));
  const formattedDomainString = formattedDomains.join(", ");

  const speakers = props.data && props.project ? props.project : []; // Assuming props.data.domains is an array of domain names
  const formattedSpeakers = speakers.map((speaker) => speaker.charAt(0).toUpperCase() + speaker.slice(1));
  const formattedSpeakersString = formattedSpeakers.join(", ");

  const facilitators = props.data && props.event ? props.event : []; // Assuming props.data.domains is an array of domain names
  const formattedFacilitators = facilitators.map((facilitator) => facilitator.charAt(0).toUpperCase() + facilitator.slice(1));
  const formattedFacilitatorsString = formattedFacilitators.join(", ");

  return (
    <>
      <div
        className={`${theme === "dark" ? PopCss.darkmainDiv : PopCss.mainDiv}`}>
        <h1
          className={`${
            theme === "dark" ? PopCss.darkmainHeading : PopCss.mainHeading
          }`}>
          {props.heading}
        </h1>
        {`${props.data.description}`.slice(0, 150)}{" "}
        {/* Display the initial portion of data */}
        {/* <SeeMoreButton /> */}
        <button className={name} onClick={handleClick}>
          ...See More
        </button>
      </div>
      <PopupDiv trigger={isActive}>
        <div className={PopCss.contentDiv}>
          <h1>{props.data.name}</h1>
          <button
            className={theme === "dark" ? PopCss.darkbutton : PopCss.button}
            onClick={handleClick}>
            <RxCross1
              className={theme === "dark" ? PopCss.darkicon : PopCss.icon}
            />
          </button>
          <p className={PopCss.para}>{props.data.description}</p>
          <div className={PopCss.posterDiv}>
            <div className={PopCss.poster}> <img src={props.data.photo} style = {{width: "352px", height: "352px", borderRadius: "15px"}}/></div>
            <div className={PopCss.data}>
              <img src={arrow} className={PopCss.arrow} />
              <div className={PopCss.timeDiv}>
                <div>
                  <span style={{ display: "block" }}>{formattedStartDate}</span>
                  <span>{props.data.timeline.startTime}</span>
                </div>
                <div>
                  <span style={{ display: "block" }}>{formattedEndDate}</span>
                  <span>{props.data.timeline.endTime}</span>
                </div>
              </div>

              <div className={PopCss.content}>
                <div>
                  <span className={PopCss.subHeading}>Venue:</span>
                  <span>{props.data.timeline.venue}</span>
                </div>
                <div>
                  <span className={PopCss.subHeading}>Tenure:</span>
                  <span>{props.data.tenure}</span>
                </div>
                <div>
                  <span className={PopCss.subHeading}>Domain(s):</span>
                  <span>{formattedDomainString}</span>
                </div>
                <div>
                  <span className={PopCss.subHeading}>{props.whichMentor}</span>
                  <span>{formattedSpeakersString}</span>
                </div>
                <div>
                  <span className={PopCss.subHeading}>{props.whichMember}:</span>
                  <span>{formattedFacilitatorsString}</span>
                </div>
                <button className={PopCss.rsvpButton}>RSVP Here</button>
              </div>
            </div>
          </div>
        </div>
      </PopupDiv>
    </>
  );
}

export default ExpandableData;
