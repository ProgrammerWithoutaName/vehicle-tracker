'use strict';

const vehicleValidatorFactory = require('./vehicle-validator-factory');
const yearValidatorFactory = require('./year-validator-factory');
const vinValidatorFactory = require('./vin-validator-factory');

describe('vehicle-validator-factory', () => {
    let vehicleValidator;
    let inputs;

    beforeEach(() => {
        inputs = {
            vinValidator: jasmine.createSpyObj('', ['validate']),
            yearValidator: jasmine.createSpyObj('', ['validate'])
        };
        spyOn(yearValidatorFactory, 'build');
        spyOn(vinValidatorFactory, 'build');

        yearValidatorFactory.build.and.returnValue(inputs.yearValidator);
        vinValidatorFactory.build.and.returnValue(inputs.vinValidator);

        vehicleValidator = vehicleValidatorFactory.build();
    });


    describe('build', () => {
        it('should return an object containing a function called validate', () => {
            expect(typeof vehicleValidator.validate).toBe('function');
        });
    });

    describe('validate', () => {
       it('should return true when given a valid vehicle', () => {
           let given = {
               make: 'fakeMake',
               model: 'fakeModel',
               year: 'fakeYear',
               vin: 'fakeVin'
           };
           inputs.vinValidator.validate.and.returnValue(true);
           inputs.yearValidator.validate.and.returnValue(true);

           let results = vehicleValidator.validate(given);
           expect(results).toBe(true);
       });

        it('should return false when given a vehicle without a make', () => {
            let given = {
                model: 'fakeModel',
                year: 'fakeYear',
                vin: 'fakeVin'
            };
            inputs.vinValidator.validate.and.returnValue(true);
            inputs.yearValidator.validate.and.returnValue(true);

            let results = vehicleValidator.validate(given);
            expect(results).toBe(false);
        });

        it('should return false when given a vehicle without a model', () => {
            let given = {
                make: 'fakeMake',
                year: 'fakeYear',
                vin: 'fakeVin'
            };
            inputs.vinValidator.validate.and.returnValue(true);
            inputs.yearValidator.validate.and.returnValue(true);

            let results = vehicleValidator.validate(given);
            expect(results).toBe(false);
        });

        it('should return false when given a vehicle with an invalid year', () => {
            let given = {
                make: 'fakeMake',
                model: 'fakeModel',
                year: 'fakeYear',
                vin: 'fakeVin'
            };
            inputs.vinValidator.validate.and.returnValue(true);
            inputs.yearValidator.validate.and.returnValue(false);

            let results = vehicleValidator.validate(given);
            expect(results).toBe(false);
        });

        it('should return false when given a vehicle with an invalid vin', () => {
            let given = {
                make: 'fakeMake',
                model: 'fakeModel',
                year: 'fakeYear',
                vin: 'fakeVin'
            };
            inputs.vinValidator.validate.and.returnValue(false);
            inputs.yearValidator.validate.and.returnValue(true);

            let results = vehicleValidator.validate(given);
            expect(results).toBe(false);
        });
    });
});