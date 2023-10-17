// import React, { useState, useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import ToggleSwitch from "../ToogleSwitch/ToggleSwitch";
// import NavCss from "./Navbar1.module.css";
// import gdsclogo from "./images/gdsclogo.png";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { ThemeContext } from "../../ThemeContext";

// function Navbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [isActive, setActive] = useState(false);

//   const handleClick = () => {
//     setActive(!isActive);
//   };

//   const handleToggle = () => {
//     setActive(!isActive);
//   };

//   const gotoTop = () => {
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       <nav
//         className={`${theme === "dark" ? NavCss.darkNavbar : NavCss.navbar}`}>
//         <ul>
//           <Link
//             to="/"
//             onClick={gotoTop}
//             className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}>
//             <div className={NavCss.logoimagediv}>
//               <img src={gdsclogo} className={NavCss.gdsclogo} alt="gdsclogo" />
//               <div className={NavCss.logoname}>
//                 <p className={NavCss.logonameheading}>
//                   Google Developer Student Clubs{" "}
//                 </p>
//                 <p className={NavCss.logonameheading2}>
//                   The LNM Institute of Information Technology
//                 </p>
//               </div>
//             </div>
//           </Link>
//           <div
//             id={`${theme === "dark" ? NavCss.darkdiv : ""}`}
//             className={
//               isActive
//                 ? `${NavCss.listDiv} ${NavCss.active}`
//                 : `${NavCss.listDiv}`
//             }>
//             <NavLink
//               className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
//               to="/"
//               onClick={() => {
//                 handleToggle();
//                 gotoTop();
//               }}>
//               Home
//             </NavLink>
//             <NavLink
//               className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
//               to="/about"
//               onClick={() => {
//                 handleToggle();
//                 gotoTop();
//               }}>
//               About
//             </NavLink>
//             <NavLink
//               className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
//               to="/events"
//               onClick={() => {
//                 handleToggle();
//                 gotoTop();
//               }}>
//               Events
//             </NavLink>
//             <NavLink
//               className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
//               to="/projects"
//               onClick={() => {
//                 handleToggle();
//                 gotoTop();
//               }}>
//               Projects
//             </NavLink>
//             <NavLink
//               className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
//               to="/our-team"
//               onClick={() => {
//                 handleToggle();
//                 gotoTop();
//               }}>
//               Our Team
//             </NavLink>
//             <Link
//               className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
//               onClick={() => {
//                 toggleTheme();
//                 handleToggle();
//               }}>
//               <ToggleSwitch />
//             </Link>
//             <NavLink
//               to="/admin"
//               className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
//               onClick={() => {
//                 gotoTop();
//                 handleToggle();
//               }}>
//               Admin
//             </NavLink>
//             <NavLink
//               to="/login"
//               className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
//               onClick={() => {
//                 gotoTop();
//                 handleToggle();
//               }}>
//              Login
//             </NavLink>
//             <Link to="/button">
//               <button className={NavCss.button1}>Join the community</button>
//             </Link>
//           </div>
//           <div>
//             <Link
//               to="/button"
//               className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}>
//               <button className={NavCss.button}>Join the community</button>
//             </Link>
//           </div>
//         </ul>
//         <div
//           onClick={handleClick}
//           className={`${
//             theme === "dark" ? NavCss.darkhamburgerMenu : NavCss.hamburgerMenu
//           }`}>
//           <a>
//             <GiHamburgerMenu
//               className={`${
//                 theme === "dark" ? NavCss.darkhamburger : NavCss.hamburger
//               }`}
//             />
//           </a>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import NavCss from "./Navbar1.module.css";
import gdsclogo from "./images/gdsclogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeContext } from "../../ThemeContext";

function Navbar({toshowAdmin}) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  const handleToggle = () => {
    setActive(!isActive);
  };

  const gotoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleTogglee = (e) => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <nav
        className={`${theme === "dark" ? NavCss.darkNavbar : NavCss.navbar}`}>
        <ul>
          <Link
            to="/"
            onClick={gotoTop}
            className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}>
            <div className={NavCss.logoimagediv}>
              <img src={gdsclogo} className={NavCss.gdsclogo} alt="gdsclogo" />
              <div className={NavCss.logoname}>
                <p className={NavCss.logonameheading}>
                  Google Developer Student Clubs{" "}
                </p>
                <p className={NavCss.logonameheading2}>
                  The LNM Institute of Information Technology
                </p>
              </div>
            </div>
          </Link>
          <div
            id={`${theme === "dark" ? NavCss.darkdiv : ""}`}
            className={
              isActive
                ? `${NavCss.listDiv} ${NavCss.active}`
                : `${NavCss.listDiv}`
            }>
            <NavLink
              className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
              to="/"
              onClick={() => {
                handleToggle();
                gotoTop();
              }}>
              Home
            </NavLink>
            <NavLink
              className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
              to="/about"
              onClick={() => {
                handleToggle();
                gotoTop();
              }}>
              About
            </NavLink>
            <NavLink
              className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
              to="/events"
              onClick={() => {
                handleToggle();
                gotoTop();
              }}>
              Events
            </NavLink>
            <NavLink
              className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
              to="/projects"
              onClick={() => {
                handleToggle();
                gotoTop();
              }}>
              Projects
            </NavLink>
            <NavLink
              className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
              to="/our-team"
              onClick={() => {
                handleToggle();
                gotoTop();
              }}>
              Our Team
            </NavLink>
            <span>
            <Link
              className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
             >
    <span  className={NavCss.toggleSwitch} >
      <input type={NavCss.checkbox} checked={isChecked}/>
      <span   onClick={() => {
                toggleTheme();
                handleToggle();
                handleTogglee();
              }}    className={`${NavCss.slider} ${isChecked ? NavCss.sliderOff : NavCss.sliderOn}`} />
    </span>
            </Link>
            </span>
    
            <NavLink
              to="/admin"
              style={toshowAdmin ? {display:""}: {display:"none"}}
              className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
              onClick={() => {
                gotoTop();
                handleToggle();
              }}>
              Admin
            </NavLink>
            <NavLink
              to="/login"
              className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}
              onClick={() => {
                gotoTop();
                handleToggle();
              }}>
             Login
            </NavLink>
            <Link to="/button">
              <button className={NavCss.button1}>Join the community</button>
            </Link>
          </div>
          <div>
            <Link
              to="/button"
              className={`${theme === "dark" ? NavCss.darklist : NavCss.list}`}>
              <button className={NavCss.button}>Join the community</button>
            </Link>
          </div>
        </ul>
        <div
          onClick={handleClick}
          className={`${
            theme === "dark" ? NavCss.darkhamburgerMenu : NavCss.hamburgerMenu
          }`}>
          <a>
            <GiHamburgerMenu
              className={`${
                theme === "dark" ? NavCss.darkhamburger : NavCss.hamburger
              }`}
            />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

