var async = require('async'),
    http = require('http');

var lastResponse = '',
    totalRequests = 0,
    url = process.argv[2];

async.whilst(function () { return lastResponse !== 'meerkat'; },
  function (callback) {
    http.get(url, function (res) {
      totalRequests++;
      
      var body = ''; 
      res.on('data', function (chunk) {
        body += chunk.toString();
      });

      res.on('end', function () {
        lastResponse = body.trim();
        callback();
      });

    }).on('error', function (err) {
      return console.error(err);
    });
  },

  function (err) {
    console.log(totalRequests);
  }
);





   // var http = require('http')
   //    , async = require('async');

   //  var requestBody = '';

   //  var count = 0;

   //  async.whilst(
   //    function() {
   //      return !/meerkat/.test(requestBody.trim());
   //    },

   //    function(done){
   //      var body = '';
   //      http.get(process.argv[2], function(res){
   //        res.on('data', function(chunk){
   //          body += chunk.toString();
   //        });

   //        res.on('end', function(){
   //          ++count;
   //          requestBody = body;
   //          done();
   //        });
   //      }).on('error', done);
   //    },

   //    function(err){
   //      if (err) return console.log(err);
   //      console.log(count);
   //    }
   //  )