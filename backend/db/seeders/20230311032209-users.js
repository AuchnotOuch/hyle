'use strict';

const bcrypt = require('bcrypt');
const faker = require('faker')

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
    const hashedPassword = await bcrypt.hash('password123', 10);

    // Generate 100 families of varying sizes
    const users = [];
    for (let i = 0; i < 20; i++) {
      const familyLastName = faker.name.lastName();
      // const familySize = Math.floor(Math.random() * 30) + 1; // Random family size between 1 and 30
      const familySize = 5;

      for (let j = 1; j <= familySize; j++) {
        const firstName = faker.name.firstName();
        const userName = `${firstName.toLowerCase()}${familyLastName.toLowerCase()}${j}`; // Generate unique username
        const displayName = `${firstName} ${familyLastName}`;
        const email = `${userName}@example.com`; // Generate unique email
        const password = hashedPassword;

        users.push({
          firstName,
          lastName: familyLastName,
          userName,
          displayName,
          email,
          password
        });
      }
    }

    // Insert data into the Users table
    await queryInterface.bulkInsert('Users', users, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});

  }
};
