const router = require("express").Router();
let Gallery = require("../models/gallery.model");

// http://localhost:8000/gallery/
router.route("/").get(async (req, res) => {
  await Gallery.find()
    .then((gallery) => res.json(gallery))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:8000/gallery/
router.route("/").post(async (req, res) => {
  try {
    const {
      photo,
    } = req.body;
    const newGallery = new Gallery({
      photo,
    });

    await newGallery.save();

    res.status(201).json(newGallery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
