/** * FILE: server/src/models/Admin.js
 * PURPOSE: Schema for Admin users to distinguish them from normal customers.
**/
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'admin' }
});

module.exports = mongoose.model('Admin', adminSchema);