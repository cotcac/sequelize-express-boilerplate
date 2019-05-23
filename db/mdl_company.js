const Sequelize = require('sequelize');
const db = require('../lib/connect');
const Company = db.define('Company', {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
  });
module.exports = Company; 