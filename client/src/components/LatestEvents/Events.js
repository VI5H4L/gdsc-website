import React, { useContext, useEffect, useState } from "react";
import EventCss from "./Events.module.css";
import EventsData from "../../Data/Events";
import { ThemeContext } from "../../ThemeContext";
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";

function Events() {
  const { theme } = useContext(ThemeContext);
  const [events, setEvents] = useState([]);

    const [ref,inView]=useInView({
    triggerOnce: false
  })

  const slideInVariants = {
    initial: { translateY: 100, opacity: 0 }, 
    animate: { translateY: 0, opacity:1, transition: { duration: 0.7, ease: "easeOut" } }, 
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("https://gdscbackend.vercel.app/events/all");
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
        <motion.h1
         ref={ref} 
         initial={inView ? "animate" : "initial"}
  animate={inView ? "animate" : "initial"}
  variants={slideInVariants}
          className={`${
            theme === "dark" ? EventCss.darkHeading : EventCss.heading
          }`}>
          Latest Events
        </motion.h1>
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
              <div className={EventCss.paraDiv}>
              <p
                className={`${theme === "dark" ? EventCss.darkp : EventCss.p}`}>
                {event.name}
              </p>
              <p
                className={`${theme === "dark" ? EventCss.darkp : EventCss.p}`}>
                {event.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Events;
