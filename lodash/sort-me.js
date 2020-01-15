const _ = require("lodash");

const worker = function (users) {
  const usersasc = _.sortBy(users, ['quantity']);
    return _.reverse(usersasc, 'quantity');
};

module.exports = worker;


// const _ = require("lodash");

    // const sorting = function (collection) {
    //     return _.sortBy(collection, item => -item.quantity);
    //
    //     /* Also possible:
    //      return _.sortBy(collection,"quantity").reverse();
    //      */
    // };
    //
    // module.exports = sorting;
