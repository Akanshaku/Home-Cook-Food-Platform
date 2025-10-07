import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  address: String,
  phone: String,
  specialty: String,
  rating: Number
});

const User = mongoose.model('User', userSchema);
export default User;
