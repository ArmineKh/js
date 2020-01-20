// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
   // your code here
   return arr.reduce(function(concat, current) {
     return concat.toString() + current.toString();
   });
}

console.log(stringConcat([1,2,3])); // "123"
