'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(30),
      },
      lastName: {
        type: Sequelize.STRING(30),
      },
      username: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
      },
      displayName: {
        type: Sequelize.STRING(30)
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(30)
      },
      activityLevel: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
