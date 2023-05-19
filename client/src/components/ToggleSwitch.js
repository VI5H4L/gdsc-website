import React from 'react'
import ToggleCss from './ToggleSwitch.module.css'

function ToggleSwitch() {
    return ( 

        <>
 <label class={ToggleCss.toggleSwitch}>
  {/* <input type={ToggleCss.checkbox} /> */}
  <span class={ToggleCss.slider}></span>
</label>

        </>
     );
}

export default ToggleSwitch;