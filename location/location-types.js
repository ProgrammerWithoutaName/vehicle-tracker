'use strict';

const locationType = {
    branch: 'branch',
    distributionCenter: 'distribution_center'
};

module.exports = {
    locationType,
    locationTypeList: Object.keys(locationType).map(typeKey => locationType[typeKey])
};