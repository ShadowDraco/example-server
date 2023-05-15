'use strict';

// import the server from server.js
require('dotenv').config();
const { start } = require('./src/server');
const PORT = process.env.PORT;

// start the server
start(PORT);
