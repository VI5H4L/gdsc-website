import React, { useContext } from "react";
import EventCss from "./Events.module.css";
import EventsData from "../../Data/Events";
import { ThemeContext } from "../../ThemeContext";

function Events() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section
        id="Events"
        className={`${theme === "dark" ? EventCss.darkmain : EventCss.main}`}>
        <h1
          className={`${
            theme === "dark" ? EventCss.darkHeading : EventCss.heading
          }`}>
          Latest Events
        </h1>
        <div className={EventCss.mainImageDiv}>
          {EventsData.map((item) => (
            <div key={item.id} className={EventCss.eventsDiv}>
              <div
                className={`${
                  theme === "dark" ? EventCss.darkImageDiv : EventCss.imageDiv
                }`}>
                ..
              </div>
              <p
                className={`${theme === "dark" ? EventCss.darkp : EventCss.p}`}>
                {item.name}
              </p>
              <p
                className={`${theme === "dark" ? EventCss.darkp : EventCss.p}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Events;
