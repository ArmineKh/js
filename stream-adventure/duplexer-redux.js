var duplexer = require("duplexer2");
var through = require("through2").obj;
// var country = {"US": 2, "GB": 3, "CN": 1};

module.exports = function (counter) {
	var countries = {};
	
	var thru = through(function(obj,encoding,next) {
		var country = obj.country || "??";
		countries[country] = countries[country] && countries[country]+1 || 1;

		next();
	},function(done){
		counter.setCounts(countries);
		done();
	});
	return duplexer({writableObjectMode:true}, thru,counter);
};



// var duplexer = require('duplexer2');                           
// var through = require('through2').obj;                         
                                                               
// module.exports = function (counter) {                          
//     var counts = {};                                           
//     var input = through(write, end);                           
//     return duplexer({objectMode: true}, input, counter);       
                                                               
//     function write (row, _, next) {                            
//         counts[row.country] = (counts[row.country] || 0) + 1;  
//         next();                                                
//     }                                                          
//     function end (done) {                                      
//         counter.setCounts(counts);                             
//         done();                                                
//     }                                                          
// };                                                             