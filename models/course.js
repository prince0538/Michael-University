'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    static associate(models) {

      models.course.belongsTo(models.Department, {
        foreignKey: "departmentId",
        as: "department"
      });

      models.course.belongsTo(models.Staff, {
        foreignKey: "lecturerId",
        as: "lecturer"
      });
    }
  }

  course.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    courseName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    courseCode: {
      type: DataTypes.STRING,
      allowNull: false
    },

    departmentName: {
      type: DataTypes.STRING
    },

    lecturerName: {
      type: DataTypes.STRING
    },

    departmentId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    lecturerId: {
      type: DataTypes.UUID,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'course',
    tableName: 'courses'
  });

  return course;
};