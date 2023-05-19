import React from 'react'
import FooterCss from '../pages/Footer.module.css'

function Newsletter() {
    return ( 
        <>
        <section id="Contacts"  className={FooterCss.main1}>
          <div className={FooterCss.newsletter}>
            <h1 className={FooterCss.heading}>Subscribe to our newsletter</h1>
            <div className={FooterCss.newsletterInputs}>
            <from type='submit' className={FooterCss.form} >
            <input className={FooterCss.inputs} type='text' placeholder='First name'/>
            <input className={FooterCss.inputs} type='text' placeholder='Email Address'/>
            <button className={FooterCss.button}>Subscribe now</button>
            </from>
            </div>
      
            </div> 
            </section>
        </>
     );
}

export default Newsletter;