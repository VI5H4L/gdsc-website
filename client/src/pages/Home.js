import React,{useContext}from 'react'
import HomeCss from './Home.module.css'
import FacultyCss from './FacultyMentor.module.css'
import homeImage from '../images/homeImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,faFacebookF,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
import About from './About';
import Events from './Events';
import Photo from './PhotoGallery';
import Newsletter from '../components/Newsletter';
import { ThemeContext } from '../ThemeContext';

function Home() {
    
    const  {theme} = useContext(ThemeContext);
    return ( 
        <>
        <section id='Home' className={`${theme === 'dark' ? HomeCss.darkHomeDiv : HomeCss.homeDiv}`}>
        <div className={`${theme === 'dark' ? HomeCss.darkHeadingDiv : HomeCss.headingDiv}`}>
          <h1 className={HomeCss.heading1}>Google</h1>
          <h1 className={HomeCss.heading2}>Developer Student Clubs</h1>
          <h1 className={HomeCss.heading3}>The LNM Institute Of Information Technology</h1>
          <div>
          <button className={`${theme === 'dark' ? HomeCss.darkBrandButtons : HomeCss.brandButtons}`}><FontAwesomeIcon size="1x" icon={faTwitter} /></button>
          <button className={`${theme === 'dark' ? HomeCss.darkBrandButtons : HomeCss.brandButtons}`}><FontAwesomeIcon size="1x" icon={faFacebookF} /></button>
          <button className={`${theme === 'dark' ? HomeCss.darkBrandButtons : HomeCss.brandButtons}`}><FontAwesomeIcon size="1x" icon={faInstagram} /></button>
          <button className={`${theme === 'dark' ? HomeCss.darkBrandButtons : HomeCss.brandButtons}`}><FontAwesomeIcon size="1x" icon={faLinkedinIn} /></button>
          </div>
          
        </div>
        <div className={HomeCss.imageDiv} >
            <img className={HomeCss.homeImage} src={homeImage} alt='homeImage.png' />
        </div>
       
        </section>
        <section id='faculty' className={`${theme === 'dark' ? FacultyCss.darkmainDiv : FacultyCss.mainDiv}`}>


<div className={FacultyCss.midSection}>
    <div>
    <h1  className={`${theme === 'dark' ? FacultyCss.darkHeading : FacultyCss.heading}`}>Faculty Mentor</h1>
    </div>
    <div className={FacultyCss.main}>
    <div className={FacultyCss.imageArea}>
    <div className={`${theme === 'dark' ? FacultyCss.darkimageBigDiv : FacultyCss.imageBigDiv}`}>
    <div className={`${theme === 'dark' ? FacultyCss.darkimageDiv : FacultyCss.imageDiv}`}></div></div>
    </div>
    <div className={FacultyCss.mentorSection}>
    
    <div className={`${theme === 'dark' ? FacultyCss.darkParagraph : FacultyCss.paragraph}`}>
        <div>Mentor name</div>
        <div>Mentor designation</div>
    </div>
    <div className={`${theme === 'dark' ? FacultyCss.darkParagraph : FacultyCss.paragraph}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</div>

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
