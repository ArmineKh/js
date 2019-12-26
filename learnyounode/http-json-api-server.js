{
  "hour": 12,
  "minute": 48,
  "second": 2
}
{ "unixtime": 1376136615474 }
var http = require('http')
var url = require('url')
http.createServer(function(inStream, outStream) {
var result = '';
var d = '';
var urlObject = url.parse(inStream.url, true);
if(urlObject.pathname === '/api/parsetime') {
    result = urlObject.query.iso;
    d = new Date(result);
    result = {"hour": d.getHours(), "minute": d.getMinutes(), "second": d.getSeconds()};
}
else if (urlObject.pathname === '/api/unixtime') {
    result = urlObject.query.iso;
    d = new Date(result);
    result = {"unixtime": d.getTime()};
}
if (result) {
    outStream.writeHead(200, { 'Content-Type': 'application/json' });
    outStream.end(JSON.stringify(result));
    }
    else {
    outStream.writeHead(404);
        outStream.end();
    }
}).listen(process.argv[2]);



// const http = require('http')
//
//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }
//
//     function unixtime (time) {
//       return { unixtime: time.getTime() }
//     }
//
//     const server = http.createServer(function (req, res) {
//       const parsedUrl = new URL(req.url, 'http://example.com')
//       const time = new Date(parsedUrl.searchParams.get('iso'))
//       let result
//
//       if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//       } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//       }
//
//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))
//
//
