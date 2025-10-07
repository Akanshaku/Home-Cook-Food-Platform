import mongoose from 'mongoose';

const chefSchema = new mongoose.Schema({
name: String,
  email: String,
  phone: String,
  location: String,
  experience: Number,
  specialty: String,
  rating: Number
});

const Chef = mongoose.model('Chef', chefSchema);
export default Chef;
