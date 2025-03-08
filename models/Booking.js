const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  show: { type: mongoose.Schema.Types.ObjectId, ref: "Show", required: true },
  seats: Number,
  totalPrice: Number,
  status: { type: String, enum: ["booked", "cancelled"], default: "booked" }
});

module.exports = mongoose.model("Booking", BookingSchema);
