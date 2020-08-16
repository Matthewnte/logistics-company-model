const express = require('express');
const bodyParser = require('body-parser');

const config = require('./src/config');

// import routes
const authRoute = require('./src/routes/auth');
const adminRoute = require('./src/routes/admin');
const ridersRoute = require('./src/routes/riders');
const partnersRoute = require('./src/routes/partners');

// initialize express server
const app = express();

// connect mongoDB
require('./src/db/mongoose');

// parses incomming request to json object
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// entry route for authentication
app.use('/api/v1/auth', authRoute);

// entry to admin route
app.use('/api/v1/admin', adminRoute);

// entry to admin route
app.use('/api/v1/riders', ridersRoute);

// entry to admin route
app.use('/api/v1/partners', partnersRoute);

// listen for request on port
app.listen(config.port, () => console.log(`Server listening on port: ${config.port}`));

module.exports = app;
