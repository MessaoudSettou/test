const { DataTypes } = require('sequelize');
const sequelize = require('../DbConnection');

const User = sequelize.define('User', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  } ,
  },{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

module.exports = User;
