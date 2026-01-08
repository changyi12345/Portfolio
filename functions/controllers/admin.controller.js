const Admin = require('../models/Admin');
const About = require('../models/About');
const Skill = require('../models/Skill');
const Project = require('../models/Project');
const Experience = require('../models/Experience');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Auth
exports.getLogin = (req, res) => {
    res.render('admin/login');
};

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    if (admin && await bcrypt.compare(password, admin.password)) {
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.cookie('admin_token', token, { httpOnly: true });
        res.redirect('/admin/dashboard');
    } else {
        res.render('admin/login', { error: 'Invalid credentials' });
    }
};

exports.logout = (req, res) => {
    res.clearCookie('admin_token');
    res.redirect('/admin/login');
};

exports.getDashboard = (req, res) => {
    res.render('admin/dashboard');
};

// CRUD Operations (Examples)

// About
exports.getEditAbout = async (req, res) => {
    const about = await About.findOne();
    res.render('admin/edit-about', { about });
};

exports.postEditAbout = async (req, res) => {
    const { name, role, bio, profileImage } = req.body;
    let about = await About.findOne();
    
    if (about) {
        about.name = name;
        about.role = role;
        about.bio = bio;
        about.profileImage = profileImage;
        await about.save();
    } else {
        await About.create({ name, role, bio, profileImage });
    }
    res.redirect('/admin/dashboard');
};

// Skills
exports.getManageSkills = async (req, res) => {
    const skills = await Skill.find();
    res.render('admin/manage-skills', { skills });
};

exports.postAddSkill = async (req, res) => {
    await Skill.create(req.body);
    res.redirect('/admin/skills');
};

exports.deleteSkill = async (req, res) => {
    await Skill.findByIdAndDelete(req.params.id);
    res.redirect('/admin/skills');
};

// Projects
exports.getManageProjects = async (req, res) => {
    const projects = await Project.find();
    res.render('admin/manage-projects', { projects });
};

exports.postAddProject = async (req, res) => {
    const { title, description, techStack, githubLink, liveDemo, image } = req.body;
    const techStackArray = techStack.split(',').map(s => s.trim());
    await Project.create({ title, description, techStack: techStackArray, githubLink, liveDemo, image });
    res.redirect('/admin/projects');
};

exports.deleteProject = async (req, res) => {
    await Project.findByIdAndDelete(req.params.id);
    res.redirect('/admin/projects');
};