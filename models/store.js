const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Store = sequelize.define('store', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  quantity: Sequelize.INTEGER
});

module.exports = Store;