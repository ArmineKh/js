var http = require('http');
var fullString = '';
http.get(process.argv[2], function callback(response) {

    response.on('data', function(data) {
        fullString += data.toString();
    })
    response.on('end', function() {
        console.log(fullString.length);
        console.log(fullString);
    })
})

// const http = require('http')
//    const bl = require('bl')
//
//    http.get(process.argv[2], function (response) {
//      response.pipe(bl(function (err, data) {
//        if (err) {
//          return console.error(err)
//        }
//        data = data.toString()
//        console.log(data.length)
//        console.log(data)
//      }))
   // })
