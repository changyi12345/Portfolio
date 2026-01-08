const About = require('../models/About');
const Skill = require('../models/Skill');
const Project = require('../models/Project');
const Experience = require('../models/Experience');

exports.getHome = async (req, res) => {
    const about = await About.findOne();
    res.render('public/home', { about, page: 'home' });
};

exports.getAbout = async (req, res) => {
    const about = await About.findOne();
    res.render('public/about', { about, page: 'about' });
};

exports.getSkills = async (req, res) => {
    const skills = await Skill.find();
    res.render('public/skills', { skills, page: 'skills' });
};

exports.getProjects = async (req, res) => {
    const projects = await Project.find();
    res.render('public/projects', { projects, page: 'projects' });
};

exports.getExperience = async (req, res) => {
    const experiences = await Experience.find().sort({ startDate: -1 });
    res.render('public/experience', { experiences, page: 'experience' });
};

exports.getContact = (req, res) => {
    res.render('public/contact', { page: 'contact' });
};