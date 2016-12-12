'use strict';

module.exports = {build};

function build() {
    return {validate};
}

function validate(value) {
    let hasCorrectCharacters = (/^[a-zA-Z0-9]{19}\d{5}$/gi).test(value);
    let alphaCount = value.match(/[a-zA-Z]/gi).length;
    return hasCorrectCharacters && alphaCount > 7;
}