import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
const app = express();
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