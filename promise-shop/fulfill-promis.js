  require('es6-promise');

  'use strict';

   var promise = new Promise(function (fulfill, reject) {
     // Your solution here
    return setTimeout(() => fulfill('FULFILLED!'), 300);
   });
   promise.then(  console.log);
   // Your solution here
