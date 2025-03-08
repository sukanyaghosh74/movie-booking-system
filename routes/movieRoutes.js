const express = require("express");
const Movie = require("../models/Movie");
const Show = require("../models/Show");
const { auth, roleAuth } = require("../middleware/authMiddleware");

const router = express.Router();

// Create a new movie (only for theater owners)
router.post("/movies", auth, roleAuth("theater-owner"), async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
});

// Create a new show (only for theater owners)
router.post("/shows", auth, roleAuth("theater-owner"), async (req, res) => {
  try {
    const show = new Show(req.body);
    await show.save();
    res.status(201).json(show);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
});

module.exports = router;
