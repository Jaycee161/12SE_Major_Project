const cyclesService = require('../services/cycles.service');

exports.getCycles = (req, res) => {
  const cycles = cyclesService.getAllCycles();
  res.json({ cycles });
};

exports.getCycleByRegion = (req, res) => {
  const cycle = cyclesService.getCycleByRegion(req.params.region);
  if (!cycle) return res.status(404).json({ error: 'Region not found' });
  res.json(cycle);
};
