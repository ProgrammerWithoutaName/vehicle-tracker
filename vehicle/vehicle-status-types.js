'use strict';

const vehicleStatusType = {
    standBy: 'stand-by',
    inTransit: 'in_transit',
    inService: 'in_service',
    inRepair: 'in_repair'
};

module.exports = {
    vehicleStatusType,
    vehicleStatusTypeList: Object.keys(vehicleStatusType).map(typeKey => vehicleStatusType[typeKey])
};