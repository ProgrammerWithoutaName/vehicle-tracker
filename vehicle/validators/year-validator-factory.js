'use strict';

module.exports = {build};

function build() {
    return {
        validate: value => (/^\d{1,4}$/gi).test(value)
    };
}