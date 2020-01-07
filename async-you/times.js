var http = require('http'),
    async = require('async');

var hostname = process.argv[2];
var port = process.argv[3];

async.series({
  post: function (done) {
          
    var opts = {
      hostname: hostname,
      port: port,
      method: 'POST',
      path: '/users/create'
    };

    async.times(5, function (i, timesDone) {
      var req = http.request(opts, function (res) {

        res.on('data', function (chunk) {
        });

        res.on('end', function () {
          timesDone(null);
        });
      }).on('error', function (err) {
        return console.error(err);
      });

      var data = JSON.stringify({ user_id : i + 1 });
      req.write(data);
      req.end();
    }, function (err) {
      if (err) {
        return console.error(err);
      }

      done(null);
    });

 }, 
    
 get: function (done) {
   http.get('http://' + process.argv.slice(2).join(':') + '/users', function (res) {
     var body = '';

     res.on('data', function (chunk) {
       body += chunk.toString();
     });

     res.on('end', function () {
       done(null, body);
     });
   })
 }
}, function (err, results) {
  if (err) {
    return console.error(err);
  }
  console.log(results.get);
});



// var http = require('http')                                        
//   , qs = require('querystring')                                   
//   , async = require('async')                                      
//   , hostname = process.argv[2]                                    
//   , port = process.argv[3]                                        
//   , url = 'http://' +  hostname + ':' + port;                     
                                                                  
// async.series({                                                    
//   post: function(done){                                           
//     async.times(5, function(n, next){                             
//       _addUser(++n, function(err){                                
//         next(err);                                                
//       });                                                         
//     }, function next(err){                                        
//       if (err) return done(err);                                  
//       done(null, 'saved');                                        
//     });                                                           
//   },                                                              
                                                                  
//   get: function(done){                                            
//     http.get(url + '/users', function(res){                       
//       var body = "";                                              
//       res.on('data', function(chunk){                             
//         body += chunk.toString();                                 
//       });                                                         
                                                                  
//       res.on('end', function(){                                   
//         done(null, body);                                         
//       });                                                         
//     }).on('error', done);                                         
//   }                                                               
                                                                  
// }, function done(err, result){                                    
//   if (err) return console.log(err);                               
//   console.log(result.get);                                        
// });                                                               
                                                                  
                                                                  
// function _addUser(user_id, next){                                 
//   var postdata = JSON.stringify({'user_id': user_id}),            
//   opts = {                                                        
//     hostname: hostname,                                           
//     port: port,                                                   
//     path: '/users/create',                                        
//     method: 'POST',                                               
//     headers: {                                                    
//       'Content-Length': postdata.length                           
//     }                                                             
//   };                                                              
                                                                  
//   var req = http.request(opts, function(res){                     
//     res.on('data', function(chunk){})                             
                                                                  
//     res.on('end', function(){                                     
//       next();                                                     
//     });                                                           
//   });                                                             
                                                                  
//   req.on('error', function(err){                                  
//     next(err);                                                    
//   });                                                             
                                                                  
//   req.write(postdata);                                            
//   req.end();                                                      
// }                                                                 