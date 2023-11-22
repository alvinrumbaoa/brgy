const mongoose = require('mongoose');

const LeagueStandingsSchema = new mongoose.Schema({
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  wins: Number,
  losses: Number,
  points: Number,
  // Add other relevant standings fields
});

module.exports = mongoose.model('LeagueStandings', LeagueStandingsSchema);
