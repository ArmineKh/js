module.exports = function filterForNumbers(iterable) {
     // loop over iterable, adding numeric values to a new array
     // then return the new array of numbers
     let result = [];
     for(var i of iterable) {
      if (typeof i === 'number') {
        result.push(i);
      }
    }
    return result;
   }
