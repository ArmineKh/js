var http = require('http');
var fullString = '';
http.get(process.argv[2], function callback(response) {

    response.on('data', function(data) {
        fullString += data.toString();
    })
    response.on('end', function() {
        console.log(fullString);
        fullString = '';
        http.get(process.argv[3], function callback(response) {
            response.on('data', function(data) {
                fullString += data.toString();
            })
            response.on('end', function() {
                console.log(fullString);
                fullString = ''
                http.get(process.argv[4], function callback(response) {
                    response.on('data', function(data) {
                        fullString += data.toString();
                    })
                    response.on('end', function() {
                        console.log(fullString);
                    })
                })
            })
        })
    })
})

// const http = require('http')
//     const bl = require('bl')
//     const results = []
//     let count = 0
//
//     function printResults () {
//       for (let i = 0; i < 3; i++) {
//         console.log(results[i])
//       }
//     }
//
//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err) {
//             return console.error(err)
//           }
//
//           results[index] = data.toString()
//           count++
//
//           if (count === 3) {
//             printResults()
//           }
//         }))
//       })
//     }
//
//     for (let i = 0; i < 3; i++) {
//       httpGet(i)
//     }
