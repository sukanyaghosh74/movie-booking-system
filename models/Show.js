const mongoose = require("mongoose");

const ShowSchema = new mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
  theater: String,
  dateTime: Date,
  seatsAvailable: Number,
  basePrice: Number,
  dynamicPricing: { type: Boolean, default: false }
});

ShowSchema.methods.calculatePrice = function () {
  if (!this.dynamicPricing) return this.basePrice;
  
  // Example: If less than 20% seats available, increase price by 50%
  if (this.seatsAvailable < 0.2 * this.seatsTotal) {
    return this.basePrice * 1.5;
  }

  return this.basePrice;
};

module.exports = mongoose.model("Show", ShowSchema);
