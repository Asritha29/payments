const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
  Id: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  Contact: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  webId: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  exp: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  amt: {
    type: String,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Customer', CustomerSchema);