module.exports = function *generate(isEven) {
     let number;
     if (isEven) {
       number = 0;
     } else {
       number = -1;
     }
     while (true) {
       number += 2;
       yield number;
     }

   }
