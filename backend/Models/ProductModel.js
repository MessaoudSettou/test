const { DataTypes } = require('sequelize');
const sequelize = require('../DbConnection');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true 
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
},{
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});
module.exports = Product;
