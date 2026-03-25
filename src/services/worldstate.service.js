const eventsService = require('./events.service');
const missionsService = require('./missions.service');
const cyclesService = require('./cycles.service');

exports.getWorldStateSnapshot = () => {
  return {
    timestamp: new Date().toISOString(),
    events: eventsService.getEvents(),
    missions: missionsService.getMissions({}),
    cycles: cyclesService.getAllCycles()
  };
};
