const mongoose = require('mongoose');

const riderSchema = mongoose.Schema({
  firstName: { type: String, required: 'First name is required' },
  lastName: { type: String, required: 'Last name is required' },
  email: { type: String, required: 'Email is require' },
  password: { type: String, required: 'Please enter password' },
  gender: { type: String, required: 'Enter your gender' },
  phone: { type: String, required: 'Enter phone number' },
  address: { type: String, required: 'Enter your address' },
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Rider', riderSchema);
