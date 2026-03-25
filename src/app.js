const express = require('express');
const worldstateRoutes = require('./routes/worldstate.routes');
const eventsRoutes = require('./routes/events.routes');
const missionsRoutes = require('./routes/missions.routes');
const cyclesRoutes = require('./routes/cycles.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/worldstate', worldstateRoutes);
app.use('/worldstate/events', eventsRoutes);
app.use('/worldstate/missions', missionsRoutes);
app.use('/worldstate/cycles', cyclesRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'World State API is running' });
});

app.listen(PORT, () => {
  console.log(`World State API listening on port ${PORT}`);
});
