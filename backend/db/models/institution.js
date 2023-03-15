'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Institution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Institution.belongsTo(
        models.User,
        {
          foreignKey: 'ownerId'
        }
      )
    }
  }
  Institution.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 60]
      }
    },
    activityLevel: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    }
  }, {
    sequelize,
    modelName: 'Institution',
  });
  return Institution;
};
