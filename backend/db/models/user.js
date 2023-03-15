'use strict';
const {
  Model, Validator
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(
        models.Group,
        {
          foreignKey: 'ownerId'
        }
      )
      User.hasMany(
        models.Community,
        {
          foreignKey: 'ownerId'
        }
      )
      User.hasMany(
        models.Institution,
        {
          foreignKey: 'ownerId'
        }
      )
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error("Cannot be an email.")
          }
        }
      }
    },
    displayName: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256],
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [8, 30]
      }
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    activityLevel: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
