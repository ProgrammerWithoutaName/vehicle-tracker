'use strict';

const actionType = require('../action-types').actionType;
const actionTestFactory = require('./base-transfer-action-test-factory');
const actionApplierFactory = require('./base-transfer-action-applier-factory');

module.exports = {build};

function build() {
    return {
        type: actionType.transfer,
        test: actionTestFactory.build().actionApplies,
        apply: actionApplierFactory.build().apply
    };
}