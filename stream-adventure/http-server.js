var through = require("through2");
// var split = require("split");
var http = require("http");

var args = process.argv.slice(2);
var port = args[0];

var handler = function(request,response) {
	request.pipe(through(function(buffer,encoding,next) {
		this.push(buffer.toString("utf8").toUpperCase());
		next();
	})).pipe(response);
};

// var server = http.createServer(handler);
// server.listen(port);

// var http = require('http');
//   var through = require('through2');

//   var server = http.createServer(function (req, res) {
//       if (req.method === 'POST') {
//           req.pipe(through(function (buf, _, next) {
//               this.push(buf.toString().toUpperCase());
//               next();
//           })).pipe(res);
//       }
//       else res.end('send me a POST\n');
//   });
//   server.listen(parseInt(process.argv[2]));