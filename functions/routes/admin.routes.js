const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const adminAuth = require('../middleware/adminAuth');

// Auth Routes
router.get('/login', adminController.getLogin);
router.post('/login', adminController.postLogin);
router.get('/logout', adminController.logout);

// Protected Routes
router.use(adminAuth);

router.get('/dashboard', adminController.getDashboard);

// About
router.get('/about', adminController.getEditAbout);
router.post('/about', adminController.postEditAbout);

// Skills
router.get('/skills', adminController.getManageSkills);
router.post('/skills', adminController.postAddSkill);
router.delete('/skills/:id', adminController.deleteSkill);

// Projects
router.get('/projects', adminController.getManageProjects);
router.post('/projects', adminController.postAddProject);
router.delete('/projects/:id', adminController.deleteProject);

module.exports = router;