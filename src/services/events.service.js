const events = [
  {
    id: 'event_steel_resurgence',
    name: 'Steel Resurgence',
    description: 'Earn bonus rewards in Steel Path missions.',
    startTime: '2026-03-25T08:00:00Z',
    endTime: '2026-03-25T12:00:00Z',
    active: true,
    rewards: [{ type: 'currency', name: 'Steel Essence', amount: 5 }]
  }
];

exports.getEvents = () => events;

exports.getEventById = (id) => events.find(e => e.id === id);
