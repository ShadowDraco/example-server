'use strict';

const first = require('.');

describe('First middleware', () => {
	let consoleSpy; // spy on the console to check if logs are working properly

	// function that runs before other things
	beforeAll(() => {
		// attach a spy to the console
		consoleSpy = jest.spyOn(console, 'log').mockImplementation();
		// this spies on the console.log function
	});
	// runs after things, used to turn stuff off so it doesn't get expensive
	afterAll(() => {
		consoleSpy.mockRestore(); // removes the consoleSpy
	});

	let req = {};
	let res = {};
	let next = jest.fn(); // mock next function
	test('logs expected string', () => {
		first(req, res, next);
		expect(consoleSpy).toHaveBeenCalledWith('first middleware hit');
	});
});
