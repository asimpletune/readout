var mocha = require('mocha')
var assert = require('chai').assert

describe('this is just a test', function () {
  it('first test case', function () {
    var a = 1
    var b = 1
    assert.strictEqual(a, b)
  })
})
