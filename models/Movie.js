const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  duration: Number
});

module.exports = mongoose.model("Movie", MovieSchema);
