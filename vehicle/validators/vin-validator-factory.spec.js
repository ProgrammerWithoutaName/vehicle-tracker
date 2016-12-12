'use strict';
'use strict';
const jasmine = require('jasmine');
const vinValidatorFactory = require('./vin-validator-factory');

describe('vin-validator', () => {
    let vinValidator;

    beforeEach(() => {
        vinValidator = vinValidatorFactory.build();
    });

    describe('build', () => {
        it('should return an object containing a function called validate', () => {
            expect(typeof vinValidator.validate).toBe('function');
        });
    });

    describe('validate', () => {
        it('should return true when given a vin with 24 alphanumeric characters ending in 5 numerics and containing at least 8 alphas ', () => {
            let given = 'abcdefgh9012345678901234';
            let results = vinValidator.validate(given);
            expect(results).toBe(true);
        });

        it('should return false when given a string containing more than 24 characters', () => {
            let given = 'abcdefgh90123456789012345';
            let results = vinValidator.validate(given);
            expect(results).toBe(false);
        });

        it('should return false when given a string containing less than 24 characters', () => {
            let given = 'abcdefgh901234567890123';
            let results = vinValidator.validate(given);
            expect(results).toBe(false);
        });

        it('should return false when given a string NOT ending in 5 numeric characters', () => {
            let given = 'abcdefgh901234567890123a';
            let results = vinValidator.validate(given);
            expect(results).toBe(false);
        });

        it('should return false when the string has less than 8 alpha characters', () => {
            let given = 'ab3456789012345678901234';
            let results = vinValidator.validate(given);
            expect(results).toBe(false);
        });
    });

});