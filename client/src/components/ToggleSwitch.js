import React, { useState } from 'react';
import ToggleCss from './ToggleSwitch.module.css'

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={ToggleCss.toggleSwitch} onClick={handleToggle}>
      <input type={ToggleCss.checkbox} checked={isChecked} onClick={handleToggle} />
      <span className={`${ToggleCss.slider} ${isChecked ? ToggleCss.sliderOff : ToggleCss.sliderOn}`} />
    </label>
  );
};

export default ToggleSwitch;
