import React from 'react'
import PopCss from './Popup.module.css'
import {useState} from 'react';

function PopupDiv(props) {

  
    return ( props.trigger)?(
        <>
 
        <div className={PopCss.main}>
           <div className={PopCss.inner}>
            {props.children}
           </div>
        </div>
        </>
     ):"";
}

export default PopupDiv;