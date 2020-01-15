var through = require("through2");
var trumpet = require("trumpet");

var tr = trumpet();
var stream = tr.select(".loud").createStream();
stream.pipe(through(function(buffer,encoding,next) {
	this.push(buffer.toString("utf8").toUpperCase());
	next();
})).pipe(stream); 

process.stdin.pipe(tr).pipe(process.stdout);

 // var trumpet = require('trumpet');            
 // var through = require('through2');           
 // var tr = trumpet();                          
                                              
 // var loud = tr.select('.loud').createStream();
 // loud.pipe(through(function (buf, _, next) {  
 //     this.push(buf.toString().toUpperCase()); 
 //     next();                                  
 // })).pipe(loud);                              
                                              
 // process.stdin.pipe(tr).pipe(process.stdout); 