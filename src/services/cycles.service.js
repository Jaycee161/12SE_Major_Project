const { getTimeLeftString } = require('../utils/time');

const cycles = [
  {
    region: 'earth',
    state: 'day',
    nextState: 'night',
    nextStateAt: new Date(Date.now() + 60 * 60 * 1000).toISOString()
  },
  {
    region: 'cetus',
    state: 'night',
    nextState: 'day',
    nextStateAt: new Date(Date.now() + 15 * 60 * 1000).toISOString()
  }
];

exports.getAllCycles = () => {
  return cycles.map(c => ({
    region: c.region,
    state: c.state,
    nextState: c.nextState,
    timeLeft: getTimeLeftString(c.nextStateAt)
  }));
};

exports.getCycleByRegion = (region) => {
  const cycle = cycles.find(c => c.region.toLowerCase() === region.toLowerCase());
  if (!cycle) return null;
  return {
    region: cycle.region,
    state: cycle.state,
    nextState: cycle.nextState,
    timeLeft: getTimeLeftString(cycle.nextStateAt)
  };
};
