import React from 'react'
import AboutCss from './AboutPage.module.css'
import AboutImage from '../images/aboutImage.png'
import DomainImage from '../images/domainImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAngleRight,faTwitter,faInstagram } from '@fortawesome/free-solid-svg-icons';

function AboutPage() {
    return ( 

        <>
        <section className={AboutCss.aboutSection}>
          <div className={AboutCss.aboutDiv}>
            <h1 className={AboutCss.aboutHeading}> About Us</h1>
            <img src={AboutImage} className={AboutCss.aboutImage} alt='about-image' />
          </div>
        </section>


        <section className={AboutCss.aboutSection2}>
          <div className={AboutCss.aboutDiv2}>
            <h1 className={AboutCss.aboutSubHeading}>We're A Vibrant Community Of Student Developers At The LNMIIT</h1>
            <div className={AboutCss.frameDiv}>
            <div className={AboutCss.frame2}><span className={AboutCss.frame2Heading}>13+</span><span className={AboutCss.frame2Heading}>Projects</span></div>
            <div className={AboutCss.frame1}><span className={AboutCss.frame1Heading}>50+</span><span className={AboutCss.frame1Heading}>Students</span></div>
            <div className={AboutCss.frame2}><span className={AboutCss.frame2Heading}>15+</span><span className={AboutCss.frame2Heading}>Events</span></div>
            </div>
           
          </div>
        </section>

        <section className={AboutCss.aboutSection3}>
          <div className={AboutCss.aboutDiv3}>
            <h1 className={AboutCss.aboutSubHeading2}>Introducing Our 6 Domains</h1>
            <div className={AboutCss.domainNameDiv}>
           <div>
            <button className={AboutCss.button} ><FontAwesomeIcon icon={faAngleLeft} size="xl" style={{color: "grey",width:'30px', height:'30px'}} /></button>
            <span className={AboutCss.buttonName}>Creative</span>
            </div>
            <h2 className={AboutCss.smallSubHeading}>Development</h2>
            <div>
            <span className={AboutCss.buttonName}>AI/ML</span>
            <button className={AboutCss.button}><FontAwesomeIcon icon={faAngleRight} size="xl" style={{color: "grey",width:'30px', height:'30px'}} /></button>
            </div>
            </div>
            <div className={AboutCss.domainImageDiv}>
            <img src={DomainImage} className={AboutCss.domainImage}/>
            </div>
          </div>
        </section>

        <section className={AboutCss.aboutSection4}>
          <div className={AboutCss.aboutDiv4}>
           <p className={AboutCss.description}>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su
orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
</p>
          </div>
        </section>
        </>
     );
}

export default AboutPage;