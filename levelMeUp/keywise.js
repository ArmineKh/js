var level = require('level')
module.exports = function (databaseDir, json_file, callback) {
var db = level(databaseDir, { valueEncoding: 'json' })
var data = require(json_file)

 var operations = data.map(function (row) {
   var key
   if (row.type === 'user') {
     key = row.name
   } else if (row.type === 'repo') {
     key = row.user + '!' + row.name
   }
   return {
     type: 'put',
     key: key,
     value: row
   }
 })

 db.batch(operations, function (error) {
   db.close(function (err) {
     callback(error || err)
   })
 })
}
