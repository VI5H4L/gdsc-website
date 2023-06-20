import React from "react";
import CardCss from "./Card.module.css";
import ExpandableData from "../ExpandedDiv/ExpandableData";
function EventCard(props) {
  const { data } = props;
  const { variant } = props;
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
                src={props.image2}
                className={CardCss.cardImage}
                alt="about"
              />
            </div>
            <div>
              <ExpandableData
                heading={item.heading}
                data={item.description}
                variant={props.variant}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default EventCard;
