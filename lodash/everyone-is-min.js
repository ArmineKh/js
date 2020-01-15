const _ = require("lodash");

const worker = function (towns) {
  const result = {
      hot: [],
      warm: []
  }
  _.forEach(towns, function(towns, town){
    if(_.every(towns, (town)=> town>19)){
      result.hot.push(town);
    } else if (_.some(towns, (town)=> town>19)) {
      result.warm.push(town);
    }
  });

    return result;
};

module.exports = worker;
