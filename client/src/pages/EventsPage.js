import React,{useState,useContext} from 'react'
import EventCss from './EventsPage.module.css'
import EventImage from '../images/eventsImage.png'
import darkEventImage from '../images/darkEventImage.png'
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
           <section className={EventCss.section1}>
            <div className={EventCss.eventsDiv}>
            <h1 className={`${theme === 'dark' ? EventCss.darkeventHeading : EventCss.eventHeading}`}>Events</h1>
            <img src={`${theme === 'dark' ? darkEventImage : EventImage}`} className={EventCss.eventImage} alt='about-image' />
            </div>
           </section>

           <section className={EventCss.section2}>
              
                <h1 className={`${theme==='dark'?EventCss.darkfilterHeading:EventCss.filterHeading}`}>We organize a wide range of events for all our domains!</h1>
                <div className={EventCss.eventsFilterDiv}>
              <select  className={`${theme==='dark'?EventCss.darkselect:EventCss.select}`} value="Select Tenure" >
                <option >Select Tenure</option>
                <option>b</option>
                <option>c</option>
              </select>

              <select className={`${theme==='dark'?EventCss.darkselect:EventCss.select}`} name="Select Domain">
                <option >Select Domain</option>
                <option>b</option>
                <option>c</option>
              </select>
               </div>
           </section>

           <section className={EventCss.section3}>
           {AllEventsData.map((item)=>(
                <div key={item.id} className={EventCss.components}>
                    <div className={EventCss.ImageDiv}  >
                        <img src={EventImage} className={EventCss.cardImage} alt='about' />
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