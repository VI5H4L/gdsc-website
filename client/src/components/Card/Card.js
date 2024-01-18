import React from "react";
import CardCss from "./Card.module.css";
import ExpandableData from "../ExpandedDiv/ExpandableData";
function EventCard(props) {
  const { data } = props;
  console.log(data);
  const { variant } = props;
  // console.log(props.data);
  return (
    <>
      <section className={CardCss.section3}>
        {data.map((item) => (
          <div key={item.id} className={CardCss.components}>
            <div
              className={
                variant === "events" ? CardCss.ImageDiv : CardCss.ImageDiv1
              }>
              <img
                src={item.photo}
                className={CardCss.cardImage}
                alt="about"
              />
            </div>
            <div>
              <ExpandableData
                heading={item.heading}
                data={item}
                variant={props.variant}
                event={item.facilitators} 
                whichMember={"Facilitator(s)"}  
                project={item.speakers} 
                whichMentor={"Speakers(s)"}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default EventCard;
