const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events.controller');

router.get('/', eventsController.getEvents);
router.get('/:id', eventsController.getEventById);

module.exports = router;
