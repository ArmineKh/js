const max = +process.argv[2];
let FizzBuzz = function*(){
  let num = 1;
  while (num<=max) {
    let value = num;
    num++;
    if (value % (3 * 5) === 0) {
      value = 'FizzBuzz';
    } else if (value % 3 === 0) {
      value = 'Fizz';
    } else if (value % 5 === 0) {
      value = 'Buzz';
    }
    yeild value;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}


/*let FizzBuzz = {
  [Symbol.iterator]() {
    let num = 1;
    return {
      next() {
        if (num > max) {
          return { done: true };
        }
        let value = num;
        if (value % (3 * 5) === 0) {
          value = 'FizzBuzz';
        } else if (value % 3 === 0) {
          value = 'Fizz';
        } else if (value % 5 === 0) {
          value = 'Buzz';
        }
        num++;
        return { done: false, value: value };
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}
*/
