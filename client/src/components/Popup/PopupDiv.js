import React from "react";
import PopCss from "./Popup.module.css";
import { useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

function PopupDiv(props) {
  const { theme } = useContext(ThemeContext);

  return props.trigger ? (
    <>
      <div className={theme === "dark" ? PopCss.darkmain : PopCss.main}>
        <div className={theme === "dark" ? PopCss.darkinner : PopCss.inner}>
          {props.children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default PopupDiv;
