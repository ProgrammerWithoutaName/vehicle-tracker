'use strict';

const locationDataSourceFactory = require('../../data-source/location-data-source-factory');

module.exports = {build};

function build() {
    const locationDataSource = locationDataSourceFactory.build();
    return {apply};

    function apply({vehicle, location}) {
        location.vehicles = location.vehicles || [];
        location.vehicles.push(vehicle);

        locationDataSource.update(location);
    }
}

