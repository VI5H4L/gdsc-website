import React, { useContext, useState } from "react";
import AdminCss from "./AdminPortal.module.css";
import { ThemeContext } from "../../ThemeContext";
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";
function AdminPortal() {
  const { theme } = useContext(ThemeContext);
  const [value, onChange] = useState(new Date());

  const variants = {
    initial: { opacity: 0 ,y:100}, 
    animate: { opacity:1,y:0, transition: { duration: 0.9, ease: "easeOut" } }, 
  };

  const [ref,inView]=useInView({
    triggerOnce: false,
    delay: 600
  })
  return (
    <>
      <section id={AdminCss.admin}>
        <div className={AdminCss.headingDiv}>
          <motion.h1
           ref={ref} 
           initial={inView ? "animate" : "initial"}
    animate={inView ? "animate" : "initial"}
    variants={variants} 
            className={
              theme === "dark" ? AdminCss.darkheading : AdminCss.heading
            }>
            Admin Portal
          </motion.h1>
          <select
            className={`${
              theme === "dark" ? AdminCss.darkselect : AdminCss.select
            }`}
            value="Events">
            <option>Projects</option>
            <option>Team</option>
            <option>Lead</option>
          </select>
        </div>

        <form className={AdminCss.form}>
          <div className={AdminCss.formGroup}>
            <label
              className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
              for="name"
              type="text"
              id="name"
              name="name">
              Name of the Event
            </label>
            <input
              className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
            />
          </div>
          <div className={AdminCss.formGroup}>
            <label
              className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
              for="name"
              type="text"
              id="name"
              name="name">
              Description of the event
            </label>
            <input
              className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
            />
          </div>
          <div className={AdminCss.formGroup}>
            <label
              className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
              for="name"
              type="text"
              id="name"
              name="name">
              Timeline of the event
              <div className={AdminCss.timeline}>
                <div className={AdminCss.formGroup1}>
                  <label
                    className={
                      theme === "dark" ? AdminCss.darklabel1 : AdminCss.label1
                    }
                    for="name"
                    type="text"
                    id="name"
                    name="name">
                    From
                  </label>
                  <input
                    type="date"
                    className={
                      theme === "dark" ? AdminCss.darkinput1 : AdminCss.input1
                    }
                  />
                </div>

                <div className={AdminCss.formGroup1}>
                  <label
                    className={
                      theme === "dark" ? AdminCss.darklabel1 : AdminCss.label1
                    }
                    for="name"
                    type="text"
                    id="name"
                    name="name">
                    To
                  </label>
                  <input
                    type="date"
                    format="dd/mm/yyyy"
                    className={
                      theme === "dark" ? AdminCss.darkinput1 : AdminCss.input1
                    }
                  />
                </div>
                <div className={AdminCss.formGroup1}>
                  <label
                    className={
                      theme === "dark" ? AdminCss.darklabel1 : AdminCss.label1
                    }
                    for="name"
                    type="text"
                    id="name"
                    name="name">
                    Venue
                  </label>
                  <input
                    type="text"
                    placeholder="venue"
                    className={
                      theme === "dark" ? AdminCss.darkvenue : AdminCss.venue
                    }
                  />
                </div>
              </div>
            </label>
          </div>
          <div className={AdminCss.formGroup}>
            <label
              className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
              for="name"
              type="text"
              id="name"
              name="name">
              Photo (Enter URL)
            </label>
            <input
              className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
            />
          </div>
          <div className={AdminCss.formGroup}>
            <label
              className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
              for="name"
              type="text"
              id="name"
              name="name">
              RSVP Link
            </label>
            <input
              className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
            />
          </div>
          <div className={AdminCss.formGroup}>
            <label
              className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
              for="name"
              type="text"
              id="name"
              name="name">
              Tenure
            </label>
            <input
              className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
            />
          </div>
          <div className={AdminCss.formGroup}>
            <label
              className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
              for="name"
              type="text"
              id="name"
              name="name">
              Domains
            </label>
            <div className={AdminCss.timeline}>
              <div className={AdminCss.formGroup1}>
                <input
                  type="checkbox"
                  className={
                    theme === "dark" ? AdminCss.darkinput2 : AdminCss.input2
                  }
                />
                <label
                  for="domain"
                  name="domain"
                  className={
                    theme === "dark" ? AdminCss.darklabel1 : AdminCss.label1
                  }>
                  CP
                </label>
              </div>
              <div className={AdminCss.formGroup1}>
                <input
                  type="checkbox"
                  className={
                    theme === "dark" ? AdminCss.darkinput2 : AdminCss.input2
                  }
                />
                <label
                  for="domain"
                  name="domain"
                  className={
                    theme === "dark" ? AdminCss.darklabel1 : AdminCss.label1
                  }>
                  Development
                </label>
              </div>
              <div className={AdminCss.formGroup1}>
                <input
                  type="checkbox"
                  className={
                    theme === "dark" ? AdminCss.darkinput2 : AdminCss.input2
                  }
                />
                <label
                  for="domain"
                  name="domain"
                  className={
                    theme === "dark" ? AdminCss.darklabel1 : AdminCss.label1
                  }>
                  Creative
                </label>
              </div>
              <div className={AdminCss.formGroup1}>
                <input
                  type="checkbox"
                  className={
                    theme === "dark" ? AdminCss.darkinput2 : AdminCss.input2
                  }
                />
                <label
                  for="domain"
                  name="domain"
                  className={
                    theme === "dark" ? AdminCss.darklabel1 : AdminCss.label1
                  }>
                  AI/ML
                </label>
              </div>
              <div className={AdminCss.formGroup1}>
                <input
                  type="checkbox"
                  className={
                    theme === "dark" ? AdminCss.darkinput2 : AdminCss.input2
                  }
                />
                <label
                  for="domain"
                  name="domain"
                  className={
                    theme === "dark" ? AdminCss.darklabel1 : AdminCss.label1
                  }>
                  GameDev
                </label>
              </div>
              <div className={AdminCss.formGroup1}>
                <input
                  type="checkbox"
                  className={
                    theme === "dark" ? AdminCss.darkinput2 : AdminCss.input2
                  }
                />
                <label
                  for="domain"
                  name="domain"
                  className={
                    theme === "dark" ? AdminCss.darklabel1 : AdminCss.label1
                  }>
                  Management
                </label>
              </div>
            </div>
          </div>
          <div className={AdminCss.formGroup}>
            <label
              className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
              for="name"
              type="text"
              id="name"
              name="name">
              Speakers (Name1,Name2,Name3,Name4)
            </label>
            <input
              className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
            />
          </div>
          <div className={AdminCss.formGroup}>
            <label
              className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
              for="name"
              type="text"
              id="name"
              name="name">
              Facilitator (Name1,Name2,Name3,Name4)
            </label>
            <input
              className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default AdminPortal;
