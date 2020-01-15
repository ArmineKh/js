const _ = require("lodash");

const worker = function (words) {

    return _.chain(words)
    .map(function(word){return word + "chained"})
    .map(function(word){return word.toUpperCase()})
    .sortBy()
    .value();
};

module.exports = worker;

//
// const _ = require("lodash");
//
//    var wordsmodify = function (arr) {
//        return _.chain(arr)
//          .map(item => item + 'Chained')
//          .map(item => item.toUpperCase())
//          .sortBy()
//          .value();
//    };
//
//    module.exports = wordsmodify;
