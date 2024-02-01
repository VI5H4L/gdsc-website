import React from "react";
import PopCss from "./Popup.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

function PopupDiv(props) {
  const { theme } = useContext(ThemeContext);

  const handleClose = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  return props.trigger ? (
    <>
      <div style={{ border: "none" }} className={theme === "dark" ? PopCss.darkmain : PopCss.main}>
        <div className={theme === "dark" ? PopCss.darkinner : PopCss.inner}>
          {props.children}
        </div>
        <div className={theme === "dark" ? PopCss.overlayDark : PopCss.overlay} onClick={handleClose}></div>
      </div>
    </>
  ) : (
    ""
  );
}

export default PopupDiv;
