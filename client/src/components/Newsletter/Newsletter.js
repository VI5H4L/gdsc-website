import React, { useContext } from "react";
import FooterCss from "../Footer/Footer.module.css";
import { ThemeContext } from "../../ThemeContext";
function Newsletter() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section
        id="Contacts"
        className={`${
          theme === "dark" ? FooterCss.darkMain1 : FooterCss.main1
        }`}>
        <div className={FooterCss.newsletter}>
          <h1 className={FooterCss.heading}>Subscribe to our newsletter</h1>
          <div className={FooterCss.newsletterInputs}>
            <from type="submit" className={FooterCss.form}>
              <input
                className={`${
                  theme === "dark" ? FooterCss.darkinputs : FooterCss.inputs
                }`}
                type="text"
                placeholder="First name"
              />
              <input
                className={`${
                  theme === "dark" ? FooterCss.darkinputs : FooterCss.inputs
                }`}
                type="text"
                placeholder="Email Address"
              />
              <button
                className={`${
                  theme === "dark" ? FooterCss.darkbutton : FooterCss.button
                }`}>
                Subscribe now
              </button>
            </from>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
