import React,{useState,useContext} from 'react'
import ProjectCss from './Projects.module.css'
import projectImage from '../images/projectImage.png'
import darkprojectImage from '../images/darkprojectImage.png'
import AllEventsData from '../Data/AllEvents'
import ExpandableData from '../components/ExpandableData'
import { ThemeContext } from '../ThemeContext';
function EventsPage() {

        const [isActive, setActive] = useState(false);
        const [hover,setHover]=useState(false);
        const handleClick=()=>{
          setActive(!isActive);
        }

        const  {theme} = useContext(ThemeContext);
          
    return ( 

        <>
           <section className={ProjectCss.section1}>
            <div className={ProjectCss.eventsDiv}>
            <h1 className={`${theme === 'dark' ? ProjectCss.darkeventHeading : ProjectCss.eventHeading}`}>Projects</h1>
            <img src={`${theme === 'dark' ? darkprojectImage : projectImage}`} className={ProjectCss.eventImage} alt='about-image' />
            </div>
           </section>

           <section className={ProjectCss.section2}>
              
                <h1 className={`${theme==='dark'?ProjectCss.darkfilterHeading:ProjectCss.filterHeading}`}>We offer diverse projects that span across all domains!</h1>
                <div className={ProjectCss.eventsFilterDiv}>
              <select  className={`${theme==='dark'?ProjectCss.darkselect:ProjectCss.select}`} value="Select Tenure" >
                <option >Select Tenure</option>
                <option>b</option>
                <option>c</option>
              </select>

              <select className={`${theme==='dark'?ProjectCss.darkselect:ProjectCss.select}`} name="Select Domain">
                <option >Select Domain</option>
                <option>b</option>
                <option>c</option>
              </select>
               </div>
           </section>

           <section className={ProjectCss.section3}>
           {AllEventsData.map((item)=>(
                <div key={item.id} className={ProjectCss.components}>
                    <div className={ProjectCss.ImageDiv}  >
                        <img src={projectImage} className={ProjectCss.cardImage} alt='about' />
                    </div>
                    <div>
         
        <ExpandableData heading={item.heading} data={item.description}/>
    </div>
              </div>
            ))

            }
           </section>
           
        </>
     );
}

export default EventsPage;