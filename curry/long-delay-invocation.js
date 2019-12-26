let sum = 0;
var binary = function (a) {
    if (a === undefined) {
      let result = sum;
      return result
    }else{
      sum += a;
      return binary;
    }
    }

  module.exports = binary;
