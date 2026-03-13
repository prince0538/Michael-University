'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Staffs', {
      StaffId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      StaffName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      staffCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Gender: {
        allowNull: false,
        type: Sequelize.ENUM('Female', 'Male')
      },
      qualifications: {
        allowNull: false,
        type: Sequelize.STRING
      },
      facultyId: {
        allowNull: false,
        type:Sequelize.UUID,
        references: {
          model: "Faculties",
          key: "facultyId"
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Staffs');
  }
};