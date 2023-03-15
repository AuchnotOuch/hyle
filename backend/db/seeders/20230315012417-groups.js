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
    const groups = []
    const familyGroupNames = ["The Fam", "Family Group", "Our Family"]
    const favorites = ["Inner Circle", "Besties", "Gamerz", "Work Family", "Squad"]
    const otherGroups = ["?????", "Super Secret Group", "Group Project", "For a good time"]
    const activityLevels = ["inactive", "low", "medium", "high"]

    for (let i = 1; i <= 20; i++) {
      const familyGroup = {
        name: familyGroupNames[Math.floor(Math.random() * 3)],
        activityLevel: activityLevels[Math.floor(Math.random() * 4)],
        ownerId: i
      }

      const favoriteGroup = {
        name: favorites[Math.floor(Math.random() * 3)],
        activityLevel: activityLevels[Math.floor(Math.random() * 4)],
        ownerId: i
      }

      const otherGroup = {
        name: otherGroups[Math.floor(Math.random() * 3)],
        activityLevel: activityLevels[Math.floor(Math.random() * 4)],
        ownerId: i
      }

      groups.push(familyGroup, favoriteGroup, otherGroup)
    }
    await queryInterface.bulkInsert('Groups', groups, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Groups', null, {})
  }
};
