import React, { useState,useContext} from 'react';
import PopCss from './Popup.module.css'
import PopupDiv from './PopupDiv';
import {RxCross1} from 'react-icons/rx'
import arrow from '../images/arrow.png'
import { ThemeContext } from '../ThemeContext';
function ExpandableData(props){

  const [isActive, setActive] = useState(false);
 

  const handleClick=()=>{
    setActive(!isActive);
  }

  const  {theme} = useContext(ThemeContext);

  return (
    <>
    <div className={`${theme === 'dark' ? PopCss.darkmainDiv : PopCss.mainDiv}`}>
      <h1 className={`${theme === 'dark' ? PopCss.darkmainHeading : PopCss.mainHeading}`}>{props.heading}</h1>
          {`${props.data}`.slice(0, 150) } {/* Display the initial portion of data */}
          {/* <SeeMoreButton /> */}
          <button className={PopCss.mainButton}  onClick={handleClick}>...See More</button>
        </div>
         <PopupDiv trigger={isActive}>
          <div className={PopCss.contentDiv}>
            <h1 >{props.heading}</h1>
            <button className={theme==='dark'?PopCss.darkbutton:PopCss.button} onClick={handleClick}><RxCross1  className={theme==='dark'?PopCss.darkicon:PopCss.icon}/></button>
            <p className={PopCss.para}>{props.data}</p> 
            <div className={PopCss.posterDiv}>
            <div className={PopCss.poster}> poster </div>
            <div className={PopCss.data}>
            <img src={arrow} className={PopCss.arrow}/>
            <div className={PopCss.timeDiv}>
               
                <div >
                  <span style={{display:"block"}}>7 June2023</span>
                  <span> 7pm</span>
                </div>
                <div>
                  <span style={{display:"block"}}>8 June2023</span>
                  <span> 8pm</span>
                </div>
               </div>
               
               <div className={PopCss.content}>
               <div>
                  <span className={PopCss.subHeading}>Venue:</span>
                  <span> LT-3</span>
                </div>
                <div>
                  <span className={PopCss.subHeading}>Tenure:</span>
                  <span>2021-2022</span>
                </div>      
                <div>
                  <span className={PopCss.subHeading}>Domain(s):</span>
                  <span> 2021-2022</span>
                </div>           
                <div>
                  <span className={PopCss.subHeading}>Speakers(s):</span>
                  <span> Vishal Kumar</span>
                </div>   
                <div>
                  <span className={PopCss.subHeading}>Facilitator(s):</span>
                  <span> Vishal Kumar</span>
                </div>         
               <button className={PopCss.rsvpButton}>RSVP Here</button>
               </div>
            </div>
            </div>
            </div>
        </PopupDiv>
    </>
  );
};

export default ExpandableData;