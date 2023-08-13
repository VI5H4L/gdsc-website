import React, { useContext, useState } from "react";
import axios from "axios"; // Make sure to import axios
import AdminCss from "./AdminPortal.module.css";
import { ThemeContext } from "../../ThemeContext";
// ... (import statements and context)

function AddGallery() {
  const { theme } = useContext(ThemeContext);
  const [photoUrl, setPhotoUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://gdscbackend.vercel.app/gallery/", { photo: photoUrl });

      console.log("Photo added to gallery:", response.data);

      setPhotoUrl("");
    } catch (error) {
      console.error("Error adding photo to gallery:", error);
    }
  };

  return (
    <form className={AdminCss.form} onSubmit={handleSubmit}>
      <div className={AdminCss.formGroup}>
        <label
          className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
          htmlFor="photoUrl"
        >
          Photo URL
        </label>
        <input
          type="url"
          id="photoUrl"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
        />
      </div>
      <button type="submit" className={AdminCss.button}>
        Add to Gallery
      </button>
    </form>
  );
}

export default AddGallery;

