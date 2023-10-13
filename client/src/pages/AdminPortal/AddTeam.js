import React, { useContext, useState } from "react";
import axios from "axios"; // Make sure to import axios
import AdminCss from "./AdminPortal.module.css";
import { ThemeContext } from "../../ThemeContext";
// ... (import statements and context)

function AddTeam() {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    photo: "",
    linkedin: "",
    instagram: "",
    email: "",
    tenure: "",
    domain: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form...");
    console.log("Form Data:", formData);
    try {
      const response = await axios.post("https://gdscbackend.vercel.app/ourteam/", formData);

      console.log("Team member data posted successfully:", response);

      setFormData({
        name: "",
        position: "",
        photo: "",
        linkedin: "",
        instagram: "",
        email: "",
        tenure: "",
        domain: "",
      });
    } catch (error) {
      console.error("Error posting team member data:", error);
    }
  };

  // const handleDomainsChange = (domains) => {
  //   if (formData.domain.includes(domains)) {
  //     setFormData({
  //       ...formData,
  //       domain: formData.domain.filter((d) => d !== domains),
  //     });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       domain: [...formData.domain, domains],
  //     });
  //   }
  // };

  return (
    <form className={AdminCss.form} onSubmit={handleSubmit}>
      <div className={AdminCss.formGroup}>
        <label
          className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
        />
      </div>
      <div className={AdminCss.formGroup}>
        <label
          className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
          htmlFor="position"
        >
          Position
        </label>
        <select
          id="position"
          name="position"
          value={formData.position}
          onChange={(e) => setFormData({ ...formData, position: e.target.value })}
          className={theme === "dark" ? AdminCss.darkselect : AdminCss.select}
        >
          <option value="">Select Position</option>
          <option value="core">Core</option>
          <option value="domainlead">Domain Lead</option>
          <option value="gdsclead">GDSC Lead</option>
        </select>
      </div>
      <div className={AdminCss.formGroup}>
        <label
          className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
          htmlFor="photo"
        >
          Photo (Enter URL)
        </label>
        <input
          type="url"
          id="photo"
          name="photo"
          value={formData.photo}
          onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
          className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
        />
      </div>
      {/* ... (continue rendering other fields) */}
      <div className={AdminCss.formGroup}>
        <label
          className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
          htmlFor="linkedinLink"
        >
          LinkedIn (Enter URL)
        </label>
        <input
          type="url"
          id="linkedinLink"
          name="linkedin"
          value={formData.linkedin}
          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
          className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
        />
      </div>
      <div className={AdminCss.formGroup}>
        <label
          className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
          htmlFor="instagram"
        >
          Instagram (Enter URL)
        </label>
        <input
          type="url"
          id="instagram"
          name="instagram"
          value={formData.instagram}
          onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
          className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
        />
      </div>
      <div className={AdminCss.formGroup}>
        <label
          className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
          htmlFor="email"
        >
          Email (Enter URL)
        </label>
        <input
          type="url"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
        />
      </div>
      <div className={AdminCss.formGroup}>
                <label
                  className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
                  htmlFor="tenureInput"
                >
                  Tenure
                </label>
                <input
                  type="text"
                  id="tenureInput"
                  name="tenure"
                  value={formData.tenure}
                  onChange={(e) =>
            setFormData({ ...formData, tenure: e.target.value })}
                  className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
                  placeholder="Enter tenure"
                />
              </div>
      // <div className={AdminCss.formGroup}>
      //           <label
      //             className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
      //             >
      //             Domains
      //           </label>
      //           <div className={AdminCss.timeline}>
      //     {["development", "creative", "management", "gamedev", "cp", "aiml"].map((domain) => (
      //       <div className={AdminCss.formGroup1} key={domain}>
      //         <input
      //           type="checkbox"
      //           id={`domain${domain}`}
      //           name="domain"
      //           value={domain}
      //           checked={formData.domain.includes(domain)}
      //           onChange={() => handleDomainsChange(domain)}
      //           className={theme === "dark" ? AdminCss.darkinput2 : AdminCss.input2}
      //         />
      //         <label
      //           htmlFor={`domain${domain}`}
      //           className={theme === "dark" ? AdminCss.darklabel1 : AdminCss.label1}
      //         >
      //           {domain.toUpperCase()}
      //         </label>
      //       </div>
      //     ))}
      //   </div>
      //         </div>

      <div className={AdminCss.formGroup}>
        <label
          className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
          htmlFor="domainSelect"
        >
          Domains
        </label>
        <select
          id="domainSelect"
          name="domain"
          value={formData.domain}
          onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
          className={theme === "dark" ? AdminCss.darkselect : AdminCss.select}
        >
          <option value="">Select Domain</option>
          <option value="development">Development</option>
          <option value="creative">Creative</option>
          <option value="management">Management</option>
          <option value="gamedev">Game Development</option>
          <option value="cp">Competitive Programming</option>
          <option value="aiml">AI/ML</option>
        </select>
      </div>
      <button type="submit" className={AdminCss.button}>
        Submit
      </button>
    </form>
  );
}

export default AddTeam;

