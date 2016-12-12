'use strict';

const vehicleType = {
    truck: 'truck',
    van: 'van',
    semi: 'semi'
};

module.exports = {
    vehicleType,
    vehicleTypeList: Object.keys(vehicleType).map(typeKey => vehicleType[typeKey])
};