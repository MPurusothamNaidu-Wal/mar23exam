const mongoose = require('mongoose');
var HobbySchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  doc: { type: Date },
});
module.exports = mongoose.model('hobby', HobbySchema);
