const express = require('express');
const router = express.Router();
const cyclesController = require('../controllers/cycles.controller');

router.get('/', cyclesController.getCycles);
router.get('/:region', cyclesController.getCycleByRegion);

module.exports = router;
