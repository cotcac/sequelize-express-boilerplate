'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    company_name: DataTypes.STRING,
    address:DataTypes.STRING,
    skype:DataTypes.STRING,
    phone:DataTypes.STRING,

  }, {});
  return Client;
};
