// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
   // your code here
   return arr.reduce(function(sum, current) {
     return sum + current;
   });
}

console.log(total([1,2,3]));  // 6
