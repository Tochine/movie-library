'use strict';

/** @type {import('sequelize-cli').Migration} */
const names = ["drama", "comedy", "tragedy", "scifi"];
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     return queryInterface.bulkInsert('categories', names.map(x => ({
      name: x,
      createdAt: new Date(),
      updatedAt: new Date()
     })));
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('categories', null, {})
  }
};
