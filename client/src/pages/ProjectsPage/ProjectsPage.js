// import React, { useState, useContext } from "react";
// import ProjectCss from "./Projects.module.css";
// import projectImage from "./images/projectImage.png";
// import darkprojectImage from "./images/darkprojectImage.png";
// import AllEventsData from "../../Data/AllEvents";
// import ExpandableData from "../../components/ExpandedDiv/ExpandableData";
// import { ThemeContext } from "../../ThemeContext";


// function EventsPage() {
//   const [isActive, setActive] = useState(false);
//   const [hover, setHover] = useState(false);
//   const handleClick = () => {
//     setActive(!isActive);
//   };

//   const { theme } = useContext(ThemeContext);

//   const [selectedTenure, setSelectedTenure] = useState("");
//   const [selectedDomain, setSelectedDomain] = useState("");

//   const handleTenureChange = (event) => {
//     const tenure = event.target.value;
//     console.log(props.domain);
//     setSelectedTenure(tenure);
//     if (props.onFilterChange) {
//       props.onFilterChange(selectedDomain, tenure);
//     }
//   };

//   const handleDomainChange = (event) => {
//     const domain = event.target.value;
//     console.log(props.tenure);
//     setSelectedDomain(domain);
//     if (props.onFilterChange) {
//       props.onFilterChange(domain, selectedTenure);
//     }
//   };

//   const [filteredData, setFilteredData] = useState([]);
//   const [allData, setAllData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/projects/all");
//       const data = await response.json();
//       setAllData(data);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   const handleFilterChange = async (selectedDomain, selectedTenure) => {
//     try {
//     let url = "http://localhost:8000/projects/filter";

//       if (selectedDomain && selectedTenure) {
//         console.log('working');
//         url += `?domains=${selectedDomain}&&tenure=${selectedTenure}`;
//       } else if (selectedDomain) {
//         url += `?domains=${selectedDomain}`;
//       } else if (selectedTenure) {
//         url += `?tenure=${selectedTenure}`;
//       }
//     console.log(selectedDomain);
//     console.log(selectedTenure);
//     const response = await fetch(url);
//     const data = await response.json();
//     setFilteredData(data);
//     console.log(data);
//     } catch (error) {
//       console.error("Error filtering events:", error);
//     }
//   };

//   return (
//     <>
//       <section className={ProjectCss.section1}>
//         <div className={ProjectCss.eventsDiv}>
//           <h1
//             className={`${
//               theme === "dark"
//                 ? ProjectCss.darkeventHeading
//                 : ProjectCss.eventHeading
//             }`}>
//             Projects
//           </h1>
//           <img
//             src={`${theme === "dark" ? darkprojectImage : projectImage}`}
//             className={ProjectCss.eventImage}
//             alt="about-image"
//           />
//         </div>
//       </section>

//       <section className={ProjectCss.section2}>
//         <h1
//           className={`${
//             theme === "dark"
//               ? ProjectCss.darkfilterHeading
//               : ProjectCss.filterHeading
//           }`}>
//           We offer diverse projects that span across all domains!
//         </h1>
//         <div className={ProjectCss.eventsFilterDiv}>
//           <select
//             className={`${
//               theme === "dark" ? ProjectCss.darkselect : ProjectCss.select
//             }`}
//             value={selectedTenure}
//             onChange={handleTenureChange}>
//             <option value="">Select Tenure</option>
//             <option value="2019-2020">2019-2020</option>
//             <option value="2020-2021">2020-2021</option>
//             <option value="2021-2022">2021-2022</option>
//             <option value="2022-2023">2022-2023</option>
//             <option value="2023-2024">2023-2024</option>
//             <option value="2024-2025">2024-2025</option>
//             <option value="2025-2026">2025-2026</option>
//           </select>

//           <select
//             className={`${
//               theme === "dark" ? ProjectCss.darkselect : ProjectCss.select
//             }`}
//             value={selectedDomain}
//             onChange={handleDomainChange}>
//             <option value="">Select Domain</option>
//               <option value="development">Development</option>
//               <option value="creative">Creative</option>
//               <option value="management">Management</option>
//               <option value="gamedev">Game Dev</option>
//               <option value="cp">Competitive Programming</option>
//               <option value="aiml">AI/ML</option>
//           </select>
//         </div>
//       </section>

//       <section className={ProjectCss.section3}>
//         {(filteredData.length > 0 ? filteredData : allData).map((item) => (
//           <div key={item.id} className={ProjectCss.components}>
//             <div className={ProjectCss.ImageDiv}>
//               <img
//                 src={projectImage}
//                 className={ProjectCss.cardImage}
//                 alt="about"
//               />
//             </div>
//             <div>
//               <ExpandableData heading={item.heading} data={item.description} />
//             </div>
//           </div>
//         ))}
//       </section>
//     </>
//   );
// }

// export default EventsPage;


/////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useContext, useEffect } from "react";
import ProjectCss from "./Projects.module.css";
import projectImage from "./images/projectImage.png";
import darkprojectImage from "./images/darkprojectImage.png";
import ExpandableData from "../../components/ExpandedDiv/ExpandableData";
import { ThemeContext } from "../../ThemeContext";
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";

