import React from 'react'
import FooterCss from './Footer.module.css';
import HomeCss from './Home.module.css';
import gdsclogo from '../images/gdsclogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,faFacebookF,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'; 


function Footer() {
    return ( 
        <>
        <section id='Footer' className={FooterCss.main}>
          
     
       
            <div className={FooterCss.column1}>
            <div className={FooterCss.logoimagediv}>
           <img src={gdsclogo}  className={FooterCss.gdsclogo}alt='gdsclogo'/>
           <div className={FooterCss.logoname}>
            <p className={FooterCss.logonameheading}>Google Developer Student Clubs </p>
            <p className={FooterCss.logonameheading2}>The LNM Institute of Information Technology</p>
            </div>
         </div>
            <div className={FooterCss.belowLogoFooterSection}>
            <span>dhsbubfai iacsuiucb</span>
          <span>dhsbubfai iacsuiucb</span>
          <span>dhsbubfai iacsuiucb</span>
            </div>
            <div>
         <button className={FooterCss.brandButtons}><FontAwesomeIcon size="1x" icon={faTwitter} /></button>
          <button className={FooterCss.brandButtons}><FontAwesomeIcon size="1x" icon={faFacebookF} /></button>
          <button className={FooterCss.brandButtons}><FontAwesomeIcon size="1x" icon={faInstagram} /></button>
          <button className={FooterCss.brandButtons}><FontAwesomeIcon size="1x" icon={faLinkedinIn} /></button>
          </div>
            </div>

<div className={FooterCss.footerDataDiv}>
            <div className={FooterCss.data}>
            <h2>XYZ</h2>
          <h4>Lorem ipsum</h4>
         <h4>Lorem ipsum</h4>
         <h4>Lorem ipsum</h4>
          </div>

          <div className={FooterCss.data}>
            <h2>XYZ</h2>
          <h4>Lorem ipsum</h4>
         <h4>Lorem ipsum</h4>
         <h4>Lorem ipsum</h4>
          </div>

              <div className={FooterCss.data}>
            <h2>XYZ</h2>
          <h4>Lorem ipsum</h4>
         <h4>Lorem ipsum</h4>
         <h4>Lorem ipsum</h4>
          </div>
          </div>
            {/* <div className={FooterCss.copyright}>
          <p>© Copyright 2023, All Rights Reserved by GDSC</p>
        </div> */}
        
          {/* </div> */}
        
        </section>

        <section className={FooterCss.copyrightSection}>
        <div className={FooterCss.copyright}>
          <h5 className={FooterCss.cHeading}>© Copyright 2023, All Rights Reserved by GDSC</h5>
        </div>
        </section>

    
        </>
     );
}

export default Footer;