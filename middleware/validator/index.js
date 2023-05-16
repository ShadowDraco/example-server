'use strict';

module.exports = (req, res, next) => {
	if (parseInt(req.params.id)) {
		next();
	} else {
		next('ID parameter is not a number');
	}
};
