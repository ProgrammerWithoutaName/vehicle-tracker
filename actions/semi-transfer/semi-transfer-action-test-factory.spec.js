'use strict';
const jasmine = require('jasmine');
const semiTransferActionTestFactory = require('./semi-transfer-action-test-factory');
const vehicleType = require('../../vehicle/vehicle-types').vehicleType;
const vehicleStatusType = require('../../vehicle/vehicle-status-types').vehicleStatusType;
const locationType = require('../../location/location-types').locationType;

describe('semi-transfer-action-test-factory', () => {
    let semiTransferActionTest;
    beforeEach(() => {
        semiTransferActionTest = semiTransferActionTestFactory.build();
    });

    describe('build', () => {
        it('should return an object containing a function named ruleApplies', () => {
            expect(typeof semiTransferActionTest.actionApplies).toBe('function');
        });

    });

    describe('ruleApplies', () => {
        it('should return true when given object has a vehicle matching {type:"semi", status:"stand-by"} and a location matching { type:"distribution_center" }', () => {
            let given = {
                vehicle: {
                    type: vehicleType.semi,
                    status: vehicleStatusType.standBy
                },
                location: {
                    type: locationType.distributionCenter
                }
            };
            let results = semiTransferActionTest.actionApplies(given);
            expect(results).toBe(true);
        });

        it('should return false if given object does not have vehicle with a type of "semi"', () => {
            let given = {
                vehicle: {
                    type: vehicleType.truck,
                    status: vehicleStatusType.standBy
                },
                location: {
                    type: locationType.distributionCenter
                }
            };
            let results = semiTransferActionTest.actionApplies(given);
            expect(results).toBe(false);
        });

        it('should return false if given object does not have a vehicle with a status of "stand-by"', () => {
            let given = {
                vehicle: {
                    type: vehicleType.semi,
                    status: vehicleStatusType.inTransit
                },
                location: {
                    type: locationType.distributionCenter
                }
            };
            let results = semiTransferActionTest.actionApplies(given);
            expect(results).toBe(false);
        });

        it('should return false if given an object that does not have a location with a type of "distribution_center"', () => {
            let given = {
                vehicle: {
                    type: vehicleType.semi,
                    status: vehicleStatusType.standBy
                },
                location: {
                    type: locationType.branch
                }
            };
            let results = semiTransferActionTest.actionApplies(given);
            expect(results).toBe(false);
        });
    });
});