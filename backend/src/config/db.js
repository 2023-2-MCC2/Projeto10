const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('eco', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;