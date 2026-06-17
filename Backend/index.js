import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/user_route.js';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use('/user', userRoutes);

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 7777;

async function startServer() {
    try {
        if (!MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined');
        }

        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

app.get('/', (req, res) => {
    res.send("Hello World");
});

startServer();