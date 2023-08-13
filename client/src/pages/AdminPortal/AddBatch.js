import React, { useContext, useState } from "react";
import axios from "axios"; // Make sure to import axios
import AdminCss from "./AdminPortal.module.css";
import { ThemeContext } from "../../ThemeContext";
// ... (import statements and context)

function AddBatch() {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    batchPhoto: "",
    tenure: "",
    domain: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/ourteam/batchpic", formData);

      console.log("Batch photo data posted successfully:", response.data);

      setFormData({
        batchPhoto: "",
        tenure: "",
        domain: "",
      });
    } catch (error) {
      console.error("Error posting batch photo data:", error);
    }
  };

  return (
    <form className={AdminCss.form} onSubmit={handleSubmit}>
      <div className={AdminCss.formGroup}>
        <label
          className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
          htmlFor="batchPhoto"
        >
          Batch Photo (Enter URL)
        </label>
        <input
          type="url"
          id="batchPhoto"
          name="batchPhoto"
          value={formData.batchPhoto}
          onChange={(e) => setFormData({ ...formData, batchPhoto: e.target.value })}
          className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
        />
      </div>
      <div className={AdminCss.formGroup}>
        <label
          className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
          htmlFor="tenure"
        >
          Tenure
        </label>
        <select
          id="tenure"
          name="tenure"
          value={formData.tenure}
          onChange={(e) => setFormData({ ...formData, tenure: e.target.value })}
          className={theme === "dark" ? AdminCss.darkselect : AdminCss.select}
        >
          <option value="">Select Tenure</option>
          <option value="2019-2020">2019-2020</option>
          <option value="2020-2021">2020-2021</option>
          <option value="2021-2022">2021-2022</option>
          <option value="2022-2023">2022-2023</option>
          <option value="2023-2024">2023-2024</option>
          <option value="2024-2025">2024-2025</option>
          <option value="2025-2026">2025-2026</option>
        </select>
      </div>
      <div className={AdminCss.formGroup}>
        <label
          className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
          htmlFor="domain"
        >
          Domain
        </label>
        <select
          id="domain"
          name="domain"
          value={formData.domain}
          onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
          className={theme === "dark" ? AdminCss.darkselect : AdminCss.select}
        >
          <option value="">Select Domain</option>
          <option value="development">Development</option>
          <option value="creative">Creative</option>
          <option value="management">Management</option>
          <option value="gamedev">GameDev</option>
          <option value="cp">CP</option>
          <option value="aiml">AI/ML</option>
        </select>
      </div>
      <button type="submit" className={AdminCss.button}>
        Submit
      </button>
    </form>
  );
}

export default AddBatch;

