const router = require("express").Router();
let Event = require("../models/event.model");

// http://localhost:8000/events/all
router.route("/all").get(async (req, res) => {
  await Event.find()
    .then((events) => res.json(events))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:8000/events/
router.route("/").post(async (req, res) => {
  try {
    const {
      name,
      description,
      timeline,
      photo,
      buttonlink,
      tenure,
      domains,
      speakers,
      facilitators,
    } = req.body;
    const newEvent = new Event({
      name,
      description,
      timeline,
      photo,
      buttonlink,
      tenure,
      domains,
      speakers,
      facilitators,
    });

    await newEvent.save();

    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// http://localhost:8000/events/filter?domains=development,creative&&tenure=2021-2022
// http://localhost:8000/events/filter?domains=development
// http://localhost:8000/events/filter?tenure=2021-2022
router.route("/filter").get(async (req, res) => {
  try {
    const { domains, tenure } = req.query; // Retrieve domains and tenure from the query parameters

    let filters = {}; // Create an empty object to store the filters

    // If domains are provided in the query, add the domain filter
    if (domains) {
      const domainArray = domains.split(","); // Split the domains string into an array
      filters.domains = { $in: domainArray }; // Match events with any of the provided domains
    }

    // If tenure is provided in the query, add the tenure filter
    if (tenure) {
      filters.tenure = tenure; // Match events with the specified tenure
    }

    const filteredEvents = await Event.find(filters);

    res.json(filteredEvents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// http://localhost:8000/events/latest
router.route("/latest").get(async (req, res) => {
  try {
    const latestEvents = await Event.find()
      .sort({ "timeline.startDate": -1 }) // Sort events in descending order based on the endDate
      .limit(3); // Limit the results to 3 events

    res.json(latestEvents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
