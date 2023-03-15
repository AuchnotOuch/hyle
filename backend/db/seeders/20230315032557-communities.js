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
    const communities = [
      {
        name: "City of Stagira",
        type: "verified",
        activityLevel: "high",
        ownerId: 1
      },
      {
        name: "Cat Lovers",
        type: "open",
        activityLevel: "high",
        ownerId: 6
      },
      {
        name: "Introverts Unite",
        type: "open",
        activityLevel: "medium",
        ownerId: 11
      },
      {
        name: "AFK",
        type: "closed",
        activityLevel: "low",
        ownerId: 16
      },
      {
        name: "AA",
        type: "closed",
        activityLevel: "high",
        ownerId: 21
      },
      {
        name: "Windows 8 Lovers",
        type: "open",
        activityLevel: "inactive",
        ownerId: 26
      },
      {
        name: "Willow Creek Neighborhood",
        type: "closed",
        activityLevel: "medium",
        ownerId: 31
      }
    ]

    await queryInterface.bulkInsert('Communities', communities, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Communities', null, {})
  }
};
