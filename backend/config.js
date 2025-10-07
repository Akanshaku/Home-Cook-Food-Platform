const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected! 🎉');
  } catch (err) {
    console.error('Connection failed:', err);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;