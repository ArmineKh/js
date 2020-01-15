var level = require('level')
module.exports = function (databaseDir, date, callback) {
  var db = level(databaseDir)
  var count = 0
  var error
  db.createReadStream({ gte: date })
    .on('data', function (data) {
      count++
    })
    .on('error', function (err) {
      error = err
    })
    .on('end', function () {
      db.close(function (err) {
        callback(error || err, count)
      })
    })
}





// module.exports = function (databaseDir, date, callback) {
//      // .. your code here
//      var db = level(databaseDir)
//      var error
//      db.on('error', function (err) {
//        error = err
//      })
// db.createReadStream()
//   .on('data', function (data) {
//     console.log(data.key, '=', data.value)
//   })
//   .on('error', function (err) {
//     console.log('Oh my!', err)
//   })
//   .on('close', function () {
//     console.log('Stream closed')
//   })
//   .on('end', function () {
//     console.log('Stream ended')
//   })

//
//      db.get(key, function (error, value) {
//        db.close(function (err) {
//          callback(error || err, tweetCount)
//        })
//      })
//      // callback(error, tweetCount)
//    }
