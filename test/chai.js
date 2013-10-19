
var chai = require('chai')

global.should = chai.should()
global.expect = chai.expect
global.assert = chai.assert

chai.Assertion.includeStack = true

module.exports = chai