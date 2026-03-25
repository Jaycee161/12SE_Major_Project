const express = require('express');
const router = express.Router();
const missionsController = require('../controllers/missions.controller');

router.get('/', missionsController.getMissions);
router.get('/:id', missionsController.getMissionById);

module.exports = router;
