function parsePromised(file) {
  return new Promise(function(resolve,reject) {
    try {
      resolve(JSON.parse(file));
    } catch(e) {
      reject(e.message);
    }
  })
};

parsePromised(process.argv[2]).then(null, console.log);
