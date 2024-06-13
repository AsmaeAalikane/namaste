const mongoose = require('mongoose');

const campervanSchema = new mongoose.Schema({
  name: String,
  description: String,
  places: Number,
  price: Number,
  availableFrom: Date,
  availableTo: Date,
});

module.exports = mongoose.model('Campervan', campervanSchema);
