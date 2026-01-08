import mongoose from 'mongoose';

const AboutSchema = new mongoose.Schema({
    name: String,
    role: String,
    bio: String,
    profileImage: String
});

export default mongoose.models.About || mongoose.model('About', AboutSchema);
