'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    skype: DataTypes.STRING,
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
    Contact.belongsTo(models.Client,{
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Contact;
};
