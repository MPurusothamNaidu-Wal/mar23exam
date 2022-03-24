const mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  inStore: { type: Boolean },
  upload_date: { type: Date },
  sizes: [
    {
      type: String,
    },
  ],
});
module.exports = mongoose.model('Product', ProductSchema);
