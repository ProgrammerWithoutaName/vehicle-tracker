'use strict';
const baseTransferActionApplierFactory = require('./base-transfer-action-applier-factory');
const locationDataSourceFactory = require('../../data-source/location-data-source-factory');

describe('base-transfer-action-applier-factory', () => {
    let baseTransferActionApplier;
    let inputs;

    beforeEach(() => {

        inputs = {
            mockLocationDataSource: jasmine.createSpyObj('', ['update'])
        };
        spyOn(locationDataSourceFactory, 'build');
        locationDataSourceFactory.build.and.returnValue(inputs.mockLocationDataSource);

        baseTransferActionApplier = baseTransferActionApplierFactory.build();
    });

    describe('build', () => {
        it('should return an object containing a function named apply', () => {
            expect(typeof baseTransferActionApplier.apply).toBe('function');
        });

        it('should get the locationDataSource', () => {
            expect(locationDataSourceFactory.build).toHaveBeenCalled();
        });
    });

    describe('apply', () => {
        it('should call the locationDataSource with given location', () => {
            let given = {
                vehicle: {
                    type: 'fakeVehicle',
                },
                location: {
                    type: 'fakeLocation',
                    vehicles: []
                }
            };
            baseTransferActionApplier.apply(given);

            expect(inputs.mockLocationDataSource.update).toHaveBeenCalledWith(given.location);
        });

        it('should assign the given vehicle to location.vehicles', () => {
            let given = {
                vehicle: {
                    type: 'fakeVehicle',
                },
                location: {
                    type: 'fakeLocation',
                    vehicles: []
                }
            };
            baseTransferActionApplier.apply(given);
            expect(given.location.vehicles.length).toBe(1);
            expect(given.location.vehicles).toContain(given.vehicle);
        });
    });
});