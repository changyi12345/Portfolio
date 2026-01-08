const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    role: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    description: String
});

module.exports = mongoose.model('Experience', experienceSchema);