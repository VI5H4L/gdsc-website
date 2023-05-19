const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timeline: {
    day: { type: String, required: true },
    // YYYY-MM-DD format
    startDate: { type: String, required: true },
    startTime: { type: String, required: true },
    endDate: { type: String, required: true },
    endTime: { type: String, required: true },
    venue: { type: String },
  },
  photo: {
    //URL of picture
    type: String,
  },
  projectLink: {
    //Deployed Project Link
    type: String,
  },
  github: {
    //Project's Github Link
    type: String,
  },
  tenure: {
    type: String,
    enum: ["2019-2020", "2020-2021", "2021-2022", "2022-2023", "2023-2024","2024-2025","2025-2026"]
  },
  domains: [
    {
      type: String,
      enum: ["development", "creative", "management", "gamedev", "cp", "aiml"],
      required: true,
    },
  ],
  teamMentors: [
    {
      type: String,
    },
  ],
  teamMembers: [
    {
      type: String,
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
