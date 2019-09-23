const mongoose = require('mongoose');

const driverSchema = mongoose.Schema({
  id: Number,
  ref: String,
  number: Number,
  code: String,
  forename: String,
  surname: String,
  dob: String,
  nationality: String,
  url: String
});

const Driver = mongoose.model('Drivers', driverSchema, 'Drivers');

module.exports = Driver;