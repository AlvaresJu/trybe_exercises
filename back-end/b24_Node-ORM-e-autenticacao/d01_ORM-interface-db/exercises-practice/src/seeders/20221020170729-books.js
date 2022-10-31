'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        page_quantity: 904,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        page_quantity: 288,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        page_quantity: 180,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel Garcia Marquez',
        page_quantity: 417,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
