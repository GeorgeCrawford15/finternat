import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import User from './models/User.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(error => console.error('MongoDB connection error:', error));

/** 
 * POST /enroll?country=india or POST /enroll?country=us
 * 
 * Expects firstName, lastName, email in JSON body
 * Country is specified as a query parameter and can be any string
*/
app.post('/enroll', async (request, response) => {
    const { firstName, lastName, email } = request.body;
    const { country } = request.query;
    const { course } = request.query;

    if (!firstName || !lastName || !email || !country || !course) {
        return response.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const newUser = new User({ firstName, lastName, email, country, course });
        await newUser.save();
        response.status(201).json({ message: 'User enrolled successfully!' });
    } catch (error) {
        response.status(500).json({ message: 'Server error', error: error.message });
    }
});

// app.listen(PORT, () => {
//     console.log(`Running on Port ${PORT}`)
// });

export default app;