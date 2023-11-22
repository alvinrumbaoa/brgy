const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
  date: Date,
  location: String,
  result: {
    winner: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    score: String,  // e.g., '100-98'
    // Add other match result fields
  },
  // Add other relevant match fields
});

module.exports = mongoose.model('Match', MatchSchema);
