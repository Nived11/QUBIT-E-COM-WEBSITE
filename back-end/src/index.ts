import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || '')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
