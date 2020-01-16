module.exports = function important(val, imp = val.length) {
       return val + "!".repeat(`${imp}`);
   };


/*
module.exports =
    (string, bangs = string.length) => string + "!".repeat(bangs);

*/
