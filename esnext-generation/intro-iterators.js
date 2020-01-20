module.exports = function makeCounter(someObj) {
  let num = 0;
  let done = false;

  someObj.next = function() {

    if (num < 10) {
      num++;
    } else {
      done = true;
    }

    return {
      value: num,
      done: done
    }

  }
}
