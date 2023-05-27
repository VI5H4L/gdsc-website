import React,{useContext} from 'react'
import FacultyCss from './FacultyMentor.module.css'
import AboutCss from './About.module.css';
import LeadsData from '../Data/Leads';
import { ThemeContext } from '../ThemeContext';


function About() {
    const  {theme} = useContext(ThemeContext);
    return ( 
        <>
        <section id="our-team" className={AboutCss.main}>
        <h1 className={`${theme === 'dark' ? AboutCss.darkHeading : AboutCss.heading}`}>Meet our Leads !!</h1>
        <div className={AboutCss.leadImageDiv}>
            {LeadsData.map((item)=>(
                <div key={item.id} className={AboutCss.imageArea}>
                <div className={AboutCss.imageBigDiv}>
                <div className={AboutCss.imageDiv}></div>
                </div>
                <div className={`${theme === 'dark' ? AboutCss.darkLeadDetails : AboutCss.leadDetails}`}>
                    <h3 >{item.name}</h3>
                    <h6>{item.desgnation}</h6>
                </div>
                </div>
            ))

            }
        </div>
        </section>
        </>
     );
}

export default About;