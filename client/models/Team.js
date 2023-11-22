const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: String,
  location: String,
  coach: String,
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  // Add other relevant team fields
});

module.exports = mongoose.model('Team', TeamSchema);