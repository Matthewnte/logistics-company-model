const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
  firstName: { type: String, required: 'First name is required' },
  lastName: { type: String, required: 'Last name is required' },
  email: { type: String, required: 'Email is require' },
  password: { type: String, required: 'Please enter password' },
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Admin', adminSchema);
