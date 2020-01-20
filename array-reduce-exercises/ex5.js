// 5) Given an array of arrays, flatten them into a single array
function flatten(arr){
  // your code here
  return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b)
  , []);
}


var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
// Note: Take a look at Array.concat() to help with this one
