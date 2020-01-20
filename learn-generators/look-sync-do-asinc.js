var fs = require('fs');

   function run (generator) {
     // см `run` выше
     var it = generator(go);

      function go (err, result) {
        if (err) return it.throw(err);
        it.next(result);
      }
      go();
   }

   run(function* (done) {
     // исключение
    var firstFile;
     try {
       var dirFiles = yield fs.readdir('NoNoNoNo', done); // нет такой директории
        firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
     } catch (e) {
        firstFile =  null;
     }

     console.log(firstFile);
   });
