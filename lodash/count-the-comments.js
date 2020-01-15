const _ = require("lodash");

const worker = function (users) {

    var result = [];
    var comments = _.groupBy(users, "username");

    _.forEach(comments, function (item, name) {

        result.push({
            username: name,
            comment_count: _.size(item)
        });
    });

    return _.sortBy(result, "comment_count").reverse();
  };

module.exports = worker;

/*
   Alternative solution with use of 'chain':

   var commentcount = function(comments) {

       return _.chain(comments)
       .groupBy("username")
       .map(function(item, name) {
           return {username: name, comment_count: _.size(item)};
       })
       .sortBy(function(counted) {
           return -counted["comment_count"];
       });
   };
   */
