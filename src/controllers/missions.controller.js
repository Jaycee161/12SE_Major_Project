const missionsService = require('../services/missions.service');

exports.getMissions = (req, res) => {
  const { type, tier } = req.query;
  const missions = missionsService.getMissions({ type, tier });
  res.json({ missions });
};

exports.getMissionById = (req, res) => {
  const mission = missionsService.getMissionById(req.params.id);
  if (!mission) return res.status(404).json({ error: 'Mission not found' });
  res.json(mission);
};
