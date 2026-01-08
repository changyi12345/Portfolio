const About = require('../../models/About');
const Skill = require('../../models/Skill');
const Project = require('../../models/Project');
const Experience = require('../../models/Experience');

exports.getHome = async (req, res) => {
    try {
        const about = await About.findOne();
        res.status(200).json({ success: true, data: about });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getAbout = async (req, res) => {
    try {
        const about = await About.findOne();
        res.status(200).json({ success: true, data: about });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json({ success: true, count: skills.length, data: skills });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json({ success: true, count: projects.length, data: projects });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getExperience = async (req, res) => {
    try {
        const experiences = await Experience.find().sort({ startDate: -1 });
        res.status(200).json({ success: true, count: experiences.length, data: experiences });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
