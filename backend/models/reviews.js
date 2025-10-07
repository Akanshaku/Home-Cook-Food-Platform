const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  foodName: String,
  userEmail: String,
  rating: Number,
  comment: String,
  date: String
});

module.exports = mongoose.model("Review", reviewSchema);
