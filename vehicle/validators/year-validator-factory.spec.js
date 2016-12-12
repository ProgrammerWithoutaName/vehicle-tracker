'use strict';
const jasmine = require('jasmine');
const yearValidatorFactory = require('./year-validator-factory');

describe('year-validator', () => {
    let yearValidator;
    beforeEach(() => {
        yearValidator = yearValidatorFactory.build();
    });


    describe('build', () => {
        it('should return an object containing a function called validate', () => {
            expect(typeof yearValidator.validate).toBe('function');
        });
    });

    describe('validate', () => {
        it('should accept 4 numeric characters', () => {
            let given = '1234';
            let results = yearValidator.validate(given);

            expect(results).toBe(true);
        });

        it('should reject more than 4 numeric characters', () => {
            let given = '12345';
            let results = yearValidator.validate(given);

            expect(results).toBe(false);
        });

        it('should reject a string with non-numeric characters', () => {
            let given = 'ab34';
            let results = yearValidator.validate(given);

            expect(results).toBe(false);
        });
    });
});