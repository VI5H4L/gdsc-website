import React,{useState,Component} from 'react'
import { Link, NavLink } from 'react-router-dom';
import ToggleSwitch from './ToggleSwitch';
import NavCss from './Navbar1.module.css';
import gdsclogo from '../images/gdsclogo.png';
import {GiHamburgerMenu} from "react-icons/gi";


function Navbar(){
     
    const [isActive, setActive] = useState(false);

    const handleClick=()=>{
      setActive(!isActive);
    }
    const [isCheck, setIsCheck] = useState(false);

    const handleToggle=()=>
    {
      setActive(!isActive)
    }
   

    const gotoTop = ()=>{
      window.scrollTo({top:0,left:0,behavior:"smooth"});
    }
  



    return ( 

        <>
          <nav className={NavCss.navbar}>
            <ul>
                <Link
                 to="/" 
                 onClick={gotoTop}>
            <div className={NavCss.logoimagediv}>
           <img src={gdsclogo}  className={NavCss.gdsclogo}alt='gdsclogo'/>
           <div className={NavCss.logoname}>
            <p className={NavCss.logonameheading}>Google Developer Student Clubs </p>
            <p className={NavCss.logonameheading2}>The LNM Institute of Information Technology</p>
            </div>
         </div>
         </Link >
                <div className={isActive?`${NavCss.listDiv} ${NavCss.active}`:`${NavCss.listDiv}`}>
              <NavLink
                 className={NavCss.list}
                to="/"
                onClick={()=>{handleToggle();
                  gotoTop();
                }
              }
              >
                Home
              </NavLink>
                <NavLink className={NavCss.list} to="/about"  onClick={()=>{handleToggle();gotoTop(); }}>About</NavLink>
                <NavLink className={NavCss.list} to="/events"  onClick={()=>{handleToggle();gotoTop(); }}>Events</NavLink>
                <NavLink className={NavCss.list} to="/projects"  onClick={()=>{handleToggle();gotoTop(); }}>Projects</NavLink>
                <NavLink className={NavCss.list} to="/our-tem"  onClick={()=>{handleToggle();gotoTop(); }}>Our Team</NavLink>
                <NavLink className={NavCss.list} to="/credits"  onClick={()=>{handleToggle();gotoTop(); }}>Credits</NavLink>
                <Link to="/toggle" className={NavCss.list}  onClick={()=>{handleToggle();gotoTop(); }}><ToggleSwitch /></Link>
                <Link to="/button"><button className={NavCss.button1}>Join the community</button></Link>
                </div>
            <div>
                <Link to="/button"><button className={NavCss.button}>Join the community</button></Link>
                </div>
            </ul>
            <div onClick={handleClick} className={NavCss.hamburgerMenu} ><a ><GiHamburgerMenu  className={NavCss.hamburger} /></a></div>
          </nav>
        </>
     );
    }

export default Navbar;