const mongoose = require('mongoose');

const standingsSchema = mongoose.Schema({
  id: Number,
  raceId: {
    type: mongoose.ObjectId,
    ref: 'Race'
  },
  driverId: {
    type: mongoose.ObjectId,
    ref: 'Driver'
  },
  points: Number,
  position: Number,
  positionText: String,
  wins: Number
});

const Standings = mongoose.model('Driver_Standings', standingsSchema, 'Driver_Standings');

module.exports = Standings;