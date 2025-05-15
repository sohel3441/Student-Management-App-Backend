import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import studentRoutes from './routes/studentRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', studentRoutes);

// Root endpoint for sanity check
app.get('/', (req, res) => {
  res.send('Student Management API is running...');
});

// Start server

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
