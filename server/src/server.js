const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (Replace with your local URI or Atlas URI)
// For local: 'mongodb://127.0.0.1:27017/modernfaq'
mongoose.connect('mongodb://127.0.0.1:27017/modernfaq')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Schema
const faqSchema = new mongoose.Schema({
    question: String,
    answer: String
});
const FAQ = mongoose.model('FAQ', faqSchema);

// Routes

// 1. Get All FAQs
app.get('/api/faqs', async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.json(faqs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. Seed Data (Run this once via browser/Postman to populate DB)
app.get('/api/seed', async (req, res) => {
    const sampleData = [
        { question: "What is the MERN stack?", answer: "MERN stands for MongoDB, Express, React, and Node.js. It is a popular JavaScript stack for building full-stack web applications." },
        { question: "How do I update my profile?", answer: "Go to the settings page, click on 'Edit Profile', and save your changes." },
        { question: "Is this service free?", answer: "We offer a free tier for beginners and a premium tier for advanced features." },
        { question: "Can I cancel anytime?", answer: "Yes, you can cancel your subscription at any time from your account dashboard." }
    ];
    await FAQ.deleteMany({}); // Clear old data
    await FAQ.insertMany(sampleData);
    res.json({ message: "Database seeded with sample data!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));