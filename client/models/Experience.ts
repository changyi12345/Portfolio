import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    role: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    description: String
});

export default mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema);
