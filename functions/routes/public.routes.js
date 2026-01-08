const express = require('express');
const router = express.Router();
const publicController = require('../controllers/public.controller');

router.get('/', publicController.getHome);
router.get('/about', publicController.getAbout);
router.get('/skills', publicController.getSkills);
router.get('/projects', publicController.getProjects);
router.get('/experience', publicController.getExperience);
router.get('/contact', publicController.getContact);

module.exports = router;