import React,{useState} from 'react'
import EventCss from './EventsPage.module.css'
import EventImage from '../images/eventsImage.png'
import AllEventsData from '../Data/AllEvents'
import PopupDiv from '../components/PopupDiv'
import ExpandableData from '../components/ExpandableData'

function EventsPage() {

        const [isActive, setActive] = useState(false);
        const [hover,setHover]=useState(false);
        const handleClick=()=>{
          setActive(!isActive);
        }
          
    return ( 

        <>
           <section className={EventCss.section1}>
            <div className={EventCss.eventsDiv}>
            <h1 className={EventCss.eventHeading}>Events</h1>
            <img src={EventImage} className={EventCss.eventImage} alt='about-image' />
            </div>
           </section>

           <section className={EventCss.section2}>
              
                <h1 className={EventCss.filterHeading}>We organize a wide range of events for all our domains!</h1>
                <div className={EventCss.eventsFilterDiv}>
              <select  className={EventCss.select} value="Select Tenure" >
                <option >Select Tenure</option>
                <option>b</option>
                <option>c</option>
              </select>

              <select  className={EventCss.select} name="Select Domain">
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