const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  name: { type: String, required: 'Name is required' },
  type: { type: String, required: 'please state the type of order' },
  content: { type: String, required: 'Please state the content password' },
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
