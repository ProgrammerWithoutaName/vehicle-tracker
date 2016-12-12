'use strict';

const actionType = {
    transfer: 'transfer'
};

module.exports = {
    actionType,
    actionList: Object.keys(actionType).map(actionKey => actionType[actionKey])
};