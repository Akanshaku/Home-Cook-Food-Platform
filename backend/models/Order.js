import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userEmail: String,
  foodName: String,
  quantity: Number,
  status: String,
  totalPrice: Number,
  orderDate: String
});

export default mongoose.model('Order', orderSchema);
