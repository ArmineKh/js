var ws = require('websocket-stream');

var stream = ws('ws://localhost:8099');
stream.end("hello\n","utf8");



  // var ws = require('websocket-stream');
  // var stream = ws('ws://localhost:8099');
  // stream.write('hello\n');