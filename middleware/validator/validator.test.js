'use strict';

// this is a unit test, testing only one 'unit' of the code

// this is enough to bring in the index of the folder
const validator = require('.'); // equivalent to './index'

describe('Validator middleware', () => {
	// create a mock req, res, and next to test the validator manually
	let req = { params: { id: 'hello' } };
	let res = {};
	// this mocks the next function
	let next = jest.fn();

	test('throws error as expected', () => {
		validator(req, res, next);
		expect(next).toHaveBeenCalledWith('ID parameter is not a number');
	});

	test('Passes as expected', () => {
		req = { params: { id: 123 } };
		validator(req, res, next);
		expect(next).toHaveBeenCalledWith();
	});
});
