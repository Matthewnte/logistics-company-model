const mongoose = require('mongoose');

const config = require('../config');

// connect mongodb
mongoose.connect(config.databaseURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
