'use strict';

const vinValidatorFactory = require('./vin-validator-factory');
const yearValidatorFactory = require('./year-validator-factory');

module.exports = {build};

function build() {
    const vinValidator = vinValidatorFactory.build();
    const yearValidator = yearValidatorFactory.build();

    return {validate};

    function validate(vehicle) {
        let hasMakeAndModel = !!(vehicle.make && vehicle.model);
        let hasValidVin = vinValidator.validate(vehicle.vin);
        let hasValidYear = yearValidator.validate(vehicle.year);
        return hasMakeAndModel && hasValidVin && hasValidYear;
    }
}
