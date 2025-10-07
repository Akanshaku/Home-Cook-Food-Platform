import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import orderRoutes from './routes/orderRoutes.js';
import authRoutes from './routes/authRoutes.js';
import mealRoutes from './routes/mealRoutes.js';

dotenv.config(); // ✅ Must be called before using process.env

const app = express();

// ✅ CORS setup — allow both frontend and local dev
app.use(cors({
  origin: [
    "http://localhost:3000", // for local frontend testing
    "https://home-cook-food-platform.vercel.app",
    "https://home-cook-food-platform-lcvfsgr5p.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/meals', mealRoutes);

// ✅ Root test route (optional, helps debugging)
app.get('/', (req, res) => {
  res.send('✅ Backend API is running...');
});

// ✅ Database connection
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
