'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentcourseTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentcourseTable.init({
    studentName: DataTypes.STRING,
    courseName: DataTypes.STRING,
    courseCode: DataTypes.STRING,
    mark: DataTypes.INTEGER,
    remark: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StudentcourseTable',
  });
  return StudentcourseTable;
};