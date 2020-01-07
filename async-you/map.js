var http = require('http'),
    async = require('async');

async.map(process.argv.slice(2, 4), function (item, done) {
  http.get(item, function (res) {
    var body = '';
    res.on('data', function (chunk) {
      body += chunk.toString();
    });

    res.on('end', function () {
      done(null, body);
    });
  }).on('error', function (err) {
    done(err);
  });
}, function (err, results) {
  if (err) {
    return console.error(err);
  }

  console.log(results);
});



 // var http = require('http')
 //      , async = require('async');

 //    async.map(process.argv.slice(2), function(url, done){
 //      var body = '';
 //      http.get(url, function(res){
 //        res.on('data', function(chunk){
 //          body += chunk.toString();
 //        });

 //        res.on('end', function(){
 //         return done(null, body);
 //        });
 //      });
 //    },
 //    function done(err, results){
 //      if (err) return console.log(err);
 //      // results is an array of the response bodies in the same order
 //      console.log(results);
 //    });