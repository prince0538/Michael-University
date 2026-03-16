'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studentTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     models.Faculty.belongsTo(models.Faculty, {foreignKey: "departmentId", as: "department"})
    }
  }
  studentTable.init({
    matricNumber: DataTypes.INTEGER,
    studentName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'studentTable',
  });
  return studentTable;
};