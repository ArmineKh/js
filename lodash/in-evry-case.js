const _ = require("lodash");

const worker = function (users) {

    return _.forEach(users, function(user){
      if(user.population > 1){ user.size = 'big';}
      else if (user.population > 0.5) { user.size = 'med';}
      else {user.size = 'small';}
    });
};

module.exports = worker;
