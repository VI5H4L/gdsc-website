const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
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
  buttonlink: {
    //GDSC Community link (RSVP)
    type: String,
  },
  tenure: {
    type: String,
    enum: ["2019-2020", "2020-2021", "2021-2022", "2022-2023", "2023-2024","2024-2025","2025-2026"],
    required: true,
  },
  domains: [
    {
      type: String,
      enum: ["development", "creative", "management", "gamedev", "cp", "aiml"],
      required: true,
    },
  ],
  speakers: [
    {
      type: String,
    },
  ],
  facilitators: [
    {
      type: String,
    },
  ],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
