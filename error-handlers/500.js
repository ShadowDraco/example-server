'use strict';

module.exports = (error, req, res, next) => {
	// ternary wtf - what - true - false
	const errorMessage = typeof error === 'string' ? error : error.message;

	res.status(500).send({
		error: 500,
		route: req.path,
		query: req.query,
		path: req.path,
		body: req.body,
		message: `Server Error: ${errorMessage}`,
	}); // res.send can also send json (not just res.json)
};
