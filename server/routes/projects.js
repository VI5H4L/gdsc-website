const router = require("express").Router();
let Project = require("../models/project.model");

// http://localhost:8000/projects/all
router.route("/all").get(async (req, res) => {
  await Project.find()
    .then((projects) => res.json(projects))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:8000/projects/
router.route("/").post(async (req, res) => {
  try {
    const {
      name,
      description,
      timeline,
      photo,
      projectLink,
      github,
      tenure,
      domains,
      teamMentors,
      teamMembers,
    } = req.body;
    const newProject = new Project({
      name,
      description,
      timeline,
      photo,
      projectLink,
      github,
      tenure,
      domains,
      teamMentors,
      teamMembers,
    });

    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// http://localhost:8000/projects/filter?domains=development,creative&&tenure=2021-2022
// http://localhost:8000/projects/filter?domains=development
// http://localhost:8000/projects/filter?tenure=2021-2022

router.route("/filter").get(async (req, res) => {
    try {
      const { domains, tenure } = req.query; // Retrieve domains and tenure from the query parameters
  
      let filters = {}; // Create an empty object to store the filters
  
      // If domains are provided in the query, add the domain filter
      if (domains) {
        const domainArray = domains.split(","); // Split the domains string into an array
        filters.domains = { $in: domainArray }; // Match projects with any of the provided domains
      }
  
      // If tenure is provided in the query, add the tenure filter
      if (tenure) {
        filters.tenure = tenure; // Match projects with the specified tenure
      }
  
      const filteredProjects = await Project.find(filters);
  
      res.json(filteredProjects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
