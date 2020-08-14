const mongoose = require('mongoose');

const patientDetailsSchema = new mongoose.Schema({
  surname: {
    type: String,
    trim: true,
  },
  givenName: {
    type: String,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    trim: true,
  },
  occupation: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Registration', patientDetailsSchema);