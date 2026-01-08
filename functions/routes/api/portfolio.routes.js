const express = require('express');
const router = express.Router();
const portfolioController = require('../../controllers/api/portfolio.controller');

router.get('/home', portfolioController.getHome);
router.get('/about', portfolioController.getAbout);
router.get('/skills', portfolioController.getSkills);
router.get('/projects', portfolioController.getProjects);
router.get('/experience', portfolioController.getExperience);

module.exports = router;
