'use strict';

const { defaultValueSchemable } = require('sequelize/lib/utils');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Departments', {
      DepartmentId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      depName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      depCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Hod: {
        type: Sequelize.STRING,
        allowNull: false
      },
      facultyId: {
        allowNull: false,
        type:Sequelize.UUID,
        references: {
          model: "Faculties",
          key: "facultyId"
        }
          
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
    await queryInterface.dropTable('Departments');
  }
};