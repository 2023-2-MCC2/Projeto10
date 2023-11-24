const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Picture = sequelize.define('Picture', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  src: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Picture;
