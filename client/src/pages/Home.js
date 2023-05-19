import React from 'react'
import HomeCss from './Home.module.css'
import FacultyCss from './FacultyMentor.module.css'
import homeImage from '../images/homeImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,faFacebookF,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
import About from './About';
import Events from './Events';
import Photo from './PhotoGallery';
import Newsletter from '../components/Newsletter';

function Home() {
    return ( 
        <>
        <section id='Home' className={HomeCss.homeDiv}>
        <div className={HomeCss.headingDiv}>
          <h1 className={HomeCss.heading1}>Google</h1>
          <h1 className={HomeCss.heading2}>Developer Student Clubs</h1>
          <h1 className={HomeCss.heading3}>The LNM Institute Of Information Technology</h1>
          <div>
          <button className={HomeCss.brandButtons}><FontAwesomeIcon size="1x" icon={faTwitter} /></button>
          <button className={HomeCss.brandButtons}><FontAwesomeIcon size="1x" icon={faFacebookF} /></button>
          <button className={HomeCss.brandButtons}><FontAwesomeIcon size="1x" icon={faInstagram} /></button>
          <button className={HomeCss.brandButtons}><FontAwesomeIcon size="1x" icon={faLinkedinIn} /></button>
          </div>
          
        </div>
        <div className={HomeCss.imageDiv} >
            <img className={HomeCss.homeImage} src={homeImage} alt='homeImage.png' />
        </div>
       
        </section>
        <section id='faculty' className={FacultyCss.mainDiv}>


<div className={FacultyCss.midSection}>
    <div>
    <h1 className={FacultyCss.heading}>Faculty Mentor</h1>
    </div>
    <div className={FacultyCss.main}>
    <div className={FacultyCss.imageArea}>
    <div className={FacultyCss.imageBigDiv}>
    <div className={FacultyCss.imageDiv}></div></div>
    </div>
    <div className={FacultyCss.mentorSection}>
    
    <div className={FacultyCss.paragraph}>
        <div>Mentor name</div>
        <div>Mentor designation</div>
    </div>
    <div className={FacultyCss.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</div>

    </div>
    </div>
    </div>
</section>
<About />
       <Events />
   <Photo />
   <Newsletter />

        </>
     );
}

export default Home;
