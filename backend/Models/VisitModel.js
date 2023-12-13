const sequelize = require('../DbConnection');
const { DataTypes } = require('sequelize');

  const Visits = sequelize.define('visits', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey : true ,
      allowNull: false
    },
    members: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    guests: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'visits',
    timestamps: false
  });
  

module.exports  = Visits ;
