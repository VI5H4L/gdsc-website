import React, { useContext, useEffect, useState } from "react";
import EventCss from "./Events.module.css";
import EventsData from "../../Data/Events";
import { ThemeContext } from "../../ThemeContext";

function Events() {
  const { theme } = useContext(ThemeContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:8000/events/all");
      const data = await response.json();
      setEvents(data.slice(0,3));
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
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
          {events.map((event) => (
            <div key={event.id} className={EventCss.eventsDiv}>
              <div
                className={`${
                  theme === "dark" ? EventCss.darkImageDiv : EventCss.imageDiv
                }`}>
                <img
                  src={event.photo}
                  alt={event.name}
                  className={EventCss.photo}
                  style={{
                    width: "270px",
                    height: "230px",
                    borderRadius: "9px",
                  }}
                />
              </div>
              <p
                className={`${theme === "dark" ? EventCss.darkp : EventCss.p}`}>
                {event.name}
              </p>
              <p
                className={`${theme === "dark" ? EventCss.darkp : EventCss.p}`}>
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Events;
