const _ = require("lodash");

const worker = function (users) {

    var result = [];
    var orders = _.groupBy(users, "article");

    _.forEach(orders, function (item, num) {
      num = parseInt(num);
      var total = _.reduce(item, function(sum, item){
        return sum + item.quantity;
      }, 0);

        result.push({
            article: num,
            total_orders: total
        });
    });

    return _.sortBy(result, "total_orders").reverse();
  };

module.exports = worker;
