const mongoose = require('mongoose');

const raceSchema = mongoose.Schema({
  id: Number,
  year: Number,
  round: Number,
  circuitId: {
    type: mongoose.ObjectId,
    ref: 'Circuit'
  },
  name: String,
  date: String,
  time: String,
  url: String
});

const Race = mongoose.model('Races', raceSchema, 'Races');

module.exports = Race;