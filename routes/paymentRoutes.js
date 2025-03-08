const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Booking = require("../models/Booking");
const { auth } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/pay", auth, async (req, res) => {
  const { bookingId, token } = req.body;
  const booking = await Booking.findById(bookingId);
  if (!booking) return res.status(400).json({ error: "Booking not found" });

  try {
    const charge = await stripe.charges.create({
      amount: booking.totalPrice * 100,
      currency: "usd",
      source: token,
      description: `Payment for Booking ID ${bookingId}`
    });

    booking.status = "paid";
    await booking.save();
    
    res.json({ success: true, charge });
  } catch (error) {
    res.status(500).json({ error: "Payment failed" });
  }
});

module.exports = router;
