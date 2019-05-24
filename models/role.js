'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    name: DataTypes.STRING,
    short_cut: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  return Role;
};
