function all(promise1, promise2){

let counter = 0;
let arr = [];
let promise = new Promise(function(resolve, reject){
  function increment(val) {
    counter += 1;
    arr.push(val);
    if (counter === 2) {
      resolve(arr);
    }
  }
  Promise.resolve(promise1).then(increment);
  Promise.resolve(promise2).then(increment);
})
return promise;
}

   all(getPromise1(), getPromise2()).then(console.log);
