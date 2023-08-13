import React, { useContext, useState } from "react";
import AdminCss from "./AdminPortal.module.css";
import { ThemeContext } from "../../ThemeContext";
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import AddEvent from './AddEvent';
import AddProject from "./AddProject";
import AddTeam from "./AddTeam";
import AddBatch from "./AddBatch";
import AddGallery from "./AddGallery";


function AdminPortal() {
  const { theme } = useContext(ThemeContext);
  const [value, onChange] = useState(new Date());
  const [selectedFilter, setSelectedFilter] = useState("Events"); // Default filter

  const variants = {
    initial: { opacity: 0 ,y:100}, 
    animate: { opacity:1,y:0, transition: { duration: 0.9, ease: "easeOut" } }, 
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
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
            value={selectedFilter}
            onChange={handleFilterChange}>
            <option value="Events">Events</option>
            <option value="Projects">Projects</option>
            <option value="Team">Team</option>
            <option value="Batch">Batch</option>
            <option value="Gallery">Gallery</option>
          </select>
          {selectedFilter === "Events" && <AddEvent />}
          {selectedFilter === "Projects" && <AddProject />}
          {selectedFilter === "Team" && <AddTeam />}
          {selectedFilter === "Batch" && <AddBatch />}
          {selectedFilter === "Gallery" && <AddGallery />}
        </div>
      </section>
    </>
  );
}

export default AdminPortal;
