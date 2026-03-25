const missions = [
  {
    id: 'mission_123',
    node: 'Void/Mot',
    type: 'survival',
    tier: 'steel_path',
    faction: 'corpus',
    levelRange: [80, 100],
    expiresAt: '2026-03-25T10:00:00Z',
    modifiers: ['enemy_armor_boost'],
    rewards: [{ type: 'relic', name: 'Axi A5' }]
  },
  {
    id: 'mission_124',
    node: 'Earth/E Prime',
    type: 'exterminate',
    tier: 'normal',
    faction: 'grineer',
    levelRange: [1, 3],
    expiresAt: '2026-03-25T11:00:00Z',
    modifiers: [],
    rewards: [{ type: 'resource', name: 'Ferrite', amount: 100 }]
  }
];

exports.getMissions = ({ type, tier }) => {
  return missions.filter(m => {
    if (type && m.type !== type) return false;
    if (tier && m.tier !== tier) return false;
    return true;
  });
};

exports.getMissionById = (id) => missions.find(m => m.id === id);
