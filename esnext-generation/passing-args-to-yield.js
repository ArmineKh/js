module.exports = function *multiplier() {
  let num = 0;
  let reset = 1;

     while(true) {
       num += 1;
       reset = yield num * reset;
       if (!reset) {
        reset = 1;
       }
     }

    }
