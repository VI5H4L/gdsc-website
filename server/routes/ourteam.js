const router = require("express").Router();
let { OurTeam, BatchPic } = require("../models/ourteam.model");

//************************************OurTeamSchema************************************

// http://localhost:8000/ourteam/
router.route("/").get(async (req, res) => {
  await OurTeam.find()
    .then((ourteam) => res.json(ourteam))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:8000/ourteam/gdsclead
router.route("/gdsclead").get(async (req, res) => {
  await OurTeam.find({position:"gdsclead"})
    .then((ourteam) => res.json(ourteam))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:8000/ourteam/
router.route("/").post(async (req, res) => {
  try {
    const {
      name,
      position,
      photo,
      linkedin,
      instagram,
      email,
      tenure,
      domain,
    } = req.body;
    const newOurTeam = new OurTeam({
      name,
      position,
      photo,
      linkedin,
      instagram,
      email,
      tenure,
      domain,
    });

    await newOurTeam.save();

    res.status(201).json(newOurTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// http://localhost:8000/ourteam/filter?domain=development&&tenure=2021-2022
// http://localhost:8000/ourteam/filter?domain=development
// http://localhost:8000/ourteam/filter?tenure=2021-2022
router.route("/filter").get(async (req, res) => {
  try {
    const { domain, tenure } = req.query; // Retrieve domain and tenure from the query parameters

    let filters = {}; // Create an empty object to store the filters

    // If domain is provided in the query, add the domain filter
    if (domain) {
      // Split the domains string into an array
      filters.domain = domain; // Match ourteam with any of the provided domains
    }

    // If tenure is provided in the query, add the tenure filter
    if (tenure) {
      filters.tenure = tenure; // Match ourteam with the specified tenure
    }

    const filteredProjects = await OurTeam.find(filters);

    res.json(filteredProjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//************************************BatchPicSchema************************************

// http://localhost:8000/ourteam/batchpic
// http://localhost:8000/ourteam/batchpic?tenure=2021-2022
// http://localhost:8000/ourteam/batchpic?domain=gamedev
router.route("/batchpic").get(async (req, res) => {
  try {
    const { tenure, domain } = req.query; // Retrieve tenure domain from the query parameters

    let filters = {}; // Create an empty object to store the filters

    // If tenure is provided in the query, add the tenure filter
    if (tenure) {
      filters.tenure = tenure; // Match batchpic with the specified tenure
    }
    // If domain is provided in the query, add the domain filter
    if (domain) {
      filters.domain = domain; // Match batchpic with the specified tenure
    }

    const filteredProjects = await BatchPic.find(filters);

    res.json(filteredProjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// http://localhost:8000/ourteam/batchpic
router.route("/batchpic").post(async (req, res) => {
  try {
    const {
      batchPhoto,
      tenure,
      domain
    } = req.body;
    const newBatchPic = new BatchPic({
      batchPhoto,
      tenure,
      domain
    });

    await newBatchPic.save();

    res.status(201).json(newBatchPic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
