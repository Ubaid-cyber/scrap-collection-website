/** * FILE: server/src/routes/admin.js
 * PURPOSE: Central route file for Admin-only operations.
**/
const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const Pickup = require('../models/Pickup');
const jwt = require('jsonwebtoken');

// --- 1. ADMIN LOGIN ---
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email });
        // Checking for plain password (use bcrypt.compare later for security)
        if (!admin || admin.password !== password) {
            return res.status(401).json({ message: "Invalid Admin Credentials" });
        }

        const token = jwt.sign(
            { user: { id: admin._id, role: 'admin' } }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d' }
        );
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

// --- 2. GET ALL PICKUPS (For Dashboard) ---
router.get('/all-pickups', async (req, res) => {
    try {
        const pickups = await Pickup.find().sort({ date: -1 });
        res.json(pickups);
    } catch (err) {
        res.status(500).json({ message: "Could not fetch pickups" });
    }
});

module.exports = router;