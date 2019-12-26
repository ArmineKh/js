var promise = new Promise(function (fulfill, reject) {
    reject(new Error('SECRET VALUE'));
  });
  var promise = Promise.reject(new Error('SECRET VALUE'));
promise.catch(console.log)
