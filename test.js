'use strict';
const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfig({
    spec_files: ['**/*.[sS]pec.js']
});

jasmine.configureDefaultReporter({
    showColors: true,
    jasmineCorePath: this.jasmineCorePath
});

jasmine.execute();