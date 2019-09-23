const mongoose = require('mongoose');

const circuitSchema = mongoose.Schema({
  id: Number,
  ref: String,
  location: String,
  country: String,
  lat: Number,
  lng: Number,
  alt: Number,
  url: String
});

const Circuit = mongoose.model('Circuits', circuitSchema, 'Circuits');

module.exports = Circuit;