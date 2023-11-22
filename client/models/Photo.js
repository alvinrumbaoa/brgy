const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  title: String,
  url: String,              // URL of the photo
  description: String,
  relatedMatch: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' },
  relatedTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  relatedPlayer: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  uploadDate: { type: Date, default: Date.now },
  // Additional fields like tags or categories can be added
});

module.exports = mongoose.model('Photo', PhotoSchema);
