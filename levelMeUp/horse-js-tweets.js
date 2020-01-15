var level = require('level')
module.exports = function (databaseDir, date, callback) {
  var db = level(databaseDir)
  var result = []
  var error
  db.createReadStream({ gte: date, lte: date + "\xff" })
    .on('data', function (data) {
      result.push(data.value)
    })
    .on('error', function (err) {
      error = err
    })
    .on('end', function () {
      db.close(function (err) {
        callback(error || err, result)
      })
    })
}
