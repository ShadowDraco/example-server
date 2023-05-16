'use strict';

const second = (req, res, next) => {
	console.log('second middleware hit');
	// next('giving next a parameter means error');
	// next called with no argument means no error-move on
	next();
};

const third = (req, res, next) => {
	console.log('third middleware hit');
	// next('giving next a parameter means error');
	// next called with no argument means no error-move on
	next();
};

module.exports = { second, third };
