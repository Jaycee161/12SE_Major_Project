const worldstateService = require('../services/worldstate.service');

exports.getWorldState = (req, res) => {
  const snapshot = worldstateService.getWorldStateSnapshot();
  res.json(snapshot);
};
