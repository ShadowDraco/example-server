'use strict';

const first = (req, res, next) => {
	console.log('first middleware hit');
	// next('giving next a parameter means error');
	// next called with no argument means no error-move on
	next();
};

module.exports = first;
