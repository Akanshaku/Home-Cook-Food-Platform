import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  chefName: String,
  cuisine: String,
  available: Boolean,
  rating: Number

});

const Meal = mongoose.model('Meal', mealSchema);
export default Meal;
