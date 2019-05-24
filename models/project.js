'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    name: DataTypes.STRING,
    key: DataTypes.STRING,
    description: DataTypes.STRING,

  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsTo(models.Status,{
      foreignKey: {
        allowNull: false
      }
    });
    Project.belongsTo(models.Client,{
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Project;
};
