var combine = require("stream-combiner");
var split = require("split");
var through = require("through2");
var zlib = require("zlib");

module.exports = function() {
    var books = {};
    var current = null;

    var thru = through(function(buffer,encoding,next){
        var line = buffer.toString("utf8");
        if (!line) return next();

        var obj = JSON.parse(line);
        if (obj.type==="genre") {
            current = obj.name;
        }
        
        if (current) {
            books[current] = books[current] || [];
            if (obj.type==="book") books[current].push(obj.name);
        }

        next();
    },function(done){
        var me = this;
        Object.keys(books).forEach(function(genre){
            var row = {
                name: genre,
                books: books[genre]
            };
            var json = JSON.stringify(row);
            me.push(json+"\n");
        });
        done();
    });

    return combine(split(),thru,zlib.createGzip());
};





// var combine = require('stream-combiner');                       
// var through = require('through2');                              
// var split = require('split');                                   
// var zlib = require('zlib');                                     
                                                                
// module.exports = function () {                                  
//     var grouper = through(write, end);                          
//     var current;                                                
                                                                
//     function write (line, _, next) {                            
//         if (line.length === 0) return next();                   
//         var row = JSON.parse(line);                             
                                                                
//         if (row.type === 'genre') {                             
//             if (current) {                                      
//                 this.push(JSON.stringify(current) + '\n');      
//             }                                                   
//             current = { name: row.name, books: [] };            
//         }                                                       
//         else if (row.type === 'book') {                         
//             current.books.push(row.name);                       
//         }                                                       
//         next();                                                 
//     }                                                           
//     function end (next) {                                       
//         if (current) {                                          
//             this.push(JSON.stringify(current) + '\n');          
//         }                                                       
//         next();                                                 
//     }                                                           
                                                                
//     return combine(split(), grouper, zlib.createGzip());        
// };                                                              