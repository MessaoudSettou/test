var DataTypes = require("sequelize").DataTypes;
var _visits = require("./visits");

function initModels(sequelize) {
  var visits = _visits(sequelize, DataTypes);


  return {
    visits,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
