import React, { useContext, useEffect, useState } from "react";
import HomeCss from "./Home.module.css";
import FacultyCss from "./FacultyMentor.module.css";
import homeImage from "./images/homeImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import About from "../../components/Leads/Leads";
import Events from "../../components/LatestEvents/Events";
import Photo from "../../components/PhotoGallery/PhotoGallery";
import Newsletter from "../../components/Newsletter/Newsletter";
import LeadsData from "../../Data/Leads";
import { ThemeContext } from "../../ThemeContext";
import facultyImage from "../HomePage/images/faculty_mentor.png";

function Home() {
  const { theme } = useContext(ThemeContext);

  const  [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchAboutData();
}, []);

const fetchAboutData = async () => {
    try {
        // console.log("aaa");
        const response = await fetch('https://gdsc-website.onrender.com/ourteam/gdsclead');
        
        const data = await response.json();
        setLeads(data);
      } catch (error) {
        console.error('Error fetching gdsclead:', error);
      }
}

  return (
    <>
      <section
        id="Home"
        className={`${
          theme === "dark" ? HomeCss.darkHomeDiv : HomeCss.homeDiv
        }`}>
        <div
          className={`${
            theme === "dark" ? HomeCss.darkHeadingDiv : HomeCss.headingDiv
          }`}>
          <h1 className={HomeCss.heading1}>Google</h1>
          <h1 className={HomeCss.heading2}>Developer Student Clubs</h1>
          <h1 className={HomeCss.heading3}>
            The LNM Institute Of Information Technology
          </h1>
          <div>
            <button
              className={`${
                theme === "dark"
                  ? HomeCss.darkBrandButtons
                  : HomeCss.brandButtons
              }`}>
              <FontAwesomeIcon size="1x" icon={faTwitter} />
            </button>
            <button
              className={`${
                theme === "dark"
                  ? HomeCss.darkBrandButtons
                  : HomeCss.brandButtons
              }`}>
              <FontAwesomeIcon size="1x" icon={faFacebookF} />
            </button>
            <button
              className={`${
                theme === "dark"
                  ? HomeCss.darkBrandButtons
                  : HomeCss.brandButtons
              }`}>
              <FontAwesomeIcon size="1x" icon={faInstagram} />
            </button>
            <button
              className={`${
                theme === "dark"
                  ? HomeCss.darkBrandButtons
                  : HomeCss.brandButtons
              }`}>
              <FontAwesomeIcon size="1x" icon={faLinkedinIn} />
            </button>
          </div>
        </div>
        <div className={HomeCss.imageDiv}>
          <img
            className={HomeCss.homeImage}
            src={homeImage}
            alt="homeImage.png"
          />
        </div>
      </section>
      <section
        id="faculty"
        className={`${
          theme === "dark" ? FacultyCss.darkmainDiv : FacultyCss.mainDiv
        }`}>
        <div className={FacultyCss.midSection}>
          <div>
            <h1
              className={`${
                theme === "dark" ? FacultyCss.darkHeading : FacultyCss.heading
              }`}>
              Faculty Mentor
            </h1>
          </div>
          <div className={FacultyCss.main}>
            <div className={FacultyCss.imageArea}>
              <div
                className={`${
                  theme === "dark"
                    ? FacultyCss.darkimageBigDiv
                    : FacultyCss.imageBigDiv
                }`}>
                <div
                  className={`${
                    theme === "dark"
                      ? FacultyCss.darkimageDiv
                      : FacultyCss.imageDiv
                  }`} 
                  style={{
                    display: "inline-block",
                    position: "relative",
                    width: "200px",
                    height: "200px",
                    overflow: "hidden",
                    borderRadius: "50%",
                  }}>
                    <img
                    className="mentorfaculty"
                    src={facultyImage}
                    alt="facultymentor.png"
                    style={{
                      width: "auto",
                      height: "100%",
                      marginleft: "-50px",
                    }}
                  />
                  </div>
              </div>
            </div>
            <div className={FacultyCss.mentorSection}>
              <div
                className={`${
                  theme === "dark"
                    ? FacultyCss.darkParagraph
                    : FacultyCss.paragraph
                }`}>
                <div>Sourabh Kumar</div>
                <div>Mentor designation</div>
              </div>
              <div
                className={`${
                  theme === "dark"
                    ? FacultyCss.darkParagraph
                    : FacultyCss.paragraph
                }`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim venia
              </div>
            </div>
          </div>
        </div>
      </section>

      <About data={leads} variant="green" />
      <Events />
      <Photo />
      <Newsletter />
    </>
  );
}

export default Home;
