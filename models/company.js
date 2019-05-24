'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    name: DataTypes.STRING,
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
    Company.hasMany(models.Employee,{
      foreignKey: 'companyId',
      as: 'employees'
    })
  };
  return Company;
};
