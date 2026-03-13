'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Faculties', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      facultyName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dean: {
        allowNull: false,
        type: Sequelize.STRING
      },
      facultyCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dateCreated: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Faculties');
  }
};