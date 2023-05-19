import React from 'react'
import FacultyCss from './FacultyMentor.module.css'
import AboutCss from './About.module.css';
import LeadsData from '../Data/Leads';


function About() {
    return ( 
        <>
        <section id="our-team" className={AboutCss.main}>
        <h1 className={AboutCss.heading}>Meet our Leads !!</h1>
        <div className={AboutCss.leadImageDiv}>
            {LeadsData.map((item)=>(
                <div key={item.id} className={AboutCss.imageArea}>
                <div className={AboutCss.imageBigDiv}>
                <div className={AboutCss.imageDiv}></div>
                </div>
                <div className={AboutCss.leadDetails}>
                    <h3>{item.name}</h3>
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