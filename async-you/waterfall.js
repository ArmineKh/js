var http = require('http');
var  fs = require('fs');
var async = require('async');


async.waterfall([
  function (cb) {
    fs.readFile(process.argv[2], 'utf-8', function (err, data) {
      if (err) {
        return cb(err);
      }

      cb(null, data);
    });
  },

  function (data, cb) {
    var body = '';

    http.get(data, function (res) {
      res.on('data', function (chunk) {
        body += chunk.toString();
      })
      .on('end', function () {
        cb(null, body);
      });
    })
    .on('error', function (err) {
      cb(err);
    });
  }
], function (err, result) {

    if (err) {
      return console.error(err);
    }

    console.log(result);
});




// var fs = require('fs')
//   , http = require('http')
//   , async = require('async');
//
// async.waterfall([
//   function(done){
//     fs.readFile(process.argv[2], function(err, data){
//       if (err) return done(err);
//       done(null, data)
//     });
//   },
//
//   function(data, done){
//     var body = '';
//     http.get(data.toString().trimRight(), function(res){
//       res.on('data', function(chunk){
//         body += chunk.toString();
//       });
//
//       res.on('end', function(chunk){
//         done(null, body);
//       });
//     }).on('error', function(e){
//       done(e);
//     });
//   }
// ], function done(err, result){
//   if (err) return console.error(err);
//   console.log(result);
// });
