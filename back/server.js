// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'; // Adjust this path if needed
import scheduleRoutes from './routes/scheduleRoutes.js'; // Adjust this path if needed

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/schedule', scheduleRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(error => console.error('Error connecting to MongoDB', error));
