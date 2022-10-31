'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'phoneNum', {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('Users', 'phoneNum');
  }
};
