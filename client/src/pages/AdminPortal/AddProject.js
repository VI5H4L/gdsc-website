import React, { useContext, useState, useEffect } from "react";
import AdminCss from "./AdminPortal.module.css";
import { ThemeContext } from "../../ThemeContext";
import axios from 'axios';


function AddProject() {
    const { theme } = useContext(ThemeContext);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        timeline: {
          day: "",
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: "",
          venue: "",
        },
        photo: "",
        projectLink: "",
        github: "",
        tenure: "",
        domains: [],
        teamMentors: [],
        teamMembers: [],
      });

      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post("https://gdscbackend.vercel.app/projects/", formData);
    
          console.log("Event data posted successfully:", response.data);
    
          setFormData({
            name: "",
            description: "",
            timeline: {
              day: "",
              startDate: "",
              startTime: "",
              endDate: "",
              endTime: "",
              venue: "",
            },
            photo: "",
            projectLink: "",
            github: "",
            tenure: "",
            domains: [],
            teamMentors: [],
            teamMembers: [],
          });
        } catch (error) {
          console.error("Error posting event data:", error);
        }
      };

      // Handle changes to timeline fields
  const handleTimelineChange = (field, value) => {
    setFormData({
      ...formData,
      timeline: {
        ...formData.timeline,
        [field]: value,
      },
    });
  };

  // Handle changes to domains
  const handleDomainsChange = (domain) => {
    if (formData.domains.includes(domain)) {
      setFormData({
        ...formData,
        domains: formData.domains.filter((d) => d !== domain),
      });
    } else {
      setFormData({
        ...formData,
        domains: [...formData.domains, domain],
      });
    }
  };

  // Handle changes to speakers
  const handleTeamMentorsChange = (value) => {
    setFormData({
      ...formData,
      teamMentors: value.split(",").map((name) => name.trim()),
    });
  };

  // Handle changes to facilitators
  const handleTeamMembersChange = (value) => {
    setFormData({
      ...formData,
      teamMembers: value.split(",").map((name) => name.trim()),
    });
  };
         
    return (
        <form className={AdminCss.form} onSubmit={handleSubmit}>
          
          {/* ... Render other form fields */}

          <div className={AdminCss.formGroup}>
                 <label
                  className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
                  htmlFor="projectname"
                  >
                  Name of the Projects
                </label>
                <input
                type="text"
                  id="projectname"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
                  className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
                />
              </div>
              <div className={AdminCss.formGroup}>
                <label
                  className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
                  htmlFor="projectdescription"
                  >
                  Description of the Events
                </label>
                <input
                type="text"
                  id="projectdescription"
                  name="description"
                  value={formData.description}
                  onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })}
                  className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
                />
              </div>
              <div className={AdminCss.formGroup}>
                <label
                  className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
                  >
                  Timeline of the Events
                  <div className={AdminCss.timeline}>
                  <div className={AdminCss.formGroup1}>
            <label
              className={
                theme === "dark" ? AdminCss.darklabel1 : AdminCss.label1
              }
              htmlFor="timelineday"
              
            >
              Day
            </label>
            <input
              type="text"
              id="timelineday"
              name="timeline.day"
              // placeholder="day"
              value={formData.timeline.day}
          onChange={(e) => handleTimelineChange("day", e.target.value)}
              className={
                theme === "dark" ? AdminCss.darkday : AdminCss.day
              }
            />
          </div>
                    <div className={AdminCss.formGroup1}>
                      <label
                        className={
                          theme === "dark" ? AdminCss.darklabel1 : AdminCss.label1
                        }
                        htmlFor="timelineStartDate"
                        // type="text"
                        >
                        From
                      </label>
                      <input
                        type="date"
                        id="timelineStartDate"
                        name="timeline.startDate"
                        value={formData.timeline.startDate}
          onChange={(e) => handleTimelineChange("startDate", e.target.value)}
                        className={
                          theme === "dark" ? AdminCss.darkinput1 : AdminCss.input1
                        }
                      />
                      <input
              type="time"
              id="timelineStartTime"
        name="timeline.startTime" // Corrected name attribute
        value={formData.timeline.startTime}
          onChange={(e) => handleTimelineChange("startTime", e.target.value)}
              className={
                theme === "dark" ? AdminCss.darkinput1 : AdminCss.input1
              }
            />
                    </div>
    
                    <div className={AdminCss.formGroup1}>
                      <label
                        className={
                          theme === "dark" ? AdminCss.darklabel1 : AdminCss.label1
                        }
                        htmlFor="timelineEndDate"
                        // type="text"
                        >
                        To
                      </label>
                      <input
                        type="date"
                        format="dd/mm/yyyy"
                        id="timelineEndDate"
                        name="timeline.endDate"
                        value={formData.timeline.endDate}
          onChange={(e) => handleTimelineChange("endDate", e.target.value)}
                        className={
                          theme === "dark" ? AdminCss.darkinput1 : AdminCss.input1
                        }
                      />
                      <input
              type="time"
              id="timelineEndTime"
        name="timeline.endTime" // Corrected name attribute
        value={formData.timeline.endTime}
          onChange={(e) => handleTimelineChange("endTime", e.target.value)}
              className={
                theme === "dark" ? AdminCss.darkinput1 : AdminCss.input1
              }
            />
          </div>
                    <div className={AdminCss.formGroup1}>
                      <label
                        className={
                          theme === "dark" ? AdminCss.darklabel1 : AdminCss.label1
                        }
                        htmlFor="timelineVenue"
                        >
                        Venue
                      </label>
                      <input
                        type="text"
                        id="timelineVenue"
                        name="timeline.venue"
                        value={formData.timeline.venue}
          onChange={(e) => handleTimelineChange("venue", e.target.value)}
                        className={
                          theme === "dark" ? AdminCss.darkvenue : AdminCss.venue
                        }
                      />
                    </div>
                  </div>
                </label>
              </div>
              <div className={AdminCss.formGroup}>
                <label
                  className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
                  htmlFor="photoUrl"
                  >
                  Photo (Enter URL)
                </label>
                <input
                type="url"
                  id="photoUrl"
                  name="photo"
                  value={formData.photo}
                  onChange={(e) =>
            setFormData({ ...formData, photo: e.target.value })}
                  className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
                />
              </div>
              <div className={AdminCss.formGroup}>
                <label
                  className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
                  htmlFor="buttonUrl"
                  >
                  Project Link
                </label>
                <input
                type="url"
                  id="buttonUrl"
                  name="projectLink"
                  value={formData.projectLink}
                  onChange={(e) =>
            setFormData({ ...formData, projectLink: e.target.value })}
                  className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
                />
              </div>
              <div className={AdminCss.formGroup}>
                <label
                  className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
                  htmlFor="buttonUrl"
                  >
                  Github Link
                </label>
                <input
                type="url"
                  id="buttonUrl"
                  name="github"
                  value={formData.github}
                  onChange={(e) =>
            setFormData({ ...formData, github: e.target.value })}
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
              <div className={AdminCss.formGroup}>
                <label
                  className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
                  >
                  Domains
                </label>
                <div className={AdminCss.timeline}>
          {["development", "creative", "management", "gamedev", "cp", "aiml"].map((domain) => (
            <div className={AdminCss.formGroup1} key={domain}>
              <input
                type="checkbox"
                id={`domain${domain}`}
                name="domains"
                value={domain}
                checked={formData.domains.includes(domain)}
                onChange={() => handleDomainsChange(domain)}
                className={theme === "dark" ? AdminCss.darkinput2 : AdminCss.input2}
              />
              <label
                htmlFor={`domain${domain}`}
                className={theme === "dark" ? AdminCss.darklabel1 : AdminCss.label1}
              >
                {domain.toUpperCase()}
              </label>
            </div>
          ))}
        </div>
              </div>
              <div className={AdminCss.formGroup}>
                <label
                  className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
                  htmlFor="speakers"
                  >
                  Team Mentors (Name1,Name2,Name3,Name4)
                </label>
                <input
                type="text"
                  id="speakers"
                  name="teamMentors"
                  value={formData.teamMentors.join(", ")}
          onChange={(e) => handleTeamMentorsChange(e.target.value)}
                  className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
                />
              </div>
              <div className={AdminCss.formGroup}>
                <label
                  className={theme === "dark" ? AdminCss.darklabel : AdminCss.label}
                  htmlFor="facilitators"
                >
                  Team Members (Name1,Name2,Name3,Name4)
                </label>
                <input
                  type="text"
                  id="facilitators"
                  name="teamMembers"
                  value={formData.teamMembers.join(", ")}
          onChange={(e) => handleTeamMembersChange(e.target.value)}
                  className={theme === "dark" ? AdminCss.darkinput : AdminCss.input}
                />
              </div>

          <button type="submit" className={AdminCss.button}>
            Submit
          </button>
        </form>
      );
}

export default AddProject;
