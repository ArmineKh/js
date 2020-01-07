var concat = require("concat-stream");
var http = require('http');

var reverse = function(buffer) {
	var str = buffer.toString("utf8");
	var rev = "";
	for (var i=0;i<str.length;i++) rev += str.charAt(str.length-i-1);
	return rev;
};

process.stdin.pipe(concat(function(data){
	console.log(reverse(data));
}));

  // var concat = require('concat-stream');

  // process.stdin.pipe(concat(function (src) {
  //     var s = src.toString().split('').reverse().join('');
  //     console.log(s);
  // }));