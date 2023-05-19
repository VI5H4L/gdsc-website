import React from 'react'
import EventCss from './Events.module.css'
import EventsData from '../Data/Events';


function Events() {
    return ( 
        <>
        <section id='Events' className={EventCss.main}>
            <h1 className={EventCss.heading}>Latest Events</h1>
            <div className={EventCss.mainImageDiv}>
                {EventsData.map((item)=>(
 <div key={item.id} className={EventCss.eventsDiv}>
 <div className={EventCss.imageDiv}>..</div>
 <p>{item.name}</p>
 <p>{item.description}</p>
 </div>
                ))

                }

            
            </div>

            
        </section>
        </>
     );
}

export default Events;