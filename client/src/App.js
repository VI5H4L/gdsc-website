// import "./App.css";
// import React,{useState,useEffect} from "react";
// import { Route, Routes } from "react-router-dom";
// import Navbar1 from "./components/Navbar/Navbar1";
// import HomePage from "./pages/HomePage/Home";
// import AboutPage from "./pages/AboutPage/AboutPage";
// import Footer from "./components/Footer/Footer";
// import "./fonts/productSans.ttf";
// import { ThemeProvider } from "./ThemeContext";

// /********************************Events components*************************************/
// import EventImage from "./pages/EventsPage/images/eventsImage.png";
// import DarkEventsImage from "./pages/EventsPage/images/darkEventImage.png";
// import PagesHeading from "./components/PagesHeading/PagesHeadingDiv";
// import EventBackground from "./pages/EventsPage/images/eventsBackground.png";
// import EventCard from "./components/Card/Card";
// import AllEventsData from "./Data/AllEvents";
// import EventsPage from "./pages/EventsPage/EventsPage";

// /********************************Projects components*************************************/
// import ProjectImage from "./pages/ProjectsPage/images/projectImage.png";
// import darkProjectImage from "./pages/ProjectsPage/images/darkprojectImage.png";
// import ProjectBackground from "./pages/ProjectsPage/images/projectBackground.png";
// import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

// /********************************Our Team components*************************************/
// import OurTeamImage from "./pages/ProjectsPage/images/teamImage.png";
// import darkTeamImage from "./pages/ProjectsPage/images/darkTeamImage.png";
// import LeadsCard from "./components/LeadsCard/LeadsCard";
// import LeadsData from "./Data/Leads";
// import TeamsPage from "./pages/TeamsPage/Teams";

// /********************************Our Team components*************************************/
// import AdminPortal from "./pages/AdminPortal/AdminPortal";

// /****************************************Loader*****************************************/
// import Loader from "./components/Loader/Loader";
// import Login from './pages/LoginPage/Login'

// function App() {

//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     // Disable the loader after 5.5 seconds
//     setTimeout(() => {
//       setLoading(false);
//     }, 5500);
//   }, []);

//   return (
//     <>
//     {isLoading? <Loader />:
//       <ThemeProvider>
//         <Navbar1 />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div>
//                 <HomePage />
//               </div>
//             }
//           />
//           <Route
//             path="/about"
//             element={
//               <div>
//                 <AboutPage />
//               </div>
//             }
//           />
//           <Route
//             path="/events"
//             element={
//               <div>
//                 <EventsPage
//                   heading="Events"
//                   image1={DarkEventsImage}
//                   image2={EventImage}
//                   FilterHeading="We organise a wide range of events for all our domains!"
//                   variant="events"
//                   data={AllEventsData}
//                 />
//               </div>
//             }
//           />
//           <Route
//             path="/projects"
//             element={
//               <div>
//                 <ProjectsPage
//                   heading="Projects"
//                   image1={darkProjectImage}
//                   image2={ProjectImage}
//                   FilterHeading="We offer diverse projects that span across all domains!"
//                   variant="projects"
//                   data={AllEventsData}
//                 />
//               </div>
//             }
//           />
//           <Route
//             path="/our-team"
//             element={
//               <div>
//                 <TeamsPage
//                   heading="Our Team"
//                   image1={darkTeamImage}
//                   image2={OurTeamImage}
//                   FilterHeading="Our team is filled with the most talented people in each Domain!!"
//                   variant="our-team"
//                 />
//               </div>
//             }
//           />

//           <Route
//             path="/admin"
//             element={
//               <div>
//                 <AdminPortal />
//               </div>
//             }
//           />

// <Route
//             path="/login"
//             element={
//               <div>
//                 <Login />
//               </div>
//             }
//           />
//         </Routes>
//         <Footer />
//       </ThemeProvider>
// }

// {/* <Login /> */}


//     </>
//   );
// }

// export default App;

import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar1 from "./components/Navbar/Navbar1";
import HomePage from "./pages/HomePage/Home";
import AboutPage from "./pages/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import "./fonts/productSans.ttf";
import { ThemeProvider } from "./ThemeContext";

/********************************Events components*************************************/
import EventImage from "./pages/EventsPage/images/eventsImage.png";
import DarkEventsImage from "./pages/EventsPage/images/darkEventImage.png";
import PagesHeading from "./components/PagesHeading/PagesHeadingDiv";
import EventBackground from "./pages/EventsPage/images/eventsBackground.png";
import EventCard from "./components/Card/Card";
import AllEventsData from "./Data/AllEvents";
import EventsPage from "./pages/EventsPage/EventsPage";

/********************************Projects components*************************************/
import ProjectImage from "./pages/ProjectsPage/images/projectImage.png";
import darkProjectImage from "./pages/ProjectsPage/images/darkprojectImage.png";
import ProjectBackground from "./pages/ProjectsPage/images/projectBackground.png";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

/********************************Our Team components*************************************/
import OurTeamImage from "./pages/ProjectsPage/images/teamImage.png";
import darkTeamImage from "./pages/ProjectsPage/images/darkTeamImage.png";
import LeadsCard from "./components/LeadsCard/LeadsCard";
import LeadsData from "./Data/Leads";
import TeamsPage from "./pages/TeamsPage/Teams";

/********************************Our Team components*************************************/
import AdminPortal from "./pages/AdminPortal/AdminPortal";

/****************************************Loader*****************************************/
import Loader from "./components/Loader/Loader";
import Login from "./pages/LoginPage/Login";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [toshowAdmin , SettoshowAdmin]=useState(false)

  const adminhandler=()=>{
        SettoshowAdmin(!toshowAdmin);
  }

  useEffect(() => {
    // Disable the loader after 5.5 seconds
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ThemeProvider>
          <Navbar1 toshowAdmin={toshowAdmin}/>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <HomePage />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div>
                  <AboutPage />
                </div>
              }
            />
            <Route
              path="/events"
              element={
                <div>
                  <EventsPage
                    heading="Events"
                    image1={DarkEventsImage}
                    image2={EventImage}
                    FilterHeading="We organise a wide range of events for all our domains!"
                    variant="events"
                    data={AllEventsData}
                  />
                </div>
              }
            />
            <Route
              path="/projects"
              element={
                <div>
                  <ProjectsPage
                    heading="Projects"
                    image1={darkProjectImage}
                    image2={ProjectImage}
                    FilterHeading="We offer diverse projects that span across all domains!"
                    variant="projects"
                    data={AllEventsData}
                  />
                </div>
              }
            />
            <Route
              path="/our-team"
              element={
                <div>
                  <TeamsPage
                    heading="Our Team"
                    image1={darkTeamImage}
                    image2={OurTeamImage}
                    FilterHeading="Our team is filled with the most talented people in each Domain!!"
                    variant="our-team"
                  />
                </div>
              }
            />

            <Route
              path="/admin"
              element={
                <div>
                  <AdminPortal />
                </div>
              }
            />

            <Route
              path="/login"
              element={
                <div>
                  <Login adminhandler={adminhandler}/>
                </div>
              }
            />
          </Routes>
          <Footer />
        </ThemeProvider>
      )}

      {/* <Login /> */}
    </>
  );
}

export default App;

