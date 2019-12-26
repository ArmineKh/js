var map = require('through2-map')
var http = require('http')
http.createServer(function(inStream, outStream) {
    if(inStream.method == 'POST') {
        inStream.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(outStream)
    }
}).listen(process.argv[2]);


// const http = require('http')
//     const map = require('through2-map')
//
//     const server = http.createServer(function (req, res) {
//       if (req.method !== 'POST') {
//         return res.end('send me a POST\n')
//       }
//
//       req.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//       })).pipe(res)
//     })
//
//     server.listen(Number(process.argv[2]))
//
