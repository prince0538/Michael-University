'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },

      courseName: {
        allowNull: false,
        type: Sequelize.STRING
      },

      courseCode: {
        allowNull: false,
        type: Sequelize.STRING
      },

      departmentName: {
        allowNull: false,
        type: Sequelize.STRING
      },

      lecturerName: {
        allowNull: false,
        type: Sequelize.STRING
      },

      DepartmentId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Departments',
          key: "DepartmentId"
        },

      LecturerId: {
        allownull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Staffs',
          key: 'StaffId'
        }
      }  
      },

      createdAt: {
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
    await queryInterface.dropTable('courses');
  }
};