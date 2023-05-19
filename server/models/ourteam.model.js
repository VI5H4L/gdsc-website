const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ourTeamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    enum: ["core", "domainlead", "gdsclead", "2022-2023", "2023-2024","2024-2025","2025-2026"],
    required: true,
  },
  photo: {
    //URL of DP
    type: String,
  },
  linkedin: {
    type: String,
  },
  instagram: {
    type: String,
  },
  email: {
    type: String,
  },
  tenure: {
    type: String,
    enum: ["2019-2020", "2020-2021", "2021-2022", "2022-2023", "2023-2024","2024-2025","2025-2026"],
    required: true,
  },
  domain: {
    type: String,
    enum: ["development", "creative", "management", "gamedev", "cp", "aiml"],
    required: true,
  }  
});

const batchPicSchema = new Schema({
  batchPhoto: {
    //URL of pic
    type: String,
    required:true,
  },
  tenure: {
    type: String,
    enum: ["2019-2020", "2020-2021", "2021-2022", "2022-2023", "2023-2024","2024-2025","2025-2026"],
    required: true,
  },
  domain: {
    type: String,
    enum: ["development", "creative", "management", "gamedev", "cp", "aiml"],
  }
});

const OurTeam = mongoose.model("OurTeam", ourTeamSchema);
const BatchPic = mongoose.model("BatchPic", batchPicSchema);

module.exports = {OurTeam,BatchPic};
