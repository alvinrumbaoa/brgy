const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String,  // e.g., 'admin', 'player', 'fan'
  // Add other relevant user fields
});

module.exports = mongoose.model('User', UserSchema);