module.exports = function average(...args) {
       let sum = 0;
       args.forEach(function (value) {
            sum += value;
        });
        return sum/args.length;
   };
/*
module.exports = (...args) => {
        var sum = args.reduce((soFar, value) => soFar + value, 0);
        return sum / args.length;
    };

*/
