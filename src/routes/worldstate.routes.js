const express = require('express');
const router = express.Router();
const worldstateController = require('../controllers/worldstate.controller');

router.get('/', worldstateController.getWorldState);

module.exports = router;
