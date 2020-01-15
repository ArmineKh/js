var _ = require("lodash");

    var worker = function(item) {
      var template = "Hello <%= name %> (logins: <%= login.length %>)";
      return _.template(template)(item);
    };

    module.exports = worker;
