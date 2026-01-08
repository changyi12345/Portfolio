const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    name: String,
    role: String,
    bio: String,
    profileImage: String
});

module.exports = mongoose.model('About', aboutSchema);