function ProjectsPage() {
  const [isActive, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  let showTag = true;
  const { theme } = useContext(ThemeContext);

  const [selectedTenure, setSelectedTenure] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");

  const handleTenureChange = (event) => {
    const tenure = event.target.value;
    setSelectedTenure(tenure);
    console.log(selectedTenure);
    console.log(selectedDomain);
    handleFilterChange(selectedDomain, tenure);
  };

  const handleDomainChange = (event) => {
    const domain = event.target.value;
    setSelectedDomain(domain);
    console.log(selectedDomain);
    console.log(selectedTenure);
    handleFilterChange(domain, selectedTenure);
  };

  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://gdscbackend.vercel.app/projects/all");
      const data = await response.json();
      setAllData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleFilterChange = async (selectedDomain, selectedTenure) => {
    try {
      let url = "https://gdscbackend.vercel.app/projects/filter";

      if (selectedDomain && selectedTenure) {
        console.log('working');
        url += `?domains=${selectedDomain}&&tenure=${selectedTenure}`;
      } else if (selectedDomain) {
        url += `?domains=${selectedDomain}`;
      } else if (selectedTenure) {
        url += `?tenure=${selectedTenure}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setFilteredData(data);
      console.log(data);
    } catch (error) {
      console.error("Error filtering projects:", error);
    }
  };

    
  const variants = {
    initial: { opacity: 0 ,y:100}, 
    animate: { opacity:1,y:0, transition: { duration: 0.9, ease: "easeOut" } }, 
  };

  
  const [ref,inView]=useInView({
    triggerOnce: false,
    delay: 600
  })

  const [ref1,inView1]=useInView({
    triggerOnce: false,
    delay: 600
  })

  const heading=`Projects`;

  return (
    <>
      <section className={ProjectCss.section1}>
        <div className={ProjectCss.eventsDiv}>
          <h1
            className={`${
              theme === "dark"
                ? ProjectCss.darkeventHeading
                : ProjectCss.eventHeading
            }`}
          >
                {" "}
            {heading.split("").map((character, index) =>
        character === " " ? (
          <motion.span key={index} style={{ display: "inline-block", width: "0.6em" }}>
            {" "}
          </motion.span>
        ) : (
          <motion.span
            key={index}
            style={{ display: "inline-block" }}
            animate={{ opacity: 1 ,x:0}}
            initial={{ opacity: 0 ,x:-20}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {character}
          </motion.span>
        )
      )}
          </h1>
          <motion.img  ref={ref} 
           initial={inView ? "animate" : "initial"}
    animate={inView ? "animate" : "initial"}
    variants={variants} 
            src={`${theme === "dark" ? darkprojectImage : projectImage}`}
            className={ProjectCss.eventImage}
            alt="about-image"
          />
        </div>
      </section>

      <section className={ProjectCss.section2}>
        <motion.h1
           ref={ref1} 
           initial={inView1 ? "animate" : "initial"}
    animate={inView1 ? "animate" : "initial"}
    variants={variants} 
          className={`${
            theme === "dark"
              ? ProjectCss.darkfilterHeading
              : ProjectCss.filterHeading
          }`}
        >
          We offer diverse projects that span across all domains!
        </motion.h1>
        <div className={ProjectCss.eventsFilterDiv}>
          <motion.select whileHover={{scale:1.2}}
            className={`${
              theme === "dark" ? ProjectCss.darkselect : ProjectCss.select
            }`}
            value={selectedTenure}
            onChange={handleTenureChange}
          >
            <option value="">Select Tenure</option>
            <option value="2019-2020">2019-2020</option>
            <option value="2020-2021">2020-2021</option>
            <option value="2021-2022">2021-2022</option>
            <option value="2022-2023">2022-2023</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2024-2025">2024-2025</option>
            <option value="2025-2026">2025-2026</option>
          </motion.select>

          {showTag && (<motion.select  whileHover={{scale:1.2}}
            className={`${
              theme === "dark" ? ProjectCss.darkselect : ProjectCss.select
            }`}
            name={selectedDomain}
            onChange={handleDomainChange}
          >
            <option value="">Select Domain</option>
            <option value="development">Development</option>
            <option value="creative">Creative</option>
            <option value="management">Management</option>
            <option value="gamedev">Game Dev</option>
            <option value="cp">Competitive Programming</option>
            <option value="aiml">AI/ML</option>
          </motion.select>
          )}
        </div>
      </section>

      <section className={ProjectCss.section3}>
        {(filteredData.length > 0 ? filteredData : allData).map((item) => (
          <div key={item.id} className={ProjectCss.components}>
            <div className={ProjectCss.ImageDiv}>
              <img
                src={projectImage}
                className={ProjectCss.cardImage}
                alt="about"
              />
            </div>
            <div>
              <ExpandableData heading={item.heading} data={item} event={item.teamMembers} whichMember={"Team Members(s)"}  project={item.teamMentors} whichMentor={"Team Mentors(s)"}/>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default ProjectsPage;
