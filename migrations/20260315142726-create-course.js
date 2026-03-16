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
        type: Sequelize.STRING,
        allowNull: false
      },
      departmentName: {
        depName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lecturerName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      facultyId: {
        allowNull: false,
        type:Sequelize.UUID,
        foreignKey:true,
        references: {
          model: "Faculties",
          key: "id"
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
    }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courses');
  }
};