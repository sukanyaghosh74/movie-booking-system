const express = require("express");
const Booking = require("../models/Booking");
const Show = require("../models/Show");
const { auth } = require("../middleware/authMiddleware");
const redisClient = require("../config/redis");

const router = express.Router();

// Book a ticket with seat locking
router.post("/book", auth, async (req, res) => {
  const { showId, seats } = req.body;
  
  const show = await Show.findById(showId);
  if (!show || show.seatsAvailable < seats) {
    return res.status(400).json({ error: "Not enough seats available" });
  }

  // Lock seats in Redis for 5 minutes
  const lockKey = `lock:${showId}`;
  const lockExists = await redisClient.exists(lockKey);
  if (lockExists) return res.status(400).json({ error: "Seats are currently locked" });

  await redisClient.setex(lockKey, 300, "locked");

  const totalPrice = show.calculatePrice() * seats;

  const booking = new Booking({ user: req.user.id, show: showId, seats, totalPrice });
  await booking.save();

  res.status(201).json({ bookingId: booking._id, totalPrice });
});

module.exports = router;
