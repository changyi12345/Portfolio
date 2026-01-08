import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { 
        type: String, 
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        default: 'Intermediate'
    }
});

export default mongoose.models.Skill || mongoose.model('Skill', SkillSchema);
