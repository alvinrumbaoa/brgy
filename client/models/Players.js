const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: String,
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  position: String,
  stats: {
    pointsPerGame: Number,
    reboundsPerGame: Number,
    assistsPerGame: Number,
    // Add other relevant stats
  },
  // Add other relevant player fields
});

module.exports = mongoose.model('Player', PlayerSchema);
