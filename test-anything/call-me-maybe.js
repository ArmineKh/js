var test = require('tape')
var repeatCallback = require(process.argv[2])

test('repeatCallback', function (t) {
  t.plan(1)
  repeatCallback(1, function () {
    t.pass('callback called')
  })
})
