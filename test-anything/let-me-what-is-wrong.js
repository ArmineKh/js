var isCoolNumber = require(process.argv[2])
var assert = require('assert')
assert.deepEqual(isCoolNumber(42), true,"error")


/*
var isCoolNumber = require(process.argv[2])
var assert = require('assert')
assert(isCoolNumber(42))

*/
