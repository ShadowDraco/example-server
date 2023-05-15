'use strict';
// create express server and require dotenv
const express = require('express');
const app = express(); // create singleton of express app (singular on purpose by design)
const cors = require('cors');
// grab port from env

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).send('Welcome home!');
});

app.get('/success', (req, res, next) => {
	res.status(200).send('Success!!');
});

app.get('/bad', (req, res, next) => {
	next('There was an error');
});

app.use('*', (req, res, next) => {
	res.status(404).send('Page not found!');
});

const start = port =>
	app.listen(port, (req, res) => {
		console.log('listening on port:', port);
	});

module.exports = { start, app };
