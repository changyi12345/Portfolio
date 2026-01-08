import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    techStack: [String],
    githubLink: String,
    liveDemo: String,
    image: String
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
