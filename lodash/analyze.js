var _ = require("lodash");

    var worker = function(users) {
       let average;
       let underperform;
       let overperform;

       let  item = _.sortBy(users, "income");

       average = _.reduce(item, function(sum, num) {
           return sum + num.income;
       }, 0);

       average = average / item.length;

       underperform = _.filter(item, function (num) {
           return num.income <= average;
       });

       overperform = _.filter(item, function (num) {
           return num.income > average;
       });

       return {
           average: average,
           underperform: underperform,
           overperform: overperform
       };
    };

    module.exports = worker;
