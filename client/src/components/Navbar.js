import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation} from "react-router-dom";
import Navcss from "./Navbar.module.css";
import gdsclogo from '../images/gdsclogo.png'
import ToggleSwitch from "./ToggleSwitch";

export default function Navbar(props) {
  const [isActive, setActive] = useState(false);

  const [isCheck, setIsCheck] = useState(false);

  const [isActive1, setActive1] = useState(true);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  const [isActive4, setActive4] = useState(false);
  const [isActive5, setActive5] = useState(false);
  const [isActive6, setActive6] = useState(false);
  const [isActive7, setActive7] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);
  const handleToggle = () => {
    if(isActive){
      setActive(!isActive);
      setTimeout(()=>{setIsCheck(false)}, 100);
      return;
    }
    else{
      setIsCheck(true);
      setTimeout(()=>{setActive(!isActive);}, 100);
      
      
      return;
    }
    
  };
  const handleToggle1 = () => {

    setActive(!isActive);
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
  };
  const handleToggle2 = () => {
    setActive(!isActive);
    setActive2(true);
    setActive1(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
  };
  const handleToggle3 = () => {
    setActive(!isActive);
    setActive3(true);
    setActive1(false);
    setActive2(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
  };
  const handleToggle4 = () => {
    setActive(!isActive);
    setActive4(true);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
  };
  const handleToggle5 = () => {
    setActive(!isActive);
    setActive5(true);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);

    setActive6(false);
    setActive7(false);
  };
  const handleToggle6 = () => {
    setActive(!isActive);
    setActive6(true);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);

    setActive7(false);
  };
  const handleToggle7 = () => {
    setActive(!isActive);
    setActive7(true);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
  };

  const gotoTop = ()=>{
    window.scrollTo({top:0,left:0,behavior:"smooth"});
  }

  console.log(document.body.offsetHeight);

  function handleScroll() {
    handleToggle5();
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }


  // props.Test1(isActive);
  // props.Test2(handleToggle);
  // if(props.Disable && isActive){
  //   handleToggle();
  // }
  return (
    <>
      <nav className={scroll && Navcss.navbar}> 
        <ul className={Navcss.nav_list}>
          <div className={Navcss.logo}>
            <NavLink onClick={()=>{
                  // handleToggle1(); 
                  // handleToggle();
                  gotoTop();
                }}
                to="/">
              <div className={Navcss.logoimagediv}>
           <img src={gdsclogo}  className={Navcss.gdsclogo}alt='gdsclogo'/>
           <div className={Navcss.logoname}>
            <p className={Navcss.logonameheading}>Google Developer Student Clubs </p>
            <p className={Navcss.logonameheading2}>The LNM Institute of Information Technology</p>
            </div>
         </div>
            </NavLink>
          </div>
          
          <div className={`${Navcss.rightnav} ${!isActive && Navcss.rightnav1} ${!isCheck && Navcss.barNotActive}`} >
            <li>
              <NavLink
                className={`${Navcss.hover_underline_animation} ${
                  isActive1 && Navcss.clickactive
                } `}
                onClick={()=>{
                  handleToggle1(); 
                  handleToggle();
                  gotoTop();
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <Link
                className={`${Navcss.hover_underline_animation} ${
                  isActive2 && Navcss.clickactive
                } `}
                onClick={()=>{
                  handleToggle2(); 
                  handleToggle();
                  gotoTop();
                }}
                to="/about"
              >
                About
              </Link>
            </li>
            
            <li>
              <Link
                className={`${Navcss.hover_underline_animation} ${
                  isActive4 && Navcss.clickactive
                } `}
                onClick={()=>{
                  handleToggle3(); 
                  handleToggle();
                }}
                to="/events"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                className={`${Navcss.hover_underline_animation} ${
                  isActive5 && Navcss.clickactive
                } `}
                onClick={()=>{
                  handleToggle4(); 
                  handleToggle();
                }}
                to="/contact"
              >
                Photos
              </Link>
            </li>
            <li>
              <Link
                className={`${Navcss.hover_underline_animation} ${
                  isActive6 && Navcss.clickactive
                } `}
                onClick={()=>{
                  handleToggle5(); 
                  handleToggle();
                  gotoTop();
                }}
              >
                Our Team
              </Link>
            </li>
          <li>
              <Link
              //  className={`${Navcss.hover_underline_animation} ${
              //   isActive6 && Navcss.clickactive
              // } `}
                onClick={()=>{
                  handleToggle6(); 
                  handleToggle();
                }}
                to="/credits"
              >
               <ToggleSwitch className={Navcss.toggle} />
              </Link>
            </li>
          <li>
              <Link
               className={`${Navcss.hover_underline_animation} ${
                isActive6 && Navcss.clickactive
              } `}
                onClick={()=>{
                  handleToggle7(); 
                  handleToggle();
                }}
                to="/credits"
              >
               <button className={Navcss.button}>
                  Join the community
               </button>
              </Link>
            </li>
          </div>
        </ul>
        <div className={Navcss.burger} onClick={handleToggle}>
          <div className={Navcss.line}></div>
          <div className={Navcss.line}></div>
          <div className={Navcss.line}></div>
        </div>
      </nav>
    </>
  );
}


// import React,{useState,useEffect} from 'react'
// import {BrowserRouter,Switch,Route,NavLink} from 'react-router-dom';
// import NavCss from './Navbar.module.css'
// import gdsclogo from '../images/gdsclogo.png';
// import gdscname from '../images/gdscname.png';




// function Navbar() {
  

//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const Close = () => setClick(false);


//   return 
//   (
//     <>
//     <div>
//   <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
//    <nav className="navbar" onClick={e => e.stopPropagation()}>
//      <div className="nav-container">
//        <NavLink exact to="/" className="nav-logo">
//          CodeBucks
//          <i className="fa fa-code"></i>
//        </NavLink>
//        <ul className={click ? "nav-menu active" : "nav-menu"}>
//          <li className="nav-item">
//            <NavLink
//              exact
//              to="/"
//              activeClassName="active"
//              className="nav-links"
//              onClick={click ? handleClick : null}
//            >
//              Home
//            </NavLink>
//          </li>
//          <li className="nav-item">
//            <NavLink
//              exact
//              to="/about"
//              activeClassName="active"
//              className="nav-links"
//              onClick={click ? handleClick : null}
//            >
//              About
//            </NavLink>
//          </li>
//          <li className="nav-item">
//            <NavLink
//              exact
//              to="/blog"
//              activeClassName="active"
//              className="nav-links"
//              onClick={click ? handleClick : null}
//            >
//              Blog
//            </NavLink>
//          </li>
//          <li className="nav-item">
//            <NavLink
//              exact
//              to="/contact"
//              activeClassName="active"
//              className="nav-links"
//             onClick={click ? handleClick : null}
//            >
//              Contact Us
//            </NavLink>
//          </li>
//        </ul>
//        <div className="nav-icon" onClick={handleClick}>
//          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
//        </div>
//      </div>
//    </nav>
//  </ div>
//     </>
//   );
// }

//     return (  
//         <>
//         <div className={NavCss.navMainDiv}>
//          <div className={NavCss.logoimagediv}>
//             <img src={gdsclogo} alt='gdsclogo'/>
//             <img src={gdscname} alt='gdscname' /> 
//          </div>
//         <ul className={NavCss.navbardiv}>
//             <li >Home</li>
//             <li >About</li>
//             <li >Events</li>
//             <li >Projects</li>
//             <li >Our Team</li>
//         </ul>

//         <button type='submit' className={NavCss.button}>Join the community</button>
        
//         </div>
//         </>
//     );
// }

// export default Navbar;
