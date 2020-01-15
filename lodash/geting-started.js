const _ = require("lodash");

const worker = function (users) {
    return _.filter(users, {active: true});
};

module.exports = worker;
