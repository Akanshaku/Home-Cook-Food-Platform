const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  cookName: String,
  available: Boolean,
  rating: Number
});

module.exports = mongoose.model("Food", foodSchema);
