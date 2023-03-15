'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Institutions', [
      {
        name: "City of Stagira",
        activityLevel: "high",
        ownerId: 1
      },
      {
        name: "Hyle Corp",
        activityLevel: "high",
        ownerId: 6
      },
      {
        name: "Stagucci",
        activityLevel: "medium",
        ownerId: 34
      },
      {
        name: "Tasty Tacos",
        activityLevel: "medium",
        ownerId: 22
      },
      {
        name: "Stagira for Climate Action",
        activityLevel: "medium",
        ownerId: 12
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Institutions', null, {})
  }
};
