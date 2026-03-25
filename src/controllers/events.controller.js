const eventsService = require('../services/events.service');

exports.getEvents = (req, res) => {
  const events = eventsService.getEvents();
  res.json({ events });
};

exports.getEventById = (req, res) => {
  const event = eventsService.getEventById(req.params.id);
  if (!event) return res.status(404).json({ error: 'Event not found' });
  res.json(event);
};
