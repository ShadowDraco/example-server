'use strict';
// create express server and require cors
const express = require('express');
const app = express(); // create singleton of express app (singular on purpose by design)
const cors = require('cors');

// middleware
const first = require('../middleware/first');
const { second, third } = require('../middleware/second-and-third');
const fourth = require('../middleware/fourth');
const validator = require('../middleware/validator/index');

// error handlers
const notFound = require('../error-handlers/404');
const errorHandler = require('../error-handlers/500');

app.use(cors());
app.use(express.json());

// use my custom middleware
//app.use(first);
//app.use(second);
//app.use(third);
app.use(first, second, third);

app.get('/', (req, res, next) => {
	res.status(200).send('Welcome home!');
});

app.get('/queryPath', fourth, (req, res, next) => {
	// req.query is the /queryPath/?hi=hello <-- after the question mark part
	res.status(200).send(`query: ${req.query}`);
});

app.get('/paramsPath/:id', validator, (req, res, next) => {
	// req.params is the /paramsPath/:id <-- after colon part of the path
	const id = req.params.id;
	res.status(200).send(`ID: ${id}`);
});

app.get('/hi', (req, res) => {
	res.send('ello');
});

app.get('/success', (req, res, next) => {
	res.status(200).send('Success!!');
});

app.get('/bad', (req, res, next) => {
	next('There was an error');
});

// 404 not found error handler
app.use('*', notFound);
// make this error handler last so that express does not use its own
// this is an error first handler
app.use(errorHandler);

const start = port =>
	app.listen(port, (req, res) => {
		console.log('listening on port:', port);
	});

module.exports = { start, app };
