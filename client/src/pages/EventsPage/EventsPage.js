import React from "react";
import PagesHeading from "../../components/PagesHeading/PagesHeadingDiv";
import EventImage from "./images/eventsImage.png";
import EventCard from "../../components/Card/Card";
function EventsPage(props) {
  return (
    <>
      <PagesHeading
        heading={props.heading}
        image1={props.image1}
        image2={props.image2}
        FilterHeading={props.FilterHeading}
        variant={props.variant}
      />
      <EventCard
        data={props.data}
        image2={EventImage}
        variant={props.variant}
      />
    </>
  );
}

export default EventsPage;
