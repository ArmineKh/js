module.exports = function generate(isEven) {
     // return an Iterator for even numbers if isEven is true
     // or, return an Iterator for odd numbers if isEven is false
     // If `.next(swap)` receives `true`, swap between even <-> odd
     let number;
     if (isEven) {
       number = 0;
     } else {
       number = -1;
     }
     let iterator = {
       next: function(swap){
         if (swap) {
           number += 1;
         }else {
           number += 2;
         }
         return{
           value: number
         }
       }
     }
     return iterator;
   }
