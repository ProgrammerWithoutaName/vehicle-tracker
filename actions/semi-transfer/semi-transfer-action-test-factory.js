'use strict';

const vehicleType = require('../../vehicle/vehicle-types').vehicleType;
const vehicleStatusType = require('../../vehicle/vehicle-status-types').vehicleStatusType;
const locationType = require('../../location/location-types').locationType;

module.exports = {build};

function build() {
    return {actionApplies};
}

function actionApplies({ vehicle, location }) {
    let isCorrectVehicleType = vehicle.type === vehicleType.semi;
    let isCorrectStatus = vehicle.status === vehicleStatusType.standBy;
    let isCorrectLocationType = location.type === locationType.distributionCenter;

    return isCorrectVehicleType && isCorrectStatus && isCorrectLocationType;
}