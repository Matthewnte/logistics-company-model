const mongoose = require('mongoose');

const partnerSchema = mongoose.Schema({
  partnerName: { type: String, required: 'Partner name is required' },
  address: { type: String, required: 'Enter your address' },
  password: { type: String, required: 'Please enter password' },
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Partner', partnerSchema);
